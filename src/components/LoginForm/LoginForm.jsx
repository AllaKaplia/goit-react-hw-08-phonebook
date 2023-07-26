import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { selectorIsLoggedIn } from 'redux/auth/authSelectors';
import { logIn } from 'redux/auth/authOperations';


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

    const handleSubmit = () => {
        dispatch(logIn(
            
        ))
    }

    return (
        <Formik initialValues={initialValue} validationSchema={schema} >
            <Form>
                <label>
                    Enter yor email
                    <Field type="email" name="email" />
                </label>
                <label>
                    Enter your password
                    <Field type="password" name="password" />
                </label>
                <button type="submit" >
                    Login
                </button>
            </Form>
        </Formik>
    )
}

export default LoginForm;