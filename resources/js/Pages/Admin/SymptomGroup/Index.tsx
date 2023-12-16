import React, {useState} from "react";
import {Alert, Backdrop, Button, CircularProgress, IconButton, Paper} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {Edit} from "@mui/icons-material";
import {Column} from "@/types/table";
import PageHeader from "@/Components/PageHeader";
import AddForm from "./Components/AddForm";
import TableLayout from "@/Layouts/TableLayout";
import {useGetData, usePageReload} from "@/services/api";
import routes from "@/routes";
import {PageProps} from "@/types";
import AdminLayout from "@/Layouts/AdminLayout";

interface SymptomGroup {
    id: number | null;
    name: string;
}

const Index: React.FC<PageProps> = ({auth, symptomGroups: {data: symptomGroupsData, ...pagination}, status, request}) => {
    const {
        data,
        processing,
        reload,
        onPageSizeChange,
        onOrderByChange,
        onFilterChange,
        onPageChange
    } = usePageReload(request,["symptomGroups"]);
    const {loading, getData} = useGetData();
    const [symptomGroup, setSymptom] = useState<SymptomGroup>({
        id: null,
        name: "",
    });
    const [openAddForm, setOpenAddForm] = useState(false);

    const handleOpenAddForm = () => setOpenAddForm(true);
    const handleCloseAddForm = () => {
        setOpenAddForm(false);
        resetSymptomGroup();
    };

    const resetSymptomGroup = () => {
        setSymptom({
            id: null,
            name: "",
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
            title: "Symptom Name",
            type: "text",
            filter: {
                name: "symptomGroupName",
                label: "Symptom Name",
                type: "text",
                value: data?.filter?.symptomGroupName
            },
            sortable: true,
        },
        {
            field: "symptoms_count",
            title: "No. Symptoms",
            type: "number",
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
        getData<SymptomGroup>(routes.symptomGroups.show.link(id))
            .then((res) => setSymptom(res.data))
            .then(handleOpenAddForm);
    };


    const handlePage = (e: SubmitEvent) => {
        e.preventDefault();
        reload();
    };

    return (
        <AdminLayout user={auth.user} header="Symptom Groups">
            {status && <Alert>{status}</Alert>}
            <PageHeader
                title="Symptom Groups"
                actions={
                    <Button variant="contained" onClick={handleOpenAddForm} color="success" startIcon={<AddIcon/>}>
                        Add
                    </Button>
                }
            />
            {openAddForm && <AddForm open={openAddForm} onClose={handleCloseAddForm} defaultValue={symptomGroup}/>}
            <Paper sx={{mt: "3em", p: "1rem"}}>
                <TableLayout
                    columns={columns}
                    data={symptomGroupsData}
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
