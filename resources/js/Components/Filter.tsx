import React, {ChangeEventHandler} from "react";
import {Stack, TableCell, TableRow} from "@mui/material";
import RenderFormField from "./RenderFormField";
import {Column} from "@/types/table";
import {SelectInputProps} from "@mui/material/Select/SelectInput";

const Filter = ({
                    columns,
                    onChange,
                }: {
    columns: Column[],
    onChange: ChangeEventHandler<any>
        & SelectInputProps<any>['onChange']
}) => {
    return <TableRow>
        {columns.map((col, index) => <TableCell key={index}>
            {col.filter && <>
                {Array.isArray(col.filter) ? <Stack spacing={1.5} direction={"column"}>
                        {col.filter.map((column, index) => <RenderFormField key={index}
                                                                            field={column} onchange={onChange}/>)}
                    </Stack> :
                    <RenderFormField field={col.filter} onchange={onChange}/>}
            </>}
        </TableCell>)}
    </TableRow>;
}

export default Filter;
