import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import { Card, CardHeader, Stack, Typography, Button, CardContent, Table, TableBody, TableRow, TableCell } from "@mui/material";
import { useState } from "react";
import TestDetails from "./TestDetails-d39fb598.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
const TestCard = (props) => {
  const [selected, setSelected] = useState(props.selected);
  const [open, setOpen] = useState(false);
  const handleSelect = () => {
    setSelected(!selected);
    if (props.test.id)
      props.onSelect(props.test.id);
  };
  const handleOpenDetails = () => setOpen(true);
  const handleCloseDetails = () => setOpen(false);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Card, { sx: { minWidth: 275, width: "100%" }, elevation: 5, children: [
      /* @__PURE__ */ jsx(
        CardHeader,
        {
          disableTypography: true,
          title: /* @__PURE__ */ jsxs(
            Stack,
            {
              direction: "row",
              alignItems: "center",
              justifyContent: "space-between",
              children: [
                /* @__PURE__ */ jsx(Typography, { children: "Test" }),
                /* @__PURE__ */ jsxs(Stack, { direction: "row", spacing: 1, children: [
                  /* @__PURE__ */ jsx(Button, { onClick: handleOpenDetails, children: "Read more" }),
                  /* @__PURE__ */ jsx(
                    Button,
                    {
                      onClick: handleSelect,
                      variant: selected ? "outlined" : "contained",
                      children: selected ? "unselect" : "Select"
                    }
                  )
                ] })
              ]
            }
          )
        }
      ),
      /* @__PURE__ */ jsxs(CardContent, { children: [
        /* @__PURE__ */ jsx(Typography, { component: "h3", sx: { fontWeight: "bolder" }, children: props.test.name }),
        /* @__PURE__ */ jsx(Typography, { children: /* @__PURE__ */ jsx(Table, { children: /* @__PURE__ */ jsxs(TableBody, { children: [
          /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableCell, { children: "TAT:" }),
            /* @__PURE__ */ jsxs(TableCell, { children: [
              props.test.turnaroundTime,
              " business days"
            ] })
          ] }),
          /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableCell, { children: "Description: " }),
            /* @__PURE__ */ jsx(TableCell, { children: props.test.description })
          ] })
        ] }) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(TestDetails, { test: props.test, open, onClose: handleCloseDetails })
  ] });
};
export {
  TestCard as default
};
