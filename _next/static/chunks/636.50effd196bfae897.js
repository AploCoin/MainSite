(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[636],{50968:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var n=a(57437),s=a(2265),r=a(16463),o=a(31590),l=a(89733),i=a(42421),d=a(66648);function c(){var e;let t=(0,r.useRouter)(),a=(0,r.usePathname)(),c=(0,r.useParams)(),u=[{code:"en",label:"English",flag:"/flags/gb.svg"},{code:"ua",label:"Українська",flag:"/flags/ua.svg"},{code:"ru",label:"Русский",flag:"/flags/ru.svg"}],[f,m]=(0,s.useState)(c.locale||u[0].code),p=e=>{if(e!==f){m(e);let n="/".concat(e).concat(a.substring(3));t.push(n)}},g=null===(e=u.find(e=>e.code===f))||void 0===e?void 0:e.flag;return(0,n.jsxs)(o.h_,{children:[(0,n.jsx)(o.$F,{asChild:!0,className:"!m-0",children:(0,n.jsxs)(l.z,{variant:"outline",className:"flex items-center gap-2",children:[(0,n.jsx)(d.default,{src:g||"/flags/gb.svg",alt:"".concat(f," flag"),width:20,height:20,className:"rounded-sm object-cover",unoptimized:!0}),(0,n.jsx)("span",{children:"string"==typeof f?f.toUpperCase():f[0].toUpperCase()}),(0,n.jsx)(i.Z,{className:"h-4 w-4"})]})}),(0,n.jsx)(o.AW,{align:"end",className:"w-40",children:(0,n.jsx)(o.Qk,{children:u.map(e=>(0,n.jsxs)(o.Xi,{onClick:()=>p(e.code),className:"flex items-center gap-2",children:[(0,n.jsx)(d.default,{src:e.flag,alt:"".concat(e.code," flag"),width:20,height:20,className:"rounded-sm object-cover",unoptimized:!0}),e.label]},e.code))})})]})}},50636:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return ef}});var n=a(57437),s=a(97348),r=a.n(s),o=a(2265),l=a(18087),i=a(16463),d=a(87138),c=a(66648),u=a(78149),f=a(1584),m=a(98324),p=a(53201),g=a(91715),h=a(53938),x=a(80467),v=a(56935),b=a(31383),j=a(25171),y=a(20589),N=a(17590),w=a(78369),R=a(71538),_="Dialog",[k,C]=(0,m.b)(_),[D,z]=k(_),F=e=>{let{__scopeDialog:t,children:a,open:s,defaultOpen:r,onOpenChange:l,modal:i=!0}=e,d=o.useRef(null),c=o.useRef(null),[u=!1,f]=(0,g.T)({prop:s,defaultProp:r,onChange:l});return(0,n.jsx)(D,{scope:t,triggerRef:d,contentRef:c,contentId:(0,p.M)(),titleId:(0,p.M)(),descriptionId:(0,p.M)(),open:u,onOpenChange:f,onOpenToggle:o.useCallback(()=>f(e=>!e),[f]),modal:i,children:a})};F.displayName=_;var I="DialogTrigger",O=o.forwardRef((e,t)=>{let{__scopeDialog:a,...s}=e,r=z(I,a),o=(0,f.e)(t,r.triggerRef);return(0,n.jsx)(j.WV.button,{type:"button","aria-haspopup":"dialog","aria-expanded":r.open,"aria-controls":r.contentId,"data-state":G(r.open),...s,ref:o,onClick:(0,u.M)(e.onClick,r.onOpenToggle)})});O.displayName=I;var E="DialogPortal",[M,A]=k(E,{forceMount:void 0}),W=e=>{let{__scopeDialog:t,forceMount:a,children:s,container:r}=e,l=z(E,t);return(0,n.jsx)(M,{scope:t,forceMount:a,children:o.Children.map(s,e=>(0,n.jsx)(b.z,{present:a||l.open,children:(0,n.jsx)(v.h,{asChild:!0,container:r,children:e})}))})};W.displayName=E;var Z="DialogOverlay",P=o.forwardRef((e,t)=>{let a=A(Z,e.__scopeDialog),{forceMount:s=a.forceMount,...r}=e,o=z(Z,e.__scopeDialog);return o.modal?(0,n.jsx)(b.z,{present:s||o.open,children:(0,n.jsx)(V,{...r,ref:t})}):null});P.displayName=Z;var V=o.forwardRef((e,t)=>{let{__scopeDialog:a,...s}=e,r=z(Z,a);return(0,n.jsx)(N.Z,{as:R.g7,allowPinchZoom:!0,shards:[r.contentRef],children:(0,n.jsx)(j.WV.div,{"data-state":G(r.open),...s,ref:t,style:{pointerEvents:"auto",...s.style}})})}),T="DialogContent",S=o.forwardRef((e,t)=>{let a=A(T,e.__scopeDialog),{forceMount:s=a.forceMount,...r}=e,o=z(T,e.__scopeDialog);return(0,n.jsx)(b.z,{present:s||o.open,children:o.modal?(0,n.jsx)(U,{...r,ref:t}):(0,n.jsx)(X,{...r,ref:t})})});S.displayName=T;var U=o.forwardRef((e,t)=>{let a=z(T,e.__scopeDialog),s=o.useRef(null),r=(0,f.e)(t,a.contentRef,s);return o.useEffect(()=>{let e=s.current;if(e)return(0,w.Ry)(e)},[]),(0,n.jsx)(B,{...e,ref:r,trapFocus:a.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,u.M)(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=a.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:(0,u.M)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,a=0===t.button&&!0===t.ctrlKey;(2===t.button||a)&&e.preventDefault()}),onFocusOutside:(0,u.M)(e.onFocusOutside,e=>e.preventDefault())})}),X=o.forwardRef((e,t)=>{let a=z(T,e.__scopeDialog),s=o.useRef(!1),r=o.useRef(!1);return(0,n.jsx)(B,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var n,o;null===(n=e.onCloseAutoFocus)||void 0===n||n.call(e,t),t.defaultPrevented||(s.current||null===(o=a.triggerRef.current)||void 0===o||o.focus(),t.preventDefault()),s.current=!1,r.current=!1},onInteractOutside:t=>{var n,o;null===(n=e.onInteractOutside)||void 0===n||n.call(e,t),t.defaultPrevented||(s.current=!0,"pointerdown"!==t.detail.originalEvent.type||(r.current=!0));let l=t.target;(null===(o=a.triggerRef.current)||void 0===o?void 0:o.contains(l))&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&r.current&&t.preventDefault()}})}),B=o.forwardRef((e,t)=>{let{__scopeDialog:a,trapFocus:s,onOpenAutoFocus:r,onCloseAutoFocus:l,...i}=e,d=z(T,a),c=o.useRef(null),u=(0,f.e)(t,c);return(0,y.EW)(),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(x.M,{asChild:!0,loop:!0,trapped:s,onMountAutoFocus:r,onUnmountAutoFocus:l,children:(0,n.jsx)(h.XB,{role:"dialog",id:d.contentId,"aria-describedby":d.descriptionId,"aria-labelledby":d.titleId,"data-state":G(d.open),...i,ref:u,onDismiss:()=>d.onOpenChange(!1)})}),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ee,{titleId:d.titleId}),(0,n.jsx)(et,{contentRef:c,descriptionId:d.descriptionId})]})]})}),q="DialogTitle",H=o.forwardRef((e,t)=>{let{__scopeDialog:a,...s}=e,r=z(q,a);return(0,n.jsx)(j.WV.h2,{id:r.titleId,...s,ref:t})});H.displayName=q;var $="DialogDescription",Q=o.forwardRef((e,t)=>{let{__scopeDialog:a,...s}=e,r=z($,a);return(0,n.jsx)(j.WV.p,{id:r.descriptionId,...s,ref:t})});Q.displayName=$;var Y="DialogClose";function G(e){return e?"open":"closed"}o.forwardRef((e,t)=>{let{__scopeDialog:a,...s}=e,r=z(Y,a);return(0,n.jsx)(j.WV.button,{type:"button",...s,ref:t,onClick:(0,u.M)(e.onClick,()=>r.onOpenChange(!1))})}).displayName=Y;var K="DialogTitleWarning",[L,J]=(0,m.k)(K,{contentName:T,titleName:q,docsSlug:"dialog"}),ee=e=>{let{titleId:t}=e,a=J(K),n="`".concat(a.contentName,"` requires a `").concat(a.titleName,"` for the component to be accessible for screen reader users.\n\nIf you want to hide the `").concat(a.titleName,"`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/").concat(a.docsSlug);return o.useEffect(()=>{t&&!document.getElementById(t)&&console.error(n)},[n,t]),null},et=e=>{let{contentRef:t,descriptionId:a}=e,n=J("DialogDescriptionWarning"),s="Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(n.contentName,"}.");return o.useEffect(()=>{var e;let n=null===(e=t.current)||void 0===e?void 0:e.getAttribute("aria-describedby");a&&n&&!document.getElementById(a)&&console.warn(s)},[s,t,a]),null},ea=a(13027),en=a(49354);let es=o.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,n.jsx)(P,{className:(0,en.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...s,ref:t})});es.displayName=P.displayName;let er=(0,ea.j)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),eo=o.forwardRef((e,t)=>{let{side:a="right",className:s,children:r,...o}=e;return(0,n.jsxs)(W,{children:[(0,n.jsx)(es,{}),(0,n.jsx)(S,{ref:t,className:(0,en.cn)(er({side:a}),s),...o,children:r})]})});eo.displayName=S.displayName;let el=e=>{let{className:t,...a}=e;return(0,n.jsx)("div",{className:(0,en.cn)("flex flex-col space-y-2 text-center sm:text-left",t),...a})};el.displayName="SheetHeader",o.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,n.jsx)(H,{ref:t,className:(0,en.cn)("text-lg font-semibold text-foreground",a),...s})}).displayName=H.displayName,o.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,n.jsx)(Q,{ref:t,className:(0,en.cn)("text-sm text-muted-foreground",a),...s})}).displayName=Q.displayName;var ei=a(50968),ed=a(44839),ec=a(89733),eu=a(51615);function ef(){let e=(0,l.useTranslations)("Menu"),[t,a]=(0,o.useState)(!1),[s,u]=(0,o.useState)(0),f=(0,o.useRef)(null),m=(0,i.usePathname)().substring(1,3),p=()=>a(!1);(0,o.useEffect)(()=>{f.current&&u(f.current.offsetHeight)},[]);let g=[{title:e("whatIsAplo"),url:"/".concat(m,"/what-is-aplo")},{title:e("mining"),url:"/".concat(m,"/mining-aplo")},{title:e("faq"),url:"/".concat(m,"/faq")},{title:e("about"),url:"/".concat(m,"/about-aplo")},{title:e("roadmap"),url:"/".concat(m,"/roadmap")},{title:e("userGuides"),url:"/".concat(m,"/user-guides")}];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{style:{height:"".concat(s,"px"),marginBottom:"1.35vh"}}),(0,n.jsxs)("div",{ref:f,className:"flex flex-column bg-secondary justify-between items-center px-[3.73vw] z-10 w-full fixed top-0",children:[(0,n.jsx)(d.default,{href:"/".concat(m),onClick:p,children:(0,n.jsx)(c.default,{src:"/menu/logo.png",width:6,height:3,alt:"AploCoin logo",className:"w-[12.8vw] h-auto p-1"})}),(0,n.jsxs)(F,{open:t,onOpenChange:a,children:[(0,n.jsx)(O,{asChild:!0,children:(0,n.jsx)("button",{children:(0,n.jsx)(c.default,{src:"/menu/menu-m.svg",width:24,height:16,alt:"Icon open menu",className:"w-[7vw]"})})}),(0,n.jsx)(eo,{side:"right",className:"w-[280px] sm:w-[360px]",children:(0,n.jsxs)(el,{className:"space-y-6",children:[(0,n.jsxs)("div",{className:"flex flex-row items-center justify-between",children:[(0,n.jsx)(ei.Z,{}),(0,n.jsx)(eu.O,{})]}),(0,n.jsxs)("nav",{className:"flex flex-col space-y-4",children:[(0,n.jsx)(d.default,{href:"/".concat(m,"/donate-aplo-project"),onClick:p,children:(0,n.jsx)(ec.z,{className:"w-full",children:e("donate")})}),g.map(e=>(0,n.jsx)(d.default,{href:e.url,className:(0,ed.W)(r().className,"font-medium"),onClick:p,children:(0,n.jsx)(ec.z,{variant:"outline",className:"w-full",children:e.title})},e.title))]})]})})]})]})]})}},51615:function(e,t,a){"use strict";a.d(t,{O:function(){return d}});var n=a(57437),s=a(38296),r=a(92699),o=a(79512),l=a(89733),i=a(31590);function d(){let{setTheme:e}=(0,o.F)();return(0,n.jsxs)(i.h_,{children:[(0,n.jsx)(i.$F,{asChild:!0,children:(0,n.jsxs)(l.z,{variant:"outline",size:"icon",children:[(0,n.jsx)(s.Z,{className:"h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}),(0,n.jsx)(r.Z,{className:"absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"}),(0,n.jsx)("span",{className:"sr-only",children:"Toggle theme"})]})}),(0,n.jsxs)(i.AW,{align:"end",children:[(0,n.jsx)(i.Xi,{onClick:()=>e("light"),children:"Light"}),(0,n.jsx)(i.Xi,{onClick:()=>e("dark"),children:"Dark"}),(0,n.jsx)(i.Xi,{onClick:()=>e("system"),children:"System"})]})]})}},89733:function(e,t,a){"use strict";a.d(t,{z:function(){return d}});var n=a(57437),s=a(2265),r=a(71538),o=a(13027),l=a(49354);let i=(0,o.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=s.forwardRef((e,t)=>{let{className:a,variant:s,size:o,asChild:d=!1,...c}=e,u=d?r.g7:"button";return(0,n.jsx)(u,{className:(0,l.cn)(i({variant:s,size:o,className:a})),ref:t,...c})});d.displayName="Button"},31590:function(e,t,a){"use strict";a.d(t,{$F:function(){return u},AW:function(){return m},Qk:function(){return f},Xi:function(){return p},h_:function(){return c}});var n=a(57437),s=a(2265),r=a(79463),o=a(87592),l=a(22468),i=a(28165),d=a(49354);let c=r.fC,u=r.xz,f=r.ZA;r.Uv,r.Tr,r.Ee,s.forwardRef((e,t)=>{let{className:a,inset:s,children:l,...i}=e;return(0,n.jsxs)(r.fF,{ref:t,className:(0,d.cn)("flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",s&&"pl-8",a),...i,children:[l,(0,n.jsx)(o.Z,{className:"ml-auto"})]})}).displayName=r.fF.displayName,s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,n.jsx)(r.tu,{ref:t,className:(0,d.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a),...s})}).displayName=r.tu.displayName;let m=s.forwardRef((e,t)=>{let{className:a,sideOffset:s=4,...o}=e;return(0,n.jsx)(r.Uv,{children:(0,n.jsx)(r.VY,{ref:t,sideOffset:s,className:(0,d.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md","data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a),...o})})});m.displayName=r.VY.displayName;let p=s.forwardRef((e,t)=>{let{className:a,inset:s,...o}=e;return(0,n.jsx)(r.ck,{ref:t,className:(0,d.cn)("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",s&&"pl-8",a),...o})});p.displayName=r.ck.displayName,s.forwardRef((e,t)=>{let{className:a,children:s,checked:o,...i}=e;return(0,n.jsxs)(r.oC,{ref:t,className:(0,d.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a),checked:o,...i,children:[(0,n.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,n.jsx)(r.wU,{children:(0,n.jsx)(l.Z,{className:"h-4 w-4"})})}),s]})}).displayName=r.oC.displayName,s.forwardRef((e,t)=>{let{className:a,children:s,...o}=e;return(0,n.jsxs)(r.Rk,{ref:t,className:(0,d.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a),...o,children:[(0,n.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,n.jsx)(r.wU,{children:(0,n.jsx)(i.Z,{className:"h-2 w-2 fill-current"})})}),s]})}).displayName=r.Rk.displayName,s.forwardRef((e,t)=>{let{className:a,inset:s,...o}=e;return(0,n.jsx)(r.__,{ref:t,className:(0,d.cn)("px-2 py-1.5 text-sm font-semibold",s&&"pl-8",a),...o})}).displayName=r.__.displayName,s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,n.jsx)(r.Z0,{ref:t,className:(0,d.cn)("-mx-1 my-1 h-px bg-muted",a),...s})}).displayName=r.Z0.displayName},49354:function(e,t,a){"use strict";a.d(t,{cn:function(){return r}}),a(2265);var n=a(44839),s=a(78077);function r(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,s.m)((0,n.W)(t))}a(25566)},97348:function(e){e.exports={style:{fontFamily:"'__Murecho_acce0a', '__Murecho_Fallback_acce0a'",fontStyle:"normal"},className:"__className_acce0a"}}}]);