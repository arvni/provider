import {useSubmitForm} from "@/services/api";
import routes from "@/routes";
import {
    Box,
    Button,
    Grid,
    TextField
} from "@mui/material";
import React, {ChangeEvent} from "react";
import {LoadingButton} from "@mui/lab";
import { Save as SaveIcon} from "@mui/icons-material";
import {storeTestValidator} from "@/services/validate";
import {SampleType, Test} from "@/types/test";
import SampleTypeForm from "./SampleTypeForm";
import RequirementForm from "./RequirementForm";


const AddForm = ({
                     defaultValue = {
                         id: "",
                         name: "",
                         code: "",
                         shortName: "",
                         turnaroundTime: 0,
                         description: "",
                         requirements:[]
                     }
                 }: { defaultValue?: Test, sampleTypes: SampleType[] }) => {
    const {
        data,
        setData,
        submit,
        processing,
        handleChange,
        errors,
        setError,
        reset,
        clearErrors,
    } = useSubmitForm({
        ...defaultValue,
        [defaultValue.id ? "_method" : ""]: "put"
    }, defaultValue.id ? routes.tests.update.link(defaultValue.id) : routes.tests.store.link);
    const handleBack = (): void => {
        reset();
        history.back();
    }
    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        clearErrors();
        if (storeTestValidator(data, setError))
            submit();
    }


    return <>
        <Box component="form" action={data.id ? routes.tests.update.link(data.id) : routes.tests.add.link}
             onSubmit={handleSubmit} sx={{pt: "1em"}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        name="name"
                        label="Test Name"
                        value={data.name}
                        type="text"
                        required
                        error={errors.hasOwnProperty("name")}
                        helperText={errors.name}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField
                        fullWidth
                        name="shortName"
                        label="Short Name"
                        value={data.shortName}
                        type="text"
                        required
                        error={errors.hasOwnProperty("shortName")}
                        helperText={errors.shortName}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={6} md={4}>
                    <TextField
                        fullWidth
                        name="code"
                        label="Code"
                        value={data.code}
                        type="text"
                        required
                        error={errors.hasOwnProperty("code")}
                        helperText={errors.code}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={6} md={4}>
                    <TextField
                        fullWidth
                        name="turnaroundTime"
                        label="Turnaround Time"
                        value={data.turnaroundTime}
                        type="number"
                        required
                        error={errors.hasOwnProperty("turnaroundTime")}
                        helperText={errors.turnaroundTime}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        multiline
                        rows={3}
                        fullWidth
                        name="description"
                        label="Description"
                        value={data.description}
                        type="text"
                        required
                        error={errors.hasOwnProperty("description")}
                        helperText={errors.description}
                        onChange={handleChange}
                    />
                </Grid>
                <SampleTypeForm sampleTypes={data.sample_types} error={errors.sample_types} onChange={setData}/>
                <RequirementForm error={errors.requirements} requirements={data.requirements} onChange={setData}/>
                <Grid item>
                    <Button onClick={handleBack} disabled={processing} variant={"text"}>Cancel</Button>
                    <LoadingButton loading={processing} size={"medium"} variant={"contained"}
                                   type={"submit"} startIcon={<SaveIcon/>}>Submit</LoadingButton>
                </Grid>
            </Grid>
        </Box>
    </>;
}
export default AddForm;
