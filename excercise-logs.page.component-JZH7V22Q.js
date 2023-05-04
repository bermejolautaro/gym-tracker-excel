import{A as M,B as ye,C as he,D as Ee,E as Ce,F as Re,b as z,c as S,d as W,e as me,f as h,h as Z,i as ue,j as fe,k as ge,p as xe,q as _e,r as ve,s as we,t as be,u as N,v as L,w as j,x as D,y as F,z as P}from"./chunk-4XMR5WNA.js";import{$ as C,A as ce,B as v,Ba as T,Ca as R,Da as A,E as se,Fa as de,Ga as B,I as q,J as H,O as s,T as l,U as pe,V as a,W as r,X as o,Y as _,Z as K,aa as m,c as I,da as Y,g as E,ga as d,h as O,ia as g,ja as ae,ma as w,oa as u,pa as f,q as ie,r as ne,s as oe,u as re,va as le}from"./chunk-5TADIOD2.js";import"./chunk-LWEHNFHP.js";function J(e){return e}function b(){return z(Ie(!1),arguments,b.lazy)}var Ie=function(e){return function(t,i){return W(t,e?b.lazyIndexed(i):b.lazy(i),e)}},Se=function(e){return function(t){return function(i,p,n){return{done:!1,hasNext:!0,next:e?t(i,p,n):t(i)}}}};(function(e){function t(){return z(Ie(!0),arguments,e.lazyIndexed)}e.indexed=t,e.lazy=Se(!1),e.lazyIndexed=me(Se(!0)),e.strict=e})(b||(b={}));function Te(){return z(Me,arguments,Ae)}function Me(e,t){return W(e,Ae(t))}function Ae(e){var t=new Set;return function(i){var p=e(i);return t.has(p)?{done:!1,hasNext:!1}:(t.add(p),{done:!1,hasNext:!0,next:i})}}var Be=(()=>{let t=class{transform(p){return p??[]}},e=t;return(()=>{t.\u0275fac=function(n){return new(n||t)}})(),(()=>{t.\u0275pipe=se({name:"ifNullEmptyArray",type:t,pure:!0,standalone:!0})})(),e})();function $e(e,t){e&1&&_(0,"i",8)}function ke(e,t){if(e&1&&(r(0,"div",6),d(1),u(2,"titlecase"),l(3,$e,1,0,"i",7),o()),e&2){let i=m(2);Y("font-size",1,"rem"),s(1),g(" ",f(2,4,i.excerciseRow.excerciseName)," "),s(2),a("ngIf",i.showStar)}}function Ue(e,t){if(e&1&&(r(0,"div",4),l(1,ke,4,6,"div",5),o()),e&2){let i=m();a("ngClass",i.showDate&&i.showUsername?"fw-bold":null),s(1),a("ngIf",i.showExcercise)}}function Oe(e,t){if(e&1&&(r(0,"div",9),d(1),u(2,"titlecase"),o()),e&2){let i=m();Y("font-size",.8,"rem"),s(1),ae(" ",i.excerciseRow.date," - ",f(2,4,i.excerciseRow.username)," ")}}var k=(()=>{let t=class{constructor(){this.showStar=!1,this.showExcercise=!0,this.showDate=!0,this.showUsername=!0}},e=t;return(()=>{t.\u0275fac=function(n){return new(n||t)}})(),(()=>{t.\u0275cmp=v({type:t,selectors:[["app-excercise-row-title"]],inputs:{showStar:"showStar",showExcercise:"showExcercise",showDate:"showDate",showUsername:"showUsername",excerciseRow:"excerciseRow"},standalone:!0,features:[w],decls:4,vars:2,consts:[[1,"w-100"],["class","row w-100 pb-1",3,"ngClass",4,"ngIf"],[1,"row"],["class","col d-flex text-muted",3,"fontSize",4,"ngIf"],[1,"row","w-100","pb-1",3,"ngClass"],["class","col d-flex align-items-center gap-1",3,"fontSize",4,"ngIf"],[1,"col","d-flex","align-items-center","gap-1"],["class","fa fa-star",4,"ngIf"],[1,"fa","fa-star"],[1,"col","d-flex","text-muted"]],template:function(n,c){n&1&&(r(0,"div",0),l(1,Ue,2,2,"div",1),r(2,"div",2),l(3,Oe,3,6,"div",3),o()()),n&2&&(s(1),a("ngIf",c.excerciseRow),s(2),a("ngIf",c.showDate))},dependencies:[A,T,B],styles:["[_nghost-%COMP%]{display:flex;flex:1}"]})})(),e})();function ze(e,t){if(e&1&&(r(0,"tr",4)(1,"td",5),d(2),o(),r(3,"td",6),d(4),o(),r(5,"td",6),d(6),o()()),e&2){let i=t.$implicit;s(2),g("Serie ",i.serie,""),s(2),g("",i.reps," reps"),s(2),g("",i.weightKg,"kg")}}function Ge(e,t){if(e&1&&(r(0,"tr",4)(1,"td",5),d(2,"Total"),o(),r(3,"td",6),d(4),o(),r(5,"td",6),d(6),o()()),e&2){let i=m(2);s(4),g("",i.excerciseRow.total," reps"),s(2),g("",i.excerciseRow.series[0].weightKg,"kg")}}function Ve(e,t){if(e&1&&(r(0,"tr",4)(1,"td",5),d(2,"Average"),o(),r(3,"td",6),d(4),o(),r(5,"td",6),d(6),o()()),e&2){let i=m(2);s(4),g("",i.excerciseRow.average," reps"),s(2),g("",i.excerciseRow.series[0].weightKg,"kg")}}function qe(e,t){if(e&1&&(r(0,"table",1)(1,"tbody"),l(2,ze,7,3,"tr",2),l(3,Ge,7,2,"tr",3),l(4,Ve,7,2,"tr",3),o()()),e&2){let i=m();s(2),a("ngForOf",i.excerciseRow.series),s(1),a("ngIf",i.excerciseRow.total),s(1),a("ngIf",i.excerciseRow.average)}}var U=(()=>{let t=class{},e=t;return(()=>{t.\u0275fac=function(n){return new(n||t)}})(),(()=>{t.\u0275cmp=v({type:t,selectors:[["app-excercise-row-body"]],inputs:{excerciseRow:"excerciseRow"},standalone:!0,features:[w],decls:1,vars:1,consts:[["class","table table-striped table-sm m-0",4,"ngIf"],[1,"table","table-striped","table-sm","m-0"],["class","row",4,"ngFor","ngForOf"],["class","row",4,"ngIf"],[1,"row"],[1,"fw-bold","col"],[1,"col","text-center"]],template:function(n,c){n&1&&l(0,qe,5,3,"table",0),n&2&&a("ngIf",c.excerciseRow)},dependencies:[R,A]})})(),e})();function He(e,t){if(e&1&&_(0,"app-excercise-row-body",7),e&2){let i=m().$implicit;a("excerciseRow",i)}}function Ke(e,t){if(e&1&&(r(0,"div",4)(1,"h2",5)(2,"button",6),_(3,"app-excercise-row-title",7),o()(),r(4,"div",8)(5,"div",9),l(6,He,1,1,"ng-template"),o()()()),e&2){let i=t.$implicit;a("ngClass",i.highlighted?"accordion-highlight "+i.highlighted:null),s(3),a("excerciseRow",i)}}var Ne=(()=>{let t=class{constructor(){this.excerciseRows=[]}},e=t;return(()=>{t.\u0275fac=function(n){return new(n||t)}})(),(()=>{t.\u0275cmp=v({type:t,selectors:[["app-excercise-rows"]],inputs:{excerciseRows:"excerciseRows"},standalone:!0,features:[w],decls:4,vars:1,consts:[[1,"row","my-2"],[1,"col"],["ngbAccordion",""],["ngbAccordionItem","",3,"ngClass",4,"ngFor","ngForOf"],["ngbAccordionItem","",3,"ngClass"],["ngbAccordionHeader",""],["ngbAccordionButton",""],[3,"excerciseRow"],["ngbAccordionCollapse",""],["ngbAccordionBody",""]],template:function(n,c){n&1&&(r(0,"div",0)(1,"div",1)(2,"div",2),l(3,Ke,7,2,"div",3),o()()()),n&2&&(s(3),a("ngForOf",c.excerciseRows))},dependencies:[R,T,M,j,P,F,D,N,L,k,U]})})(),e})();function We(e,t){if(e&1&&_(0,"app-excercise-row-body",14),e&2){let i=m().$implicit;a("excerciseRow",i[1])}}function Je(e,t){if(e&1&&(r(0,"div",12)(1,"h2",5)(2,"button",6),_(3,"app-excercise-row-title",13),o()(),r(4,"div",9)(5,"div",10),l(6,We,1,1,"ng-template"),o()()()),e&2){let i=t.$implicit;a("ngClass",i[1].highlighted?"accordion-highlight "+i[1].highlighted:null),s(3),a("showUsername",!1)("showDate",!1)("excerciseRow",i[1])}}function Qe(e,t){if(e&1&&(r(0,"div",2),l(1,Je,7,4,"div",11),o()),e&2){let i=m().$implicit;s(1),a("ngForOf",i[1])}}function Xe(e,t){if(e&1&&(r(0,"div",4)(1,"h2",5)(2,"button",6)(3,"div",7)(4,"div",8),d(5),u(6,"titlecase"),o()()()(),r(7,"div",9)(8,"div",10),l(9,Qe,2,1,"ng-template"),o()()()),e&2){let i=t.$implicit;s(5),g(" ",f(6,1,i[0])," ")}}function Ye(e,t){if(e&1&&(r(0,"div",2),l(1,Xe,10,3,"div",3),o()),e&2){let i=m().$implicit;s(1),a("ngForOf",i[1])}}function Ze(e,t){if(e&1&&(r(0,"div",4)(1,"h2",5)(2,"button",6)(3,"div",7)(4,"div",8),d(5),o()()()(),r(6,"div",9)(7,"div",10),l(8,Ye,2,1,"ng-template"),o()()()),e&2){let i=t.$implicit;s(5),g(" ",i[0]," ")}}var Le=(()=>{let t=class{constructor(){this.groupedExcerciseLogs=[]}},e=t;return(()=>{t.\u0275fac=function(n){return new(n||t)}})(),(()=>{t.\u0275cmp=v({type:t,selectors:[["app-grouped-excercise-rows"]],inputs:{groupedExcerciseLogs:"groupedExcerciseLogs"},standalone:!0,features:[w],decls:4,vars:1,consts:[[1,"row","my-2"],[1,"col"],["ngbAccordion",""],["ngbAccordionItem","",4,"ngFor","ngForOf"],["ngbAccordionItem",""],["ngbAccordionHeader",""],["ngbAccordionButton",""],[1,"row","w-100"],[1,"col","d-flex","align-items-center","justify-content-center","text-center"],["ngbAccordionCollapse",""],["ngbAccordionBody",""],["ngbAccordionItem","",3,"ngClass",4,"ngFor","ngForOf"],["ngbAccordionItem","",3,"ngClass"],[3,"showUsername","showDate","excerciseRow"],[3,"excerciseRow"]],template:function(n,c){n&1&&(r(0,"div",0)(1,"div",1)(2,"div",2),l(3,Ze,9,1,"div",3),o()()()),n&2&&(s(3),a("ngForOf",c.groupedExcerciseLogs))},dependencies:[R,M,j,P,F,D,N,L,B,T,U,k]})})(),e})();function et(e,t){if(e&1&&_(0,"app-excercise-row-body",7),e&2){let i=m();a("excerciseRow",i.personalRecord)}}var je=(()=>{let t=class{},e=t;return(()=>{t.\u0275fac=function(n){return new(n||t)}})(),(()=>{t.\u0275cmp=v({type:t,selectors:[["app-personal-record"]],inputs:{personalRecord:"personalRecord"},standalone:!0,features:[w],decls:8,vars:2,consts:[["ngbAccordion",""],["ngbAccordionItem","",1,"accordion-highlight","light-blue"],["ngbAccordionHeader",""],["ngbAccordionButton",""],[3,"excerciseRow","showStar"],["ngbAccordionCollapse",""],["ngbAccordionBody",""],[3,"excerciseRow"]],template:function(n,c){n&1&&(r(0,"div",0)(1,"div",1)(2,"h2",2)(3,"button",3),_(4,"app-excercise-row-title",4),o()(),r(5,"div",5)(6,"div",6),l(7,et,1,1,"ng-template"),o()()()()),n&2&&(s(4),a("excerciseRow",c.personalRecord)("showStar",!0))},dependencies:[k,U,M,j,P,F,D,N,L],styles:["[_nghost-%COMP%]{display:block}"]})})(),e})();function tt(e,t){if(e&1){let i=K();r(0,"button",6),C("click",function(){let c=q(i).$implicit,x=m();return H(x.selectedTypeSubject.next(c))}),d(1),u(2,"titlecase"),o()}if(e&2){let i=t.$implicit;s(1),g(" ",f(2,1,i)," ")}}function it(e,t){if(e&1){let i=K();r(0,"button",6),C("click",function(){let c=q(i).$implicit,x=m();return H(x.selectedExcerciseSubject.next(c))}),d(1),u(2,"titlecase"),o()}if(e&2){let i=t.$implicit;s(1),g(" ",f(2,1,i)," ")}}function nt(e,t){if(e&1){let i=K();r(0,"button",6),C("click",function(){let c=q(i).$implicit,x=m();return H(x.selectedUsernameSubject.next(c))}),d(1),u(2,"titlecase"),o()}if(e&2){let i=t.$implicit;s(1),g(" ",f(2,1,i)," ")}}function ot(e,t){if(e&1&&_(0,"app-personal-record",20),e&2){let i=t.ngIf;a("personalRecord",i)}}function rt(e,t){if(e&1&&(r(0,"div",17),l(1,ot,1,1,"app-personal-record",18),u(2,"async"),_(3,"app-grouped-excercise-rows",19),u(4,"ifNullEmptyArray"),u(5,"async"),o()),e&2){let i=m(2);s(1),a("ngIf",f(2,2,i.personalRecord$)),s(2),a("groupedExcerciseLogs",f(4,4,f(5,6,i.groupedLogs$)))}}function ct(e,t){if(e&1&&_(0,"app-personal-record",20),e&2){let i=t.ngIf;a("personalRecord",i)}}function st(e,t){if(e&1&&(r(0,"div",17),l(1,ct,1,1,"app-personal-record",18),u(2,"async"),_(3,"app-excercise-rows",21),u(4,"ifNullEmptyArray"),u(5,"async"),o()),e&2){let i=m(2);s(1),a("ngIf",f(2,2,i.personalRecord$)),s(2),a("excerciseRows",f(4,4,f(5,6,i.excerciseRows$)))}}function pt(e,t){if(e&1&&(r(0,"div"),l(1,rt,6,8,"div",16),l(2,st,6,8,"div",16),o()),e&2){let i=m();s(1),a("ngIf",i.isGrouped),s(1),a("ngIf",!i.isGrouped)}}function at(e,t){e&1&&(r(0,"div",22)(1,"div",23)(2,"span",24),d(3,"Loading..."),o()()())}var ti=(()=>{let t=class{constructor(){this.excerciseRowsSubject=new I([]),this.types=[],this.selectedTypeSubject=new I(null),this.excercisesSubject=new I([]),this.selectedExcerciseSubject=new I(null),this.usernames=[],this.selectedUsernameSubject=new I(null),this.groupedLogsSubject=new I([]),this.isGrouped=!1,this.isLoading=!0,this.excerciseLogApiService=ce(xe),this.selectedType$=this.selectedTypeSubject.pipe(oe(null),ne(),re(([p,n])=>{if(p===n||!n)return;let c=this.selectedExcerciseSubject.value,x=this.excerciseRowsSubject.value.find(y=>y.excerciseName===c)?.type;n!=x&&this.selectedExcerciseSubject.next(null)}),E(([,p])=>p??"Type")),this.selectedExcercise$=this.selectedExcerciseSubject.pipe(E(p=>p??"Excercise")),this.selectedUsername$=this.selectedUsernameSubject.pipe(E(p=>p??"Username")),this.excercises$=O([this.excercisesSubject,this.selectedTypeSubject]).pipe(E(([p,n])=>n?p.filter(c=>c.type===n):p),E(p=>p.map(n=>n.name))),this.excerciseRows$=O([this.excerciseRowsSubject,this.selectedExcerciseSubject,this.selectedTypeSubject,this.selectedUsernameSubject]).pipe(E(([p,n,c,x])=>S(p,c?h(y=>y.type===c):J,n?h(y=>y.excerciseName===n):J,x?h(y=>y.username===x):J))),this.groupedLogs$=O([this.groupedLogsSubject,this.selectedExcerciseSubject,this.selectedTypeSubject,this.selectedUsernameSubject]).pipe(E(([p,n,c,x])=>S(p,b(([te,Q])=>{let De=S(Q,h(([G])=>x?x===G:!0),b(([G,X])=>{let Fe=S(X,h(([V,Pe])=>c?Pe.type===c:!0),h(([V])=>n?V===n:!0),h(V=>V.length>0));return[G,Fe]}),h(([G,X])=>X.length>0));return[te,De]}),h(([te,Q])=>Q.length>0)))),this.personalRecord$=O([this.selectedUsernameSubject,this.selectedExcerciseSubject]).pipe(E(([p,n])=>p&&n?ge(this.excerciseRowsSubject.value,n,p):null))}ngOnInit(){this.isLoading=!0,this.excerciseLogApiService.getExcerciseLogs().pipe(ie(()=>this.isLoading=!1)).subscribe(p=>{this.groupedLogsSubject.next(ue(p)),this.excerciseRowsSubject.next(fe(this.groupedLogsSubject.value)),this.types=S(p,b(c=>c.type),Z()),this.usernames=S(p,b(c=>c.user),Z());let n=S(p,b(c=>({name:c.name,type:c.type})),Te(c=>c.name));this.excercisesSubject.next(n)})}},e=t;return(()=>{t.\u0275fac=function(n){return new(n||t)}})(),(()=>{t.\u0275cmp=v({type:t,selectors:[["app-excercise-logs-page"]],standalone:!0,features:[w],decls:43,vars:23,consts:[[1,"container","my-4"],[1,"row","mb-2","gx-2"],[1,"col-6"],["ngbDropdown","",1,"d-flex","justify-content-center"],["type","button","ngbDropdownToggle","",1,"btn","btn-outline-primary","w-100"],["ngbDropdownMenu","",1,"w-100"],["ngbDropdownItem","",3,"click"],["ngbDropdownItem","",3,"click",4,"ngFor","ngForOf"],[1,"row","mb-2"],[1,"col-12"],[1,"row"],[1,"form-check","form-switch","d-flex","align-items-center","gap-1"],["type","checkbox","role","switch",1,"form-check-input",3,"ngModel","ngModelChange"],[1,"form-check-label"],[4,"ngIf","ngIfElse"],["loadingSpinner",""],["class","container",4,"ngIf"],[1,"container"],["class","mb-3",3,"personalRecord",4,"ngIf"],[3,"groupedExcerciseLogs"],[1,"mb-3",3,"personalRecord"],[3,"excerciseRows"],[1,"position-absolute","top-50","start-50","translate-middle"],["role","status",1,"spinner-border","text-primary"],[1,"visually-hidden"]],template:function(n,c){if(n&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"button",4),d(5),u(6,"titlecase"),u(7,"async"),o(),r(8,"div",5)(9,"button",6),C("click",function(){return c.selectedTypeSubject.next(null)}),d(10,"Clear filter"),o(),l(11,tt,3,3,"button",7),o()()(),r(12,"div",2)(13,"div",3)(14,"button",4),d(15),u(16,"titlecase"),u(17,"async"),o(),r(18,"div",5)(19,"button",6),C("click",function(){return c.selectedExcerciseSubject.next(null)}),d(20,"Clear filter"),o(),l(21,it,3,3,"button",7),u(22,"async"),o()()()(),r(23,"div",8)(24,"div",9)(25,"div",3)(26,"button",4),d(27),u(28,"titlecase"),u(29,"async"),o(),r(30,"div",5)(31,"button",6),C("click",function(){return c.selectedUsernameSubject.next(null)}),d(32,"Clear filter"),o(),l(33,nt,3,3,"button",7),o()()()(),r(34,"div",10)(35,"div",9)(36,"div",11)(37,"input",12),C("ngModelChange",function(y){return c.isGrouped=y}),o(),r(38,"label",13),d(39,"Grouped"),o()()()()(),l(40,pt,3,2,"div",14),l(41,at,4,0,"ng-template",null,15,le)),n&2){let x=pe(42);s(5),g(" ",f(6,9,f(7,11,c.selectedType$))," "),s(6),a("ngForOf",c.types),s(4),g(" ",f(16,13,f(17,15,c.selectedExcercise$))," "),s(6),a("ngForOf",f(22,17,c.excercises$)),s(6),g(" ",f(28,19,f(29,21,c.selectedUsername$))," "),s(6),a("ngForOf",c.usernames),s(4),a("ngModel",c.isGrouped),s(3),a("ngIf",!c.isLoading)("ngIfElse",x)}},dependencies:[R,A,de,B,be,_e,ve,we,Re,Ce,Ee,he,ye,je,Le,Ne,Be],styles:[".dropdown-menu[_ngcontent-%COMP%]{max-height:400px;overflow:scroll}"]})})(),e})();export{ti as ExcerciseLogsPageComponent};
