import { j as jsxs, a as jsx } from "../ssr.js";
import { O as OneColumnFormLayout } from "./OneColumnFormLayout-e37dd6cc.js";
import { a as useSubmitForm } from "./api-dec76595.js";
import { r as routes } from "./routes-8c429669.js";
import { Dialog, DialogTitle, DialogContent, Button } from "@mui/material";
import { useEffect } from "react";
import { LoadingButton } from "@mui/lab";
import { Save } from "@mui/icons-material";
import { h as storeOrderMaterialValidator } from "./validate-e99249ca.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
import "./RenderFormField-0820b76c.js";
import "./PasswordField-8ab16d4d.js";
import "axios";
import "./Actions-f382200a.js";
import "validator";
const AddForm = ({
  open,
  onClose,
  defaultValue = {
    material: "",
    quantity: 0
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
    clearErrors,
    wasSuccessful
  } = useSubmitForm(defaultValue, routes.orderMaterials.add.link);
  const fields = [
    {
      name: "material",
      label: "Material",
      value: data.material,
      error: !!(errors == null ? void 0 : errors.material),
      helperText: errors.material,
      type: "select",
      required: true,
      options: [{ label: "BionCard", value: "BionCard" }, { label: "BionNIPT Streck Tube", value: "BionNIPT Streck Tube" }]
    },
    {
      name: "quantity",
      label: "Quantity",
      value: data.quantity,
      type: "number",
      required: true
    }
  ];
  const handleClose = () => {
    onClose();
    reset();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    clearErrors();
    if (storeOrderMaterialValidator(data, setError))
      submit();
  };
  useEffect(() => {
    if (wasSuccessful) {
      handleClose();
    }
  }, [wasSuccessful]);
  return /* @__PURE__ */ jsxs(Dialog, { open, onClose: handleClose, keepMounted: true, fullWidth: true, maxWidth: "xs", children: [
    /* @__PURE__ */ jsx(DialogTitle, { children: "Order Material" }),
    /* @__PURE__ */ jsx(DialogContent, { children: /* @__PURE__ */ jsx(
      OneColumnFormLayout,
      {
        send: handleSubmit,
        action: routes.orderMaterials.add.link,
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
