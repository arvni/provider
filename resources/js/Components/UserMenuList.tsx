import React, {MouseEventHandler} from "react";
import {Divider, Menu, MenuItem, Stack} from "@mui/material";

interface UserMenuListProps{
    anchorEl: null | HTMLElement
    openMenu:boolean
    handleClose:()=>void
    headerTitle:string|null
    menuItems:{
        icon: React.ReactNode
        label:string,
        onClick:MouseEventHandler
    }[]
}
const UserMenuList = ({anchorEl, openMenu, handleClose, headerTitle, menuItems}:UserMenuListProps) => {
    return <Menu id="basic-menu"
                 anchorEl={anchorEl}
                 open={openMenu}
                 onClose={handleClose}
                 MenuListProps={{
                     'aria-labelledby': 'basic-button',
                 }}
    >
        <MenuItem>{headerTitle}</MenuItem>
        <Divider/>
        {menuItems.map((item, index) => <MenuItem key={index} onClick={item.onClick}>
            <Stack alignItems={"center"} justifyContent={"start"} spacing={1} direction={"row"}>
                {item.icon}
                <span>{item.label}</span>
            </Stack>
        </MenuItem>)}
    </Menu>;
}
export default UserMenuList;
