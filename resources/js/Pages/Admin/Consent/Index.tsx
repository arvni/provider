import React, {MouseEventHandler, useCallback, useState} from "react";
import {
    Alert,
    Backdrop,
    Button, ButtonGroup,
    CircularProgress, IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText,
    Paper
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import PageHeader from "@/Components/PageHeader";
import AddForm from "./Components/AddForm";
import {useGetData} from "@/services/api";
import routes from "@/routes";
import {PageProps} from "@/types";
import {ArrowDownward, ArrowUpward, Edit} from "@mui/icons-material";
import AdminLayout from "@/Layouts/AdminLayout";


export interface Consent {
    id?: number;
    order?: number,
    title: string;
    body: string,
    questions: { summaryTitle: string, context: string }[]
}

const Index: React.FC<PageProps> = ({auth, consents, status}) => {
    const [data, setData] = useState<Consent[]>(consents)
    const {loading, getData} = useGetData();
    const [edit, setEdit] = useState(false);
    const [consent, setConsent] = useState<Consent>({
        order: undefined,
        title: "",
        body: "",
        questions: []
    });
    const [openAddForm, setOpenAddForm] = useState(false);

    const handleOpenAddForm = () => setOpenAddForm(true);
    const handleCloseAddForm = () => {
        setOpenAddForm(false);
        resetConsent();
    };

    const resetConsent = () => {
        setConsent({
            order: undefined,
            title: "",
            body: "",
            questions: []
        });
    };
    const handleEdit = (id: number | undefined): MouseEventHandler => () => {
        if (id)
            getData<Consent>(routes.consents.show.link(id))
                .then(res => setConsent(res.data))
                .then(handleOpenAddForm);
    };

    const handleUp = (id: number | undefined) => () => {
        setData(prevState => {
            let index = findConsentIndex(id);
            if (index > 0) {
                let tmp = prevState[index - 1];
                prevState[index - 1] = {...prevState[index],order:index-1};
                prevState[index] = {...tmp,order:index};
            }
            return prevState;
        })
    }
    const handleDown = (id: number | undefined) => () => {
        let index = findConsentIndex(id);
        console.log(index);
        setData(prevState => {
            if (index < prevState.length-1) {
                let tmp = prevState[index +1];
                prevState[index + 1] = {...prevState[index],order:index+1};
                prevState[index] = {...tmp,order:index};
            }
            return prevState.sort((a,b)=>(a.order??0)-(b.order??0));
        })
    }
    const findConsentIndex = (id: number | undefined) => data.findIndex((item) => item.id == id)

    const handleEditOrder: MouseEventHandler = () => {
        setEdit(prevState => !prevState)
    }
    return (
        <AdminLayout user={auth.user} header="Consents">
            {status && <Alert>{status}</Alert>}
            <PageHeader
                title="Consents"
                actions={[
                    <Button variant="contained" onClick={handleOpenAddForm} color="success" startIcon={<AddIcon/>}>
                        Add
                    </Button>
                ]}
            />
            {openAddForm && <AddForm open={openAddForm} onClose={handleCloseAddForm} defaultValue={consent}/>}
            <Paper sx={{mt: "3em", p: "1rem"}}>
                <List>
                    <ListItem>
                        <ListItemAvatar>#</ListItemAvatar>
                        <ListItemText>Title</ListItemText>
                        <ListItemSecondaryAction>Action</ListItemSecondaryAction>
                    </ListItem>
                    {data.length ? <>
                        {data.map((consent: Consent) => <ListItem key={consent.id}>
                            {edit ? <ListItemAvatar sx={{cursor: "pointer"}}>
                                <ButtonGroup
                                    orientation="vertical"
                                    aria-label="vertical contained button group"
                                    variant="text"
                                >
                                    <Button onClick={handleUp(consent.id)} disabled={!(consent?.order ?? 0 > 0)}>
                                        <ArrowUpward/>
                                    </Button>
                                        <Button onClick={handleDown(consent.id)} disabled={consent.order?(consent?.order < (data.length - 1)):true}>
                                            <ArrowDownward/>
                                        </Button>
                                </ButtonGroup>
                            </ListItemAvatar> : null}
                            <ListItemText>{consent.title}</ListItemText>
                            <ListItemSecondaryAction>
                                <IconButton onClick={handleEdit(consent.id)}><Edit/></IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>)}
                    </> : <ListItem>
                        <ListItemText>There is no Data for Show</ListItemText>
                    </ListItem>}
                </List>
            </Paper>
            <Backdrop open={loading}>
                <CircularProgress/>
            </Backdrop>
        </AdminLayout>
    );
};

export default Index;
