import{j as r}from"./app-89f793d1.js";import{a as h}from"./api-1178af95.js";import{r as f}from"./routes-c9e5dec8.js";import S from"./EditLayout-e264cd26.js";import b from"./SampleDetailsForm-ee749874.js";import"./ClientLayout-70f19d40.js";import"./AuthenticatedLayout-48368bf6.js";import"./OutlinedInput-5989b9e1.js";import"./Modal-2f4db1df.js";import"./ButtonBase-da1341a5.js";import"./Typography-aa107a64.js";import"./IconButton-d32145eb.js";import"./Divider-a5afc4e7.js";import"./dividerClasses-2c6d5095.js";import"./ListItemText-be70efe7.js";import"./listItemTextClasses-0a7ca23c.js";import"./MenuItem-f076ade0.js";import"./validate-d7edf39a.js";import"./PasswordField-9853e431.js";import"./InputAdornment-bccac95c.js";import"./DialogTitle-c71abf45.js";import"./Box-aee122b3.js";import"./Grid-d9537aa5.js";import"./Button-ed715502.js";import"./LoadingButton-d4d1b356.js";import"./CircularProgress-85b84815.js";import"./Stack-b7fc3304.js";import"./Alert-fb83a693.js";import"./Close-d46d9bbf.js";import"./TextField-d8dbd712.js";import"./useControlled-9a9c2b20.js";import"./Delete-a4db7e61.js";const tt=({auth:o,order:t,step:m,sampleTypes:i})=>{const{data:p,setData:s,submit:a,processing:g,errors:e,setError:D,reset:E,clearErrors:j}=h({...t,samples:t.samples.length?t.samples:[{}],_method:"put"},f.orders.update.link(t.id,m)),l=(u,d)=>{s(c=>({...c,[u]:d}))},n=()=>a();return r(S,{step:m,auth:o,id:t.id,children:r(b,{samples:p.samples??[{}],onChange:l,onSubmit:n,sampleTypes:i,errors:e})})};export{tt as default};