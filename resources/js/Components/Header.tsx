import React, {MouseEventHandler, ReactElement} from "react";
import {
    Badge,
    IconButton,
    styled,
    Toolbar,
    AppBar as MuiAppBar,
} from "@mui/material";
import {
    DoorBack,
    Menu as MenuIcon,
    Notifications as NotificationsIcon,
    Password,
    Person2Rounded
} from "@mui/icons-material";
import {AppBarProps as MuiAppBarProps} from "@mui/material/AppBar/AppBar";
import HeaderBreadcrumbs from "./HeaderBreadcrumbs";
import {drawerWidth} from "@/Layouts/AuthenticatedLayout";
import UserMenuList from "./UserMenuList";

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}


const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({theme, open}) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

interface HeaderProps {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    open: boolean,
    user: { name: string },
    handleOpenChangePassword: MouseEventHandler,
    handleLogout: MouseEventHandler,
    headerTitle: string
}

const Header = ({setOpen, open, user, handleOpenChangePassword, handleLogout, headerTitle}: HeaderProps) => {

    const toggleDrawer = () => {
        setOpen(!open);
    };

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const openMenu = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const userMenuList = [
        {
            label: "Change Password",
            onClick: handleOpenChangePassword,
            icon: <Password/>
        },
        {
            label: "Logout",
            onClick: handleLogout,
            icon: <DoorBack/>
        }
    ];

    return <AppBar position="absolute" open={open}>
        <Toolbar sx={{
            pr: '24px', // keep right padding when drawer closed
        }}>
            <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                sx={{
                    marginRight: '36px',
                    ...(open && {display: 'none'}),
                }}
            >
                <MenuIcon/>
            </IconButton>
            <HeaderBreadcrumbs title={headerTitle}/>
            {/*<IconButton color="inherit">*/}
            {/*    <Badge badgeContent={4} color="secondary">*/}
            {/*        <NotificationsIcon/>*/}
            {/*    </Badge>*/}
            {/*</IconButton>*/}
            <IconButton color="inherit" onClick={handleClick}>
                <Person2Rounded/>
            </IconButton>
            <UserMenuList anchorEl={anchorEl} handleClose={handleClose} headerTitle={user.name} openMenu={openMenu}
                          menuItems={userMenuList}/>
        </Toolbar>
    </AppBar>
}
export default Header;
