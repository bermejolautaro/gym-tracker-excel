import{A as j,B as $,C as F,D as P,E as De,F as Ne,G as Be,H as Le,I as je,J as $e,c as R,d as b,e as D,g as ie,h as ve,i as we,j as ye,k as be,m as Ee,r as Ce,s as Re,t as Se,u as Te,v as Ie,w as Ae,x as N,y as B,z as L}from"./chunk-R4RE4ILD.js";import{$ as p,A as me,Aa as Z,Ba as ee,Da as te,Ea as _e,F as ue,G as v,J as ge,La as T,Ma as C,N as q,Na as I,O as z,Pa as he,Qa as A,T as s,Z as l,_ as fe,aa as c,b as X,ba as r,c as S,ca as h,da as K,fa as E,g as y,ga as u,h as V,ja as Y,m as oe,ma as d,n as re,oa as _,pa as xe,q as ce,r as se,sa as w,t as ae,u as pe,va as g,w as le,wa as f,z as de}from"./chunk-KV3LPJFH.js";import"./chunk-LWEHNFHP.js";function W(e){return e}var Fe=(()=>{let t=class{transform(a){return a??[]}},e=t;return(()=>{t.\u0275fac=function(o){return new(o||t)}})(),(()=>{t.\u0275pipe=ge({name:"ifNullEmptyArray",type:t,pure:!0,standalone:!0})})(),e})();function Ve(e,t){e&1&&h(0,"i",8)}function He(e,t){if(e&1&&(c(0,"div",6),d(1),g(2,"titlecase"),l(3,Ve,1,0,"i",7),r()),e&2){let i=u(2);Y("font-size",1,"rem"),s(1),_(" ",f(2,4,i.excerciseRow.excerciseName)," "),s(2),p("ngIf",i.showStar)}}function Qe(e,t){if(e&1&&(c(0,"div",4),l(1,He,4,6,"div",5),r()),e&2){let i=u();p("ngClass",i.showDate&&i.showUsername?"fw-semibold":null),s(1),p("ngIf",i.showExcercise)}}function qe(e,t){if(e&1&&(c(0,"div",9),d(1),g(2,"titlecase"),r()),e&2){let i=u();Y("font-size",.8,"rem"),s(1),xe(" ",i.excerciseRow.date," - ",f(2,4,i.excerciseRow.username)," ")}}var k=(()=>{let t=class{constructor(){this.showStar=!1,this.showExcercise=!0,this.showDate=!0,this.showUsername=!0}},e=t;return(()=>{t.\u0275fac=function(o){return new(o||t)}})(),(()=>{t.\u0275cmp=v({type:t,selectors:[["app-excercise-row-title"]],inputs:{showStar:"showStar",showExcercise:"showExcercise",showDate:"showDate",showUsername:"showUsername",excerciseRow:"excerciseRow"},standalone:!0,features:[w],decls:4,vars:2,consts:[[1,"w-100"],["class","row w-100 pb-1",3,"ngClass",4,"ngIf"],[1,"row"],["class","col d-flex text-muted",3,"fontSize",4,"ngIf"],[1,"row","w-100","pb-1",3,"ngClass"],["class","col d-flex align-items-center gap-1",3,"fontSize",4,"ngIf"],[1,"col","d-flex","align-items-center","gap-1"],["class","fa fa-star",4,"ngIf"],[1,"fa","fa-star"],[1,"col","d-flex","text-muted"]],template:function(o,n){o&1&&(c(0,"div",0),l(1,Qe,2,2,"div",1),c(2,"div",2),l(3,qe,3,6,"div",3),r()()),o&2&&(s(1),p("ngIf",n.excerciseRow),s(2),p("ngIf",n.showDate))},dependencies:[I,T,A],styles:["[_nghost-%COMP%]{display:flex;flex:1}"],changeDetection:0})})(),e})();function ze(e,t){if(e&1&&(c(0,"tr",4)(1,"td",5),d(2),r(),c(3,"td",6),d(4),r(),c(5,"td",6),d(6),r()()),e&2){let i=t.$implicit;s(2),_("Serie ",i.serie,""),s(2),_("",i.reps," reps"),s(2),_("",i.weightKg,"kg")}}function Ke(e,t){if(e&1&&(c(0,"tr",4)(1,"td",5),d(2,"Total"),r(),c(3,"td",6),d(4),r(),c(5,"td",6),d(6),r()()),e&2){let i=u(2);s(4),_("",i.excerciseRow.total," reps"),s(2),_("",i.excerciseRow.series[0].weightKg,"kg")}}function We(e,t){if(e&1&&(c(0,"tr",4)(1,"td",5),d(2,"Average"),r(),c(3,"td",6),d(4),r(),c(5,"td",6),d(6),r()()),e&2){let i=u(2);s(4),_("",i.excerciseRow.average," reps"),s(2),_("",i.excerciseRow.series[0].weightKg,"kg")}}function Je(e,t){if(e&1&&(c(0,"table",1)(1,"tbody"),l(2,ze,7,3,"tr",2),l(3,Ke,7,2,"tr",3),l(4,We,7,2,"tr",3),c(5,"tr",4)(6,"td",5),d(7,"Tonnage"),r(),c(8,"td",6),d(9,"\xA0"),r(),c(10,"td",6),d(11),r()()()()),e&2){let i=u();s(2),p("ngForOf",i.excerciseRow.series),s(1),p("ngIf",i.excerciseRow.total),s(1),p("ngIf",i.excerciseRow.average),s(7),_("",i.excerciseRow.tonnage,"kg")}}var U=(()=>{let t=class{},e=t;return(()=>{t.\u0275fac=function(o){return new(o||t)}})(),(()=>{t.\u0275cmp=v({type:t,selectors:[["app-excercise-row-body"]],inputs:{excerciseRow:"excerciseRow"},standalone:!0,features:[w],decls:1,vars:1,consts:[["class","table table-striped table-sm m-0",4,"ngIf"],[1,"table","table-striped","table-sm","m-0"],["class","row",4,"ngFor","ngForOf"],["class","row",4,"ngIf"],[1,"row"],[1,"fw-bold","col"],[1,"col","text-center"]],template:function(o,n){o&1&&l(0,Je,12,4,"table",0),o&2&&p("ngIf",n.excerciseRow)},dependencies:[C,I],changeDetection:0})})(),e})();function Xe(e,t){if(e&1&&h(0,"app-excercise-row-body",7),e&2){let i=u().$implicit;p("excerciseRow",i)}}function Ye(e,t){if(e&1&&(c(0,"div",4)(1,"h2",5)(2,"button",6),h(3,"app-excercise-row-title",7),r()(),c(4,"div",8)(5,"div",9),l(6,Xe,1,1,"ng-template"),r()()()),e&2){let i=t.$implicit;p("ngClass",i.highlighted?"accordion-highlight "+i.highlighted:null),s(3),p("excerciseRow",i)}}var Pe=(()=>{let t=class{constructor(){this.excerciseRows=[]}},e=t;return(()=>{t.\u0275fac=function(o){return new(o||t)}})(),(()=>{t.\u0275cmp=v({type:t,selectors:[["app-excercise-rows"]],inputs:{excerciseRows:"excerciseRows"},standalone:!0,features:[w],decls:4,vars:1,consts:[[1,"row","my-2"],[1,"col"],["ngbAccordion",""],["ngbAccordionItem","",3,"ngClass",4,"ngFor","ngForOf"],["ngbAccordionItem","",3,"ngClass"],["ngbAccordionHeader",""],["ngbAccordionButton",""],[3,"excerciseRow"],["ngbAccordionCollapse",""],["ngbAccordionBody",""]],template:function(o,n){o&1&&(c(0,"div",0)(1,"div",1)(2,"div",2),l(3,Ye,7,2,"div",3),r()()()),o&2&&(s(3),p("ngForOf",n.excerciseRows))},dependencies:[C,T,P,L,F,$,j,N,B,k,U],changeDetection:0})})(),e})();function Ze(e,t){if(e&1&&h(0,"app-excercise-row-body",14),e&2){let i=u().$implicit;p("excerciseRow",i[1])}}function et(e,t){if(e&1&&(c(0,"div",12)(1,"h2",5)(2,"button",6),h(3,"app-excercise-row-title",13),r()(),c(4,"div",9)(5,"div",10),l(6,Ze,1,1,"ng-template"),r()()()),e&2){let i=t.$implicit;p("ngClass",i[1].highlighted?"accordion-highlight "+i[1].highlighted:null),s(3),p("showUsername",!1)("showDate",!1)("excerciseRow",i[1])}}function tt(e,t){if(e&1&&(c(0,"div",2),l(1,et,7,4,"div",11),r()),e&2){let i=u().$implicit;s(1),p("ngForOf",i[1])}}function it(e,t){if(e&1&&(c(0,"div",4)(1,"h2",5)(2,"button",6)(3,"div",7)(4,"div",8),d(5),g(6,"titlecase"),r()()()(),c(7,"div",9)(8,"div",10),l(9,tt,2,1,"ng-template"),r()()()),e&2){let i=t.$implicit;s(5),_(" ",f(6,1,i[0])," ")}}function nt(e,t){if(e&1&&(c(0,"div",2),l(1,it,10,3,"div",3),r()),e&2){let i=u().$implicit;s(1),p("ngForOf",i[1])}}function ot(e,t){if(e&1&&(c(0,"div",4)(1,"h2",5)(2,"button",6)(3,"div",7)(4,"div",8),d(5),r()()()(),c(6,"div",9)(7,"div",10),l(8,nt,2,1,"ng-template"),r()()()),e&2){let i=t.$implicit;s(5),_(" ",i[0]," ")}}var Me=(()=>{let t=class{constructor(){this.groupedExcerciseLogs=[]}},e=t;return(()=>{t.\u0275fac=function(o){return new(o||t)}})(),(()=>{t.\u0275cmp=v({type:t,selectors:[["app-grouped-excercise-rows"]],inputs:{groupedExcerciseLogs:"groupedExcerciseLogs"},standalone:!0,features:[w],decls:4,vars:1,consts:[[1,"row","my-2"],[1,"col"],["ngbAccordion",""],["ngbAccordionItem","",4,"ngFor","ngForOf"],["ngbAccordionItem",""],["ngbAccordionHeader",""],["ngbAccordionButton",""],[1,"row","w-100"],[1,"col","d-flex","align-items-center","justify-content-center","text-center"],["ngbAccordionCollapse",""],["ngbAccordionBody",""],["ngbAccordionItem","",3,"ngClass",4,"ngFor","ngForOf"],["ngbAccordionItem","",3,"ngClass"],[3,"showUsername","showDate","excerciseRow"],[3,"excerciseRow"]],template:function(o,n){o&1&&(c(0,"div",0)(1,"div",1)(2,"div",2),l(3,ot,9,1,"div",3),r()()()),o&2&&(s(3),p("ngForOf",n.groupedExcerciseLogs))},dependencies:[C,P,L,F,$,j,N,B,A,T,U,k],changeDetection:0})})(),e})();function rt(e,t){if(e&1&&h(0,"app-excercise-row-body",7),e&2){let i=u();p("excerciseRow",i.personalRecord)}}var ke=(()=>{let t=class{},e=t;return(()=>{t.\u0275fac=function(o){return new(o||t)}})(),(()=>{t.\u0275cmp=v({type:t,selectors:[["app-personal-record"]],inputs:{personalRecord:"personalRecord"},standalone:!0,features:[w],decls:8,vars:2,consts:[["ngbAccordion",""],["ngbAccordionItem","",1,"accordion-highlight","light-blue"],["ngbAccordionHeader",""],["ngbAccordionButton",""],[3,"excerciseRow","showStar"],["ngbAccordionCollapse",""],["ngbAccordionBody",""],[3,"excerciseRow"]],template:function(o,n){o&1&&(c(0,"div",0)(1,"div",1)(2,"h2",2)(3,"button",3),h(4,"app-excercise-row-title",4),r()(),c(5,"div",5)(6,"div",6),l(7,rt,1,1,"ng-template"),r()()()()),o&2&&(s(4),p("excerciseRow",n.personalRecord)("showStar",!0))},dependencies:[k,U,P,L,F,$,j,N,B],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0})})(),e})();var ct=["typeaheadInput"],st=["instance"];function at(e,t){if(e&1){let i=K();c(0,"button",8),E("click",function(){let n=q(i).$implicit,m=u();return z(m.selectedTypeSubject.next(n))}),d(1),g(2,"titlecase"),r()}if(e&2){let i=t.$implicit;s(1),_(" ",f(2,1,i)," ")}}function pt(e,t){if(e&1){let i=K();c(0,"button",8),E("click",function(){let n=q(i).$implicit,m=u();return z(m.selectedExcerciseSubject.next(n))}),d(1),g(2,"titlecase"),r()}if(e&2){let i=t.$implicit;s(1),_(" ",f(2,1,i)," ")}}function lt(e,t){if(e&1){let i=K();c(0,"button",8),E("click",function(){let n=q(i).$implicit,m=u();return z(m.selectedUsernameSubject.next(n))}),d(1),g(2,"titlecase"),r()}if(e&2){let i=t.$implicit;s(1),_(" ",f(2,1,i)," ")}}function dt(e,t){if(e&1&&h(0,"app-personal-record",25),e&2){let i=t.ngIf;p("personalRecord",i)}}function mt(e,t){if(e&1&&(c(0,"div",22),l(1,dt,1,1,"app-personal-record",23),g(2,"async"),h(3,"app-grouped-excercise-rows",24),g(4,"ifNullEmptyArray"),g(5,"async"),r()),e&2){let i=u(2);s(1),p("ngIf",f(2,2,i.personalRecord$)),s(2),p("groupedExcerciseLogs",f(4,4,f(5,6,i.groupedLogs$)))}}function ut(e,t){if(e&1&&h(0,"app-personal-record",25),e&2){let i=t.ngIf;p("personalRecord",i)}}function gt(e,t){if(e&1&&(c(0,"div",22),l(1,ut,1,1,"app-personal-record",23),g(2,"async"),h(3,"app-excercise-rows",26),g(4,"ifNullEmptyArray"),g(5,"async"),r()),e&2){let i=u(2);s(1),p("ngIf",f(2,2,i.personalRecord$)),s(2),p("excerciseRows",f(4,4,f(5,6,i.excerciseRows$)))}}function ft(e,t){if(e&1&&(c(0,"div"),l(1,mt,6,8,"div",21),l(2,gt,6,8,"div",21),r()),e&2){let i=u();s(1),p("ngIf",i.isGrouped),s(1),p("ngIf",!i.isGrouped)}}function xt(e,t){e&1&&(c(0,"div",27)(1,"div",28)(2,"span",29),d(3,"Loading..."),r()()())}var ni=(()=>{let t=class{onExcerciseTypeaheadChange(a){this.selectedExcerciseSubject.next(a),this.typeaheadInput?.nativeElement.blur()}constructor(){this.excerciseRowsSubject=new S([]),this.types=[],this.selectedTypeSubject=new S(null),this.excercisesSubject=new S([]),this.selectedExcerciseSubject=new S(null),this.usernames=[],this.selectedUsernameSubject=new S(null),this.groupedLogsSubject=new S([]),this.isGrouped=!1,this.isLoading=!0,this.excerciseTypeAhead="",this.typeaheadInput=null,this.instance=null,this.focus$=new X,this.click$=new X,this.search=a=>{let o=a.pipe(se()),n=this.click$.pipe(ce(100),re(()=>!this.instance.isPopupOpen()),y(()=>"")),m=this.focus$;return oe(o,m,n).pipe(me(this.excercises$),y(([x,O])=>x===""?O:O.filter(G=>G.toLowerCase().includes(x.toLowerCase()))))},this.excerciseLogApiService=ue(Ce),this.selectedType$=this.selectedTypeSubject.pipe(le(null),pe(),de(([a,o])=>{if(a===o||!o)return;let n=this.selectedExcerciseSubject.value,m=this.excerciseRowsSubject.value.find(x=>x.excerciseName===n)?.type;o!=m&&this.selectedExcerciseSubject.next(null)}),y(([,a])=>a??"Type")),this.selectedExcercise$=this.selectedExcerciseSubject.pipe(y(a=>a??"Excercise")),this.selectedUsername$=this.selectedUsernameSubject.pipe(y(a=>a??"Username")),this.excercises$=V([this.excercisesSubject,this.selectedTypeSubject]).pipe(y(([a,o])=>o?a.filter(n=>n.type===o):a),y(a=>a.map(o=>o.name))),this.excerciseRows$=V([this.excerciseRowsSubject,this.selectedExcerciseSubject,this.selectedTypeSubject,this.selectedUsernameSubject]).pipe(y(([a,o,n,m])=>R(a,n?b(x=>x.type===n):W,o?b(x=>x.excerciseName===o):W,m?b(x=>x.username===m):W))),this.groupedLogs$=V([this.groupedLogsSubject,this.selectedExcerciseSubject,this.selectedTypeSubject,this.selectedUsernameSubject]).pipe(y(([a,o,n,m])=>R(a,D(([O,G])=>{let Ue=R(G,b(([H])=>m?m===H:!0),D(([H,J])=>{let Oe=R(J,b(([Q,Ge])=>n?Ge.type===n:!0),b(([Q])=>o?Q===o:!0),b(Q=>Q.length>0));return[H,Oe]}),b(([H,J])=>J.length>0));return[O,Ue]}),b(([O,G])=>G.length>0)))),this.personalRecord$=V([this.selectedUsernameSubject,this.selectedExcerciseSubject]).pipe(y(([a,o])=>a&&o?Ee(this.excerciseRowsSubject.value,o,a):null))}ngOnInit(){this.isLoading=!0,this.excerciseLogApiService.getExcerciseLogs().pipe(ae(()=>this.isLoading=!1)).subscribe(a=>{this.groupedLogsSubject.next(we(a)),this.excerciseRowsSubject.next(ye(this.groupedLogsSubject.value)),this.types=R(a,D(n=>n.type),ie()),this.usernames=R(a,D(n=>n.user),ie());let o=R(a,D(n=>({name:n.name,type:n.type})),ve(n=>n.name));this.excercisesSubject.next(o),console.log(be(this.excerciseRowsSubject.value))})}},e=t;return(()=>{t.\u0275fac=function(o){return new(o||t)}})(),(()=>{t.\u0275cmp=v({type:t,selectors:[["app-excercise-logs-page"]],viewQuery:function(o,n){if(o&1&&(ee(ct,7),ee(st,7)),o&2){let m;Z(m=te())&&(n.typeaheadInput=m.first),Z(m=te())&&(n.instance=m.first)}},standalone:!0,features:[w],decls:49,vars:25,consts:[[1,"container","my-4"],["type","text","placeholder","Excercise",1,"form-control","mb-2",3,"ngModel","ngbTypeahead","ngModelChange","selectItem","focus","click"],["typeaheadInput","","instance","ngbTypeahead"],[1,"row","mb-2","gx-2"],[1,"col-6"],["ngbDropdown","",1,"d-flex","justify-content-center"],["type","button","ngbDropdownToggle","",1,"btn","btn-outline-primary","w-100","d-flex","justify-content-between","align-items-center"],["ngbDropdownMenu","",1,"w-100"],["ngbDropdownItem","",3,"click"],["ngbDropdownItem","",3,"click",4,"ngFor","ngForOf"],[2,"overflow","scroll","max-height","400px"],[1,"d-flex","justify-content-center","align-items-center","border-top","border-1"],[1,"fa","fa-caret-down"],[1,"row","mb-2"],[1,"col-12"],[1,"row"],[1,"form-check","form-switch","d-flex","align-items-center","gap-1"],["type","checkbox","role","switch",1,"form-check-input",3,"ngModel","ngModelChange"],[1,"form-check-label"],[4,"ngIf","ngIfElse"],["loadingSpinner",""],["class","container",4,"ngIf"],[1,"container"],["class","mb-3",3,"personalRecord",4,"ngIf"],[3,"groupedExcerciseLogs"],[1,"mb-3",3,"personalRecord"],[3,"excerciseRows"],[1,"position-absolute","top-50","start-50","translate-middle"],["role","status",1,"spinner-border","text-primary"],[1,"visually-hidden"]],template:function(o,n){if(o&1&&(c(0,"div",0)(1,"input",1,2),E("ngModelChange",function(x){return n.excerciseTypeAhead=x})("selectItem",function(x){return n.onExcerciseTypeaheadChange(x.item)})("focus",function(x){return n.focus$.next(x.target.value)})("click",function(x){return n.click$.next(x.target.value),n.excerciseTypeAhead=""}),r(),c(4,"div",3)(5,"div",4)(6,"div",5)(7,"button",6),d(8),g(9,"titlecase"),g(10,"async"),r(),c(11,"div",7)(12,"button",8),E("click",function(){return n.selectedTypeSubject.next(null)}),d(13,"Clear filter"),r(),l(14,at,3,3,"button",9),r()()(),c(15,"div",4)(16,"div",5)(17,"button",6),d(18),g(19,"titlecase"),g(20,"async"),r(),c(21,"div",7)(22,"div",10)(23,"button",8),E("click",function(){return n.selectedExcerciseSubject.next(null)}),d(24,"Clear filter"),r(),l(25,pt,3,3,"button",9),g(26,"async"),r(),c(27,"div",11),h(28,"i",12),r()()()()(),c(29,"div",13)(30,"div",14)(31,"div",5)(32,"button",6),d(33),g(34,"titlecase"),g(35,"async"),r(),c(36,"div",7)(37,"button",8),E("click",function(){return n.selectedUsernameSubject.next(null)}),d(38,"Clear filter"),r(),l(39,lt,3,3,"button",9),r()()()(),c(40,"div",15)(41,"div",14)(42,"div",16)(43,"input",17),E("ngModelChange",function(x){return n.isGrouped=x}),r(),c(44,"label",18),d(45,"Grouped"),r()()()()(),l(46,ft,3,2,"div",19),l(47,xt,4,0,"ng-template",null,20,_e)),o&2){let m=fe(48);s(1),p("ngModel",n.excerciseTypeAhead)("ngbTypeahead",n.search),s(7),_(" ",f(9,11,f(10,13,n.selectedType$))," "),s(6),p("ngForOf",n.types),s(4),_(" ",f(19,15,f(20,17,n.selectedExcercise$))," "),s(7),p("ngForOf",f(26,19,n.excercises$)),s(8),_(" ",f(34,21,f(35,23,n.selectedUsername$))," "),s(6),p("ngForOf",n.usernames),s(4),p("ngModel",n.isGrouped),s(3),p("ngIf",!n.isLoading)("ngIfElse",m)}},dependencies:[C,I,Ae,Se,Re,Te,Ie,he,A,Fe,ke,Me,Pe,je,Le,Be,Ne,De,$e],changeDetection:0})})(),e})();export{ni as ExcerciseLogsPageComponent};