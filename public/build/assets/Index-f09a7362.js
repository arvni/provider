import{a as d,j as r}from"./app-598c3492.js";import{d as v}from"./Add-3504ca00.js";import{P as N}from"./PageHeader-255048f1.js";import{T as B}from"./TableLayout-807cdbb2.js";import{b as D}from"./api-946b6138.js";import{r as o}from"./routes-c9e5dec8.js";import{D as S}from"./DeleteButton-37e836cc.js";import{A}from"./AdminLayout-4f05f9b8.js";import{S as z}from"./Stack-50558ccb.js";import{I as j}from"./IconButton-f3375e8f.js";import{E}from"./Edit-007313df.js";import{A as F}from"./Alert-2981f187.js";import{b as L}from"./Button-3c3de6cc.js";import{P as w,B as H}from"./Modal-537603b2.js";import{C as M}from"./CircularProgress-2d5c2476.js";import"./OutlinedInput-a4456b4a.js";import"./ButtonBase-f9aad11e.js";import"./useControlled-d4beb3be.js";import"./Actions-49ff8c7d.js";import"./Grid-cde2aa95.js";import"./Typography-90153eaf.js";import"./RenderFormField-09dd592b.js";import"./PasswordField-32337407.js";import"./InputAdornment-80af454d.js";import"./Autocomplete-91abe903.js";import"./TextField-9f3426c0.js";import"./Close-c18f4c19.js";import"./Popper-6e22be35.js";import"./MenuItem-ab56de8e.js";import"./dividerClasses-bb14f50a.js";import"./listItemTextClasses-7720011d.js";import"./FormControlLabel-5edb7160.js";import"./Checkbox-fdf89726.js";import"./TableRow-85fb1e69.js";import"./TableHead-0860adbf.js";import"./Delete-3ce28d9c.js";import"./CardContent-5db8063b.js";import"./AuthenticatedLayout-f89fdac4.js";import"./Divider-f0ac2352.js";import"./ListItemText-72819d32.js";import"./validate-d7712270.js";import"./DialogTitle-13db25e5.js";import"./Box-4ecef40b.js";import"./LoadingButton-f817cea9.js";const Se=({auth:f,tests:{data:c,...u},status:i})=>{var l,s,n,p;const{data:e,processing:a,reload:h,onFilterChange:g,onPageChange:x,onPageSizeChange:y,onOrderByChange:b,get:m}=D({},["tests"]),C=t=>{t.preventDefault(),m(o.tests.add.link)},P=t=>T=>{T.preventDefault(),m(t)},k=[{field:"id",title:"ID",type:"text",sortable:!0,width:"70px",filter:{name:"id",label:"ID",type:"number",value:(l=e==null?void 0:e.filter)==null?void 0:l.id,inputProps:{min:1}}},{field:"name",title:"Test Name",type:"text",filter:{name:"testName",label:"Test Name",type:"text",value:(s=e==null?void 0:e.filter)==null?void 0:s.testName},sortable:!0},{field:"code",title:"Test Code",type:"text",sortable:!0,filter:{name:"code",label:"Test Code",type:"text",value:(n=e==null?void 0:e.filter)==null?void 0:n.code}},{field:"shortName",title:"Test Short",type:"text",sortable:!0,filter:{name:"shortName",label:"Short Name",type:"text",value:(p=e==null?void 0:e.filter)==null?void 0:p.shortName}},{field:"id",title:"#",type:"actions",render:t=>d(z,{direction:"row",spacing:1,children:[r(j,{href:o.tests.edit.link(t.id),color:"warning",onClick:P(o.tests.edit.link(t.id)),children:r(E,{})}),r(S,{url:o.tests.delete.link(t.id)})]})}],I=t=>{t.preventDefault(),h()};return d(A,{user:f.user,header:"Tests",children:[i&&r(F,{children:i}),r(N,{title:"Tests",actions:r(L,{variant:"contained",onClick:C,href:o.tests.add.link,color:"success",startIcon:r(v,{}),children:"Add"})}),r(w,{sx:{mt:"3em",p:"1rem"},children:r(B,{columns:k,data:c,onPageChange:x,pagination:u,onFilterChange:g,onFilter:I,filter:!0,onOrderByChange:b,loading:a,tableModel:{orderBy:{field:"id",type:"asc"},...e},pageSize:{defaultValue:e.pageSize??10,onChange:y}})}),r(H,{open:a,sx:{zIndex:t=>t.zIndex.modal+10},children:r(M,{})})]})};export{Se as default};