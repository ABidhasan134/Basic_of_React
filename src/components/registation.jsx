import React from 'react'
import { Formik, useFormik } from 'formik'
import { Singupscama } from './singupscama';

const initialValues = {
    name:"",

}

export default function Registation() {
    const {values,touched,handleChange, handleSubmit,handleBlur,errors}=useFormik({
        initialValues: initialValues,
        validationSchema: Singupscama,
        onSubmit:(values)=>{
            console.log(values);
        },
        
    });
    console.log(errors);
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name</label>
            <input type="text" id='name'
            name='name' autoComplete='off' 
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            />
            {errors.name && touched.name ? <p>{errors.name}</p>:null}
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
