import React from "react";
import {Box, Grid} from "@mui/material";

import FormField from "@/Components/RenderFormField";
import {FormProps} from "@/types/form";
import Actions from "../Components/Actions";


const OneColumnFormLayout = ({
                                 send,
                                 action,
                                 onchange,
                                 children,
                                sx=null,
                                 fields = [],
                                 actions = [],
                             }: FormProps) => {

    return <Box component={"form"} onSubmit={send} method={"post"} action={action} sx={sx} onChange={onchange}>
        <Grid container direction={"column"} spacing={2} alignItems={"center"} justifyContent={"center"}>
            {fields.map((field, index) => <Grid item key={index} sx={{width: "100%"}}>
                <FormField field={field} onchange={onchange}/>
            </Grid>)}
            {children}
            <Grid item xs={12} sx={{width: "100%"}}>
                <Actions actions={actions}/>
            </Grid>
        </Grid>
    </Box>
}

export default OneColumnFormLayout;
