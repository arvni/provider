import { j as jsxs, a as jsx } from "../ssr.js";
import { Stack, IconButton, Alert, Button, Paper, Backdrop, CircularProgress } from "@mui/material";
import AddIcon from "@mui/icons-material/Add.js";
import { Edit } from "@mui/icons-material";
import { P as PageHeader } from "./PageHeader-18477345.js";
import { T as TableLayout } from "./TableLayout-66a61f0b.js";
import { b as usePageReload } from "./api-dec76595.js";
import { r as routes } from "./routes-8c429669.js";
import { D as DeleteButton } from "./DeleteButton-0f59e867.js";
import { A as AdminLayout } from "./AdminLayout-4b60cad8.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
import "./Actions-f382200a.js";
import "react";
import "./RenderFormField-0820b76c.js";
import "./PasswordField-8ab16d4d.js";
import "axios";
import "./AuthenticatedLayout-6a68e165.js";
import "@mui/lab";
import "./validate-e99249ca.js";
import "validator";
const Index = ({ auth, tests: { data: testsData, ...pagination }, status }) => {
  var _a, _b, _c, _d;
  const {
    data,
    processing,
    reload,
    onFilterChange,
    onPageChange,
    onPageSizeChange,
    onOrderByChange,
    get
  } = usePageReload({}, ["tests"]);
  const handleAdd = (e) => {
    e.preventDefault();
    get(routes.tests.add.link);
  };
  const gotoPage = (url) => (e) => {
    e.preventDefault();
    get(url);
  };
  const columns = [
    {
      field: "id",
      title: "ID",
      type: "text",
      sortable: true,
      width: "70px",
      filter: {
        name: "id",
        label: "ID",
        type: "number",
        value: (_a = data == null ? void 0 : data.filter) == null ? void 0 : _a.id,
        inputProps: {
          min: 1
        }
      }
    },
    {
      field: "name",
      title: "Test Name",
      type: "text",
      filter: {
        name: "testName",
        label: "Test Name",
        type: "text",
        value: (_b = data == null ? void 0 : data.filter) == null ? void 0 : _b.testName
      },
      sortable: true
    },
    {
      field: "code",
      title: "Test Code",
      type: "text",
      sortable: true,
      filter: {
        name: "code",
        label: "Test Code",
        type: "text",
        value: (_c = data == null ? void 0 : data.filter) == null ? void 0 : _c.code
      }
    },
    {
      field: "shortName",
      title: "Test Short",
      type: "text",
      sortable: true,
      filter: {
        name: "shortName",
        label: "Short Name",
        type: "text",
        value: (_d = data == null ? void 0 : data.filter) == null ? void 0 : _d.shortName
      }
    },
    {
      field: "id",
      title: "#",
      type: "actions",
      render: (row) => /* @__PURE__ */ jsxs(Stack, { direction: "row", spacing: 1, children: [
        /* @__PURE__ */ jsx(
          IconButton,
          {
            href: routes.tests.edit.link(row.id),
            color: "warning",
            onClick: gotoPage(routes.tests.edit.link(row.id)),
            children: /* @__PURE__ */ jsx(Edit, {})
          }
        ),
        /* @__PURE__ */ jsx(DeleteButton, { url: routes.tests.delete.link(row.id) })
      ] })
    }
  ];
  const handlePage = (e) => {
    e.preventDefault();
    reload();
  };
  return /* @__PURE__ */ jsxs(AdminLayout, { user: auth.user, header: "Tests", children: [
    status && /* @__PURE__ */ jsx(Alert, { children: status }),
    /* @__PURE__ */ jsx(
      PageHeader,
      {
        title: "Tests",
        actions: /* @__PURE__ */ jsx(
          Button,
          {
            variant: "contained",
            onClick: handleAdd,
            href: routes.tests.add.link,
            color: "success",
            startIcon: /* @__PURE__ */ jsx(AddIcon, {}),
            children: "Add"
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(Paper, { sx: { mt: "3em", p: "1rem" }, children: /* @__PURE__ */ jsx(
      TableLayout,
      {
        columns,
        data: testsData,
        onPageChange,
        pagination,
        onFilterChange,
        onFilter: handlePage,
        filter: true,
        onOrderByChange,
        loading: processing,
        tableModel: { orderBy: { field: "id", type: "asc" }, ...data },
        pageSize: { defaultValue: data.pageSize ?? 10, onChange: onPageSizeChange }
      }
    ) }),
    /* @__PURE__ */ jsx(Backdrop, { open: processing, sx: { zIndex: (theme) => theme.zIndex.modal + 10 }, children: /* @__PURE__ */ jsx(CircularProgress, {}) })
  ] });
};
export {
  Index as default
};
