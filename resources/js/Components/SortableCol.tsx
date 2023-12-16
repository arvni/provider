import {EventHandler, MouseEventHandler} from "react";
import {SortableColParams} from "../types/table";
import {Button, colors, IconButton, Stack, TableSortLabel, Typography} from "@mui/material";
import {ArrowDownward, ArrowUpward, MobiledataOffOutlined} from "@mui/icons-material";

enum OrderType {desc, asc}

const SortableCol = ({title, field, onClick, currentOrder}: SortableColParams) => {
    const handleClick: MouseEventHandler = (e) => {
        e.preventDefault();
        onClick(field, field !== currentOrder?.field ? "asc" : (currentOrder?.type === "asc" ? "desc" : "asc"))
    }
    return <a style={{
        color: field === currentOrder?.field ? "#0bf" : "#000",
        display: "flex",
        flexDirection: "row-reverse",
        fontSize: "14px !important",
        justifyContent: "center",
        fontWeight: "bold",
        cursor: "pointer"
    }} onClick={handleClick}>
        <TableSortLabel direction={currentOrder?.type ?? "asc"} active={field === currentOrder?.field}/>
        <Typography fontSize={"14px"} fontWeight={"bold"}>{title}</Typography>
    </a>;
}

export default SortableCol;
