import{a as u,g as m,s as b,u as T,c as f,_ as l,d as H,f as h}from"./Modal-f5c05db1.js";import{r as v,j as n}from"./app-1b187364.js";import{T as x}from"./TableRow-7aa1041a.js";function C(e){return u("MuiTableHead",e)}m("MuiTableHead",["root"]);const g=["className","component"],y=e=>{const{classes:s}=e;return h({root:["root"]},C,s)},w=b("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,s)=>s.root})({display:"table-header-group"}),M={variant:"head"},c="thead",R=v.forwardRef(function(s,a){const o=T({props:s,name:"MuiTableHead"}),{className:d,component:t=c}=o,i=f(o,g),r=l({},o,{component:t}),p=y(r);return n(x.Provider,{value:M,children:n(w,l({as:t,className:H(p.root,d),ref:a,role:t===c?null:"rowgroup",ownerState:r},i))})}),N=R;export{N as T};