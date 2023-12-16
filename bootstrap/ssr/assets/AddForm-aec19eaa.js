import { j as jsxs, a as jsx } from "../ssr.js";
import { O as OneColumnFormLayout } from "./OneColumnFormLayout-e37dd6cc.js";
import { a as useSubmitForm } from "./api-dec76595.js";
import { r as routes } from "./routes-8c429669.js";
import { Dialog, DialogTitle, DialogContent, Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Save } from "@mui/icons-material";
import { c as storeSymptomValidator } from "./validate-e99249ca.js";
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
    name: "",
    hpo: "",
    symptom_group: void 0
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
  }, defaultValue.id ? routes.symptoms.update.link(defaultValue.id) : routes.symptoms.add.link);
  const fields = [
    {
      name: "name",
      label: "Symptom Name",
      value: data.name,
      type: "text",
      required: true,
      error: !!errors.name
    },
    {
      name: "hpo",
      label: "Hpo",
      value: data.hpo,
      type: "text",
      required: true,
      error: !!errors.hpo
    },
    {
      name: "symptom_group",
      label: "Symptom Group",
      value: data.symptom_group,
      type: "selectSearch",
      url: routes.symptomGroups.api.list.link,
      required: true,
      error: !!errors.hpo,
      onChange: handleChange
    }
  ];
  const handleClose = () => {
    onClose();
    reset();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    clearErrors();
    if (storeSymptomValidator(data, setError))
      submit({ onSuccess: handleClose });
  };
  return /* @__PURE__ */ jsxs(Dialog, { open, onClose: handleClose, keepMounted: true, fullWidth: true, maxWidth: "xs", children: [
    /* @__PURE__ */ jsx(DialogTitle, { children: data.id ? "Edit Symptom" : "Add Symptom" }),
    /* @__PURE__ */ jsx(DialogContent, { children: /* @__PURE__ */ jsx(
      OneColumnFormLayout,
      {
        send: handleSubmit,
        action: data.id ? routes.symptoms.update.link(data.id) : routes.symptoms.add.link,
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
