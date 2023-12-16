import{g as k,a as R,s as T,p as j,_ as r,b as c,u as w,c as G,z as S,v as U,d as C,f as _}from"./Modal-784d8689.js";import{r as d,j as I}from"./app-468dc84b.js";import{j as x}from"./OutlinedInput-f8af1941.js";import{B as z}from"./ButtonBase-d47d007c.js";import{d as $}from"./dividerClasses-ec13e2f8.js";import{l as M}from"./listItemTextClasses-d306ad49.js";function te(e){return R("MuiListItemIcon",e)}const E=k("MuiListItemIcon",["root","alignItemsFlexStart"]),O=E;function H(e){return R("MuiMenuItem",e)}const D=k("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),n=D,W=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],q=(e,t)=>{const{ownerState:s}=e;return[t.root,s.dense&&t.dense,s.divider&&t.divider,!s.disableGutters&&t.gutters]},A=e=>{const{disabled:t,dense:s,divider:a,disableGutters:l,selected:p,classes:o}=e,i=_({root:["root",s&&"dense",t&&"disabled",!l&&"gutters",a&&"divider",p&&"selected"]},H,o);return r({},o,i)},J=T(z,{shouldForwardProp:e=>j(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:q})(({theme:e,ownerState:t})=>r({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${n.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:c(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${n.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:c(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${n.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:c(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:c(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${n.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${n.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${$.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${$.inset}`]:{marginLeft:52},[`& .${M.root}`]:{marginTop:0,marginBottom:0},[`& .${M.inset}`]:{paddingLeft:36},[`& .${O.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&r({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${O.root} svg`]:{fontSize:"1.25rem"}}))),K=d.forwardRef(function(t,s){const a=w({props:t,name:"MuiMenuItem"}),{autoFocus:l=!1,component:p="li",dense:o=!1,divider:f=!1,disableGutters:i=!1,focusVisibleClassName:B,role:L="menuitem",tabIndex:g,className:V}=a,F=G(a,W),b=d.useContext(x),v=d.useMemo(()=>({dense:o||b.dense||!1,disableGutters:i}),[b.dense,o,i]),u=d.useRef(null);S(()=>{l&&u.current&&u.current.focus()},[l]);const N=r({},a,{dense:v.dense,divider:f,disableGutters:i}),m=A(a),P=U(u,s);let y;return a.disabled||(y=g!==void 0?g:-1),I(x.Provider,{value:v,children:I(J,r({ref:P,role:L,tabIndex:y,component:p,focusVisibleClassName:C(m.focusVisible,B),className:C(m.root,V)},F,{ownerState:N,classes:m}))})}),se=K;export{se as M,te as g};