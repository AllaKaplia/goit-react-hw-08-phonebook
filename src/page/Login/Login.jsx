import LoginForm from '../../components/LoginForm/LoginForm';
import { LoginTitle } from './Login.styled';


const Login = () => {
    return(
        <div>
            <LoginTitle>Log In</LoginTitle>
            <LoginForm />
        </div>
    )
}

export default Login;