import {
    Button,
    Dialog, DialogActions,
    DialogContent,
    DialogTitle,
    Grid, MenuItem, TextField
} from "@mui/material";
import React, {ChangeEvent, useState} from "react";
import {Requirement} from "@/types/test";
import {Save} from "@mui/icons-material";
import ke from "../../../../../public/build/assets/Index-6a3608da";

interface AddMethodFormProps {
    data: Requirement,
    setData: (key: string, value: any) => void,
    open: boolean,
    onClose: () => void,
    onSubmit: () => void,
}

const AddRequirementForm = ({data, setData, open, onClose, onSubmit}: AddMethodFormProps) => {
    const [errors, setErrors] = useState<Partial<Record<keyof Requirement, string | undefined>>>();


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
        if (!data.type) {
            output = false;
            addErrors("type", "please add at least one requirement")
        }
        return output;
    }
    const clearErrors = () => {
        setErrors(undefined);
    }
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setData(e.target.name, e.target.value);

    const addErrors = (key: keyof Requirement, er: string) => {
        let newErrors = {...errors, [key]: er};
        setErrors(newErrors);
    }

    return <Dialog open={open} onClose={onClose} fullWidth maxWidth={"md"}>
        <DialogTitle>{`${data.id ? "Edit" : "Add New"} Requirement`}</DialogTitle>
        <DialogContent>
            <Grid container spacing={2} padding={2}>
                <Grid item xs={12} md={4}>
                    <TextField
                        name="label"
                        value={data.label}
                        helperText={errors?.label ?? ""}
                        onChange={handleChange}
                        label="Label"/>
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField
                        fullWidth
                        select
                        name="type"
                        value={data.type}
                        onChange={handleChange}
                        helperText={errors?.type}
                        label="Type">
                        <MenuItem value={"text"}>Text</MenuItem>
                        <MenuItem value={"number"}>Number</MenuItem>
                        <MenuItem value={"checkbox"}>Checkbox</MenuItem>
                        <MenuItem value={"select"}>combobox</MenuItem>
                    </TextField>
                </Grid>
                {data.type == "select" && <Grid item xs={12}>
                    <TextField
                        fullWidth
                        helperText={errors?.options}
                        name="options"
                        value={data.options}
                        onChange={handleChange}
                        label="options"/>
                </Grid>}
            </Grid>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button startIcon={<Save/>} onClick={handleSubmit} variant={"contained"}>Save</Button>
            </DialogActions>
        </DialogContent>
    </Dialog>;
}
export default AddRequirementForm;
