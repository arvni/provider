import React, {MouseEventHandler} from "react";
import {Button, CircularProgress, IconButton, Paper, Backdrop, Alert, Stack} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {Edit as EditIcon} from "@mui/icons-material";
import {Column} from "@/types/table";
import PageHeader from "@/Components/PageHeader";
import TableLayout from "@/Layouts/TableLayout";
import { usePageReload} from "@/services/api";
import routes from "@/routes";
import {PageProps} from "@/types";
import DeleteButton from "@/Components/DeleteButton";
import AdminLayout from "@/Layouts/AdminLayout";


const Index: React.FC<PageProps> = ({auth, tests: {data: testsData, ...pagination}, status}) => {
    const {
        data,
        processing,
        reload,
        onFilterChange,
        onPageChange,
        onPageSizeChange,
        onOrderByChange,
        get
    } = usePageReload({},["tests"]);

    const handleAdd:MouseEventHandler = (e) => {
        e.preventDefault();
        get(routes.tests.add.link)
    };

    const gotoPage = (url: string):MouseEventHandler => (e) => {
        e.preventDefault();
        get(url);
    }

    const columns: Column[] = [
        {
            field: "id",
            title: "ID",
            type: "text",
            sortable: true,
            width:"70px",
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
            field: "name",
            title: "Test Name",
            type: "text",
            filter: {
                name: "testName",
                label: "Test Name",
                type: "text",
                value: data?.filter?.testName
            },
            sortable: true,
        },
        {
            field: "code",
            title: "Test Code",
            type: "text",
            sortable: true,
            filter: {
                name: "code",
                label: "Test Code",
                type: "text",
                value: data?.filter?.code
            },
        },
        {
            field: "shortName",
            title: "Test Short",
            type: "text",
            sortable: true,
            filter: {
                name: "shortName",
                label: "Short Name",
                type: "text",
                value: data?.filter?.shortName
            },
        },
        {
            field: "id",
            title: "#",
            type: "actions",
            render: (row) => <Stack direction={"row"} spacing={1}>
                <IconButton href={routes.tests.edit.link(row.id)} color={"warning"}
                            onClick={gotoPage(routes.tests.edit.link(row.id))}>
                    <EditIcon/>
                </IconButton>
                <DeleteButton url={routes.tests.delete.link(row.id)}/>
            </Stack>
        }
    ];

    const handlePage = (e: SubmitEvent) => {
        e.preventDefault();
        reload();
    };
    return (
        <AdminLayout user={auth.user} header="Tests">
            {status && <Alert>{status}</Alert>}
            <PageHeader
                title="Tests"
                actions={
                    <Button variant="contained" onClick={handleAdd} href={routes.tests.add.link} color="success"
                            startIcon={<AddIcon/>}>
                        Add
                    </Button>
                }
            />
            <Paper sx={{mt: "3em", p: "1rem"}}>
                <TableLayout
                    columns={columns}
                    data={testsData}
                    onPageChange={onPageChange}
                    pagination={pagination}
                    onFilterChange={onFilterChange}
                    onFilter={handlePage}
                    filter
                    onOrderByChange={onOrderByChange}
                    loading={processing}
                    tableModel={{orderBy: {field: "id", type: "asc"}, ...data}}
                    pageSize={{defaultValue: data.pageSize ?? 10, onChange: onPageSizeChange}}
                />
            </Paper>
            <Backdrop open={processing} sx={{zIndex: theme => theme.zIndex.modal + 10}}>
                <CircularProgress/>
            </Backdrop>
        </AdminLayout>
    );
};

export default Index;
