import {router, useForm} from "@inertiajs/react";
import React, {ChangeEvent, ChangeEventHandler, useEffect, useRef, useState} from "react";
import axios, {AxiosProgressEvent} from "axios";
import {OrderType} from "@/types/table";
import {VisitOptions} from "@inertiajs/core";
import {SelectInputProps} from "@mui/material/Select/SelectInput";

type DottedFeatureKey<T> = {
    [K in keyof T]: K extends string
        ? `${K & string}.${DottedFeatureKey<T[K]>}`
        : never;
}[keyof T];

interface SubmitForm<T extends Record<string, any>> {
    data: T,
    post: (url: string, options?: VisitOptions) => void,
    setData: ((data: T) => void) & ((data: (previousData: T) => T) => void) & (<K extends keyof T>(key: K, value: T[K]) => void),
    processing: boolean,
    submit: (options?: VisitOptions) => void,
    setError: (field: keyof T, value: string) => void,
    errors: Partial< Record< DottedFeatureKey<T>, string>>,
    clearErrors: (...fields: (keyof T)[]) => void,
    handleChange: ((e: ChangeEvent<HTMLInputElement | HTMLFormElement>) => void)
        & ChangeEventHandler<any>
        & SelectInputProps<any>['onChange']
        & ((token: string | null) => void),
    reset: (...fields: (keyof T)[]) => void,
    wasSuccessful: boolean,
}

export const useSubmitForm = <T extends Record<string, any>>(defaultValues: T, route: string | null): SubmitForm<T> => {
    const {
        data,
        setData,
        post,
        processing,
        setError,
        errors,
        clearErrors,
        reset,
        wasSuccessful,
    } = useForm(defaultValues);
    const submit = (options?: VisitOptions) => {
        if (typeof route === "string") {
            post(route, options);
        }
    }
    const handleChange: SubmitForm<any>["handleChange"] = (e) => {
        if (e && typeof e !== "string")
            setData(e.target.name, e.target.type == "checkbox" ? e.target.checked : e.target.value);
    }

    return {
        data,
        post,
        setData,
        processing,
        submit,
        setError,
        errors,
        clearErrors,
        handleChange,
        reset,
        wasSuccessful
    };
}

export const uploadFiles = (url: string) => {
    const [progress, setProgress] = useState<number>(0);
    const upload = (file: File) => {
        let formData = new FormData();
        formData.set("file", file);
        return axios.post(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            onUploadProgress: (e: AxiosProgressEvent) => setProgress(e.progress ?? 0)
        })
    }
    const resetProgress = () => setProgress(0);
    return {progress, upload, resetProgress}
}

export const useChangePage = () => {
    const {processing, get: goto} = useForm();
    const get = (url: string) => goto(url);
    return {
        processing, get
    }
}


type UsePageReload = (request: Record<any, any>, only: string[]) => {
    processing: boolean;
    reload: () => void;
    get: (url: string) => void;
    data: Record<any, any>,
    setData: React.Dispatch<React.SetStateAction<Record<any, any>>>;
    onPageChange: (event: ChangeEvent<unknown>, page: number) => void;
    onPageSizeChange: (pageSize: number) => void;
    onFilterChange: ChangeEventHandler<any>
        & SelectInputProps<any>['onChange'];
    onOrderByChange: (field: string, type: OrderType) => void
}
export const usePageReload: UsePageReload = (request, only = []) => {
    const [data, setData] = useState(request);
    const firstUpdate = useRef(true);
    const [processing, setProcessing] = useState(false);
    const reload: () => void = () => router.reload({
        only,
        data,
        onStart: activateProcessing,
        onFinish: deactivateProcessing
    });
    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        reload();
    }, [data]);
    const onPageChange = (event: React.ChangeEvent<unknown>, page: number): void => {
        setData((prevData) => ({...prevData, page}));
    };
    const onPageSizeChange = (pageSize: number): void => {
        setData((prevData) => ({...prevData, pageSize}));
    };
    const onFilterChange: ChangeEventHandler<any>
        & SelectInputProps<any>['onChange'] = (e): void => {
        const {name, value} = e.target;
        let filter = changeObjectWithNestedName(name, value, data?.filter ?? {});
        setData((prevData) => ({
            ...prevData,
            page: 1,
            filter
        }));
    };
    const onOrderByChange = (field: string, type: OrderType): void => {
        setData((prevData) => ({...prevData, orderBy: {field, type}}));
    };
    const get = (url: string) => {

        router.visit(url, {
            onStart: activateProcessing,
            onFinish: deactivateProcessing,
        })
    }
    const activateProcessing = () => {
        setProcessing(true);
    }
    const deactivateProcessing = () => {
        setProcessing(false);
    }


    return {processing, reload, get, data, setData, onPageChange, onPageSizeChange, onFilterChange, onOrderByChange}
}

export const useGetData = () => {
    const [loading, setLoading] = useState(false);

    async function getData<T>(url: string, query?: Record<string, any>): Promise<{ data: T }> {
        setLoading(true);
        if (query) {
            url += "?" + new URLSearchParams(query).toString();
        }
        return axios.get(url).then(({data}: { data: { data: T } }) => {
            setLoading(false);
            return data;
        });
    }

    return {getData, loading};
}

export const useDelete = () => {
    const {post, processing} = useForm({_method: "delete"});
    return {submit: post, processing}
}

type PreviousValues = Record<string, any>;

function changeObjectWithNestedName(name: string, value: any, prevValues?: PreviousValues) {
    const output: PreviousValues = {...prevValues}, nestedProperties: (keyof PreviousValues)[] = name.split("."),
        lastPart: keyof PreviousValues | undefined = nestedProperties.pop();
    let currentObject = output;
    for (let i = nestedProperties.length - 1; i >= 0; i--) {
        if (nestedProperties[i]) {
            const property = nestedProperties[i];
            if (!currentObject[property]) {
                currentObject[property] = {};
            }
            currentObject = currentObject[property];
        }
    }
    if (lastPart)
        currentObject[lastPart] = value;
    return output;
}
