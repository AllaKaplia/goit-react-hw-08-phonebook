import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import Button from '@mui/material/Button';


const schema = yup.object().shape({
    email: yup.string().matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'E-mail is invalid').email().required('E-mail is required'),
    password: yup.string().length(10, 'Enter 10 characters').required('Password is required')
});

const initialValue = {
    email: '',
    password: '',
}

const LoginForm = ()  => {
    const dispatch = useDispatch();

    const handleSubmit = (values, { resetForm }) => {
        dispatch(logIn(values));
        resetForm();
    }

    return (
        <Formik initialValues={initialValue} validationSchema={schema} onSubmit={handleSubmit} >
            <Form>
                <label>
                    <span>Enter yor email</span>
                    <Field type="email" name="email" />
                    <ErrorMessage name="email" component="div" />
                </label>
                <label>
                    <span>Enter your password</span>
                    <Field type="password" name="password" />
                    <ErrorMessage name="password" component="div" />
                </label>
                <Button variant="contained" color="success" type="submit" >
                    Login
                </Button>
            </Form>
        </Formik>
    )
}

export default LoginForm;