import { a as jsx, F as Fragment, j as jsxs } from "../ssr.js";
import { a as useSubmitForm } from "./api-dec76595.js";
import { r as routes } from "./routes-8c429669.js";
import { Box, Grid, TextField, Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Save } from "@mui/icons-material";
import { e as storeTestValidator } from "./validate-e99249ca.js";
import SampleTypeForm from "./SampleTypeForm-25d271ff.js";
import RequirementForm from "./RequirementForm-cbe3021c.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
import "react";
import "axios";
import "validator";
import "./DeleteButton-0f59e867.js";
import "./AddSampleTypeForm-3da05b76.js";
import "./AddRequirementForm-dfceefa1.js";
const AddForm = ({
  defaultValue = {
    id: "",
    name: "",
    code: "",
    shortName: "",
    turnaroundTime: 0,
    description: "",
    requirements: []
  }
}) => {
  const {
    data,
    setData,
    submit,
    processing,
    handleChange,
    errors,
    setError,
    reset,
    clearErrors
  } = useSubmitForm({
    ...defaultValue,
    [defaultValue.id ? "_method" : ""]: "put"
  }, defaultValue.id ? routes.tests.update.link(defaultValue.id) : routes.tests.store.link);
  const handleBack = () => {
    reset();
    history.back();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    clearErrors();
    if (storeTestValidator(data, setError))
      submit();
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    Box,
    {
      component: "form",
      action: data.id ? routes.tests.update.link(data.id) : routes.tests.add.link,
      onSubmit: handleSubmit,
      sx: { pt: "1em" },
      children: /* @__PURE__ */ jsxs(Grid, { container: true, spacing: 2, children: [
        /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, children: /* @__PURE__ */ jsx(
          TextField,
          {
            fullWidth: true,
            name: "name",
            label: "Test Name",
            value: data.name,
            type: "text",
            required: true,
            error: errors.hasOwnProperty("name"),
            helperText: errors.name,
            onChange: handleChange
          }
        ) }),
        /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, md: 4, children: /* @__PURE__ */ jsx(
          TextField,
          {
            fullWidth: true,
            name: "shortName",
            label: "Short Name",
            value: data.shortName,
            type: "text",
            required: true,
            error: errors.hasOwnProperty("shortName"),
            helperText: errors.shortName,
            onChange: handleChange
          }
        ) }),
        /* @__PURE__ */ jsx(Grid, { item: true, xs: 6, md: 4, children: /* @__PURE__ */ jsx(
          TextField,
          {
            fullWidth: true,
            name: "code",
            label: "Code",
            value: data.code,
            type: "text",
            required: true,
            error: errors.hasOwnProperty("code"),
            helperText: errors.code,
            onChange: handleChange
          }
        ) }),
        /* @__PURE__ */ jsx(Grid, { item: true, xs: 6, md: 4, children: /* @__PURE__ */ jsx(
          TextField,
          {
            fullWidth: true,
            name: "turnaroundTime",
            label: "Turnaround Time",
            value: data.turnaroundTime,
            type: "number",
            required: true,
            error: errors.hasOwnProperty("turnaroundTime"),
            helperText: errors.turnaroundTime,
            onChange: handleChange
          }
        ) }),
        /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, children: /* @__PURE__ */ jsx(
          TextField,
          {
            multiline: true,
            rows: 3,
            fullWidth: true,
            name: "description",
            label: "Description",
            value: data.description,
            type: "text",
            required: true,
            error: errors.hasOwnProperty("description"),
            helperText: errors.description,
            onChange: handleChange
          }
        ) }),
        /* @__PURE__ */ jsx(SampleTypeForm, { sampleTypes: data.sample_types, error: errors.sample_types, onChange: setData }),
        /* @__PURE__ */ jsx(RequirementForm, { error: errors.requirements, requirements: data.requirements, onChange: setData }),
        /* @__PURE__ */ jsxs(Grid, { item: true, children: [
          /* @__PURE__ */ jsx(Button, { onClick: handleBack, disabled: processing, variant: "text", children: "Cancel" }),
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
        ] })
      ] })
    }
  ) });
};
export {
  AddForm as default
};
