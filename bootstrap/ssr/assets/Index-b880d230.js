import { a as jsx, j as jsxs } from "../ssr.js";
import { useState } from "react";
import { IconButton, Alert, Button, Paper, Backdrop, CircularProgress } from "@mui/material";
import AddIcon from "@mui/icons-material/Add.js";
import { Edit } from "@mui/icons-material";
import { P as PageHeader } from "./PageHeader-18477345.js";
import { T as TableLayout } from "./TableLayout-66a61f0b.js";
import { b as usePageReload, u as useGetData } from "./api-dec76595.js";
import { r as routes } from "./routes-8c429669.js";
import { A as AdminLayout } from "./AdminLayout-4b60cad8.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
import "./Actions-f382200a.js";
import "./RenderFormField-0820b76c.js";
import "./PasswordField-8ab16d4d.js";
import "axios";
import "./AuthenticatedLayout-6a68e165.js";
import "@mui/lab";
import "./validate-e99249ca.js";
import "validator";
const Index = ({ auth, diseases: { data: diseasesData, ...pagination }, status, request }) => {
  var _a, _b, _c;
  const {
    data,
    processing,
    reload,
    onPageSizeChange,
    onOrderByChange,
    onFilterChange,
    onPageChange
  } = usePageReload(request, ["diseases"]);
  const { loading, getData } = useGetData();
  const [disease, setDisease] = useState({
    id: null,
    name: "",
    gene: ""
  });
  const [openAddForm, setOpenAddForm] = useState(false);
  const handleOpenAddForm = () => setOpenAddForm(true);
  const columns = [
    {
      field: "id",
      title: "ID",
      type: "text",
      sortable: true,
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
      title: "Disease Name",
      type: "text",
      filter: {
        name: "diseaseName",
        label: "Disease Name",
        type: "text",
        value: (_b = data == null ? void 0 : data.filter) == null ? void 0 : _b.diseaseName
      },
      sortable: true
    },
    {
      field: "gene",
      title: "Gene",
      type: "text",
      sortable: true,
      filter: {
        name: "gene",
        label: "Gene",
        type: "text",
        value: (_c = data == null ? void 0 : data.filter) == null ? void 0 : _c.gene
      }
    },
    {
      field: "id",
      title: "#",
      type: "actions",
      render: (row) => /* @__PURE__ */ jsx(IconButton, { onClick: handleEdit(row.id), children: /* @__PURE__ */ jsx(Edit, {}) })
    }
  ];
  const handleEdit = (id) => () => {
    getData(routes.diseases.show.link(id)).then((res) => setDisease(res.data)).then(handleOpenAddForm);
  };
  const handlePage = (e) => {
    e.preventDefault();
    reload();
  };
  return /* @__PURE__ */ jsxs(AdminLayout, { user: auth.user, header: "Diseases", children: [
    status && /* @__PURE__ */ jsx(Alert, { children: status }),
    /* @__PURE__ */ jsx(
      PageHeader,
      {
        title: "Diseases",
        actions: /* @__PURE__ */ jsx(Button, { variant: "contained", onClick: handleOpenAddForm, color: "success", startIcon: /* @__PURE__ */ jsx(AddIcon, {}), children: "Add" })
      }
    ),
    /* @__PURE__ */ jsx(Paper, { sx: { mt: "3em", p: "1rem" }, children: /* @__PURE__ */ jsx(
      TableLayout,
      {
        columns,
        data: diseasesData,
        onPageChange,
        pagination,
        onFilterChange,
        onFilter: handlePage,
        filter: true,
        onOrderByChange,
        loading: processing,
        tableModel: {
          orderBy: (data == null ? void 0 : data.orderBy) ?? {
            field: "id",
            type: "asc"
          },
          page: (data == null ? void 0 : data.page) ?? 1,
          filter: data == null ? void 0 : data.filter
        },
        pageSize: {
          defaultValue: (data == null ? void 0 : data.pageSize) ?? 10,
          onChange: onPageSizeChange
        }
      }
    ) }),
    /* @__PURE__ */ jsx(Backdrop, { open: loading, children: /* @__PURE__ */ jsx(CircularProgress, {}) })
  ] });
};
export {
  Index as default
};
