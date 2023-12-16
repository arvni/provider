import {PropsWithChildren} from 'react';
import {Grid} from "@mui/material";

export default function GuestLayout({children}: PropsWithChildren) {

    return (
        <Grid container alignContent={"center"} justifyItems={"center"} alignItems={"center"} direction={"column"}
              justifyContent={"center"} sx={{minHeight:"100vh"}}>
            <Grid item xs={12}>
                {children}
            </Grid>
        </Grid>
    );
}
