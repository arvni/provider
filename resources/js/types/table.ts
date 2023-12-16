import React, {ChangeEventHandler, EventHandler, FormEventHandler, ReactNode} from "react";
import {Field} from "./form";
import {SelectInputProps} from "@mui/material/Select/SelectInput";

export interface Column {
    title: string,
    field: string,
    type?: string,
    render?: (row: Record<string, any>) => string | ReactNode,
    width?: string
    filter?: Field<any> | Field<any>[],
    sortable?: boolean
}

export type OrderType = "asc" | "desc"

export interface SortableColParams {
    title: string,
    field: string,
    onClick: (field: string, type: OrderType) => void,
    currentOrder?: { type: OrderType, field: string }
}

export interface Filter {
    field: string,

    [key: string]: any
}

export interface TableProps {
    columns: Column[],
    data: Record<any, any>,
    loading: boolean,
    filter: boolean,
    onFilter: (e: SubmitEvent) => void,
    onFilterChange: ChangeEventHandler<any>
        & SelectInputProps<any>['onChange'],
    onOrderByChange: (field: string, type: OrderType) => void,
    onPageChange: (event: React.ChangeEvent<unknown>, page: number) => void,
    pageSize?: {
        defaultValue: number,
        onChange: (pageSize: number) => void
    },
    pagination: {
        current_page: number;
        from: number;
        last_page: number;
        per_page: number;
        to: number;
        total: number;
    },
    tableModel: {
        orderBy?: {
            type: OrderType,
            field: string
        },
        page?: number,
        filter?: object
    }
}
