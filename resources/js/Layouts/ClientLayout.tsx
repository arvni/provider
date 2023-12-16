import React, {MouseEventHandler, ReactElement} from "react";
import {
    Dashboard as DashboardIcon,
    Description as DescriptionIcon
} from "@mui/icons-material";

import {ListItemProps} from "@/Components/LayoutDrawer";

import {useChangePage} from "@/services/api";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

interface AuthenticatedLayoutProps{
    children:ReactElement|ReactElement[],
    header:string,
    user:{name:string,email:string},
}
export default function ClientLayout({children, header, user}:AuthenticatedLayoutProps) {
    const {get, processing} = useChangePage();
    const handlePage:MouseEventHandler = (e) => {
        e.preventDefault();
        get(e.currentTarget.getAttribute("href") + "");
    };
    const list: ListItemProps[] = [
        {
            link: route("dashboard"),
            label: "Dashboard",
            icon: <DashboardIcon/>,
            onClick: handlePage
        },
        {
            link: route("orders.index"),
            label: "Orders",
            icon: <DescriptionIcon/>,
            onClick: handlePage
        }
    ];
    return (

        <AuthenticatedLayout header={header} user={user} list={list}>
            {children}
        </AuthenticatedLayout>
    );
}
