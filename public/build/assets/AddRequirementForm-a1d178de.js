import{r as T,a as l,j as e}from"./app-468dc84b.js";import{D as y,a as D,b as E}from"./DialogTitle-a60b1fca.js";import{G as n}from"./Grid-0f88e4d2.js";import{T as m}from"./TextField-f525cea2.js";import{M as o}from"./MenuItem-95aa6b0c.js";import{D as k}from"./DialogActions-553022c5.js";import{b as p}from"./Button-132598f8.js";import{S}from"./Save-8cb0cf59.js";import"./Modal-784d8689.js";import"./Typography-fb8ff41b.js";import"./OutlinedInput-f8af1941.js";import"./ButtonBase-d47d007c.js";import"./useControlled-b95c8f2a.js";import"./dividerClasses-ec13e2f8.js";import"./listItemTextClasses-d306ad49.js";const H=({data:i,setData:u,open:h,onClose:c,onSubmit:f})=>{const[t,s]=T.useState(),x=()=>{b()&&f()},b=()=>{g();let r=!0;return i.id||(r=!1,d("id","please enter method name")),i.type||(r=!1,d("type","please add at least one requirement")),r},g=()=>{s(void 0)},a=r=>u(r.target.name,r.target.value),d=(r,v)=>{let C={...t,[r]:v};s(C)};return l(y,{open:h,onClose:c,fullWidth:!0,maxWidth:"md",children:[e(D,{children:`${i.id?"Edit":"Add New"} Requirement`}),l(E,{children:[l(n,{container:!0,spacing:2,padding:2,children:[e(n,{item:!0,xs:12,md:4,children:e(m,{name:"label",value:i.label,helperText:(t==null?void 0:t.label)??"",onChange:a,label:"Label"})}),e(n,{item:!0,xs:12,md:4,children:l(m,{fullWidth:!0,select:!0,name:"type",value:i.type,onChange:a,helperText:t==null?void 0:t.type,label:"Type",children:[e(o,{value:"text",children:"Text"}),e(o,{value:"number",children:"Number"}),e(o,{value:"checkbox",children:"Checkbox"}),e(o,{value:"select",children:"combobox"})]})}),i.type=="select"&&e(n,{item:!0,xs:12,children:e(m,{fullWidth:!0,helperText:t==null?void 0:t.options,name:"options",value:i.options,onChange:a,label:"options"})})]}),l(k,{children:[e(p,{onClick:c,children:"Cancel"}),e(p,{startIcon:e(S,{}),onClick:x,variant:"contained",children:"Save"})]})]})]})};export{H as default};