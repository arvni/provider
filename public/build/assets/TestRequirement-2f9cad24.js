import{j as i}from"./app-468dc84b.js";import{F as l}from"./RenderFormField-18a270b4.js";import{S as e}from"./Stack-6d196264.js";import"./PasswordField-a64fd0b8.js";import"./OutlinedInput-f8af1941.js";import"./Modal-784d8689.js";import"./ButtonBase-d47d007c.js";import"./InputAdornment-a738385f.js";import"./Typography-fb8ff41b.js";import"./IconButton-9a3de394.js";import"./Autocomplete-1e00bf3d.js";import"./TextField-f525cea2.js";import"./useControlled-b95c8f2a.js";import"./Close-e54d3ac7.js";import"./Popper-bad574ff.js";import"./MenuItem-95aa6b0c.js";import"./dividerClasses-ec13e2f8.js";import"./listItemTextClasses-d306ad49.js";import"./FormControlLabel-6605efd8.js";import"./Checkbox-06649eb6.js";const T=({requirements:m,onChange:r})=>{const a=o=>t=>{let p=[...m];p[o]={...p[o],value:t.target.value},r(p)};return i(e,{spacing:2,children:m.map((o,t)=>i(l,{field:{name:o.label,label:o.label,value:o.value,type:o.type,size:"small",sx:{maxWidth:"80%"},onChange:a(t),required:o.required},onchange:a(t)},o.id))})};export{T as default};