import{j as r,a as h}from"./app-8d52f51b.js";import u from"./TestMethodForm-a912ac9c.js";import{a as f}from"./api-ae86b069.js";import{r as c}from"./routes-c9e5dec8.js";import{t as _}from"./validate-45498d25.js";import{C as b}from"./ClientLayout-42b556ed.js";import{P as v}from"./Modal-54129959.js";import{A as x}from"./Alert-bc745686.js";import"./TestSearchForm-38cb92ff.js";import"./TextField-ced4731f.js";import"./OutlinedInput-6fe70e23.js";import"./ButtonBase-c5fb3adc.js";import"./useControlled-c0dbec42.js";import"./InputAdornment-f15959ad.js";import"./Typography-117e9b47.js";import"./Stack-afb354de.js";import"./Divider-827bfd31.js";import"./dividerClasses-5336fea1.js";import"./MenuItem-0037843b.js";import"./listItemTextClasses-5dc35ea7.js";import"./Button-8cbba6d3.js";import"./TestCard-4438ed82.js";import"./TestDetails-6e4814f6.js";import"./DialogTitle-0a6c9e9a.js";import"./CardContent-34fa3752.js";import"./CardHeader-54ba6a04.js";import"./TableRow-eefce377.js";import"./TestRequirement-b44169b8.js";import"./RenderFormField-67c27216.js";import"./PasswordField-2541b4e0.js";import"./IconButton-06508ab2.js";import"./Autocomplete-3ac3d9f4.js";import"./Close-02ebfb13.js";import"./Popper-ef237435.js";import"./FormControlLabel-45625e0d.js";import"./Checkbox-7352c5dc.js";import"./Grid-227526a7.js";import"./CircularProgress-64102110.js";import"./Box-eda8d922.js";import"./ListItem-02d28df5.js";import"./ListItemText-6348469b.js";import"./AuthenticatedLayout-50ca9b8d.js";import"./LoadingButton-a6d6e79d.js";const nt=({auth:i,...A})=>{const{data:o,setData:p,submit:e,errors:m,setError:s,clearErrors:a}=f({patient:{},status:void 0,step:void 0,test_method:[],clinical_information:{},samples:[{}]},c.orders.store.link),d=(t,l)=>p(t,l),n=t=>{t.preventDefault(),t.stopPropagation(),a(),_(o,s)&&e()};return r(b,{user:i.user,header:"Add Order",children:h(v,{sx:{p:"1em",mt:"1em"},children:[m.test_method&&r(x,{severity:"error",children:m.test_method}),r(u,{tests:o.test_method,onChange:d,onSubmit:n})]})})};export{nt as default};