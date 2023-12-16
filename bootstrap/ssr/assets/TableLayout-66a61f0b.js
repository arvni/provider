import { a as jsx, F as Fragment, j as jsxs } from "../ssr.js";
import { createElement } from "react";
import { Pagination as Pagination$1, TableRow, TableCell, Stack, FormControl, InputLabel, Select, MenuItem, TableSortLabel, Typography, Table, TableHead, TableBody, CircularProgress, TableFooter } from "@mui/material";
import { F as FormField } from "./RenderFormField-0820b76c.js";
const Pagination = ({ paginate, onChange }) => {
  return /* @__PURE__ */ jsx(Pagination$1, { page: paginate.current_page, count: paginate.last_page, onChange, sx: { mx: "auto" } });
};
const Filter = ({
  columns,
  onChange
}) => {
  return /* @__PURE__ */ jsx(TableRow, { children: columns.map((col, index) => /* @__PURE__ */ jsx(TableCell, { children: col.filter && /* @__PURE__ */ jsx(Fragment, { children: Array.isArray(col.filter) ? /* @__PURE__ */ jsx(Stack, { spacing: 1.5, direction: "column", children: col.filter.map((column, index2) => /* @__PURE__ */ jsx(
    FormField,
    {
      field: column,
      onchange: onChange
    },
    index2
  )) }) : /* @__PURE__ */ jsx(FormField, { field: col.filter, onchange: onChange }) }) }, index)) });
};
const PageSize = ({ defaultValue = 10, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  return /* @__PURE__ */ jsxs(FormControl, { fullWidth: true, children: [
    /* @__PURE__ */ jsx(InputLabel, { id: "page-size-label", children: "Per Page" }),
    /* @__PURE__ */ jsxs(
      Select,
      {
        labelId: "page-size-label",
        id: "page-size",
        defaultValue,
        label: "Per Page",
        onChange: handleChange,
        children: [
          /* @__PURE__ */ jsx(MenuItem, { value: 10, children: "10" }),
          /* @__PURE__ */ jsx(MenuItem, { value: 20, children: "20" }),
          /* @__PURE__ */ jsx(MenuItem, { value: 50, children: "50" }),
          /* @__PURE__ */ jsx(MenuItem, { value: 100, children: "100" })
        ]
      }
    )
  ] });
};
const SortableCol = ({ title, field, onClick, currentOrder }) => {
  const handleClick = (e) => {
    e.preventDefault();
    onClick(field, field !== (currentOrder == null ? void 0 : currentOrder.field) ? "asc" : (currentOrder == null ? void 0 : currentOrder.type) === "asc" ? "desc" : "asc");
  };
  return /* @__PURE__ */ jsxs("a", { style: {
    color: field === (currentOrder == null ? void 0 : currentOrder.field) ? "#0bf" : "#000",
    display: "flex",
    flexDirection: "row-reverse",
    fontSize: "14px !important",
    justifyContent: "center",
    fontWeight: "bold",
    cursor: "pointer"
  }, onClick: handleClick, children: [
    /* @__PURE__ */ jsx(TableSortLabel, { direction: (currentOrder == null ? void 0 : currentOrder.type) ?? "asc", active: field === (currentOrder == null ? void 0 : currentOrder.field) }),
    /* @__PURE__ */ jsx(Typography, { fontSize: "14px", fontWeight: "bold", children: title })
  ] });
};
const NoDataMessage = () => /* @__PURE__ */ jsx(Typography, { textAlign: "center", children: "There is No Data to Display" });
function renderCell(item, col) {
  let value = item[col.field];
  switch (col.type) {
    case "currency":
      return Number.parseInt(value).toPrecision();
    case "date":
      return Intl.DateTimeFormat(value, {});
    default:
      return value;
  }
}
const TableLayout = ({
  columns,
  data,
  onFilterChange,
  loading,
  onPageChange,
  onOrderByChange,
  pagination,
  filter,
  pageSize,
  tableModel
}) => {
  return /* @__PURE__ */ jsx("form", { method: "get", action: ".", onChange: onFilterChange, style: { width: "100%" }, children: /* @__PURE__ */ jsxs(Table, { border: 1, size: "small", children: [
    /* @__PURE__ */ jsxs(TableHead, { children: [
      /* @__PURE__ */ jsx(TableRow, { children: columns.map(({ title, render = null, sortable, ...rest }, index) => /* @__PURE__ */ createElement(TableCell, { ...rest, key: index, sx: { textAlign: "center", fontWeight: "bold" } }, sortable ? /* @__PURE__ */ jsx(
        SortableCol,
        {
          title,
          field: rest.field,
          onClick: onOrderByChange,
          currentOrder: tableModel.orderBy
        }
      ) : title)) }),
      filter && /* @__PURE__ */ jsx(Filter, { onChange: onFilterChange, columns })
    ] }),
    /* @__PURE__ */ jsx(TableBody, { children: !loading ? data.length ? data.map(
      (item, index) => /* @__PURE__ */ jsx(TableRow, { children: columns.map((col, colIndex) => /* @__PURE__ */ jsx(TableCell, { children: col.render ? col == null ? void 0 : col.render(item) : renderCell(item, col) }, colIndex)) }, item.id ?? index)
    ) : /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, { colSpan: columns.length, children: /* @__PURE__ */ jsx(NoDataMessage, {}) }) }) : /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, { colSpan: columns.length, align: "center", children: /* @__PURE__ */ jsx(CircularProgress, {}) }) }) }),
    pagination && /* @__PURE__ */ jsx(TableFooter, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
      /* @__PURE__ */ jsx(TableCell, { colSpan: columns.length - 1, align: "center", children: /* @__PURE__ */ jsx(Pagination, { onChange: onPageChange, paginate: pagination }) }),
      /* @__PURE__ */ jsx(TableCell, { children: pageSize && /* @__PURE__ */ jsx(PageSize, { ...pageSize }) })
    ] }) })
  ] }) });
};
export {
  TableLayout as T
};
