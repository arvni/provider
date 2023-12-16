import React, {FormEvent, useEffect} from 'react';
import {Head} from '@inertiajs/react';
import {LoadingButton} from "@mui/lab";
import {Box, FormHelperText, Grid, TextField} from "@mui/material";
import GuestLayout from "@/Layouts/GuestLayout";
import routes from "@/routes";
import {useSubmitForm} from "@/services/api";
import {resetPasswordValidator} from "@/services/validate";
import PasswordField from "@/Components/PasswordField";
import ReCAPTCHA from "react-google-recaptcha";

export default function ResetPassword({token, email}: { token: string, email: string }) {
    const {
        data,
        setData,
        submit,
        processing,
        errors,
        reset,
        setError,
        clearErrors,
        handleChange
    } = useSubmitForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
        captcha: "",
        __method: "put"
    }, routes.postResetPassword.link);

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation', 'captcha');
        };
    }, []);
    const recaptchaRef = React.createRef<ReCAPTCHA>();
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        clearErrors();
        recaptchaRef.current?.reset();
        if (resetPasswordValidator(data, setError)) {
            submit();
        }
    }
    const formChange = (key: string, value: any): void => setData(previousData => ({
        ...previousData,
        [key]: value
    }));
    const handleCaptchaChanged = (token: string | null): void => formChange("captcha", token ?? "");
    const resetCaptcha = (): void => formChange("captcha", "");

    return (
        <GuestLayout>
            <Head title="Reset Password"/>
            <Box component="form" onSubmit={handleSubmit} action={routes.postResetPassword.link} method="post">
                <Grid container spacing={2}>
                    <Grid item xs={12} sx={{width: "100%"}}>
                        <TextField
                            disabled
                            name={"email"}
                            value={data.email}
                            helperText={errors.email ?? ""}
                            error={errors.hasOwnProperty("email")}
                            type={"email"}
                            label={"Email"}
                            autoComplete={"username"}
                            required
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12} sx={{width: "100%"}}>
                        <PasswordField
                            name={"password"}
                            value={data.password}
                            helperText={errors.password ?? ""}
                            error={errors.hasOwnProperty("password")}
                            type={"password"}
                            label={"Password"}
                            autoComplete={"new-password"}
                            required
                            onChange={handleChange}
                            fullwidth
                        />
                    </Grid>

                    <Grid item xs={12} sx={{width: "100%"}}>
                        <PasswordField
                            name={"password_confirmation"}
                            value={data.password_confirmation}
                            helperText={errors.password_confirmation ?? ""}
                            error={errors.hasOwnProperty("password_confirmation")}
                            type={"password"}
                            label={"Confirm Password"}
                            autoComplete={"new-password"}
                            required
                            onChange={handleChange}
                            fullwidth
                        />
                    </Grid>

                    <Grid item xs={12} sx={{width: "100%"}}>
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey={import.meta.env.VITE_GOOGLE_CAPTCHA_SITE_KEY}
                            onChange={handleCaptchaChanged}
                            onExpired={resetCaptcha}/>
                        {errors.captcha && <FormHelperText error={!!errors.captcha}>{errors.captcha}</FormHelperText>}
                    </Grid>
                    <Grid item display={"flex"} flexDirection={"row"} justifyContent={"center"}
                          alignItems={"center"} sx={{width: "100%"}}>
                        <LoadingButton loading={processing} type={"submit"} variant={"contained"}>Update</LoadingButton>
                    </Grid>
                </Grid>
            </Box>
        </GuestLayout>
    );
}
