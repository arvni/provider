import { a as jsx, j as jsxs } from "../ssr.js";
import { Autocomplete, TextField, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox, Typography } from "@mui/material";
import { P as PasswordField } from "./PasswordField-8ab16d4d.js";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
const SelectSearch = ({
  value,
  onchange,
  name = "",
  url = "",
  helperText = "",
  label = "",
  error = false,
  required = false
}) => {
  const ref = useRef();
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSearch = (_, newInputValue) => {
    setSearch(newInputValue);
  };
  useEffect(() => {
    if (search.length > 2)
      searchText();
  }, [search]);
  const searchText = () => {
    setLoading(true);
    axios.get(url).then((result) => {
      setData(result.data.data);
      setLoading(false);
    });
  };
  const handleChange = (e, value2) => {
    e.target.value = value2;
    e.target.name = name;
    onchange(e);
  };
  return /* @__PURE__ */ jsx(
    Autocomplete,
    {
      ref,
      defaultValue: value,
      onChange: handleChange,
      onInputChange: handleSearch,
      options: data,
      fullWidth: true,
      getOptionLabel: (option) => option.name,
      loading,
      renderInput: (params) => /* @__PURE__ */ jsx(
        TextField,
        {
          ...params,
          helperText,
          error,
          label,
          required
        }
      )
    }
  );
};
const FormField = ({
  field: { type, ...rest },
  onchange
}) => {
  switch (type) {
    case "textarea":
      return /* @__PURE__ */ jsx(TextField, { ...rest, multiline: true, fullWidth: true });
    case "text":
    case "email":
    case "number":
      return /* @__PURE__ */ jsx(TextField, { ...rest, type, fullWidth: true, inputProps: { type } });
    case "date":
      return /* @__PURE__ */ jsx(
        TextField,
        {
          ...rest,
          id: rest.name + "-date",
          defaultValue: rest.value,
          onChange: onchange,
          name: rest.name,
          type: "date",
          label: rest.label,
          sx: { width: 220 },
          InputLabelProps: {
            shrink: true
          }
        }
      );
    case "password":
      return /* @__PURE__ */ jsx(PasswordField, { ...rest, onChange: onchange, fullwidth: true });
    case "description":
      return /* @__PURE__ */ jsx(Typography, { children: rest.value });
    case "checkbox":
      return /* @__PURE__ */ jsx(
        FormControlLabel,
        {
          control: /* @__PURE__ */ jsx(Checkbox, { defaultChecked: rest.value, name: rest.name }),
          label: rest.label
        }
      );
    case "selectSearch":
      return /* @__PURE__ */ jsx(SelectSearch, { onchange, url: (rest == null ? void 0 : rest.url) ?? "", ...rest });
    case "select":
      return /* @__PURE__ */ jsxs(FormControl, { fullWidth: true, children: [
        /* @__PURE__ */ jsx(InputLabel, { id: `${rest.name}-select-label`, children: rest.label }),
        /* @__PURE__ */ jsx(Select, { labelId: `${rest.name}-select-label`, id: `${rest.name}-select`, ...rest, onChange: onchange, children: rest.options ? rest.options.map((option, index) => /* @__PURE__ */ jsx(
          MenuItem,
          {
            value: option.value,
            children: option.label
          },
          index
        )) : null })
      ] });
  }
};
export {
  FormField as F
};
