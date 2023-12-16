import OneColumnFormLayout from "@/Layouts/OneColumnFormLayout";
import {useSubmitForm} from "@/services/api";
import routes from "@/routes";
import {Field} from "@/types/form";
import {Button, Dialog, DialogContent, DialogTitle} from "@mui/material";
import { FormEventHandler, useEffect} from "react";
import {LoadingButton} from "@mui/lab";
import {Save as SaveIcon} from "@mui/icons-material";
import { storeOrderMaterialValidator} from "@/services/validate";

const AddForm = ({
                     open,
                     onClose,
                     defaultValue = {
                         material: "",
                         quantity: 0,
                     }
                 }: {
    open: boolean,
    onClose: ()=>void,
    defaultValue: { material:string, quantity:number }
}) => {
    const {
        data,
        submit,
        processing,
        handleChange,
        errors,
        setError,
        reset,
        clearErrors,
        wasSuccessful
    } = useSubmitForm<{ material:string, quantity:number }>(defaultValue, routes.orderMaterials.add.link);
    const fields: Field<any>[] = [
        {
            name: "material",
            label: "Material",
            value: data.material,
            error:!!errors?.material,
            helperText:errors.material,
            type: "select",
            required: true,
            options:[{label:"BionCard",value:"BionCard"}, {label:"BionNIPT Streck Tube",value:"BionNIPT Streck Tube"}]
        },
        {
            name: "quantity",
            label: "Quantity",
            value: data.quantity,
            type: "number",
            required: true,
        }
    ];
    const handleClose = (): void => {
        onClose();
        reset();
    }
    const handleSubmit:FormEventHandler = (e) => {
        e.preventDefault();
        clearErrors();
        if (storeOrderMaterialValidator(data, setError))
            submit();
    }
    useEffect(() => {
        if (wasSuccessful) {
            handleClose();
        }
    }, [wasSuccessful]);
    return <Dialog open={open} onClose={handleClose} keepMounted fullWidth maxWidth={"xs"}>
        <DialogTitle>{"Order Material"}</DialogTitle>
        <DialogContent>
            <OneColumnFormLayout send={handleSubmit}
                                 action={routes.orderMaterials.add.link}
                                 onchange={handleChange}
                                 fields={fields} sx={{pt: "1em"}}
                                 actions={[<Button onClick={handleClose} disabled={processing}
                                                   variant={"text"} size={"large"}>Cancel</Button>
                                     , <LoadingButton loading={processing} size={"medium"} variant={"contained"}
                                                      type={"submit"}
                                                      startIcon={<SaveIcon/>}>Submit</LoadingButton>]}/>
        </DialogContent>
    </Dialog>;
}
export default AddForm;
