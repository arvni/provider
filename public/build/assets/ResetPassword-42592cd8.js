import{r as _,R as E,a as i,j as r,b as T}from"./app-89f793d1.js";import{G as q,R as v}from"./recaptcha-wrapper-5b10e687.js";import{r as d}from"./routes-c9e5dec8.js";import{a as A}from"./api-1178af95.js";import{r as B}from"./validate-d7edf39a.js";import{P as c}from"./PasswordField-9853e431.js";import{B as F}from"./Box-aee122b3.js";import{G as t}from"./Grid-d9537aa5.js";import{T as j}from"./TextField-d8dbd712.js";import{F as k}from"./OutlinedInput-5989b9e1.js";import{L as G}from"./LoadingButton-d4d1b356.js";import"./ButtonBase-da1341a5.js";import"./Modal-2f4db1df.js";import"./InputAdornment-bccac95c.js";import"./Typography-aa107a64.js";import"./IconButton-d32145eb.js";import"./useControlled-9a9c2b20.js";import"./Button-ed715502.js";import"./CircularProgress-85b84815.js";function rr({token:l,email:h}){const{data:o,setData:u,submit:w,processing:f,errors:e,reset:x,setError:C,clearErrors:P,handleChange:n}=A({token:l,email:h,password:"",password_confirmation:"",captcha:"",__method:"put"},d.postResetPassword.link);_.useEffect(()=>()=>{x("password","password_confirmation","captcha")},[]);const p=E.createRef(),g=a=>{var s;a.preventDefault(),P(),(s=p.current)==null||s.reset(),B(o,C)&&w()},m=(a,s)=>u(b=>({...b,[a]:s})),y=a=>m("captcha",a??""),R=()=>m("captcha","");return i(q,{children:[r(T,{title:"Reset Password"}),r(F,{component:"form",onSubmit:g,action:d.postResetPassword.link,method:"post",children:i(t,{container:!0,spacing:2,children:[r(t,{item:!0,xs:12,sx:{width:"100%"},children:r(j,{disabled:!0,name:"email",value:o.email,helperText:e.email??"",error:e.hasOwnProperty("email"),type:"email",label:"Email",autoComplete:"username",required:!0,fullWidth:!0})}),r(t,{item:!0,xs:12,sx:{width:"100%"},children:r(c,{name:"password",value:o.password,helperText:e.password??"",error:e.hasOwnProperty("password"),type:"password",label:"Password",autoComplete:"new-password",required:!0,onChange:n,fullwidth:!0})}),r(t,{item:!0,xs:12,sx:{width:"100%"},children:r(c,{name:"password_confirmation",value:o.password_confirmation,helperText:e.password_confirmation??"",error:e.hasOwnProperty("password_confirmation"),type:"password",label:"Confirm Password",autoComplete:"new-password",required:!0,onChange:n,fullwidth:!0})}),i(t,{item:!0,xs:12,sx:{width:"100%"},children:[r(v,{ref:p,sitekey:"6Lf-ICYpAAAAAHzBmitPs2nRqrzBknYq1g7U69hm",onChange:y,onExpired:R}),e.captcha&&r(k,{error:!!e.captcha,children:e.captcha})]}),r(t,{item:!0,display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",sx:{width:"100%"},children:r(G,{loading:f,type:"submit",variant:"contained",children:"Update"})})]})})]})}export{rr as default};