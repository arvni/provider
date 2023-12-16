import { a as jsx, F as Fragment, j as jsxs } from "../ssr.js";
import { Autocomplete, Box, Typography, TextField, InputAdornment } from "@mui/material";
import React__default, { useState, useEffect } from "react";
import { u as useGetData } from "./api-dec76595.js";
import { Search } from "@mui/icons-material";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
import "axios";
const SymptomSelector = ({ onSelect }) => {
  const hint = React__default.useRef("");
  const [value, setValue] = useState("");
  const { getData } = useGetData();
  const [symptoms, setSymptoms] = useState([]);
  useEffect(() => {
    if (!symptoms.length)
      getData(route("api.symptoms.index")).then((res) => setSymptoms(res.data));
  }, []);
  const handleChange = (event, v) => {
    if (v)
      onSelect(v);
    setValue("");
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    Autocomplete,
    {
      disableClearable: true,
      onKeyDown: (event) => {
        if (event.key === "Tab") {
          if (hint.current) {
            setValue(hint.current);
            event.preventDefault();
          }
        }
      },
      onBlur: () => {
        hint.current = "";
      },
      disablePortal: true,
      inputValue: value,
      getOptionLabel: (option) => option.name,
      filterOptions: (options, state) => {
        return options.filter(
          (option) => option.name.toLowerCase().trim().includes(state.inputValue.toLowerCase().trim())
        );
      },
      id: "combo-box-hint-demo",
      options: symptoms,
      onChange: handleChange,
      renderInput: (params) => {
        return /* @__PURE__ */ jsxs(Box, { sx: { position: "relative" }, children: [
          /* @__PURE__ */ jsx(
            Typography,
            {
              sx: { position: "absolute", opacity: 0.5, left: 14, top: 16 },
              children: hint.current
            }
          ),
          /* @__PURE__ */ jsx(
            TextField,
            {
              ...params,
              inputProps: {
                ...params.inputProps,
                endAdornment: /* @__PURE__ */ jsx(InputAdornment, { position: "end", children: /* @__PURE__ */ jsx(Search, {}) })
              },
              onChange: (e) => {
                const newValue = e.target.value;
                setValue(newValue);
                const matchingOption = symptoms.find(
                  (option) => option.name.startsWith(newValue)
                );
                if (newValue && matchingOption) {
                  hint.current = matchingOption.name;
                } else {
                  hint.current = "";
                }
              },
              label: "Search"
            }
          )
        ] });
      }
    }
  ) });
};
export {
  SymptomSelector as default
};
