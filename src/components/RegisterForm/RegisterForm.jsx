import { Formik, Form, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { register } from "redux/auth/authOperations";
import * as yup from 'yup';
import Button from '@mui/material/Button';
import { BoxBig, ContainerForm, FieldInput, LabelText } from "./RegisterForm.styled";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import PasswordIcon from '@mui/icons-material/Password';

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
        <ContainerForm>
            <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit} >
                <Form autoComplete="off">
                    <BoxBig>
                        <label>
                            <LabelText> <GroupAddIcon /> Username:</LabelText>
                            <FieldInput type="text" name="name" placeholder="Enter username" />
                            <ErrorMessage name="name" component="div" />
                        </label>
                        <label>
                            <LabelText> <MarkEmailReadIcon /> Your e-mail address:</LabelText>
                            <FieldInput type="email" name="email" placeholder="Enter e-mail address" />
                            <ErrorMessage name="email" component="div" />
                        </label>
                        <label>
                            <LabelText> <PasswordIcon /> Enter your password:</LabelText>
                            <FieldInput type="password" name="password" placeholder="Enter password" />
                            <ErrorMessage name="password" component="div" />
                        </label>
                        <Button variant="contained" color="success" type="submit" >
                            Register
                        </Button>
                    </BoxBig>
                </Form>
            </Formik>
        </ContainerForm>
    )
}

export default RegisterForm;