import {
    Button,
    Dialog, DialogActions,
    DialogContent,
    DialogTitle,
    Grid, MenuItem, TextField
} from "@mui/material";
import React, {ChangeEvent, useEffect, useState} from "react";
import {SampleType} from "@/types/test";
import {Save} from "@mui/icons-material";
import {useGetData} from "@/services/api";
import routes from "@/routes";

interface AddMethodFormProps {
    data: SampleType,
    setData: (key: string, value: any) => void,
    open: boolean,
    onClose: () => void,
    onSubmit: () => void,
}

const AddSampleTypeForm = ({data, setData, open, onClose, onSubmit}: AddMethodFormProps) => {
    const [sampleTypes, setSampleTypes] = useState<SampleType[]>([]);
    const [errors, setErrors] = useState<Record<keyof Partial<SampleType>, string> & undefined>();
    const {getData, loading} = useGetData();
    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = () => getData<SampleType[]>(routes.sampleTypes.api.list.link)
        .then(({data}) => setSampleTypes(data));
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setData(e.target.name, e.target.value)
    }


    const handleSubmit = () => {
        if (check()) {
            onSubmit();
        }
    }

    const check = () => {
        clearErrors();
        let output = true;
        if (!data.id) {
            output = false;
            addErrors("id", "please enter method name");
        }
        if (!data.description) {
            output = false;
            addErrors("description", "please add at least one requirement")
        }
        return output;
    }
    const clearErrors = () => {
        setErrors(undefined);
    }
    const handleSampleTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
        let sampleType = sampleTypes.find(item => item.id === e.target.value);
        if (sampleType) {
            setData("id", sampleType.id)
            setData("name", sampleType?.name)
        }
    }

    const addErrors = (key: keyof Partial<SampleType>, error: string) => {
        setErrors((prevState: any) => ({...(prevState ?? null)}));
    }

    return <Dialog open={open} onClose={onClose} fullWidth maxWidth={"md"}>
        <DialogTitle>{`${data.id ? "Edit" : "Add New"} Method`}</DialogTitle>
        <DialogContent>
            <Grid container spacing={2} padding={2}>
                <Grid item xs={12} md={4}>
                    <TextField
                        fullWidth
                        select
                        value={data.id}
                        onChange={handleSampleTypeChange}
                        label="Sample Type">
                        {sampleTypes?.map((sampleType: SampleType) => <MenuItem
                            value={sampleType.id}>{sampleType.name}</MenuItem>)}
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        multiline
                        rows={5}
                        name="description"
                        value={data.description}
                        onChange={handleChange}
                        label="Description"/>
                </Grid>
            </Grid>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button startIcon={<Save/>} onClick={handleSubmit} variant={"contained"}>Save</Button>
            </DialogActions>
        </DialogContent>
    </Dialog>;
}
export default AddSampleTypeForm;
