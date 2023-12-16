import { j as jsxs, a as jsx } from "../ssr.js";
import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, FormHelperText } from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { useState } from "react";
const PasswordField = ({
  name,
  helperText,
  label = "",
  error = false,
  fullwidth = false,
  required = false,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(true);
  const handleMouseDownPassword = () => setShowPassword(false);
  return /* @__PURE__ */ jsxs(FormControl, { variant: "outlined", fullWidth: fullwidth, sx: { width: "100%" }, required, children: [
    /* @__PURE__ */ jsx(InputLabel, { htmlFor: `${name}-field-id`, error, children: label }),
    /* @__PURE__ */ jsx(
      OutlinedInput,
      {
        name,
        id: `${name}-field-id`,
        label,
        endAdornment: /* @__PURE__ */ jsx(InputAdornment, { position: "end", children: /* @__PURE__ */ jsx(
          IconButton,
          {
            "aria-label": "toggle password visibility",
            onClick: handleClickShowPassword,
            onMouseDown: handleMouseDownPassword,
            edge: "end",
            children: showPassword ? /* @__PURE__ */ jsx(VisibilityOff, {}) : /* @__PURE__ */ jsx(Visibility, {})
          }
        ) }),
        ...props,
        type: showPassword ? "text" : "password",
        required
      }
    ),
    /* @__PURE__ */ jsx(FormHelperText, { error, children: helperText })
  ] });
};
const PasswordField$1 = PasswordField;
export {
  PasswordField$1 as P
};
