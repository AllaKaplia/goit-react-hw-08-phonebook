import { StyleLink } from "components/Navigation/Navigation.styled";
import { ContainerAuth } from "./AuthNav.styled";


const AuthNav = () => {
    return(
        <ContainerAuth>
            <StyleLink to="/register" >
                Register user
            </StyleLink>
            <StyleLink to="/login" >
                Log in
            </StyleLink>
        </ContainerAuth>
    )
};

export default AuthNav;