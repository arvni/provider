import { a as jsx, j as jsxs } from "../ssr.js";
import { useState } from "react";
import { TextField, InputAdornment, Stack, Divider, Select, MenuItem, Button } from "@mui/material";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
const TestSearchForm = (props) => {
  const [values, setValues] = useState(props.defaultValues ?? {
    search: "",
    type: "test"
  });
  const submitHandler = (e) => {
    e.preventDefault();
    props.onSearch(values);
  };
  const changeHandler = (e) => setValues((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  return /* @__PURE__ */ jsx("form", { onSubmit: submitHandler, children: /* @__PURE__ */ jsx(
    TextField,
    {
      id: "outlined-start-adornment",
      placeholder: "Find Your Test by",
      fullWidth: true,
      name: "search",
      defaultValue: values.search,
      onChange: changeHandler,
      InputProps: {
        placeholder: "Search",
        sx: { borderRadius: "30px", paddingLeft: "2em" },
        endAdornment: /* @__PURE__ */ jsx(InputAdornment, { position: "end", children: /* @__PURE__ */ jsxs(
          Stack,
          {
            spacing: 1,
            direction: "row",
            flexDirection: "row",
            alignItems: "stretch",
            alignContent: "center",
            justifyContent: "space-between",
            children: [
              /* @__PURE__ */ jsx(Divider, { orientation: "vertical", variant: "fullWidth" }),
              /* @__PURE__ */ jsxs(
                Select,
                {
                  variant: "standard",
                  sx: { width: "100px" },
                  onChange: changeHandler,
                  name: "type",
                  defaultValue: values.type,
                  children: [
                    /* @__PURE__ */ jsx(MenuItem, { value: "Test", children: "Test" }),
                    /* @__PURE__ */ jsx(MenuItem, { value: "Gene", children: "Gene" }),
                    /* @__PURE__ */ jsx(MenuItem, { value: "Disease", children: "Disease" })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(Button, { variant: "contained", sx: { borderRadius: "20px" }, type: "submit", children: "Search" })
            ]
          }
        ) })
      }
    }
  ) });
};
export {
  TestSearchForm as default
};
