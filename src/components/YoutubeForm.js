import React from 'react'
import { useFormik } from 'formik'


const initialValues={
    name:'',
    email:'',
    channel:''
}
const onSubmit=values=>{
    console.log('Form data',values)
}
const validate =values=>{
    let errors={}
    if(!values.name){
        errors.name='Required'
    }
    if(!values.email){
        errors.email='Required'
    }
    if(!values.channel){
        console.log(values.channel,'Channel')
        errors.channel='Required'
    }

    return errors
}

function YoutubeForm(){
     
    const formik=useFormik({
        initialValues,
        onSubmit,
        validate
    })
    // console.log('formik.values',formik.values)
    console.log('formik.touched',formik.touched)
    return(
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' name='name' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name}/>
                { formik.touched.name && formik.errors.name ? <div className='errors'>{formik.errors.name}</div> : null}

                <label htmlFor='email'>E-mail</label>
                <input type='text' id='email' name='email' onChange={formik.handleChange} onBlur={formik.handleBlur}  value={formik.values.email}/>
                { formik.touched.email && formik.errors.email ? <div className='errors'>{formik.errors.email}</div> : null}


                <label htmlFor='channel'>Channel</label>
                <input type='text' id='channel' name='channel' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.channel}/>
                { formik.touched.channel && formik.errors.channel ? <div className='errors'>{formik.errors.channel}</div> : null}

         
            <button type='submit '>Submit</button>
            </form>

        </div>
    )
}

export default YoutubeForm