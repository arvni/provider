import React, {useState} from "react";
import {Alert, Backdrop, Button, CircularProgress, IconButton, Paper} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {Edit} from "@mui/icons-material";
import {Column} from "@/types/table";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import PageHeader from "@/Components/PageHeader";
import AddForm from "./Components/AddForm";
import TableLayout from "@/Layouts/TableLayout";
import {useGetData, usePageReload} from "@/services/api";
import routes from "@/routes";
import {PageProps} from "@/types";
import AdminLayout from "@/Layouts/AdminLayout";

interface SampleType {
    id: number | null;
    name: string;
    sample_id_required:boolean
}

const Index: React.FC<PageProps> = ({auth, sampleTypes: {data: sampleTypesData, ...pagination}, status, request}) => {
    const {
        data,
        processing,
        reload,
        onPageSizeChange,
        onOrderByChange,
        onFilterChange,
        onPageChange
    } = usePageReload(request,["sampleTypes"]);
    const {loading, getData} = useGetData();
    const [sampleType, setSymptom] = useState<SampleType>({
        id: null,
        name: "",
        sample_id_required:false
    });
    const [openAddForm, setOpenAddForm] = useState(false);

    const handleOpenAddForm = () => setOpenAddForm(true);
    const handleCloseAddForm = () => {
        setOpenAddForm(false);
        resetSampleType();
    };

    const resetSampleType = () => {
        setSymptom({
            id: null,
            name: "",
            sample_id_required:false
        });
    };

    const columns: Column[] = [
        {
            field: "id",
            title: "ID",
            type: "text",
            sortable: true,
            width:"100px",
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
            title: "Sample Type Name",
            type: "text",
            filter: {
                name: "sampleTypeName",
                label: "Sample Type Name",
                type: "text",
                value: data?.filter?.sampleTypeName
            },
            sortable: true,
        },
        {
            field: "sample_id_required",
            title: "Sample ID Required",
            type: "boolean",
            sortable: true,
        },
        {
            field: "id",
            title: "#",
            type: "actions",
            render: (row) => <IconButton onClick={handleEdit(row.id)}><Edit/></IconButton>
        }
    ];

    const handleEdit = (id: number) => () => {
        getData<SampleType>(routes.sampleTypes.show.link(id))
            .then((res) => setSymptom(res.data))
            .then(handleOpenAddForm);
    };


    const handlePage = (e: SubmitEvent) => {
        e.preventDefault();
        reload();
    };

    return (
        <AdminLayout user={auth.user} header="Sample Types">
            {status && <Alert>{status}</Alert>}
            <PageHeader
                title="Sample Types"
                actions={
                    <Button variant="contained" onClick={handleOpenAddForm} color="success" startIcon={<AddIcon/>}>
                        Add
                    </Button>
                }
            />
            {openAddForm && <AddForm open={openAddForm} onClose={handleCloseAddForm} defaultValue={sampleType}/>}
            <Paper sx={{mt: "3em", p: "1rem"}}>
                <TableLayout
                    columns={columns}
                    data={sampleTypesData}
                    onPageChange={onPageChange}
                    pagination={pagination}
                    onFilterChange={onFilterChange}
                    onFilter={handlePage}
                    filter
                    onOrderByChange={onOrderByChange}
                    loading={processing}
                    tableModel={{
                        orderBy: data.orderBy ?? {
                            field: "id",
                            type: "asc"
                        },
                        page: data.page,
                        filter: data.filter
                    }}
                    pageSize={{
                        defaultValue: data.pageSize ?? 10,
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
