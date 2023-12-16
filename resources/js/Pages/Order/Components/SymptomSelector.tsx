import {Autocomplete, Box, InputAdornment, TextField, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import {Symptom} from "@/Pages/Admin/Symptom/Index";
import {useGetData} from "@/services/api";
import {Search} from "@mui/icons-material";

const SymptomSelector = ({onSelect}: { onSelect: (value: Symptom) => void }) => {
    const hint = React.useRef('');
    const [value, setValue] = useState<string>("")
    const {getData} = useGetData();
    const [symptoms, setSymptoms] = useState<Symptom[]>([]);
    useEffect(() => {
        if (!symptoms.length)
            getData(route("api.symptoms.index"))
                .then((res) => setSymptoms(res.data as Symptom[]))
    }, []);
    const handleChange = (event: React.SyntheticEvent, v: Symptom | null,) => {
        if (v)
            onSelect(v);
        setValue("")
    }

    return <>
        <Autocomplete
            disableClearable
            onKeyDown={(event) => {
                if (event.key === 'Tab') {
                    if (hint.current) {
                        setValue(hint.current);
                        event.preventDefault();
                    }
                }
            }}
            onBlur={() => {
                hint.current = '';
            }}
            disablePortal
            inputValue={value}
            getOptionLabel={option => option.name}
            filterOptions={(options, state) => {
                return options.filter((option) =>
                    option.name
                        .toLowerCase()
                        .trim()
                        .includes(state.inputValue.toLowerCase().trim()),
                );
            }}
            id="combo-box-hint-demo"
            options={symptoms}
            onChange={handleChange}
            renderInput={(params) => {
                return (
                    <Box sx={{position: 'relative'}}>
                        <Typography
                            sx={{position: 'absolute', opacity: 0.5, left: 14, top: 16}}
                        >
                            {hint.current}
                        </Typography>
                        <TextField
                            {...params}
                            inputProps={{
                                ...params.inputProps,
                                endAdornment: <InputAdornment position="end">
                                    <Search/>
                                </InputAdornment>,
                            }}
                            onChange={(e) => {
                                const newValue = e.target.value;
                                setValue(newValue);
                                const matchingOption = symptoms.find((option) =>
                                    option.name.startsWith(newValue),
                                );

                                if (newValue && matchingOption) {
                                    hint.current = matchingOption.name;
                                } else {
                                    hint.current = '';
                                }
                            }}
                            label="Search"
                        />
                    </Box>
                );
            }}
        />
    </>
}
export default SymptomSelector;
