import {
    Alert, Divider,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Stack
} from "@mui/material";
import {Add as AddIcon, Edit} from "@mui/icons-material";
import DeleteButton from "@/Components/DeleteButton";
import React, {useState} from "react";
import {SampleType} from "@/types/test";
import AddSampleTypeForm from "@/Pages/Test/Components/AddSampleTypeForm";

const SampleTypeForm = ({error,sampleTypes,onChange}:{error:string|undefined,sampleTypes:SampleType[]|undefined,onChange:(key:string,value:SampleType[])=>void}) => {

    const [sampleType, setSampleType] = useState<SampleType>({description: "", id: "", name: ""});
    const handleAddSampleType = () => {
        let newSampleTypes = [...sampleTypes ?? []];
        let index = newSampleTypes.findIndex((item) => item.id == sampleType.id);
        if (index == -1)
            newSampleTypes.push(sampleType);
        else
            newSampleTypes.splice(index, 1, sampleType);
        onChange("sample_types", newSampleTypes);
        handleCloseSampleType();
    }
    const handleCloseSampleType = () => {
        setOpenAddSampleType(false);
        resetSampleType();
    };
    const handleSampleTypeChange = (key: string, value: any) => {
        setSampleType((prevState: SampleType) => ({...prevState, [key]: value}));
    }
    const resetSampleType = () => {
        setSampleType({description: "", id: "", name: ""});
    }
    const [openAddSampleType, setOpenAddSampleType] = useState(false);

    const handleAddNewSampleType = () => {
        setOpenAddSampleType(true);
    }

    const handleEditSampleType = (index: number) => () => {
        sampleTypes ? setSampleType({...sampleTypes[index]}) : null;
        handleAddNewSampleType();
    }
    const handleDeleteSampleType = (index: number) => () => {
        let newSampleTypes = [...sampleTypes ?? []];
        newSampleTypes.splice(index, 1);
        onChange("sample_types", newSampleTypes);
    }


    return<>
    <Grid item sx={{width: "100%"}}>
        <List>
            <ListItem
                secondaryAction={
                    <IconButton edge="end" aria-label="add sampleType" onClick={handleAddNewSampleType}
                                color={"success"}>
                        <AddIcon fontSize={"large"}/>
                    </IconButton>
                }>
                <ListItemText primary={<h3>SampleTypes</h3>}
                              secondary={error &&
                                  <Alert severity={"error"}>{error}</Alert>}/>
            </ListItem>
            {sampleTypes?.map((sampleType, index) => (
                <ListItem key={sampleType.id}
                          secondaryAction={
                              <Stack direction={"row"} spacing={1}>
                                  <IconButton color={"warning"}
                                              onClick={handleEditSampleType(index)}>
                                      <Edit/>
                                  </IconButton>
                                  <DeleteButton onConfirm={handleDeleteSampleType(index)}/>
                              </Stack>
                          }
                          disablePadding
                >
                    <ListItemAvatar><h3>{index+1}</h3></ListItemAvatar>
                    <ListItemText primary={sampleType.name} secondary={<Stack direction={"row"}>
                    </Stack>}/>
                    <Divider/>
                </ListItem>))}
        </List>
    </Grid>

    {openAddSampleType &&
    <AddSampleTypeForm
        data={sampleType}
        setData={handleSampleTypeChange}
        open={openAddSampleType}
        onClose={handleCloseSampleType}
        onSubmit={handleAddSampleType}/>}
    </>
}
export default SampleTypeForm;
