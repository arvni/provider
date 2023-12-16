import React, {DragEventHandler, EventHandler, MouseEventHandler, useEffect, useState} from "react";
import {
    Avatar,
    Box,
    IconButton,
    InputBase,
    LinearProgress,
    List,
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText,
    Paper,
    Typography
} from "@mui/material";
import {Download, Upload, UploadFile} from "@mui/icons-material";
import {uploadFiles} from "@/services/api";
import {AxiosError} from "axios";
import {NewFileType} from "@/Pages/Order/Add";

interface UploaderProps {
    value: NewFileType[] | undefined,
    name: string,
    error?: boolean,
    helperText?: string,
    handleChange: (name: string, value: NewFileType[]) => void,
    url: string,
    label?: string
}

const Uploader = ({value, name, handleChange, error, helperText, url, label}: UploaderProps) => {
    const {upload, progress, resetProgress} = uploadFiles(url);
    const [files, setFiles] = useState<NewFileType[]>(value ?? [])
    const handleDrop: DragEventHandler<HTMLElement> = async (e) => {
        stopDefault(e);
        setFiles(prevState => [...prevState, ...convertFileList(e.dataTransfer.files)]);
        await onUpload(e.dataTransfer.files)
    }
    const handleMouseEnter: MouseEventHandler = (e) => {
        stopDefault(e);

    }
    const handleMouseOut: MouseEventHandler = (e) => {
        stopDefault(e)
    }
    const stopDefault: MouseEventHandler = (e) => {
        e.stopPropagation();
        e.preventDefault();
    }
    const handleUpload: React.ChangeEventHandler<HTMLInputElement> = async (e) => {
        if (e.target.files) {
            setFiles(prevState => [...prevState, ...convertFileList(e.target.files)]);
            await onUpload(e.target.files);
        }
    }
    const convertFileList = (fileList: FileList | null): NewFileType[] => {
        let newFileList: NewFileType[] = [];
        if (fileList)
            for (let i = 0; i < fileList.length; i++) {
                newFileList.push({name: fileList[i].name, url: ""});
            }

        return newFileList;
    }

    const onUpload = async (fileList: FileList) => {
        for (let i = 0; i < fileList.length; i++) {
            try {
                let {data} = await upload(fileList[i]);
                let newFiles = [...files];
                if (newFiles[i + newFiles.length])
                    newFiles[i + newFiles.length].url = data.url;
                else
                    newFiles[i + newFiles.length] = {name: fileList[i].name, url: data.url}
                setFiles(newFiles);
                handleChange(name, newFiles);
                resetProgress()
            } catch (e: AxiosError | any) {
                let newFiles = [...files];
                if (newFiles[i + newFiles.length])
                    newFiles[i + newFiles.length].error = e.message;
                setFiles(newFiles);
            }
        }
    }

    return <Box sx={{minWidth: "200px",}}
                onDropCapture={handleDrop}
                onDrop={handleDrop}
                onDragEnter={handleMouseEnter}
                onDragOver={stopDefault}
                onDragLeave={handleMouseOut}>
        {label && <Typography>{label}</Typography>}
        <Paper elevation={2}
               sx={{
                   display: "flex",
                   flexDirection: "column",
                   gap: 2,
                   alignItems: "center",
                   justifyContent: "center",
                   border: "1px solid",
                   borderColor: error ? "#c02d2d" : "inherit",
                   p: 2
               }}>
            <Upload sx={{width: "3rem", height: "3rem"}}/>
            <InputBase type="file" sx={{display: "none"}} id={"uploader-" + name} onChange={handleUpload}/>
            <label htmlFor={"uploader-" + name}>
                <a style={{
                    cursor: "pointer",
                    padding: "1rem",
                    backgroundColor: "#1976d2",
                    borderRadius: "5px",
                    color: "white"
                }}>Add Files</a>
            </label>
            {helperText && <Typography color={error ? "error" : "inherit"}>{helperText}</Typography>}
            <List>
                {files.map((file: NewFileType, index) =>
                    <ListItem key={index}>
                        <ListItemAvatar>
                            <Avatar>
                                {index + 1}
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={file.name} secondary={file.error && <Typography color={"#f20f0f"}>
                            {file.error}
                        </Typography>}/>
                        <ListItemSecondaryAction>
                            <IconButton href={file.url} target={"_blank"}>
                                <Download/>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>)}
                {progress ? <ListItem>
                    <LinearProgress value={progress * 100}/>
                </ListItem> : null}
            </List>
        </Paper>
    </Box>
}

export default Uploader;
