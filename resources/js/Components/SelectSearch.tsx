import React, {EventHandler, useEffect, useState, useRef, SyntheticEvent, SelectHTMLAttributes} from "react";
import {Autocomplete, SelectChangeEvent, TextField} from "@mui/material";
import axios from "axios";

interface SelectSearchParams {
    url: string,
    name?: string,
    helperText?: string,
    value: {id:number,name:string},
    error?: boolean,
    onchange: EventHandler<any>,
    label?: string,
    required?: boolean
}


const SelectSearch = ({
                          value,
                          onchange,
                          name="",
                          url="",
                          helperText="",
                          label="",
                          error=false,
                          required = false
                      }: SelectSearchParams) => {
    const ref = useRef();
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const handleSearch = (_:any, newInputValue:string) => {
        setSearch(newInputValue);
    }
    useEffect(() => {
        if (search.length > 2)
            searchText();
    }, [search]);
    const searchText = () => {
        setLoading(true);
        axios.get(url).then((result) => {
            setData(result.data.data);
            setLoading(false);
        });
    }
    const handleChange = (e:any, value:any) => {
        e.target.value=value
        e.target.name = name;
        onchange(e);
    }

    return <Autocomplete
        ref={ref}
        defaultValue={value}
        onChange={handleChange}
        onInputChange={handleSearch}
        options={data}
        fullWidth
        getOptionLabel={(option:{id:number,name:string})=>option.name}
        loading={loading}
        renderInput={(params) => <TextField {...params} helperText={helperText} error={error} label={label}
                                            required={required}/>}
    />;
}
export default SelectSearch;
