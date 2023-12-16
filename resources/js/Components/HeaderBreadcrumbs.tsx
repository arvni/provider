import {Typography} from "@mui/material";
import React, {ReactElement} from "react";

const HeaderBreadcrumbs=({title}:{title:string})=>{
    return <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
        {title}
    </Typography>
}
export default HeaderBreadcrumbs;
