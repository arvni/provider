import{j as t,r as i,a as b}from"./app-598c3492.js";import{d as T}from"./Add-3504ca00.js";import{P as V}from"./PageHeader-255048f1.js";import G from"./AddForm-85f0c337.js";import{T as R}from"./TableLayout-807cdbb2.js";import{b as _,u as q}from"./api-946b6138.js";import{r as J}from"./routes-c9e5dec8.js";import{C as K}from"./AuthenticatedLayout-f89fdac4.js";import{A as Q}from"./AdminLayout-4f05f9b8.js";import{S as W}from"./Stack-50558ccb.js";import{I as y}from"./IconButton-f3375e8f.js";import{E as X}from"./Edit-007313df.js";import{c as Y}from"./OutlinedInput-a4456b4a.js";import{A as Z}from"./Alert-2981f187.js";import{b as $}from"./Button-3c3de6cc.js";import{P as ee,B as te}from"./Modal-537603b2.js";import{C as re}from"./CircularProgress-2d5c2476.js";import"./useControlled-d4beb3be.js";import"./ButtonBase-f9aad11e.js";import"./Actions-49ff8c7d.js";import"./Grid-cde2aa95.js";import"./Typography-90153eaf.js";import"./PasswordField-32337407.js";import"./InputAdornment-80af454d.js";import"./countries-daec81e2.js";import"./DialogTitle-13db25e5.js";import"./Box-4ecef40b.js";import"./TextField-9f3426c0.js";import"./Divider-f0ac2352.js";import"./dividerClasses-bb14f50a.js";import"./Autocomplete-91abe903.js";import"./Close-c18f4c19.js";import"./Popper-6e22be35.js";import"./DialogActions-8ab3e165.js";import"./LoadingButton-f817cea9.js";import"./Save-c7c89ae8.js";import"./RenderFormField-09dd592b.js";import"./MenuItem-ab56de8e.js";import"./listItemTextClasses-7720011d.js";import"./FormControlLabel-5edb7160.js";import"./Checkbox-fdf89726.js";import"./TableRow-85fb1e69.js";import"./TableHead-0860adbf.js";import"./ListItemText-72819d32.js";import"./validate-d7712270.js";const oe=Y(t("path",{d:"M2 17h20v2H2v-2zm1.15-4.05L4 11.47l.85 1.48 1.3-.75-.85-1.48H7v-1.5H5.3l.85-1.47L4.85 7 4 8.47 3.15 7l-1.3.75.85 1.47H1v1.5h1.7l-.85 1.48 1.3.75zm6.7-.75 1.3.75.85-1.48.85 1.48 1.3-.75-.85-1.48H15v-1.5h-1.7l.85-1.47-1.3-.75L12 8.47 11.15 7l-1.3.75.85 1.47H9v1.5h1.7l-.85 1.48zM23 9.22h-1.7l.85-1.47-1.3-.75L20 8.47 19.15 7l-1.3.75.85 1.47H17v1.5h1.7l-.85 1.48 1.3.75.85-1.48.85 1.48 1.3-.75-.85-1.48H23v-1.5z"}),"PasswordOutlined"),C={id:void 0,name:"",userName:"",email:"",mobile:"",meta:{contact:{address:"",city:"",country:"",phone:""},billing:{name:"",email:"",phone:"",country:"",address:"",state:"",city:"",zip:""}},active:!0,password:""},We=({auth:v,users:{data:P,...x},status:a,request:F})=>{var c,u,f,h,g;const{data:e,processing:w,reload:A,onPageSizeChange:H,onOrderByChange:S,onFilterChange:z,onPageChange:I}=_(F,["users"]),{loading:N,getData:B}=q(),[l,o]=i.useState(C),[s,m]=i.useState(!1),[O,n]=i.useState(!1),p=()=>m(!0),k=r=>()=>{o(r),n(!0)},E=()=>{d(),n(!1)},L=()=>{m(!1),d()},d=()=>{o(C)},D=[{field:"id",title:"ID",type:"text",sortable:!0,width:"100px",filter:{name:"id",label:"ID",type:"number",value:(c=e==null?void 0:e.filter)==null?void 0:c.id,inputProps:{min:1}}},{field:"name",title:"Name",type:"text",filter:{name:"name",label:"Name",type:"text",value:(u=e==null?void 0:e.filter)==null?void 0:u.name},sortable:!0},{field:"userName",title:"userName",type:"text",filter:{name:"userName",label:"userName",type:"text",value:(f=e==null?void 0:e.filter)==null?void 0:f.userName},sortable:!0},{field:"email",title:"Email",type:"email",filter:{name:"email",label:"Email",type:"text",value:(h=e==null?void 0:e.filter)==null?void 0:h.email},sortable:!0},{field:"mobile",title:"Mobile",type:"mobile",filter:{name:"mobile",label:"Mobile",type:"text",value:(g=e==null?void 0:e.filter)==null?void 0:g.mobile},sortable:!0},{field:"id",title:"#",type:"actions",render:r=>b(W,{direction:"row",spacing:1,children:[t(y,{onClick:M(r.id),children:t(X,{})}),t(y,{onClick:k(r),children:t(oe,{})})]})}],M=r=>()=>{B(J.users.show.link(r)).then(j=>o(j.data)).then(p)},U=r=>{r.preventDefault(),A()};return b(Q,{user:v.user,header:"Users",children:[a&&t(Z,{children:a}),t(V,{title:"Users",actions:t($,{variant:"contained",onClick:p,color:"success",startIcon:t(T,{}),children:"Add"})}),s&&t(G,{open:s,onClose:L,defaultValue:l}),t(ee,{sx:{mt:"3em",p:"1rem"},children:t(R,{columns:D,data:P,onPageChange:I,pagination:x,onFilterChange:z,onFilter:U,filter:!0,onOrderByChange:S,loading:w,tableModel:{orderBy:e.orderBy??{field:"id",type:"asc"},page:e.page,filter:e.filter},pageSize:{defaultValue:e.pageSize??10,onChange:H}})}),t(te,{open:N,children:t(re,{})}),t(K,{open:O,onClose:E,user:l})]})};export{We as default};