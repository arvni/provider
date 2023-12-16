import { j as jsxs, a as jsx, F as Fragment } from "../ssr.js";
import { Box, Typography, Paper, InputBase, List, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton, LinearProgress, Grid, RadioGroup, FormControlLabel, Radio, Table, TableHead, TableRow, TableCell, Stack, Popover, TableBody, TextField, MenuItem, FormControl, FormGroup, Checkbox, Button } from "@mui/material";
import SymptomSelector from "./SymptomSelector-be1aa2fe.js";
import { Upload, Download, InfoRounded, Delete } from "@mui/icons-material";
import * as React from "react";
import { useState } from "react";
import { e as uploadFiles } from "./api-dec76595.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
import "axios";
const Uploader = ({ value, name, handleChange, error, helperText, url, label }) => {
  const { upload, progress, resetProgress } = uploadFiles(url);
  const [files, setFiles] = useState(value ?? []);
  const handleDrop = async (e) => {
    stopDefault(e);
    setFiles((prevState) => [...prevState, ...convertFileList(e.dataTransfer.files)]);
    await onUpload(e.dataTransfer.files);
  };
  const handleMouseEnter = (e) => {
    stopDefault(e);
  };
  const handleMouseOut = (e) => {
    stopDefault(e);
  };
  const stopDefault = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };
  const handleUpload = async (e) => {
    if (e.target.files) {
      setFiles((prevState) => [...prevState, ...convertFileList(e.target.files)]);
      await onUpload(e.target.files);
    }
  };
  const convertFileList = (fileList) => {
    let newFileList = [];
    if (fileList)
      for (let i = 0; i < fileList.length; i++) {
        newFileList.push({ name: fileList[i].name, url: "" });
      }
    return newFileList;
  };
  const onUpload = async (fileList) => {
    for (let i = 0; i < fileList.length; i++) {
      try {
        let { data } = await upload(fileList[i]);
        let newFiles = [...files];
        if (newFiles[i + newFiles.length])
          newFiles[i + newFiles.length].url = data.url;
        else
          newFiles[i + newFiles.length] = { name: fileList[i].name, url: data.url };
        setFiles(newFiles);
        handleChange(name, newFiles);
        resetProgress();
      } catch (e) {
        let newFiles = [...files];
        if (newFiles[i + newFiles.length])
          newFiles[i + newFiles.length].error = e.message;
        setFiles(newFiles);
      }
    }
  };
  return /* @__PURE__ */ jsxs(
    Box,
    {
      sx: { minWidth: "200px" },
      onDropCapture: handleDrop,
      onDrop: handleDrop,
      onDragEnter: handleMouseEnter,
      onDragOver: stopDefault,
      onDragLeave: handleMouseOut,
      children: [
        label && /* @__PURE__ */ jsx(Typography, { children: label }),
        /* @__PURE__ */ jsxs(
          Paper,
          {
            elevation: 2,
            sx: {
              display: "flex",
              flexDirection: "column",
              gap: 2,
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid",
              borderColor: error ? "#c02d2d" : "inherit",
              p: 2
            },
            children: [
              /* @__PURE__ */ jsx(Upload, { sx: { width: "3rem", height: "3rem" } }),
              /* @__PURE__ */ jsx(InputBase, { type: "file", sx: { display: "none" }, id: "uploader-" + name, onChange: handleUpload }),
              /* @__PURE__ */ jsx("label", { htmlFor: "uploader-" + name, children: /* @__PURE__ */ jsx("a", { style: {
                cursor: "pointer",
                padding: "1rem",
                backgroundColor: "#1976d2",
                borderRadius: "5px",
                color: "white"
              }, children: "Add Files" }) }),
              helperText && /* @__PURE__ */ jsx(Typography, { color: error ? "error" : "inherit", children: helperText }),
              /* @__PURE__ */ jsxs(List, { children: [
                files.map((file, index) => /* @__PURE__ */ jsxs(ListItem, { children: [
                  /* @__PURE__ */ jsx(ListItemAvatar, { children: /* @__PURE__ */ jsx(Avatar, { children: index + 1 }) }),
                  /* @__PURE__ */ jsx(ListItemText, { primary: file.name, secondary: file.error && /* @__PURE__ */ jsx(Typography, { color: "#f20f0f", children: file.error }) }),
                  /* @__PURE__ */ jsx(ListItemSecondaryAction, { children: /* @__PURE__ */ jsx(IconButton, { href: file.url, target: "_blank", children: /* @__PURE__ */ jsx(Download, {}) }) })
                ] }, index)),
                progress ? /* @__PURE__ */ jsx(ListItem, { children: /* @__PURE__ */ jsx(LinearProgress, { value: progress * 100 }) }) : null
              ] })
            ]
          }
        )
      ]
    }
  );
};
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
const Title = (props) => {
  return /* @__PURE__ */ jsx(Typography, { ...props, fontWeight: "900", sx: { mb: 4, mt: 6 }, children: props.children });
};
const ClinicalDetailsForm = (props) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z;
  const handleAffectedChange = (_, value) => {
    handleChange("affected", value);
  };
  const handleSymptomSelect = (symptom) => {
    var _a2;
    let symptoms = [...((_a2 = props == null ? void 0 : props.clinicalInformation) == null ? void 0 : _a2.symptoms) ?? [], symptom];
    handleChange("symptoms", symptoms);
  };
  const handleChange = (key, value) => props.onChange(key, value);
  const handleSymptomChange = (index) => (e) => {
    let symptoms = props.clinicalInformation.symptoms;
    if (symptoms == null ? void 0 : symptoms.length)
      symptoms[index].value = e.target.value;
    handleChange("symptoms", symptoms);
  };
  const handleFieldsChange = (e) => handleChange(e.target.name, e.target.value);
  const removeSymptom = (index) => () => {
    var _a2;
    let symptoms = [...((_a2 = props.clinicalInformation) == null ? void 0 : _a2.symptoms) ?? []];
    symptoms.splice(index, 1);
    handleChange("symptoms", symptoms);
  };
  const handleFamilyHistoryChange = (e, checked) => {
    var _a2;
    let familyHistory = { ...(_a2 = props.clinicalInformation) == null ? void 0 : _a2.familyHistory };
    let newValue = { [e.target.name]: checked };
    if (e.target.name == "other" && !checked)
      newValue.otherHistory = "";
    Object.assign(familyHistory, newValue);
    handleChange("familyHistory", familyHistory);
  };
  const handleOtherFamilyHistoryChange = (e) => {
    var _a2;
    let familyHistory = { ...(_a2 = props.clinicalInformation) == null ? void 0 : _a2.familyHistory };
    Object.assign(familyHistory, { ["otherHistory"]: e.target.value });
    handleChange("familyHistory", familyHistory);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const handleFilesChange = (name, files) => {
    handleChange(name, files);
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(Grid, { container: true, spacing: 2, mt: 2, children: [
    /* @__PURE__ */ jsxs(Grid, { item: true, xs: 12, children: [
      /* @__PURE__ */ jsx(Title, { children: "Specify Clinical Information" }),
      /* @__PURE__ */ jsxs(
        RadioGroup,
        {
          row: true,
          "aria-labelledby": "affected-details-label",
          name: "affected",
          value: (_a = props == null ? void 0 : props.clinicalInformation) == null ? void 0 : _a.affected,
          onChange: handleAffectedChange,
          children: [
            /* @__PURE__ */ jsx(FormControlLabel, { value: "0", control: /* @__PURE__ */ jsx(Radio, {}), label: "Clinically unaffected" }),
            /* @__PURE__ */ jsx(FormControlLabel, { value: "1", control: /* @__PURE__ */ jsx(Radio, {}), label: "Affected" })
          ]
        }
      )
    ] }),
    ((_b = props.clinicalInformation) == null ? void 0 : _b.affected) == "1" && /* @__PURE__ */ jsxs(Grid, { item: true, xs: 12, children: [
      /* @__PURE__ */ jsx(Title, { children: "Specify Clinical Symptoms" }),
      /* @__PURE__ */ jsx(SymptomSelector, { onSelect: handleSymptomSelect }),
      /* @__PURE__ */ jsxs(Table, { sx: { my: 2 }, children: [
        /* @__PURE__ */ jsx(TableHead, { sx: { background: "#e0e0e0" }, children: /* @__PURE__ */ jsxs(TableRow, { children: [
          /* @__PURE__ */ jsx(TableCell, { children: "Symptom name" }),
          /* @__PURE__ */ jsxs(TableCell, { children: [
            /* @__PURE__ */ jsxs(Stack, { direction: "row", spacing: 2, alignItems: "center", children: [
              /* @__PURE__ */ jsx("span", { children: "Age of onset" }),
              /* @__PURE__ */ jsx(
                InfoRounded,
                {
                  "aria-owns": open ? "mouse-over-popover" : void 0,
                  "aria-haspopup": "true",
                  onMouseEnter: handlePopoverOpen,
                  onMouseLeave: handlePopoverClose
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              Popover,
              {
                id: "mouse-over-popover",
                sx: {
                  pointerEvents: "none"
                },
                open,
                anchorEl,
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "left"
                },
                transformOrigin: {
                  vertical: "top",
                  horizontal: "left"
                },
                onClose: handlePopoverClose,
                disableRestoreFocus: true,
                children: /* @__PURE__ */ jsx(Box, { sx: { maxWidth: "200px" }, children: /* @__PURE__ */ jsx(Typography, { sx: { p: 1 }, fontSize: "15px", children: "The age of onset is the age at which an individual acquires, develops, or first experiences a condition or symptoms of a disease or disorder" }) })
              }
            )
          ] }),
          /* @__PURE__ */ jsx(TableCell, { children: "Remove" })
        ] }) }),
        /* @__PURE__ */ jsx(TableBody, { children: (_d = (_c = props == null ? void 0 : props.clinicalInformation) == null ? void 0 : _c.symptoms) == null ? void 0 : _d.map((symptom, index) => /* @__PURE__ */ jsxs(
          TableRow,
          {
            children: [
              /* @__PURE__ */ jsx(TableCell, { children: symptom.name }),
              /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(
                TextField,
                {
                  size: "small",
                  select: true,
                  value: symptom.value,
                  error: props.errors.hasOwnProperty("symptoms." + index + ".value"),
                  helperText: props.errors.hasOwnProperty("symptoms." + index + ".value") ? props.errors["symptoms." + index + ".value"] : "",
                  onChange: handleSymptomChange(index),
                  sx: { width: "300px" },
                  placeholder: "Age of onset",
                  children: statuses.map((option, index2) => /* @__PURE__ */ jsx(MenuItem, { value: option, children: option }, index2))
                }
              ) }),
              /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(IconButton, { color: "error", onClick: removeSymptom(index), children: /* @__PURE__ */ jsx(Delete, {}) }) })
            ]
          },
          "symptom-" + symptom.id
        )) })
      ] }),
      !((_f = (_e = props.clinicalInformation) == null ? void 0 : _e.symptoms) == null ? void 0 : _f.length) && /* @__PURE__ */ jsxs(
        Stack,
        {
          direction: "row",
          spacing: 2,
          sx: { width: "100%", my: 8 },
          justifyContent: "center",
          children: [
            /* @__PURE__ */ jsx(InfoRounded, { color: ((_g = props.errors) == null ? void 0 : _g.symptoms) ? "error" : "info" }),
            /* @__PURE__ */ jsx(Typography, { color: ((_h = props.errors) == null ? void 0 : _h.symptoms) ? "error" : "info", children: "Please document clinical symptoms for your patient to ensure the quality of the medical diagnosis" })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        TextField,
        {
          multiline: true,
          rows: 3,
          fullWidth: true,
          name: "otherSymptom",
          value: (_i = props.clinicalInformation) == null ? void 0 : _i.otherSymptom,
          onChange: handleFieldsChange,
          label: "Document Symptoms not listed in the HPO catalogue"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(Grid, { item: true, xs: 12, children: [
      /* @__PURE__ */ jsx(Title, { children: "Document Family History" }),
      /* @__PURE__ */ jsx(FormControl, { component: "fieldset", children: /* @__PURE__ */ jsxs(FormGroup, { row: true, children: [
        /* @__PURE__ */ jsx(
          FormControlLabel,
          {
            value: "Family history of cancer",
            name: "cancer",
            control: /* @__PURE__ */ jsx(
              Checkbox,
              {
                onChange: handleFamilyHistoryChange
              }
            ),
            label: "Family history of cancer",
            labelPlacement: "end",
            checked: (_k = (_j = props.clinicalInformation) == null ? void 0 : _j.familyHistory) == null ? void 0 : _k.cancer
          }
        ),
        /* @__PURE__ */ jsx(
          FormControlLabel,
          {
            value: "Family history of heart disease",
            name: "heart",
            control: /* @__PURE__ */ jsx(
              Checkbox,
              {
                onChange: handleFamilyHistoryChange
              }
            ),
            label: "Family history of heart disease",
            labelPlacement: "end",
            checked: (_m = (_l = props.clinicalInformation) == null ? void 0 : _l.familyHistory) == null ? void 0 : _m.heart
          }
        ),
        /* @__PURE__ */ jsx(
          FormControlLabel,
          {
            value: "Other Family History",
            name: "other",
            control: /* @__PURE__ */ jsx(
              Checkbox,
              {
                onChange: handleFamilyHistoryChange
              }
            ),
            checked: (_o = (_n = props.clinicalInformation) == null ? void 0 : _n.familyHistory) == null ? void 0 : _o.other,
            label: "Other Family History",
            labelPlacement: "end"
          }
        )
      ] }) }),
      ((_q = (_p = props.clinicalInformation) == null ? void 0 : _p.familyHistory) == null ? void 0 : _q.other) && /* @__PURE__ */ jsx(
        TextField,
        {
          multiline: true,
          rows: 3,
          fullWidth: true,
          sx: { mt: 2 },
          value: (_s = (_r = props.clinicalInformation) == null ? void 0 : _r.familyHistory) == null ? void 0 : _s.otherHistory,
          onChange: handleOtherFamilyHistoryChange,
          label: "Document Symptoms not listed in the HPO catalogue"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(Grid, { item: true, xs: 12, children: [
      /* @__PURE__ */ jsx(Title, { children: "Additional Information (for all family members)" }),
      /* @__PURE__ */ jsx(
        TextField,
        {
          multiline: true,
          rows: 3,
          fullWidth: true,
          sx: { mt: 2 },
          value: (_t = props.clinicalInformation) == null ? void 0 : _t.additionalInformation,
          onChange: handleFieldsChange,
          name: "additionalInformation",
          label: "Document other family history"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(Grid, { item: true, xs: 12, children: [
      /* @__PURE__ */ jsx(Title, { children: "Upload Supporting Documents" }),
      /* @__PURE__ */ jsxs(Stack, { direction: "row", gap: 2, flexWrap: "wrap", children: [
        /* @__PURE__ */ jsx(
          Uploader,
          {
            value: (_u = props.clinicalInformation) == null ? void 0 : _u.family_history_document,
            label: "Family History",
            name: "family_history_document",
            handleChange: handleFilesChange,
            error: props.errors.hasOwnProperty("family_history_document"),
            helperText: ((_v = props.errors) == null ? void 0 : _v.family_history_document) ?? "",
            url: route("upload", { tag: "familyHistory", relatedClass: "Order", relatedId: props.id })
          }
        ),
        /* @__PURE__ */ jsx(
          Uploader,
          {
            value: (_w = props.clinicalInformation) == null ? void 0 : _w.medical_reports_document,
            label: "Medical Reports",
            name: "medical_reports_document",
            handleChange: handleFilesChange,
            url: route("upload", { tag: "medicalReports", relatedClass: "Order", relatedId: props.id })
          }
        ),
        /* @__PURE__ */ jsx(
          Uploader,
          {
            value: (_x = props.clinicalInformation) == null ? void 0 : _x.pedigree_document,
            label: "Pedigree",
            name: "pedigree_document",
            handleChange: handleFilesChange,
            url: route("upload", { tag: "pedigree", relatedClass: "Order", relatedId: props.id })
          }
        ),
        /* @__PURE__ */ jsx(
          Uploader,
          {
            value: (_y = props.clinicalInformation) == null ? void 0 : _y.targeted_gene_list_document,
            label: "Targeted Gene List",
            name: "targeted_gene_list_document",
            handleChange: handleFilesChange,
            url: route("upload", {
              tag: "targetedGeneList",
              relatedClass: "Order",
              relatedId: props.id
            })
          }
        ),
        /* @__PURE__ */ jsx(
          Uploader,
          {
            value: (_z = props.clinicalInformation) == null ? void 0 : _z.other_document,
            label: "Other",
            name: "other_document",
            handleChange: handleFilesChange,
            url: route("upload", { tag: "other", relatedClass: "Order", relatedId: props.id })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, mt: 2, children: /* @__PURE__ */ jsx(Stack, { alignItems: "flex-end", children: /* @__PURE__ */ jsx(Button, { variant: "contained", onClick: props.onSubmit, children: "Save & continue" }) }) })
  ] }) });
};
export {
  ClinicalDetailsForm as default
};
