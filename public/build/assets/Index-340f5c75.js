import{r as n,j as e,a as k}from"./app-8d52f51b.js";import{d as q}from"./Add-ca3e47c3.js";import{P as v}from"./PageHeader-b07922b9.js";import E from"./AddForm-891288a7.js";import{T as N}from"./TableLayout-9076d8b7.js";import{b as j,u as z}from"./api-ae86b069.js";import{r as O}from"./routes-c9e5dec8.js";import{A as w}from"./AdminLayout-72c39543.js";import{I as L}from"./IconButton-06508ab2.js";import{E as R}from"./Edit-91193451.js";import{A as V}from"./Alert-bc745686.js";import{b as G}from"./Button-8cbba6d3.js";import{P as H,B as M}from"./Modal-54129959.js";import{C as J}from"./CircularProgress-64102110.js";import"./OutlinedInput-6fe70e23.js";import"./ButtonBase-c5fb3adc.js";import"./useControlled-c0dbec42.js";import"./Actions-954faa47.js";import"./Stack-afb354de.js";import"./Grid-227526a7.js";import"./Typography-117e9b47.js";import"./OneColumnFormLayout-1fdec7ac.js";import"./RenderFormField-67c27216.js";import"./PasswordField-2541b4e0.js";import"./InputAdornment-f15959ad.js";import"./Autocomplete-3ac3d9f4.js";import"./TextField-ced4731f.js";import"./Close-02ebfb13.js";import"./Popper-ef237435.js";import"./MenuItem-0037843b.js";import"./dividerClasses-5336fea1.js";import"./listItemTextClasses-5dc35ea7.js";import"./FormControlLabel-45625e0d.js";import"./Checkbox-7352c5dc.js";import"./Box-eda8d922.js";import"./validate-45498d25.js";import"./DialogTitle-0a6c9e9a.js";import"./LoadingButton-a6d6e79d.js";import"./Save-c19d0d15.js";import"./TableRow-eefce377.js";import"./TableHead-a0d416a3.js";import"./AuthenticatedLayout-50ca9b8d.js";import"./Divider-827bfd31.js";import"./ListItemText-6348469b.js";const ze=({auth:d,sampleTypes:{data:u,...f},status:o,request:c})=>{var l,s;const{data:t,processing:y,reload:h,onPageSizeChange:g,onOrderByChange:T,onFilterChange:S,onPageChange:b}=j(c,["sampleTypes"]),{loading:C,getData:x}=z(),[A,a]=n.useState({id:null,name:"",sample_id_required:!1}),[i,p]=n.useState(!1),m=()=>p(!0),P=()=>{p(!1),I()},I=()=>{a({id:null,name:"",sample_id_required:!1})},B=[{field:"id",title:"ID",type:"text",sortable:!0,width:"100px",filter:{name:"id",label:"ID",type:"number",value:(l=t==null?void 0:t.filter)==null?void 0:l.id,inputProps:{min:1}}},{field:"name",title:"Sample Type Name",type:"text",filter:{name:"sampleTypeName",label:"Sample Type Name",type:"text",value:(s=t==null?void 0:t.filter)==null?void 0:s.sampleTypeName},sortable:!0},{field:"sample_id_required",title:"Sample ID Required",type:"boolean",sortable:!0},{field:"id",title:"#",type:"actions",render:r=>e(L,{onClick:F(r.id),children:e(R,{})})}],F=r=>()=>{x(O.sampleTypes.show.link(r)).then(D=>a(D.data)).then(m)},_=r=>{r.preventDefault(),h()};return k(w,{user:d.user,header:"Sample Types",children:[o&&e(V,{children:o}),e(v,{title:"Sample Types",actions:e(G,{variant:"contained",onClick:m,color:"success",startIcon:e(q,{}),children:"Add"})}),i&&e(E,{open:i,onClose:P,defaultValue:A}),e(H,{sx:{mt:"3em",p:"1rem"},children:e(N,{columns:B,data:u,onPageChange:b,pagination:f,onFilterChange:S,onFilter:_,filter:!0,onOrderByChange:T,loading:y,tableModel:{orderBy:t.orderBy??{field:"id",type:"asc"},page:t.page,filter:t.filter},pageSize:{defaultValue:t.pageSize??10,onChange:g}})}),e(M,{open:C,children:e(J,{})})]})};export{ze as default};
