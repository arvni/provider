import{j as r}from"./app-598c3492.js";import{a as h}from"./api-946b6138.js";import{r as f}from"./routes-c9e5dec8.js";import S from"./EditLayout-30e485a1.js";import b from"./SampleDetailsForm-c87dded5.js";import"./ClientLayout-18a9b2a9.js";import"./AuthenticatedLayout-f89fdac4.js";import"./OutlinedInput-a4456b4a.js";import"./Modal-537603b2.js";import"./ButtonBase-f9aad11e.js";import"./Typography-90153eaf.js";import"./IconButton-f3375e8f.js";import"./Divider-f0ac2352.js";import"./dividerClasses-bb14f50a.js";import"./ListItemText-72819d32.js";import"./listItemTextClasses-7720011d.js";import"./MenuItem-ab56de8e.js";import"./validate-d7712270.js";import"./PasswordField-32337407.js";import"./InputAdornment-80af454d.js";import"./DialogTitle-13db25e5.js";import"./Box-4ecef40b.js";import"./Grid-cde2aa95.js";import"./Button-3c3de6cc.js";import"./LoadingButton-f817cea9.js";import"./CircularProgress-2d5c2476.js";import"./Stack-50558ccb.js";import"./Alert-2981f187.js";import"./Close-c18f4c19.js";import"./TextField-9f3426c0.js";import"./useControlled-d4beb3be.js";import"./Delete-3ce28d9c.js";const tt=({auth:o,order:t,step:m,sampleTypes:i})=>{const{data:p,setData:s,submit:a,processing:g,errors:e,setError:D,reset:E,clearErrors:j}=h({...t,samples:t.samples.length?t.samples:[{}],_method:"put"},f.orders.update.link(t.id,m)),l=(u,d)=>{s(c=>({...c,[u]:d}))},n=()=>a();return r(S,{step:m,auth:o,id:t.id,children:r(b,{samples:p.samples??[{}],onChange:l,onSubmit:n,sampleTypes:i,errors:e})})};export{tt as default};