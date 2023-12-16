import{r as m,j as n,a as v,R as Z,c as Mo}from"./app-468dc84b.js";import{G as Ro,l as Eo,j as oo,c as A,M as zo,L as Ao}from"./OutlinedInput-f8af1941.js";import{T as q}from"./Typography-fb8ff41b.js";import{_ as c,a5 as So,W as Oo,c as E,T as lo,a as K,g as J,s as T,P as vo,e as D,u as S,d as I,f as F,h as bo,v as no,y as xo,E as Fo,G as Ho,H as co,M as Vo,p as Co,a6 as po,b as _,z as _o,B as No,n as Go}from"./Modal-784d8689.js";import{I as to}from"./IconButton-9a3de394.js";import{D as eo}from"./Divider-faa23c14.js";import{l as H,g as Wo,L as Uo}from"./ListItemText-6355ef3f.js";import{u as jo,B as Yo}from"./ButtonBase-d47d007c.js";import{g as Xo,M as uo}from"./MenuItem-95aa6b0c.js";import{a as qo,d as Ko}from"./api-a48cce3e.js";import{r as Y}from"./routes-c9e5dec8.js";import{g as Jo}from"./validate-1e59ab84.js";import{P as Q}from"./PasswordField-a64fd0b8.js";import{D as Qo,a as Zo,b as ot}from"./DialogTitle-a60b1fca.js";import{B as X}from"./Box-d6830782.js";import{G as V}from"./Grid-0f88e4d2.js";import{b as tt}from"./Button-132598f8.js";import{L as et}from"./LoadingButton-32a80b82.js";import{S as yo}from"./Stack-6d196264.js";import{C as rt}from"./CircularProgress-a38e80be.js";const nt=m.createContext(null),ko=nt;function wo(){return m.useContext(ko)}const at=typeof Symbol=="function"&&Symbol.for,st=at?Symbol.for("mui.nested"):"__THEME_NESTED__";function it(o,t){return typeof t=="function"?t(o):c({},o,t)}function lt(o){const{children:t,theme:e}=o,r=wo(),a=m.useMemo(()=>{const s=r===null?e:it(r,e);return s!=null&&(s[st]=r!==null),s},[e,r]);return n(ko.Provider,{value:a,children:t})}const fo={};function mo(o,t,e,r=!1){return m.useMemo(()=>{const a=o&&t[o]||t;if(typeof e=="function"){const s=e(a),i=o?c({},t,{[o]:s}):s;return r?()=>i:i}return o?c({},t,{[o]:e}):c({},t,e)},[o,t,e,r])}function ct(o){const{children:t,theme:e,themeId:r}=o,a=So(fo),s=wo()||fo,i=mo(r,a,e),d=mo(r,s,e,!0);return n(lt,{theme:d,children:n(Oo.Provider,{value:i,children:t})})}const dt=["theme"];function pt(o){let{theme:t}=o,e=E(o,dt);const r=t[lo];return n(ct,c({},e,{themeId:r?lo:void 0,theme:r||t}))}function ut(o){return K("MuiAppBar",o)}J("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent","colorError","colorInfo","colorSuccess","colorWarning"]);const ft=["className","color","enableColorOnDark","position"],mt=o=>{const{color:t,position:e,classes:r}=o,a={root:["root",`color${D(t)}`,`position${D(e)}`]};return F(a,ut,r)},U=(o,t)=>o?`${o==null?void 0:o.replace(")","")}, ${t})`:t,gt=T(vo,{name:"MuiAppBar",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:e}=o;return[t.root,t[`position${D(e.position)}`],t[`color${D(e.color)}`]]}})(({theme:o,ownerState:t})=>{const e=o.palette.mode==="light"?o.palette.grey[100]:o.palette.grey[900];return c({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},t.position==="fixed"&&{position:"fixed",zIndex:(o.vars||o).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},t.position==="absolute"&&{position:"absolute",zIndex:(o.vars||o).zIndex.appBar,top:0,left:"auto",right:0},t.position==="sticky"&&{position:"sticky",zIndex:(o.vars||o).zIndex.appBar,top:0,left:"auto",right:0},t.position==="static"&&{position:"static"},t.position==="relative"&&{position:"relative"},!o.vars&&c({},t.color==="default"&&{backgroundColor:e,color:o.palette.getContrastText(e)},t.color&&t.color!=="default"&&t.color!=="inherit"&&t.color!=="transparent"&&{backgroundColor:o.palette[t.color].main,color:o.palette[t.color].contrastText},t.color==="inherit"&&{color:"inherit"},o.palette.mode==="dark"&&!t.enableColorOnDark&&{backgroundColor:null,color:null},t.color==="transparent"&&c({backgroundColor:"transparent",color:"inherit"},o.palette.mode==="dark"&&{backgroundImage:"none"})),o.vars&&c({},t.color==="default"&&{"--AppBar-background":t.enableColorOnDark?o.vars.palette.AppBar.defaultBg:U(o.vars.palette.AppBar.darkBg,o.vars.palette.AppBar.defaultBg),"--AppBar-color":t.enableColorOnDark?o.vars.palette.text.primary:U(o.vars.palette.AppBar.darkColor,o.vars.palette.text.primary)},t.color&&!t.color.match(/^(default|inherit|transparent)$/)&&{"--AppBar-background":t.enableColorOnDark?o.vars.palette[t.color].main:U(o.vars.palette.AppBar.darkBg,o.vars.palette[t.color].main),"--AppBar-color":t.enableColorOnDark?o.vars.palette[t.color].contrastText:U(o.vars.palette.AppBar.darkColor,o.vars.palette[t.color].contrastText)},{backgroundColor:"var(--AppBar-background)",color:t.color==="inherit"?"inherit":"var(--AppBar-color)"},t.color==="transparent"&&{backgroundImage:"none",backgroundColor:"transparent",color:"inherit"}))}),ht=m.forwardRef(function(t,e){const r=S({props:t,name:"MuiAppBar"}),{className:a,color:s="primary",enableColorOnDark:i=!1,position:d="fixed"}=r,p=E(r,ft),l=c({},r,{color:s,position:d,enableColorOnDark:i}),f=mt(l);return n(gt,c({square:!0,component:"header",ownerState:l,elevation:4,className:I(f.root,a,d==="fixed"&&"mui-fixed"),ref:e},p))}),vt=ht,bt=(o,t)=>c({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},t&&!o.vars&&{colorScheme:o.palette.mode}),xt=o=>c({color:(o.vars||o).palette.text.primary},o.typography.body1,{backgroundColor:(o.vars||o).palette.background.default,"@media print":{backgroundColor:(o.vars||o).palette.common.white}}),Ct=(o,t=!1)=>{var e;const r={};t&&o.colorSchemes&&Object.entries(o.colorSchemes).forEach(([i,d])=>{var p;r[o.getColorSchemeSelector(i).replace(/\s*&/,"")]={colorScheme:(p=d.palette)==null?void 0:p.mode}});let a=c({html:bt(o,t),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:o.typography.fontWeightBold},body:c({margin:0},xt(o),{"&::backdrop":{backgroundColor:(o.vars||o).palette.background.default}})},r);const s=(e=o.components)==null||(e=e.MuiCssBaseline)==null?void 0:e.styleOverrides;return s&&(a=[a,s]),a};function yt(o){const t=S({props:o,name:"MuiCssBaseline"}),{children:e,enableColorScheme:r=!1}=t;return v(m.Fragment,{children:[n(Ro,{styles:a=>Ct(a,r)}),e]})}const kt=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function wt(o,t,e){const r=t.getBoundingClientRect(),a=e&&e.getBoundingClientRect(),s=xo(t);let i;if(t.fakeTransform)i=t.fakeTransform;else{const l=s.getComputedStyle(t);i=l.getPropertyValue("-webkit-transform")||l.getPropertyValue("transform")}let d=0,p=0;if(i&&i!=="none"&&typeof i=="string"){const l=i.split("(")[1].split(")")[0].split(",");d=parseInt(l[4],10),p=parseInt(l[5],10)}return o==="left"?a?`translateX(${a.right+d-r.left}px)`:`translateX(${s.innerWidth+d-r.left}px)`:o==="right"?a?`translateX(-${r.right-a.left-d}px)`:`translateX(-${r.left+r.width-d}px)`:o==="up"?a?`translateY(${a.bottom+p-r.top}px)`:`translateY(${s.innerHeight+p-r.top}px)`:a?`translateY(-${r.top-a.top+r.height-p}px)`:`translateY(-${r.top+r.height-p}px)`}function Bt(o){return typeof o=="function"?o():o}function j(o,t,e){const r=Bt(e),a=wt(o,t,r);a&&(t.style.webkitTransform=a,t.style.transform=a)}const $t=m.forwardRef(function(t,e){const r=bo(),a={enter:r.transitions.easing.easeOut,exit:r.transitions.easing.sharp},s={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:i,appear:d=!0,children:p,container:l,direction:f="down",easing:C=a,in:g,onEnter:y,onEntered:k,onEntering:B,onExit:P,onExited:$,onExiting:L,style:b,timeout:M=s,TransitionComponent:z=Fo}=t,O=E(t,kt),x=m.useRef(null),N=no(p.ref,x,e),h=u=>w=>{u&&(w===void 0?u(x.current):u(x.current,w))},R=h((u,w)=>{j(f,u,l),Ho(u),y&&y(u,w)}),G=h((u,w)=>{const io=co({timeout:M,style:b,easing:C},{mode:"enter"});u.style.webkitTransition=r.transitions.create("-webkit-transform",c({},io)),u.style.transition=r.transitions.create("transform",c({},io)),u.style.webkitTransform="none",u.style.transform="none",B&&B(u,w)}),W=h(k),Do=h(L),To=h(u=>{const w=co({timeout:M,style:b,easing:C},{mode:"exit"});u.style.webkitTransition=r.transitions.create("-webkit-transform",w),u.style.transition=r.transitions.create("transform",w),j(f,u,l),P&&P(u)}),Po=h(u=>{u.style.webkitTransition="",u.style.transition="",$&&$(u)}),Lo=u=>{i&&i(x.current,u)},so=m.useCallback(()=>{x.current&&j(f,x.current,l)},[f,l]);return m.useEffect(()=>{if(g||f==="down"||f==="right")return;const u=Eo(()=>{x.current&&j(f,x.current,l)}),w=xo(x.current);return w.addEventListener("resize",u),()=>{u.clear(),w.removeEventListener("resize",u)}},[f,g,l]),m.useEffect(()=>{g||so()},[g,so]),n(z,c({nodeRef:x,onEnter:R,onEntered:W,onEntering:G,onExit:To,onExited:Po,onExiting:Do,addEndListener:Lo,appear:d,in:g,timeout:M},O,{children:(u,w)=>m.cloneElement(p,c({ref:N,style:c({visibility:u==="exited"&&!g?"hidden":void 0},b,p.props.style)},w))}))}),It=$t;function Dt(o){return K("MuiDrawer",o)}J("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);const Tt=["BackdropProps"],Pt=["anchor","BackdropProps","children","className","elevation","hideBackdrop","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"],Bo=(o,t)=>{const{ownerState:e}=o;return[t.root,(e.variant==="permanent"||e.variant==="persistent")&&t.docked,t.modal]},Lt=o=>{const{classes:t,anchor:e,variant:r}=o,a={root:["root"],docked:[(r==="permanent"||r==="persistent")&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${D(e)}`,r!=="temporary"&&`paperAnchorDocked${D(e)}`]};return F(a,Dt,t)},Mt=T(Vo,{name:"MuiDrawer",slot:"Root",overridesResolver:Bo})(({theme:o})=>({zIndex:(o.vars||o).zIndex.drawer})),go=T("div",{shouldForwardProp:Co,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:Bo})({flex:"0 0 auto"}),Rt=T(vo,{name:"MuiDrawer",slot:"Paper",overridesResolver:(o,t)=>{const{ownerState:e}=o;return[t.paper,t[`paperAnchor${D(e.anchor)}`],e.variant!=="temporary"&&t[`paperAnchorDocked${D(e.anchor)}`]]}})(({theme:o,ownerState:t})=>c({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:(o.vars||o).zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},t.anchor==="left"&&{left:0},t.anchor==="top"&&{top:0,left:0,right:0,height:"auto",maxHeight:"100%"},t.anchor==="right"&&{right:0},t.anchor==="bottom"&&{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},t.anchor==="left"&&t.variant!=="temporary"&&{borderRight:`1px solid ${(o.vars||o).palette.divider}`},t.anchor==="top"&&t.variant!=="temporary"&&{borderBottom:`1px solid ${(o.vars||o).palette.divider}`},t.anchor==="right"&&t.variant!=="temporary"&&{borderLeft:`1px solid ${(o.vars||o).palette.divider}`},t.anchor==="bottom"&&t.variant!=="temporary"&&{borderTop:`1px solid ${(o.vars||o).palette.divider}`})),$o={left:"right",right:"left",top:"down",bottom:"up"};function Et(o){return["left","right"].indexOf(o)!==-1}function zt(o,t){return o.direction==="rtl"&&Et(t)?$o[t]:t}const At=m.forwardRef(function(t,e){const r=S({props:t,name:"MuiDrawer"}),a=bo(),s={enter:a.transitions.duration.enteringScreen,exit:a.transitions.duration.leavingScreen},{anchor:i="left",BackdropProps:d,children:p,className:l,elevation:f=16,hideBackdrop:C=!1,ModalProps:{BackdropProps:g}={},onClose:y,open:k=!1,PaperProps:B={},SlideProps:P,TransitionComponent:$=It,transitionDuration:L=s,variant:b="temporary"}=r,M=E(r.ModalProps,Tt),z=E(r,Pt),O=m.useRef(!1);m.useEffect(()=>{O.current=!0},[]);const x=zt(a,i),h=c({},r,{anchor:i,elevation:f,open:k,variant:b},z),R=Lt(h),G=n(Rt,c({elevation:b==="temporary"?f:0,square:!0},B,{className:I(R.paper,B.className),ownerState:h,children:p}));if(b==="permanent")return n(go,c({className:I(R.root,R.docked,l),ownerState:h,ref:e},z,{children:G}));const W=n($,c({in:k,direction:$o[x],timeout:L,appear:O.current},P,{children:G}));return b==="persistent"?n(go,c({className:I(R.root,R.docked,l),ownerState:h,ref:e},z,{children:W})):n(Mt,c({BackdropProps:c({},d,g,{transitionDuration:L}),className:I(R.root,R.modal,l),open:k,ownerState:h,onClose:y,hideBackdrop:C,ref:e},z,M,{children:W}))}),St=At;function Ot(o){return K("MuiLink",o)}const Ft=J("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),Ht=Ft,Io={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Vt=o=>Io[o]||o,_t=({theme:o,ownerState:t})=>{const e=Vt(t.color),r=po(o,`palette.${e}`,!1)||t.color,a=po(o,`palette.${e}Channel`);return"vars"in o&&a?`rgba(${a} / 0.4)`:_(r,.4)},Nt=_t,Gt=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],Wt=o=>{const{classes:t,component:e,focusVisible:r,underline:a}=o,s={root:["root",`underline${D(a)}`,e==="button"&&"button",r&&"focusVisible"]};return F(s,Ot,t)},Ut=T(q,{name:"MuiLink",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:e}=o;return[t.root,t[`underline${D(e.underline)}`],e.component==="button"&&t.button]}})(({theme:o,ownerState:t})=>c({},t.underline==="none"&&{textDecoration:"none"},t.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},t.underline==="always"&&c({textDecoration:"underline"},t.color!=="inherit"&&{textDecorationColor:Nt({theme:o,ownerState:t})},{"&:hover":{textDecorationColor:"inherit"}}),t.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Ht.focusVisible}`]:{outline:"auto"}})),jt=m.forwardRef(function(t,e){const r=S({props:t,name:"MuiLink"}),{className:a,color:s="primary",component:i="a",onBlur:d,onFocus:p,TypographyClasses:l,underline:f="always",variant:C="inherit",sx:g}=r,y=E(r,Gt),{isFocusVisibleRef:k,onBlur:B,onFocus:P,ref:$}=jo(),[L,b]=m.useState(!1),M=no(e,$),z=h=>{B(h),k.current===!1&&b(!1),d&&d(h)},O=h=>{P(h),k.current===!0&&b(!0),p&&p(h)},x=c({},r,{color:s,component:i,focusVisible:L,underline:f,variant:C}),N=Wt(x);return n(Ut,c({color:s,className:I(N.root,a),classes:l,component:i,onBlur:z,onFocus:O,ref:M,ownerState:x,variant:C,sx:[...Object.keys(Io).includes(s)?[]:[{color:s}],...Array.isArray(g)?g:[g]]},y))}),Yt=jt,Xt=["alignItems","autoFocus","component","children","dense","disableGutters","divider","focusVisibleClassName","selected","className"],qt=(o,t)=>{const{ownerState:e}=o;return[t.root,e.dense&&t.dense,e.alignItems==="flex-start"&&t.alignItemsFlexStart,e.divider&&t.divider,!e.disableGutters&&t.gutters]},Kt=o=>{const{alignItems:t,classes:e,dense:r,disabled:a,disableGutters:s,divider:i,selected:d}=o,l=F({root:["root",r&&"dense",!s&&"gutters",i&&"divider",a&&"disabled",t==="flex-start"&&"alignItemsFlexStart",d&&"selected"]},Wo,e);return c({},e,l)},Jt=T(Yo,{shouldForwardProp:o=>Co(o)||o==="classes",name:"MuiListItemButton",slot:"Root",overridesResolver:qt})(({theme:o,ownerState:t})=>c({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:o.transitions.create("background-color",{duration:o.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(o.vars||o).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${H.selected}`]:{backgroundColor:o.vars?`rgba(${o.vars.palette.primary.mainChannel} / ${o.vars.palette.action.selectedOpacity})`:_(o.palette.primary.main,o.palette.action.selectedOpacity),[`&.${H.focusVisible}`]:{backgroundColor:o.vars?`rgba(${o.vars.palette.primary.mainChannel} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.focusOpacity}))`:_(o.palette.primary.main,o.palette.action.selectedOpacity+o.palette.action.focusOpacity)}},[`&.${H.selected}:hover`]:{backgroundColor:o.vars?`rgba(${o.vars.palette.primary.mainChannel} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.hoverOpacity}))`:_(o.palette.primary.main,o.palette.action.selectedOpacity+o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:o.vars?`rgba(${o.vars.palette.primary.mainChannel} / ${o.vars.palette.action.selectedOpacity})`:_(o.palette.primary.main,o.palette.action.selectedOpacity)}},[`&.${H.focusVisible}`]:{backgroundColor:(o.vars||o).palette.action.focus},[`&.${H.disabled}`]:{opacity:(o.vars||o).palette.action.disabledOpacity}},t.divider&&{borderBottom:`1px solid ${(o.vars||o).palette.divider}`,backgroundClip:"padding-box"},t.alignItems==="flex-start"&&{alignItems:"flex-start"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.dense&&{paddingTop:4,paddingBottom:4})),Qt=m.forwardRef(function(t,e){const r=S({props:t,name:"MuiListItemButton"}),{alignItems:a="center",autoFocus:s=!1,component:i="div",children:d,dense:p=!1,disableGutters:l=!1,divider:f=!1,focusVisibleClassName:C,selected:g=!1,className:y}=r,k=E(r,Xt),B=m.useContext(oo),P=m.useMemo(()=>({dense:p||B.dense||!1,alignItems:a,disableGutters:l}),[a,B.dense,p,l]),$=m.useRef(null);_o(()=>{s&&$.current&&$.current.focus()},[s]);const L=c({},r,{alignItems:a,dense:P.dense,disableGutters:l,divider:f,selected:g}),b=Kt(L),M=no($,e);return n(oo.Provider,{value:P,children:n(Jt,c({ref:M,href:k.href||k.to,component:(k.href||k.to)&&i==="div"?"button":i,focusVisibleClassName:I(b.focusVisible,C),ownerState:L,className:I(b.root,y)},k,{classes:b,children:d}))})}),Zt=Qt,oe=["className"],te=o=>{const{alignItems:t,classes:e}=o;return F({root:["root",t==="flex-start"&&"alignItemsFlexStart"]},Xo,e)},ee=T("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:e}=o;return[t.root,e.alignItems==="flex-start"&&t.alignItemsFlexStart]}})(({theme:o,ownerState:t})=>c({minWidth:56,color:(o.vars||o).palette.action.active,flexShrink:0,display:"inline-flex"},t.alignItems==="flex-start"&&{marginTop:8})),re=m.forwardRef(function(t,e){const r=S({props:t,name:"MuiListItemIcon"}),{className:a}=r,s=E(r,oe),i=m.useContext(oo),d=c({},r,{alignItems:i.alignItems}),p=te(d);return n(ee,c({className:I(p.root,a),ownerState:d,ref:e},s))}),ne=re;function ae(o){return K("MuiToolbar",o)}J("MuiToolbar",["root","gutters","regular","dense"]);const se=["className","component","disableGutters","variant"],ie=o=>{const{classes:t,disableGutters:e,variant:r}=o;return F({root:["root",!e&&"gutters",r]},ae,t)},le=T("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:e}=o;return[t.root,!e.disableGutters&&t.gutters,t[e.variant]]}})(({theme:o,ownerState:t})=>c({position:"relative",display:"flex",alignItems:"center"},!t.disableGutters&&{paddingLeft:o.spacing(2),paddingRight:o.spacing(2),[o.breakpoints.up("sm")]:{paddingLeft:o.spacing(3),paddingRight:o.spacing(3)}},t.variant==="dense"&&{minHeight:48}),({theme:o,ownerState:t})=>t.variant==="regular"&&o.mixins.toolbar),ce=m.forwardRef(function(t,e){const r=S({props:t,name:"MuiToolbar"}),{className:a,component:s="div",disableGutters:i=!1,variant:d="regular"}=r,p=E(r,se),l=c({},r,{component:s,disableGutters:i,variant:d}),f=ie(l);return n(le,c({as:s,className:I(f.root,a),ref:e,ownerState:l},p))}),ao=ce,de=A(n("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft"),Xe=A(n("path",{d:"M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"}),"Dashboard"),qe=A(n("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"}),"Description"),pe=A(n("path",{d:"M19 19V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v14H3v2h18v-2h-2zm-8-6H9v-2h2v2z"}),"DoorBack"),ue=A(n("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu"),fe=A(n("path",{d:"M2 17h20v2H2v-2zm1.15-4.05L4 11.47l.85 1.48 1.3-.75-.85-1.48H7v-1.5H5.3l.85-1.47L4.85 7 4 8.47 3.15 7l-1.3.75.85 1.47H1v1.5h1.7l-.85 1.48 1.3.75zm6.7-.75 1.3.75.85-1.48.85 1.48 1.3-.75-.85-1.48H15v-1.5h-1.7l.85-1.47-1.3-.75L12 8.47 11.15 7l-1.3.75.85 1.47H9v1.5h1.7l-.85 1.48zM23 9.22h-1.7l.85-1.47-1.3-.75L20 8.47 19.15 7l-1.3.75.85 1.47H17v1.5h1.7l-.85 1.48 1.3.75.85-1.48.85 1.48 1.3-.75-.85-1.48H23v-1.5z"}),"Password"),me=A(n("path",{d:"M18.39 14.56C16.71 13.7 14.53 13 12 13s-4.71.7-6.39 1.56C4.61 15.07 4 16.1 4 17.22V18c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-.78c0-1.12-.61-2.15-1.61-2.66zM9.78 12h4.44c1.21 0 2.14-1.06 1.98-2.26l-.32-2.45C15.57 5.39 13.92 4 12 4S8.43 5.39 8.12 7.29L7.8 9.74c-.16 1.2.77 2.26 1.98 2.26z"}),"Person2Rounded"),ge=({title:o})=>n(q,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,sx:{flexGrow:1},children:o}),he=({anchorEl:o,openMenu:t,handleClose:e,headerTitle:r,menuItems:a})=>v(zo,{id:"basic-menu",anchorEl:o,open:t,onClose:e,MenuListProps:{"aria-labelledby":"basic-button"},children:[n(uo,{children:r}),n(eo,{}),a.map((s,i)=>n(uo,{onClick:s.onClick,children:v(yo,{alignItems:"center",justifyContent:"start",spacing:1,direction:"row",children:[s.icon,n("span",{children:s.label})]})},i))]}),ve=T(vt,{shouldForwardProp:o=>o!=="open"})(({theme:o,open:t})=>({zIndex:o.zIndex.drawer+1,transition:o.transitions.create(["width","margin"],{easing:o.transitions.easing.sharp,duration:o.transitions.duration.leavingScreen}),...t&&{marginLeft:ro,width:`calc(100% - ${ro}px)`,transition:o.transitions.create(["width","margin"],{easing:o.transitions.easing.sharp,duration:o.transitions.duration.enteringScreen})}})),be=({setOpen:o,open:t,user:e,handleOpenChangePassword:r,handleLogout:a,headerTitle:s})=>{const i=()=>{o(!t)},[d,p]=Z.useState(null),l=!!d,f=y=>{p(y.currentTarget)},C=()=>{p(null)},g=[{label:"Change Password",onClick:r,icon:n(fe,{})},{label:"Logout",onClick:a,icon:n(pe,{})}];return n(ve,{position:"absolute",open:t,children:v(ao,{sx:{pr:"24px"},children:[n(to,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:i,sx:{marginRight:"36px",...t&&{display:"none"}},children:n(ue,{})}),n(ge,{title:s}),n(to,{color:"inherit",onClick:f,children:n(me,{})}),n(he,{anchorEl:d,handleClose:C,headerTitle:e.name,openMenu:l,menuItems:g})]})})},xe=be,Ce=o=>v(Zt,{href:o.link,onClick:o.onClick,children:[n(ne,{children:o.icon}),n(Uo,{primary:o.label})]}),ye=T(St,{shouldForwardProp:o=>o!=="open"})(({theme:o,open:t})=>({"& .MuiDrawer-paper":{position:"relative",whiteSpace:"nowrap",width:ro,transition:o.transitions.create("width",{easing:o.transitions.easing.sharp,duration:o.transitions.duration.enteringScreen}),boxSizing:"border-box",...!t&&{overflowX:"hidden",transition:o.transitions.create("width",{easing:o.transitions.easing.sharp,duration:o.transitions.duration.leavingScreen}),width:o.spacing(7),[o.breakpoints.up("sm")]:{width:o.spacing(9)}}}})),ke=({open:o,setOpen:t,list:e=[]})=>v(ye,{variant:"permanent",open:o,children:[n(ao,{sx:{display:"flex",alignItems:"center",justifyContent:"flex-end",px:[1]},children:n(to,{onClick:()=>{t(!o)},children:n(de,{})})}),n(eo,{}),v(Ao,{component:"nav",children:[e.map((a,s)=>m.createElement(Ce,{...a,key:s})),n(eo,{sx:{my:1}})]})]}),we=ke,Be=o=>v(q,{variant:"body2",color:"text.secondary",align:"center",...o,children:["Copyright © ",n(Yt,{color:"inherit",href:{}.BRAND_LINK,children:{}.BRAND})," ",new Date().getFullYear(),"."]}),$e=Be,Ie=({open:o,onClose:t,user:e=void 0})=>{const{data:r,reset:a,submit:s,processing:i,clearErrors:d,setError:p,errors:l,handleChange:f}=qo({current_password:"",password:"",password_confirmation:"",_method:"put"},e!=null&&e.id?Y.users.updatePassword.link(e.id):Y.passwordUpdate.link);m.useEffect(()=>{a()},[]);const C=g=>{g.preventDefault(),d(),Jo(r,p,e)&&s({onSuccess:()=>t()})};return v(Qo,{open:o,onClose:t,children:[v(Zo,{children:["Change ",n("strong",{children:e==null?void 0:e.name})," Password"]}),n(ot,{children:n(X,{component:"form",onSubmit:C,method:"post",action:Y.passwordUpdate.link,sx:{pt:"1em"},children:v(V,{container:!0,direction:"column",spacing:2,alignItems:"center",justifyContent:"center",children:[!e&&n(V,{item:!0,sx:{width:"100%"},children:n(Q,{fullwidth:!0,name:"current_password",label:"Current Password",value:r.current_password,error:l.hasOwnProperty("current_password"),helperText:l.current_password,autoComplete:"current",onChange:f})}),n(V,{item:!0,sx:{width:"100%"},children:n(Q,{name:"password",label:"New Password",value:r.password,error:l.hasOwnProperty("password"),helperText:l.password,autoComplete:"password",fullwidth:!0,onChange:f})}),n(V,{item:!0,sx:{width:"100%"},children:n(Q,{name:"password_confirmation",label:"Password Confirmation",type:"password",value:r.password_confirmation,error:l.hasOwnProperty("password_confirmation"),helperText:l.password_confirmation,autoComplete:"password_confirmation",fullwidth:!0,onChange:f})}),v(V,{item:!0,sx:{justifyContent:"space-between",width:"100%",display:"flex",alignItems:"center"},children:[n(tt,{onClick:t,children:"Cancel"}),n(et,{loading:i,variant:"contained",type:"submit",children:"Submit"})]})]})})})]})},De=Ie,ho=Go(),ro=240;function Ke({children:o,header:t,user:e,list:r}){const{get:a,processing:s}=Ko(),[i,d]=Z.useState(!0),[p,l]=Z.useState(!1);return v(pt,{theme:ho,children:[n(Mo,{title:t}),v(X,{sx:{display:"flex"},children:[n(yt,{}),n(xe,{open:i,setOpen:d,user:e,handleLogout:()=>{a(Y.logout.link)},handleOpenChangePassword:()=>{l(!0)},headerTitle:t}),n(we,{open:i,setOpen:d,list:r}),v(X,{component:"main",sx:{backgroundColor:y=>y.palette.mode==="light"?y.palette.grey[100]:y.palette.grey[900],flexGrow:1,height:"100vh",overflow:"auto"},children:[n(ao,{}),v(X,{sx:{m:4},children:[o,n($e,{sx:{pt:4}})]})]})]}),n(De,{open:p,onClose:()=>{l(!1)}}),n(No,{open:s,sx:{zIndex:ho.zIndex.modal+10},children:v(yo,{direction:"column",justifyContent:"center",spacing:2,children:[n(rt,{}),n(q,{children:"Loading..."})]})})]})}export{Ke as A,De as C,Xe as D,qe as a};