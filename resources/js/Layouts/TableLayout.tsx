import React from "react";

import {
    CircularProgress,
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import {Column, TableProps} from "@/types/table";

import Pagination from "../Components/Pagination";
import Filter from "../Components/Filter";
import PageSize from "../Components/PageSize";
import SortableCol from "../Components/SortableCol";

const NoDataMessage = () => <Typography textAlign={"center"}>{"There is No Data to Display"}</Typography>

function renderCell(item: Record<any, any>, col: Column) {
    let value =item[col.field];
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
                         tableModel,
                     }: TableProps) => {

    return <form method={"get"} action={"."} onChange={onFilterChange} style={{width: "100%"}}>
        <Table border={1} size="small">
            <TableHead>
                <TableRow>
                    {columns.map(({title, render = null, sortable, ...rest}, index: number) => (
                        <TableCell  {...rest} key={index} sx={{textAlign: "center", fontWeight: "bold"}}>
                            {sortable ? <SortableCol title={title} field={rest.field} onClick={onOrderByChange}
                                                     currentOrder={tableModel.orderBy}/> : title}
                        </TableCell>))}
                </TableRow>
                {filter && <Filter onChange={onFilterChange} columns={columns}/>}
            </TableHead>
            <TableBody>
                {!loading ? data.length ? data.map((item:Record<any, any>, index:number) => <TableRow key={item.id??index}>
                        {columns.map((col, colIndex) => <TableCell key={colIndex}>
                            {col.render ? col?.render(item) : renderCell(item, col)}
                        </TableCell>)}
                    </TableRow>
                ) : <TableRow>
                    <TableCell colSpan={columns.length}>
                        <NoDataMessage/>
                    </TableCell>
                </TableRow> : <TableRow>
                    <TableCell colSpan={columns.length} align={"center"}>
                        <CircularProgress/>
                    </TableCell>
                </TableRow>}
            </TableBody>
            {pagination && <TableFooter>
                <TableRow>
                    <TableCell colSpan={columns.length-1} align={"center"}>
                        <Pagination onChange={onPageChange} paginate={pagination}/>
                    </TableCell>
                    <TableCell>
                        {pageSize && <PageSize {...pageSize}/>}
                    </TableCell>
                </TableRow>
            </TableFooter>}
        </Table>
    </form>;
}

export default TableLayout;
