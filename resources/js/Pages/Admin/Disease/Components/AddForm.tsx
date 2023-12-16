import OneColumnFormLayout from "@/Layouts/OneColumnFormLayout";
import {useSubmitForm} from "@/services/api";
import routes from "@/routes";
import {Field} from "@/types/form";
import {Button, Dialog, DialogContent, DialogTitle} from "@mui/material";
import {FormEventHandler, MouseEventHandler} from "react";
import {LoadingButton} from "@mui/lab";
import {Save as SaveIcon} from "@mui/icons-material";
import {storeDiseaseGroupValidator} from "@/services/validate";
import {Disease} from "../Index";

const AddForm = ({
                     open,
                     onClose,
                     defaultValue = {
                         id: null,
                         name: "",
                         gene:""
                     }
                 }: {
    open: boolean,
    onClose: () => void,
    defaultValue: Disease
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
    }, defaultValue.id ? routes.diseases.update.link(defaultValue.id) : routes.diseases.add.link);

    const fields: Field<string| undefined | null>[] = [
        {
            name: "name",
            label: "Disease Name",
            value: data.name,
            type: "text",
            required: true,
            error: !!errors.name,
        },
        {
            name: "gene",
            label: "Gene",
            value: data.gene,
            type: "text",
            multiple:true,
            url: routes.symptomGroups.api.list.link,
            required: true,
            error: !!errors.gene,
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
        if (storeDiseaseGroupValidator(data, setError))
            submit({onSuccess: handleClose});
    }

    return <Dialog open={open} onClose={handleClose} keepMounted fullWidth maxWidth={"xs"}>
        <DialogTitle>{data.id ? "Edit Disease" : "Add Disease"}</DialogTitle>
        <DialogContent>
            <OneColumnFormLayout send={handleSubmit}
                                 action={data.id ? routes.diseases.update.link(data.id) : routes.diseases.add.link}
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
