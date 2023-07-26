import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { register } from "redux/auth/authOperations";
import * as yup from 'yup';

const initialValues = {
    name: '',
    email: '',
    password: '',
}

const schema = yup.object().shape({
    name: yup
    .string()
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, 'Name is invalid')
    .required('Name is required'),
    email: yup.string().matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'E-mail is invalid').email().required('E-mail is required'),
    password: yup.string().length(10, 'Enter 10 symbols').required('Password is required')
});


const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values, { resetForm }) => {
        dispatch(register(values));
        resetForm();
    }

    return (
        <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit} >
            <Form autoComplete="off">
                <label>
                    <span>Username:</span>
                    <Field type="text" name="name" placeholder="Enter username" />
                    <ErrorMessage name="name" component="div" />
                </label>
                <label>
                    <span>Your e-mail address:</span>
                    <Field type="email" name="email" placeholder="Enter e-mail address" />
                    <ErrorMessage name="email" component="div" />
                </label>
                <label>
                    <span>Enter your password:</span>
                    <Field type="password" name="password" placeholder="Enter password" />
                    <ErrorMessage name="password" component="div" />
                </label>
                <button type="submit" >
                    Register
                </button>
            </Form>
        </Formik>
    )
}

export default RegisterForm;