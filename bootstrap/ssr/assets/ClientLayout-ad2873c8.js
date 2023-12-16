import { a as jsx } from "../ssr.js";
import { Dashboard, Description } from "@mui/icons-material";
import { d as useChangePage } from "./api-dec76595.js";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-6a68e165.js";
function ClientLayout({ children, header, user }) {
  const { get, processing } = useChangePage();
  const handlePage = (e) => {
    e.preventDefault();
    get(e.currentTarget.getAttribute("href") + "");
  };
  const list = [
    {
      link: route("dashboard"),
      label: "Dashboard",
      icon: /* @__PURE__ */ jsx(Dashboard, {}),
      onClick: handlePage
    },
    {
      link: route("orders.index"),
      label: "Orders",
      icon: /* @__PURE__ */ jsx(Description, {}),
      onClick: handlePage
    }
  ];
  return /* @__PURE__ */ jsx(AuthenticatedLayout, { header, user, list, children });
}
export {
  ClientLayout as C
};
