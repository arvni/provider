import { j as jsxs, a as jsx } from "../ssr.js";
import { useState } from "react";
import { Stack, IconButton, Alert, Button, Paper, Backdrop, CircularProgress } from "@mui/material";
import AddIcon from "@mui/icons-material/Add.js";
import { Edit, PasswordOutlined } from "@mui/icons-material";
import { P as PageHeader } from "./PageHeader-18477345.js";
import AddForm from "./AddForm-04db6f25.js";
import { T as TableLayout } from "./TableLayout-66a61f0b.js";
import { b as usePageReload, u as useGetData } from "./api-dec76595.js";
import { r as routes } from "./routes-8c429669.js";
import { C as ChangePasswordForm } from "./AuthenticatedLayout-6a68e165.js";
import { A as AdminLayout } from "./AdminLayout-4b60cad8.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
import "./Actions-f382200a.js";
import "@mui/lab";
import "./PasswordField-8ab16d4d.js";
import "./countries-5ccb0d79.js";
import "./RenderFormField-0820b76c.js";
import "axios";
import "./validate-e99249ca.js";
import "validator";
const defaultUser = {
  id: void 0,
  name: "",
  userName: "",
  email: "",
  mobile: "",
  meta: {
    contact: {
      address: "",
      city: "",
      country: "",
      phone: ""
    },
    billing: {
      name: "",
      email: "",
      phone: "",
      country: "",
      address: "",
      state: "",
      city: "",
      zip: ""
    }
  },
  active: true,
  password: ""
};
const Index = ({ auth, users: { data: usersData, ...pagination }, status, request }) => {
  var _a, _b, _c, _d, _e;
  const {
    data,
    processing,
    reload,
    onPageSizeChange,
    onOrderByChange,
    onFilterChange,
    onPageChange
  } = usePageReload(request, ["users"]);
  const { loading, getData } = useGetData();
  const [user, setUser] = useState(defaultUser);
  const [openAddForm, setOpenAddForm] = useState(false);
  const [openChangePasswordForm, setOpenChangePasswordForm] = useState(false);
  const handleOpenAddForm = () => setOpenAddForm(true);
  const handleOpenChangePasswordForm = (user2) => () => {
    setUser(user2);
    setOpenChangePasswordForm(true);
  };
  const handleCloseChangePasswordForm = () => {
    resetUser();
    setOpenChangePasswordForm(false);
  };
  const handleCloseAddForm = () => {
    setOpenAddForm(false);
    resetUser();
  };
  const resetUser = () => {
    setUser(defaultUser);
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
      title: "Name",
      type: "text",
      filter: {
        name: "name",
        label: "Name",
        type: "text",
        value: (_b = data == null ? void 0 : data.filter) == null ? void 0 : _b.name
      },
      sortable: true
    },
    {
      field: "userName",
      title: "userName",
      type: "text",
      filter: {
        name: "userName",
        label: "userName",
        type: "text",
        value: (_c = data == null ? void 0 : data.filter) == null ? void 0 : _c.userName
      },
      sortable: true
    },
    {
      field: "email",
      title: "Email",
      type: "email",
      filter: {
        name: "email",
        label: "Email",
        type: "text",
        value: (_d = data == null ? void 0 : data.filter) == null ? void 0 : _d.email
      },
      sortable: true
    },
    {
      field: "mobile",
      title: "Mobile",
      type: "mobile",
      filter: {
        name: "mobile",
        label: "Mobile",
        type: "text",
        value: (_e = data == null ? void 0 : data.filter) == null ? void 0 : _e.mobile
      },
      sortable: true
    },
    {
      field: "id",
      title: "#",
      type: "actions",
      render: (row) => /* @__PURE__ */ jsxs(Stack, { direction: "row", spacing: 1, children: [
        /* @__PURE__ */ jsx(IconButton, { onClick: handleEdit(row.id), children: /* @__PURE__ */ jsx(Edit, {}) }),
        /* @__PURE__ */ jsx(IconButton, { onClick: handleOpenChangePasswordForm(row), children: /* @__PURE__ */ jsx(PasswordOutlined, {}) })
      ] })
    }
  ];
  const handleEdit = (id) => () => {
    getData(routes.users.show.link(id)).then((res) => setUser(res.data)).then(handleOpenAddForm);
  };
  const handlePage = (e) => {
    e.preventDefault();
    reload();
  };
  return /* @__PURE__ */ jsxs(AdminLayout, { user: auth.user, header: "Users", children: [
    status && /* @__PURE__ */ jsx(Alert, { children: status }),
    /* @__PURE__ */ jsx(
      PageHeader,
      {
        title: "Users",
        actions: /* @__PURE__ */ jsx(Button, { variant: "contained", onClick: handleOpenAddForm, color: "success", startIcon: /* @__PURE__ */ jsx(AddIcon, {}), children: "Add" })
      }
    ),
    openAddForm && /* @__PURE__ */ jsx(AddForm, { open: openAddForm, onClose: handleCloseAddForm, defaultValue: user }),
    /* @__PURE__ */ jsx(Paper, { sx: { mt: "3em", p: "1rem" }, children: /* @__PURE__ */ jsx(
      TableLayout,
      {
        columns,
        data: usersData,
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
    /* @__PURE__ */ jsx(Backdrop, { open: loading, children: /* @__PURE__ */ jsx(CircularProgress, {}) }),
    /* @__PURE__ */ jsx(ChangePasswordForm, { open: openChangePasswordForm, onClose: handleCloseChangePasswordForm, user })
  ] });
};
export {
  Index as default
};
