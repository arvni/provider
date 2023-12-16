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

export interface Symptom {
    id: number | null;
    name: string;
    hpo:string;
    symptom_group?:{
        name:string,
        id:number
    }
}

const Index: React.FC<PageProps> = ({auth, symptoms: {data: symptomsData, ...pagination}, status, request}) => {
    const {
        data,
        processing,
        reload,
        onPageSizeChange,
        onOrderByChange,
        onFilterChange,
        onPageChange,
    } = usePageReload(request,["symptoms"]);
    const {loading, getData} = useGetData();
    const [symptom, setSymptom] = useState<Symptom>({
        id: null,
        name: "",
        hpo: "",
        symptom_group: undefined
    });
    const [openAddForm, setOpenAddForm] = useState(false);

    const handleOpenAddForm = () => setOpenAddForm(true);
    const handleCloseAddForm = () => {
        setOpenAddForm(false);
        resetSymptom();
    };

    const resetSymptom = () => {
        setSymptom({
            id: null,
            name: "",
            hpo:"",
            symptom_group: undefined
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
                name: "symptomName",
                label: "Symptom Name",
                type: "text",
                value: data?.filter?.symptomName
            },
            sortable: true,
        },
        {
            field: "hpo",
            title: "HPO ID",
            type: "text",
            filter: {
                name: "hpo",
                label: "HPO ID",
                type: "text",
                value: data?.filter?.hpo
            },
            sortable: true,
        },
        {
            field: "symptom_group_name",
            title: "Symptom Group",
            type: "text",
            sortable: true,
            filter: {
                name: "symptom_group_name",
                label: "Symptom Group",
                type: "text",
                value: data?.filter?.symptom_group_name
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
        getData(routes.symptoms.show.link(id))
            .then(({data}) => setSymptom(data as Symptom))
            .then(handleOpenAddForm);
    };


    const handlePage = (e: SubmitEvent) => {
        e.preventDefault();
        reload();
    };

    return (
        <AdminLayout user={auth.user} header="Symptoms">
            {status && <Alert>{status}</Alert>}
            <PageHeader
                title="Symptoms"
                actions={
                    <Button variant="contained" onClick={handleOpenAddForm} color="success" startIcon={<AddIcon/>}>
                        Add
                    </Button>
                }
            />
            {openAddForm && <AddForm open={openAddForm} onClose={handleCloseAddForm} defaultValue={symptom}/>}
            <Paper sx={{mt: "3em", p: "1rem"}}>
                <TableLayout
                    columns={columns}
                    data={symptomsData}
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
