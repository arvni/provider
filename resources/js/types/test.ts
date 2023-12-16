import {Field} from "@/types/form";

export type Requirement = {
    id:string,
    label: string;
    type: Field<any>["type"];
    required: boolean;
    options?: string;
    value?: string | boolean | number
}

export type SampleType = {
    name: string,
    id: number | string
    description: string,
    pivot?: {
        id: string
    }
}

export interface Test {
    id?: number | string;
    name: string,
    code: string,
    shortName: string,
    description: string,
    turnaroundTime: number,
    form?: Record<string, any>,
    sample_types?: SampleType[],
    requirements: Requirement[]
}
