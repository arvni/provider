import{a as z,g as A,s as L,_ as d,p as X,c as D,d as T,e as U,f as O,u as Y}from"./Modal-f5c05db1.js";import{r as _,a as S,j as W}from"./app-1b187364.js";import{u as H,f as Z}from"./OutlinedInput-e50361c6.js";import{B as ee}from"./ButtonBase-60f45c82.js";import{u as oe}from"./useControlled-9027e4f4.js";import{T as j}from"./Typography-83edb964.js";import{S as te}from"./Stack-e8abadc7.js";function re(e){return z("PrivateSwitchBase",e)}A("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const ae=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],se=e=>{const{classes:o,checked:a,disabled:l,edge:r}=e,t={root:["root",a&&"checked",l&&"disabled",r&&`edge${U(r)}`],input:["input"]};return O(t,re,o)},le=L(ee)(({ownerState:e})=>d({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),ne=L("input",{shouldForwardProp:X})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),ie=_.forwardRef(function(o,a){const{autoFocus:l,checked:r,checkedIcon:t,className:h,defaultChecked:F,disabled:p,disableFocusRipple:g=!1,edge:R=!1,icon:w,id:v,inputProps:x,inputRef:$,name:q,onBlur:m,onChange:C,onFocus:b,readOnly:B,required:I=!1,tabIndex:P,type:n,value:f}=o,i=D(o,ae),[u,G]=oe({controlled:r,default:!!F,name:"SwitchBase",state:"checked"}),c=H(),J=s=>{b&&b(s),c&&c.onFocus&&c.onFocus(s)},K=s=>{m&&m(s),c&&c.onBlur&&c.onBlur(s)},Q=s=>{if(s.nativeEvent.defaultPrevented)return;const M=s.target.checked;G(M),C&&C(s,M)};let y=p;c&&typeof y>"u"&&(y=c.disabled);const V=n==="checkbox"||n==="radio",N=d({},o,{checked:u,disabled:y,disableFocusRipple:g,edge:R}),E=se(N);return S(le,d({component:"span",className:T(E.root,h),centerRipple:!0,focusRipple:!g,disabled:y,tabIndex:null,role:void 0,onFocus:J,onBlur:K,ownerState:N,ref:a},i,{children:[W(ne,d({autoFocus:l,checked:r,defaultChecked:F,className:E.input,disabled:y,id:V?v:void 0,name:q,onChange:Q,readOnly:B,ref:$,required:I,ownerState:N,tabIndex:P,type:n},n==="checkbox"&&f===void 0?{}:{value:f},x)),u?t:w]}))}),xe=ie;function ce(e){return z("MuiFormControlLabel",e)}const de=A("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),k=de,ue=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],pe=e=>{const{classes:o,disabled:a,labelPlacement:l,error:r,required:t}=e,h={root:["root",a&&"disabled",`labelPlacement${U(l)}`,r&&"error",t&&"required"],label:["label",a&&"disabled"],asterisk:["asterisk",r&&"error"]};return O(h,ce,o)},me=L("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:a}=e;return[{[`& .${k.label}`]:o.label},o.root,o[`labelPlacement${U(a.labelPlacement)}`]]}})(({theme:e,ownerState:o})=>d({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${k.disabled}`]:{cursor:"default"}},o.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},o.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},o.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${k.label}`]:{[`&.${k.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),be=L("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,o)=>o.asterisk})(({theme:e})=>({[`&.${k.error}`]:{color:(e.vars||e).palette.error.main}})),fe=_.forwardRef(function(o,a){var l,r;const t=Y({props:o,name:"MuiFormControlLabel"}),{className:h,componentsProps:F={},control:p,disabled:g,disableTypography:R,label:w,labelPlacement:v="end",required:x,slotProps:$={}}=t,q=D(t,ue),m=H(),C=(l=g??p.props.disabled)!=null?l:m==null?void 0:m.disabled,b=x??p.props.required,B={disabled:C,required:b};["checked","name","onChange","value","inputRef"].forEach(u=>{typeof p.props[u]>"u"&&typeof t[u]<"u"&&(B[u]=t[u])});const I=Z({props:t,muiFormControl:m,states:["error"]}),P=d({},t,{disabled:C,labelPlacement:v,required:b,error:I.error}),n=pe(P),f=(r=$.typography)!=null?r:F.typography;let i=w;return i!=null&&i.type!==j&&!R&&(i=W(j,d({component:"span"},f,{className:T(n.label,f==null?void 0:f.className),children:i}))),S(me,d({className:T(n.root,h),ownerState:P,ref:a},q,{children:[_.cloneElement(p,B),b?S(te,{display:"block",children:[i,S(be,{ownerState:P,"aria-hidden":!0,className:n.asterisk,children:[" ","*"]})]}):i]}))}),Be=fe;export{Be as F,xe as S};