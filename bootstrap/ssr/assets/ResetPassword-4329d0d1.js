import { j as jsxs, a as jsx } from "../ssr.js";
import React__default, { useEffect } from "react";
import { Head } from "@inertiajs/react";
import { LoadingButton } from "@mui/lab";
import { Box, Grid, TextField, FormHelperText } from "@mui/material";
import { G as GuestLayout } from "./GuestLayout-3978abbe.js";
import { r as routes } from "./routes-8c429669.js";
import { a as useSubmitForm } from "./api-dec76595.js";
import { r as resetPasswordValidator } from "./validate-e99249ca.js";
import { P as PasswordField } from "./PasswordField-8ab16d4d.js";
import ReCAPTCHA from "react-google-recaptcha";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "axios";
import "validator";
import "@mui/icons-material";
function ResetPassword({ token, email }) {
  const {
    data,
    setData,
    submit,
    processing,
    errors,
    reset,
    setError,
    clearErrors,
    handleChange
  } = useSubmitForm({
    token,
    email,
    password: "",
    password_confirmation: "",
    captcha: "",
    __method: "put"
  }, routes.postResetPassword.link);
  useEffect(() => {
    return () => {
      reset("password", "password_confirmation", "captcha");
    };
  }, []);
  const recaptchaRef = React__default.createRef();
  const handleSubmit = (e) => {
    var _a;
    e.preventDefault();
    clearErrors();
    (_a = recaptchaRef.current) == null ? void 0 : _a.reset();
    if (resetPasswordValidator(data, setError)) {
      submit();
    }
  };
  const formChange = (key, value) => setData((previousData) => ({
    ...previousData,
    [key]: value
  }));
  const handleCaptchaChanged = (token2) => formChange("captcha", token2 ?? "");
  const resetCaptcha = () => formChange("captcha", "");
  return /* @__PURE__ */ jsxs(GuestLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Reset Password" }),
    /* @__PURE__ */ jsx(Box, { component: "form", onSubmit: handleSubmit, action: routes.postResetPassword.link, method: "post", children: /* @__PURE__ */ jsxs(Grid, { container: true, spacing: 2, children: [
      /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, sx: { width: "100%" }, children: /* @__PURE__ */ jsx(
        TextField,
        {
          disabled: true,
          name: "email",
          value: data.email,
          helperText: errors.email ?? "",
          error: errors.hasOwnProperty("email"),
          type: "email",
          label: "Email",
          autoComplete: "username",
          required: true,
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
          autoComplete: "new-password",
          required: true,
          onChange: handleChange,
          fullwidth: true
        }
      ) }),
      /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, sx: { width: "100%" }, children: /* @__PURE__ */ jsx(
        PasswordField,
        {
          name: "password_confirmation",
          value: data.password_confirmation,
          helperText: errors.password_confirmation ?? "",
          error: errors.hasOwnProperty("password_confirmation"),
          type: "password",
          label: "Confirm Password",
          autoComplete: "new-password",
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
      /* @__PURE__ */ jsx(
        Grid,
        {
          item: true,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          sx: { width: "100%" },
          children: /* @__PURE__ */ jsx(LoadingButton, { loading: processing, type: "submit", variant: "contained", children: "Update" })
        }
      )
    ] }) })
  ] });
}
export {
  ResetPassword as default
};
