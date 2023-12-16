import { j as jsxs, a as jsx } from "../ssr.js";
import { Dialog, DialogTitle, DialogContent, Grid, TextField, MenuItem, DialogActions, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { Save } from "@mui/icons-material";
import { u as useGetData } from "./api-dec76595.js";
import { r as routes } from "./routes-8c429669.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
import "axios";
const AddSampleTypeForm = ({ data, setData, open, onClose, onSubmit }) => {
  const [sampleTypes, setSampleTypes] = useState([]);
  const [errors, setErrors] = useState();
  const { getData, loading } = useGetData();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => getData(routes.sampleTypes.api.list.link).then(({ data: data2 }) => setSampleTypes(data2));
  const handleChange = (e) => {
    setData(e.target.name, e.target.value);
  };
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
      addErrors();
    }
    if (!data.description) {
      output = false;
      addErrors();
    }
    return output;
  };
  const clearErrors = () => {
    setErrors(void 0);
  };
  const handleSampleTypeChange = (e) => {
    let sampleType = sampleTypes.find((item) => item.id === e.target.value);
    if (sampleType) {
      setData("id", sampleType.id);
      setData("name", sampleType == null ? void 0 : sampleType.name);
    }
  };
  const addErrors = (key, error) => {
    setErrors((prevState) => ({ ...prevState ?? null }));
  };
  return /* @__PURE__ */ jsxs(Dialog, { open, onClose, fullWidth: true, maxWidth: "md", children: [
    /* @__PURE__ */ jsx(DialogTitle, { children: `${data.id ? "Edit" : "Add New"} Method` }),
    /* @__PURE__ */ jsxs(DialogContent, { children: [
      /* @__PURE__ */ jsxs(Grid, { container: true, spacing: 2, padding: 2, children: [
        /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, md: 4, children: /* @__PURE__ */ jsx(
          TextField,
          {
            fullWidth: true,
            select: true,
            value: data.id,
            onChange: handleSampleTypeChange,
            label: "Sample Type",
            children: sampleTypes == null ? void 0 : sampleTypes.map((sampleType) => /* @__PURE__ */ jsx(
              MenuItem,
              {
                value: sampleType.id,
                children: sampleType.name
              }
            ))
          }
        ) }),
        /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, children: /* @__PURE__ */ jsx(
          TextField,
          {
            fullWidth: true,
            multiline: true,
            rows: 5,
            name: "description",
            value: data.description,
            onChange: handleChange,
            label: "Description"
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
  AddSampleTypeForm as default
};
