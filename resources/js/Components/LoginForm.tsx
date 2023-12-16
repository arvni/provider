import React, {ChangeEventHandler, ComponentProps, FormEvent, useEffect} from "react";
import {Link} from "@inertiajs/react";
import {Box, Checkbox, FormControlLabel, FormHelperText, Grid, Stack, TextField} from "@mui/material";
import {LoadingButton} from "@mui/lab";
import routes from "@/routes";
import {loginFormValidator} from "@/services/validate";
import {useSubmitForm} from "@/services/api";
import PasswordField from "@/Components/PasswordField";
import ReCAPTCHA from "react-google-recaptcha";

const LoginForm = () => {
    const {
        data,
        setData,
        submit,
        processing,
        errors,
        setError,
        clearErrors,
        reset
    } = useSubmitForm({
        email: "",
        password: "",
        remember: false,
        captcha: ""
    }, routes.login.link);

    useEffect(() => {
        return () => {
            reset("password", "captcha");
        };
    }, [processing]);

    const recaptchaRef = React.createRef<ReCAPTCHA>();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        clearErrors();
        recaptchaRef.current?.reset();
        if (loginFormValidator(data, setError)) {
            submit();
        }
    }

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => formChange(e.target.name, e.target.value)
    const formChange = (key: string, value: any): void => setData(previousData => ({
        ...previousData,
        [key]: value
    }));

    const handleCaptchaChanged = (token: string | null): void => formChange("captcha", token ?? "");

    const resetCaptcha = (): void => formChange("captcha", "");
    const handleRememberChange = (e: React.SyntheticEvent, value: boolean): void => formChange("remember", value);

    return <Box component={"form"} onSubmit={handleSubmit} method={"post"} action={route("login")}>
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
                <PasswordField
                    name={"password"}
                    value={data.password}
                    helperText={errors.password ?? ""}
                    error={errors.hasOwnProperty("password")}
                    type={"password"}
                    label={"Password"}
                    autoComplete={"password"}
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
            <Grid item xs={12} sx={{width: "100%"}}>
                <FormControlLabel
                    onChange={handleRememberChange}
                    control={<Checkbox defaultChecked={data.remember} name="remember"/>}
                    label="Remember Password"/>
            </Grid>

            <Grid item sx={{width: "100%"}} >
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{width: "100%"}}>
                    <Link href={routes.forgetPassword.link}
                          style={{
                              textDecoration: "none",
                              fontFamily: '"Roboto","Helvetica","Arial",sans-serif'
                          }}>{routes.forgetPassword.label}</Link>
                    <LoadingButton loading={processing} type={"submit"} variant={"contained"}>Login</LoadingButton>
                </Stack>
            </Grid>
        </Grid>
    </Box>
}

export default LoginForm;
