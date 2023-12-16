import {NewFileType, Order} from "@/Pages/Order/Add";
import {
    Box, Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    Grid,
    IconButton,
    MenuItem, Popover,
    Radio,
    RadioGroup,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TextField,
    Typography,
    TypographyProps
} from "@mui/material";
import {Symptom} from "@/Pages/Symptom/Index";
import SymptomSelector from "@/Pages/Order/Components/SymptomSelector";
import {Delete, InfoRounded} from "@mui/icons-material";
import {ChangeEvent, MouseEventHandler} from "react";
import * as React from "react";
import Uploader from "@/Components/Uploader";

interface ClinicalDetailsProps {
    clinicalInformation: Order["clinical_information"],
    onChange: (key: keyof Order["clinical_information"], value: any) => void,
    onSubmit: () => void,
    id: string | number,
    errors: Record<string, string>
}

type ClinicalInformation = Order["clinical_information"];
type Key = keyof ClinicalInformation | string;

const statuses = [
    "Unknown",
    "Antenatal onset - Onset prior to birth (HP:0030674)",
    "Congenital onset - A phenotypic abnormality that is present at birth (HP:0003577)",
    "Neonatal onset - Onset of signs or symptoms of disease within the first 28 days of life (HP:0003623) ",
    "Infantile onset - Onset of signs or symptoms of disease between 28 days to one year of life (HP:0003593)",
    "Childhood onset - Onset of disease at the age of between 1 and 5 years (HP:0011463) ",
    "Juvenile onset - Onset of signs or symptoms of disease between the age of 5 and 15 years (HP:0003621)",
    "Adult onset - Onset of disease manifestations in adulthood, defined here as at the age of 16 years or later (HP:0003581)",
    "Young adult onset - Onset of disease at the age of between 16 and 40 years (HP:0011462)",
    "Middle age onset- A type of adult onset with onset of symptoms at the age of 40 to 60 years (HP:0003596)",
    "Late onset - A type of adult onset with onset of symptoms after the age of 60 years (HP:0003584)"
];

const Title = (props: TypographyProps) => {

    return <Typography {...props} fontWeight="900" sx={{mb: 4, mt: 6}}>
        {props.children}
    </Typography>

}

const ClinicalDetailsForm = (props: ClinicalDetailsProps) => {

    const handleAffectedChange = (_: any, value: string | "1" | "0") => {
        handleChange("affected", value);
    }
    const handleSymptomSelect = (symptom: Symptom) => {
        let symptoms: Symptom[] = [...(props?.clinicalInformation?.symptoms ?? []), symptom];
        handleChange("symptoms", symptoms);
    };
    const handleChange = (key: Key, value: any) => props.onChange(key as keyof Order["clinical_information"], value)
    const handleSymptomChange = (index: number) => (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        let symptoms = props.clinicalInformation.symptoms;
        if (symptoms?.length)
            symptoms[index].value = e.target.value
        handleChange("symptoms", symptoms);
    };
    const handleFieldsChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => handleChange(e.target.name, e.target.value)
    const removeSymptom = (index: number) => () => {
        let symptoms = [...(props.clinicalInformation?.symptoms ?? [])];
        symptoms.splice(index, 1);
        handleChange("symptoms", symptoms);
    }
    const handleFamilyHistoryChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, checked: boolean) => {
        let familyHistory = {...props.clinicalInformation?.familyHistory};
        let newValue: Partial<Order["clinical_information"]["familyHistory"]> = {[e.target.name]: checked};
        if (e.target.name == "other" && !checked)
            newValue.otherHistory = ""
        Object.assign(familyHistory, newValue);
        handleChange("familyHistory", familyHistory);
    }
    const handleOtherFamilyHistoryChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        let familyHistory = {...props.clinicalInformation?.familyHistory};
        Object.assign(familyHistory, {["otherHistory"]: e.target.value});
        handleChange("familyHistory", familyHistory);
    }

    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

    const handlePopoverOpen: MouseEventHandler<any> = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose: MouseEventHandler<any> = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const handleFilesChange = (name: string, files: NewFileType[] | null) => {
        handleChange(name, files);
    }
    return <>
        <Grid container spacing={2} mt={2}>
            <Grid item xs={12}>
                <Title>Specify Clinical Information</Title>
                <RadioGroup
                    row
                    aria-labelledby="affected-details-label"
                    name="affected"
                    value={props?.clinicalInformation?.affected}
                    onChange={handleAffectedChange}
                >
                    <FormControlLabel value={"0"} control={<Radio/>} label="Clinically unaffected"/>
                    <FormControlLabel value={"1"} control={<Radio/>} label="Affected"/>
                </RadioGroup>
            </Grid>
            {props.clinicalInformation?.affected == "1" && <Grid item xs={12}>
                <Title>Specify Clinical Symptoms</Title>
                <SymptomSelector onSelect={handleSymptomSelect}/>
                <Table sx={{my: 2}}>
                    <TableHead sx={{background: "#e0e0e0"}}>
                        <TableRow>
                            <TableCell>
                                Symptom name
                            </TableCell>
                            <TableCell>
                                <Stack direction={"row"} spacing={2} alignItems="center">
                                    <span>Age of onset</span>
                                    <InfoRounded aria-owns={open ? 'mouse-over-popover' : undefined}
                                                 aria-haspopup="true"
                                                 onMouseEnter={handlePopoverOpen}
                                                 onMouseLeave={handlePopoverClose}
                                    />
                                </Stack>
                                <Popover
                                    id="mouse-over-popover"
                                    sx={{
                                        pointerEvents: 'none',
                                    }}
                                    open={open}
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    onClose={handlePopoverClose}
                                    disableRestoreFocus
                                >
                                    <Box sx={{maxWidth: "200px"}}>
                                        <Typography sx={{p: 1}} fontSize={"15px"}>
                                            The age of onset is the age at which an individual acquires, develops, or
                                            first
                                            experiences a condition or symptoms of a disease or disorder
                                        </Typography>
                                    </Box>
                                </Popover>
                            </TableCell>
                            <TableCell>
                                Remove
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props?.clinicalInformation?.symptoms?.map((symptom, index) => <TableRow
                            key={"symptom-" + symptom.id}>
                            <TableCell>{symptom.name}</TableCell>
                            <TableCell>
                                <TextField
                                    size="small"
                                    select
                                    value={symptom.value}
                                    error={props.errors.hasOwnProperty("symptoms." + index + ".value")}
                                    helperText={props.errors.hasOwnProperty("symptoms." + index + ".value") ? props.errors["symptoms." + index + ".value"] : ""}
                                    onChange={handleSymptomChange(index)}
                                    sx={{width: "300px"}}
                                    placeholder="Age of onset">
                                    {statuses.map((option, index) => (
                                        <MenuItem key={index} value={option}>
                                            {option}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </TableCell>
                            <TableCell>
                                <IconButton color={"error"} onClick={removeSymptom(index)}>
                                    <Delete/>
                                </IconButton>
                            </TableCell>
                        </TableRow>)}
                    </TableBody>
                </Table>
                {!props.clinicalInformation?.symptoms?.length &&
                    <Stack direction="row"
                           spacing={2}
                           sx={{width: "100%", my: 8}}
                           justifyContent="center">
                        <InfoRounded color={props.errors?.symptoms ? "error" : "info"}/>
                        <Typography color={props.errors?.symptoms ? "error" : "info"}>
                            Please document clinical symptoms for your patient to ensure the quality of the
                            medical diagnosis
                        </Typography>
                    </Stack>
                }
                <TextField multiline
                           rows={3}
                           fullWidth
                           name="otherSymptom"
                           value={props.clinicalInformation?.otherSymptom}
                           onChange={handleFieldsChange}
                           label="Document Symptoms not listed in the HPO catalogue"/>
            </Grid>}
            <Grid item xs={12}>
                <Title>Document Family History</Title>
                <FormControl component="fieldset">
                    <FormGroup row>
                        <FormControlLabel
                            value="Family history of cancer"
                            name="cancer"
                            control={<Checkbox
                                onChange={handleFamilyHistoryChange}/>}
                            label="Family history of cancer"
                            labelPlacement="end"
                            checked={props.clinicalInformation?.familyHistory?.cancer}
                        />
                        <FormControlLabel
                            value="Family history of heart disease"
                            name="heart"
                            control={<Checkbox
                                onChange={handleFamilyHistoryChange}/>}
                            label="Family history of heart disease"
                            labelPlacement="end"
                            checked={props.clinicalInformation?.familyHistory?.heart}
                        />
                        <FormControlLabel
                            value="Other Family History"
                            name="other"
                            control={<Checkbox
                                onChange={handleFamilyHistoryChange}/>}
                            checked={props.clinicalInformation?.familyHistory?.other}
                            label="Other Family History"
                            labelPlacement="end"
                        />
                    </FormGroup>
                </FormControl>
                {props.clinicalInformation?.familyHistory?.other &&
                    <TextField multiline rows={3} fullWidth sx={{mt: 2}}
                               value={props.clinicalInformation?.familyHistory?.otherHistory}
                               onChange={handleOtherFamilyHistoryChange}
                               label="Document Symptoms not listed in the HPO catalogue"/>}
            </Grid>
            <Grid item xs={12}>
                <Title>Additional Information (for all family members)</Title>
                <TextField multiline rows={3} fullWidth sx={{mt: 2}}
                           value={props.clinicalInformation?.additionalInformation}
                           onChange={handleFieldsChange}
                           name={"additionalInformation"}
                           label="Document other family history"/>
            </Grid>
            <Grid item xs={12}>
                <Title>Upload Supporting Documents</Title>
                <Stack direction="row" gap={2} flexWrap="wrap">
                    <Uploader value={props.clinicalInformation?.family_history_document} label={"Family History"}
                              name={"family_history_document"} handleChange={handleFilesChange} error={props.errors.hasOwnProperty("family_history_document")}
                              helperText={props.errors?.family_history_document??""}
                              url={route("upload", {tag: "familyHistory", relatedClass: "Order", relatedId: props.id})}
                    />
                    <Uploader value={props.clinicalInformation?.medical_reports_document} label={"Medical Reports"}
                              name={"medical_reports_document"} handleChange={handleFilesChange}
                              url={route("upload", {tag: "medicalReports", relatedClass: "Order", relatedId: props.id})}
                    />
                    <Uploader value={props.clinicalInformation?.pedigree_document} label={"Pedigree"}
                              name={"pedigree_document"} handleChange={handleFilesChange}
                              url={route("upload", {tag: "pedigree", relatedClass: "Order", relatedId: props.id})}
                    />
                    <Uploader value={props.clinicalInformation?.targeted_gene_list_document}
                              label={"Targeted Gene List"} name={"targeted_gene_list_document"}
                              handleChange={handleFilesChange}
                              url={route("upload", {
                                  tag: "targetedGeneList",
                                  relatedClass: "Order",
                                  relatedId: props.id
                              })}
                    />
                    <Uploader value={props.clinicalInformation?.other_document} label={"Other"} name={"other_document"}
                              handleChange={handleFilesChange}
                              url={route("upload", {tag: "other", relatedClass: "Order", relatedId: props.id})}
                    />
                </Stack>
            </Grid>
            <Grid item xs={12} mt={2}>
                <Stack alignItems="flex-end">
                    <Button variant={"contained"} onClick={props.onSubmit}>
                        Save & continue
                    </Button>
                </Stack>
            </Grid>
        </Grid>
    </>
}
export default ClinicalDetailsForm;
