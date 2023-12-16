import {Test} from "@/types/test";
import {Stack} from "@mui/material";
import {ChangeEventHandler} from "react";
import FormField from "@/Components/RenderFormField";
import {SelectInputProps} from "@mui/material/Select/SelectInput";

const TestRequirement = ({requirements, onChange}: {
    requirements: Test["requirements"],
    onChange: (requirements: Test["requirements"]) => void,
}) => {
    const handleChange: (index: number) => ChangeEventHandler<any> & SelectInputProps<any>['onChange'] = (index) => (e) => {
        let newRequirements = [...requirements];
        newRequirements[index] = {...newRequirements[index], value: e.target.value};
        onChange(newRequirements);
    }
    return <Stack spacing={2}>
        {requirements.map((requirement, index) => <FormField key={requirement.id}
                                                             field={{
                                                                 name: requirement.label,
                                                                 label: requirement.label,
                                                                 value: requirement.value,
                                                                 type: requirement.type,
                                                                 size: "small",
                                                                 sx: {maxWidth: "80%"},
                                                                 onChange: handleChange(index),
                                                                 required: requirement.required
                                                             }}
                                                             onchange={handleChange(index)}
        />)}
    </Stack>
};

export default TestRequirement;
