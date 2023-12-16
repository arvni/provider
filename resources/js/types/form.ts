import {ChangeEvent, ChangeEventHandler, FormEventHandler, InputHTMLAttributes, ReactElement} from "react";
import {SxProps} from "@mui/system";
import {Theme} from "@mui/material/styles";
import {SelectInputProps} from "@mui/material/Select/SelectInput";
import {User} from "@/types/index";


export interface FormProps {
    send: FormEventHandler,
    action: string,
    fields: Field<any>[],
    children?: string | ReactElement | ReactElement [],
    actions?:  ReactElement | ReactElement [],
    sx?: SxProps<Theme>,
    onchange: ((e: ChangeEvent<HTMLInputElement | HTMLFormElement>)=> void )
        & ChangeEventHandler<any>
        & SelectInputProps<any>['onChange']
        & ((token: string | null) => void)
}

type OnError<T> = (name: keyof T & string, message: string) => void;

export type Validator<T> = (data: T, onerror: OnError<T>,user?:undefined|User) => boolean


export interface LoginData {
    email: string,
    password: string,
    remember: boolean,
    captcha: string
}

export interface ChangPasswordData {
    current_password: string,
    password: string,
    password_confirmation: string,
}

export enum Types {
    text,
    textarea,
    email,
    date,
    number,
    password,
    description,
    checkbox,
    captcha,
    selectSearch,
    select
}

type TypesStrings = keyof typeof Types;

type Option = {
    label: string,
    value: any
}

export interface Field<T> {
    name?: string,
    label?: string,
    value: T,
    type: TypesStrings,
    onChange?: (e: ChangeEvent<HTMLInputElement>, value?: any) => void,
    error?: boolean,
    helperText?: string|undefined,
    multiline?: boolean,
    validate?: Function,
    autoComplete?: string,
    disabled?: boolean,
    required?: boolean,
    url?: string,
    options?: Option[],
    inputProps?:InputHTMLAttributes<any>
    multiple?:boolean,
    fullWidth?:boolean,
    rows?:number,
    size?:"small"|"medium",
    sx?:Record<string, string>
}
