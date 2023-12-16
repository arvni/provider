import { j as jsxs, a as jsx } from "../ssr.js";
import { O as OneColumnFormLayout } from "./OneColumnFormLayout-e37dd6cc.js";
import { a as useSubmitForm } from "./api-dec76595.js";
import { r as routes } from "./routes-8c429669.js";
import { Dialog, DialogTitle, DialogContent, Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Save } from "@mui/icons-material";
import { d as storeSymptomGroupValidator } from "./validate-e99249ca.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
import "./RenderFormField-0820b76c.js";
import "./PasswordField-8ab16d4d.js";
import "react";
import "axios";
import "./Actions-f382200a.js";
import "validator";
const AddForm = ({
  open,
  onClose,
  defaultValue = {
    id: null,
    name: ""
  }
}) => {
  const {
    data,
    submit,
    processing,
    handleChange,
    errors,
    setError,
    reset,
    clearErrors
  } = useSubmitForm({
    ...defaultValue,
    _method: defaultValue.id ? "put" : "post"
  }, defaultValue.id ? routes.symptomGroups.update.link(defaultValue.id) : routes.symptomGroups.add.link);
  const fields = [
    {
      name: "name",
      label: "Symptom Group Name",
      value: data.name,
      type: "text",
      required: true,
      error: !!errors.name
    }
  ];
  const handleClose = () => {
    onClose();
    reset();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    clearErrors();
    if (storeSymptomGroupValidator(data, setError))
      submit({ onSuccess: handleClose });
  };
  return /* @__PURE__ */ jsxs(Dialog, { open, onClose: handleClose, keepMounted: true, fullWidth: true, maxWidth: "xs", children: [
    /* @__PURE__ */ jsx(DialogTitle, { children: data.id ? "Edit SymptomGroup" : "Add Symptom Group" }),
    /* @__PURE__ */ jsx(DialogContent, { children: /* @__PURE__ */ jsx(
      OneColumnFormLayout,
      {
        send: handleSubmit,
        action: data.id ? routes.sampleTypes.update.link(data.id) : routes.sampleTypes.add.link,
        onchange: handleChange,
        fields,
        sx: { pt: "1em" },
        actions: [
          /* @__PURE__ */ jsx(
            Button,
            {
              onClick: handleClose,
              disabled: processing,
              variant: "text",
              size: "large",
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ jsx(
            LoadingButton,
            {
              loading: processing,
              size: "medium",
              variant: "contained",
              type: "submit",
              startIcon: /* @__PURE__ */ jsx(Save, {}),
              children: "Submit"
            }
          )
        ]
      }
    ) })
  ] });
};
export {
  AddForm as default
};
