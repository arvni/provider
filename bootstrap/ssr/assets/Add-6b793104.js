import { j as jsxs, a as jsx } from "../ssr.js";
import { Paper } from "@mui/material";
import { P as PageHeader } from "./PageHeader-18477345.js";
import AddForm from "./AddForm-bf62b2cd.js";
import { A as AdminLayout } from "./AdminLayout-4b60cad8.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
import "./Actions-f382200a.js";
import "react";
import "./api-dec76595.js";
import "axios";
import "./routes-8c429669.js";
import "@mui/lab";
import "@mui/icons-material";
import "./validate-e99249ca.js";
import "validator";
import "./SampleTypeForm-25d271ff.js";
import "./DeleteButton-0f59e867.js";
import "./AddSampleTypeForm-3da05b76.js";
import "./RequirementForm-4eca6b86.js";
import "./AddRequirementForm-dfceefa1.js";
import "./AuthenticatedLayout-6a68e165.js";
import "./PasswordField-8ab16d4d.js";
const Add = ({ auth, sampleTypes }) => {
  return /* @__PURE__ */ jsxs(AdminLayout, { user: auth.user, header: "Tests", children: [
    /* @__PURE__ */ jsx(PageHeader, { title: "Add Test" }),
    /* @__PURE__ */ jsx(Paper, { sx: { p: "1em", mt: "1em" }, children: /* @__PURE__ */ jsx(AddForm, { sampleTypes }) })
  ] });
};
export {
  Add as default
};
