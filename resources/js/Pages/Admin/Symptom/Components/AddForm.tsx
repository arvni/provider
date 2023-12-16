import OneColumnFormLayout from "@/Layouts/OneColumnFormLayout";
import {useSubmitForm} from "@/services/api";
import routes from "@/routes";
import {Field} from "@/types/form";
import {Button, Dialog, DialogContent, DialogTitle} from "@mui/material";
import {FormEventHandler, MouseEventHandler} from "react";
import {LoadingButton} from "@mui/lab";
import {Save as SaveIcon} from "@mui/icons-material";
import {storeSymptomValidator} from "@/services/validate";
import {Symptom} from "@/Pages/Admin/Symptom/Index";

const AddForm = ({
                     open,
                     onClose,
                     defaultValue = {
                         id: null,
                         name: "",
                         hpo: "",
                         symptom_group: undefined
                     }
                 }: {
    open: boolean,
    onClose: () => void,
    defaultValue: Symptom
}) => {
    const {
        data,
        submit,
        processing,
        handleChange,
        errors,
        setError,
        reset,
        clearErrors
    } = useSubmitForm({
        ...defaultValue,
        _method: defaultValue.id ? "put" : "post"
    }, defaultValue.id ? routes.symptoms.update.link(defaultValue.id) : routes.symptoms.add.link);

    const fields: Field<string| undefined | null | {
        name: string,
        id: number
    }>[] = [
        {
            name: "name",
            label: "Symptom Name",
            value: data.name,
            type: "text",
            required: true,
            error: !!errors.name,
        },
        {
            name: "hpo",
            label: "Hpo",
            value: data.hpo,
            type: "text",
            required: true,
            error: !!errors.hpo,
        },
        {
            name: "symptom_group",
            label: "Symptom Group",
            value: data.symptom_group,
            type: "selectSearch",
            url: routes.symptomGroups.api.list.link,
            required: true,
            error: !!errors.hpo,
            onChange: handleChange,
        }
    ];
    const handleClose: MouseEventHandler & (() => void) = () => {
        onClose();
        reset();
    }
    const handleSubmit :FormEventHandler = (e) => {
        e.preventDefault();
        clearErrors();
        if (storeSymptomValidator(data, setError))
            submit({onSuccess: handleClose});
    }

    return <Dialog open={open} onClose={handleClose} keepMounted fullWidth maxWidth={"xs"}>
        <DialogTitle>{data.id ? "Edit Symptom" : "Add Symptom"}</DialogTitle>
        <DialogContent>
            <OneColumnFormLayout send={handleSubmit}
                                 action={data.id ? routes.symptoms.update.link(data.id) : routes.symptoms.add.link}
                                 onchange={handleChange}
                                 fields={fields} sx={{pt: "1em"}}
                                 actions={[
                                     <Button onClick={handleClose} disabled={processing}
                                             variant={"text"} size={"large"}>Cancel</Button>
                                     , <LoadingButton loading={processing} size={"medium"} variant={"contained"}
                                                      type={"submit"}
                                                      startIcon={<SaveIcon/>}>Submit</LoadingButton>]}/>
        </DialogContent>
    </Dialog>;
}
export default AddForm;
