import { a as jsx, j as jsxs } from "../ssr.js";
import { Paper, Grid, Stack, Typography } from "@mui/material";
import { A as Actions } from "./Actions-f382200a.js";
const PageHeader = ({
  title,
  subtitle = "",
  actions = []
}) => {
  return /* @__PURE__ */ jsx(Paper, { elevation: 5, variant: "elevation", sx: { p: "1em" }, children: /* @__PURE__ */ jsxs(
    Grid,
    {
      container: true,
      direction: "row",
      justifyContent: "space-between",
      alignItems: "center",
      alignContent: "center",
      children: [
        /* @__PURE__ */ jsx(Grid, { item: true, children: /* @__PURE__ */ jsxs(Stack, { direction: "column", spacing: 2, children: [
          /* @__PURE__ */ jsx(Typography, { variant: "h1", fontSize: "42px", children: title }),
          subtitle && /* @__PURE__ */ jsx(Typography, { children: subtitle })
        ] }) }),
        /* @__PURE__ */ jsx(Grid, { item: true, children: actions && /* @__PURE__ */ jsx(Actions, { actions }) })
      ]
    }
  ) });
};
export {
  PageHeader as P
};
