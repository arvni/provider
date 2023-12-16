import { a as jsx, j as jsxs } from "../ssr.js";
import { Stack, IconButton, Alert, Button, Paper, Backdrop, CircularProgress } from "@mui/material";
import AddIcon from "@mui/icons-material/Add.js";
import { RemoveRedEye, Edit } from "@mui/icons-material";
import { P as PageHeader } from "./PageHeader-18477345.js";
import { b as usePageReload } from "./api-dec76595.js";
import { r as routes } from "./routes-8c429669.js";
import { T as TableLayout } from "./TableLayout-66a61f0b.js";
import { C as ClientLayout } from "./ClientLayout-ad2873c8.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
import "./Actions-f382200a.js";
import "react";
import "axios";
import "./RenderFormField-0820b76c.js";
import "./PasswordField-8ab16d4d.js";
import "./AuthenticatedLayout-6a68e165.js";
import "@mui/lab";
import "./validate-e99249ca.js";
import "validator";
const Index = ({ auth, orders: { data: ordersData, ...pagination }, status, request }) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B;
  const {
    data,
    processing,
    reload,
    onFilterChange,
    onPageChange,
    onPageSizeChange,
    onOrderByChange,
    get
  } = usePageReload(request, ["orders"]);
  const handleAdd = (e) => {
    e.preventDefault();
    get(routes.orders.add.link);
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
      field: "bion_id",
      title: "Bion ID",
      type: "text",
      sortable: true,
      filter: {
        name: "bion_id",
        label: "Bion ID",
        type: "text",
        value: (_b = data == null ? void 0 : data.filter) == null ? void 0 : _b.bion_id
      }
    },
    {
      field: "test_method",
      title: "Analysis requested",
      type: "text",
      sortable: true,
      render: (row) => row.test_method.map((test) => test.name).join(", ")
    },
    {
      field: "status",
      title: "Status",
      type: "text",
      sortable: true,
      filter: {
        name: "status",
        label: "Status",
        type: "select",
        options: [{ value: "sent", label: "Sent" }, { value: "received", label: "Received" }, {
          value: "requested",
          label: "Requested"
        }],
        value: (_c = data == null ? void 0 : data.filter) == null ? void 0 : _c.status
      }
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
    },
    {
      field: "patient_full_name",
      title: "Patient Name",
      type: "text",
      sortable: true,
      filter: {
        name: "patient_full_name",
        label: "Patient Name",
        type: "text",
        value: (_l = data == null ? void 0 : data.filter) == null ? void 0 : _l.patient_full_name
      }
    },
    {
      field: "patient_date_of_birth",
      title: "Patient DOB",
      type: "string",
      sortable: true,
      filter: [
        {
          name: "patient_date_of_birth.from",
          label: "From",
          type: "date",
          value: (_n = (_m = data == null ? void 0 : data.filter) == null ? void 0 : _m.patient_date_of_birth) == null ? void 0 : _n.from,
          inputProps: { max: (_p = (_o = data == null ? void 0 : data.filter) == null ? void 0 : _o.patient_date_of_birth) == null ? void 0 : _p.to }
        },
        {
          name: "patient_date_of_birth.to",
          label: "To",
          type: "date",
          value: (_r = (_q = data == null ? void 0 : data.filter) == null ? void 0 : _q.patient_date_of_birth) == null ? void 0 : _r.to,
          inputProps: { min: (_t = (_s = data == null ? void 0 : data.filter) == null ? void 0 : _s.patient_date_of_birth) == null ? void 0 : _t.from }
        }
      ]
    },
    {
      field: "sent_at",
      title: "Sent At",
      type: "text",
      sortable: true,
      filter: [
        {
          name: "sent_at.from",
          label: "From",
          type: "date",
          value: (_v = (_u = data == null ? void 0 : data.filter) == null ? void 0 : _u.sent_at) == null ? void 0 : _v.from,
          inputProps: { max: (_x = (_w = data == null ? void 0 : data.filter) == null ? void 0 : _w.sent_at) == null ? void 0 : _x.to }
        },
        {
          name: "sent_at.to",
          label: "To",
          type: "date",
          value: (_z = (_y = data == null ? void 0 : data.filter) == null ? void 0 : _y.sent_at) == null ? void 0 : _z.to,
          inputProps: { min: (_B = (_A = data == null ? void 0 : data.filter) == null ? void 0 : _A.sent_at) == null ? void 0 : _B.from }
        }
      ]
    },
    {
      field: "id",
      title: "#",
      type: "actions",
      render: (row) => /* @__PURE__ */ jsx(Stack, { direction: "row", spacing: 1, children: row.status !== "pending" ? /* @__PURE__ */ jsx(
        IconButton,
        {
          href: routes.orders.show.link(row.id),
          color: "success",
          onClick: gotoPage(routes.orders.show.link(row.id)),
          children: /* @__PURE__ */ jsx(RemoveRedEye, {})
        }
      ) : /* @__PURE__ */ jsx(
        IconButton,
        {
          href: routes.orders.edit.link(row.id, row.step),
          color: "warning",
          onClick: gotoPage(routes.orders.edit.link(row.id, row.step)),
          children: /* @__PURE__ */ jsx(Edit, {})
        }
      ) })
    }
  ];
  const handlePage = (e) => {
    e.preventDefault();
    reload();
  };
  return /* @__PURE__ */ jsxs(ClientLayout, { user: auth.user, header: "Orders", children: [
    status && /* @__PURE__ */ jsx(Alert, { children: status }),
    /* @__PURE__ */ jsx(
      PageHeader,
      {
        title: "Orders",
        actions: /* @__PURE__ */ jsx(
          Button,
          {
            variant: "contained",
            onClick: handleAdd,
            href: routes.orders.add.link,
            color: "success",
            startIcon: /* @__PURE__ */ jsx(AddIcon, {}),
            children: "Add"
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(Paper, { sx: { mt: "3em", p: "1rem", overflowX: "auto" }, children: /* @__PURE__ */ jsx(
      TableLayout,
      {
        columns,
        data: ordersData,
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
    /* @__PURE__ */ jsx(Backdrop, { open: processing, sx: { zIndex: (theme) => theme.zIndex.modal + 10 }, children: /* @__PURE__ */ jsx(CircularProgress, {}) })
  ] });
};
export {
  Index as default
};
