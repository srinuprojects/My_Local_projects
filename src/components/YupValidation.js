import { useFormik } from "formik";
import * as yup from 'yup'

export default function YuoValidation(){
    const formik=useFormik({
        initialValues:{
            UserName:'',
            Email:'',
            Age:0
        },
        validationSchema:yup.object({
            UserName:yup.string()
                        .required('User Name is Required')
                        .min(4,'Name is short')
                        .max(10,'Name is too long'),
            Email:yup.string()
                     .required('Email Required')
                     .email('Invalid Email'),
            Age:yup.number()
                   .required('Age Required')
                   .typeError("Please enter number value only")

  

        }),
        onSubmit:values =>{
            alert(JSON.stringify(values))
        }

    })

    return(
        <div>
            <form onSubmit={formik.handleSubmit}>
                <h2>Register form</h2>
                <dl>
                    <dt>User Name</dt>
                    <dd><input {...formik.getFieldProps('UserName')} type="text" /></dd>
                    <dd className="text-danger">{formik.errors.UserName}</dd>
                    <dt>Email</dt>
                    <dd><input {...formik.getFieldProps('Email')} type="text"/></dd>
                    <dd className="text-danger">{formik.errors.Email}</dd>

                    <dt>Age</dt>
                    <dd><input {...formik.getFieldProps('Age')} type="text"/></dd>
                    <dd className="text-danger">{formik.errors.Age}</dd>

                </dl>
                <button>Register</button>
            </form>
        </div>
    )
}