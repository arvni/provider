import{r as x,a as C,j as t}from"./app-89f793d1.js";import{O as v}from"./OneColumnFormLayout-259cb950.js";import{a as y}from"./api-1178af95.js";import{r as m}from"./routes-c9e5dec8.js";import{h as S}from"./validate-d7edf39a.js";import{D as k,a as B,b as M}from"./DialogTitle-c71abf45.js";import{b as T}from"./Button-ed715502.js";import{L as q}from"./LoadingButton-d4d1b356.js";import{S as D}from"./Save-1740bb6e.js";import"./RenderFormField-13849043.js";import"./PasswordField-9853e431.js";import"./OutlinedInput-5989b9e1.js";import"./Modal-2f4db1df.js";import"./ButtonBase-da1341a5.js";import"./InputAdornment-bccac95c.js";import"./Typography-aa107a64.js";import"./IconButton-d32145eb.js";import"./Autocomplete-d0631f46.js";import"./TextField-d8dbd712.js";import"./useControlled-9a9c2b20.js";import"./Close-d46d9bbf.js";import"./Popper-b54b6c7a.js";import"./MenuItem-f076ade0.js";import"./dividerClasses-2c6d5095.js";import"./listItemTextClasses-0a7ca23c.js";import"./FormControlLabel-60994999.js";import"./Stack-b7fc3304.js";import"./Checkbox-33b75979.js";import"./Actions-03e93d35.js";import"./Box-aee122b3.js";import"./Grid-d9537aa5.js";import"./CircularProgress-85b84815.js";const lt=({open:l,onClose:n,defaultValue:s={material:"",quantity:0}})=>{const{data:e,submit:p,processing:i,handleChange:u,errors:r,setError:d,reset:c,clearErrors:f,wasSuccessful:o}=y(s,m.orderMaterials.add.link),b=[{name:"material",label:"Material",value:e.material,error:!!(r!=null&&r.material),helperText:r.material,type:"select",required:!0,options:[{label:"BionCard",value:"BionCard"},{label:"BionNIPT Streck Tube",value:"BionNIPT Streck Tube"}]},{name:"quantity",label:"Quantity",value:e.quantity,type:"number",required:!0}],a=()=>{n(),c()},h=g=>{g.preventDefault(),f(),S(e,d)&&p()};return x.useEffect(()=>{o&&a()},[o]),C(k,{open:l,onClose:a,keepMounted:!0,fullWidth:!0,maxWidth:"xs",children:[t(B,{children:"Order Material"}),t(M,{children:t(v,{send:h,action:m.orderMaterials.add.link,onchange:u,fields:b,sx:{pt:"1em"},actions:[t(T,{onClick:a,disabled:i,variant:"text",size:"large",children:"Cancel"}),t(q,{loading:i,size:"medium",variant:"contained",type:"submit",startIcon:t(D,{}),children:"Submit"})]})})]})};export{lt as default};
