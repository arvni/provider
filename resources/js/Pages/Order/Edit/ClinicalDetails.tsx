import React from "react";
import {PageProps} from "@/types";
import {useSubmitForm} from "@/services/api";
import routes from "@/routes";
import {Order} from "@/Pages/Order/Add";
import EditLayout from "@/Pages/Order/EditLayout";
import ClinicalDetailsForm from "@/Pages/Order/Components/ClinicalDetailsForm";

const ClinicalDetails: React.FC<PageProps> = ({auth, order, step}) => {
    const {
        data,
        setData,
        submit,
        processing,
        errors,
        setError,
        reset,
        clearErrors,
    } = useSubmitForm<Order["clinical_information"]>({...order.clinical_information, _method: "put"}, routes.orders.update.link(order.id, step));

    const handleChange = (key: keyof Order["clinical_information"], value: any) => {
        setData(previousData => ({...previousData, [key]: value}))
    };
    const handleSubmit = () => submit();

    return (
        <EditLayout auth={auth} step={step} id={order.id}>
           <ClinicalDetailsForm clinicalInformation={data} onChange={handleChange} onSubmit={handleSubmit} id={order.id??""} errors={errors}/>
        </EditLayout>
    );
}
export default ClinicalDetails;
