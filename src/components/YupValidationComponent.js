import { Formik, Field, ErrorMessage, Form } from "formik";
import * as yup from 'yup';

export default function YupValidationComponent() {
    return (
        <div className="container-fluid">
            <h2>Register User</h2>
            <Formik
                initialValues={{
                    UserName: '',
                    Email: '',
                    Age: '',
                    City: ''
                }}
                validationSchema={yup.object({
                    UserName: yup.string()
                        .min(4, 'Name too short')
                        .max(10, 'Name too long')
                        .required('Name Required'),
                    Email: yup.string()
                        .email('Invalid Email')
                        .required('Email Required'),
                    Age: yup.number()
                        .required('Age Required')
                        .typeError('Must be a number'),
                    City: yup.string().required('City Required')
                })}
                onSubmit={values => {
                    alert(JSON.stringify(values));
                }}
            >
                {({ handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <dl>
                            <dt>User Name</dt>
                            <dd>
                                <Field name="UserName" type="text" />
                                <ErrorMessage name="UserName" component="div" />
                            </dd>

                            <dt>Email</dt>
                            <dd>
                                <Field name="Email" type="email" />
                                <ErrorMessage name="Email" component="div" />
                            </dd>

                            <dt>Age</dt>
                            <dd>
                                <Field name="Age" type="number" />
                                <ErrorMessage name="Age" component="div" />
                            </dd>

                            <dt>City</dt>
                            <dd>
                                <Field name="City" as="select">
                                    <option value="">Select City</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Hyd">Hyderabad</option>
                                </Field>
                                <ErrorMessage name="City" component="div" />
                            </dd>
                        </dl>
                        <button type="submit">Register</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}