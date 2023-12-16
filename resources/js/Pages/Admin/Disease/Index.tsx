import React, {useState} from "react";
import {Alert, Backdrop, Button, CircularProgress, IconButton, Paper} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {Edit} from "@mui/icons-material";
import {Column} from "@/types/table";
import PageHeader from "@/Components/PageHeader";
import TableLayout from "@/Layouts/TableLayout";
import {useGetData, usePageReload} from "@/services/api";
import routes from "@/routes";
import {PageProps} from "@/types";
import AdminLayout from "@/Layouts/AdminLayout";

export interface Disease {
    id: number | null;
    name: string;
    gene:string
}

const Index: React.FC<PageProps> = ({auth, diseases: {data: diseasesData, ...pagination}, status, request}) => {
    const {
        data,
        processing,
        reload,
        onPageSizeChange,
        onOrderByChange,
        onFilterChange,
        onPageChange,
    } = usePageReload(request,["diseases"]);
    const {loading, getData} = useGetData();
    const [disease, setDisease] = useState<Disease>({
        id: null,
        name: "",
        gene:""
    });
    const [openAddForm, setOpenAddForm] = useState(false);

    const handleOpenAddForm = () => setOpenAddForm(true);
    const handleCloseAddForm = () => {
        setOpenAddForm(false);
        resetDisease();
    };

    const resetDisease = () => {
        setDisease({
            id: null,
            name: "",
            gene:""
        });
    };

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
            field: "name",
            title: "Disease Name",
            type: "text",
            filter: {
                name: "diseaseName",
                label: "Disease Name",
                type: "text",
                value: data?.filter?.diseaseName
            },
            sortable: true,
        },
        {
            field: "gene",
            title: "Gene",
            type: "text",
            sortable: true,
            filter: {
                name: "gene",
                label: "Gene",
                type: "text",
                value: data?.filter?.gene
            },
        },
        {
            field: "id",
            title: "#",
            type: "actions",
            render: (row) => <IconButton onClick={handleEdit(row.id)}><Edit/></IconButton>
        }
    ];

    const handleEdit = (id: number) => () => {
        getData<Disease>(routes.diseases.show.link(id))
            .then(res => setDisease(res.data))
            .then(handleOpenAddForm);
    };


    const handlePage = (e: SubmitEvent) => {
        e.preventDefault();
        reload();
    };

    return (
        <AdminLayout user={auth.user} header="Diseases">
            {status && <Alert>{status}</Alert>}
            <PageHeader
                title="Diseases"
                actions={
                    <Button variant="contained" onClick={handleOpenAddForm} color="success" startIcon={<AddIcon/>}>
                        Add
                    </Button>
                }
            />
            <Paper sx={{mt: "3em", p: "1rem"}}>
                <TableLayout
                    columns={columns}
                    data={diseasesData}
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
                        page: data?.page??1,
                        filter: data?.filter
                    }}
                    pageSize={{
                        defaultValue: data?.pageSize ?? 10,
                        onChange: onPageSizeChange
                    }}
                />
            </Paper>
            <Backdrop open={loading}>
                <CircularProgress/>
            </Backdrop>
        </AdminLayout>
    );
};

export default Index;
