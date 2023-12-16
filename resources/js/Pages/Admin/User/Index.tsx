import React, {useState} from "react";
import {Alert, Backdrop, Button, CircularProgress, IconButton, Paper, Stack} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {Edit, PasswordOutlined} from "@mui/icons-material";
import {Column} from "@/types/table";
import PageHeader from "@/Components/PageHeader";
import AddForm from "./Components/AddForm";
import TableLayout from "@/Layouts/TableLayout";
import {useGetData, usePageReload} from "@/services/api";
import routes from "@/routes";
import {PageProps, User} from "@/types";
import ChangePasswordForm from "@/Components/ChangePasswordForm";
import AdminLayout from "@/Layouts/AdminLayout";

const defaultUser: User = {
    id: undefined,
    name: "",
    userName: "",
    email: "",
    mobile: "",
    meta: {
        contact: {
            address: "",
            city: "",
            country: "",
            phone: "",
        },
        billing: {
            name: "",
            email: "",
            phone: "",
            country: "",
            address: "",
            state: "",
            city: "",
            zip: ""
        }
    },
    active: true,
    password: ""
}

const Index: React.FC<PageProps> = ({auth, users: {data: usersData, ...pagination}, status, request}) => {
    const {
        data,
        processing,
        reload,
        onPageSizeChange,
        onOrderByChange,
        onFilterChange,
        onPageChange
    } = usePageReload(request, ["users"]);
    const {loading, getData} = useGetData();
    const [user, setUser] = useState<User>(defaultUser);
    const [openAddForm, setOpenAddForm] = useState(false);
    const [openChangePasswordForm, setOpenChangePasswordForm] = useState(false);

    const handleOpenAddForm = () => setOpenAddForm(true);
    const handleOpenChangePasswordForm = (user: User) => () => {
        setUser(user);
        setOpenChangePasswordForm(true);
    }
    const handleCloseChangePasswordForm = () => {
        resetUser();
        setOpenChangePasswordForm(false);
    }
    const handleCloseAddForm = () => {
        setOpenAddForm(false);
        resetUser();
    };

    const resetUser = () => {
        setUser(defaultUser);
    };

    const columns: Column[] = [
        {
            field: "id",
            title: "ID",
            type: "text",
            sortable: true,
            width: "100px",
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
            title: "Name",
            type: "text",
            filter: {
                name: "name",
                label: "Name",
                type: "text",
                value: data?.filter?.name
            },
            sortable: true,
        },
        {
            field: "userName",
            title: "userName",
            type: "text",
            filter: {
                name: "userName",
                label: "userName",
                type: "text",
                value: data?.filter?.userName
            },
            sortable: true,
        },
        {
            field: "email",
            title: "Email",
            type: "email",
            filter: {
                name: "email",
                label: "Email",
                type: "text",
                value: data?.filter?.email
            },
            sortable: true,
        },
        {
            field: "mobile",
            title: "Mobile",
            type: "mobile",
            filter: {
                name: "mobile",
                label: "Mobile",
                type: "text",
                value: data?.filter?.mobile
            },
            sortable: true,
        },
        {
            field: "id",
            title: "#",
            type: "actions",
            render: (row: Record<keyof User, any>) => <Stack direction="row" spacing={1}>
                <IconButton onClick={handleEdit(row.id)}><Edit/></IconButton>
                <IconButton onClick={handleOpenChangePasswordForm(row)}><PasswordOutlined/></IconButton>
            </Stack>
        }
    ];

    const handleEdit = (id: number) => () => {
        getData<User>(routes.users.show.link(id))
            .then((res) => setUser(res.data))
            .then(handleOpenAddForm);
    };


    const handlePage = (e: SubmitEvent) => {
        e.preventDefault();
        reload();
    };

    return (
        <AdminLayout user={auth.user} header="Users">
            {status && <Alert>{status}</Alert>}
            <PageHeader
                title="Users"
                actions={
                    <Button variant="contained" onClick={handleOpenAddForm} color="success" startIcon={<AddIcon/>}>
                        Add
                    </Button>
                }
            />
            {openAddForm && <AddForm open={openAddForm} onClose={handleCloseAddForm} defaultValue={user}/>}
            <Paper sx={{mt: "3em", p: "1rem"}}>
                <TableLayout
                    columns={columns}
                    data={usersData}
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
            <ChangePasswordForm open={openChangePasswordForm} onClose={handleCloseChangePasswordForm} user={user}/>
        </AdminLayout>
    );
};

export default Index;
