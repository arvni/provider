import React, {ChangeEventHandler, FormEvent, useEffect} from "react";
import {Box, FormHelperText, Grid, TextField} from "@mui/material";
import {LoadingButton} from "@mui/lab";

import {useSubmitForm} from "@/services/api";
import routes from "@/routes";
import {forgetPasswordValidator} from "@/services/validate";
import ReCAPTCHA from "react-google-recaptcha";

const ForgetPasswordForm = () => {

    const {
        data,
        setData,
        processing,
        errors,
        setError,
        wasSuccessful,
        reset,
        clearErrors,
        submit
    } = useSubmitForm({
        email: '',
        captcha:""
    }, routes.postForgetPassword.link);
    const recaptchaRef = React.createRef<ReCAPTCHA>();

    useEffect(() => {
        if (wasSuccessful)
            reset()
    }, [wasSuccessful]);



    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => formChange(e.target.name, e.target.value)
    const formChange = (key: string, value: any): void => setData(previousData => ({
        ...previousData,
        [key]: value
    }));
    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();
        clearErrors();
        recaptchaRef.current?.reset();
        if (forgetPasswordValidator(data, setError))
            submit();
    }


    const handleCaptchaChanged = (token: string | null): void => formChange("captcha", token ?? "");

    const resetCaptcha = (): void => formChange("captcha", "");

    return<Box component={"form"} onSubmit={handleSubmit} method={"post"} action={route("login")}>
        <Grid container direction={"column"} spacing={2} alignItems={"center"} justifyContent={"center"}>
            <Grid item xs={12} sx={{width: "100%"}}>
                <TextField
                    onChange={handleChange}
                    name={"email"}
                    value={data.email}
                    helperText={errors.email ?? ""}
                    error={errors.hasOwnProperty("email")}
                    type={"email"}
                    label={"Email"}
                    autoComplete={"username"}
                    required
                    inputProps={{inputMode: "email"}}
                    fullWidth
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
        <Grid item>
            <LoadingButton type={"submit"} loading={processing} variant={"contained"}>Email Password Reset
                Link</LoadingButton>
        </Grid>
        </Grid>
    </Box>;
}

export default ForgetPasswordForm;
