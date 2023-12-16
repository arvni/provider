import { a as jsx } from "../ssr.js";
import { Stack } from "@mui/material";
import React__default from "react";
const Actions = ({ actions }) => {
  return /* @__PURE__ */ jsx(Stack, { direction: "row", alignItems: "center", spacing: 2, justifyContent: "end", children: Array.isArray(actions) ? actions.map((item, index) => /* @__PURE__ */ jsx(
    React__default.Fragment,
    {
      children: item
    },
    index
  )) : actions });
};
export {
  Actions as A
};
