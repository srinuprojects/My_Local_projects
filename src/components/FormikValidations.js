import {useFormik} from "formik"



function VerifyUserDetails(UserDetails){
    const errors={}
    console.log('userdetails',UserDetails)
    if (UserDetails.UserName==""){
        errors.UserName="User Name Required"
    }
    if (UserDetails.Age==""){
        errors.Age="Age Required"
    }
    if (UserDetails.Email==""){
        errors.Email="Email Required"
    }
    if (UserDetails.Mobile==""){
        errors.Mobile="Mobile Required"
    }
    else if (UserDetails.Mobile.match(/\+91\d{10}/)){
        errors.Mobile="";

    }
    else{
        errors.Mobile='Invalid Mobile'
    }
    console.log('errors',errors)
    return errors

}


export default function FormikValidation(){
    const formik = useFormik({
        initialValues: {
            UserName: "",
            Age: "",
            Email: "",
            Mobile: "",
        },
        validate: VerifyUserDetails,
        onSubmit: (values) => {
            alert(JSON.stringify(values));
        },
    });
    return(
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
                <h2>Register User</h2>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" name='UserName' onChange={formik.handleChange}/></dd>
                    <dd className="text-danger">{formik.errors.UserName}</dd>
                    <dt>Age</dt>
                    <dd><input type="text" name='Age' onChange={formik.handleChange}/></dd>
                    <dd className="text-danger">{formik.errors.Age}</dd>

                    <dt>Email</dt>
                    <dd><input type="text" name='Email' onChange={formik.handleChange}/></dd>
                    <dd className="text-danger">{formik.errors.Email}</dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" name='Mobile' onChange={formik.handleChange}/></dd>
                    <dd className="text-danger">{formik.errors.Mobile}</dd>


                </dl>
                <button>Register </button>
            </form>
        </div>
    )
}