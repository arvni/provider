import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import { Grid, List, ListItem, IconButton, ListItemText, Alert, Stack, ListItemAvatar } from "@mui/material";
import { Add, Edit } from "@mui/icons-material";
import { D as DeleteButton } from "./DeleteButton-0f59e867.js";
import { useState } from "react";
import { uuid } from "uuidv4";
import AddRequirementForm from "./AddRequirementForm-dfceefa1.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
import "./api-dec76595.js";
import "axios";
const RequirementForm = ({ error, requirements, onChange }) => {
  const [requirement, setRequirement] = useState({
    id: uuid(),
    label: "",
    type: "text",
    required: true,
    options: "",
    value: ""
  });
  const handleAddRequirement = () => {
    let newRequirements = [...requirements ?? []];
    let index = newRequirements.findIndex((item) => item.id == requirement.id);
    if (index == -1)
      newRequirements.push(requirement);
    else
      newRequirements.splice(index, 1, requirement);
    onChange("requirements", newRequirements);
    handleCloseRequirement();
  };
  const handleCloseRequirement = () => {
    setOpenAddRequirement(false);
    resetRequirement();
  };
  const handleRequirementChange = (key, value) => {
    setRequirement((prevState) => ({ ...prevState, [key]: value }));
  };
  const resetRequirement = () => {
    setRequirement({
      id: crypto.randomUUID(),
      label: "",
      type: "text",
      required: true,
      options: "",
      value: ""
    });
  };
  const [openAddRequirement, setOpenAddRequirement] = useState(false);
  const handleAddNewRequirement = () => {
    setOpenAddRequirement(true);
  };
  const handleEditRequirement = (index) => () => {
    requirements ? setRequirement({ ...requirements[index] }) : null;
    handleAddNewRequirement();
  };
  const handleDeleteRequirement = (index) => () => {
    let newRequirements = [...requirements ?? []];
    newRequirements.splice(index, 1);
    onChange("requirements", newRequirements);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Grid, { item: true, sx: { width: "100%" }, children: /* @__PURE__ */ jsxs(List, { children: [
      /* @__PURE__ */ jsx(
        ListItem,
        {
          secondaryAction: /* @__PURE__ */ jsx(
            IconButton,
            {
              edge: "end",
              "aria-label": "add Requirement",
              onClick: handleAddNewRequirement,
              color: "success",
              children: /* @__PURE__ */ jsx(Add, { fontSize: "large" })
            }
          ),
          children: /* @__PURE__ */ jsx(
            ListItemText,
            {
              primary: /* @__PURE__ */ jsx("h3", { children: "Requirements" }),
              secondary: error && /* @__PURE__ */ jsx(Alert, { severity: "error", children: error })
            }
          )
        }
      ),
      requirements == null ? void 0 : requirements.map((requirement2, index) => /* @__PURE__ */ jsxs(
        ListItem,
        {
          secondaryAction: /* @__PURE__ */ jsxs(Stack, { direction: "row", spacing: 1, children: [
            /* @__PURE__ */ jsx(
              IconButton,
              {
                color: "warning",
                onClick: handleEditRequirement(index),
                children: /* @__PURE__ */ jsx(Edit, {})
              }
            ),
            /* @__PURE__ */ jsx(DeleteButton, { onConfirm: handleDeleteRequirement(index) })
          ] }),
          disablePadding: true,
          children: [
            /* @__PURE__ */ jsx(ListItemAvatar, { children: /* @__PURE__ */ jsx("h3", { children: index + 1 }) }),
            /* @__PURE__ */ jsx(ListItemText, { primary: requirement2.label, secondary: /* @__PURE__ */ jsxs(Stack, { direction: "row", spacing: 5, children: [
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Type:" }),
                " ",
                requirement2.type
              ] }),
              requirement2.options && /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("strong", { children: "options:" }),
                " ",
                requirement2.options
              ] })
            ] }) })
          ]
        },
        requirement2.id
      ))
    ] }) }),
    /* @__PURE__ */ jsx(AddRequirementForm, { data: requirement, setData: handleRequirementChange, open: openAddRequirement, onClose: handleCloseRequirement, onSubmit: handleAddRequirement })
  ] });
};
export {
  RequirementForm as default
};
