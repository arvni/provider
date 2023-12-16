import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import { Grid, List, ListItem, IconButton, ListItemText, Alert, Stack, ListItemAvatar, Divider } from "@mui/material";
import { Add, Edit } from "@mui/icons-material";
import { D as DeleteButton } from "./DeleteButton-0f59e867.js";
import { useState } from "react";
import AddSampleTypeForm from "./AddSampleTypeForm-3da05b76.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
import "./api-dec76595.js";
import "axios";
import "./routes-8c429669.js";
const SampleTypeForm = ({ error, sampleTypes, onChange }) => {
  const [sampleType, setSampleType] = useState({ description: "", id: "", name: "" });
  const handleAddSampleType = () => {
    let newSampleTypes = [...sampleTypes ?? []];
    let index = newSampleTypes.findIndex((item) => item.id == sampleType.id);
    if (index == -1)
      newSampleTypes.push(sampleType);
    else
      newSampleTypes.splice(index, 1, sampleType);
    onChange("sample_types", newSampleTypes);
    handleCloseSampleType();
  };
  const handleCloseSampleType = () => {
    setOpenAddSampleType(false);
    resetSampleType();
  };
  const handleSampleTypeChange = (key, value) => {
    setSampleType((prevState) => ({ ...prevState, [key]: value }));
  };
  const resetSampleType = () => {
    setSampleType({ description: "", id: "", name: "" });
  };
  const [openAddSampleType, setOpenAddSampleType] = useState(false);
  const handleAddNewSampleType = () => {
    setOpenAddSampleType(true);
  };
  const handleEditSampleType = (index) => () => {
    sampleTypes ? setSampleType({ ...sampleTypes[index] }) : null;
    handleAddNewSampleType();
  };
  const handleDeleteSampleType = (index) => () => {
    let newSampleTypes = [...sampleTypes ?? []];
    newSampleTypes.splice(index, 1);
    onChange("sample_types", newSampleTypes);
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
              "aria-label": "add sampleType",
              onClick: handleAddNewSampleType,
              color: "success",
              children: /* @__PURE__ */ jsx(Add, { fontSize: "large" })
            }
          ),
          children: /* @__PURE__ */ jsx(
            ListItemText,
            {
              primary: /* @__PURE__ */ jsx("h3", { children: "SampleTypes" }),
              secondary: error && /* @__PURE__ */ jsx(Alert, { severity: "error", children: error })
            }
          )
        }
      ),
      sampleTypes == null ? void 0 : sampleTypes.map((sampleType2, index) => /* @__PURE__ */ jsxs(
        ListItem,
        {
          secondaryAction: /* @__PURE__ */ jsxs(Stack, { direction: "row", spacing: 1, children: [
            /* @__PURE__ */ jsx(
              IconButton,
              {
                color: "warning",
                onClick: handleEditSampleType(index),
                children: /* @__PURE__ */ jsx(Edit, {})
              }
            ),
            /* @__PURE__ */ jsx(DeleteButton, { onConfirm: handleDeleteSampleType(index) })
          ] }),
          disablePadding: true,
          children: [
            /* @__PURE__ */ jsx(ListItemAvatar, { children: /* @__PURE__ */ jsx("h3", { children: index + 1 }) }),
            /* @__PURE__ */ jsx(ListItemText, { primary: sampleType2.name, secondary: /* @__PURE__ */ jsx(Stack, { direction: "row" }) }),
            /* @__PURE__ */ jsx(Divider, {})
          ]
        },
        sampleType2.id
      ))
    ] }) }),
    openAddSampleType && /* @__PURE__ */ jsx(
      AddSampleTypeForm,
      {
        data: sampleType,
        setData: handleSampleTypeChange,
        open: openAddSampleType,
        onClose: handleCloseSampleType,
        onSubmit: handleAddSampleType
      }
    )
  ] });
};
export {
  SampleTypeForm as default
};
