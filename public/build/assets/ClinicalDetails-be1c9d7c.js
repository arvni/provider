import{j as o}from"./app-8d52f51b.js";import{a as u}from"./api-ae86b069.js";import{r as f}from"./routes-c9e5dec8.js";import h from"./EditLayout-b46591b4.js";import b from"./ClinicalDetailsForm-d1c1e7e4.js";import"./ClientLayout-42b556ed.js";import"./AuthenticatedLayout-50ca9b8d.js";import"./OutlinedInput-6fe70e23.js";import"./Modal-54129959.js";import"./ButtonBase-c5fb3adc.js";import"./Typography-117e9b47.js";import"./IconButton-06508ab2.js";import"./Divider-827bfd31.js";import"./dividerClasses-5336fea1.js";import"./ListItemText-6348469b.js";import"./listItemTextClasses-5dc35ea7.js";import"./MenuItem-0037843b.js";import"./validate-45498d25.js";import"./PasswordField-2541b4e0.js";import"./InputAdornment-f15959ad.js";import"./DialogTitle-0a6c9e9a.js";import"./Box-eda8d922.js";import"./Grid-227526a7.js";import"./Button-8cbba6d3.js";import"./LoadingButton-a6d6e79d.js";import"./CircularProgress-64102110.js";import"./Stack-afb354de.js";import"./SymptomSelector-738ece33.js";import"./Autocomplete-3ac3d9f4.js";import"./TextField-ced4731f.js";import"./useControlled-c0dbec42.js";import"./Close-02ebfb13.js";import"./Popper-ef237435.js";import"./ListItem-02d28df5.js";import"./ListItemAvatar-6623829d.js";import"./RadioGroup-fc16590c.js";import"./FormControlLabel-45625e0d.js";import"./TableRow-eefce377.js";import"./TableHead-a0d416a3.js";import"./Delete-1e22dba7.js";import"./Checkbox-7352c5dc.js";const si=({auth:r,order:i,step:t})=>{const{data:m,setData:p,submit:a,processing:C,errors:n,setError:g,reset:D,clearErrors:E}=u({...i.clinical_information,_method:"put"},f.orders.update.link(i.id,t)),s=(l,c)=>{p(d=>({...d,[l]:c}))},e=()=>a();return o(h,{auth:r,step:t,id:i.id,children:o(b,{clinicalInformation:m,onChange:s,onSubmit:e,id:i.id??"",errors:n})})};export{si as default};