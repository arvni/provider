import React from "react";
import {Paper} from "@mui/material";
import PageHeader from "@/Components/PageHeader";
import AddForm from "./Components/AddForm";
import {SampleType, Test} from "@/types/test";
import AdminLayout from "@/Layouts/AdminLayout";


const Edit = ({auth,test,sampleTypes }:{auth:{user:any},test:Test,sampleTypes:SampleType[]}) => {
    return (
        <AdminLayout user={auth.user} header={`Edit ${test.name} Test`}>
            <PageHeader title={`Edit ${test.name} Test`}/>
            <Paper sx={{p: "1em", mt: "1em"}}>
                <AddForm defaultValue={test} sampleTypes={sampleTypes}/>
            </Paper>
        </AdminLayout>
    );
}
export default Edit;
