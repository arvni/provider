import{j as e,R as f,r as s,F as h,a as g}from"./app-468dc84b.js";import{u as S}from"./api-a48cce3e.js";import{A as x}from"./Autocomplete-1e00bf3d.js";import{B as b}from"./Box-d6830782.js";import{T as y}from"./Typography-fb8ff41b.js";import{T as C}from"./TextField-f525cea2.js";import{I as v}from"./InputAdornment-a738385f.js";import{c as T}from"./OutlinedInput-f8af1941.js";import"./Modal-784d8689.js";import"./Close-e54d3ac7.js";import"./IconButton-9a3de394.js";import"./ButtonBase-d47d007c.js";import"./Popper-bad574ff.js";import"./useControlled-b95c8f2a.js";const w=T(e("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search"),K=({onSelect:p})=>{const o=f.useRef(""),[l,a]=s.useState(""),{getData:u}=S(),[i,c]=s.useState([]);return s.useEffect(()=>{i.length||u(route("api.symptoms.index")).then(t=>c(t.data))},[]),e(h,{children:e(x,{disableClearable:!0,onKeyDown:t=>{t.key==="Tab"&&o.current&&(a(o.current),t.preventDefault())},onBlur:()=>{o.current=""},disablePortal:!0,inputValue:l,getOptionLabel:t=>t.name,filterOptions:(t,r)=>t.filter(n=>n.name.toLowerCase().trim().includes(r.inputValue.toLowerCase().trim())),id:"combo-box-hint-demo",options:i,onChange:(t,r)=>{r&&p(r),a("")},renderInput:t=>g(b,{sx:{position:"relative"},children:[e(y,{sx:{position:"absolute",opacity:.5,left:14,top:16},children:o.current}),e(C,{...t,inputProps:{...t.inputProps,endAdornment:e(v,{position:"end",children:e(w,{})})},onChange:r=>{const n=r.target.value;a(n);const m=i.find(d=>d.name.startsWith(n));n&&m?o.current=m.name:o.current=""},label:"Search"})]})})})};export{K as default};