import{a as Q,b as O,d as X}from"./chunk-KSOKDV2B.js";import{p as U,q as W,s as Z}from"./chunk-2L3YZLWQ.js";import{$a as q,Ea as G,Fa as R,V as H,ab as J,bb as K}from"./chunk-WRYUCPAB.js";import{$b as P,Aa as b,Bb as C,Db as c,Fa as A,Jb as s,Kc as L,Lb as _,Mb as w,Nb as S,Sb as E,Sc as j,Xb as v,Yb as z,Zb as V,_b as g,a as h,bc as I,ec as F,gc as d,ia as T,lb as p,r as D,s as y,sc as f,tc as k,xa as m,xb as B,ya as u,yb as M,zb as x}from"./chunk-CPKOG5WQ.js";function $(e,l){if(e&1&&(g(0),f(1),P()),e&2){let t=d(3);p(),k(t.nzTitle)}}function ee(e,l){if(e&1&&(v(0,"div",7),c(1,$,2,1,"ng-container",9),z()),e&2){let t=d(2);p(),s("nzStringTemplateOutlet",t.nzTitle)}}function te(e,l){if(e&1&&(g(0),f(1),P()),e&2){let t=d(2);p(),k(t.nzContent)}}function oe(e,l){if(e&1&&(v(0,"div",2)(1,"div",3)(2,"div",4),V(3,"span",5),z(),v(4,"div",6)(5,"div"),c(6,ee,2,1,"div",7),v(7,"div",8),c(8,te,2,1,"ng-container",9),z()()()()()),e&2){let t=d();w(t.nzOverlayStyle),S(t._classMap),_("ant-popover-rtl",t.dir==="rtl"),s("@.disabled",!!(t.noAnimation!=null&&t.noAnimation.nzNoAnimation))("nzNoAnimation",t.noAnimation==null?null:t.noAnimation.nzNoAnimation)("@zoomBigMotion","active"),p(6),E(t.nzTitle?6:-1),p(2),s("nzStringTemplateOutlet",t.nzContent)}}var ne="popover",Ne=(()=>{let e=Q,l,t=[],r=[];return class N extends e{static{let i=typeof Symbol=="function"&&Symbol.metadata?Object.create(e[Symbol.metadata]??null):void 0;l=[H()],D(null,null,l,{kind:"field",name:"nzPopoverBackdrop",static:!1,private:!1,access:{has:o=>"nzPopoverBackdrop"in o,get:o=>o.nzPopoverBackdrop,set:(o,a)=>{o.nzPopoverBackdrop=a}},metadata:i},t,r),i&&Object.defineProperty(this,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:i})}_nzModuleName=ne;arrowPointAtCenter;title;content;directiveTitle;trigger="hover";placement="top";origin;visible;mouseEnterDelay;mouseLeaveDelay;overlayClassName;overlayStyle;overlayClickable;directiveContent=null;nzPopoverBackdrop=y(this,t,!1);visibleChange=(y(this,r),new A);getProxyPropertyMap(){return h({nzPopoverBackdrop:["nzBackdrop",()=>this.nzPopoverBackdrop]},super.getProxyPropertyMap())}constructor(){super(Y)}static \u0275fac=function(o){return new(o||N)};static \u0275dir=x({type:N,selectors:[["","nz-popover",""]],hostVars:2,hostBindings:function(o,a){o&2&&_("ant-popover-open",a.visible)},inputs:{arrowPointAtCenter:[2,"nzPopoverArrowPointAtCenter","arrowPointAtCenter",j],title:[0,"nzPopoverTitle","title"],content:[0,"nzPopoverContent","content"],directiveTitle:[0,"nz-popover","directiveTitle"],trigger:[0,"nzPopoverTrigger","trigger"],placement:[0,"nzPopoverPlacement","placement"],origin:[0,"nzPopoverOrigin","origin"],visible:[0,"nzPopoverVisible","visible"],mouseEnterDelay:[0,"nzPopoverMouseEnterDelay","mouseEnterDelay"],mouseLeaveDelay:[0,"nzPopoverMouseLeaveDelay","mouseLeaveDelay"],overlayClassName:[0,"nzPopoverOverlayClassName","overlayClassName"],overlayStyle:[0,"nzPopoverOverlayStyle","overlayStyle"],overlayClickable:[0,"nzPopoverOverlayClickable","overlayClickable"],nzPopoverBackdrop:"nzPopoverBackdrop"},outputs:{visibleChange:"nzPopoverVisibleChange"},exportAs:["nzPopover"],features:[C]})}})(),Y=(()=>{class e extends X{_prefix="ant-popover";get hasBackdrop(){return this.nzTrigger==="click"?this.nzBackdrop:!1}isEmpty(){return O(this.nzTitle)&&O(this.nzContent)}static \u0275fac=(()=>{let t;return function(n){return(t||(t=b(e)))(n||e)}})();static \u0275cmp=B({type:e,selectors:[["nz-popover"]],exportAs:["nzPopoverComponent"],features:[C],decls:2,vars:6,consts:[["overlay","cdkConnectedOverlay"],["cdkConnectedOverlay","","nzConnectedOverlay","",3,"overlayOutsideClick","detach","positionChange","cdkConnectedOverlayHasBackdrop","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayOpen","cdkConnectedOverlayPush","nzArrowPointAtCenter"],[1,"ant-popover",3,"nzNoAnimation"],[1,"ant-popover-content"],[1,"ant-popover-arrow"],[1,"ant-popover-arrow-content"],["role","tooltip",1,"ant-popover-inner"],[1,"ant-popover-title"],[1,"ant-popover-inner-content"],[4,"nzStringTemplateOutlet"]],template:function(r,n){if(r&1){let i=I();c(0,oe,9,11,"ng-template",1,0,L),F("overlayOutsideClick",function(a){return m(i),u(n.onClickOutside(a))})("detach",function(){return m(i),u(n.hide())})("positionChange",function(a){return m(i),u(n.onPositionChange(a))})}r&2&&s("cdkConnectedOverlayHasBackdrop",n.hasBackdrop)("cdkConnectedOverlayOrigin",n.origin)("cdkConnectedOverlayPositions",n._positions)("cdkConnectedOverlayOpen",n._visible)("cdkConnectedOverlayPush",n.cdkConnectedOverlayPush)("nzArrowPointAtCenter",n.nzArrowPointAtCenter)},dependencies:[R,G,W,U,Z,K,J],encapsulation:2,data:{animation:[q]},changeDetection:0})}return e})(),he=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=M({type:e});static \u0275inj=T({imports:[Y]})}return e})();export{Ne as a,he as b};
