import{r as l,j as t,a as k}from"./app-8d52f51b.js";import{d as v}from"./Add-ca3e47c3.js";import{P as E}from"./PageHeader-b07922b9.js";import j from"./AddForm-207056f6.js";import{T as z}from"./TableLayout-9076d8b7.js";import{b as O,u as w}from"./api-ae86b069.js";import{r as L}from"./routes-c9e5dec8.js";import{A as T}from"./AdminLayout-72c39543.js";import{I as V}from"./IconButton-06508ab2.js";import{E as _}from"./Edit-91193451.js";import{A as H}from"./Alert-bc745686.js";import{b as M}from"./Button-8cbba6d3.js";import{P as R,B as q}from"./Modal-54129959.js";import{C as J}from"./CircularProgress-64102110.js";import"./OutlinedInput-6fe70e23.js";import"./ButtonBase-c5fb3adc.js";import"./useControlled-c0dbec42.js";import"./Actions-954faa47.js";import"./Stack-afb354de.js";import"./Grid-227526a7.js";import"./Typography-117e9b47.js";import"./OneColumnFormLayout-1fdec7ac.js";import"./RenderFormField-67c27216.js";import"./PasswordField-2541b4e0.js";import"./InputAdornment-f15959ad.js";import"./Autocomplete-3ac3d9f4.js";import"./TextField-ced4731f.js";import"./Close-02ebfb13.js";import"./Popper-ef237435.js";import"./MenuItem-0037843b.js";import"./dividerClasses-5336fea1.js";import"./listItemTextClasses-5dc35ea7.js";import"./FormControlLabel-45625e0d.js";import"./Checkbox-7352c5dc.js";import"./Box-eda8d922.js";import"./validate-45498d25.js";import"./DialogTitle-0a6c9e9a.js";import"./LoadingButton-a6d6e79d.js";import"./Save-c19d0d15.js";import"./TableRow-eefce377.js";import"./TableHead-a0d416a3.js";import"./AuthenticatedLayout-50ca9b8d.js";import"./Divider-827bfd31.js";import"./ListItemText-6348469b.js";const wt=({auth:d,symptomGroups:{data:u,...c},status:r,request:f})=>{var s,n;const{data:o,processing:y,reload:h,onPageSizeChange:g,onOrderByChange:S,onFilterChange:b,onPageChange:C}=O(f,["symptomGroups"]),{loading:x,getData:A}=w(),[G,m]=l.useState({id:null,name:""}),[i,p]=l.useState(!1),a=()=>p(!0),P=()=>{p(!1),B()},B=()=>{m({id:null,name:""})},F=[{field:"id",title:"ID",type:"text",sortable:!0,width:"100px",filter:{name:"id",label:"ID",type:"number",value:(s=o==null?void 0:o.filter)==null?void 0:s.id,inputProps:{min:1}}},{field:"name",title:"Symptom Name",type:"text",filter:{name:"symptomGroupName",label:"Symptom Name",type:"text",value:(n=o==null?void 0:o.filter)==null?void 0:n.symptomGroupName},sortable:!0},{field:"symptoms_count",title:"No. Symptoms",type:"number",sortable:!0},{field:"id",title:"#",type:"actions",render:e=>t(V,{onClick:I(e.id),children:t(_,{})})}],I=e=>()=>{A(L.symptomGroups.show.link(e)).then(N=>m(N.data)).then(a)},D=e=>{e.preventDefault(),h()};return k(T,{user:d.user,header:"Symptom Groups",children:[r&&t(H,{children:r}),t(E,{title:"Symptom Groups",actions:t(M,{variant:"contained",onClick:a,color:"success",startIcon:t(v,{}),children:"Add"})}),i&&t(j,{open:i,onClose:P,defaultValue:G}),t(R,{sx:{mt:"3em",p:"1rem"},children:t(z,{columns:F,data:u,onPageChange:C,pagination:c,onFilterChange:b,onFilter:D,filter:!0,onOrderByChange:S,loading:y,tableModel:{orderBy:o.orderBy??{field:"id",type:"asc"},page:o.page,filter:o.filter},pageSize:{defaultValue:o.pageSize??10,onChange:g}})}),t(q,{open:x,children:t(J,{})})]})};export{wt as default};
