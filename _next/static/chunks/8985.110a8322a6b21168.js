"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8985],{50968:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(57437),s=a(2265),r=a(16463),o=a(31590),i=a(89733),l=a(42421),d=a(66648);function c(){var e;let t=(0,r.useRouter)(),a=(0,r.usePathname)(),c=(0,r.useParams)(),u=[{code:"en",label:"English",flag:"/flags/gb.svg"},{code:"ua",label:"Українська",flag:"/flags/ua.svg"},{code:"ru",label:"Русский",flag:"/flags/ru.svg"}],[m,f]=(0,s.useState)(c.locale||u[0].code),h=e=>{if(e!==m){f(e);let n="/".concat(e).concat(a.substring(3));t.push(n)}},p=null===(e=u.find(e=>e.code===m))||void 0===e?void 0:e.flag;return(0,n.jsxs)(o.h_,{children:[(0,n.jsx)(o.$F,{asChild:!0,className:"!m-0",children:(0,n.jsxs)(i.z,{variant:"outline",className:"flex items-center gap-2",children:[(0,n.jsx)(d.default,{src:p||"/flags/gb.svg",alt:"".concat(m," flag"),width:20,height:20,className:"rounded-sm object-cover",unoptimized:!0}),(0,n.jsx)("span",{children:"string"==typeof m?m.toUpperCase():m[0].toUpperCase()}),(0,n.jsx)(l.Z,{className:"h-4 w-4"})]})}),(0,n.jsx)(o.AW,{align:"end",className:"w-40",children:(0,n.jsx)(o.Qk,{children:u.map(e=>(0,n.jsxs)(o.Xi,{onClick:()=>h(e.code),className:"flex items-center gap-2",children:[(0,n.jsx)(d.default,{src:e.flag,alt:"".concat(e.code," flag"),width:20,height:20,className:"rounded-sm object-cover",unoptimized:!0}),e.label]},e.code))})})]})}},28985:function(e,t,a){a.r(t),a.d(t,{default:function(){return A}});var n=a(57437),s=a(50968),r=a(18087),o=a(16463),i=a(66648),l=a(87138),d=a(89733),c=a(51615),u=a(49354),m=a(2265),f=a(7668),h=a(13027),p=a(42421);let x=m.forwardRef((e,t)=>{let{className:a,children:s,...r}=e;return(0,n.jsxs)(f.fC,{ref:t,className:(0,u.cn)("relative z-10 flex max-w-max flex-1 items-center justify-center",a),...r,children:[s,(0,n.jsx)(y,{})]})});x.displayName=f.fC.displayName;let g=m.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,n.jsx)(f.aV,{ref:t,className:(0,u.cn)("group flex flex-1 list-none items-center justify-center space-x-1",a),...s})});g.displayName=f.aV.displayName;let v=f.ck,w=(0,h.j)("group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"),j=m.forwardRef((e,t)=>{let{className:a,children:s,...r}=e;return(0,n.jsxs)(f.xz,{ref:t,className:(0,u.cn)(w(),"group",a),...r,children:[s," ",(0,n.jsx)(p.Z,{className:"relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180","aria-hidden":"true"})]})});j.displayName=f.xz.displayName;let b=m.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,n.jsx)(f.VY,{ref:t,className:(0,u.cn)("left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",a),...s})});b.displayName=f.VY.displayName;let N=f.rU,y=m.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,n.jsx)("div",{className:(0,u.cn)("absolute left-0 top-full flex justify-center"),children:(0,n.jsx)(f.l_,{className:(0,u.cn)("origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",a),ref:t,...s})})});y.displayName=f.l_.displayName,m.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,n.jsx)(f.z$,{ref:t,className:(0,u.cn)("top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",a),...s,children:(0,n.jsx)("div",{className:"relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md"})})}).displayName=f.z$.displayName;var k=a(86763),T=a(11553),_=a(71100);let z={chainId:"0x6e7a",chainName:"Aplo Network",rpcUrls:["https://pub1.aplocoin.com"],nativeCurrency:{name:"GAPLO",symbol:"GAPLO",decimals:18},blockExplorerUrls:["https://explorer.aplocoin.com"]};function A(){let e=(0,r.useTranslations)("Menu"),t=(0,o.usePathname)().substring(1,3),{toast:a}=(0,k.pm)(),m=async()=>{try{if(!window.ethereum)return;await window.ethereum.request({method:"wallet_addEthereumChain",params:[z]}),a({title:e("success"),description:e("networkAdded")})}catch(t){a({variant:"destructive",title:e("error"),description:t.message})}},f=async()=>{try{return await window.ethereum.request({method:"eth_chainId"})}catch(e){return null}},h=async()=>{try{if(!window.ethereum)return!1;if(await f()===z.chainId)return!0;return await window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:z.chainId}]}),a({title:e("success"),description:e("networkSwitched")}),!0}catch(t){if(4902===t.code)try{return await m(),await window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:z.chainId}]}),!0}catch(t){return a({variant:"destructive",title:e("error"),description:t.message}),!1}return a({variant:"destructive",title:e("error"),description:t.message}),!1}},p=async(t,n)=>{try{if(!window.ethereum)return;if(!await h()){a({variant:"destructive",title:e("error"),description:e("switchNetworkFirst")});return}if(await f()!==z.chainId){a({variant:"destructive",title:e("error"),description:e("wrongNetwork")});return}await window.ethereum.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:t,symbol:n,decimals:18}}}),a({title:e("success"),description:e("tokenAdded")})}catch(t){a({variant:"destructive",title:e("error"),description:t.message})}};return(0,n.jsx)("div",{style:{paddingLeft:"clamp(4vw, 9vw, 10.55vw)",paddingRight:"clamp(4vw, 9vw, 10.55vw)",maxWidth:"100vw"},children:(0,n.jsxs)("div",{className:"flex flex-row justify-between min-[6.83vh] mt-[8.49vh] mb-[1.56vh] shadow-sm bg-secondary px-[2.01vw] py-[4px]",children:[(0,n.jsxs)("div",{className:"flex flex-row items-center",children:[(0,n.jsx)(l.default,{href:"/".concat(t),children:(0,n.jsx)(i.default,{src:"/menu/logo.png",width:64,height:64,alt:"AploCoin logo",className:"mr-4 cursor-pointer"})}),(0,n.jsx)("div",{className:"flex flex-row items-center",children:(0,n.jsx)(x,{children:(0,n.jsxs)(g,{children:[(0,n.jsxs)(v,{children:[(0,n.jsx)(j,{children:e("crypto")}),(0,n.jsx)(b,{children:(0,n.jsxs)("ul",{className:"grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]",children:[(0,n.jsx)("li",{className:"row-span-3",children:(0,n.jsx)(N,{asChild:!0,children:(0,n.jsxs)("a",{className:"flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md bg-background  hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",href:"/".concat(t,"/mining-aplo"),children:[(0,n.jsx)(T.Z,{className:"h-6 w-6"}),(0,n.jsx)("div",{className:"mb-2 mt-4 text-lg font-medium",children:e("mining")}),(0,n.jsx)("p",{className:"text-sm leading-tight ",children:e("start-mining")})]})})}),(0,n.jsx)("li",{className:"col-span-1",children:(0,n.jsx)(N,{asChild:!0,children:(0,n.jsx)(d.z,{variant:"outline",onClick:m,className:(0,u.cn)("h-auto w-full block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left"),children:(0,n.jsx)("div",{className:"text-sm font-medium leading-none",children:e("addNetwork")})})})}),(0,n.jsx)("li",{className:"col-span-1",children:(0,n.jsx)(N,{asChild:!0,children:(0,n.jsxs)(d.z,{variant:"outline",onClick:()=>{p("0x0000000000000000000000000000000000001235","APLO")},className:(0,u.cn)("h-auto w-full block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left"),children:[(0,n.jsx)("div",{className:"text-sm font-medium leading-none",children:e("addAploToken")}),(0,n.jsx)("p",{className:"text-sm font-normal leading-tight ",children:"TEST"})]})})}),(0,n.jsx)("li",{className:"col-span-1",children:(0,n.jsx)(N,{asChild:!0,children:(0,n.jsxs)(d.z,{variant:"outline",onClick:()=>{p("0x0000000000000000000000000000000000001234","GAPLO")},className:(0,u.cn)("h-auto w-full block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left"),children:[(0,n.jsx)("div",{className:"text-sm font-medium leading-none",children:e("addGaploToken")}),(0,n.jsx)("p",{className:"text-sm font-normal leading-tight",children:"TEST"})]})})})]})})]}),(0,n.jsxs)(v,{children:[(0,n.jsx)(j,{children:e("aboutAplo")}),(0,n.jsx)(b,{children:(0,n.jsxs)("ul",{className:"grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]",style:{gridAutoFlow:"dense"},children:[(0,n.jsx)("li",{className:"row-span-3",children:(0,n.jsx)(N,{asChild:!0,children:(0,n.jsxs)("a",{className:"flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md bg-background  hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",href:"/".concat(t,"/what-is-aplo"),children:[(0,n.jsx)(_.Z,{className:"h-6 w-6"}),(0,n.jsx)("div",{className:"mb-2 mt-4 text-lg font-medium",children:e("whatIsAplo")}),(0,n.jsx)("p",{className:"text-sm leading-tight ",children:"TEST"})]})})}),(0,n.jsx)(N,{asChild:!0,children:(0,n.jsx)(l.default,{href:"/".concat(t,"/faq"),passHref:!0,children:(0,n.jsxs)(d.z,{variant:"outline",className:(0,u.cn)("h-auto w-full block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left"),children:[(0,n.jsx)("div",{className:"text-sm font-medium leading-none",children:e("faq")}),(0,n.jsx)("p",{className:"text-sm font-normal leading-tight ",children:"TEST"})]})})}),(0,n.jsx)(N,{asChild:!0,children:(0,n.jsx)(l.default,{href:"/".concat(t,"/about-aplo"),passHref:!0,children:(0,n.jsxs)(d.z,{variant:"outline",className:(0,u.cn)("h-auto w-full block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left"),children:[(0,n.jsx)("div",{className:"text-sm font-medium leading-none",children:e("about")}),(0,n.jsx)("p",{className:"text-sm font-normal leading-tight ",children:"TEST"})]})})}),(0,n.jsx)(N,{asChild:!0,children:(0,n.jsx)(l.default,{href:"/".concat(t,"/user-guides"),passHref:!0,children:(0,n.jsxs)(d.z,{variant:"outline",className:(0,u.cn)("h-auto w-full block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left"),children:[(0,n.jsx)("div",{className:"text-sm font-medium leading-none",children:e("userGuides")}),(0,n.jsx)("p",{className:"text-sm font-normal leading-tight ",children:"TEST"})]})})})]})})]}),(0,n.jsx)(v,{children:(0,n.jsx)(l.default,{href:"/".concat(t,"/roadmap"),legacyBehavior:!0,passHref:!0,children:(0,n.jsx)(N,{className:w(),children:e("roadmap")})})})]})})})]}),(0,n.jsxs)("div",{className:"flex flex-row items-center gap-4",children:[(0,n.jsx)(d.z,{className:"mr-[1.385vw]",children:(0,n.jsx)(l.default,{href:"/".concat(t,"/donate-aplo-project"),children:e("donate")})}),(0,n.jsx)(s.Z,{}),(0,n.jsx)(c.O,{})]})]})})}},51615:function(e,t,a){a.d(t,{O:function(){return d}});var n=a(57437),s=a(38296),r=a(92699),o=a(79512),i=a(89733),l=a(31590);function d(){let{setTheme:e}=(0,o.F)();return(0,n.jsxs)(l.h_,{children:[(0,n.jsx)(l.$F,{asChild:!0,children:(0,n.jsxs)(i.z,{variant:"outline",size:"icon",children:[(0,n.jsx)(s.Z,{className:"h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}),(0,n.jsx)(r.Z,{className:"absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"}),(0,n.jsx)("span",{className:"sr-only",children:"Toggle theme"})]})}),(0,n.jsxs)(l.AW,{align:"end",children:[(0,n.jsx)(l.Xi,{onClick:()=>e("light"),children:"Light"}),(0,n.jsx)(l.Xi,{onClick:()=>e("dark"),children:"Dark"}),(0,n.jsx)(l.Xi,{onClick:()=>e("system"),children:"System"})]})]})}},89733:function(e,t,a){a.d(t,{d:function(){return l},z:function(){return d}});var n=a(57437),s=a(2265),r=a(71538),o=a(13027),i=a(49354);let l=(0,o.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=s.forwardRef((e,t)=>{let{className:a,variant:s,size:o,asChild:d=!1,...c}=e,u=d?r.g7:"button";return(0,n.jsx)(u,{className:(0,i.cn)(l({variant:s,size:o,className:a})),ref:t,...c})});d.displayName="Button"},31590:function(e,t,a){a.d(t,{$F:function(){return u},AW:function(){return g},Ju:function(){return j},Ph:function(){return h},Qk:function(){return m},TG:function(){return x},VD:function(){return b},Xi:function(){return v},bO:function(){return w},cq:function(){return f},h_:function(){return c},kt:function(){return p}});var n=a(57437),s=a(2265),r=a(79463),o=a(87592),i=a(22468),l=a(28165),d=a(49354);let c=r.fC,u=r.xz,m=r.ZA,f=r.Uv,h=r.Tr;r.Ee;let p=s.forwardRef((e,t)=>{let{className:a,inset:s,children:i,...l}=e;return(0,n.jsxs)(r.fF,{ref:t,className:(0,d.cn)("flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",s&&"pl-8",a),...l,children:[i,(0,n.jsx)(o.Z,{className:"ml-auto"})]})});p.displayName=r.fF.displayName;let x=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,n.jsx)(r.tu,{ref:t,className:(0,d.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a),...s})});x.displayName=r.tu.displayName;let g=s.forwardRef((e,t)=>{let{className:a,sideOffset:s=4,...o}=e;return(0,n.jsx)(r.Uv,{children:(0,n.jsx)(r.VY,{ref:t,sideOffset:s,className:(0,d.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md","data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a),...o})})});g.displayName=r.VY.displayName;let v=s.forwardRef((e,t)=>{let{className:a,inset:s,...o}=e;return(0,n.jsx)(r.ck,{ref:t,className:(0,d.cn)("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",s&&"pl-8",a),...o})});v.displayName=r.ck.displayName;let w=s.forwardRef((e,t)=>{let{className:a,children:s,checked:o,...l}=e;return(0,n.jsxs)(r.oC,{ref:t,className:(0,d.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a),checked:o,...l,children:[(0,n.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,n.jsx)(r.wU,{children:(0,n.jsx)(i.Z,{className:"h-4 w-4"})})}),s]})});w.displayName=r.oC.displayName,s.forwardRef((e,t)=>{let{className:a,children:s,...o}=e;return(0,n.jsxs)(r.Rk,{ref:t,className:(0,d.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a),...o,children:[(0,n.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,n.jsx)(r.wU,{children:(0,n.jsx)(l.Z,{className:"h-2 w-2 fill-current"})})}),s]})}).displayName=r.Rk.displayName;let j=s.forwardRef((e,t)=>{let{className:a,inset:s,...o}=e;return(0,n.jsx)(r.__,{ref:t,className:(0,d.cn)("px-2 py-1.5 text-sm font-semibold",s&&"pl-8",a),...o})});j.displayName=r.__.displayName;let b=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,n.jsx)(r.Z0,{ref:t,className:(0,d.cn)("-mx-1 my-1 h-px bg-muted",a),...s})});b.displayName=r.Z0.displayName},86763:function(e,t,a){a.d(t,{pm:function(){return m}});var n=a(2265);let s=0,r=new Map,o=e=>{if(r.has(e))return;let t=setTimeout(()=>{r.delete(e),c({type:"REMOVE_TOAST",toastId:e})},1e6);r.set(e,t)},i=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:a}=t;return a?o(a):e.toasts.forEach(e=>{o(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},l=[],d={toasts:[]};function c(e){d=i(d,e),l.forEach(e=>{e(d)})}function u(e){let{...t}=e,a=(s=(s+1)%Number.MAX_SAFE_INTEGER).toString(),n=()=>c({type:"DISMISS_TOAST",toastId:a});return c({type:"ADD_TOAST",toast:{...t,id:a,open:!0,onOpenChange:e=>{e||n()}}}),{id:a,dismiss:n,update:e=>c({type:"UPDATE_TOAST",toast:{...e,id:a}})}}function m(){let[e,t]=n.useState(d);return n.useEffect(()=>(l.push(t),()=>{let e=l.indexOf(t);e>-1&&l.splice(e,1)}),[e]),{...e,toast:u,dismiss:e=>c({type:"DISMISS_TOAST",toastId:e})}}},49354:function(e,t,a){a.d(t,{cn:function(){return r}}),a(2265);var n=a(44839),s=a(78077);function r(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,s.m)((0,n.W)(t))}a(25566)}}]);