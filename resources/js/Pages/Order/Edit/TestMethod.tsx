import React, {FormEventHandler} from "react";
import {PageProps} from "@/types";
import TestMethodForm from "@/Pages/Order/Components/TestMethodForm";
import {useSubmitForm} from "@/services/api";
import routes from "@/routes";
import {Order} from "@/Pages/Order/Add";
import EditLayout from "@/Pages/Order/EditLayout";

const TestMethod: React.FC<PageProps> = ({auth, order, step}) => {
    const {
        data,
        setData,
        submit,
        processing,
        errors,
        setError,
        reset,
        clearErrors,
    } = useSubmitForm<Order>({...order, _method: "put"}, routes.orders.update.link(order.id, step));

    const handleChange = (key: keyof Order, value: any) => {
        setData(previousData => ({...previousData, [key]: value}))
    };
    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        submit();
    }

    return (
        <EditLayout step={step} auth={auth} id={order.id}>
            <TestMethodForm tests={data.test_method} onChange={handleChange} onSubmit={handleSubmit}/>
        </EditLayout>
    );
}
export default TestMethod;
