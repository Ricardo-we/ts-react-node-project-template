import { FormEvent } from "react";
import { FormikConfig } from "formik";

export async function createFormSubmitHandler(e: FormEvent<HTMLFormElement>, formik: any){
    e.preventDefault()
    formik.setSubmitting(true)
    await formik.submitForm();
    formik.setSubmitting(false);
}