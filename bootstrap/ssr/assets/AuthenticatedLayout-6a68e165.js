import { a as jsx, j as jsxs } from "../ssr.js";
import React__default, { createElement, useEffect } from "react";
import { Head } from "@inertiajs/react";
import { Typography, Menu, MenuItem, Divider, Stack, styled, AppBar as AppBar$1, Toolbar, IconButton, Drawer as Drawer$1, List, ListItemButton, ListItemIcon, ListItemText, Link, Dialog, DialogTitle, DialogContent, Box, Grid, Button, ThemeProvider, CssBaseline, Backdrop, CircularProgress, createTheme } from "@mui/material";
import { Menu as Menu$1, Person2Rounded, Password, DoorBack, ChevronLeft } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { a as useSubmitForm, d as useChangePage } from "./api-dec76595.js";
import { r as routes } from "./routes-8c429669.js";
import { g as changePasswordValidator } from "./validate-e99249ca.js";
import { P as PasswordField } from "./PasswordField-8ab16d4d.js";
const HeaderBreadcrumbs = ({ title }) => {
  return /* @__PURE__ */ jsx(Typography, { component: "h1", variant: "h6", color: "inherit", noWrap: true, sx: { flexGrow: 1 }, children: title });
};
const UserMenuList = ({ anchorEl, openMenu, handleClose, headerTitle, menuItems }) => {
  return /* @__PURE__ */ jsxs(
    Menu,
    {
      id: "basic-menu",
      anchorEl,
      open: openMenu,
      onClose: handleClose,
      MenuListProps: {
        "aria-labelledby": "basic-button"
      },
      children: [
        /* @__PURE__ */ jsx(MenuItem, { children: headerTitle }),
        /* @__PURE__ */ jsx(Divider, {}),
        menuItems.map((item, index) => /* @__PURE__ */ jsx(MenuItem, { onClick: item.onClick, children: /* @__PURE__ */ jsxs(Stack, { alignItems: "center", justifyContent: "start", spacing: 1, direction: "row", children: [
          item.icon,
          /* @__PURE__ */ jsx("span", { children: item.label })
        ] }) }, index))
      ]
    }
  );
};
const AppBar = styled(AppBar$1, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  }
}));
const Header = ({ setOpen, open, user, handleOpenChangePassword, handleLogout, headerTitle }) => {
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const [anchorEl, setAnchorEl] = React__default.useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const userMenuList = [
    {
      label: "Change Password",
      onClick: handleOpenChangePassword,
      icon: /* @__PURE__ */ jsx(Password, {})
    },
    {
      label: "Logout",
      onClick: handleLogout,
      icon: /* @__PURE__ */ jsx(DoorBack, {})
    }
  ];
  return /* @__PURE__ */ jsx(AppBar, { position: "absolute", open, children: /* @__PURE__ */ jsxs(Toolbar, { sx: {
    pr: "24px"
    // keep right padding when drawer closed
  }, children: [
    /* @__PURE__ */ jsx(
      IconButton,
      {
        edge: "start",
        color: "inherit",
        "aria-label": "open drawer",
        onClick: toggleDrawer,
        sx: {
          marginRight: "36px",
          ...open && { display: "none" }
        },
        children: /* @__PURE__ */ jsx(Menu$1, {})
      }
    ),
    /* @__PURE__ */ jsx(HeaderBreadcrumbs, { title: headerTitle }),
    /* @__PURE__ */ jsx(IconButton, { color: "inherit", onClick: handleClick, children: /* @__PURE__ */ jsx(Person2Rounded, {}) }),
    /* @__PURE__ */ jsx(
      UserMenuList,
      {
        anchorEl,
        handleClose,
        headerTitle: user.name,
        openMenu,
        menuItems: userMenuList
      }
    )
  ] }) });
};
const Header$1 = Header;
const ListItem = (props) => {
  return /* @__PURE__ */ jsxs(ListItemButton, { href: props.link, onClick: props.onClick, children: [
    /* @__PURE__ */ jsx(ListItemIcon, { children: props.icon }),
    /* @__PURE__ */ jsx(ListItemText, { primary: props.label })
  ] });
};
const Drawer = styled(Drawer$1, { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    "& .MuiDrawer-paper": {
      position: "relative",
      whiteSpace: "nowrap",
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      }),
      boxSizing: "border-box",
      ...!open && {
        overflowX: "hidden",
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up("sm")]: {
          width: theme.spacing(9)
        }
      }
    }
  })
);
const LayoutDrawer = ({
  open,
  setOpen,
  list = []
}) => {
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return /* @__PURE__ */ jsxs(Drawer, { variant: "permanent", open, children: [
    /* @__PURE__ */ jsx(Toolbar, { sx: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      px: [1]
    }, children: /* @__PURE__ */ jsx(IconButton, { onClick: toggleDrawer, children: /* @__PURE__ */ jsx(ChevronLeft, {}) }) }),
    /* @__PURE__ */ jsx(Divider, {}),
    /* @__PURE__ */ jsxs(List, { component: "nav", children: [
      list.map((item, index) => /* @__PURE__ */ createElement(ListItem, { ...item, key: index })),
      /* @__PURE__ */ jsx(Divider, { sx: { my: 1 } })
    ] })
  ] });
};
const LayoutDrawer$1 = LayoutDrawer;
const Copyright = (props) => {
  return /* @__PURE__ */ jsxs(Typography, { variant: "body2", color: "text.secondary", align: "center", ...props, children: [
    "Copyright © ",
    /* @__PURE__ */ jsx(Link, { color: "inherit", href: {}.BRAND_LINK, children: {}.BRAND }),
    " ",
    (/* @__PURE__ */ new Date()).getFullYear(),
    "."
  ] });
};
const Copyright$1 = Copyright;
const ChangePasswordForm = ({
  open,
  onClose,
  user = void 0
}) => {
  const {
    data,
    reset,
    submit,
    processing,
    clearErrors,
    setError,
    errors,
    handleChange
  } = useSubmitForm(
    {
      current_password: "",
      password: "",
      password_confirmation: "",
      _method: "put"
    },
    (user == null ? void 0 : user.id) ? routes.users.updatePassword.link(user.id) : routes.passwordUpdate.link
  );
  useEffect(() => {
    reset();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    clearErrors();
    if (changePasswordValidator(data, setError, user))
      submit({ onSuccess: () => onClose() });
  };
  return /* @__PURE__ */ jsxs(Dialog, { open, onClose, children: [
    /* @__PURE__ */ jsxs(DialogTitle, { children: [
      "Change ",
      /* @__PURE__ */ jsx("strong", { children: user == null ? void 0 : user.name }),
      " Password"
    ] }),
    /* @__PURE__ */ jsx(DialogContent, { children: /* @__PURE__ */ jsx(
      Box,
      {
        component: "form",
        onSubmit: handleSubmit,
        method: "post",
        action: routes.passwordUpdate.link,
        sx: { pt: "1em" },
        children: /* @__PURE__ */ jsxs(Grid, { container: true, direction: "column", spacing: 2, alignItems: "center", justifyContent: "center", children: [
          !user && /* @__PURE__ */ jsx(Grid, { item: true, sx: { width: "100%" }, children: /* @__PURE__ */ jsx(
            PasswordField,
            {
              fullwidth: true,
              name: "current_password",
              label: "Current Password",
              value: data.current_password,
              error: errors.hasOwnProperty("current_password"),
              helperText: errors.current_password,
              autoComplete: "current",
              onChange: handleChange
            }
          ) }),
          /* @__PURE__ */ jsx(Grid, { item: true, sx: { width: "100%" }, children: /* @__PURE__ */ jsx(
            PasswordField,
            {
              name: "password",
              label: "New Password",
              value: data.password,
              error: errors.hasOwnProperty("password"),
              helperText: errors.password,
              autoComplete: "password",
              fullwidth: true,
              onChange: handleChange
            }
          ) }),
          /* @__PURE__ */ jsx(Grid, { item: true, sx: { width: "100%" }, children: /* @__PURE__ */ jsx(
            PasswordField,
            {
              name: "password_confirmation",
              label: "Password Confirmation",
              type: "password",
              value: data.password_confirmation,
              error: errors.hasOwnProperty("password_confirmation"),
              helperText: errors.password_confirmation,
              autoComplete: "password_confirmation",
              fullwidth: true,
              onChange: handleChange
            }
          ) }),
          /* @__PURE__ */ jsxs(
            Grid,
            {
              item: true,
              sx: {
                justifyContent: "space-between",
                width: "100%",
                display: "flex",
                alignItems: "center"
              },
              children: [
                /* @__PURE__ */ jsx(Button, { onClick: onClose, children: "Cancel" }),
                /* @__PURE__ */ jsx(
                  LoadingButton,
                  {
                    loading: processing,
                    variant: "contained",
                    type: "submit",
                    children: "Submit"
                  }
                )
              ]
            }
          )
        ] })
      }
    ) })
  ] });
};
const ChangePasswordForm$1 = ChangePasswordForm;
const defaultTheme = createTheme();
const drawerWidth = 240;
function AuthenticatedLayout({ children, header, user, list }) {
  const { get, processing } = useChangePage();
  const [open, setOpen] = React__default.useState(true);
  const [openChangePasswordForm, setOpenChangePasswordForm] = React__default.useState(false);
  const handleOpenChangePasswordForm = () => {
    setOpenChangePasswordForm(true);
  };
  const handleCloseChangePasswordForm = () => {
    setOpenChangePasswordForm(false);
  };
  const handleLogout = () => {
    get(routes.logout.link);
  };
  return /* @__PURE__ */ jsxs(ThemeProvider, { theme: defaultTheme, children: [
    /* @__PURE__ */ jsx(Head, { title: header }),
    /* @__PURE__ */ jsxs(Box, { sx: { display: "flex" }, children: [
      /* @__PURE__ */ jsx(CssBaseline, {}),
      /* @__PURE__ */ jsx(
        Header$1,
        {
          open,
          setOpen,
          user,
          handleLogout,
          handleOpenChangePassword: handleOpenChangePasswordForm,
          headerTitle: header
        }
      ),
      /* @__PURE__ */ jsx(LayoutDrawer$1, { open, setOpen, list }),
      /* @__PURE__ */ jsxs(
        Box,
        {
          component: "main",
          sx: {
            backgroundColor: (theme) => theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto"
          },
          children: [
            /* @__PURE__ */ jsx(Toolbar, {}),
            /* @__PURE__ */ jsxs(Box, { sx: { m: 4 }, children: [
              children,
              /* @__PURE__ */ jsx(Copyright$1, { sx: { pt: 4 } })
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx(ChangePasswordForm$1, { open: openChangePasswordForm, onClose: handleCloseChangePasswordForm }),
    /* @__PURE__ */ jsx(Backdrop, { open: processing, sx: { zIndex: defaultTheme.zIndex.modal + 10 }, children: /* @__PURE__ */ jsxs(Stack, { direction: "column", justifyContent: "center", spacing: 2, children: [
      /* @__PURE__ */ jsx(CircularProgress, {}),
      /* @__PURE__ */ jsx(Typography, { children: "Loading..." })
    ] }) })
  ] });
}
export {
  AuthenticatedLayout as A,
  ChangePasswordForm$1 as C
};
