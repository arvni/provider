import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import { styled, autocompleteClasses, Popper, InputBase, Button, ClickAwayListener, Autocomplete, Box, Grid, Typography, TextField, FormControl, InputLabel, Select, MenuItem, FormHelperText, InputAdornment, Stack } from "@mui/material";
import { c as countries } from "./countries-5ccb0d79.js";
import React__default from "react";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
const StyledAutocompletePopper = styled("div")(({ theme }) => ({
  [`& .${autocompleteClasses.paper}`]: {
    boxShadow: "none",
    margin: 0,
    color: "inherit",
    fontSize: 13
  },
  [`& .${autocompleteClasses.listbox}`]: {
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#1c2128",
    padding: 0,
    [`& .${autocompleteClasses.option}`]: {
      minHeight: "auto",
      alignItems: "flex-start",
      padding: 8,
      borderBottom: `1px solid  ${theme.palette.mode === "light" ? " #eaecef" : "#30363d"}`,
      '&[aria-selected="true"]': {
        backgroundColor: "transparent"
      },
      [`&.${autocompleteClasses.focused}, &.${autocompleteClasses.focused}[aria-selected="true"]`]: {
        backgroundColor: theme.palette.action.hover
      }
    }
  },
  [`&.${autocompleteClasses.popperDisablePortal}`]: {
    position: "relative"
  }
}));
function PopperComponent(props) {
  const { disablePortal, anchorEl, open, ...other } = props;
  return /* @__PURE__ */ jsx(StyledAutocompletePopper, { ...other });
}
const StyledPopper = styled(Popper)(({ theme }) => ({
  border: `1px solid ${theme.palette.mode === "light" ? "#e1e4e8" : "#30363d"}`,
  boxShadow: `0 8px 24px ${theme.palette.mode === "light" ? "rgba(149, 157, 165, 0.2)" : "rgb(1, 4, 9)"}`,
  borderRadius: 6,
  width: 300,
  zIndex: theme.zIndex.modal,
  fontSize: 13,
  color: theme.palette.mode === "light" ? "#24292e" : "#c9d1d9",
  backgroundColor: theme.palette.mode === "light" ? "#fff" : "#1c2128"
}));
const StyledInput = styled(InputBase)(({ theme }) => ({
  padding: 10,
  width: "100%",
  borderBottom: `1px solid ${theme.palette.mode === "light" ? "#eaecef" : "#30363d"}`,
  "& input": {
    borderRadius: 4,
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#0d1117",
    padding: 8,
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    border: `1px solid ${theme.palette.mode === "light" ? "#eaecef" : "#30363d"}`,
    fontSize: 14,
    "&:focus": {
      boxShadow: `0px 0px 0px 3px ${theme.palette.mode === "light" ? "rgba(3, 102, 214, 0.3)" : "rgb(12, 45, 107)"}`,
      borderColor: theme.palette.mode === "light" ? "#0366d6" : "#388bfd"
    }
  }
}));
const CountrySelector = ({ value, onChange }) => {
  var _a;
  const [anchorEl, setAnchorEl] = React__default.useState(null);
  let pendingValue = countries.find((item) => {
    if (item.phone.length <= value.length) {
      return new RegExp(`^${item.phone}.*`).test(value + "");
    }
    return false;
  }) ?? null;
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    if (anchorEl) {
      anchorEl.focus();
    }
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "country-label" : void 0;
  const handleChange = (event, newValue, reason) => {
    if (event.type === "keydown" && event.key === "Backspace" && reason === "removeOption") {
      return;
    }
    let output = value.replace((pendingValue == null ? void 0 : pendingValue.phone) ?? "", (newValue == null ? void 0 : newValue.phone) ?? "");
    onChange(output);
    pendingValue = newValue;
    handleClose();
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Button, { disableRipple: true, "aria-describedby": id, onClick: handleClick, children: /* @__PURE__ */ jsx(
      "img",
      {
        loading: "lazy",
        src: `https://flagcdn.com/w40/${(_a = pendingValue == null ? void 0 : pendingValue.code) == null ? void 0 : _a.toLowerCase()}.png`,
        alt: ""
      }
    ) }),
    /* @__PURE__ */ jsx(StyledPopper, { id, open, anchorEl, placement: "bottom-start", children: /* @__PURE__ */ jsx(ClickAwayListener, { onClickAway: handleClose, children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
      Autocomplete,
      {
        open: true,
        onClose: (event, reason) => {
          if (reason === "escape") {
            handleClose();
          }
        },
        value: pendingValue,
        onChange: handleChange,
        disableCloseOnSelect: true,
        PopperComponent,
        renderTags: () => null,
        renderOption: (props, option, { selected }) => {
          var _a2, _b;
          return /* @__PURE__ */ jsxs(Box, { component: "li", sx: { "& > img": { mr: 2, flexShrink: 0 } }, ...props, children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                loading: "lazy",
                width: "20",
                alt: option.label,
                src: `https://flagcdn.com/w20/${(_a2 = option == null ? void 0 : option.code) == null ? void 0 : _a2.toLowerCase()}.png`,
                srcSet: `https://flagcdn.com/w40/${(_b = option == null ? void 0 : option.code) == null ? void 0 : _b.toLowerCase()}.png 2x`
              }
            ),
            option.label
          ] });
        },
        options: countries,
        getOptionLabel: (option) => option.label,
        renderInput: (params) => /* @__PURE__ */ jsx(
          StyledInput,
          {
            ref: params.InputProps.ref,
            inputProps: params.inputProps,
            autoFocus: true
          }
        )
      }
    ) }) }) })
  ] });
};
const PatientDetailsForm = (props) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u;
  const handleChange = (e) => {
    props.onChange(e.target.name, e.target.value);
  };
  const handleContactChange = (e) => {
    var _a2;
    let contact = { ...(_a2 = props.patient) == null ? void 0 : _a2.contact, [e.target.name]: e.target.value };
    props.onChange("contact", contact);
  };
  const handleSubmit = () => {
    props.onSubmit();
  };
  const handleNationalityChange = (e, value) => {
    props.onChange("nationality", value);
  };
  const handleContactCountryChange = (e, value) => {
    var _a2, _b2, _c2;
    let contact = {
      ...(_a2 = props.patient) == null ? void 0 : _a2.contact,
      country: value,
      phone: ((_c2 = (_b2 = props.patient) == null ? void 0 : _b2.contact) == null ? void 0 : _c2.phone) ?? "+" + (value == null ? void 0 : value.phone)
    };
    props.onChange("contact", contact);
  };
  const handlePhoneCountryCodeChange = (phone) => {
    var _a2;
    return props.onChange("contact", {
      ...props.patient,
      contact: { ...(_a2 = props.patient) == null ? void 0 : _a2.contact, phone: "+" + phone }
    });
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(Grid, { container: true, spacing: 2, mt: 2, children: [
    /* @__PURE__ */ jsxs(Grid, { item: true, xs: 8, children: [
      /* @__PURE__ */ jsx(Typography, { component: "h2", fontWeight: "bolder", children: "Patient Information" }),
      /* @__PURE__ */ jsxs(Grid, { container: true, spacing: 1.5, mt: 2, children: [
        /* @__PURE__ */ jsx(Grid, { item: true, xs: 6, children: /* @__PURE__ */ jsx(
          TextField,
          {
            fullWidth: true,
            label: "Reference ID",
            value: ((_a = props.patient) == null ? void 0 : _a.reference_id) ?? "",
            name: "reference_id",
            onChange: handleChange
          }
        ) }),
        /* @__PURE__ */ jsx(Grid, { item: true, xs: 6, children: /* @__PURE__ */ jsxs(FormControl, { fullWidth: true, children: [
          /* @__PURE__ */ jsx(InputLabel, { id: "consanguineousParents-label", children: "Are Parents Consanguineous ?" }),
          /* @__PURE__ */ jsxs(
            Select,
            {
              labelId: "consanguineousParents-label",
              id: "consanguineousParents-select",
              value: ((_b = props.patient) == null ? void 0 : _b.consanguineousParents) ?? null,
              name: "consanguineousParents",
              label: "Are Parents Consanguineous ?",
              error: !!props.errors["consanguineousParents"],
              onChange: handleChange,
              children: [
                /* @__PURE__ */ jsx(MenuItem, { value: 1, children: "Yes" }),
                /* @__PURE__ */ jsx(MenuItem, { value: 0, children: "No" })
              ]
            }
          ),
          props.errors["consanguineousParents"] && /* @__PURE__ */ jsx(FormHelperText, { children: props.errors["consanguineousParents"] })
        ] }) }),
        /* @__PURE__ */ jsx(Grid, { item: true, xs: 6, children: /* @__PURE__ */ jsx(
          TextField,
          {
            fullWidth: true,
            error: !!props.errors["fullName"],
            helperText: props.errors["fullName"],
            label: "Patient Full Name",
            value: ((_c = props.patient) == null ? void 0 : _c.fullName) ?? "",
            name: "fullName",
            onChange: handleChange
          }
        ) }),
        /* @__PURE__ */ jsx(Grid, { item: true, xs: 6, children: /* @__PURE__ */ jsxs(FormControl, { fullWidth: true, children: [
          /* @__PURE__ */ jsx(InputLabel, { error: !!props.errors["gender"], id: "gender-label", children: "Gender" }),
          /* @__PURE__ */ jsxs(
            Select,
            {
              labelId: "gender-label",
              id: "gender-select",
              value: ((_d = props.patient) == null ? void 0 : _d.gender) ?? null,
              error: !!props.errors["gender"],
              label: "Gender",
              name: "gender",
              onChange: handleChange,
              children: [
                /* @__PURE__ */ jsx(MenuItem, { value: 1, children: "Male" }),
                /* @__PURE__ */ jsx(MenuItem, { value: 0, children: "Female" }),
                /* @__PURE__ */ jsx(MenuItem, { value: -1, children: "Unknown" })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            FormHelperText,
            {
              error: !!props.errors["gender"],
              children: props.errors["gender"]
            }
          )
        ] }) }),
        /* @__PURE__ */ jsx(Grid, { item: true, xs: 6, children: /* @__PURE__ */ jsx(
          TextField,
          {
            fullWidth: true,
            inputProps: { sx: { textAlign: "right", gap: ".5em", alignItems: "center" } },
            placeholder: "",
            label: "Date Of Birth",
            error: !!props.errors["dateOfBirth"],
            helperText: props.errors["dateOfBirth"],
            value: ((_e = props.patient) == null ? void 0 : _e.dateOfBirth) ?? "",
            name: "dateOfBirth",
            type: "date",
            onChange: handleChange
          }
        ) }),
        /* @__PURE__ */ jsx(Grid, { item: true, xs: 6, children: /* @__PURE__ */ jsx(
          Autocomplete,
          {
            id: "country-select",
            options: countries,
            value: ((_f = props.patient) == null ? void 0 : _f.nationality) ?? null,
            onChange: handleNationalityChange,
            autoHighlight: true,
            getOptionLabel: (option) => option.label,
            renderOption: (props2, option) => /* @__PURE__ */ jsxs(Box, { component: "li", sx: { "& > img": { mr: 2, flexShrink: 0 } }, ...props2, children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  loading: "lazy",
                  width: "20",
                  src: `https://flagcdn.com/w20/${option.code.toLowerCase()}.png`,
                  srcSet: `https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`,
                  alt: ""
                }
              ),
              option.label,
              " (",
              option.code,
              ")"
            ] }),
            renderInput: (params) => /* @__PURE__ */ jsx(
              TextField,
              {
                ...params,
                required: true,
                error: !!props.errors["nationality.code"],
                helperText: props.errors["nationality.code"],
                inputProps: {
                  ...params.inputProps,
                  autoComplete: "new-password"
                },
                label: "nationality"
              }
            )
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx(Typography, { component: "h2", fontWeight: "bolder", sx: { mt: 2 }, children: "Patient Contact Information" }),
      /* @__PURE__ */ jsxs(Grid, { container: true, spacing: 1.5, mt: 2, children: [
        /* @__PURE__ */ jsx(Grid, { item: true, xs: 6, children: /* @__PURE__ */ jsx(
          Autocomplete,
          {
            id: "country-select",
            options: countries,
            value: (_h = (_g = props.patient) == null ? void 0 : _g.contact) == null ? void 0 : _h.country,
            onChange: handleContactCountryChange,
            autoHighlight: true,
            getOptionLabel: (option) => option.label,
            renderOption: (props2, option) => {
              var _a2, _b2;
              return /* @__PURE__ */ jsxs(Box, { component: "li", sx: { "& > img": { mr: 2, flexShrink: 0 } }, ...props2, children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    loading: "lazy",
                    width: "20",
                    src: `https://flagcdn.com/w20/${(_a2 = option == null ? void 0 : option.code) == null ? void 0 : _a2.toLowerCase()}.png`,
                    srcSet: `https://flagcdn.com/w40/${(_b2 = option == null ? void 0 : option.code) == null ? void 0 : _b2.toLowerCase()}.png 2x`,
                    alt: ""
                  }
                ),
                option.label,
                " (",
                option.code,
                ")"
              ] });
            },
            renderInput: (params) => /* @__PURE__ */ jsx(
              TextField,
              {
                ...params,
                label: "country",
                inputProps: {
                  ...params.inputProps,
                  autoComplete: "new-password"
                }
              }
            )
          }
        ) }),
        /* @__PURE__ */ jsx(Grid, { item: true, xs: 6, children: /* @__PURE__ */ jsx(
          TextField,
          {
            fullWidth: true,
            label: "State",
            value: ((_j = (_i = props.patient) == null ? void 0 : _i.contact) == null ? void 0 : _j.state) ?? "",
            name: "state",
            onChange: handleContactChange
          }
        ) }),
        /* @__PURE__ */ jsx(Grid, { item: true, xs: 6, children: /* @__PURE__ */ jsx(
          TextField,
          {
            fullWidth: true,
            label: "City",
            value: ((_l = (_k = props.patient) == null ? void 0 : _k.contact) == null ? void 0 : _l.city) ?? "",
            name: "city",
            onChange: handleContactChange
          }
        ) }),
        /* @__PURE__ */ jsx(Grid, { item: true, xs: 6, children: /* @__PURE__ */ jsx(
          TextField,
          {
            fullWidth: true,
            label: "Address",
            value: ((_n = (_m = props.patient) == null ? void 0 : _m.contact) == null ? void 0 : _n.address) ?? "",
            name: "address",
            onChange: handleContactChange
          }
        ) }),
        /* @__PURE__ */ jsx(Grid, { item: true, xs: 6, children: /* @__PURE__ */ jsx(
          TextField,
          {
            InputProps: {
              startAdornment: /* @__PURE__ */ jsx(InputAdornment, { position: "start", children: /* @__PURE__ */ jsx(
                CountrySelector,
                {
                  value: ((_q = (_p = (_o = props.patient) == null ? void 0 : _o.contact) == null ? void 0 : _p.phone) == null ? void 0 : _q.substring(1)) ?? "",
                  onChange: handlePhoneCountryCodeChange
                }
              ) })
            },
            fullWidth: true,
            label: "Phone",
            value: ((_s = (_r = props.patient) == null ? void 0 : _r.contact) == null ? void 0 : _s.phone) ?? "",
            name: "phone",
            onChange: handleContactChange
          }
        ) }),
        /* @__PURE__ */ jsx(Grid, { item: true, xs: 6, children: /* @__PURE__ */ jsx(
          TextField,
          {
            fullWidth: true,
            label: "Email",
            value: (_u = (_t = props.patient) == null ? void 0 : _t.contact) == null ? void 0 : _u.email,
            name: "email",
            onChange: handleContactChange
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, mt: 2, children: /* @__PURE__ */ jsx(Stack, { alignItems: "flex-end", children: /* @__PURE__ */ jsx(Button, { variant: "contained", onClick: handleSubmit, children: "Save & continue" }) }) })
  ] }) });
};
export {
  PatientDetailsForm as default
};
