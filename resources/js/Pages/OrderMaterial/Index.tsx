import React, { useState} from "react";
import {Button, CircularProgress, Paper, Backdrop, Alert} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {Column} from "@/types/table";
import PageHeader from "@/Components/PageHeader";
import AddForm from "./Components/AddForm";
import TableLayout from "../../Layouts/TableLayout";
import {useGetData, usePageReload} from "@/services/api";
import {PageProps, User} from "@/types";
import ClientLayout from "@/Layouts/ClientLayout";

interface OrderMaterial {
    id?: number | null;
    material: string;
    quantity: number ;
    user?: User | null;
    created_at?: string
}

const Index: React.FC<PageProps> = ({auth, orderMaterials: {data: orderMaterialsData, ...pagination}, status, request}) => {
    const {
        data,
        processing,
        reload,
        onPageSizeChange,
        onOrderByChange,
        onFilterChange,
        onPageChange
    } = usePageReload(request, ["orderMaterials"]);
    const {loading, getData} = useGetData();
    const [orderMaterial, setOrderMaterial] = useState<OrderMaterial>({
        material: "",
        quantity: 0,
    });
    const [openAddForm, setOpenAddForm] = useState(false);

    const handleOpenAddForm = () => setOpenAddForm(true);
    const handleCloseAddForm = () => {
        setOpenAddForm(false);
        resetOrderMaterial();
    };

    const resetOrderMaterial = () => {
        setOrderMaterial({
            id: null,
            material: "",
            quantity: 0,
            user: null,
        });
    };

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
            field: "material",
            title: "Material",
            type: "text",
            filter: {
                name: "orderMaterialName",
                label: "Material",
                type: "text",
                value: data?.filter?.orderMaterialName
            },
            sortable: true,
        },
        {
            field: "userName",
            title: "User",
            type: "text",
            sortable: true,
            filter: {
                name: "userName",
                label: "User",
                type: "text",
                value: data?.filter?.userName
            },
        },
        {
            field: "quantity",
            title: "Quantity",
            type: "number",
            sortable: true,
            render: (row) => Number.parseInt(row.balance).toString()
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
        }
    ];


    const handlePage = (e: SubmitEvent) => {
        e.preventDefault();
        reload();
    };

    return (
        <ClientLayout user={auth.user} header="Materials Order ">
            {status && <Alert>{status}</Alert>}
            <PageHeader
                title=" Materials Order"
                actions={
                    <Button variant="contained" onClick={handleOpenAddForm} color="success" startIcon={<AddIcon/>}>
                        Add
                    </Button>
                }
            />
            {openAddForm && <AddForm open={openAddForm} onClose={handleCloseAddForm} defaultValue={orderMaterial}/>}
            <Paper sx={{mt: "3em", p: "1rem"}}>
                <TableLayout
                    columns={columns}
                    data={orderMaterialsData}
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
            <Backdrop open={loading}>
                <CircularProgress/>
            </Backdrop>
        </ClientLayout>
    );
};

export default Index;
