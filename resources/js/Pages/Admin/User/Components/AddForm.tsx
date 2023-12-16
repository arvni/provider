import {useSubmitForm} from "@/services/api";
import routes from "@/routes";
import {
    Autocomplete,
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Divider,
    Grid,
    TextField
} from "@mui/material";
import React, {ChangeEventHandler, FormEventHandler, MouseEventHandler} from "react";
import {LoadingButton} from "@mui/lab";
import {Save as SaveIcon} from "@mui/icons-material";
import {User} from "@/types";
import PasswordField from "@/Components/PasswordField";
import countries from "@/Data/countries";

const AddForm = ({
                     open,
                     onClose,
                     defaultValue
                 }: {
    open: boolean,
    onClose: () => void,
    defaultValue: User
}) => {
    const {
        data,
        submit,
        processing,
        handleChange,
        errors,
        setError,
        setData,
        reset,
        clearErrors
    } = useSubmitForm<User & { _method: string }>({
        ...defaultValue,
        _method: defaultValue.id ? "put" : "post"
    }, defaultValue.id ? routes.users.update.link(defaultValue.id) : routes.users.add.link);

    const handleClose: MouseEventHandler & (() => void) = () => {
        onClose();
        reset();
    }
    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        clearErrors();
        // if (storeSampleTypeValidator(data, setError))
        submit({onSuccess: handleClose});
    }
    const handleChangeMeta: (key: keyof User["meta"]) => ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (key) => (e) => {
        setData(previousData => ({
            ...previousData,
            meta: {
                ...previousData.meta,
                [key]: {
                    ...previousData.meta[key] ?? {},
                    [e.target.name]: e.target.value
                }
            }
        }));
    }

    const handleChangeMetaCountry = (key: keyof User["meta"]) => (_: any, value: string | null) => setData(previousData => ({
        ...previousData,
        meta: {
            ...previousData.meta,
            [key]: {
                ...previousData.meta[key] ?? {},
                country: value ?? ""
            }
        }
    }));

    return <Dialog open={open} onClose={handleClose} keepMounted fullWidth maxWidth={"lg"}>
        <DialogTitle>{data.id ? "Edit User" : "Add User"}</DialogTitle>
        <DialogContent>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{pt: "1em"}}
                action={data.id ? routes.sampleTypes.update.link(data.id) : routes.sampleTypes.add.link}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <TextField
                            fullWidth
                            name="name"
                            value={data.name ?? ""}
                            helperText={errors.name}
                            error={!!errors.name}
                            onChange={handleChange}
                            label="Name"
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <TextField
                            fullWidth
                            name="userName"
                            value={data.userName ?? ""}
                            helperText={errors.userName}
                            error={!!errors.userName}
                            onChange={handleChange}
                            label="UserName"
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <TextField
                            fullWidth
                            name="email"
                            value={data.email ?? ""}
                            helperText={errors.email}
                            error={!!errors.email}
                            onChange={handleChange}
                            label="Email"
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <TextField
                            fullWidth
                            name="mobile"
                            value={data.mobile ?? ""}
                            helperText={errors.mobile}
                            error={!!errors.mobile}
                            onChange={handleChange}
                            label="Mobile"
                            required
                        />
                    </Grid>
                    {!defaultValue.id && <>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <PasswordField
                                name="password"
                                value={data.password ?? ""}
                                helperText={errors.password}
                                error={!!errors.password}
                                onChange={handleChange}
                                label="Password"
                                fullwidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <PasswordField
                                name="password_confirmation"
                                value={data.password_confirmation ?? ""}
                                helperText={errors.password_confirmation}
                                error={!!errors.password_confirmation}
                                onChange={handleChange}
                                fullwidth
                                label="Password Confirmation"
                                required
                            />
                        </Grid>
                    </>}
                    <Grid item xs={12}>
                        <Divider>
                            <strong>Contact Information</strong>
                        </Divider>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            multiline
                            rows={2}
                            fullWidth
                            name="address"
                            value={data?.meta?.contact?.address}
                            helperText={errors ? errors["meta.contact.address"] : ""}
                            error={errors.hasOwnProperty("meta.contact.address")}
                            onChange={handleChangeMeta("contact")}
                            label="Address"/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <TextField
                            fullWidth
                            name="city"
                            value={data?.meta?.contact?.city}
                            helperText={errors["meta.contact.city"]}
                            error={errors.hasOwnProperty("meta.contact.city")}
                            onChange={handleChangeMeta("contact")}
                            label="City"/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Autocomplete
                            options={countries.map(item => item.label)}
                            value={data?.meta?.contact?.country ?? ""}
                            onChange={handleChangeMetaCountry("contact")}
                            renderInput={(params) => <TextField {...params}
                                                                name="country"
                                                                fullWidth
                                                                label="Country"
                                                                helperText={errors["meta.contact.country"]}
                                                                error={errors.hasOwnProperty("meta.contact.country")}/>}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Divider>
                            <strong> Billing Information</strong>
                        </Divider>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <TextField
                            fullWidth
                            name="name"
                            value={data.meta?.billing?.name ?? ""}
                            helperText={errors["meta.billing.name"]}
                            error={errors.hasOwnProperty("meta.billing.name")}
                            onChange={handleChangeMeta("billing")}
                            label="Name"
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <TextField
                            fullWidth
                            name="email"
                            value={data.meta?.billing?.email ?? ""}
                            helperText={errors["meta.billing.email"]}
                            error={errors.hasOwnProperty("meta.billing.email")}
                            onChange={handleChangeMeta("billing")}
                            label="Email"
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <TextField
                            fullWidth
                            name="phone"
                            value={data.meta.billing.phone ?? ""}
                            helperText={errors["meta.billing.phone"]}
                            error={errors.hasOwnProperty("meta.billing.phone")}
                            onChange={handleChangeMeta("billing")}
                            label="Phone"
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Autocomplete
                            options={countries.map(item => item.label)}
                            value={data?.meta?.billing?.country ?? ""}
                            onChange={handleChangeMetaCountry("billing")}
                            renderInput={(params) => <TextField {...params}
                                                                name="country"
                                                                fullWidth
                                                                label="Country"
                                                                helperText={errors["meta.billing.country"]}
                                                                error={errors.hasOwnProperty("meta.billing.country")}/>}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <TextField
                            fullWidth
                            name="city"
                            value={data?.meta?.billing?.city}
                            helperText={errors["meta.contact.city"]}
                            error={errors.hasOwnProperty("meta.billing.city")}
                            onChange={handleChangeMeta("billing")}
                            label="City"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            multiline
                            rows={2}
                            fullWidth
                            name="address"
                            value={data?.meta?.billing?.address}
                            helperText={errors["meta.billing.address"]}
                            error={errors.hasOwnProperty("meta.billing.address")}
                            onChange={handleChangeMeta("billing")}
                            label="Address"/>
                    </Grid>
                </Grid>
            </Box>
        </DialogContent>
        <DialogActions>
            <Button
                onClick={handleClose}
                disabled={processing}
                variant={"text"}
                size={"large"}
            >Cancel</Button>
            <LoadingButton
                onClick={handleSubmit}
                loading={processing}
                size={"medium"}
                variant={"contained"}
                type={"submit"}
                startIcon={<SaveIcon/>}
            >Submit</LoadingButton>
        </DialogActions>
    </Dialog>;
}
export default AddForm;
