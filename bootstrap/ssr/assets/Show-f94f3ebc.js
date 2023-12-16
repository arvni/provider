import { a as jsx, j as jsxs } from "../ssr.js";
import React__default from "react";
import { Paper, Stack, Typography, Button, Card, CardHeader, CardContent, Grid } from "@mui/material";
import { C as ClientLayout } from "./ClientLayout-ad2873c8.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
import "@mui/icons-material";
import "./api-dec76595.js";
import "axios";
import "./AuthenticatedLayout-6a68e165.js";
import "@mui/lab";
import "./routes-8c429669.js";
import "./validate-e99249ca.js";
import "validator";
import "./PasswordField-8ab16d4d.js";
const Show = ({ auth, order }) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s;
  return /* @__PURE__ */ jsx(ClientLayout, { user: auth.user, header: "Order ID:" + order.id, children: /* @__PURE__ */ jsxs(Paper, { sx: { p: "1em", mt: "1em" }, children: [
    /* @__PURE__ */ jsxs(
      Stack,
      {
        direction: "row",
        justifyContent: "space-between",
        children: [
          /* @__PURE__ */ jsxs(
            Typography,
            {
              component: "h1",
              fontWeight: "900",
              fontSize: "18px",
              children: [
                "Order ID ",
                order.id
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            Button,
            {
              href: route("order-summary", order.id),
              target: "_blank",
              variant: "contained",
              children: "Download Order Summary"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx(Typography, { children: "Analysis requested:" }),
    /* @__PURE__ */ jsx("ul", { children: /* @__PURE__ */ jsx("li", { children: order.test_method.map((test) => /* @__PURE__ */ jsx(Typography, { fontWeight: "600", children: test.name })) }) }),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsx(CardHeader, { title: "Patient details", sx: { background: "#c0c0c0" } }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs(Grid, { container: true, spacing: 1, children: [
        /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, md: 4, children: /* @__PURE__ */ jsxs("ul", { children: [
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Full Name:" }),
            " ",
            (_a = order.patient) == null ? void 0 : _a.fullName
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Date of birth:" }),
            " ",
            (_b = order.patient) == null ? void 0 : _b.dateOfBirth
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Reference ID:" }),
            " ",
            ((_c = order.patient) == null ? void 0 : _c.reference_id) ?? "not specified"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Gender:" }),
            " ",
            ((_d = order.patient) == null ? void 0 : _d.gender) ? "male" : "female"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "City:" }),
            " ",
            ((_f = (_e = order.patient) == null ? void 0 : _e.contact) == null ? void 0 : _f.city) ?? "not specified"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Street:" }),
            " ",
            ((_h = (_g = order.patient) == null ? void 0 : _g.contact) == null ? void 0 : _h.address) ?? "not specified"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "State:" }),
            " ",
            ((_j = (_i = order.patient) == null ? void 0 : _i.contact) == null ? void 0 : _j.state) ?? "not specified"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Phone:" }),
            " ",
            ((_l = (_k = order.patient) == null ? void 0 : _k.contact) == null ? void 0 : _l.phone) ?? "not specified"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Country:" }),
            " ",
            (_n = (_m = order.patient) == null ? void 0 : _m.contact) == null ? void 0 : _n.country.label
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Email:" }),
            " ",
            ((_p = (_o = order.patient) == null ? void 0 : _o.contact) == null ? void 0 : _p.email) ?? "not specified"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Consanguineous parents:" }),
            " ",
            ((_q = order.patient) == null ? void 0 : _q.consanguineousParents) ? "yes" : "no"
          ] })
        ] }) }),
        /* @__PURE__ */ jsxs(Grid, { item: true, xs: 12, md: 4, children: [
          /* @__PURE__ */ jsx(Typography, { fontWeight: "600", children: "Material details" }),
          /* @__PURE__ */ jsx("ol", { children: (_r = order.samples) == null ? void 0 : _r.map((sample, index) => {
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
          /* @__PURE__ */ jsx("ol", { children: (_s = order.clinical_information.symptoms) == null ? void 0 : _s.map((symptom) => /* @__PURE__ */ jsxs("li", { children: [
            symptom.name,
            ":",
            symptom.value,
            " "
          ] }, symptom.id)) }),
          /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Symptoms not listed in HPO:" }),
            " ",
            order.clinical_information.otherSymptom ?? "not specified"
          ] })
        ] })
      ] }) })
    ] })
  ] }) });
};
export {
  Show as default
};
