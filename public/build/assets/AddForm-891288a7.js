import{a as y,j as r}from"./app-8d52f51b.js";import{O as S}from"./OneColumnFormLayout-1fdec7ac.js";import{a as g}from"./api-ae86b069.js";import{r as t}from"./routes-c9e5dec8.js";import{b as x}from"./validate-45498d25.js";import{D as T,a as _,b as k}from"./DialogTitle-0a6c9e9a.js";import{b as q}from"./Button-8cbba6d3.js";import{L as C}from"./LoadingButton-a6d6e79d.js";import{S as v}from"./Save-c19d0d15.js";import"./RenderFormField-67c27216.js";import"./PasswordField-2541b4e0.js";import"./OutlinedInput-6fe70e23.js";import"./Modal-54129959.js";import"./ButtonBase-c5fb3adc.js";import"./InputAdornment-f15959ad.js";import"./Typography-117e9b47.js";import"./IconButton-06508ab2.js";import"./Autocomplete-3ac3d9f4.js";import"./TextField-ced4731f.js";import"./useControlled-c0dbec42.js";import"./Close-02ebfb13.js";import"./Popper-ef237435.js";import"./MenuItem-0037843b.js";import"./dividerClasses-5336fea1.js";import"./listItemTextClasses-5dc35ea7.js";import"./FormControlLabel-45625e0d.js";import"./Stack-afb354de.js";import"./Checkbox-7352c5dc.js";import"./Actions-954faa47.js";import"./Box-eda8d922.js";import"./Grid-227526a7.js";import"./CircularProgress-64102110.js";const me=({open:p,onClose:s,defaultValue:i={id:null,name:"",sample_id_required:!1}})=>{const{data:e,submit:n,processing:m,handleChange:d,errors:a,setError:l,reset:u,clearErrors:c}=g({...i,_method:i.id?"put":"post"},i.id?t.sampleTypes.update.link(i.id):t.sampleTypes.add.link),h=[{name:"name",label:"SampleType Name",value:e.name,type:"text",required:!0,error:!!a.name},{name:"sample_id_required",label:"Sample ID Required ?",value:e.sample_id_required,type:"checkbox",required:!0,error:!!a.sample_id_required}],o=()=>{s(),u()},b=f=>{f.preventDefault(),c(),x(e,l)&&n({onSuccess:o})};return y(T,{open:p,onClose:o,keepMounted:!0,fullWidth:!0,maxWidth:"xs",children:[r(_,{children:e.id?"Edit Sample Type":"Add Sample Type"}),r(k,{children:r(S,{send:b,action:e.id?t.sampleTypes.update.link(e.id):t.sampleTypes.add.link,onchange:d,fields:h,sx:{pt:"1em"},actions:[r(q,{onClick:o,disabled:m,variant:"text",size:"large",children:"Cancel"}),r(C,{loading:m,size:"medium",variant:"contained",type:"submit",startIcon:r(v,{}),children:"Submit"})]})})]})};export{me as default};