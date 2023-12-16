import { a as jsx, j as jsxs } from "../ssr.js";
import { Paper, Alert } from "@mui/material";
import TestMethodForm from "./TestMethodForm-0f4d71e2.js";
import { a as useSubmitForm } from "./api-dec76595.js";
import { r as routes } from "./routes-8c429669.js";
import { t as testMethodValidate } from "./validate-e99249ca.js";
import { C as ClientLayout } from "./ClientLayout-ad2873c8.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
import "react";
import "./TestSearchForm-03c2c58a.js";
import "./TestCard-0f2b07fa.js";
import "./TestDetails-d39fb598.js";
import "@mui/icons-material";
import "./TestRequirement-7136995b.js";
import "./RenderFormField-0820b76c.js";
import "./PasswordField-8ab16d4d.js";
import "axios";
import "validator";
import "./AuthenticatedLayout-6a68e165.js";
import "@mui/lab";
const Add = ({ auth, ...rest }) => {
  const {
    data,
    setData,
    submit,
    errors,
    setError,
    clearErrors
  } = useSubmitForm({
    patient: {},
    status: void 0,
    step: void 0,
    test_method: [],
    clinical_information: {},
    samples: [
      {}
    ]
  }, routes.orders.store.link);
  const handleChange = (key, value) => setData(key, value);
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    clearErrors();
    if (testMethodValidate(data, setError))
      submit();
  };
  return /* @__PURE__ */ jsx(ClientLayout, { user: auth.user, header: "Add Order", children: /* @__PURE__ */ jsxs(Paper, { sx: { p: "1em", mt: "1em" }, children: [
    errors.test_method && /* @__PURE__ */ jsx(Alert, { severity: "error", children: errors.test_method }),
    /* @__PURE__ */ jsx(TestMethodForm, { tests: data.test_method, onChange: handleChange, onSubmit: handleSubmit })
  ] }) });
};
export {
  Add as default
};
