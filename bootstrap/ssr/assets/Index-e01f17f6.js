import { a as jsx, j as jsxs } from "../ssr.js";
import { useState } from "react";
import { IconButton, Alert, Button, Paper, Backdrop, CircularProgress } from "@mui/material";
import AddIcon from "@mui/icons-material/Add.js";
import { Edit } from "@mui/icons-material";
import { P as PageHeader } from "./PageHeader-18477345.js";
import AddForm from "./AddForm-867f5999.js";
import { T as TableLayout } from "./TableLayout-66a61f0b.js";
import { b as usePageReload, u as useGetData } from "./api-dec76595.js";
import { r as routes } from "./routes-8c429669.js";
import { A as AdminLayout } from "./AdminLayout-4b60cad8.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
import "./Actions-f382200a.js";
import "./OneColumnFormLayout-e37dd6cc.js";
import "./RenderFormField-0820b76c.js";
import "./PasswordField-8ab16d4d.js";
import "axios";
import "@mui/lab";
import "./validate-e99249ca.js";
import "validator";
import "./AuthenticatedLayout-6a68e165.js";
const Index = ({ auth, sampleTypes: { data: sampleTypesData, ...pagination }, status, request }) => {
  var _a, _b;
  const {
    data,
    processing,
    reload,
    onPageSizeChange,
    onOrderByChange,
    onFilterChange,
    onPageChange
  } = usePageReload(request, ["sampleTypes"]);
  const { loading, getData } = useGetData();
  const [sampleType, setSymptom] = useState({
    id: null,
    name: "",
    sample_id_required: false
  });
  const [openAddForm, setOpenAddForm] = useState(false);
  const handleOpenAddForm = () => setOpenAddForm(true);
  const handleCloseAddForm = () => {
    setOpenAddForm(false);
    resetSampleType();
  };
  const resetSampleType = () => {
    setSymptom({
      id: null,
      name: "",
      sample_id_required: false
    });
  };
  const columns = [
    {
      field: "id",
      title: "ID",
      type: "text",
      sortable: true,
      width: "100px",
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
      title: "Sample Type Name",
      type: "text",
      filter: {
        name: "sampleTypeName",
        label: "Sample Type Name",
        type: "text",
        value: (_b = data == null ? void 0 : data.filter) == null ? void 0 : _b.sampleTypeName
      },
      sortable: true
    },
    {
      field: "sample_id_required",
      title: "Sample ID Required",
      type: "boolean",
      sortable: true
    },
    {
      field: "id",
      title: "#",
      type: "actions",
      render: (row) => /* @__PURE__ */ jsx(IconButton, { onClick: handleEdit(row.id), children: /* @__PURE__ */ jsx(Edit, {}) })
    }
  ];
  const handleEdit = (id) => () => {
    getData(routes.sampleTypes.show.link(id)).then((res) => setSymptom(res.data)).then(handleOpenAddForm);
  };
  const handlePage = (e) => {
    e.preventDefault();
    reload();
  };
  return /* @__PURE__ */ jsxs(AdminLayout, { user: auth.user, header: "Sample Types", children: [
    status && /* @__PURE__ */ jsx(Alert, { children: status }),
    /* @__PURE__ */ jsx(
      PageHeader,
      {
        title: "Sample Types",
        actions: /* @__PURE__ */ jsx(Button, { variant: "contained", onClick: handleOpenAddForm, color: "success", startIcon: /* @__PURE__ */ jsx(AddIcon, {}), children: "Add" })
      }
    ),
    openAddForm && /* @__PURE__ */ jsx(AddForm, { open: openAddForm, onClose: handleCloseAddForm, defaultValue: sampleType }),
    /* @__PURE__ */ jsx(Paper, { sx: { mt: "3em", p: "1rem" }, children: /* @__PURE__ */ jsx(
      TableLayout,
      {
        columns,
        data: sampleTypesData,
        onPageChange,
        pagination,
        onFilterChange,
        onFilter: handlePage,
        filter: true,
        onOrderByChange,
        loading: processing,
        tableModel: {
          orderBy: data.orderBy ?? {
            field: "id",
            type: "asc"
          },
          page: data.page,
          filter: data.filter
        },
        pageSize: {
          defaultValue: data.pageSize ?? 10,
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
