import {Paper, Step, StepButton, StepLabel, Stepper} from "@mui/material";
import React, {MouseEventHandler} from "react";
import {router} from "@inertiajs/react";
import ClientLayout from "@/Layouts/ClientLayout";

const steps: string[] = ["test method", "patient details", "clinical details", "sample details", "consent form","finalize"];

interface EditLayoutProps {
    auth: {
        user: {
            name: string,
            email: string
        }
    },
    step: string,
    children?: any,
    id:number|string
}

const EditLayout = ({auth, step, children,id}: EditLayoutProps) => {
    let activeStep = steps.findIndex((item) => item == step);
    const handleStep=(s:string):MouseEventHandler=>(e)=> {
        e.preventDefault();
        e.stopPropagation();
        router.visit(route("orders.edit", {step: s, order: id}))
    }
    return <ClientLayout user={auth.user} header={``}>
        <Paper sx={{p: "1em", mt: "1em"}}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((item, index) => (
                    <Step key={index}>
                        <StepButton color="inherit" onClick={handleStep(item)} href={route("orders.edit",{step:item,order:id})}>
                            <StepLabel>{item}</StepLabel>
                        </StepButton>
                    </Step>
                ))}
            </Stepper>
            {children}
        </Paper>
    </ClientLayout>
}
export default EditLayout;
