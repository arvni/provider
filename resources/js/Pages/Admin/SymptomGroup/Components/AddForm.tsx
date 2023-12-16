import OneColumnFormLayout from "@/Layouts/OneColumnFormLayout";
import {useSubmitForm} from "@/services/api";
import routes from "@/routes";
import {Field} from "@/types/form";
import {Button, Dialog, DialogContent, DialogTitle} from "@mui/material";
import {FormEventHandler, MouseEventHandler} from "react";
import {LoadingButton} from "@mui/lab";
import {Save as SaveIcon} from "@mui/icons-material";
import {storeSymptomGroupValidator} from "@/services/validate";

const AddForm = ({
                     open,
                     onClose,
                     defaultValue = {
                         id: null,
                         name: "",
                     }
                 }: {
    open: boolean,
    onClose: () => void,
    defaultValue: {
        id?: number | null,
        name: string
    }
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
    }, defaultValue.id ? routes.symptomGroups.update.link(defaultValue.id) : routes.symptomGroups.add.link);

    const fields: Field<string>[] = [
        {
            name: "name",
            label: "Symptom Group Name",
            value: data.name,
            type: "text",
            required: true,
            error: !!errors.name,
        }
    ];
    const handleClose: MouseEventHandler & (() => void) = () => {
        onClose();
        reset();
    }
    const handleSubmit:FormEventHandler = (e) => {
        e.preventDefault();
        clearErrors();
        if (storeSymptomGroupValidator(data, setError))
            submit({onSuccess: handleClose});
    }

    return <Dialog open={open} onClose={handleClose} keepMounted fullWidth maxWidth={"xs"}>
        <DialogTitle>{data.id ? "Edit SymptomGroup" : "Add Symptom Group"}</DialogTitle>
        <DialogContent>
            <OneColumnFormLayout send={handleSubmit}
                                 action={data.id ? routes.sampleTypes.update.link(data.id) : routes.sampleTypes.add.link}
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
