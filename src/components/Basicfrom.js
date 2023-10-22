import React from 'react'
import { useFormik} from 'formik'
import '../index.css';
export default function Basicfrom() {
    const {handleChange,values,handleSubmit}=useFormik({
          name: "",
          email: "",
          password:""
        })
  return (

    <div>
      <form onSubmit={handleSubmit} className='from'>
        <label htmlFor='name'>Name</label>
        <input type="text" name="name"
        id="name"
        value={values.name}
        onChange={handleChange}
        
        />

<label htmlFor='email'>email</label>
        <input type="email" name="email"
        onChange={handleChange}
        value={values.email}
        />

        <label htmlFor='password'>password</label>
        <input type="password" name="password"
        onChange={handleChange}
        value={values.password}
        />
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}
