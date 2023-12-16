import { a as jsx, j as jsxs } from "../ssr.js";
import { Paper, Stepper, Step, StepButton, StepLabel } from "@mui/material";
import { router } from "@inertiajs/react";
import { C as ClientLayout } from "./ClientLayout-ad2873c8.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "@mui/icons-material";
import "./api-dec76595.js";
import "react";
import "axios";
import "./AuthenticatedLayout-6a68e165.js";
import "@mui/lab";
import "./routes-8c429669.js";
import "./validate-e99249ca.js";
import "validator";
import "./PasswordField-8ab16d4d.js";
const steps = ["test method", "patient details", "clinical details", "sample details", "consent form", "finalize"];
const EditLayout = ({ auth, step, children, id }) => {
  let activeStep = steps.findIndex((item) => item == step);
  const handleStep = (s) => (e) => {
    e.preventDefault();
    e.stopPropagation();
    router.visit(route("orders.edit", { step: s, order: id }));
  };
  return /* @__PURE__ */ jsx(ClientLayout, { user: auth.user, header: ``, children: /* @__PURE__ */ jsxs(Paper, { sx: { p: "1em", mt: "1em" }, children: [
    /* @__PURE__ */ jsx(Stepper, { activeStep, alternativeLabel: true, children: steps.map((item, index) => /* @__PURE__ */ jsx(Step, { children: /* @__PURE__ */ jsx(StepButton, { color: "inherit", onClick: handleStep(item), href: route("orders.edit", { step: item, order: id }), children: /* @__PURE__ */ jsx(StepLabel, { children: item }) }) }, index)) }),
    children
  ] }) });
};
export {
  EditLayout as default
};
