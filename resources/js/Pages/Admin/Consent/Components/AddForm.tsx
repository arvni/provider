import {useSubmitForm} from "@/services/api";
import routes from "@/routes";
import {
    Box,
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    Grid, IconButton, List, ListItem,
    ListItemAvatar, ListItemSecondaryAction,
    ListItemText, Stack,
    TextField, Typography
} from "@mui/material";
import {ChangeEvent, FormEventHandler, MouseEventHandler} from "react";
import {LoadingButton} from "@mui/lab";
import {Delete, Save as SaveIcon} from "@mui/icons-material";
import {storeConsentGroupValidator} from "@/services/validate";
import {Consent} from "../Index";

const AddForm = ({
                     open,
                     onClose,
                     defaultValue = {
                         id: undefined,
                         order: undefined,
                         title: "",
                         body: "",
                         questions: []
                     }
                 }: {
    open: boolean,
    onClose: () => void,
    defaultValue: Consent
}) => {
    const {
        data,
        setData,
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
    }, defaultValue.id ? routes.consents.update.link(defaultValue.id) : routes.consents.add.link);

    const handleClose: MouseEventHandler & (() => void) = () => {
        onClose();
        reset();
    }
    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        clearErrors();
        if (storeConsentGroupValidator(data, setError))
            submit({onSuccess: handleClose});
    }
    const handleDeleteQuestion = (index: number) => () => {
        let newQuestions = [...(data.questions??[])];
        newQuestions.splice(index, 1);
        setData(previousData => ({...previousData, questions: newQuestions}));
    }
    const handleQuestionChange = (index:number ) => (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        let newQuestions = [...(data.questions??[])];
        newQuestions.splice(index, 1, {...data?.questions[index],[e.target.name]:e.target.value});
        setData(previousData => ({...previousData, questions: newQuestions}));
    }
    const handleAddQuestion: MouseEventHandler = (e) => {
        e.preventDefault();
        let newQuestions = [...(data.questions??[])];
        newQuestions.push({summaryTitle:"",context:""});
        setData(previousData => ({...previousData, questions: newQuestions}));
    }

    return <Dialog open={open} onClose={handleClose} keepMounted fullWidth maxWidth={"md"}>
        <DialogTitle>{data.id ? "Edit Consent" : "Add Consent"}</DialogTitle>
        <DialogContent>
            <Box
                component={"form"}
                method={"post"}
                sx={{pt:2}}
                action={data.id ? routes.consents.update.link(data.id) : routes.consents.add.link}
                onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            name="title"
                            label="Consent Title"
                            value={data.title}
                            required
                            onChange={handleChange}
                            error={!!errors.title}
                            fullWidth/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            name="body"
                            label="Body"
                            value={data.body}
                            required
                            multiline
                            rows={5}
                            onChange={handleChange}
                            error={!!errors.body}
                            fullWidth/>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography fontWeight="600">Questions</Typography>
                        <List>
                            {data?.questions?.map((question, index) => <ListItem key={index}>
                                <ListItemAvatar>
                                    {index + 1}
                                </ListItemAvatar>
                                <ListItemText>
                                    <Stack spacing={2} direction="row">
                                    <TextField fullWidth sx={{maxWidth:"300px"}} value={question.summaryTitle} name="summaryTitle" onChange={handleQuestionChange(index)} label={"Summary Title"}/>
                                    <TextField fullWidth multiline rows={2} value={question.context} name="context" onChange={handleQuestionChange(index)} label={"context"}/>
                                    </Stack>
                                </ListItemText>
                                <ListItemSecondaryAction>
                                    <IconButton color="error" onClick={handleDeleteQuestion(index)}>
                                        <Delete/>
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>)}
                            <ListItem sx={{paddingY:"2em"}}>
                                <ListItemSecondaryAction>
                                    <Button variant={"contained"} onClick={handleAddQuestion}>Add Question</Button>
                                </ListItemSecondaryAction>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={12}>
                        <Button onClick={handleClose} disabled={processing}
                                variant={"text"} size={"large"}>Cancel</Button>
                        <LoadingButton loading={processing} size={"medium"} variant={"contained"} onClick={handleSubmit}
                                       startIcon={<SaveIcon/>}>Submit</LoadingButton>
                    </Grid>
                </Grid>
            </Box>
        </DialogContent>
    </Dialog>;
}
export default AddForm;
