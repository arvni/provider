import { j as jsxs, a as jsx } from "../ssr.js";
import { useState } from "react";
import { Alert, Button, Paper, Backdrop, CircularProgress } from "@mui/material";
import AddIcon from "@mui/icons-material/Add.js";
import { P as PageHeader } from "./PageHeader-18477345.js";
import AddForm from "./AddForm-b9cc2b2d.js";
import { T as TableLayout } from "./TableLayout-66a61f0b.js";
import { b as usePageReload, u as useGetData } from "./api-dec76595.js";
import { C as ClientLayout } from "./ClientLayout-ad2873c8.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
import "./Actions-f382200a.js";
import "./OneColumnFormLayout-e37dd6cc.js";
import "./RenderFormField-0820b76c.js";
import "./PasswordField-8ab16d4d.js";
import "@mui/icons-material";
import "axios";
import "./routes-8c429669.js";
import "@mui/lab";
import "./validate-e99249ca.js";
import "validator";
import "./AuthenticatedLayout-6a68e165.js";
const Index = ({ auth, orderMaterials: { data: orderMaterialsData, ...pagination }, status, request }) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  const {
    data,
    processing,
    reload,
    onPageSizeChange,
    onOrderByChange,
    onFilterChange,
    onPageChange
  } = usePageReload(request, ["orderMaterials"]);
  const { loading, getData } = useGetData();
  const [orderMaterial, setOrderMaterial] = useState({
    material: "",
    quantity: 0
  });
  const [openAddForm, setOpenAddForm] = useState(false);
  const handleOpenAddForm = () => setOpenAddForm(true);
  const handleCloseAddForm = () => {
    setOpenAddForm(false);
    resetOrderMaterial();
  };
  const resetOrderMaterial = () => {
    setOrderMaterial({
      id: null,
      material: "",
      quantity: 0,
      user: null
    });
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
      field: "material",
      title: "Material",
      type: "text",
      filter: {
        name: "orderMaterialName",
        label: "Material",
        type: "text",
        value: (_b = data == null ? void 0 : data.filter) == null ? void 0 : _b.orderMaterialName
      },
      sortable: true
    },
    {
      field: "userName",
      title: "User",
      type: "text",
      sortable: true,
      filter: {
        name: "userName",
        label: "User",
        type: "text",
        value: (_c = data == null ? void 0 : data.filter) == null ? void 0 : _c.userName
      }
    },
    {
      field: "quantity",
      title: "Quantity",
      type: "number",
      sortable: true,
      render: (row) => Number.parseInt(row.balance).toString()
    },
    {
      field: "created_at",
      title: "Created At",
      type: "text",
      sortable: true,
      render: (row) => new Date(row.created_at).toLocaleString(),
      filter: [
        {
          name: "created_at.from",
          label: "From",
          type: "date",
          value: (_e = (_d = data == null ? void 0 : data.filter) == null ? void 0 : _d.created_at) == null ? void 0 : _e.from,
          inputProps: { max: (_g = (_f = data == null ? void 0 : data.filter) == null ? void 0 : _f.created_at) == null ? void 0 : _g.to }
        },
        {
          name: "created_at.to",
          label: "To",
          type: "date",
          value: (_i = (_h = data == null ? void 0 : data.filter) == null ? void 0 : _h.created_at) == null ? void 0 : _i.to,
          inputProps: { min: (_k = (_j = data == null ? void 0 : data.filter) == null ? void 0 : _j.created_at) == null ? void 0 : _k.from }
        }
      ]
    }
  ];
  const handlePage = (e) => {
    e.preventDefault();
    reload();
  };
  return /* @__PURE__ */ jsxs(ClientLayout, { user: auth.user, header: "Materials Order ", children: [
    status && /* @__PURE__ */ jsx(Alert, { children: status }),
    /* @__PURE__ */ jsx(
      PageHeader,
      {
        title: " Materials Order",
        actions: /* @__PURE__ */ jsx(Button, { variant: "contained", onClick: handleOpenAddForm, color: "success", startIcon: /* @__PURE__ */ jsx(AddIcon, {}), children: "Add" })
      }
    ),
    openAddForm && /* @__PURE__ */ jsx(AddForm, { open: openAddForm, onClose: handleCloseAddForm, defaultValue: orderMaterial }),
    /* @__PURE__ */ jsx(Paper, { sx: { mt: "3em", p: "1rem" }, children: /* @__PURE__ */ jsx(
      TableLayout,
      {
        columns,
        data: orderMaterialsData,
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
    /* @__PURE__ */ jsx(Backdrop, { open: loading, children: /* @__PURE__ */ jsx(CircularProgress, {}) })
  ] });
};
export {
  Index as default
};
