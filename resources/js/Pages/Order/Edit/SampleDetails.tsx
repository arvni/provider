import React from "react";
import {PageProps} from "@/types";
import {useSubmitForm} from "@/services/api";
import {Order} from "@/Pages/Order/Add";
import routes from "@/routes";
import EditLayout from "@/Pages/Order/EditLayout";
import SampleDetailsForm from "@/Pages/Order/Components/SampleDetailsForm";

const SampleDetails: React.FC<PageProps> = ({auth, order, step, sampleTypes}) => {
    const {
        data,
        setData,
        submit,
        processing,
        errors,
        setError,
        reset,
        clearErrors,
    } = useSubmitForm<{ samples: Order["samples"] }>({
        ...order,
        samples: order.samples.length ? order.samples : [{}],
        _method: "put"
    }, routes.orders.update.link(order.id, step));

    const handleChange = (key: keyof Order, value: any) => {
        setData(previousData => ({...previousData, [key]: value}))
    };
    const handleSubmit = () => submit();


    return (<EditLayout step={step} auth={auth} id={order.id}>
        <SampleDetailsForm samples={data.samples ?? [{}]} onChange={handleChange} onSubmit={handleSubmit}
                           sampleTypes={sampleTypes} errors={errors}/>
    </EditLayout>);

}
export default SampleDetails;
