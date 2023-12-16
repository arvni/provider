import { a as jsx, j as jsxs } from "../ssr.js";
import { G as GuestLayout } from "./GuestLayout-3978abbe.js";
import { Head } from "@inertiajs/react";
import { Box, Grid, TextField, FormHelperText, Alert } from "@mui/material";
import React__default, { useEffect } from "react";
import { LoadingButton } from "@mui/lab";
import { a as useSubmitForm } from "./api-dec76595.js";
import { r as routes } from "./routes-8c429669.js";
import { f as forgetPasswordValidator } from "./validate-e99249ca.js";
import ReCAPTCHA from "react-google-recaptcha";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "axios";
import "validator";
const ForgetPasswordForm = () => {
  const {
    data,
    setData,
    processing,
    errors,
    setError,
    wasSuccessful,
    reset,
    clearErrors,
    submit
  } = useSubmitForm({
    email: "",
    captcha: ""
  }, routes.postForgetPassword.link);
  const recaptchaRef = React__default.createRef();
  useEffect(() => {
    if (wasSuccessful)
      reset();
  }, [wasSuccessful]);
  const handleChange = (e) => formChange(e.target.name, e.target.value);
  const formChange = (key, value) => setData((previousData) => ({
    ...previousData,
    [key]: value
  }));
  const handleSubmit = (e) => {
    var _a;
    e.preventDefault();
    clearErrors();
    (_a = recaptchaRef.current) == null ? void 0 : _a.reset();
    if (forgetPasswordValidator(data, setError))
      submit();
  };
  const handleCaptchaChanged = (token) => formChange("captcha", token ?? "");
  const resetCaptcha = () => formChange("captcha", "");
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
    /* @__PURE__ */ jsx(Grid, { item: true, children: /* @__PURE__ */ jsx(LoadingButton, { type: "submit", loading: processing, variant: "contained", children: "Email Password Reset Link" }) })
  ] }) });
};
const ForgetPasswordForm$1 = ForgetPasswordForm;
function ForgotPassword({ status, ...rest }) {
  return /* @__PURE__ */ jsxs(GuestLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Forgot Password" }),
    status && /* @__PURE__ */ jsx(Alert, { severity: "success", children: status }),
    /* @__PURE__ */ jsx(ForgetPasswordForm$1, {})
  ] });
}
export {
  ForgotPassword as default
};
