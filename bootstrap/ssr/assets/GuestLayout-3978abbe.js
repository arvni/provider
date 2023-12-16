import { a as jsx } from "../ssr.js";
import { Grid } from "@mui/material";
function GuestLayout({ children }) {
  return /* @__PURE__ */ jsx(
    Grid,
    {
      container: true,
      alignContent: "center",
      justifyItems: "center",
      alignItems: "center",
      direction: "column",
      justifyContent: "center",
      sx: { minHeight: "100vh" },
      children: /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, children })
    }
  );
}
export {
  GuestLayout as G
};
