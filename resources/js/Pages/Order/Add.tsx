import React, {FormEventHandler} from "react";
import {Alert, Paper} from "@mui/material";
import {PageProps} from "@/types";
import TestMethodForm from "./Components/TestMethodForm";
import {useSubmitForm} from "@/services/api";
import routes from "@/routes";
import {Test} from "@/types/test";
import {Country} from "@/Data/countries";
import {Symptom} from "@/Pages/Admin/Symptom/Index";
import {testMethodValidate} from "@/services/validate";
import ClientLayout from "@/Layouts/ClientLayout";

enum Gender {
    female,
    male
}

interface Patient {
    id?: string | number,
    fullName?: string;
    nationality?: Country;
    dateOfBirth?: string;
    gender?: Gender;
    reference_id?: string,
    consanguineousParents?: boolean,
    contact?: {
        country?: Country,
        state?: string,
        city?: string,
        address?: string,
        phone?: string,
        email?: string,
    }
}

type Symptoms = (Symptom & {
    value: string
})[]

export type Sample = {
    id?:number,
    sample_type?: {
        id:string & number,
        name:string,
        sampleIdRequired:boolean
    },
    sampleId?: string,
    collectionDate?: string
}

export type NewFileType = { name: string, url: string, error?: string };

export interface Order {
    id?: number | string,
    patient: Patient,
    status?: string,
    step?: string,
    test_method: Test[],
    clinical_information: {
        affected?: string | "1" | "0",
        symptoms?: Symptoms,
        otherSymptom?: string,
        familyHistory?: {
            cancer?: boolean,
            heart?: boolean,
            other?: boolean,
            otherHistory?: string
        },
        additionalInformation?: string,
        family_history_document?: NewFileType[],
        medical_reports_document?: NewFileType[],
        pedigree_document?: NewFileType[],
        targeted_gene_list_document?: NewFileType[],
        other_document?: NewFileType[],
    },
    samples?: Sample[],
    consents?:Record<string, "yes"|"no">
}

const Add: React.FC<PageProps> = ({auth, ...rest}) => {


    const {
        data,
        setData,
        submit,
        errors,
        setError,
        clearErrors
    } = useSubmitForm<Order>({
        patient: {},
        status: undefined,
        step: undefined,
        test_method: [],
        clinical_information: {},
        samples:[
            {}
        ]
    }, routes.orders.store.link);

    const handleChange = (key: keyof Order, value: any) => setData(key, value);

    const handleSubmit:FormEventHandler=(e)=>{
        e.preventDefault();
        e.stopPropagation();
        clearErrors();
        if (testMethodValidate(data,setError))
            submit()
    }

    return (
        <ClientLayout user={auth.user} header="Add Order">
            <Paper sx={{p: "1em", mt: "1em"}}>
                {errors.test_method&&<Alert severity="error">{errors.test_method}</Alert>}
                <TestMethodForm tests={data.test_method} onChange={handleChange} onSubmit={handleSubmit}/>
            </Paper>
        </ClientLayout>
    );
}
export default Add;
