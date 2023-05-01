import { AsyncPipe, NgFor, NgIf, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExcerciseRowsComponent } from '@app/components/excercise-rows.component';
import { GroupedExcerciseRowsComponent } from '@app/components/grouped-excercise-rows.component';
import { PersonalRecordComponent } from '@app/components/personal-record.component';
import { ExcerciseRow } from '@app/models/excercise-row.model';
import { GroupedLog } from '@app/models/grouped-log.model';
import { IfNullEmptyArrayPipe } from '@app/pipes/if-null-empty-array.pipe';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, Observable, combineLatest, of } from 'rxjs';

import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';

import * as R from 'remeda';

import * as dayjs from 'dayjs';
import * as customParseFormat from 'dayjs/plugin/customParseFormat';
import * as weekOfYear from 'dayjs/plugin/weekOfYear';

import { filter, finalize, map, pairwise, startWith, take, tap } from 'rxjs/operators';

import { type ExcerciseName, MUSCLE_GROUP_PER_EXCERCISE } from '@models/constants';
import { ExcerciseLogApiService } from '@services/excercise-log-api.service';
import { parseAndCompare } from '@helpers/date.helper';

dayjs.extend(customParseFormat);
dayjs.extend(weekOfYear);

interface Excercise {
  name: string;
  type: string;
}

@Component({
  selector: 'app-excercise-logs-page',
  template: `
    <!-- #region FILTERS -->
    <div class="container my-4">
      <div class="row mb-2">
        <!-- #region DROPDOWN TYPE -->
        <div class="col-6">
          <div ngbDropdown class="d-flex justify-content-center">
            <button type="button" class="btn btn-outline-primary w-100" ngbDropdownToggle>
              {{ selectedType$ | async | titlecase }}
            </button>
            <div ngbDropdownMenu class="w-100">
              <button ngbDropdownItem (click)="selectedTypeSubject.next(null)">Clear filter</button>
              <button ngbDropdownItem *ngFor="let type of types" (click)="selectedTypeSubject.next(type)">
                {{ type | titlecase }}
              </button>
            </div>
          </div>
        </div>
        <!-- #endregion -->

        <!-- #region DROPDOWN EXCERCISE -->
        <div class="col-6">
          <div ngbDropdown class="d-flex justify-content-center">
            <button type="button" class="btn btn-outline-primary w-100" ngbDropdownToggle>
              {{ selectedExcercise$ | async | titlecase }}
            </button>
            <div ngbDropdownMenu class="w-100">
              <button ngbDropdownItem (click)="selectedExcerciseSubject.next(null)">Clear filter</button>
              <button ngbDropdownItem *ngFor="let excercise of excercises$ | async" (click)="selectedExcerciseSubject.next(excercise)">
                {{ excercise | titlecase }}
              </button>
            </div>
          </div>
        </div>
        <!-- #endregion -->
      </div>

      <div class="row mb-2">
        <!-- #region DROPDOWN NAME -->
        <div class="col-12">
          <div ngbDropdown class="d-flex justify-content-center">
            <button type="button" class="btn btn-outline-primary w-100" ngbDropdownToggle>
              {{ selectedUsername$ | async | titlecase }}
            </button>
            <div ngbDropdownMenu class="w-100">
              <button ngbDropdownItem (click)="selectedUsernameSubject.next(null)">Clear filter</button>
              <button ngbDropdownItem *ngFor="let username of usernames" (click)="selectedUsernameSubject.next(username)">
                {{ username | titlecase }}
              </button>
            </div>
          </div>
        </div>
        <!-- #endregion -->
      </div>

      <div class="row">
        <div class="col-12">
          <div class="form-check form-switch d-flex align-items-center gap-1">
            <input class="form-check-input" type="checkbox" role="switch" [(ngModel)]="isGrouped" />
            <label class="form-check-label">Grouped</label>
          </div>
        </div>
      </div>
    </div>
    <!-- #endregion -->

    <div *ngIf="!isLoading; else loadingSpinner" [style.marginBottom.rem]="5">
      <div class="container" *ngIf="isGrouped">
        <app-personal-record class="mb-5" [personalRecord]="personalRecord$ | async"></app-personal-record>

        <h5>Log History</h5>
        <app-grouped-excercise-rows [groupedExcerciseLogs]="groupedLogs$ | async | ifNullEmptyArray"> </app-grouped-excercise-rows>
      </div>

      <div class="container" *ngIf="!isGrouped">
        <app-personal-record class="mb-5" [personalRecord]="personalRecord$ | async"></app-personal-record>

        <h5>Log History</h5>
        <app-excercise-rows [excerciseRows]="excerciseRows$ | async | ifNullEmptyArray"></app-excercise-rows>
      </div>
    </div>

    <ng-template #loadingSpinner>
      <div class="d-flex justify-content-center align-items-center p-3">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </ng-template>
  `,
  styles: [``],
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    AsyncPipe,
    TitleCasePipe,
    FormsModule,
    NgbDropdownModule,
    PersonalRecordComponent,
    GroupedExcerciseRowsComponent,
    ExcerciseRowsComponent,
    IfNullEmptyArrayPipe,
  ],
})
export class ExcerciseLogsPageComponent {
  public excerciseRowsSubject: BehaviorSubject<ExcerciseRow[]> = new BehaviorSubject<ExcerciseRow[]>([]);
  public excerciseRows$: Observable<ExcerciseRow[]>;

  public types: string[] = [];
  public selectedTypeSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  public selectedType$: Observable<string>;

  public excercisesSubject: BehaviorSubject<Excercise[]> = new BehaviorSubject<Excercise[]>([]);
  public excercises$: Observable<string[]>;
  public selectedExcerciseSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  public selectedExcercise$: Observable<string>;

  public usernames: string[] = [];
  public selectedUsernameSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  public selectedUsername$: Observable<string>;

  public groupedLogsSubject: BehaviorSubject<GroupedLog[]> = new BehaviorSubject<GroupedLog[]>([]);
  public groupedLogs$: Observable<GroupedLog[]>;

  public personalRecord$: Observable<ExcerciseRow | null>;

  public isGrouped: boolean = false;
  public isLoading: boolean = true;

  public constructor(private readonly excerciseLogApiService: ExcerciseLogApiService, private readonly serviceWorkerUpdates: SwUpdate) {
    this.serviceWorkerUpdates.versionUpdates
      .pipe(
        filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY'),
        take(1)
      )
      .subscribe(() => {
        document.location.reload();
      });

    this.selectedType$ = this.selectedTypeSubject.pipe(
      startWith(null),
      pairwise(),
      tap(([oldValue, currentValue]) => {
        if (oldValue === currentValue || !currentValue) {
          return;
        }
        const selectedExcercise = this.selectedExcerciseSubject.value;
        const selectedExcerciseType = this.excerciseRowsSubject.value.find(x => x.excerciseName === selectedExcercise)?.type;

        if (currentValue != selectedExcerciseType) {
          this.selectedExcerciseSubject.next(null);
        }
      }),
      map(([, currentValue]) => currentValue ?? 'Type')
    );

    this.selectedExcercise$ = this.selectedExcerciseSubject.pipe(map(x => x ?? 'Excercise'));

    this.selectedUsername$ = this.selectedUsernameSubject.pipe(map(x => x ?? 'Username'));

    this.excercises$ = combineLatest([this.excercisesSubject, this.selectedTypeSubject]).pipe(
      map(([excercises, selectedType]) => (!selectedType ? excercises : excercises.filter(x => x.type === selectedType))),
      map(x => x.map(x => x.name))
    );

    this.excerciseRows$ = combineLatest([
      this.excerciseRowsSubject,
      this.selectedExcerciseSubject,
      this.selectedTypeSubject,
      this.selectedUsernameSubject,
    ]).pipe(
      map(([rows, selectedExcercise, selectedTypeSubject, selectedUsername]) => {
        let result = rows;

        if (selectedTypeSubject) {
          result = R.filter(result, x => x.type === selectedTypeSubject);
        }

        if (selectedExcercise) {
          result = R.filter(result, x => x.excerciseName === selectedExcercise);
        }

        if (selectedUsername) {
          result = R.filter(result, x => x.username === selectedUsername);
        }

        return result;
      })
    );

    this.groupedLogs$ = combineLatest([
      this.groupedLogsSubject,
      this.selectedExcerciseSubject,
      this.selectedTypeSubject,
      this.selectedUsernameSubject,
    ]).pipe(
      map(([groups, selectedExcercise, selectedType, selectedUsername]) => {
        const result = R.pipe(
          groups,
          R.map(([date, valuesByDate]) => {
            const filteredValuesByDate = R.pipe(
              valuesByDate,
              R.filter(([username]) => (!selectedUsername ? true : selectedUsername === username)),
              R.map(([username, valuesByUsername]) => {
                const filteredValuesByUsername = R.pipe(
                  valuesByUsername,
                  R.filter(([_excercise, row]) => (!selectedType ? true : row.type === selectedType)),
                  R.filter(([excercise]) => (!selectedExcercise ? true : excercise === selectedExcercise)),
                  R.filter(x => x.length > 0)
                );

                return [username, filteredValuesByUsername] as const;
              }),
              R.filter(([_, x]) => x.length > 0)
            );

            return [date, filteredValuesByDate] as const;
          }),
          R.filter(([_, x]) => x.length > 0)
        );

        return result;
      })
    );

    this.personalRecord$ = combineLatest([this.selectedUsernameSubject, this.selectedExcerciseSubject]).pipe(
      map(([username, excercise]) =>
        username && excercise ? getPersonalRecord(this.excerciseRowsSubject.value, excercise, username) : null
      )
    );
  }

  public ngOnInit(): void {
    this.isLoading = true;
    this.excerciseLogApiService
      .getExcerciseLogs()
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe(excerciseLogs => {
        const groupedLogs = R.pipe(
          excerciseLogs,
          R.groupBy(x => x.date),
          R.mapValues((x, date) =>
            R.pipe(
              x,
              R.groupBy(y => y.user),
              R.mapValues((y, username) =>
                R.pipe(
                  y,
                  R.groupBy(z => z.name),
                  R.mapValues((series, excerciseName) => ({
                    date: date.toString(),
                    username: username.toString(),
                    excerciseName: excerciseName.toString(),
                    type: R.first(series).type,
                    series: [...series],
                    highlighted: series.every(x => x.weightKg === R.first(series).weightKg)
                      ? series.every(x => x.reps >= 12)
                        ? ('green' as const)
                        : series.every(x => x.reps >= 8)
                        ? ('yellow' as const)
                        : null
                      : null,
                    muscleGroup: MUSCLE_GROUP_PER_EXCERCISE[excerciseName as ExcerciseName],
                    total: series.every(x => x.weightKg === R.first(series).weightKg) ? R.sumBy(series, x => x.reps) : null,
                  })),
                  R.toPairs
                )
              ),
              R.toPairs
            )
          ),
          R.toPairs,
          R.sort(([a], [b]) => parseAndCompare(a, b))
        );

        this.groupedLogsSubject.next(groupedLogs);

        const excerciseRows = R.pipe(
          groupedLogs,
          R.flatMap(([_, v]) => v.flatMap(([_, vv]) => vv.flatMap(([_, vvv]) => vvv))),
          R.sort((a, b) => parseAndCompare(a.date, b.date))
        );

        // const x = R.pipe(
        //   excerciseRows,
        //   R.groupBy(row => dayjs(row.date, 'DD/MM/YYYY').week()),
        //   R.mapValues(x =>
        //     R.pipe(
        //       x,
        //       R.groupBy(y => y.username),
        //       R.mapValues(y => R.pipe(
        //         y,
        //         R.groupBy(z => z.muscleGroup),
        //         R.mapValues(h => R.pipe(
        //           h,
        //           R.map(x => x.series.length),
        //           R.sumBy(g => g)
        //         ))
        //       )),
        //     )
        //   )
        // );

        this.excerciseRowsSubject.next(excerciseRows);

        this.types = R.pipe(
          excerciseLogs,
          R.map(x => x.type),
          R.uniq()
        );

        this.usernames = R.pipe(
          excerciseLogs,
          R.map(x => x.user),
          R.uniq()
        );

        const excercises = R.pipe(
          excerciseLogs,
          R.map(x => ({ name: x.name, type: x.type })),
          R.uniqBy(x => x.name)
        );

        this.excercisesSubject.next(excercises);
      });
  }
}

function getPersonalRecord(rows: ExcerciseRow[], excerciseName: string, username: string): ExcerciseRow | null {
  const result = R.pipe(
    rows,
    R.filter(x => x.username === username && x.excerciseName === excerciseName),
    R.sort(
      (a, b) =>
        R.first(R.sort(b.series, (aa, bb) => bb.weightKg - aa.weightKg))!.weightKg -
        R.first(R.sort(a.series, (aa, bb) => bb.weightKg - aa.weightKg))!.weightKg
    ),
    R.first()
  );

  return result ?? null;
}
