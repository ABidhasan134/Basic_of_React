import * as yup from 'yup'; 
export const Scema=yup.object().shape({
    name:yup.string().min(3),
    email:yup.email("Error is in email"),
    password:yup.min(6,"the password is error").required(),
})