import{j as i}from"./app-1b187364.js";import{F as l}from"./RenderFormField-60fe3bba.js";import{S as e}from"./Stack-e8abadc7.js";import"./PasswordField-91fee49f.js";import"./OutlinedInput-e50361c6.js";import"./Modal-f5c05db1.js";import"./ButtonBase-60f45c82.js";import"./InputAdornment-3aab5f41.js";import"./Typography-83edb964.js";import"./IconButton-e4774df1.js";import"./Autocomplete-d798b78a.js";import"./TextField-07654f81.js";import"./useControlled-9027e4f4.js";import"./Close-3a101d30.js";import"./Popper-6d60281d.js";import"./MenuItem-457f24cc.js";import"./dividerClasses-247754d0.js";import"./listItemTextClasses-78a5e60e.js";import"./FormControlLabel-f404fd04.js";import"./Checkbox-b9fa9deb.js";const T=({requirements:m,onChange:r})=>{const a=o=>t=>{let p=[...m];p[o]={...p[o],value:t.target.value},r(p)};return i(e,{spacing:2,children:m.map((o,t)=>i(l,{field:{name:o.label,label:o.label,value:o.value,type:o.type,size:"small",sx:{maxWidth:"80%"},onChange:a(t),required:o.required},onchange:a(t)},o.id))})};export{T as default};
