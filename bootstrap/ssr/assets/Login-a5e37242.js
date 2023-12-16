import { a as jsx, j as jsxs } from "../ssr.js";
import { Link, Head } from "@inertiajs/react";
import { Box, Grid, TextField, FormHelperText, FormControlLabel, Checkbox, Stack, Alert } from "@mui/material";
import { G as GuestLayout } from "./GuestLayout-3978abbe.js";
import React__default, { useEffect } from "react";
import { LoadingButton } from "@mui/lab";
import { r as routes } from "./routes-8c429669.js";
import { l as loginFormValidator } from "./validate-e99249ca.js";
import { a as useSubmitForm } from "./api-dec76595.js";
import { P as PasswordField } from "./PasswordField-8ab16d4d.js";
import ReCAPTCHA from "react-google-recaptcha";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "validator";
import "axios";
import "@mui/icons-material";
const LoginForm = () => {
  const {
    data,
    setData,
    submit,
    processing,
    errors,
    setError,
    clearErrors,
    reset
  } = useSubmitForm({
    email: "",
    password: "",
    remember: false,
    captcha: ""
  }, routes.login.link);
  useEffect(() => {
    return () => {
      reset("password", "captcha");
    };
  }, [processing]);
  const recaptchaRef = React__default.createRef();
  const handleSubmit = (e) => {
    var _a;
    e.preventDefault();
    clearErrors();
    (_a = recaptchaRef.current) == null ? void 0 : _a.reset();
    if (loginFormValidator(data, setError)) {
      submit();
    }
  };
  const handleChange = (e) => formChange(e.target.name, e.target.value);
  const formChange = (key, value) => setData((previousData) => ({
    ...previousData,
    [key]: value
  }));
  const handleCaptchaChanged = (token) => formChange("captcha", token ?? "");
  const resetCaptcha = () => formChange("captcha", "");
  const handleRememberChange = (e, value) => formChange("remember", value);
  return /* @__PURE__ */ jsx(Box, { component: "form", onSubmit: handleSubmit, method: "post", action: route("login"), children: /* @__PURE__ */ jsxs(Grid, { container: true, direction: "column", spacing: 2, alignItems: "center", justifyContent: "center", children: [
    /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, sx: { width: "100%" }, children: /* @__PURE__ */ jsx(
      TextField,
      {
        onChange: handleChange,
        name: "email",
        value: data.email,
        helperText: errors.email ?? "",
        error: errors.hasOwnProperty("email"),
        type: "email",
        label: "Email",
        autoComplete: "username",
        required: true,
        inputProps: { inputMode: "email" },
        fullWidth: true
      }
    ) }),
    /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, sx: { width: "100%" }, children: /* @__PURE__ */ jsx(
      PasswordField,
      {
        name: "password",
        value: data.password,
        helperText: errors.password ?? "",
        error: errors.hasOwnProperty("password"),
        type: "password",
        label: "Password",
        autoComplete: "password",
        required: true,
        onChange: handleChange,
        fullwidth: true
      }
    ) }),
    /* @__PURE__ */ jsxs(Grid, { item: true, xs: 12, sx: { width: "100%" }, children: [
      /* @__PURE__ */ jsx(
        ReCAPTCHA,
        {
          ref: recaptchaRef,
          sitekey: "6Lf-ICYpAAAAAHzBmitPs2nRqrzBknYq1g7U69hm",
          onChange: handleCaptchaChanged,
          onExpired: resetCaptcha
        }
      ),
      errors.captcha && /* @__PURE__ */ jsx(FormHelperText, { error: !!errors.captcha, children: errors.captcha })
    ] }),
    /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, sx: { width: "100%" }, children: /* @__PURE__ */ jsx(
      FormControlLabel,
      {
        onChange: handleRememberChange,
        control: /* @__PURE__ */ jsx(Checkbox, { defaultChecked: data.remember, name: "remember" }),
        label: "Remember Password"
      }
    ) }),
    /* @__PURE__ */ jsx(Grid, { item: true, sx: { width: "100%" }, children: /* @__PURE__ */ jsxs(Stack, { direction: "row", justifyContent: "space-between", alignItems: "center", sx: { width: "100%" }, children: [
      /* @__PURE__ */ jsx(
        Link,
        {
          href: routes.forgetPassword.link,
          style: {
            textDecoration: "none",
            fontFamily: '"Roboto","Helvetica","Arial",sans-serif'
          },
          children: routes.forgetPassword.label
        }
      ),
      /* @__PURE__ */ jsx(LoadingButton, { loading: processing, type: "submit", variant: "contained", children: "Login" })
    ] }) })
  ] }) });
};
const Login = ({ status }) => {
  return /* @__PURE__ */ jsxs(GuestLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Login" }),
    status && /* @__PURE__ */ jsx(Alert, { severity: "success", children: status }),
    /* @__PURE__ */ jsx(LoginForm, {})
  ] });
};
export {
  Login as default
};
