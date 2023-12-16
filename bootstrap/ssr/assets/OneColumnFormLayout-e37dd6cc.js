import { a as jsx, j as jsxs } from "../ssr.js";
import { Box, Grid } from "@mui/material";
import { F as FormField } from "./RenderFormField-0820b76c.js";
import { A as Actions } from "./Actions-f382200a.js";
const OneColumnFormLayout = ({
  send,
  action,
  onchange,
  children,
  sx = null,
  fields = [],
  actions = []
}) => {
  return /* @__PURE__ */ jsx(Box, { component: "form", onSubmit: send, method: "post", action, sx, onChange: onchange, children: /* @__PURE__ */ jsxs(Grid, { container: true, direction: "column", spacing: 2, alignItems: "center", justifyContent: "center", children: [
    fields.map((field, index) => /* @__PURE__ */ jsx(Grid, { item: true, sx: { width: "100%" }, children: /* @__PURE__ */ jsx(FormField, { field, onchange }) }, index)),
    children,
    /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, sx: { width: "100%" }, children: /* @__PURE__ */ jsx(Actions, { actions }) })
  ] }) });
};
export {
  OneColumnFormLayout as O
};
