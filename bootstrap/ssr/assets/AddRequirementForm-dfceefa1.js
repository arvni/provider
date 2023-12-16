import { j as jsxs, a as jsx } from "../ssr.js";
import { Dialog, DialogTitle, DialogContent, Grid, TextField, MenuItem, DialogActions, Button } from "@mui/material";
import { useState } from "react";
import { Save } from "@mui/icons-material";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
const AddRequirementForm = ({ data, setData, open, onClose, onSubmit }) => {
  const [errors, setErrors] = useState();
  const handleSubmit = () => {
    if (check()) {
      onSubmit();
    }
  };
  const check = () => {
    clearErrors();
    let output = true;
    if (!data.id) {
      output = false;
      addErrors("id", "please enter method name");
    }
    if (!data.type) {
      output = false;
      addErrors("type", "please add at least one requirement");
    }
    return output;
  };
  const clearErrors = () => {
    setErrors(void 0);
  };
  const handleChange = (e) => setData(e.target.name, e.target.value);
  const addErrors = (key, er) => {
    let newErrors = { ...errors, [key]: er };
    setErrors(newErrors);
  };
  return /* @__PURE__ */ jsxs(Dialog, { open, onClose, fullWidth: true, maxWidth: "md", children: [
    /* @__PURE__ */ jsx(DialogTitle, { children: `${data.id ? "Edit" : "Add New"} Requirement` }),
    /* @__PURE__ */ jsxs(DialogContent, { children: [
      /* @__PURE__ */ jsxs(Grid, { container: true, spacing: 2, padding: 2, children: [
        /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, md: 4, children: /* @__PURE__ */ jsx(
          TextField,
          {
            name: "label",
            value: data.label,
            helperText: (errors == null ? void 0 : errors.label) ?? "",
            onChange: handleChange,
            label: "Label"
          }
        ) }),
        /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, md: 4, children: /* @__PURE__ */ jsxs(
          TextField,
          {
            fullWidth: true,
            select: true,
            name: "type",
            value: data.type,
            onChange: handleChange,
            helperText: errors == null ? void 0 : errors.type,
            label: "Type",
            children: [
              /* @__PURE__ */ jsx(MenuItem, { value: "text", children: "Text" }),
              /* @__PURE__ */ jsx(MenuItem, { value: "number", children: "Number" }),
              /* @__PURE__ */ jsx(MenuItem, { value: "checkbox", children: "Checkbox" }),
              /* @__PURE__ */ jsx(MenuItem, { value: "select", children: "combobox" })
            ]
          }
        ) }),
        data.type == "select" && /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, children: /* @__PURE__ */ jsx(
          TextField,
          {
            fullWidth: true,
            helperText: errors == null ? void 0 : errors.options,
            name: "options",
            value: data.options,
            onChange: handleChange,
            label: "options"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs(DialogActions, { children: [
        /* @__PURE__ */ jsx(Button, { onClick: onClose, children: "Cancel" }),
        /* @__PURE__ */ jsx(Button, { startIcon: /* @__PURE__ */ jsx(Save, {}), onClick: handleSubmit, variant: "contained", children: "Save" })
      ] })
    ] })
  ] });
};
export {
  AddRequirementForm as default
};
