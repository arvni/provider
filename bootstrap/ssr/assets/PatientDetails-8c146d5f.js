import { a as jsx } from "../ssr.js";
import { a as useSubmitForm } from "./api-dec76595.js";
import { r as routes } from "./routes-8c429669.js";
import PatientDetailsForm from "./PatientDetailsForm-530bcf26.js";
import EditLayout from "./EditLayout-725f4034.js";
import { p as patientDetailsValidate } from "./validate-e99249ca.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
import "react";
import "axios";
import "@mui/material";
import "./countries-5ccb0d79.js";
import "./ClientLayout-ad2873c8.js";
import "@mui/icons-material";
import "./AuthenticatedLayout-6a68e165.js";
import "@mui/lab";
import "./PasswordField-8ab16d4d.js";
import "validator";
const PatientDetails = ({ auth, order, step }) => {
  const {
    data,
    setData,
    submit,
    errors,
    setError,
    clearErrors
  } = useSubmitForm({ ...order.patient, _method: "put" }, routes.orders.update.link(order.id, step));
  const handleChange = (key, value) => {
    setData((previousData) => ({ ...previousData, [key]: value }));
  };
  const handleSubmit = () => {
    clearErrors();
    if (patientDetailsValidate(data, setError))
      submit();
  };
  return /* @__PURE__ */ jsx(EditLayout, { step, auth, id: order.id, children: /* @__PURE__ */ jsx(PatientDetailsForm, { patient: data, onChange: handleChange, onSubmit: handleSubmit, errors }) });
};
export {
  PatientDetails as default
};
