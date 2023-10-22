import { useFormik } from 'formik';
import '../index.css';
import * as Yup from "yup";

export default function Form1() {
  const formik=useFormik({
    initialValues:{
      name:"",
      email:"",
      password:"",
    },
    validationSchema : Yup.object({
      name: Yup.string().min(3,"Name atlist have to two charecter").required("Invalid name"),
      email: Yup.string().email("Invalid Error").required(),
      password:Yup.string().min(6,"Must need 6 digit").required("Invalid Error"),
    }),
    onSubmit:(values,{resetFrom})=>{
      console.log(values);
      resetFrom({values:""});
      console.log(formik.errors);
    }
    
  })
  return (
    <div >
      <h1>hello</h1>
      <div className='from'>
        <h1>Single field</h1>
        <form >
        <label htmlFor='name'>Field Input</label>
        <input 
        onChange={formik.handleChange}
        value={formik.values.name}
        name='name'
        type='name'></input>

        <label htmlFor='email'>email</label>
        <input 
        onChange={formik.handleChange}
        value={formik.values.email}
        name='email'
        type='email'></input>

        <label htmlFor='password'>password</label>
        <input 
        onChange={formik.handleChange}
        value={formik.values.password}
        name='password'
        type='password'></input>
        <button type='submit' >submit</button>
        </form>
      </div>
    </div>
  )
}
