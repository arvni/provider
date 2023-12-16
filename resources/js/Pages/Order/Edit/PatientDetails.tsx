import React from "react";
import {PageProps} from "@/types";
import {useSubmitForm} from "@/services/api";
import routes from "@/routes";
import {Order} from "@/Pages/Order/Add";
import PatientDetailsForm from "@/Pages/Order/Components/PatientDetailsForm";
import EditLayout from "@/Pages/Order/EditLayout";
import {patientDetailsValidate} from "@/services/validate";

const PatientDetails: React.FC<PageProps> = ({auth, order,step}) => {
    const {
        data,
        setData,
        submit,
        errors,
        setError,
        clearErrors,
    } = useSubmitForm<Order["patient"]>({...order.patient,_method:"put"}, routes.orders.update.link(order.id,step));
    const handleChange = (key: keyof Order["patient"], value: any) => {
        setData(previousData => ({...previousData, [key]: value}))
    };
    const handleSubmit = () => {
        clearErrors();
        if (patientDetailsValidate(data,setError))
        submit();
    };

    return (
       <EditLayout step={step} auth={auth} id={order.id} >
           <PatientDetailsForm patient={data} onChange={handleChange} onSubmit={handleSubmit} errors={errors}/>
       </EditLayout>

    );
}
export default PatientDetails;
