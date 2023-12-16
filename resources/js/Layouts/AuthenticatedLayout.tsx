import React, {MouseEventHandler, ReactElement} from "react";
import {Head} from "@inertiajs/react";
import {
    Backdrop,
    Box, CircularProgress,
    createTheme,
    CssBaseline, Stack,
    ThemeProvider,
    Toolbar,
    Typography
} from "@mui/material";
import {
    Dashboard as DashboardIcon,
    Description as DescriptionIcon
} from "@mui/icons-material";

import Header from "@/Components/Header";
import LayoutDrawer, {ListItemProps} from "@/Components/LayoutDrawer";
import Copyright from "@/Components/Copyright";
import ChangePasswordForm from "@/Components/ChangePasswordForm";


import routes from "@/routes";
import {useChangePage} from "@/services/api";

const defaultTheme = createTheme();
export const drawerWidth: number = 240;
interface AuthenticatedLayoutProps{
    children:ReactElement|ReactElement[],
    header:string,
    user:{name:string,email:string},
    list: ListItemProps[]
}
export default function AuthenticatedLayout({children, header, user,list}:AuthenticatedLayoutProps) {
    const {get, processing} = useChangePage();
    const [open, setOpen] = React.useState(true);
    const [openChangePasswordForm, setOpenChangePasswordForm] = React.useState(false);
    const handlePage:MouseEventHandler = (e) => {
        e.preventDefault();
        get(e.currentTarget.getAttribute("href") + "");
    };

    const handleOpenChangePasswordForm = () => {
        setOpenChangePasswordForm(true);
    }
    const handleCloseChangePasswordForm = () => {
        setOpenChangePasswordForm(false);
    }

    const handleLogout = () => {
        get(routes.logout.link);
    }
    return (
        <ThemeProvider theme={defaultTheme}>
            <Head title={header}/>
            <Box sx={{display: 'flex'}}>
                <CssBaseline/>
                <Header open={open} setOpen={setOpen} user={user} handleLogout={handleLogout}
                        handleOpenChangePassword={handleOpenChangePasswordForm} headerTitle={header}/>
                <LayoutDrawer open={open} setOpen={setOpen} list={list}/>
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    <Toolbar/>
                    <Box sx={{m: 4}}>
                        {children}
                        <Copyright sx={{pt: 4}}/>
                    </Box>
                </Box>
            </Box>
            <ChangePasswordForm open={openChangePasswordForm} onClose={handleCloseChangePasswordForm}/>
            <Backdrop open={processing} sx={{zIndex: defaultTheme.zIndex.modal + 10}}>
                <Stack direction={"column"} justifyContent={"center"} spacing={2}>
                    <CircularProgress/>
                    <Typography>Loading...</Typography>
                </Stack>
            </Backdrop>
        </ThemeProvider>
    );
}
