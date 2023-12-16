import { j as jsxs, a as jsx } from "../ssr.js";
import { Dialog, DialogTitle, DialogContent, Typography } from "@mui/material";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
const TestDetails = ({ test, open = false, onClose }) => {
  var _a;
  return /* @__PURE__ */ jsxs(Dialog, { open, onClose, children: [
    /* @__PURE__ */ jsx(DialogTitle, { children: test.name }),
    /* @__PURE__ */ jsxs(DialogContent, { children: [
      /* @__PURE__ */ jsx(Typography, { fontWeight: "800", children: "Description :" }),
      /* @__PURE__ */ jsx(Typography, { children: test.description }),
      /* @__PURE__ */ jsx(Typography, { fontWeight: "800", children: "Accepted Sample requirements :" }),
      /* @__PURE__ */ jsx("ul", { children: (_a = test.sample_types) == null ? void 0 : _a.map((sampleType) => /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsxs("strong", { children: [
          sampleType.name,
          ": "
        ] }),
        sampleType == null ? void 0 : sampleType.description
      ] })) })
    ] })
  ] });
};
export {
  TestDetails as default
};
