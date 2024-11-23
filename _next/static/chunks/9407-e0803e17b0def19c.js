"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9407],{78030:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(2265);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),l=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((e,t,n)=>!!e&&""!==e.trim()&&n.indexOf(e)===t).join(" ").trim()};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,r.forwardRef)((e,t)=>{let{color:n="currentColor",size:o=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:u="",children:c,iconNode:d,...m}=e;return(0,r.createElement)("svg",{ref:t,...s,width:o,height:o,stroke:n,strokeWidth:a?24*Number(i)/Number(o):i,className:l("lucide",u),...m},[...d.map(e=>{let[t,n]=e;return(0,r.createElement)(t,n)}),...Array.isArray(c)?c:[c]])}),a=(e,t)=>{let n=(0,r.forwardRef)((n,s)=>{let{className:a,...u}=n;return(0,r.createElement)(i,{ref:s,iconNode:t,className:l("lucide-".concat(o(e)),a),...u})});return n.displayName="".concat(e),n}},53938:function(e,t,n){n.d(t,{I0:function(){return p},XB:function(){return m},fC:function(){return y}});var r,o=n(2265),l=n(78149),s=n(25171),i=n(1584),a=n(75137),u=n(57437),c="dismissableLayer.update",d=o.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),m=o.forwardRef((e,t)=>{var n,m;let{disableOutsidePointerEvents:v=!1,onEscapeKeyDown:y,onPointerDownOutside:p,onFocusOutside:b,onInteractOutside:E,onDismiss:w,...g}=e,C=o.useContext(d),[k,L]=o.useState(null),T=null!==(m=null==k?void 0:k.ownerDocument)&&void 0!==m?m:null===(n=globalThis)||void 0===n?void 0:n.document,[,S]=o.useState({}),P=(0,i.e)(t,e=>L(e)),O=Array.from(C.layers),[W]=[...C.layersWithOutsidePointerEventsDisabled].slice(-1),D=O.indexOf(W),x=k?O.indexOf(k):-1,A=C.layersWithOutsidePointerEventsDisabled.size>0,N=x>=D,j=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,a.W)(e),l=o.useRef(!1),s=o.useRef(()=>{});return o.useEffect(()=>{let e=e=>{if(e.target&&!l.current){let t=function(){h("dismissableLayer.pointerDownOutside",r,o,{discrete:!0})},o={originalEvent:e};"touch"===e.pointerType?(n.removeEventListener("click",s.current),s.current=t,n.addEventListener("click",s.current,{once:!0})):t()}else n.removeEventListener("click",s.current);l.current=!1},t=window.setTimeout(()=>{n.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(t),n.removeEventListener("pointerdown",e),n.removeEventListener("click",s.current)}},[n,r]),{onPointerDownCapture:()=>l.current=!0}}(e=>{let t=e.target,n=[...C.branches].some(e=>e.contains(t));!N||n||(null==p||p(e),null==E||E(e),e.defaultPrevented||null==w||w())},T),R=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,a.W)(e),l=o.useRef(!1);return o.useEffect(()=>{let e=e=>{e.target&&!l.current&&h("dismissableLayer.focusOutside",r,{originalEvent:e},{discrete:!1})};return n.addEventListener("focusin",e),()=>n.removeEventListener("focusin",e)},[n,r]),{onFocusCapture:()=>l.current=!0,onBlurCapture:()=>l.current=!1}}(e=>{let t=e.target;[...C.branches].some(e=>e.contains(t))||(null==b||b(e),null==E||E(e),e.defaultPrevented||null==w||w())},T);return!function(e,t=globalThis?.document){let n=(0,a.W)(e);o.useEffect(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[n,t])}(e=>{x!==C.layers.size-1||(null==y||y(e),!e.defaultPrevented&&w&&(e.preventDefault(),w()))},T),o.useEffect(()=>{if(k)return v&&(0===C.layersWithOutsidePointerEventsDisabled.size&&(r=T.body.style.pointerEvents,T.body.style.pointerEvents="none"),C.layersWithOutsidePointerEventsDisabled.add(k)),C.layers.add(k),f(),()=>{v&&1===C.layersWithOutsidePointerEventsDisabled.size&&(T.body.style.pointerEvents=r)}},[k,T,v,C]),o.useEffect(()=>()=>{k&&(C.layers.delete(k),C.layersWithOutsidePointerEventsDisabled.delete(k),f())},[k,C]),o.useEffect(()=>{let e=()=>S({});return document.addEventListener(c,e),()=>document.removeEventListener(c,e)},[]),(0,u.jsx)(s.WV.div,{...g,ref:P,style:{pointerEvents:A?N?"auto":"none":void 0,...e.style},onFocusCapture:(0,l.M)(e.onFocusCapture,R.onFocusCapture),onBlurCapture:(0,l.M)(e.onBlurCapture,R.onBlurCapture),onPointerDownCapture:(0,l.M)(e.onPointerDownCapture,j.onPointerDownCapture)})});m.displayName="DismissableLayer";var v=o.forwardRef((e,t)=>{let n=o.useContext(d),r=o.useRef(null),l=(0,i.e)(t,r);return o.useEffect(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,u.jsx)(s.WV.div,{...e,ref:l})});function f(){let e=new CustomEvent(c);document.dispatchEvent(e)}function h(e,t,n,r){let{discrete:o}=r,l=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&l.addEventListener(e,t,{once:!0}),o?(0,s.jH)(l,i):l.dispatchEvent(i)}v.displayName="DismissableLayerBranch";var y=m,p=v},56935:function(e,t,n){n.d(t,{h:function(){return a}});var r=n(2265),o=n(54887),l=n(25171),s=n(1336),i=n(57437),a=r.forwardRef((e,t)=>{var n,a;let{container:u,...c}=e,[d,m]=r.useState(!1);(0,s.b)(()=>m(!0),[]);let v=u||d&&(null===(a=globalThis)||void 0===a?void 0:null===(n=a.document)||void 0===n?void 0:n.body);return v?o.createPortal((0,i.jsx)(l.WV.div,{...c,ref:t}),v):null});a.displayName="Portal"},13027:function(e,t,n){n.d(t,{j:function(){return s}});var r=n(44839);let o=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,l=r.W,s=(e,t)=>n=>{var r;if((null==t?void 0:t.variants)==null)return l(e,null==n?void 0:n.class,null==n?void 0:n.className);let{variants:s,defaultVariants:i}=t,a=Object.keys(s).map(e=>{let t=null==n?void 0:n[e],r=null==i?void 0:i[e];if(null===t)return null;let l=o(t)||o(r);return s[e][l]}),u=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return void 0===r||(e[n]=r),e},{});return l(e,a,null==t?void 0:null===(r=t.compoundVariants)||void 0===r?void 0:r.reduce((e,t)=>{let{class:n,className:r,...o}=t;return Object.entries(o).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...i,...u}[t]):({...i,...u})[t]===n})?[...e,n,r]:e},[]),null==n?void 0:n.class,null==n?void 0:n.className)}},79512:function(e,t,n){n.d(t,{F:function(){return c},ThemeProvider:function(){return d}});var r=n(2265),o=(e,t,n,r,o,l,s,i)=>{let a=document.documentElement,u=["light","dark"];function c(t){(Array.isArray(e)?e:[e]).forEach(e=>{let n="class"===e,r=n&&l?o.map(e=>l[e]||e):o;n?(a.classList.remove(...r),a.classList.add(t)):a.setAttribute(e,t)}),i&&u.includes(t)&&(a.style.colorScheme=t)}if(r)c(r);else try{let e=localStorage.getItem(t)||n,r=s&&"system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;c(r)}catch(e){}},l=["light","dark"],s="(prefers-color-scheme: dark)",i="undefined"==typeof window,a=r.createContext(void 0),u={setTheme:e=>{},themes:[]},c=()=>{var e;return null!=(e=r.useContext(a))?e:u},d=e=>r.useContext(a)?r.createElement(r.Fragment,null,e.children):r.createElement(v,{...e}),m=["light","dark"],v=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:o=!0,enableColorScheme:i=!0,storageKey:u="theme",themes:c=m,defaultTheme:d=o?"system":"light",attribute:v="data-theme",value:b,children:E,nonce:w,scriptProps:g}=e,[C,k]=r.useState(()=>h(u,d)),[L,T]=r.useState(()=>h(u)),S=b?Object.values(b):c,P=r.useCallback(e=>{let t=e;if(!t)return;"system"===e&&o&&(t=p());let r=b?b[t]:t,s=n?y(w):null,a=document.documentElement,u=e=>{"class"===e?(a.classList.remove(...S),r&&a.classList.add(r)):e.startsWith("data-")&&(r?a.setAttribute(e,r):a.removeAttribute(e))};if(Array.isArray(v)?v.forEach(u):u(v),i){let e=l.includes(d)?d:null,n=l.includes(t)?t:e;a.style.colorScheme=n}null==s||s()},[w]),O=r.useCallback(e=>{let t="function"==typeof e?e(C):e;k(t);try{localStorage.setItem(u,t)}catch(e){}},[C]),W=r.useCallback(e=>{T(p(e)),"system"===C&&o&&!t&&P("system")},[C,t]);r.useEffect(()=>{let e=window.matchMedia(s);return e.addListener(W),W(e),()=>e.removeListener(W)},[W]),r.useEffect(()=>{let e=e=>{e.key===u&&O(e.newValue||d)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[O]),r.useEffect(()=>{P(null!=t?t:C)},[t,C]);let D=r.useMemo(()=>({theme:C,setTheme:O,forcedTheme:t,resolvedTheme:"system"===C?L:C,themes:o?[...c,"system"]:c,systemTheme:o?L:void 0}),[C,O,t,L,o,c]);return r.createElement(a.Provider,{value:D},r.createElement(f,{forcedTheme:t,storageKey:u,attribute:v,enableSystem:o,enableColorScheme:i,defaultTheme:d,value:b,themes:c,nonce:w,scriptProps:g}),E)},f=r.memo(e=>{let{forcedTheme:t,storageKey:n,attribute:l,enableSystem:s,enableColorScheme:i,defaultTheme:a,value:u,themes:c,nonce:d,scriptProps:m}=e,v=JSON.stringify([l,n,a,t,c,u,s,i]).slice(1,-1);return r.createElement("script",{...m,suppressHydrationWarning:!0,nonce:"undefined"==typeof window?d:"",dangerouslySetInnerHTML:{__html:"(".concat(o.toString(),")(").concat(v,")")}})}),h=(e,t)=>{let n;if(!i){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},y=e=>{let t=document.createElement("style");return e&&t.setAttribute("nonce",e),t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(t)},1)}},p=e=>(e||(e=window.matchMedia(s)),e.matches?"dark":"light")}}]);