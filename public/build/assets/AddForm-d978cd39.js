import{r as x,a as C,j as t}from"./app-468dc84b.js";import{O as v}from"./OneColumnFormLayout-3a6c6a4c.js";import{a as y}from"./api-a48cce3e.js";import{r as m}from"./routes-c9e5dec8.js";import{h as S}from"./validate-1e59ab84.js";import{D as k,a as B,b as M}from"./DialogTitle-a60b1fca.js";import{b as T}from"./Button-132598f8.js";import{L as q}from"./LoadingButton-32a80b82.js";import{S as D}from"./Save-8cb0cf59.js";import"./RenderFormField-18a270b4.js";import"./PasswordField-a64fd0b8.js";import"./OutlinedInput-f8af1941.js";import"./Modal-784d8689.js";import"./ButtonBase-d47d007c.js";import"./InputAdornment-a738385f.js";import"./Typography-fb8ff41b.js";import"./IconButton-9a3de394.js";import"./Autocomplete-1e00bf3d.js";import"./TextField-f525cea2.js";import"./useControlled-b95c8f2a.js";import"./Close-e54d3ac7.js";import"./Popper-bad574ff.js";import"./MenuItem-95aa6b0c.js";import"./dividerClasses-ec13e2f8.js";import"./listItemTextClasses-d306ad49.js";import"./FormControlLabel-6605efd8.js";import"./Stack-6d196264.js";import"./Checkbox-06649eb6.js";import"./Actions-9d84c455.js";import"./Box-d6830782.js";import"./Grid-0f88e4d2.js";import"./CircularProgress-a38e80be.js";const lt=({open:l,onClose:n,defaultValue:s={material:"",quantity:0}})=>{const{data:e,submit:p,processing:i,handleChange:u,errors:r,setError:d,reset:c,clearErrors:f,wasSuccessful:o}=y(s,m.orderMaterials.add.link),b=[{name:"material",label:"Material",value:e.material,error:!!(r!=null&&r.material),helperText:r.material,type:"select",required:!0,options:[{label:"BionCard",value:"BionCard"},{label:"BionNIPT Streck Tube",value:"BionNIPT Streck Tube"}]},{name:"quantity",label:"Quantity",value:e.quantity,type:"number",required:!0}],a=()=>{n(),c()},h=g=>{g.preventDefault(),f(),S(e,d)&&p()};return x.useEffect(()=>{o&&a()},[o]),C(k,{open:l,onClose:a,keepMounted:!0,fullWidth:!0,maxWidth:"xs",children:[t(B,{children:"Order Material"}),t(M,{children:t(v,{send:h,action:m.orderMaterials.add.link,onchange:u,fields:b,sx:{pt:"1em"},actions:[t(T,{onClick:a,disabled:i,variant:"text",size:"large",children:"Cancel"}),t(q,{loading:i,size:"medium",variant:"contained",type:"submit",startIcon:t(D,{}),children:"Submit"})]})})]})};export{lt as default};
