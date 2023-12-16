import { a as jsx } from "../ssr.js";
import { a as useSubmitForm } from "./api-dec76595.js";
import { r as routes } from "./routes-8c429669.js";
import EditLayout from "./EditLayout-725f4034.js";
import SampleDetailsForm from "./SampleDetailsForm-a1b99069.js";
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
import "@mui/material/MenuItem/index.js";
const SampleDetails = ({ auth, order, step, sampleTypes }) => {
  const {
    data,
    setData,
    submit,
    processing,
    errors,
    setError,
    reset,
    clearErrors
  } = useSubmitForm({
    ...order,
    samples: order.samples.length ? order.samples : [{}],
    _method: "put"
  }, routes.orders.update.link(order.id, step));
  const handleChange = (key, value) => {
    setData((previousData) => ({ ...previousData, [key]: value }));
  };
  const handleSubmit = () => submit();
  return /* @__PURE__ */ jsx(EditLayout, { step, auth, id: order.id, children: /* @__PURE__ */ jsx(
    SampleDetailsForm,
    {
      samples: data.samples ?? [{}],
      onChange: handleChange,
      onSubmit: handleSubmit,
      sampleTypes,
      errors
    }
  ) });
};
export {
  SampleDetails as default
};
