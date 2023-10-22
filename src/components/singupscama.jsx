import * as Yup from 'yup';

export const Singupscama=Yup.object({
    name:Yup.string().min(3).required("Invalid property")
})
