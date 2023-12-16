import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import { IconButton, CircularProgress, Popper, Card, CardContent, Alert, CardActions, Button } from "@mui/material";
import { Delete } from "@mui/icons-material";
import React__default, { useState } from "react";
import { c as useDelete } from "./api-dec76595.js";
const DeleteButton = ({ url, onConfirm }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [anchorEl, setAnchorEl] = React__default.useState(null);
  const { submit, processing: loading } = useDelete();
  const handleOpenDelete = (event) => {
    setAnchorEl(event.currentTarget);
    setShowConfirmation(true);
  };
  const handleCloseDelete = (event) => {
    setAnchorEl(null);
    setShowConfirmation(false);
  };
  const handleDelete = (e) => {
    if (onConfirm)
      onConfirm();
    else if (url)
      submit(url);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(IconButton, { color: "error", onClick: handleOpenDelete, children: loading ? /* @__PURE__ */ jsx(CircularProgress, { size: 25 }) : /* @__PURE__ */ jsx(Delete, {}) }),
    /* @__PURE__ */ jsx(Popper, { open: showConfirmation && !loading, anchorEl, placement: "top-start", modifiers: [{
      name: "arrow",
      enabled: true,
      options: {
        element: anchorEl
      }
    }], sx: { zIndex: (theme) => theme.zIndex.modal + 10 }, children: /* @__PURE__ */ jsxs(Card, { sx: { minWidth: 275 }, children: [
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(Alert, { severity: "warning", children: "Do You Agree With Deleting This ?" }) }),
      /* @__PURE__ */ jsxs(CardActions, { children: [
        /* @__PURE__ */ jsx(Button, { size: "small", onClick: handleDelete, children: "Yes" }),
        /* @__PURE__ */ jsx(Button, { size: "small", onClick: handleCloseDelete, children: "No" })
      ] })
    ] }) })
  ] });
};
export {
  DeleteButton as D
};
