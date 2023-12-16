import React, {MouseEventHandler} from "react";

import {Button, CircularProgress, IconButton, Paper, Backdrop, Alert, Stack} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {Edit as EditIcon, RemoveRedEye} from "@mui/icons-material";
import {Column} from "@/types/table";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import PageHeader from "@/Components/PageHeader";
import {usePageReload} from "@/services/api";
import routes from "@/routes";
import {PageProps} from "@/types";
import TableLayout from "../../Layouts/TableLayout";
import {Test} from "@/types/test";
import ClientLayout from "@/Layouts/ClientLayout";


const Index: React.FC<PageProps> = ({auth, orders: {data: ordersData, ...pagination}, status, request}) => {
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

    const handleAdd: MouseEventHandler<any> = (e) => {
        e.preventDefault();
        get(routes.orders.add.link)
    };

    const gotoPage = (url: string): MouseEventHandler => (e) => {
        e.preventDefault();
        get(url);
    }

    const columns: Column[] = [
        {
            field: "id",
            title: "ID",
            type: "text",
            sortable: true,
            filter: {
                name: "id",
                label: "ID",
                type: "number",
                value: data?.filter?.id,
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
                value: data?.filter?.bion_id,
            }
        },
        {
            field: "test_method",
            title: "Analysis requested",
            type: "text",
            sortable: true,
            render: (row) => row.test_method.map((test: Partial<Test>) => test.name).join(", ")
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
                options: [{value: "sent", label: "Sent"}, {value: "received", label: "Received"}, {
                    value: "requested",
                    label: "Requested"
                }],
                value: data?.filter?.status
            },
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
                    value: data?.filter?.created_at?.from,
                    inputProps: {max: data?.filter?.created_at?.to}
                },
                {
                    name: "created_at.to",
                    label: "To",
                    type: "date",
                    value: data?.filter?.created_at?.to,
                    inputProps: {min: data?.filter?.created_at?.from}
                }
            ],
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
                value: data?.filter?.patient_full_name,
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
                    value: data?.filter?.patient_date_of_birth?.from,
                    inputProps: {max: data?.filter?.patient_date_of_birth?.to}
                },
                {
                    name: "patient_date_of_birth.to",
                    label: "To",
                    type: "date",
                    value: data?.filter?.patient_date_of_birth?.to,
                    inputProps: {min: data?.filter?.patient_date_of_birth?.from}
                }
            ],
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
                    value: data?.filter?.sent_at?.from,
                    inputProps: {max: data?.filter?.sent_at?.to}
                },
                {
                    name: "sent_at.to",
                    label: "To",
                    type: "date",
                    value: data?.filter?.sent_at?.to,
                    inputProps: {min: data?.filter?.sent_at?.from}
                }
            ],
        },
        {
            field: "id",
            title: "#",
            type: "actions",
            render: (row) => <Stack direction={"row"} spacing={1}>
                {row.status !== "pending" ? <IconButton href={routes.orders.show.link(row.id)} color="success"
                                                        onClick={gotoPage(routes.orders.show.link(row.id))}>
                    <RemoveRedEye/>
                </IconButton> : <IconButton href={routes.orders.edit.link(row.id, row.step)} color={"warning"}
                                            onClick={gotoPage(routes.orders.edit.link(row.id, row.step))}>
                    <EditIcon/>
                </IconButton>}
            </Stack>
        }
    ];

    const handlePage = (e: SubmitEvent) => {
        e.preventDefault();
        reload();
    };
    return (
        <ClientLayout user={auth.user} header="Orders">
            {status && <Alert>{status}</Alert>}
            <PageHeader
                title="Orders"
                actions={
                    <Button variant="contained" onClick={handleAdd} href={routes.orders.add.link} color="success"
                            startIcon={<AddIcon/>}>
                        Add
                    </Button>
                }
            />
            <Paper sx={{mt: "3em", p: "1rem", overflowX: "auto"}}>
                <TableLayout
                    columns={columns}
                    data={ordersData}
                    onPageChange={onPageChange}
                    pagination={pagination}
                    onFilterChange={onFilterChange}
                    onFilter={handlePage}
                    filter
                    onOrderByChange={onOrderByChange}
                    loading={processing}
                    tableModel={{
                        orderBy: data?.orderBy ?? {
                            field: "id",
                            type: "asc"
                        },
                        page: data?.page ?? 1,
                        filter: data?.filter
                    }}
                    pageSize={{
                        defaultValue: data?.pageSize ?? 10,
                        onChange: onPageSizeChange
                    }}
                />
            </Paper>
            <Backdrop open={processing} sx={{zIndex: theme => theme.zIndex.modal + 10}}>
                <CircularProgress/>
            </Backdrop>
        </ClientLayout>
    );
};

export default Index;
