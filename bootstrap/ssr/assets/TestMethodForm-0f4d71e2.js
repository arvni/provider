import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import { useState, useEffect } from "react";
import { Divider, Grid, CircularProgress, Box, Paper, Stack, Typography, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from "@mui/material";
import TestSearchForm from "./TestSearchForm-03c2c58a.js";
import { u as useGetData } from "./api-dec76595.js";
import { r as routes } from "./routes-8c429669.js";
import TestCard from "./TestCard-0f2b07fa.js";
import { ShoppingCart, Close } from "@mui/icons-material";
import TestRequirement from "./TestRequirement-7136995b.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
import "axios";
import "./TestDetails-d39fb598.js";
import "./RenderFormField-0820b76c.js";
import "./PasswordField-8ab16d4d.js";
const TestMethodForm = (props) => {
  const [tests, setTests] = useState([]);
  const { getData, loading } = useGetData();
  useEffect(() => {
    handleTestSearch({});
  }, []);
  const handleTestSearch = (values) => getData(routes.tests.api.list.link, values).then((res) => setTests(res.data));
  const toggleSelect = (id) => {
    let tmp = [...props.tests];
    let orderIndex = props.tests.findIndex((item) => item.id === id);
    if (orderIndex !== -1) {
      tmp.splice(orderIndex, 1);
    } else {
      let testIndex = tests.findIndex((item) => item.id === id);
      if (testIndex !== -1 && tests[testIndex]) {
        tmp.push(tests[testIndex]);
      }
    }
    props.onChange("test_method", tmp);
    return handleTestSearch({});
  };
  const handleDeleteTest = (id) => () => {
    if (id !== void 0)
      toggleSelect(id);
  };
  const handleChangeRequirements = (index) => (requirements) => {
    let tmp = [...props.tests];
    tmp[index] = { ...tmp[index], requirements };
    props.onChange("test_method", tmp);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(TestSearchForm, { onSearch: handleTestSearch }),
    /* @__PURE__ */ jsx(Divider, { sx: { my: "2em" } }),
    /* @__PURE__ */ jsxs(Grid, { container: true, spacing: 2, children: [
      /* @__PURE__ */ jsx(
        Grid,
        {
          item: true,
          xs: 7,
          sx: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: 2
          },
          children: !loading ? tests.map((test) => {
            var _a;
            return /* @__PURE__ */ jsx(
              TestCard,
              {
                selected: ((_a = props.tests) == null ? void 0 : _a.findIndex((item) => item.id === test.id)) !== -1,
                test,
                onSelect: toggleSelect
              },
              test.id
            );
          }) : /* @__PURE__ */ jsx(CircularProgress, {})
        }
      ),
      /* @__PURE__ */ jsx(Grid, { item: true, xs: 5, children: /* @__PURE__ */ jsxs(Box, { component: "form", onSubmit: props.onSubmit, children: [
        /* @__PURE__ */ jsx(Paper, { sx: { p: "1rem" }, elevation: 5, children: /* @__PURE__ */ jsxs(Stack, { direction: "row", justifyContent: "space-between", alignItems: "center", children: [
          /* @__PURE__ */ jsxs(Typography, { children: [
            "Product List(",
            props.tests.length,
            " selected)"
          ] }),
          /* @__PURE__ */ jsx(
            Button,
            {
              disabled: !props.tests.length,
              variant: "outlined",
              type: "submit",
              startIcon: /* @__PURE__ */ jsx(ShoppingCart, {}),
              children: "Order Now"
            }
          )
        ] }) }),
        /* @__PURE__ */ jsx(Paper, { sx: { p: "1rem" }, children: /* @__PURE__ */ jsx(List, { children: props.tests.map((test, index) => /* @__PURE__ */ jsxs(ListItem, { children: [
          /* @__PURE__ */ jsx(ListItemText, { children: /* @__PURE__ */ jsxs(
            Paper,
            {
              elevation: 4,
              sx: { padding: 2 },
              children: [
                /* @__PURE__ */ jsx("h3", { children: test.name }),
                /* @__PURE__ */ jsx(
                  TestRequirement,
                  {
                    requirements: (test == null ? void 0 : test.requirements) ?? [],
                    onChange: handleChangeRequirements(index)
                  }
                )
              ]
            }
          ) }),
          /* @__PURE__ */ jsx(ListItemSecondaryAction, { children: /* @__PURE__ */ jsx(IconButton, { onClick: handleDeleteTest(test.id), children: /* @__PURE__ */ jsx(Close, {}) }) }),
          /* @__PURE__ */ jsx(Divider, {})
        ] }, "test-" + test.id)) }) })
      ] }) })
    ] })
  ] });
};
export {
  TestMethodForm as default
};
