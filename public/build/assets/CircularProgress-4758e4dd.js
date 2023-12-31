import{a as N,g as U,s as v,e as n,_ as o,u as j,c as z,d as I,f as E}from"./Modal-f5c05db1.js";import{r as F,j as g}from"./app-1b187364.js";import{k as D,c as _}from"./ButtonBase-60f45c82.js";function K(r){return N("MuiCircularProgress",r)}U("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const W=["className","color","disableShrink","size","style","thickness","value","variant"];let l=r=>r,P,S,b,$;const t=44,B=D(P||(P=l`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),G=D(S||(S=l`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),L=r=>{const{classes:e,variant:s,color:a,disableShrink:d}=r,u={root:["root",s,`color${n(a)}`],svg:["svg"],circle:["circle",`circle${n(s)}`,d&&"circleDisableShrink"]};return E(u,K,e)},T=v("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:s}=r;return[e.root,e[s.variant],e[`color${n(s.color)}`]]}})(({ownerState:r,theme:e})=>o({display:"inline-block"},r.variant==="determinate"&&{transition:e.transitions.create("transform")},r.color!=="inherit"&&{color:(e.vars||e).palette[r.color].main}),({ownerState:r})=>r.variant==="indeterminate"&&_(b||(b=l`
      animation: ${0} 1.4s linear infinite;
    `),B)),V=v("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,e)=>e.svg})({display:"block"}),Z=v("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,e)=>{const{ownerState:s}=r;return[e.circle,e[`circle${n(s.variant)}`],s.disableShrink&&e.circleDisableShrink]}})(({ownerState:r,theme:e})=>o({stroke:"currentColor"},r.variant==="determinate"&&{transition:e.transitions.create("stroke-dashoffset")},r.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink&&_($||($=l`
      animation: ${0} 1.4s ease-in-out infinite;
    `),G)),q=F.forwardRef(function(e,s){const a=j({props:e,name:"MuiCircularProgress"}),{className:d,color:u="primary",disableShrink:M=!1,size:m=40,style:R,thickness:i=3.6,value:f=0,variant:k="indeterminate"}=a,w=z(a,W),c=o({},a,{color:u,disableShrink:M,size:m,thickness:i,value:f,variant:k}),p=L(c),h={},C={},x={};if(k==="determinate"){const y=2*Math.PI*((t-i)/2);h.strokeDasharray=y.toFixed(3),x["aria-valuenow"]=Math.round(f),h.strokeDashoffset=`${((100-f)/100*y).toFixed(3)}px`,C.transform="rotate(-90deg)"}return g(T,o({className:I(p.root,d),style:o({width:m,height:m},C,R),ownerState:c,ref:s,role:"progressbar"},x,w,{children:g(V,{className:p.svg,ownerState:c,viewBox:`${t/2} ${t/2} ${t} ${t}`,children:g(Z,{className:p.circle,style:h,ownerState:c,cx:t,cy:t,r:(t-i)/2,fill:"none",strokeWidth:i})})}))}),O=q;export{O as C};
