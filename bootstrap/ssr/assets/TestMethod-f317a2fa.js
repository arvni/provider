import { a as jsx } from "../ssr.js";
import TestMethodForm from "./TestMethodForm-0f4d71e2.js";
import { a as useSubmitForm } from "./api-dec76595.js";
import { r as routes } from "./routes-8c429669.js";
import EditLayout from "./EditLayout-725f4034.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
import "react";
import "@mui/material";
import "./TestSearchForm-03c2c58a.js";
import "./TestCard-0f2b07fa.js";
import "./TestDetails-d39fb598.js";
import "@mui/icons-material";
import "./TestRequirement-7136995b.js";
import "./RenderFormField-0820b76c.js";
import "./PasswordField-8ab16d4d.js";
import "axios";
import "./ClientLayout-ad2873c8.js";
import "./AuthenticatedLayout-6a68e165.js";
import "@mui/lab";
import "./validate-e99249ca.js";
import "validator";
const TestMethod = ({ auth, order, step }) => {
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
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    submit();
  };
  return /* @__PURE__ */ jsx(EditLayout, { step, auth, id: order.id, children: /* @__PURE__ */ jsx(TestMethodForm, { tests: data.test_method, onChange: handleChange, onSubmit: handleSubmit }) });
};
export {
  TestMethod as default
};
