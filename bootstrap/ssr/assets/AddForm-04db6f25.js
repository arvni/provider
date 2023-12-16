import { j as jsxs, a as jsx, F as Fragment } from "../ssr.js";
import { a as useSubmitForm } from "./api-dec76595.js";
import { r as routes } from "./routes-8c429669.js";
import { Dialog, DialogTitle, DialogContent, Box, Grid, TextField, Divider, Autocomplete, DialogActions, Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Save } from "@mui/icons-material";
import { P as PasswordField } from "./PasswordField-8ab16d4d.js";
import { c as countries } from "./countries-5ccb0d79.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
import "react";
import "axios";
const AddForm = ({
  open,
  onClose,
  defaultValue
}) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
  const {
    data,
    submit,
    processing,
    handleChange,
    errors,
    setError,
    setData,
    reset,
    clearErrors
  } = useSubmitForm({
    ...defaultValue,
    _method: defaultValue.id ? "put" : "post"
  }, defaultValue.id ? routes.users.update.link(defaultValue.id) : routes.users.add.link);
  const handleClose = () => {
    onClose();
    reset();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    clearErrors();
    submit({ onSuccess: handleClose });
  };
  const handleChangeMeta = (key) => (e) => {
    setData((previousData) => ({
      ...previousData,
      meta: {
        ...previousData.meta,
        [key]: {
          ...previousData.meta[key] ?? {},
          [e.target.name]: e.target.value
        }
      }
    }));
  };
  const handleChangeMetaCountry = (key) => (_, value) => setData((previousData) => ({
    ...previousData,
    meta: {
      ...previousData.meta,
      [key]: {
        ...previousData.meta[key] ?? {},
        country: value ?? ""
      }
    }
  }));
  return /* @__PURE__ */ jsxs(Dialog, { open, onClose: handleClose, keepMounted: true, fullWidth: true, maxWidth: "lg", children: [
    /* @__PURE__ */ jsx(DialogTitle, { children: data.id ? "Edit User" : "Add User" }),
    /* @__PURE__ */ jsx(DialogContent, { children: /* @__PURE__ */ jsx(
      Box,
      {
        component: "form",
        onSubmit: handleSubmit,
        sx: { pt: "1em" },
        action: data.id ? routes.sampleTypes.update.link(data.id) : routes.sampleTypes.add.link,
        children: /* @__PURE__ */ jsxs(Grid, { container: true, spacing: 2, children: [
          /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, sm: 6, md: 4, lg: 3, children: /* @__PURE__ */ jsx(
            TextField,
            {
              fullWidth: true,
              name: "name",
              value: data.name ?? "",
              helperText: errors.name,
              error: !!errors.name,
              onChange: handleChange,
              label: "Name",
              required: true
            }
          ) }),
          /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, sm: 6, md: 4, lg: 3, children: /* @__PURE__ */ jsx(
            TextField,
            {
              fullWidth: true,
              name: "userName",
              value: data.userName ?? "",
              helperText: errors.userName,
              error: !!errors.userName,
              onChange: handleChange,
              label: "UserName",
              required: true
            }
          ) }),
          /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, sm: 6, md: 4, lg: 3, children: /* @__PURE__ */ jsx(
            TextField,
            {
              fullWidth: true,
              name: "email",
              value: data.email ?? "",
              helperText: errors.email,
              error: !!errors.email,
              onChange: handleChange,
              label: "Email",
              required: true
            }
          ) }),
          /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, sm: 6, md: 4, lg: 3, children: /* @__PURE__ */ jsx(
            TextField,
            {
              fullWidth: true,
              name: "mobile",
              value: data.mobile ?? "",
              helperText: errors.mobile,
              error: !!errors.mobile,
              onChange: handleChange,
              label: "Mobile",
              required: true
            }
          ) }),
          !defaultValue.id && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, sm: 6, md: 4, lg: 3, children: /* @__PURE__ */ jsx(
              PasswordField,
              {
                name: "password",
                value: data.password ?? "",
                helperText: errors.password,
                error: !!errors.password,
                onChange: handleChange,
                label: "Password",
                fullwidth: true,
                required: true
              }
            ) }),
            /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, sm: 6, md: 4, lg: 3, children: /* @__PURE__ */ jsx(
              PasswordField,
              {
                name: "password_confirmation",
                value: data.password_confirmation ?? "",
                helperText: errors.password_confirmation,
                error: !!errors.password_confirmation,
                onChange: handleChange,
                fullwidth: true,
                label: "Password Confirmation",
                required: true
              }
            ) })
          ] }),
          /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, children: /* @__PURE__ */ jsx(Divider, { children: /* @__PURE__ */ jsx("strong", { children: "Contact Information" }) }) }),
          /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, children: /* @__PURE__ */ jsx(
            TextField,
            {
              multiline: true,
              rows: 2,
              fullWidth: true,
              name: "address",
              value: (_b = (_a = data == null ? void 0 : data.meta) == null ? void 0 : _a.contact) == null ? void 0 : _b.address,
              helperText: errors ? errors["meta.contact.address"] : "",
              error: errors.hasOwnProperty("meta.contact.address"),
              onChange: handleChangeMeta("contact"),
              label: "Address"
            }
          ) }),
          /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, sm: 6, md: 4, lg: 3, children: /* @__PURE__ */ jsx(
            TextField,
            {
              fullWidth: true,
              name: "city",
              value: (_d = (_c = data == null ? void 0 : data.meta) == null ? void 0 : _c.contact) == null ? void 0 : _d.city,
              helperText: errors["meta.contact.city"],
              error: errors.hasOwnProperty("meta.contact.city"),
              onChange: handleChangeMeta("contact"),
              label: "City"
            }
          ) }),
          /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, sm: 6, md: 4, lg: 3, children: /* @__PURE__ */ jsx(
            Autocomplete,
            {
              options: countries.map((item) => item.label),
              value: ((_f = (_e = data == null ? void 0 : data.meta) == null ? void 0 : _e.contact) == null ? void 0 : _f.country) ?? "",
              onChange: handleChangeMetaCountry("contact"),
              renderInput: (params) => /* @__PURE__ */ jsx(
                TextField,
                {
                  ...params,
                  name: "country",
                  fullWidth: true,
                  label: "Country",
                  helperText: errors["meta.contact.country"],
                  error: errors.hasOwnProperty("meta.contact.country")
                }
              )
            }
          ) }),
          /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, children: /* @__PURE__ */ jsx(Divider, { children: /* @__PURE__ */ jsx("strong", { children: " Billing Information" }) }) }),
          /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, sm: 6, md: 4, lg: 3, children: /* @__PURE__ */ jsx(
            TextField,
            {
              fullWidth: true,
              name: "name",
              value: ((_h = (_g = data.meta) == null ? void 0 : _g.billing) == null ? void 0 : _h.name) ?? "",
              helperText: errors["meta.billing.name"],
              error: errors.hasOwnProperty("meta.billing.name"),
              onChange: handleChangeMeta("billing"),
              label: "Name",
              required: true
            }
          ) }),
          /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, sm: 6, md: 4, lg: 3, children: /* @__PURE__ */ jsx(
            TextField,
            {
              fullWidth: true,
              name: "email",
              value: ((_j = (_i = data.meta) == null ? void 0 : _i.billing) == null ? void 0 : _j.email) ?? "",
              helperText: errors["meta.billing.email"],
              error: errors.hasOwnProperty("meta.billing.email"),
              onChange: handleChangeMeta("billing"),
              label: "Email",
              required: true
            }
          ) }),
          /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, sm: 6, md: 4, lg: 3, children: /* @__PURE__ */ jsx(
            TextField,
            {
              fullWidth: true,
              name: "phone",
              value: data.meta.billing.phone ?? "",
              helperText: errors["meta.billing.phone"],
              error: errors.hasOwnProperty("meta.billing.phone"),
              onChange: handleChangeMeta("billing"),
              label: "Phone",
              required: true
            }
          ) }),
          /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, sm: 6, md: 4, lg: 3, children: /* @__PURE__ */ jsx(
            Autocomplete,
            {
              options: countries.map((item) => item.label),
              value: ((_l = (_k = data == null ? void 0 : data.meta) == null ? void 0 : _k.billing) == null ? void 0 : _l.country) ?? "",
              onChange: handleChangeMetaCountry("billing"),
              renderInput: (params) => /* @__PURE__ */ jsx(
                TextField,
                {
                  ...params,
                  name: "country",
                  fullWidth: true,
                  label: "Country",
                  helperText: errors["meta.billing.country"],
                  error: errors.hasOwnProperty("meta.billing.country")
                }
              )
            }
          ) }),
          /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, sm: 6, md: 4, lg: 3, children: /* @__PURE__ */ jsx(
            TextField,
            {
              fullWidth: true,
              name: "city",
              value: (_n = (_m = data == null ? void 0 : data.meta) == null ? void 0 : _m.billing) == null ? void 0 : _n.city,
              helperText: errors["meta.contact.city"],
              error: errors.hasOwnProperty("meta.billing.city"),
              onChange: handleChangeMeta("billing"),
              label: "City"
            }
          ) }),
          /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, children: /* @__PURE__ */ jsx(
            TextField,
            {
              multiline: true,
              rows: 2,
              fullWidth: true,
              name: "address",
              value: (_p = (_o = data == null ? void 0 : data.meta) == null ? void 0 : _o.billing) == null ? void 0 : _p.address,
              helperText: errors["meta.billing.address"],
              error: errors.hasOwnProperty("meta.billing.address"),
              onChange: handleChangeMeta("billing"),
              label: "Address"
            }
          ) })
        ] })
      }
    ) }),
    /* @__PURE__ */ jsxs(DialogActions, { children: [
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
          onClick: handleSubmit,
          loading: processing,
          size: "medium",
          variant: "contained",
          type: "submit",
          startIcon: /* @__PURE__ */ jsx(Save, {}),
          children: "Submit"
        }
      )
    ] })
  ] });
};
export {
  AddForm as default
};
