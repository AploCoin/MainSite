"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[524],{87592:function(e,n,t){t.d(n,{Z:function(){return r}});/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,t(78030).Z)("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]])},28165:function(e,n,t){t.d(n,{Z:function(){return r}});/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,t(78030).Z)("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]])},92699:function(e,n,t){t.d(n,{Z:function(){return r}});/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,t(78030).Z)("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]])},38296:function(e,n,t){t.d(n,{Z:function(){return r}});/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,t(78030).Z)("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]])},81622:function(e,n,t){t.d(n,{oC:function(){return e8},VY:function(){return e2},ZA:function(){return e7},ck:function(){return e9},wU:function(){return e5},__:function(){return e3},Uv:function(){return e1},Ee:function(){return e4},Rk:function(){return e6},fC:function(){return e$},Z0:function(){return ne},Tr:function(){return nn},tu:function(){return nr},fF:function(){return nt},xz:function(){return e0}});var r=t(2265),o=t(78149),a=t(1584),l=t(98324),u=t(91715),i=t(25171),d=t(76402),c=t(87513),s=t(53938),p=t(20589),f=t(80467),m=t(53201),v=t(8116),h=t(56935),g=t(31383),w=t(74073),y=t(71538),x=t(75137),M=t(78369),C=t(17590),b=t(57437),k=["Enter"," "],j=["ArrowUp","PageDown","End"],R=["ArrowDown","PageUp","Home",...j],D={ltr:[...k,"ArrowRight"],rtl:[...k,"ArrowLeft"]},_={ltr:["ArrowLeft"],rtl:["ArrowRight"]},E="Menu",[T,P,S]=(0,d.B)(E),[I,N]=(0,l.b)(E,[S,v.D7,w.Pc]),O=(0,v.D7)(),L=(0,w.Pc)(),[A,F]=I(E),[K,V]=I(E),W=e=>{let{__scopeMenu:n,open:t=!1,children:o,dir:a,onOpenChange:l,modal:u=!0}=e,i=O(n),[d,s]=r.useState(null),p=r.useRef(!1),f=(0,x.W)(l),m=(0,c.gm)(a);return r.useEffect(()=>{let e=()=>{p.current=!0,document.addEventListener("pointerdown",n,{capture:!0,once:!0}),document.addEventListener("pointermove",n,{capture:!0,once:!0})},n=()=>p.current=!1;return document.addEventListener("keydown",e,{capture:!0}),()=>{document.removeEventListener("keydown",e,{capture:!0}),document.removeEventListener("pointerdown",n,{capture:!0}),document.removeEventListener("pointermove",n,{capture:!0})}},[]),(0,b.jsx)(v.fC,{...i,children:(0,b.jsx)(A,{scope:n,open:t,onOpenChange:f,content:d,onContentChange:s,children:(0,b.jsx)(K,{scope:n,onClose:r.useCallback(()=>f(!1),[f]),isUsingKeyboardRef:p,dir:m,modal:u,children:o})})})};W.displayName=E;var Z=r.forwardRef((e,n)=>{let{__scopeMenu:t,...r}=e,o=O(t);return(0,b.jsx)(v.ee,{...o,...r,ref:n})});Z.displayName="MenuAnchor";var z="MenuPortal",[G,U]=I(z,{forceMount:void 0}),B=e=>{let{__scopeMenu:n,forceMount:t,children:r,container:o}=e,a=F(z,n);return(0,b.jsx)(G,{scope:n,forceMount:t,children:(0,b.jsx)(g.z,{present:t||a.open,children:(0,b.jsx)(h.h,{asChild:!0,container:o,children:r})})})};B.displayName=z;var X="MenuContent",[H,Y]=I(X),q=r.forwardRef((e,n)=>{let t=U(X,e.__scopeMenu),{forceMount:r=t.forceMount,...o}=e,a=F(X,e.__scopeMenu),l=V(X,e.__scopeMenu);return(0,b.jsx)(T.Provider,{scope:e.__scopeMenu,children:(0,b.jsx)(g.z,{present:r||a.open,children:(0,b.jsx)(T.Slot,{scope:e.__scopeMenu,children:l.modal?(0,b.jsx)(J,{...o,ref:n}):(0,b.jsx)(Q,{...o,ref:n})})})})}),J=r.forwardRef((e,n)=>{let t=F(X,e.__scopeMenu),l=r.useRef(null),u=(0,a.e)(n,l);return r.useEffect(()=>{let e=l.current;if(e)return(0,M.Ry)(e)},[]),(0,b.jsx)($,{...e,ref:u,trapFocus:t.open,disableOutsidePointerEvents:t.open,disableOutsideScroll:!0,onFocusOutside:(0,o.M)(e.onFocusOutside,e=>e.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>t.onOpenChange(!1)})}),Q=r.forwardRef((e,n)=>{let t=F(X,e.__scopeMenu);return(0,b.jsx)($,{...e,ref:n,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>t.onOpenChange(!1)})}),$=r.forwardRef((e,n)=>{let{__scopeMenu:t,loop:l=!1,trapFocus:u,onOpenAutoFocus:i,onCloseAutoFocus:d,disableOutsidePointerEvents:c,onEntryFocus:m,onEscapeKeyDown:h,onPointerDownOutside:g,onFocusOutside:x,onInteractOutside:M,onDismiss:k,disableOutsideScroll:D,..._}=e,E=F(X,t),T=V(X,t),S=O(t),I=L(t),N=P(t),[A,K]=r.useState(null),W=r.useRef(null),Z=(0,a.e)(n,W,E.onContentChange),z=r.useRef(0),G=r.useRef(""),U=r.useRef(0),B=r.useRef(null),Y=r.useRef("right"),q=r.useRef(0),J=D?C.Z:r.Fragment,Q=D?{as:y.g7,allowPinchZoom:!0}:void 0,$=e=>{var n,t;let r=G.current+e,o=N().filter(e=>!e.disabled),a=document.activeElement,l=null===(n=o.find(e=>e.ref.current===a))||void 0===n?void 0:n.textValue,u=function(e,n,t){var r;let o=n.length>1&&Array.from(n).every(e=>e===n[0])?n[0]:n,a=(r=Math.max(t?e.indexOf(t):-1,0),e.map((n,t)=>e[(r+t)%e.length]));1===o.length&&(a=a.filter(e=>e!==t));let l=a.find(e=>e.toLowerCase().startsWith(o.toLowerCase()));return l!==t?l:void 0}(o.map(e=>e.textValue),r,l),i=null===(t=o.find(e=>e.textValue===u))||void 0===t?void 0:t.ref.current;!function e(n){G.current=n,window.clearTimeout(z.current),""!==n&&(z.current=window.setTimeout(()=>e(""),1e3))}(r),i&&setTimeout(()=>i.focus())};r.useEffect(()=>()=>window.clearTimeout(z.current),[]),(0,p.EW)();let ee=r.useCallback(e=>{var n,t,r;return Y.current===(null===(n=B.current)||void 0===n?void 0:n.side)&&!!(r=null===(t=B.current)||void 0===t?void 0:t.area)&&function(e,n){let{x:t,y:r}=e,o=!1;for(let e=0,a=n.length-1;e<n.length;a=e++){let l=n[e].x,u=n[e].y,i=n[a].x,d=n[a].y;u>r!=d>r&&t<(i-l)*(r-u)/(d-u)+l&&(o=!o)}return o}({x:e.clientX,y:e.clientY},r)},[]);return(0,b.jsx)(H,{scope:t,searchRef:G,onItemEnter:r.useCallback(e=>{ee(e)&&e.preventDefault()},[ee]),onItemLeave:r.useCallback(e=>{var n;ee(e)||(null===(n=W.current)||void 0===n||n.focus(),K(null))},[ee]),onTriggerLeave:r.useCallback(e=>{ee(e)&&e.preventDefault()},[ee]),pointerGraceTimerRef:U,onPointerGraceIntentChange:r.useCallback(e=>{B.current=e},[]),children:(0,b.jsx)(J,{...Q,children:(0,b.jsx)(f.M,{asChild:!0,trapped:u,onMountAutoFocus:(0,o.M)(i,e=>{var n;e.preventDefault(),null===(n=W.current)||void 0===n||n.focus({preventScroll:!0})}),onUnmountAutoFocus:d,children:(0,b.jsx)(s.XB,{asChild:!0,disableOutsidePointerEvents:c,onEscapeKeyDown:h,onPointerDownOutside:g,onFocusOutside:x,onInteractOutside:M,onDismiss:k,children:(0,b.jsx)(w.fC,{asChild:!0,...I,dir:T.dir,orientation:"vertical",loop:l,currentTabStopId:A,onCurrentTabStopIdChange:K,onEntryFocus:(0,o.M)(m,e=>{T.isUsingKeyboardRef.current||e.preventDefault()}),preventScrollOnEntryFocus:!0,children:(0,b.jsx)(v.VY,{role:"menu","aria-orientation":"vertical","data-state":eD(E.open),"data-radix-menu-content":"",dir:T.dir,...S,..._,ref:Z,style:{outline:"none",..._.style},onKeyDown:(0,o.M)(_.onKeyDown,e=>{let n=e.target.closest("[data-radix-menu-content]")===e.currentTarget,t=e.ctrlKey||e.altKey||e.metaKey,r=1===e.key.length;n&&("Tab"===e.key&&e.preventDefault(),!t&&r&&$(e.key));let o=W.current;if(e.target!==o||!R.includes(e.key))return;e.preventDefault();let a=N().filter(e=>!e.disabled).map(e=>e.ref.current);j.includes(e.key)&&a.reverse(),function(e){let n=document.activeElement;for(let t of e)if(t===n||(t.focus(),document.activeElement!==n))return}(a)}),onBlur:(0,o.M)(e.onBlur,e=>{e.currentTarget.contains(e.target)||(window.clearTimeout(z.current),G.current="")}),onPointerMove:(0,o.M)(e.onPointerMove,eT(e=>{let n=e.target,t=q.current!==e.clientX;if(e.currentTarget.contains(n)&&t){let n=e.clientX>q.current?"right":"left";Y.current=n,q.current=e.clientX}}))})})})})})})});q.displayName=X;var ee=r.forwardRef((e,n)=>{let{__scopeMenu:t,...r}=e;return(0,b.jsx)(i.WV.div,{role:"group",...r,ref:n})});ee.displayName="MenuGroup";var en=r.forwardRef((e,n)=>{let{__scopeMenu:t,...r}=e;return(0,b.jsx)(i.WV.div,{...r,ref:n})});en.displayName="MenuLabel";var et="MenuItem",er="menu.itemSelect",eo=r.forwardRef((e,n)=>{let{disabled:t=!1,onSelect:l,...u}=e,d=r.useRef(null),c=V(et,e.__scopeMenu),s=Y(et,e.__scopeMenu),p=(0,a.e)(n,d),f=r.useRef(!1);return(0,b.jsx)(ea,{...u,ref:p,disabled:t,onClick:(0,o.M)(e.onClick,()=>{let e=d.current;if(!t&&e){let n=new CustomEvent(er,{bubbles:!0,cancelable:!0});e.addEventListener(er,e=>null==l?void 0:l(e),{once:!0}),(0,i.jH)(e,n),n.defaultPrevented?f.current=!1:c.onClose()}}),onPointerDown:n=>{var t;null===(t=e.onPointerDown)||void 0===t||t.call(e,n),f.current=!0},onPointerUp:(0,o.M)(e.onPointerUp,e=>{var n;f.current||null===(n=e.currentTarget)||void 0===n||n.click()}),onKeyDown:(0,o.M)(e.onKeyDown,e=>{let n=""!==s.searchRef.current;!t&&(!n||" "!==e.key)&&k.includes(e.key)&&(e.currentTarget.click(),e.preventDefault())})})});eo.displayName=et;var ea=r.forwardRef((e,n)=>{let{__scopeMenu:t,disabled:l=!1,textValue:u,...d}=e,c=Y(et,t),s=L(t),p=r.useRef(null),f=(0,a.e)(n,p),[m,v]=r.useState(!1),[h,g]=r.useState("");return r.useEffect(()=>{let e=p.current;if(e){var n;g((null!==(n=e.textContent)&&void 0!==n?n:"").trim())}},[d.children]),(0,b.jsx)(T.ItemSlot,{scope:t,disabled:l,textValue:null!=u?u:h,children:(0,b.jsx)(w.ck,{asChild:!0,...s,focusable:!l,children:(0,b.jsx)(i.WV.div,{role:"menuitem","data-highlighted":m?"":void 0,"aria-disabled":l||void 0,"data-disabled":l?"":void 0,...d,ref:f,onPointerMove:(0,o.M)(e.onPointerMove,eT(e=>{l?c.onItemLeave(e):(c.onItemEnter(e),e.defaultPrevented||e.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:(0,o.M)(e.onPointerLeave,eT(e=>c.onItemLeave(e))),onFocus:(0,o.M)(e.onFocus,()=>v(!0)),onBlur:(0,o.M)(e.onBlur,()=>v(!1))})})})}),el=r.forwardRef((e,n)=>{let{checked:t=!1,onCheckedChange:r,...a}=e;return(0,b.jsx)(em,{scope:e.__scopeMenu,checked:t,children:(0,b.jsx)(eo,{role:"menuitemcheckbox","aria-checked":e_(t)?"mixed":t,...a,ref:n,"data-state":eE(t),onSelect:(0,o.M)(a.onSelect,()=>null==r?void 0:r(!!e_(t)||!t),{checkForDefaultPrevented:!1})})})});el.displayName="MenuCheckboxItem";var eu="MenuRadioGroup",[ei,ed]=I(eu,{value:void 0,onValueChange:()=>{}}),ec=r.forwardRef((e,n)=>{let{value:t,onValueChange:r,...o}=e,a=(0,x.W)(r);return(0,b.jsx)(ei,{scope:e.__scopeMenu,value:t,onValueChange:a,children:(0,b.jsx)(ee,{...o,ref:n})})});ec.displayName=eu;var es="MenuRadioItem",ep=r.forwardRef((e,n)=>{let{value:t,...r}=e,a=ed(es,e.__scopeMenu),l=t===a.value;return(0,b.jsx)(em,{scope:e.__scopeMenu,checked:l,children:(0,b.jsx)(eo,{role:"menuitemradio","aria-checked":l,...r,ref:n,"data-state":eE(l),onSelect:(0,o.M)(r.onSelect,()=>{var e;return null===(e=a.onValueChange)||void 0===e?void 0:e.call(a,t)},{checkForDefaultPrevented:!1})})})});ep.displayName=es;var ef="MenuItemIndicator",[em,ev]=I(ef,{checked:!1}),eh=r.forwardRef((e,n)=>{let{__scopeMenu:t,forceMount:r,...o}=e,a=ev(ef,t);return(0,b.jsx)(g.z,{present:r||e_(a.checked)||!0===a.checked,children:(0,b.jsx)(i.WV.span,{...o,ref:n,"data-state":eE(a.checked)})})});eh.displayName=ef;var eg=r.forwardRef((e,n)=>{let{__scopeMenu:t,...r}=e;return(0,b.jsx)(i.WV.div,{role:"separator","aria-orientation":"horizontal",...r,ref:n})});eg.displayName="MenuSeparator";var ew=r.forwardRef((e,n)=>{let{__scopeMenu:t,...r}=e,o=O(t);return(0,b.jsx)(v.Eh,{...o,...r,ref:n})});ew.displayName="MenuArrow";var ey="MenuSub",[ex,eM]=I(ey),eC=e=>{let{__scopeMenu:n,children:t,open:o=!1,onOpenChange:a}=e,l=F(ey,n),u=O(n),[i,d]=r.useState(null),[c,s]=r.useState(null),p=(0,x.W)(a);return r.useEffect(()=>(!1===l.open&&p(!1),()=>p(!1)),[l.open,p]),(0,b.jsx)(v.fC,{...u,children:(0,b.jsx)(A,{scope:n,open:o,onOpenChange:p,content:c,onContentChange:s,children:(0,b.jsx)(ex,{scope:n,contentId:(0,m.M)(),triggerId:(0,m.M)(),trigger:i,onTriggerChange:d,children:t})})})};eC.displayName=ey;var eb="MenuSubTrigger",ek=r.forwardRef((e,n)=>{let t=F(eb,e.__scopeMenu),l=V(eb,e.__scopeMenu),u=eM(eb,e.__scopeMenu),i=Y(eb,e.__scopeMenu),d=r.useRef(null),{pointerGraceTimerRef:c,onPointerGraceIntentChange:s}=i,p={__scopeMenu:e.__scopeMenu},f=r.useCallback(()=>{d.current&&window.clearTimeout(d.current),d.current=null},[]);return r.useEffect(()=>f,[f]),r.useEffect(()=>{let e=c.current;return()=>{window.clearTimeout(e),s(null)}},[c,s]),(0,b.jsx)(Z,{asChild:!0,...p,children:(0,b.jsx)(ea,{id:u.triggerId,"aria-haspopup":"menu","aria-expanded":t.open,"aria-controls":u.contentId,"data-state":eD(t.open),...e,ref:(0,a.F)(n,u.onTriggerChange),onClick:n=>{var r;null===(r=e.onClick)||void 0===r||r.call(e,n),e.disabled||n.defaultPrevented||(n.currentTarget.focus(),t.open||t.onOpenChange(!0))},onPointerMove:(0,o.M)(e.onPointerMove,eT(n=>{i.onItemEnter(n),n.defaultPrevented||e.disabled||t.open||d.current||(i.onPointerGraceIntentChange(null),d.current=window.setTimeout(()=>{t.onOpenChange(!0),f()},100))})),onPointerLeave:(0,o.M)(e.onPointerLeave,eT(e=>{var n,r;f();let o=null===(n=t.content)||void 0===n?void 0:n.getBoundingClientRect();if(o){let n=null===(r=t.content)||void 0===r?void 0:r.dataset.side,a="right"===n,l=o[a?"left":"right"],u=o[a?"right":"left"];i.onPointerGraceIntentChange({area:[{x:e.clientX+(a?-5:5),y:e.clientY},{x:l,y:o.top},{x:u,y:o.top},{x:u,y:o.bottom},{x:l,y:o.bottom}],side:n}),window.clearTimeout(c.current),c.current=window.setTimeout(()=>i.onPointerGraceIntentChange(null),300)}else{if(i.onTriggerLeave(e),e.defaultPrevented)return;i.onPointerGraceIntentChange(null)}})),onKeyDown:(0,o.M)(e.onKeyDown,n=>{let r=""!==i.searchRef.current;if(!e.disabled&&(!r||" "!==n.key)&&D[l.dir].includes(n.key)){var o;t.onOpenChange(!0),null===(o=t.content)||void 0===o||o.focus(),n.preventDefault()}})})})});ek.displayName=eb;var ej="MenuSubContent",eR=r.forwardRef((e,n)=>{let t=U(X,e.__scopeMenu),{forceMount:l=t.forceMount,...u}=e,i=F(X,e.__scopeMenu),d=V(X,e.__scopeMenu),c=eM(ej,e.__scopeMenu),s=r.useRef(null),p=(0,a.e)(n,s);return(0,b.jsx)(T.Provider,{scope:e.__scopeMenu,children:(0,b.jsx)(g.z,{present:l||i.open,children:(0,b.jsx)(T.Slot,{scope:e.__scopeMenu,children:(0,b.jsx)($,{id:c.contentId,"aria-labelledby":c.triggerId,...u,ref:p,align:"start",side:"rtl"===d.dir?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:e=>{var n;d.isUsingKeyboardRef.current&&(null===(n=s.current)||void 0===n||n.focus()),e.preventDefault()},onCloseAutoFocus:e=>e.preventDefault(),onFocusOutside:(0,o.M)(e.onFocusOutside,e=>{e.target!==c.trigger&&i.onOpenChange(!1)}),onEscapeKeyDown:(0,o.M)(e.onEscapeKeyDown,e=>{d.onClose(),e.preventDefault()}),onKeyDown:(0,o.M)(e.onKeyDown,e=>{let n=e.currentTarget.contains(e.target),t=_[d.dir].includes(e.key);if(n&&t){var r;i.onOpenChange(!1),null===(r=c.trigger)||void 0===r||r.focus(),e.preventDefault()}})})})})})});function eD(e){return e?"open":"closed"}function e_(e){return"indeterminate"===e}function eE(e){return e_(e)?"indeterminate":e?"checked":"unchecked"}function eT(e){return n=>"mouse"===n.pointerType?e(n):void 0}eR.displayName=ej;var eP="DropdownMenu",[eS,eI]=(0,l.b)(eP,[N]),eN=N(),[eO,eL]=eS(eP),eA=e=>{let{__scopeDropdownMenu:n,children:t,dir:o,open:a,defaultOpen:l,onOpenChange:i,modal:d=!0}=e,c=eN(n),s=r.useRef(null),[p=!1,f]=(0,u.T)({prop:a,defaultProp:l,onChange:i});return(0,b.jsx)(eO,{scope:n,triggerId:(0,m.M)(),triggerRef:s,contentId:(0,m.M)(),open:p,onOpenChange:f,onOpenToggle:r.useCallback(()=>f(e=>!e),[f]),modal:d,children:(0,b.jsx)(W,{...c,open:p,onOpenChange:f,dir:o,modal:d,children:t})})};eA.displayName=eP;var eF="DropdownMenuTrigger",eK=r.forwardRef((e,n)=>{let{__scopeDropdownMenu:t,disabled:r=!1,...l}=e,u=eL(eF,t),d=eN(t);return(0,b.jsx)(Z,{asChild:!0,...d,children:(0,b.jsx)(i.WV.button,{type:"button",id:u.triggerId,"aria-haspopup":"menu","aria-expanded":u.open,"aria-controls":u.open?u.contentId:void 0,"data-state":u.open?"open":"closed","data-disabled":r?"":void 0,disabled:r,...l,ref:(0,a.F)(n,u.triggerRef),onPointerDown:(0,o.M)(e.onPointerDown,e=>{r||0!==e.button||!1!==e.ctrlKey||(u.onOpenToggle(),u.open||e.preventDefault())}),onKeyDown:(0,o.M)(e.onKeyDown,e=>{!r&&(["Enter"," "].includes(e.key)&&u.onOpenToggle(),"ArrowDown"===e.key&&u.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(e.key)&&e.preventDefault())})})})});eK.displayName=eF;var eV=e=>{let{__scopeDropdownMenu:n,...t}=e,r=eN(n);return(0,b.jsx)(B,{...r,...t})};eV.displayName="DropdownMenuPortal";var eW="DropdownMenuContent",eZ=r.forwardRef((e,n)=>{let{__scopeDropdownMenu:t,...a}=e,l=eL(eW,t),u=eN(t),i=r.useRef(!1);return(0,b.jsx)(q,{id:l.contentId,"aria-labelledby":l.triggerId,...u,...a,ref:n,onCloseAutoFocus:(0,o.M)(e.onCloseAutoFocus,e=>{var n;i.current||null===(n=l.triggerRef.current)||void 0===n||n.focus(),i.current=!1,e.preventDefault()}),onInteractOutside:(0,o.M)(e.onInteractOutside,e=>{let n=e.detail.originalEvent,t=0===n.button&&!0===n.ctrlKey,r=2===n.button||t;(!l.modal||r)&&(i.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});eZ.displayName=eW;var ez=r.forwardRef((e,n)=>{let{__scopeDropdownMenu:t,...r}=e,o=eN(t);return(0,b.jsx)(ee,{...o,...r,ref:n})});ez.displayName="DropdownMenuGroup";var eG=r.forwardRef((e,n)=>{let{__scopeDropdownMenu:t,...r}=e,o=eN(t);return(0,b.jsx)(en,{...o,...r,ref:n})});eG.displayName="DropdownMenuLabel";var eU=r.forwardRef((e,n)=>{let{__scopeDropdownMenu:t,...r}=e,o=eN(t);return(0,b.jsx)(eo,{...o,...r,ref:n})});eU.displayName="DropdownMenuItem";var eB=r.forwardRef((e,n)=>{let{__scopeDropdownMenu:t,...r}=e,o=eN(t);return(0,b.jsx)(el,{...o,...r,ref:n})});eB.displayName="DropdownMenuCheckboxItem";var eX=r.forwardRef((e,n)=>{let{__scopeDropdownMenu:t,...r}=e,o=eN(t);return(0,b.jsx)(ec,{...o,...r,ref:n})});eX.displayName="DropdownMenuRadioGroup";var eH=r.forwardRef((e,n)=>{let{__scopeDropdownMenu:t,...r}=e,o=eN(t);return(0,b.jsx)(ep,{...o,...r,ref:n})});eH.displayName="DropdownMenuRadioItem";var eY=r.forwardRef((e,n)=>{let{__scopeDropdownMenu:t,...r}=e,o=eN(t);return(0,b.jsx)(eh,{...o,...r,ref:n})});eY.displayName="DropdownMenuItemIndicator";var eq=r.forwardRef((e,n)=>{let{__scopeDropdownMenu:t,...r}=e,o=eN(t);return(0,b.jsx)(eg,{...o,...r,ref:n})});eq.displayName="DropdownMenuSeparator",r.forwardRef((e,n)=>{let{__scopeDropdownMenu:t,...r}=e,o=eN(t);return(0,b.jsx)(ew,{...o,...r,ref:n})}).displayName="DropdownMenuArrow";var eJ=r.forwardRef((e,n)=>{let{__scopeDropdownMenu:t,...r}=e,o=eN(t);return(0,b.jsx)(ek,{...o,...r,ref:n})});eJ.displayName="DropdownMenuSubTrigger";var eQ=r.forwardRef((e,n)=>{let{__scopeDropdownMenu:t,...r}=e,o=eN(t);return(0,b.jsx)(eR,{...o,...r,ref:n,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});eQ.displayName="DropdownMenuSubContent";var e$=eA,e0=eK,e1=eV,e2=eZ,e7=ez,e3=eG,e9=eU,e8=eB,e4=eX,e6=eH,e5=eY,ne=eq,nn=e=>{let{__scopeDropdownMenu:n,children:t,open:r,onOpenChange:o,defaultOpen:a}=e,l=eN(n),[i=!1,d]=(0,u.T)({prop:r,defaultProp:a,onChange:o});return(0,b.jsx)(eC,{...l,open:i,onOpenChange:d,children:t})},nt=eJ,nr=eQ},13027:function(e,n,t){t.d(n,{j:function(){return l}});var r=t(44839);let o=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,a=r.W,l=(e,n)=>t=>{var r;if((null==n?void 0:n.variants)==null)return a(e,null==t?void 0:t.class,null==t?void 0:t.className);let{variants:l,defaultVariants:u}=n,i=Object.keys(l).map(e=>{let n=null==t?void 0:t[e],r=null==u?void 0:u[e];if(null===n)return null;let a=o(n)||o(r);return l[e][a]}),d=t&&Object.entries(t).reduce((e,n)=>{let[t,r]=n;return void 0===r||(e[t]=r),e},{});return a(e,i,null==n?void 0:null===(r=n.compoundVariants)||void 0===r?void 0:r.reduce((e,n)=>{let{class:t,className:r,...o}=n;return Object.entries(o).every(e=>{let[n,t]=e;return Array.isArray(t)?t.includes({...u,...d}[n]):({...u,...d})[n]===t})?[...e,t,r]:e},[]),null==t?void 0:t.class,null==t?void 0:t.className)}},79512:function(e,n,t){t.d(n,{F:function(){return c},ThemeProvider:function(){return s}});var r=t(2265),o=(e,n,t,r,o,a,l,u)=>{let i=document.documentElement,d=["light","dark"];function c(n){(Array.isArray(e)?e:[e]).forEach(e=>{let t="class"===e,r=t&&a?o.map(e=>a[e]||e):o;t?(i.classList.remove(...r),i.classList.add(n)):i.setAttribute(e,n)}),u&&d.includes(n)&&(i.style.colorScheme=n)}if(r)c(r);else try{let e=localStorage.getItem(n)||t,r=l&&"system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;c(r)}catch(e){}},a=["light","dark"],l="(prefers-color-scheme: dark)",u="undefined"==typeof window,i=r.createContext(void 0),d={setTheme:e=>{},themes:[]},c=()=>{var e;return null!=(e=r.useContext(i))?e:d},s=e=>r.useContext(i)?r.createElement(r.Fragment,null,e.children):r.createElement(f,{...e}),p=["light","dark"],f=e=>{let{forcedTheme:n,disableTransitionOnChange:t=!1,enableSystem:o=!0,enableColorScheme:u=!0,storageKey:d="theme",themes:c=p,defaultTheme:s=o?"system":"light",attribute:f="data-theme",value:w,children:y,nonce:x,scriptProps:M}=e,[C,b]=r.useState(()=>v(d,s)),[k,j]=r.useState(()=>v(d)),R=w?Object.values(w):c,D=r.useCallback(e=>{let n=e;if(!n)return;"system"===e&&o&&(n=g());let r=w?w[n]:n,l=t?h(x):null,i=document.documentElement,d=e=>{"class"===e?(i.classList.remove(...R),r&&i.classList.add(r)):e.startsWith("data-")&&(r?i.setAttribute(e,r):i.removeAttribute(e))};if(Array.isArray(f)?f.forEach(d):d(f),u){let e=a.includes(s)?s:null,t=a.includes(n)?n:e;i.style.colorScheme=t}null==l||l()},[x]),_=r.useCallback(e=>{let n="function"==typeof e?e(C):e;b(n);try{localStorage.setItem(d,n)}catch(e){}},[C]),E=r.useCallback(e=>{j(g(e)),"system"===C&&o&&!n&&D("system")},[C,n]);r.useEffect(()=>{let e=window.matchMedia(l);return e.addListener(E),E(e),()=>e.removeListener(E)},[E]),r.useEffect(()=>{let e=e=>{e.key===d&&_(e.newValue||s)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[_]),r.useEffect(()=>{D(null!=n?n:C)},[n,C]);let T=r.useMemo(()=>({theme:C,setTheme:_,forcedTheme:n,resolvedTheme:"system"===C?k:C,themes:o?[...c,"system"]:c,systemTheme:o?k:void 0}),[C,_,n,k,o,c]);return r.createElement(i.Provider,{value:T},r.createElement(m,{forcedTheme:n,storageKey:d,attribute:f,enableSystem:o,enableColorScheme:u,defaultTheme:s,value:w,themes:c,nonce:x,scriptProps:M}),y)},m=r.memo(e=>{let{forcedTheme:n,storageKey:t,attribute:a,enableSystem:l,enableColorScheme:u,defaultTheme:i,value:d,themes:c,nonce:s,scriptProps:p}=e,f=JSON.stringify([a,t,i,n,c,d,l,u]).slice(1,-1);return r.createElement("script",{...p,suppressHydrationWarning:!0,nonce:"undefined"==typeof window?s:"",dangerouslySetInnerHTML:{__html:"(".concat(o.toString(),")(").concat(f,")")}})}),v=(e,n)=>{let t;if(!u){try{t=localStorage.getItem(e)||void 0}catch(e){}return t||n}},h=e=>{let n=document.createElement("style");return e&&n.setAttribute("nonce",e),n.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(n),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(n)},1)}},g=e=>(e||(e=window.matchMedia(l)),e.matches?"dark":"light")}}]);