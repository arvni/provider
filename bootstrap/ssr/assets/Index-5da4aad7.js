import { j as jsxs, a as jsx, F as Fragment } from "../ssr.js";
import { useState } from "react";
import { Alert, Button, Paper, List, ListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction, ButtonGroup, IconButton, Backdrop, CircularProgress } from "@mui/material";
import AddIcon from "@mui/icons-material/Add.js";
import { P as PageHeader } from "./PageHeader-18477345.js";
import AddForm from "./AddForm-84a76b4e.js";
import { u as useGetData } from "./api-dec76595.js";
import { r as routes } from "./routes-8c429669.js";
import { ArrowUpward, ArrowDownward, Edit } from "@mui/icons-material";
import { A as AdminLayout } from "./AdminLayout-4b60cad8.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
import "./Actions-f382200a.js";
import "@mui/lab";
import "./validate-e99249ca.js";
import "validator";
import "axios";
import "./AuthenticatedLayout-6a68e165.js";
import "./PasswordField-8ab16d4d.js";
const Index = ({ auth, consents, status }) => {
  const [data, setData] = useState(consents);
  const { loading, getData } = useGetData();
  const [edit, setEdit] = useState(false);
  const [consent, setConsent] = useState({
    order: void 0,
    title: "",
    body: "",
    questions: []
  });
  const [openAddForm, setOpenAddForm] = useState(false);
  const handleOpenAddForm = () => setOpenAddForm(true);
  const handleCloseAddForm = () => {
    setOpenAddForm(false);
    resetConsent();
  };
  const resetConsent = () => {
    setConsent({
      order: void 0,
      title: "",
      body: "",
      questions: []
    });
  };
  const handleEdit = (id) => () => {
    if (id)
      getData(routes.consents.show.link(id)).then((res) => setConsent(res.data)).then(handleOpenAddForm);
  };
  const handleUp = (id) => () => {
    setData((prevState) => {
      let index = findConsentIndex(id);
      if (index > 0) {
        let tmp = prevState[index - 1];
        prevState[index - 1] = { ...prevState[index], order: index - 1 };
        prevState[index] = { ...tmp, order: index };
      }
      return prevState;
    });
  };
  const handleDown = (id) => () => {
    let index = findConsentIndex(id);
    console.log(index);
    setData((prevState) => {
      if (index < prevState.length - 1) {
        let tmp = prevState[index + 1];
        prevState[index + 1] = { ...prevState[index], order: index + 1 };
        prevState[index] = { ...tmp, order: index };
      }
      return prevState.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
    });
  };
  const findConsentIndex = (id) => data.findIndex((item) => item.id == id);
  return /* @__PURE__ */ jsxs(AdminLayout, { user: auth.user, header: "Consents", children: [
    status && /* @__PURE__ */ jsx(Alert, { children: status }),
    /* @__PURE__ */ jsx(
      PageHeader,
      {
        title: "Consents",
        actions: [
          /* @__PURE__ */ jsx(Button, { variant: "contained", onClick: handleOpenAddForm, color: "success", startIcon: /* @__PURE__ */ jsx(AddIcon, {}), children: "Add" })
        ]
      }
    ),
    openAddForm && /* @__PURE__ */ jsx(AddForm, { open: openAddForm, onClose: handleCloseAddForm, defaultValue: consent }),
    /* @__PURE__ */ jsx(Paper, { sx: { mt: "3em", p: "1rem" }, children: /* @__PURE__ */ jsxs(List, { children: [
      /* @__PURE__ */ jsxs(ListItem, { children: [
        /* @__PURE__ */ jsx(ListItemAvatar, { children: "#" }),
        /* @__PURE__ */ jsx(ListItemText, { children: "Title" }),
        /* @__PURE__ */ jsx(ListItemSecondaryAction, { children: "Action" })
      ] }),
      data.length ? /* @__PURE__ */ jsx(Fragment, { children: data.map((consent2) => /* @__PURE__ */ jsxs(ListItem, { children: [
        edit ? /* @__PURE__ */ jsx(ListItemAvatar, { sx: { cursor: "pointer" }, children: /* @__PURE__ */ jsxs(
          ButtonGroup,
          {
            orientation: "vertical",
            "aria-label": "vertical contained button group",
            variant: "text",
            children: [
              /* @__PURE__ */ jsx(Button, { onClick: handleUp(consent2.id), disabled: !((consent2 == null ? void 0 : consent2.order) ?? 0 > 0), children: /* @__PURE__ */ jsx(ArrowUpward, {}) }),
              /* @__PURE__ */ jsx(Button, { onClick: handleDown(consent2.id), disabled: consent2.order ? (consent2 == null ? void 0 : consent2.order) < data.length - 1 : true, children: /* @__PURE__ */ jsx(ArrowDownward, {}) })
            ]
          }
        ) }) : null,
        /* @__PURE__ */ jsx(ListItemText, { children: consent2.title }),
        /* @__PURE__ */ jsx(ListItemSecondaryAction, { children: /* @__PURE__ */ jsx(IconButton, { onClick: handleEdit(consent2.id), children: /* @__PURE__ */ jsx(Edit, {}) }) })
      ] }, consent2.id)) }) : /* @__PURE__ */ jsx(ListItem, { children: /* @__PURE__ */ jsx(ListItemText, { children: "There is no Data for Show" }) })
    ] }) }),
    /* @__PURE__ */ jsx(Backdrop, { open: loading, children: /* @__PURE__ */ jsx(CircularProgress, {}) })
  ] });
};
export {
  Index as default
};
