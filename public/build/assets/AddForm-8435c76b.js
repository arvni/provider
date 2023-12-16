import{a as S,j as t}from"./app-598c3492.js";import{O as b}from"./OneColumnFormLayout-1259828f.js";import{a as f}from"./api-946b6138.js";import{r}from"./routes-c9e5dec8.js";import{c as x}from"./validate-d7712270.js";import{D as v,a as C,b as k}from"./DialogTitle-13db25e5.js";import{b as D}from"./Button-3c3de6cc.js";import{L as _}from"./LoadingButton-f817cea9.js";import{S as j}from"./Save-c7c89ae8.js";import"./RenderFormField-09dd592b.js";import"./PasswordField-32337407.js";import"./OutlinedInput-a4456b4a.js";import"./Modal-537603b2.js";import"./ButtonBase-f9aad11e.js";import"./InputAdornment-80af454d.js";import"./Typography-90153eaf.js";import"./IconButton-f3375e8f.js";import"./Autocomplete-91abe903.js";import"./TextField-9f3426c0.js";import"./useControlled-d4beb3be.js";import"./Close-c18f4c19.js";import"./Popper-6e22be35.js";import"./MenuItem-ab56de8e.js";import"./dividerClasses-bb14f50a.js";import"./listItemTextClasses-7720011d.js";import"./FormControlLabel-5edb7160.js";import"./Stack-50558ccb.js";import"./Checkbox-fdf89726.js";import"./Actions-49ff8c7d.js";import"./Box-4ecef40b.js";import"./Grid-cde2aa95.js";import"./CircularProgress-2d5c2476.js";const eo=({open:s,onClose:n,defaultValue:m={id:null,name:"",hpo:"",symptom_group:void 0}})=>{const{data:o,submit:d,processing:p,handleChange:a,errors:i,setError:l,reset:u,clearErrors:c}=f({...m,_method:m.id?"put":"post"},m.id?r.symptoms.update.link(m.id):r.symptoms.add.link),h=[{name:"name",label:"Symptom Name",value:o.name,type:"text",required:!0,error:!!i.name},{name:"hpo",label:"Hpo",value:o.hpo,type:"text",required:!0,error:!!i.hpo},{name:"symptom_group",label:"Symptom Group",value:o.symptom_group,type:"selectSearch",url:r.symptomGroups.api.list.link,required:!0,error:!!i.hpo,onChange:a}],e=()=>{n(),u()},y=g=>{g.preventDefault(),c(),x(o,l)&&d({onSuccess:e})};return S(v,{open:s,onClose:e,keepMounted:!0,fullWidth:!0,maxWidth:"xs",children:[t(C,{children:o.id?"Edit Symptom":"Add Symptom"}),t(k,{children:t(b,{send:y,action:o.id?r.symptoms.update.link(o.id):r.symptoms.add.link,onchange:a,fields:h,sx:{pt:"1em"},actions:[t(D,{onClick:e,disabled:p,variant:"text",size:"large",children:"Cancel"}),t(_,{loading:p,size:"medium",variant:"contained",type:"submit",startIcon:t(j,{}),children:"Submit"})]})})]})};export{eo as default};