import { j as jsxs, a as jsx } from "../ssr.js";
import { a as useSubmitForm } from "./api-dec76595.js";
import { r as routes } from "./routes-8c429669.js";
import { Dialog, DialogTitle, DialogContent, Box, Grid, TextField, Typography, List, ListItem, ListItemAvatar, ListItemText, Stack, ListItemSecondaryAction, IconButton, Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Delete, Save } from "@mui/icons-material";
import { s as storeConsentGroupValidator } from "./validate-e99249ca.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
import "react";
import "axios";
import "validator";
const AddForm = ({
  open,
  onClose,
  defaultValue = {
    id: void 0,
    order: void 0,
    title: "",
    body: "",
    questions: []
  }
}) => {
  var _a;
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
    _method: defaultValue.id ? "put" : "post"
  }, defaultValue.id ? routes.consents.update.link(defaultValue.id) : routes.consents.add.link);
  const handleClose = () => {
    onClose();
    reset();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    clearErrors();
    if (storeConsentGroupValidator(data, setError))
      submit({ onSuccess: handleClose });
  };
  const handleDeleteQuestion = (index) => () => {
    let newQuestions = [...data.questions ?? []];
    newQuestions.splice(index, 1);
    setData((previousData) => ({ ...previousData, questions: newQuestions }));
  };
  const handleQuestionChange = (index) => (e) => {
    let newQuestions = [...data.questions ?? []];
    newQuestions.splice(index, 1, { ...data == null ? void 0 : data.questions[index], [e.target.name]: e.target.value });
    setData((previousData) => ({ ...previousData, questions: newQuestions }));
  };
  const handleAddQuestion = (e) => {
    e.preventDefault();
    let newQuestions = [...data.questions ?? []];
    newQuestions.push({ summaryTitle: "", context: "" });
    setData((previousData) => ({ ...previousData, questions: newQuestions }));
  };
  return /* @__PURE__ */ jsxs(Dialog, { open, onClose: handleClose, keepMounted: true, fullWidth: true, maxWidth: "md", children: [
    /* @__PURE__ */ jsx(DialogTitle, { children: data.id ? "Edit Consent" : "Add Consent" }),
    /* @__PURE__ */ jsx(DialogContent, { children: /* @__PURE__ */ jsx(
      Box,
      {
        component: "form",
        method: "post",
        sx: { pt: 2 },
        action: data.id ? routes.consents.update.link(data.id) : routes.consents.add.link,
        onSubmit: handleSubmit,
        children: /* @__PURE__ */ jsxs(Grid, { container: true, spacing: 2, children: [
          /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, children: /* @__PURE__ */ jsx(
            TextField,
            {
              name: "title",
              label: "Consent Title",
              value: data.title,
              required: true,
              onChange: handleChange,
              error: !!errors.title,
              fullWidth: true
            }
          ) }),
          /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, children: /* @__PURE__ */ jsx(
            TextField,
            {
              name: "body",
              label: "Body",
              value: data.body,
              required: true,
              multiline: true,
              rows: 5,
              onChange: handleChange,
              error: !!errors.body,
              fullWidth: true
            }
          ) }),
          /* @__PURE__ */ jsxs(Grid, { item: true, xs: 12, children: [
            /* @__PURE__ */ jsx(Typography, { fontWeight: "600", children: "Questions" }),
            /* @__PURE__ */ jsxs(List, { children: [
              (_a = data == null ? void 0 : data.questions) == null ? void 0 : _a.map((question, index) => /* @__PURE__ */ jsxs(ListItem, { children: [
                /* @__PURE__ */ jsx(ListItemAvatar, { children: index + 1 }),
                /* @__PURE__ */ jsx(ListItemText, { children: /* @__PURE__ */ jsxs(Stack, { spacing: 2, direction: "row", children: [
                  /* @__PURE__ */ jsx(TextField, { fullWidth: true, sx: { maxWidth: "300px" }, value: question.summaryTitle, name: "summaryTitle", onChange: handleQuestionChange(index), label: "Summary Title" }),
                  /* @__PURE__ */ jsx(TextField, { fullWidth: true, multiline: true, rows: 2, value: question.context, name: "context", onChange: handleQuestionChange(index), label: "context" })
                ] }) }),
                /* @__PURE__ */ jsx(ListItemSecondaryAction, { children: /* @__PURE__ */ jsx(IconButton, { color: "error", onClick: handleDeleteQuestion(index), children: /* @__PURE__ */ jsx(Delete, {}) }) })
              ] }, index)),
              /* @__PURE__ */ jsx(ListItem, { sx: { paddingY: "2em" }, children: /* @__PURE__ */ jsx(ListItemSecondaryAction, { children: /* @__PURE__ */ jsx(Button, { variant: "contained", onClick: handleAddQuestion, children: "Add Question" }) }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Grid, { item: true, xs: 12, children: [
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
                onClick: handleSubmit,
                startIcon: /* @__PURE__ */ jsx(Save, {}),
                children: "Submit"
              }
            )
          ] })
        ] })
      }
    ) })
  ] });
};
export {
  AddForm as default
};
