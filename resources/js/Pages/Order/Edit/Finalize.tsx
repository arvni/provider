import React from "react";
import {PageProps} from "@/types";
import {useSubmitForm} from "@/services/api";
import {Order} from "@/Pages/Order/Add";
import routes from "@/routes";
import EditLayout from "@/Pages/Order/EditLayout";
import {Button, Card, CardContent, CardHeader, Grid, Stack, TextField, Typography} from "@mui/material";

const Finalize: React.FC<PageProps> = ({auth, order, step, consents}) => {
    const {
        data,
        submit,
    } = useSubmitForm<Order>({...order, _method: "put"}, routes.orders.update.link(order.id, step));
    const handleSubmit = () => submit();
    return <EditLayout auth={auth} step={step} id={order.id}>
        <Typography component={"h1"} fontWeight={"900"} fontSize={"18px"}>Order ID {data.id}</Typography>
        <Typography>Analysis requested:</Typography>
        <ul>
            <li>{data.test_method.map(test => <Typography fontWeight="600">{test.name}</Typography>)}</li>
        </ul>
        <Typography fontWeight={"600"}>To finalize your order please click "Submit" at the bottom of the page</Typography>
        <Card>
            <CardHeader title="Patient details" sx={{background: "#c0c0c0"}}/>
            <CardContent>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={4}>
                        <ul>
                            <li><strong>Full Name:</strong> {data.patient?.fullName}</li>
                            <li><strong>Date of birth:</strong> {data.patient?.dateOfBirth}</li>
                            <li><strong>Reference ID:</strong> {data.patient?.reference_id??"not specified"}</li>
                            <li><strong>Gender:</strong>  {data.patient?.gender?"male":"female"}</li>
                            <li><strong>City:</strong> {data?.patient?.contact?.city??"not specified"}</li>
                            <li><strong>Street:</strong> {data?.patient?.contact?.address??"not specified"}</li>
                            <li><strong>State:</strong> {data?.patient?.contact?.state??"not specified"}</li>
                            <li><strong>Phone:</strong> {data?.patient?.contact?.phone??"not specified"}</li>
                            <li><strong>Country:</strong> {data?.patient?.contact?.country?.label}</li>
                            <li><strong>Email:</strong> {data?.patient?.contact?.email??"not specified"}</li>
                            <li><strong>Consanguineous parents:</strong> {data.patient?.consanguineousParents?"yes":"no"}</li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography fontWeight={"600"}>Material details</Typography>
                        <ol>
                            {data.samples?.map((sample,index)=><React.Fragment key={sample.id}>
                                {index+1}<ul>
                                <li><strong>Sample type:</strong>{sample.sample_type?.name} </li>
                                <li><strong>Sample ID:</strong>{sample.sampleId??"not specified"}</li>
                                <li><strong>Sample Collection Date:</strong>{sample.collectionDate}</li>
                            </ul>
                            </React.Fragment>)}
                        </ol>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography fontWeight={"600"}>Clinical details</Typography>
                        <ol>
                        {data.clinical_information.symptoms?.map((symptom)=><li key={symptom.id}>
                            {symptom.name}:{symptom.value} </li>)}
                        </ol>
                        <p><strong>Symptoms not listed in HPO:</strong> {data.clinical_information.otherSymptom??"not specified"}</p>
                    </Grid>
                </Grid>
            </CardContent>
            <Card>
                <CardHeader title="Additional information" sx={{background: "#c0c0c0"}}/>
                <CardContent>
                    <TextField multiline fullWidth value={data.clinical_information.additionalInformation} disabled/>
                </CardContent>
            </Card>

        </Card>
            <Stack alignItems="flex-end">
                <Button variant={"contained"} onClick={handleSubmit}>
                    Save & continue
                </Button>
            </Stack>
    </EditLayout>
}
export default Finalize;
