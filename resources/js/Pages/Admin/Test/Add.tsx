import React from "react";
import {Paper} from "@mui/material";
import {PageProps} from "@/types";
import PageHeader from "@/Components/PageHeader";
import AddForm from "./Components/AddForm";
import {SampleType} from "@/types/test";
import AdminLayout from "@/Layouts/AdminLayout";


const Add: React.FC<PageProps & { sampleTypes: SampleType[] }> = ({auth, sampleTypes}: PageProps & {
    sampleTypes: SampleType[]
}) => {
    return (
        <AdminLayout user={auth.user} header="Tests">
            <PageHeader title={"Add Test"}/>
            <Paper sx={{p: "1em", mt: "1em"}}>
                <AddForm sampleTypes={sampleTypes}/>
            </Paper>
        </AdminLayout>
    );
}
export default Add;
