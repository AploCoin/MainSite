"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8613],{71100:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(78030).Z)("HandCoins",[["path",{d:"M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17",key:"geh8rc"}],["path",{d:"m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",key:"1fto5m"}],["path",{d:"m2 16 6 6",key:"1pfhp9"}],["circle",{cx:"16",cy:"9",r:"2.9",key:"1n0dlu"}],["circle",{cx:"6",cy:"5",r:"3",key:"151irh"}]])},92699:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(78030).Z)("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]])},11553:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(78030).Z)("Pickaxe",[["path",{d:"M14.531 12.469 6.619 20.38a1 1 0 1 1-3-3l7.912-7.912",key:"we99rg"}],["path",{d:"M15.686 4.314A12.5 12.5 0 0 0 5.461 2.958 1 1 0 0 0 5.58 4.71a22 22 0 0 1 6.318 3.393",key:"1w6hck"}],["path",{d:"M17.7 3.7a1 1 0 0 0-1.4 0l-4.6 4.6a1 1 0 0 0 0 1.4l2.6 2.6a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4z",key:"15hgfx"}],["path",{d:"M19.686 8.314a12.501 12.501 0 0 1 1.356 10.225 1 1 0 0 1-1.751-.119 22 22 0 0 0-3.393-6.319",key:"452b4h"}]])},38296:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(78030).Z)("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]])},7580:function(e,t,n){n.d(t,{VY:function(){return ey},aV:function(){return em},ck:function(){return eh},fC:function(){return ev},l_:function(){return eb},rU:function(){return ew},xz:function(){return ep},z$:function(){return eg}});var r=n(2265),o=n(54887),a=n(98324),i=n(78149),l=n(25171),u=n(91715),s=n(1584),c=n(87513),d=n(31383),f=n(53201),v=n(76402),m=n(53938),h=n(47250),p=n(1336),w=n(75137),g=n(31725),y=n(57437),b="NavigationMenu",[x,M,E]=(0,v.B)(b),[C,k,R]=(0,v.B)(b),[T,j]=(0,a.b)(b,[E,R]),[N,S]=T(b),[P,L]=T(b),I=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,value:o,onValueChange:a,defaultValue:i,delayDuration:d=200,skipDelayDuration:f=300,orientation:v="horizontal",dir:m,...h}=e,[p,w]=r.useState(null),g=(0,s.e)(t,e=>w(e)),b=(0,c.gm)(m),x=r.useRef(0),M=r.useRef(0),E=r.useRef(0),[C,k]=r.useState(!0),[R="",T]=(0,u.T)({prop:o,onChange:e=>{let t=f>0;""!==e?(window.clearTimeout(E.current),t&&k(!1)):(window.clearTimeout(E.current),E.current=window.setTimeout(()=>k(!0),f)),null==a||a(e)},defaultProp:i}),j=r.useCallback(()=>{window.clearTimeout(M.current),M.current=window.setTimeout(()=>T(""),150)},[T]),N=r.useCallback(e=>{window.clearTimeout(M.current),T(e)},[T]),S=r.useCallback(e=>{R===e?window.clearTimeout(M.current):x.current=window.setTimeout(()=>{window.clearTimeout(M.current),T(e)},d)},[R,T,d]);return r.useEffect(()=>()=>{window.clearTimeout(x.current),window.clearTimeout(M.current),window.clearTimeout(E.current)},[]),(0,y.jsx)(_,{scope:n,isRootMenu:!0,value:R,dir:b,orientation:v,rootNavigationMenu:p,onTriggerEnter:e=>{window.clearTimeout(x.current),C?S(e):N(e)},onTriggerLeave:()=>{window.clearTimeout(x.current),j()},onContentEnter:()=>window.clearTimeout(M.current),onContentLeave:j,onItemSelect:e=>{T(t=>t===e?"":e)},onItemDismiss:()=>T(""),children:(0,y.jsx)(l.WV.nav,{"aria-label":"Main","data-orientation":v,dir:b,...h,ref:g})})});I.displayName=b;var A="NavigationMenuSub";r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,value:r,onValueChange:o,defaultValue:a,orientation:i="horizontal",...s}=e,c=S(A,n),[d="",f]=(0,u.T)({prop:r,onChange:o,defaultProp:a});return(0,y.jsx)(_,{scope:n,isRootMenu:!1,value:d,dir:c.dir,orientation:i,rootNavigationMenu:c.rootNavigationMenu,onTriggerEnter:e=>f(e),onItemSelect:e=>f(e),onItemDismiss:()=>f(""),children:(0,y.jsx)(l.WV.div,{"data-orientation":i,...s,ref:t})})}).displayName=A;var _=e=>{let{scope:t,isRootMenu:n,rootNavigationMenu:o,dir:a,orientation:i,children:l,value:u,onItemSelect:s,onItemDismiss:c,onTriggerEnter:d,onTriggerLeave:v,onContentEnter:m,onContentLeave:p}=e,[g,b]=r.useState(null),[M,E]=r.useState(new Map),[C,k]=r.useState(null);return(0,y.jsx)(N,{scope:t,isRootMenu:n,rootNavigationMenu:o,value:u,previousValue:(0,h.D)(u),baseId:(0,f.M)(),dir:a,orientation:i,viewport:g,onViewportChange:b,indicatorTrack:C,onIndicatorTrackChange:k,onTriggerEnter:(0,w.W)(d),onTriggerLeave:(0,w.W)(v),onContentEnter:(0,w.W)(m),onContentLeave:(0,w.W)(p),onItemSelect:(0,w.W)(s),onItemDismiss:(0,w.W)(c),onViewportContentChange:r.useCallback((e,t)=>{E(n=>(n.set(e,t),new Map(n)))},[]),onViewportContentRemove:r.useCallback(e=>{E(t=>t.has(e)?(t.delete(e),new Map(t)):t)},[]),children:(0,y.jsx)(x.Provider,{scope:t,children:(0,y.jsx)(P,{scope:t,items:M,children:l})})})},D="NavigationMenuList",F=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,...r}=e,o=S(D,n),a=(0,y.jsx)(l.WV.ul,{"data-orientation":o.orientation,...r,ref:t});return(0,y.jsx)(l.WV.div,{style:{position:"relative"},ref:o.onIndicatorTrackChange,children:(0,y.jsx)(x.Slot,{scope:n,children:o.isRootMenu?(0,y.jsx)(er,{asChild:!0,children:a}):a})})});F.displayName=D;var V="NavigationMenuItem",[W,K]=T(V),z=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,value:o,...a}=e,i=(0,f.M)(),u=r.useRef(null),s=r.useRef(null),c=r.useRef(null),d=r.useRef(()=>{}),v=r.useRef(!1),m=r.useCallback(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"start";if(u.current){d.current();let t=ei(u.current);t.length&&el("start"===e?t:t.reverse())}},[]),h=r.useCallback(()=>{if(u.current){let e=ei(u.current);e.length&&(d.current=(e.forEach(e=>{e.dataset.tabindex=e.getAttribute("tabindex")||"",e.setAttribute("tabindex","-1")}),()=>{e.forEach(e=>{let t=e.dataset.tabindex;e.setAttribute("tabindex",t)})}))}},[]);return(0,y.jsx)(W,{scope:n,value:o||i||"LEGACY_REACT_AUTO_VALUE",triggerRef:s,contentRef:u,focusProxyRef:c,wasEscapeCloseRef:v,onEntryKeyDown:m,onFocusProxyEnter:m,onRootContentClose:h,onContentFocusOutside:h,children:(0,y.jsx)(l.WV.li,{...a,ref:t})})});z.displayName=V;var O="NavigationMenuTrigger",H=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,disabled:o,...a}=e,u=S(O,e.__scopeNavigationMenu),c=K(O,e.__scopeNavigationMenu),d=r.useRef(null),f=(0,s.e)(d,c.triggerRef,t),v=ec(u.baseId,c.value),m=ed(u.baseId,c.value),h=r.useRef(!1),p=r.useRef(!1),w=c.value===u.value;return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(x.ItemSlot,{scope:n,value:c.value,children:(0,y.jsx)(ea,{asChild:!0,children:(0,y.jsx)(l.WV.button,{id:v,disabled:o,"data-disabled":o?"":void 0,"data-state":es(w),"aria-expanded":w,"aria-controls":m,...a,ref:f,onPointerEnter:(0,i.M)(e.onPointerEnter,()=>{p.current=!1,c.wasEscapeCloseRef.current=!1}),onPointerMove:(0,i.M)(e.onPointerMove,ef(()=>{o||p.current||c.wasEscapeCloseRef.current||h.current||(u.onTriggerEnter(c.value),h.current=!0)})),onPointerLeave:(0,i.M)(e.onPointerLeave,ef(()=>{o||(u.onTriggerLeave(),h.current=!1)})),onClick:(0,i.M)(e.onClick,()=>{u.onItemSelect(c.value),p.current=w}),onKeyDown:(0,i.M)(e.onKeyDown,e=>{let t={horizontal:"ArrowDown",vertical:"rtl"===u.dir?"ArrowLeft":"ArrowRight"}[u.orientation];w&&e.key===t&&(c.onEntryKeyDown(),e.preventDefault())})})})}),w&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(g.f,{"aria-hidden":!0,tabIndex:0,ref:c.focusProxyRef,onFocus:e=>{let t=c.contentRef.current,n=e.relatedTarget,r=n===d.current,o=null==t?void 0:t.contains(n);(r||!o)&&c.onFocusProxyEnter(r?"start":"end")}}),u.viewport&&(0,y.jsx)("span",{"aria-owns":m})]})]})});H.displayName=O;var Z="navigationMenu.linkSelect",U=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,active:r,onSelect:o,...a}=e;return(0,y.jsx)(ea,{asChild:!0,children:(0,y.jsx)(l.WV.a,{"data-active":r?"":void 0,"aria-current":r?"page":void 0,...a,ref:t,onClick:(0,i.M)(e.onClick,e=>{let t=e.target,n=new CustomEvent(Z,{bubbles:!0,cancelable:!0});if(t.addEventListener(Z,e=>null==o?void 0:o(e),{once:!0}),(0,l.jH)(t,n),!n.defaultPrevented&&!e.metaKey){let e=new CustomEvent($,{bubbles:!0,cancelable:!0});(0,l.jH)(t,e)}},{checkForDefaultPrevented:!1})})})});U.displayName="NavigationMenuLink";var B="NavigationMenuIndicator",G=r.forwardRef((e,t)=>{let{forceMount:n,...r}=e,a=S(B,e.__scopeNavigationMenu),i=!!a.value;return a.indicatorTrack?o.createPortal((0,y.jsx)(d.z,{present:n||i,children:(0,y.jsx)(Y,{...r,ref:t})}),a.indicatorTrack):null});G.displayName=B;var Y=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,...o}=e,a=S(B,n),i=M(n),[u,s]=r.useState(null),[c,d]=r.useState(null),f="horizontal"===a.orientation,v=!!a.value;r.useEffect(()=>{var e;let t=null===(e=i().find(e=>e.value===a.value))||void 0===e?void 0:e.ref.current;t&&s(t)},[i,a.value]);let m=()=>{u&&d({size:f?u.offsetWidth:u.offsetHeight,offset:f?u.offsetLeft:u.offsetTop})};return eu(u,m),eu(a.indicatorTrack,m),c?(0,y.jsx)(l.WV.div,{"aria-hidden":!0,"data-state":v?"visible":"hidden","data-orientation":a.orientation,...o,ref:t,style:{position:"absolute",...f?{left:0,width:c.size+"px",transform:"translateX(".concat(c.offset,"px)")}:{top:0,height:c.size+"px",transform:"translateY(".concat(c.offset,"px)")},...o.style}}):null}),q="NavigationMenuContent",X=r.forwardRef((e,t)=>{let{forceMount:n,...r}=e,o=S(q,e.__scopeNavigationMenu),a=K(q,e.__scopeNavigationMenu),l=(0,s.e)(a.contentRef,t),u=a.value===o.value,c={value:a.value,triggerRef:a.triggerRef,focusProxyRef:a.focusProxyRef,wasEscapeCloseRef:a.wasEscapeCloseRef,onContentFocusOutside:a.onContentFocusOutside,onRootContentClose:a.onRootContentClose,...r};return o.viewport?(0,y.jsx)(J,{forceMount:n,...c,ref:l}):(0,y.jsx)(d.z,{present:n||u,children:(0,y.jsx)(Q,{"data-state":es(u),...c,ref:l,onPointerEnter:(0,i.M)(e.onPointerEnter,o.onContentEnter),onPointerLeave:(0,i.M)(e.onPointerLeave,ef(o.onContentLeave)),style:{pointerEvents:!u&&o.isRootMenu?"none":void 0,...c.style}})})});X.displayName=q;var J=r.forwardRef((e,t)=>{let{onViewportContentChange:n,onViewportContentRemove:r}=S(q,e.__scopeNavigationMenu);return(0,p.b)(()=>{n(e.value,{ref:t,...e})},[e,t,n]),(0,p.b)(()=>()=>r(e.value),[e.value,r]),null}),$="navigationMenu.rootContentDismiss",Q=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,value:o,triggerRef:a,focusProxyRef:l,wasEscapeCloseRef:u,onRootContentClose:c,onContentFocusOutside:d,...f}=e,v=S(q,n),h=r.useRef(null),p=(0,s.e)(h,t),w=ec(v.baseId,o),g=ed(v.baseId,o),b=M(n),x=r.useRef(null),{onItemDismiss:E}=v;r.useEffect(()=>{let e=h.current;if(v.isRootMenu&&e){let t=()=>{var t;E(),c(),e.contains(document.activeElement)&&(null===(t=a.current)||void 0===t||t.focus())};return e.addEventListener($,t),()=>e.removeEventListener($,t)}},[v.isRootMenu,e.value,a,E,c]);let C=r.useMemo(()=>{let e=b().map(e=>e.value);"rtl"===v.dir&&e.reverse();let t=e.indexOf(v.value),n=e.indexOf(v.previousValue),r=o===v.value,a=n===e.indexOf(o);if(!r&&!a)return x.current;let i=(()=>{if(t!==n){if(r&&-1!==n)return t>n?"from-end":"from-start";if(a&&-1!==t)return t>n?"to-start":"to-end"}return null})();return x.current=i,i},[v.previousValue,v.value,v.dir,b,o]);return(0,y.jsx)(er,{asChild:!0,children:(0,y.jsx)(m.XB,{id:g,"aria-labelledby":w,"data-motion":C,"data-orientation":v.orientation,...f,ref:p,disableOutsidePointerEvents:!1,onDismiss:()=>{var e;let t=new Event($,{bubbles:!0,cancelable:!0});null===(e=h.current)||void 0===e||e.dispatchEvent(t)},onFocusOutside:(0,i.M)(e.onFocusOutside,e=>{var t;d();let n=e.target;(null===(t=v.rootNavigationMenu)||void 0===t?void 0:t.contains(n))&&e.preventDefault()}),onPointerDownOutside:(0,i.M)(e.onPointerDownOutside,e=>{var t;let n=e.target,r=b().some(e=>{var t;return null===(t=e.ref.current)||void 0===t?void 0:t.contains(n)}),o=v.isRootMenu&&(null===(t=v.viewport)||void 0===t?void 0:t.contains(n));(r||o||!v.isRootMenu)&&e.preventDefault()}),onKeyDown:(0,i.M)(e.onKeyDown,e=>{let t=e.altKey||e.ctrlKey||e.metaKey;if("Tab"===e.key&&!t){let t=ei(e.currentTarget),r=document.activeElement,o=t.findIndex(e=>e===r);if(el(e.shiftKey?t.slice(0,o).reverse():t.slice(o+1,t.length)))e.preventDefault();else{var n;null===(n=l.current)||void 0===n||n.focus()}}}),onEscapeKeyDown:(0,i.M)(e.onEscapeKeyDown,e=>{u.current=!0})})})}),ee="NavigationMenuViewport",et=r.forwardRef((e,t)=>{let{forceMount:n,...r}=e,o=!!S(ee,e.__scopeNavigationMenu).value;return(0,y.jsx)(d.z,{present:n||o,children:(0,y.jsx)(en,{...r,ref:t})})});et.displayName=ee;var en=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,children:o,...a}=e,u=S(ee,n),c=(0,s.e)(t,u.onViewportChange),f=L(q,e.__scopeNavigationMenu),[v,m]=r.useState(null),[h,p]=r.useState(null),w=v?(null==v?void 0:v.width)+"px":void 0,g=v?(null==v?void 0:v.height)+"px":void 0,b=!!u.value,x=b?u.value:u.previousValue;return eu(h,()=>{h&&m({width:h.offsetWidth,height:h.offsetHeight})}),(0,y.jsx)(l.WV.div,{"data-state":es(b),"data-orientation":u.orientation,...a,ref:c,style:{pointerEvents:!b&&u.isRootMenu?"none":void 0,"--radix-navigation-menu-viewport-width":w,"--radix-navigation-menu-viewport-height":g,...a.style},onPointerEnter:(0,i.M)(e.onPointerEnter,u.onContentEnter),onPointerLeave:(0,i.M)(e.onPointerLeave,ef(u.onContentLeave)),children:Array.from(f.items).map(e=>{let[t,{ref:n,forceMount:r,...o}]=e,a=x===t;return(0,y.jsx)(d.z,{present:r||a,children:(0,y.jsx)(Q,{...o,ref:(0,s.F)(n,e=>{a&&e&&p(e)})})},t)})})}),er=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,...r}=e,o=S("FocusGroup",n);return(0,y.jsx)(C.Provider,{scope:n,children:(0,y.jsx)(C.Slot,{scope:n,children:(0,y.jsx)(l.WV.div,{dir:o.dir,...r,ref:t})})})}),eo=["ArrowRight","ArrowLeft","ArrowUp","ArrowDown"],ea=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,...r}=e,o=k(n),a=S("FocusGroupItem",n);return(0,y.jsx)(C.ItemSlot,{scope:n,children:(0,y.jsx)(l.WV.button,{...r,ref:t,onKeyDown:(0,i.M)(e.onKeyDown,e=>{if(["Home","End",...eo].includes(e.key)){let t=o().map(e=>e.ref.current);if(["rtl"===a.dir?"ArrowRight":"ArrowLeft","ArrowUp","End"].includes(e.key)&&t.reverse(),eo.includes(e.key)){let n=t.indexOf(e.currentTarget);t=t.slice(n+1)}setTimeout(()=>el(t)),e.preventDefault()}})})})});function ei(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function el(e){let t=document.activeElement;return e.some(e=>e===t||(e.focus(),document.activeElement!==t))}function eu(e,t){let n=(0,w.W)(t);(0,p.b)(()=>{let t=0;if(e){let r=new ResizeObserver(()=>{cancelAnimationFrame(t),t=window.requestAnimationFrame(n)});return r.observe(e),()=>{window.cancelAnimationFrame(t),r.unobserve(e)}}},[e,n])}function es(e){return e?"open":"closed"}function ec(e,t){return"".concat(e,"-trigger-").concat(t)}function ed(e,t){return"".concat(e,"-content-").concat(t)}function ef(e){return t=>"mouse"===t.pointerType?e(t):void 0}var ev=I,em=F,eh=z,ep=H,ew=U,eg=G,ey=X,eb=et},47250:function(e,t,n){n.d(t,{D:function(){return o}});var r=n(2265);function o(e){let t=r.useRef({value:e,previous:e});return r.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}},31725:function(e,t,n){n.d(t,{T:function(){return i},f:function(){return l}});var r=n(2265),o=n(25171),a=n(57437),i=r.forwardRef((e,t)=>(0,a.jsx)(o.WV.span,{...e,ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));i.displayName="VisuallyHidden";var l=i},79512:function(e,t,n){n.d(t,{F:function(){return c},ThemeProvider:function(){return d}});var r=n(2265),o=(e,t,n,r,o,a,i,l)=>{let u=document.documentElement,s=["light","dark"];function c(t){(Array.isArray(e)?e:[e]).forEach(e=>{let n="class"===e,r=n&&a?o.map(e=>a[e]||e):o;n?(u.classList.remove(...r),u.classList.add(t)):u.setAttribute(e,t)}),l&&s.includes(t)&&(u.style.colorScheme=t)}if(r)c(r);else try{let e=localStorage.getItem(t)||n,r=i&&"system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;c(r)}catch(e){}},a=["light","dark"],i="(prefers-color-scheme: dark)",l="undefined"==typeof window,u=r.createContext(void 0),s={setTheme:e=>{},themes:[]},c=()=>{var e;return null!=(e=r.useContext(u))?e:s},d=e=>r.useContext(u)?r.createElement(r.Fragment,null,e.children):r.createElement(v,{...e}),f=["light","dark"],v=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:o=!0,enableColorScheme:l=!0,storageKey:s="theme",themes:c=f,defaultTheme:d=o?"system":"light",attribute:v="data-theme",value:g,children:y,nonce:b,scriptProps:x}=e,[M,E]=r.useState(()=>h(s,d)),[C,k]=r.useState(()=>h(s)),R=g?Object.values(g):c,T=r.useCallback(e=>{let t=e;if(!t)return;"system"===e&&o&&(t=w());let r=g?g[t]:t,i=n?p(b):null,u=document.documentElement,s=e=>{"class"===e?(u.classList.remove(...R),r&&u.classList.add(r)):e.startsWith("data-")&&(r?u.setAttribute(e,r):u.removeAttribute(e))};if(Array.isArray(v)?v.forEach(s):s(v),l){let e=a.includes(d)?d:null,n=a.includes(t)?t:e;u.style.colorScheme=n}null==i||i()},[b]),j=r.useCallback(e=>{let t="function"==typeof e?e(M):e;E(t);try{localStorage.setItem(s,t)}catch(e){}},[M]),N=r.useCallback(e=>{k(w(e)),"system"===M&&o&&!t&&T("system")},[M,t]);r.useEffect(()=>{let e=window.matchMedia(i);return e.addListener(N),N(e),()=>e.removeListener(N)},[N]),r.useEffect(()=>{let e=e=>{e.key===s&&j(e.newValue||d)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[j]),r.useEffect(()=>{T(null!=t?t:M)},[t,M]);let S=r.useMemo(()=>({theme:M,setTheme:j,forcedTheme:t,resolvedTheme:"system"===M?C:M,themes:o?[...c,"system"]:c,systemTheme:o?C:void 0}),[M,j,t,C,o,c]);return r.createElement(u.Provider,{value:S},r.createElement(m,{forcedTheme:t,storageKey:s,attribute:v,enableSystem:o,enableColorScheme:l,defaultTheme:d,value:g,themes:c,nonce:b,scriptProps:x}),y)},m=r.memo(e=>{let{forcedTheme:t,storageKey:n,attribute:a,enableSystem:i,enableColorScheme:l,defaultTheme:u,value:s,themes:c,nonce:d,scriptProps:f}=e,v=JSON.stringify([a,n,u,t,c,s,i,l]).slice(1,-1);return r.createElement("script",{...f,suppressHydrationWarning:!0,nonce:"undefined"==typeof window?d:"",dangerouslySetInnerHTML:{__html:"(".concat(o.toString(),")(").concat(v,")")}})}),h=(e,t)=>{let n;if(!l){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},p=e=>{let t=document.createElement("style");return e&&t.setAttribute("nonce",e),t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(t)},1)}},w=e=>(e||(e=window.matchMedia(i)),e.matches?"dark":"light")}}]);