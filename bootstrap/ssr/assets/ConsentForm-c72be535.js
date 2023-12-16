import { j as jsxs, a as jsx } from "../ssr.js";
import { a as useSubmitForm } from "./api-dec76595.js";
import { r as routes } from "./routes-8c429669.js";
import EditLayout from "./EditLayout-725f4034.js";
import { Typography, Grid, Box, RadioGroup, FormControlLabel, Radio, Stack, Button } from "@mui/material";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
import "react";
import "axios";
import "./ClientLayout-ad2873c8.js";
import "@mui/icons-material";
import "./AuthenticatedLayout-6a68e165.js";
import "@mui/lab";
import "./validate-e99249ca.js";
import "validator";
import "./PasswordField-8ab16d4d.js";
const ConsentForm = ({ auth, order, step, consents }) => {
  const {
    data,
    setData,
    submit,
    processing,
    errors,
    setError,
    reset,
    clearErrors
  } = useSubmitForm({ ...order, _method: "put" }, routes.orders.update.link(order.id, step));
  const handleChange = (key, value) => {
    setData((previousData) => ({ ...previousData, [key]: value }));
  };
  const handleSubmit = () => submit();
  const handleConsentChange = (name) => (e, value) => handleChange("consents", { ...data.consents, [name]: value });
  return /* @__PURE__ */ jsxs(EditLayout, { auth, step, id: order.id, children: [
    /* @__PURE__ */ jsx(Typography, { sx: { my: 4 }, component: "h2", fontSize: "18px", fontWeight: "700", children: "PLEASE READ THIS STEP THROUGH CAREFULLY AND SELECT CHECKBOXES" }),
    /* @__PURE__ */ jsxs(Grid, { container: true, spacing: 2, children: [
      /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, children: /* @__PURE__ */ jsx(Typography, { fontWeight: "700", children: "Physician representation and patient consent:" }) }),
      consents.map((consent) => {
        var _a;
        return /* @__PURE__ */ jsxs(Grid, { item: true, xs: 12, children: [
          /* @__PURE__ */ jsxs(Typography, { fontWeight: "600", sx: { my: 2 }, children: [
            /* @__PURE__ */ jsxs("span", { children: [
              (consent.order ?? 0) + 1,
              ". "
            ] }),
            consent.title
          ] }),
          /* @__PURE__ */ jsx(Typography, { children: consent.body }),
          ((_a = consent == null ? void 0 : consent.questions) == null ? void 0 : _a.length) ? /* @__PURE__ */ jsx("ul", { children: consent.questions.map((question, index) => /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx(Typography, { children: question.context }),
            /* @__PURE__ */ jsx(Box, { padding: 2, sx: { background: "#c2c2c2" }, children: /* @__PURE__ */ jsxs(
              RadioGroup,
              {
                row: true,
                name: "consent-" + consent.id + "-" + index,
                value: data.consents ? data.consents["consent-" + consent.id + "-" + index] : "",
                onChange: handleConsentChange("consent-" + consent.id + "-" + index),
                children: [
                  /* @__PURE__ */ jsx(FormControlLabel, { value: "yes", control: /* @__PURE__ */ jsx(Radio, {}), label: "Yes" }),
                  /* @__PURE__ */ jsx(FormControlLabel, { value: "no", control: /* @__PURE__ */ jsx(Radio, {}), label: "No" })
                ]
              }
            ) })
          ] }, index)) }) : null
        ] });
      }),
      /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, mt: 2, children: /* @__PURE__ */ jsx(Stack, { alignItems: "flex-end", children: /* @__PURE__ */ jsx(Button, { variant: "contained", onClick: handleSubmit, children: "Save & continue" }) }) })
    ] })
  ] });
};
export {
  ConsentForm as default
};
