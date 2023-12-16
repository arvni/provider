import { a as jsx } from "../ssr.js";
import { a as useSubmitForm } from "./api-dec76595.js";
import { r as routes } from "./routes-8c429669.js";
import EditLayout from "./EditLayout-725f4034.js";
import ClinicalDetailsForm from "./ClinicalDetailsForm-eedcee8f.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
import "react";
import "axios";
import "@mui/material";
import "./ClientLayout-ad2873c8.js";
import "@mui/icons-material";
import "./AuthenticatedLayout-6a68e165.js";
import "@mui/lab";
import "./validate-e99249ca.js";
import "validator";
import "./PasswordField-8ab16d4d.js";
import "./SymptomSelector-be1aa2fe.js";
const ClinicalDetails = ({ auth, order, step }) => {
  const {
    data,
    setData,
    submit,
    processing,
    errors,
    setError,
    reset,
    clearErrors
  } = useSubmitForm({ ...order.clinical_information, _method: "put" }, routes.orders.update.link(order.id, step));
  const handleChange = (key, value) => {
    setData((previousData) => ({ ...previousData, [key]: value }));
  };
  const handleSubmit = () => submit();
  return /* @__PURE__ */ jsx(EditLayout, { auth, step, id: order.id, children: /* @__PURE__ */ jsx(ClinicalDetailsForm, { clinicalInformation: data, onChange: handleChange, onSubmit: handleSubmit, id: order.id ?? "", errors }) });
};
export {
  ClinicalDetails as default
};
