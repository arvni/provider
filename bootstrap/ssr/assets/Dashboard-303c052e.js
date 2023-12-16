import { a as jsx, j as jsxs } from "../ssr.js";
import { Grid, Paper } from "@mui/material";
import { C as ClientLayout } from "./ClientLayout-ad2873c8.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
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
function Dashboard({ auth }) {
  return /* @__PURE__ */ jsx(ClientLayout, { user: auth.user, header: "Dashboard", children: /* @__PURE__ */ jsxs(Grid, { container: true, spacing: 3, children: [
    /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, md: 8, lg: 9, children: /* @__PURE__ */ jsx(
      Paper,
      {
        sx: {
          p: 2,
          display: "flex",
          flexDirection: "column",
          height: 240
        }
      }
    ) }),
    /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, md: 4, lg: 3, children: /* @__PURE__ */ jsx(
      Paper,
      {
        sx: {
          p: 2,
          display: "flex",
          flexDirection: "column",
          height: 240
        }
      }
    ) }),
    /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, children: /* @__PURE__ */ jsx(Paper, { sx: { p: 2, display: "flex", flexDirection: "column" } }) })
  ] }) });
}
export {
  Dashboard as default
};
