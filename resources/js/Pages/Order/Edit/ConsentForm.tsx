import React from "react";
import {PageProps} from "@/types";
import {useSubmitForm} from "@/services/api";
import routes from "@/routes";
import {Order} from "@/Pages/Order/Add";
import EditLayout from "@/Pages/Order/EditLayout";
import {Box, Button, FormControlLabel, Grid, Radio, RadioGroup, Stack, Typography} from "@mui/material";
import {Consent} from "@/Pages/Consent/Index";

const ConsentForm: React.FC<PageProps> = ({auth, order, step,consents}) => {
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
    const handleSubmit = () => submit();
    const handleConsentChange=(name:string)=>(e:React.ChangeEvent<HTMLInputElement>,value:string)=>handleChange("consents",{...data.consents,[name]:value})
    return<EditLayout auth={auth} step={step} id={order.id}>
        <Typography sx={{my:4}} component={"h2"} fontSize="18px" fontWeight="700">PLEASE READ THIS STEP THROUGH CAREFULLY AND SELECT CHECKBOXES</Typography>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography fontWeight="700">
                    Physician representation and patient consent:
                </Typography>
            </Grid>
            {consents.map((consent:Consent)=><Grid item xs={12}>
                <Typography fontWeight="600" sx={{my:2}}><span>{(consent.order??0)+1}. </span>{consent.title}</Typography>
                <Typography>{consent.body}</Typography>
                {consent?.questions?.length?<ul>
                    {consent.questions.map((question,index)=><li key={index}>
                        <Typography>{question.context}</Typography>
                        <Box padding={2} sx={{background:"#c2c2c2"}}>
                            <RadioGroup
                                row
                                name={"consent-"+consent.id+"-"+index}
                                value={data.consents?data.consents["consent-"+consent.id+"-"+index]:""}
                                onChange={handleConsentChange("consent-"+consent.id+"-"+index)}
                            >
                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="no" control={<Radio />} label="No" />
                            </RadioGroup>
                        </Box>
                    </li>)}
                </ul>:null}
            </Grid>)}
            <Grid item xs={12} mt={2}>
                <Stack alignItems="flex-end">
                    <Button variant={"contained"} onClick={handleSubmit}>
                        Save & continue
                    </Button>
                </Stack>
            </Grid>
        </Grid>
    </EditLayout>
}
export default ConsentForm;
