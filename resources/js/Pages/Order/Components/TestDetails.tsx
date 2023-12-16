import {Test} from "@/types/test";
import {Dialog, DialogContent, DialogTitle, Typography} from "@mui/material";
import {EventHandler} from "react";

const TestDetails = ({test, open = false, onClose}: { test: Test, open: boolean, onClose: EventHandler<any> }) => {

    return <Dialog open={open} onClose={onClose}>
        <DialogTitle >{test.name}</DialogTitle>
        <DialogContent>
            <Typography fontWeight="800">Description :</Typography>
            <Typography>{test.description}</Typography>
            <Typography fontWeight="800">Accepted Sample requirements :</Typography>
            <ul>
                {test.sample_types?.map(sampleType => <li>
                    <strong>{sampleType.name}: </strong>{sampleType?.description}</li>)}
            </ul>
        </DialogContent>
    </Dialog>
}
export default TestDetails;
