(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{GCxG:function(r,a,t){"use strict";t.r(a),t.d(a,"LoginModule",(function(){return $}));var e=t("ofXK"),o=t("3Pt+"),n=t("/Yow"),i=t("kmnG"),s=t("qFsG"),m=t("bTqV"),b=t("NFeN"),l=t("+rOU"),c=(t("u47x"),t("cH1L")),d=t("8LU1"),u=(t("FtGj"),t("fXoL")),p=t("XNiG");t("LRne"),t("JX91"),t("1G5W");let f=(()=>{class r{}return r.\u0275mod=u.Jb({type:r}),r.\u0275inj=u.Ib({factory:function(a){return new(a||r)},imports:[[c.a]]}),r})();var g=t("FKr1");t("/uUt"),t("R0Ic");let h=(()=>{class r{constructor(){this.changes=new p.a,this.optionalLabel="Optional"}}return r.\u0275fac=function(a){return new(a||r)},r.\u0275prov=Object(u.Hb)({factory:function(){return new r},token:r,providedIn:"root"}),r})();const y={provide:h,deps:[[new u.A,new u.J,h]],useFactory:function(r){return r||new h}};let v=(()=>{class r{}return r.\u0275mod=u.Jb({type:r}),r.\u0275inj=u.Ib({factory:function(a){return new(a||r)},providers:[y,g.c],imports:[[g.g,e.c,l.e,m.b,f,b.b,g.o],g.g]}),r})();var w=t("Wp6s"),k=t("R1ws"),C=t("quSY"),_=t("xgIS"),R=t("pLZG");const Q=["primaryValueBar"];class x{constructor(r){this._elementRef=r}}const I=Object(g.r)(x,"primary"),F=new u.q("mat-progress-bar-location",{providedIn:"root",factory:function(){const r=Object(u.V)(e.e),a=r?r.location:null;return{getPathname:()=>a?a.pathname+a.search:""}}});let A=0,V=(()=>{class r extends I{constructor(r,a,t,e){super(r),this._elementRef=r,this._ngZone=a,this._animationMode=t,this._isNoopAnimation=!1,this._value=0,this._bufferValue=0,this.animationEnd=new u.n,this._animationEndSubscription=C.a.EMPTY,this.mode="determinate",this.progressbarId="mat-progress-bar-"+A++;const o=e?e.getPathname().split("#")[0]:"";this._rectangleFillValue=`url('${o}#${this.progressbarId}')`,this._isNoopAnimation="NoopAnimations"===t}get value(){return this._value}set value(r){this._value=L(Object(d.e)(r)||0)}get bufferValue(){return this._bufferValue}set bufferValue(r){this._bufferValue=L(r||0)}_primaryTransform(){return{transform:`scaleX(${this.value/100})`}}_bufferTransform(){return"buffer"===this.mode?{transform:`scaleX(${this.bufferValue/100})`}:null}ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{const r=this._primaryValueBar.nativeElement;this._animationEndSubscription=Object(_.a)(r,"transitionend").pipe(Object(R.a)(a=>a.target===r)).subscribe(()=>{"determinate"!==this.mode&&"buffer"!==this.mode||this._ngZone.run(()=>this.animationEnd.next({value:this.value}))})})}ngOnDestroy(){this._animationEndSubscription.unsubscribe()}}return r.\u0275fac=function(a){return new(a||r)(u.Lb(u.l),u.Lb(u.z),u.Lb(k.a,8),u.Lb(F,8))},r.\u0275cmp=u.Fb({type:r,selectors:[["mat-progress-bar"]],viewQuery:function(r,a){var t;1&r&&u.Bc(Q,!0),2&r&&u.lc(t=u.Zb())&&(a._primaryValueBar=t.first)},hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100",1,"mat-progress-bar"],hostVars:4,hostBindings:function(r,a){2&r&&(u.Bb("aria-valuenow","indeterminate"===a.mode||"query"===a.mode?null:a.value)("mode",a.mode),u.Db("_mat-animation-noopable",a._isNoopAnimation))},inputs:{color:"color",mode:"mode",value:"value",bufferValue:"bufferValue"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],features:[u.xb],decls:9,vars:4,consts:[["width","100%","height","4","focusable","false",1,"mat-progress-bar-background","mat-progress-bar-element"],["x","4","y","0","width","8","height","4","patternUnits","userSpaceOnUse",3,"id"],["cx","2","cy","2","r","2"],["width","100%","height","100%"],[1,"mat-progress-bar-buffer","mat-progress-bar-element",3,"ngStyle"],[1,"mat-progress-bar-primary","mat-progress-bar-fill","mat-progress-bar-element",3,"ngStyle"],["primaryValueBar",""],[1,"mat-progress-bar-secondary","mat-progress-bar-fill","mat-progress-bar-element"]],template:function(r,a){1&r&&(u.bc(),u.Rb(0,"svg",0),u.Rb(1,"defs"),u.Rb(2,"pattern",1),u.Mb(3,"circle",2),u.Qb(),u.Qb(),u.Mb(4,"rect",3),u.Qb(),u.ac(),u.Mb(5,"div",4),u.Mb(6,"div",5,6),u.Mb(8,"div",7)),2&r&&(u.Ab(2),u.ic("id",a.progressbarId),u.Ab(2),u.Bb("fill",a._rectangleFillValue),u.Ab(1),u.ic("ngStyle",a._bufferTransform()),u.Ab(1),u.ic("ngStyle",a._primaryTransform()))},directives:[e.m],styles:['.mat-progress-bar{display:block;height:4px;overflow:hidden;position:relative;transition:opacity 250ms linear;width:100%}._mat-animation-noopable.mat-progress-bar{transition:none;animation:none}.mat-progress-bar .mat-progress-bar-element,.mat-progress-bar .mat-progress-bar-fill::after{height:100%;position:absolute;width:100%}.mat-progress-bar .mat-progress-bar-background{width:calc(100% + 10px)}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-background{display:none}.mat-progress-bar .mat-progress-bar-buffer{transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-buffer{border-top:solid 5px;opacity:.5}.mat-progress-bar .mat-progress-bar-secondary{display:none}.mat-progress-bar .mat-progress-bar-fill{animation:none;transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-fill{border-top:solid 4px}.mat-progress-bar .mat-progress-bar-fill::after{animation:none;content:"";display:inline-block;left:0}.mat-progress-bar[dir=rtl],[dir=rtl] .mat-progress-bar{transform:rotateY(180deg)}.mat-progress-bar[mode=query]{transform:rotateZ(180deg)}.mat-progress-bar[mode=query][dir=rtl],[dir=rtl] .mat-progress-bar[mode=query]{transform:rotateZ(180deg) rotateY(180deg)}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-fill,.mat-progress-bar[mode=query] .mat-progress-bar-fill{transition:none}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary,.mat-progress-bar[mode=query] .mat-progress-bar-primary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-translate 2000ms infinite linear;left:-145.166611%}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-primary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary,.mat-progress-bar[mode=query] .mat-progress-bar-secondary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-translate 2000ms infinite linear;left:-54.888891%;display:block}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-secondary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=buffer] .mat-progress-bar-background{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-background-scroll 250ms infinite linear;display:block}.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-buffer,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-background{animation:none;transition-duration:1ms}@keyframes mat-progress-bar-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mat-progress-bar-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mat-progress-bar-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-background-scroll{to{transform:translateX(-8px)}}\n'],encapsulation:2,changeDetection:0}),r})();function L(r,a=0,t=100){return Math.max(a,Math.min(t,r))}let q=(()=>{class r{}return r.\u0275mod=u.Jb({type:r}),r.\u0275inj=u.Ib({factory:function(a){return new(a||r)},imports:[[e.c,g.g],g.g]}),r})();var M=t("f0Cb"),X=t("tyNb"),E=t("yMo9"),U=t("Vcwj"),S=t("0IaG"),j=t("GZfZ"),O=t("9Hb+"),P=t("bLm/");function z(r,a){1&r&&(u.Rb(0,"mat-error"),u.yc(1," Usuario "),u.Rb(2,"strong"),u.yc(3,"Incorrecto"),u.Qb(),u.Qb())}function D(r,a){1&r&&(u.Rb(0,"mat-error"),u.yc(1," Ingrese un Usuario Valido! "),u.Qb())}function B(r,a){1&r&&(u.Rb(0,"mat-error"),u.yc(1," El usuario es "),u.Rb(2,"strong"),u.yc(3,"requerido"),u.Qb(),u.Qb())}function G(r,a){1&r&&(u.Rb(0,"mat-error"),u.yc(1," Constrase\xf1a "),u.Rb(2,"strong"),u.yc(3,"Incorrecta"),u.Qb(),u.Qb())}function J(r,a){1&r&&(u.Rb(0,"mat-error"),u.yc(1," Debe ser contener mas de 8 caracteres! "),u.Qb())}function Z(r,a){1&r&&(u.Rb(0,"mat-error"),u.yc(1," Constrase\xf1a es "),u.Rb(2,"strong"),u.yc(3,"requerido"),u.Qb(),u.Qb())}const N=function(r){return{"mat-float-shadow":r}},T=function(){return["/keyChange"]},Y=[{path:"",component:(()=>{class r{constructor(r,a,t,e,n){this.router=r,this.dialog=a,this.auth=t,this.tokenService=e,this.userSessionService=n,this.nameUserFromControl=new o.c("",[o.m.required,o.m.minLength(2)]),this.passwordFromControl=new o.c("",[o.m.required,o.m.minLength(3)]),this.hidePass=!0,this.color="primary",this.mode="buffer",this.value=0,this.bufferValue=0,window.addEventListener("beforeinstallprompt",r=>{r.preventDefault(),this.deferredPrompt=r})}ngOnInit(){}onLogin(){this.status=!0,this.load("indeterminate",50,75),this.nameUserFromControl.invalid||this.passwordFromControl.invalid||(this.user={user:this.nameUserFromControl.value,pass:this.passwordFromControl.value},this.auth.login(this.user).then(r=>{this.load("buffer",0,0),this.tokenService.putToken("info token"),this.userSessionService.putUser("info user"),this.router.navigate(["/home"])}).catch(r=>{this.openDialog(new U.a(r.code,r.message))}))}openDialog(r){this.dialog.open(E.a,{width:"350px",data:r}),this.load("buffer",0,0),this.status=!1}load(r,a,t){this.mode=r,this.value=a,this.bufferValue=t}}return r.\u0275fac=function(a){return new(a||r)(u.Lb(X.a),u.Lb(S.b),u.Lb(j.a),u.Lb(O.a),u.Lb(P.a))},r.\u0275cmp=u.Fb({type:r,selectors:[["app-login"]],decls:43,vars:24,consts:[[1,"mat-center-div"],[1,"mat-border-radius-1rm"],[1,"mat-border-radius-1rm","mat-elevation-z6","mat-width-md"],[1,"mat-d-block"],[1,"r-logo","mat-text-center"],[1,"mat-pt-20"],["src","/assets/image/logo-colombina.png","alt","",1,"mat-width-50"],[1,"mat-text-center"],[1,"r-logo","mat-pt-20"],["appearance","outline",1,"r-from-field-input"],["matInput","","type","text","placeholder","Usuario",3,"formControl","readonly"],["matSuffix",""],[4,"ngIf"],["matInput","","placeholder","Contrase\xf1a",3,"type","formControl","readonly"],["mat-icon-button","","matSuffix","",3,"click"],[1,"mat-p-initial"],[1,"dr-margin",3,"color","mode","value","bufferValue"],[1,"mat-mt-20","mat-mb-20"],["mat-raised-button","","color","primary",1,"mat-width-sm",3,"ngClass","disabled","click"],["mat-raised-button","","color","accent","disabled","",1,"mat-width-sm","mat-ml-20","mat-float-shadow",3,"routerLink"]],template:function(r,a){1&r&&(u.Rb(0,"body"),u.Rb(1,"div",0),u.Rb(2,"div",1),u.Rb(3,"mat-card",2),u.Rb(4,"mat-card-header",3),u.Rb(5,"div",4),u.Rb(6,"mat-card-title"),u.Rb(7,"h3",5),u.yc(8,"Bienvenido - Distribuidora J&C"),u.Qb(),u.Qb(),u.Rb(9,"div"),u.Mb(10,"img",6),u.Qb(),u.Qb(),u.Qb(),u.Rb(11,"mat-card-content"),u.Rb(12,"div",7),u.Rb(13,"div",8),u.Rb(14,"mat-form-field",9),u.Rb(15,"mat-label"),u.yc(16,"Usuario"),u.Qb(),u.Mb(17,"input",10),u.Rb(18,"mat-icon",11),u.yc(19,"person"),u.Qb(),u.xc(20,z,4,0,"mat-error",12),u.xc(21,D,2,0,"mat-error",12),u.xc(22,B,4,0,"mat-error",12),u.Qb(),u.Rb(23,"mat-form-field",9),u.Rb(24,"mat-label"),u.yc(25,"Contrase\xf1a"),u.Qb(),u.Mb(26,"input",13),u.Rb(27,"button",14),u.Yb("click",(function(){return a.hidePass=!a.hidePass})),u.Rb(28,"mat-icon"),u.yc(29),u.Qb(),u.Qb(),u.xc(30,G,4,0,"mat-error",12),u.xc(31,J,2,0,"mat-error",12),u.xc(32,Z,4,0,"mat-error",12),u.Qb(),u.Qb(),u.Mb(33,"br"),u.Mb(34,"br"),u.Mb(35,"mat-divider",15),u.Mb(36,"br"),u.Mb(37,"mat-progress-bar",16),u.Rb(38,"div",17),u.Rb(39,"button",18),u.Yb("click",(function(){return a.onLogin()})),u.yc(40,"Ingresar "),u.Qb(),u.Rb(41,"button",19),u.yc(42,"Cambio Contrase\xf1a"),u.Qb(),u.Qb(),u.Qb(),u.Qb(),u.Qb(),u.Qb(),u.Qb(),u.Qb()),2&r&&(u.Ab(17),u.ic("formControl",a.nameUserFromControl)("readonly",a.status),u.Ab(3),u.ic("ngIf",!a.nameUserFromControl.hasError("minlength")&&!a.nameUserFromControl.hasError("required")),u.Ab(1),u.ic("ngIf",a.nameUserFromControl.hasError("minlength")&&!a.nameUserFromControl.hasError("required")),u.Ab(1),u.ic("ngIf",a.nameUserFromControl.hasError("required")),u.Ab(4),u.ic("type",a.hidePass?"password":"text")("formControl",a.passwordFromControl)("readonly",a.status),u.Ab(1),u.Bb("aria-label","Hide password")("aria-pressed",a.hidePass),u.Ab(2),u.zc(a.hidePass?"visibility_off":"visibility"),u.Ab(1),u.ic("ngIf",!a.passwordFromControl.hasError("minlength")&&!a.passwordFromControl.hasError("required")),u.Ab(1),u.ic("ngIf",a.passwordFromControl.hasError("minlength")&&!a.passwordFromControl.hasError("required")),u.Ab(1),u.ic("ngIf",a.passwordFromControl.hasError("required")),u.Ab(5),u.ic("color",a.color)("mode",a.mode)("value",a.value)("bufferValue",a.bufferValue),u.Ab(2),u.ic("ngClass",u.kc(21,N,"VALID"==a.nameUserFromControl.status||"VALID"==a.passwordFromControl.status))("disabled","VALID"!=a.nameUserFromControl.status||"VALID"!=a.passwordFromControl.status),u.Ab(2),u.ic("routerLink",u.jc(23,T)))},directives:[w.a,w.e,w.h,w.d,i.c,i.f,s.a,o.b,o.j,o.d,b.a,i.g,e.l,m.a,M.a,V,e.j,X.b,i.b],styles:["[_ngcontent-%COMP%]:root{--input-padding-x:1.5rem;--input-padding-y:.75rem}body[_ngcontent-%COMP%]{background:rgba(0,0,0,.1);width:100%;height:100%}.r-from-field-input[_ngcontent-%COMP%]{width:70%;top:5px;bottom:5px}.r-logo[_ngcontent-%COMP%]{background-color:hsla(0,0%,58.4%,.058823529411764705);border-radius:5px}"]}),r})()}];let H=(()=>{class r{}return r.\u0275mod=u.Jb({type:r}),r.\u0275inj=u.Ib({factory:function(a){return new(a||r)},imports:[[X.d.forChild(Y)],X.d]}),r})(),$=(()=>{class r{}return r.\u0275mod=u.Jb({type:r}),r.\u0275inj=u.Ib({factory:function(a){return new(a||r)},imports:[[e.c,o.f,H,n.a,i.e,s.b,w.f,m.b,b.b,v,M.b,o.l,q]]}),r})()}}]);