import validator from 'validator';
import {ChangPasswordData, LoginData, Validator} from "@/types/form";
import {Order} from "@/Pages/Order/Add";
import {User} from "@/types";


export const loginFormValidator: Validator<LoginData> = (data, onerror) => {
    let output: boolean = true;
    if (!validator.isEmail(data.email) || validator.isEmpty(data.email)) {
        output = false;
        onerror("email", "Please Enter a Valid Email");
    }
    if (validator.isEmpty(data.password) || data.password.length < 6) {
        output = false;
        console.log(data.password);
        onerror("password", "Please Enter a Correct Password with at least 6 character");
    }
    if (validator.isEmpty(data.captcha)) {
        output = false;
        onerror("captcha", "Please Check the Captcha");
    }
    return output;
}

export const changePasswordValidator: Validator<ChangPasswordData> = (data, onerror, user) => {
    let output = true;
    if (!user && data.current_password.length < 8) {
        output = false;
        onerror("current_password", "Please Enter Correct Current Password");
    }
    if (data.password.length < 8 || data.password === data.current_password) {
        output = false;
        onerror("password", "Please Enter Correct New Password at lease 8 character");
    }
    if (data.password !== data.password_confirmation) {
        output = false;
        onerror("password_confirmation", "New Password and Password Confirmation isn't the same");
    }
    return output;
}

export const forgetPasswordValidator: Validator<{
    email: string,
    captcha: string
}> = (data, onerror) => {
    let output = true;
    if (!validator.isEmail(data.email)) {
        output = false;
        onerror("email", "Please Enter Valid Email");
    }
    if (validator.isEmpty(data.captcha)) {
        output = false;
        onerror("captcha", "Please check the google captcha");
    }
    return output;
}


export const resetPasswordValidator: Validator<{
    email: string,
    password: string,
    password_confirmation: string,
    captcha: string
}> = (data, onerror) => {
    let output = true;
    if (!validator.isEmail(data.email) || validator.isEmpty(data.email)) {
        output = false;
        onerror("email", "The link was corrupted");
    }
    if (data.password.length < 8) {
        output = false;
        onerror("password", "Please Enter Correct New Password at lease 8 character");
    }
    if (data.password !== data.password_confirmation) {
        output = false;
        onerror("password_confirmation", "New Password and Password Confirmation isn't the same");
    }
    return output;
}

export const storeOrderMaterialValidator: Validator<{
    material: string | null,
    quantity: number | null
}> = (data, onError) => {

    let output = true;
    if (validator.isEmpty(data.material ?? "")) {
        onError("material", "Please select Material");
        output = false;
    }
    if (data.quantity) {
        if (data.quantity < 1 && data.quantity > 500) {
            onError("material", "Please enter the quantity in range of 1 to 500");
            output = false;
        }
    } else {
        onError("material", "Please enter the quantity that you need");
        output = false;
    }

    return output
}

export const storeSampleTypeValidator: Validator<{
    name: string
}> = (data, onError) => {
    let output = true;
    if (validator.isEmpty(data.name)) {
        onError("name", "Please Enter Name");
        output = false;
    }
    return output
}

export const storeSymptomGroupValidator: Validator<{
    name: string
}> = (data, onError) => {
    let output = true;
    if (validator.isEmpty(data.name)) {
        onError("name", "Please Enter Name");
        output = false;
    }
    return output
}

export const storeSymptomValidator: Validator<{
    name: string,
    hpo: string,
    symptom_group?: {
        name: string,
        id: number | string
    }
}> = (data, onError) => {
    let output = true;
    if (validator.isEmpty(data.name)) {
        onError("name", "Please Enter Name");
        output = false;
    }
    return output
}
export const storeConsentGroupValidator: Validator<{
    title: string,
    body: string
}> = (data, onError) => {
    let output = true;
    if (validator.isEmpty(data.title)) {
        onError("title", "Please Enter Name");
        output = false;
    }
    return output
}

export const storeDiseaseGroupValidator: Validator<{
    name: string,
    gene: string
}> = (data, onError) => {
    let output = true;
    if (validator.isEmpty(data.name)) {
        onError("name", "Please Enter Name");
        output = false;
    }
    return output
}
export const storeTestValidator: Validator<{
    name: string,
    code: string,
    shortName: string
}> = (data, onError) => {
    let output = true;
    if (data.name.length < 3) {
        output = false;
        onError("name", "please enter a name with at least 3 character");
    }
    if (data.shortName.length < 3) {
        output = false;
        onError("shortName", "please enter a name with at least 3 character");
    }
    if (data.code.length < 3) {
        output = false;
        onError("code", "please enter a name with at least 3 character");
    }

    return output;

}


//// order store and update

export const patientDetailsValidate: Validator<Order["patient"]> = (data, onError) => {
    let output = true;
    if (data?.consanguineousParents === null) {
        output = false;
        onError("consanguineousParents", "Please that parents are consanguineous ")
    }
    if (validator.isEmpty(data?.fullName ?? "")) {
        output = false;
        onError("fullName", "Please enter patient name")
    }
    if (!["0", "-1", "1", 0, 1, -1].includes(data.gender ?? "")) {
        output = false;
        onError("gender", "Please select patient gender")
    }
    if (!validator.isDate(data.dateOfBirth ?? "")) {

        output = false;
        onError("dateOfBirth", "Please select patient date of birth")
    }
    return output;
}
export const testMethodValidate: Validator<Order> = (data, onError) => {
    let output = true;
    if (data.test_method.length < 1) {
        output = false
        onError("test_method", "Please choose at least one test")
    }
    return output
}
