import { TitleForm } from 'components/RegisterForm/RegisterForm.styled';
import { BoxHome } from 'page/Home/Home.styled';
import RegisterForm from '../../components/RegisterForm/RegisterForm';


const RegisterPage = () => {
    return(
        <BoxHome>
            <TitleForm>Register your profile</TitleForm>
            <RegisterForm />
        </BoxHome>
    )
};

export default RegisterPage;