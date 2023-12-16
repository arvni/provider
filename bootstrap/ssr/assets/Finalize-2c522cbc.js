import { j as jsxs, a as jsx } from "../ssr.js";
import React__default from "react";
import { a as useSubmitForm } from "./api-dec76595.js";
import { r as routes } from "./routes-8c429669.js";
import EditLayout from "./EditLayout-725f4034.js";
import { Typography, Card, CardHeader, CardContent, Grid, TextField, Stack, Button } from "@mui/material";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
import "axios";
import "./ClientLayout-ad2873c8.js";
import "@mui/icons-material";
import "./AuthenticatedLayout-6a68e165.js";
import "@mui/lab";
import "./validate-e99249ca.js";
import "validator";
import "./PasswordField-8ab16d4d.js";
const Finalize = ({ auth, order, step, consents }) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t;
  const {
    data,
    submit
  } = useSubmitForm({ ...order, _method: "put" }, routes.orders.update.link(order.id, step));
  const handleSubmit = () => submit();
  return /* @__PURE__ */ jsxs(EditLayout, { auth, step, id: order.id, children: [
    /* @__PURE__ */ jsxs(Typography, { component: "h1", fontWeight: "900", fontSize: "18px", children: [
      "Order ID ",
      data.id
    ] }),
    /* @__PURE__ */ jsx(Typography, { children: "Analysis requested:" }),
    /* @__PURE__ */ jsx("ul", { children: /* @__PURE__ */ jsx("li", { children: data.test_method.map((test) => /* @__PURE__ */ jsx(Typography, { fontWeight: "600", children: test.name })) }) }),
    /* @__PURE__ */ jsx(Typography, { fontWeight: "600", children: 'To finalize your order please click "Submit" at the bottom of the page' }),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsx(CardHeader, { title: "Patient details", sx: { background: "#c0c0c0" } }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs(Grid, { container: true, spacing: 1, children: [
        /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, md: 4, children: /* @__PURE__ */ jsxs("ul", { children: [
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Full Name:" }),
            " ",
            (_a = data.patient) == null ? void 0 : _a.fullName
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Date of birth:" }),
            " ",
            (_b = data.patient) == null ? void 0 : _b.dateOfBirth
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Reference ID:" }),
            " ",
            ((_c = data.patient) == null ? void 0 : _c.reference_id) ?? "not specified"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Gender:" }),
            "  ",
            ((_d = data.patient) == null ? void 0 : _d.gender) ? "male" : "female"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "City:" }),
            " ",
            ((_f = (_e = data == null ? void 0 : data.patient) == null ? void 0 : _e.contact) == null ? void 0 : _f.city) ?? "not specified"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Street:" }),
            " ",
            ((_h = (_g = data == null ? void 0 : data.patient) == null ? void 0 : _g.contact) == null ? void 0 : _h.address) ?? "not specified"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "State:" }),
            " ",
            ((_j = (_i = data == null ? void 0 : data.patient) == null ? void 0 : _i.contact) == null ? void 0 : _j.state) ?? "not specified"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Phone:" }),
            " ",
            ((_l = (_k = data == null ? void 0 : data.patient) == null ? void 0 : _k.contact) == null ? void 0 : _l.phone) ?? "not specified"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Country:" }),
            " ",
            (_o = (_n = (_m = data == null ? void 0 : data.patient) == null ? void 0 : _m.contact) == null ? void 0 : _n.country) == null ? void 0 : _o.label
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Email:" }),
            " ",
            ((_q = (_p = data == null ? void 0 : data.patient) == null ? void 0 : _p.contact) == null ? void 0 : _q.email) ?? "not specified"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Consanguineous parents:" }),
            " ",
            ((_r = data.patient) == null ? void 0 : _r.consanguineousParents) ? "yes" : "no"
          ] })
        ] }) }),
        /* @__PURE__ */ jsxs(Grid, { item: true, xs: 12, md: 4, children: [
          /* @__PURE__ */ jsx(Typography, { fontWeight: "600", children: "Material details" }),
          /* @__PURE__ */ jsx("ol", { children: (_s = data.samples) == null ? void 0 : _s.map((sample, index) => {
            var _a2;
            return /* @__PURE__ */ jsxs(React__default.Fragment, { children: [
              index + 1,
              /* @__PURE__ */ jsxs("ul", { children: [
                /* @__PURE__ */ jsxs("li", { children: [
                  /* @__PURE__ */ jsx("strong", { children: "Sample type:" }),
                  (_a2 = sample.sample_type) == null ? void 0 : _a2.name,
                  " "
                ] }),
                /* @__PURE__ */ jsxs("li", { children: [
                  /* @__PURE__ */ jsx("strong", { children: "Sample ID:" }),
                  sample.sampleId ?? "not specified"
                ] }),
                /* @__PURE__ */ jsxs("li", { children: [
                  /* @__PURE__ */ jsx("strong", { children: "Sample Collection Date:" }),
                  sample.collectionDate
                ] })
              ] })
            ] }, sample.id);
          }) })
        ] }),
        /* @__PURE__ */ jsxs(Grid, { item: true, xs: 12, md: 4, children: [
          /* @__PURE__ */ jsx(Typography, { fontWeight: "600", children: "Clinical details" }),
          /* @__PURE__ */ jsx("ol", { children: (_t = data.clinical_information.symptoms) == null ? void 0 : _t.map((symptom) => /* @__PURE__ */ jsxs("li", { children: [
            symptom.name,
            ":",
            symptom.value,
            " "
          ] }, symptom.id)) }),
          /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Symptoms not listed in HPO:" }),
            " ",
            data.clinical_information.otherSymptom ?? "not specified"
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { title: "Additional information", sx: { background: "#c0c0c0" } }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(TextField, { multiline: true, fullWidth: true, value: data.clinical_information.additionalInformation, disabled: true }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Stack, { alignItems: "flex-end", children: /* @__PURE__ */ jsx(Button, { variant: "contained", onClick: handleSubmit, children: "Save & continue" }) })
  ] });
};
export {
  Finalize as default
};
