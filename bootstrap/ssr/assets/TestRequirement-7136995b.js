import { a as jsx } from "../ssr.js";
import { Stack } from "@mui/material";
import { F as FormField } from "./RenderFormField-0820b76c.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
import "./PasswordField-8ab16d4d.js";
import "@mui/icons-material";
import "react";
import "axios";
const TestRequirement = ({ requirements, onChange }) => {
  const handleChange = (index) => (e) => {
    let newRequirements = [...requirements];
    newRequirements[index] = { ...newRequirements[index], value: e.target.value };
    onChange(newRequirements);
  };
  return /* @__PURE__ */ jsx(Stack, { spacing: 2, children: requirements.map((requirement, index) => /* @__PURE__ */ jsx(
    FormField,
    {
      field: {
        name: requirement.label,
        label: requirement.label,
        value: requirement.value,
        type: requirement.type,
        size: "small",
        sx: { maxWidth: "80%" },
        onChange: handleChange(index),
        required: requirement.required
      },
      onchange: handleChange(index)
    },
    requirement.id
  )) });
};
export {
  TestRequirement as default
};
