import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import Button from '@mui/material/Button';
import { BoxBig, ContainerForm, FieldInput, LabelText } from 'components/RegisterForm/RegisterForm.styled';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import PasswordIcon from '@mui/icons-material/Password';


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
        <ContainerForm>
            <Formik initialValues={initialValue} validationSchema={schema} onSubmit={handleSubmit} >
                <Form>
                    <BoxBig>
                        <label>
                            <LabelText> <MarkEmailReadIcon /> Enter yor email</LabelText>
                            <FieldInput type="email" name="email" placeholder="Enter e-mail address"/>
                            <ErrorMessage name="email" component="div" />
                        </label>
                        <label>
                            <LabelText> <PasswordIcon /> Enter your password</LabelText>
                            <FieldInput type="password" name="password" placeholder="Enter password"  />
                            <ErrorMessage name="password" component="div" />
                        </label>
                        <Button variant="contained" color="success" type="submit" >
                            Login
                        </Button>
                    </BoxBig>
                </Form>
            </Formik>
        </ContainerForm>
    )
}

export default LoginForm;