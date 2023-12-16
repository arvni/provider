import { a as jsx, j as jsxs } from "../ssr.js";
import { Box, Grid, Typography, Alert, TextField, IconButton, Stack, Button } from "@mui/material";
import MenuItem from "@mui/material/MenuItem/index.js";
import { Delete } from "@mui/icons-material";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
const SampleDetailsForm = ({ samples, onChange, onSubmit, sampleTypes, errors }) => {
  const handleChange = (index) => (e) => {
    let newSamples = [...samples];
    if (newSamples[index]) {
      newSamples[index] = {
        ...samples[index],
        [e.target.name]: e.target.name === "sample_type" ? sampleTypes.find((sampleType) => sampleType.id + "" == e.target.value) : e.target.value
      };
    } else
      newSamples[index] = { [e.target.name]: e.target.name === "sample_type" ? sampleTypes.find((sampleType) => sampleType.id + "" == e.target.value) : e.target.value };
    onChange("samples", newSamples);
  };
  const addSample = () => {
    let newSamples = [...samples];
    newSamples.push({});
    onChange("samples", newSamples);
  };
  const deleteSample = (index) => () => {
    let newSamples = [...samples];
    newSamples.splice(index, 1);
    onChange("samples", newSamples);
  };
  const handleSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();
    onSubmit();
  };
  return /* @__PURE__ */ jsx(Box, { component: "form", onSubmit: handleSubmit, children: /* @__PURE__ */ jsxs(Grid, { container: true, children: [
    /* @__PURE__ */ jsxs(Grid, { item: true, xs: 12, children: [
      /* @__PURE__ */ jsx(Typography, { fontWeight: "900", fontSize: "larger", sx: { my: 4 }, children: "Diagnostics Analysis" }),
      /* @__PURE__ */ jsx(Typography, { fontWeight: "900", sx: { my: 1 }, children: "Document material details" }),
      errors.samples && /* @__PURE__ */ jsx(Alert, { severity: "error", children: errors.samples }),
      samples.map((sample, index) => {
        var _a, _b;
        return /* @__PURE__ */ jsx(
          Box,
          {
            sx: { width: "100%", background: "#c0c0c0", padding: 2, mb: 2 },
            children: /* @__PURE__ */ jsxs(Grid, { container: true, spacing: 2, children: [
              /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, md: 3, children: /* @__PURE__ */ jsx(
                TextField,
                {
                  select: true,
                  fullWidth: true,
                  onChange: handleChange(index),
                  name: "sample_type",
                  value: (_a = sample == null ? void 0 : sample.sample_type) == null ? void 0 : _a.id,
                  label: "Sample Type",
                  required: true,
                  children: sampleTypes == null ? void 0 : sampleTypes.map((sampleType) => /* @__PURE__ */ jsx(MenuItem, { value: sampleType.id, children: sampleType == null ? void 0 : sampleType.name }, sampleType == null ? void 0 : sampleType.id))
                }
              ) }),
              /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, md: 3, children: /* @__PURE__ */ jsx(
                TextField,
                {
                  fullWidth: true,
                  onChange: handleChange(index),
                  value: sample == null ? void 0 : sample.sampleId,
                  name: "sampleId",
                  label: "Sample ID",
                  required: (_b = sample == null ? void 0 : sample.sample_type) == null ? void 0 : _b.sampleIdRequired
                }
              ) }),
              /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, md: 4, children: /* @__PURE__ */ jsx(
                TextField,
                {
                  fullWidth: true,
                  onChange: handleChange(index),
                  type: "date",
                  name: "collectionDate",
                  inputProps: {
                    style: {
                      textAlign: "right"
                    }
                  },
                  error: errors.hasOwnProperty("samples." + index + ".collectionDate"),
                  helperText: errors.hasOwnProperty("samples." + index + ".collectionDate") ? errors["samples." + index + ".collectionDate"] : "",
                  value: sample == null ? void 0 : sample.collectionDate,
                  label: "Collection Date",
                  required: true
                }
              ) }),
              /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, md: 2, children: /* @__PURE__ */ jsx(IconButton, { color: "error", onClick: deleteSample(index), children: /* @__PURE__ */ jsx(Delete, {}) }) })
            ] })
          },
          index
        );
      })
    ] }),
    /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, mt: 2, children: /* @__PURE__ */ jsx(Stack, { alignItems: "flex-end", children: /* @__PURE__ */ jsx(Button, { variant: "contained", onClick: addSample, children: "Add Sample Material" }) }) }),
    /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, mt: 2, children: /* @__PURE__ */ jsx(Stack, { alignItems: "flex-end", children: /* @__PURE__ */ jsx(Button, { variant: "contained", type: "submit", children: "Save & continue" }) }) })
  ] }) });
};
export {
  SampleDetailsForm as default
};
