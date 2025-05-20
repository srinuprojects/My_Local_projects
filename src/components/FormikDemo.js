
import {useFormik} from "formik"
export default function FormikDemo(){
    const formik=useFormik({
        initialValues:{
            UserName:'',
            Password:'',
            City:''

        },
        onSubmit:values => {
            alert(JSON.stringify(values));
        }

    })
    return(
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
                <h1>Register form</h1>
                <dl>
                    <dt>user name</dt>
                    <dd> <input type="text" name="UserName" onChange={formik.handleChange} value={formik.values.UserName}/> </dd>
                    <dt>Password</dt>
                    <dd> <input type="password" name="Password" onChange={formik.handleChange} value={formik.values.Password} /> </dd>
                    <dt>City</dt>
                    <dd>
                        <select name="City" onChange={formik.handleChange} value={formik.values.City}>
                            <option>Select Your City</option>
                            <option>Hyd</option>
                            <option>vizag</option>
                        </select>
                    </dd>
                </dl>
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}