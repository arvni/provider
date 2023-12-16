import React, {ChangeEvent, FormEventHandler, useState} from "react";
import {Button, Divider, InputAdornment, MenuItem, Select, SelectChangeEvent, Stack, TextField} from "@mui/material";

type Values = {
    search: string,
    type: string
}

interface TestSearchFormProps {
    onSearch: (value: Values) => void,
    defaultValues?: Values
}

const TestSearchForm = (props: TestSearchFormProps) => {
    const [values, setValues] = useState<Values>(props.defaultValues ?? {
        search: "",
        type: "test"
    });
    const submitHandler: FormEventHandler = (e) => {
        e.preventDefault();
        props.onSearch(values)
    }
    const changeHandler = (e: (ChangeEvent<any> | SelectChangeEvent<string>)) => setValues(prevState => ({...prevState, [e.target.name]: e.target.value}));
    return <form onSubmit={submitHandler}>
        <TextField
            id="outlined-start-adornment"
            placeholder={"Find Your Test by"}
            fullWidth
            name={"search"}
            defaultValue={values.search}
            onChange={changeHandler}
            InputProps={{
                placeholder:"Search",
                sx: {borderRadius: "30px",paddingLeft:"2em"},
                endAdornment: <InputAdornment position="end">
                    <Stack spacing={1}
                           direction={"row"}
                           flexDirection="row"
                           alignItems="stretch"
                           alignContent="center"
                           justifyContent="space-between">
                        <Divider orientation="vertical" variant="fullWidth"/>
                        <Select variant={"standard"} sx={{width: "100px"}} onChange={changeHandler} name={"type"}
                                defaultValue={values.type}>
                            <MenuItem value={"Test"}>Test</MenuItem>
                            <MenuItem value={"Gene"}>Gene</MenuItem>
                            <MenuItem value={"Disease"}>Disease</MenuItem>
                        </Select>
                        <Button variant={"contained"} sx={{borderRadius: "20px"}} type="submit">
                            Search
                        </Button>
                    </Stack>
                </InputAdornment>,
            }}
        />
    </form>
}
export default TestSearchForm;
