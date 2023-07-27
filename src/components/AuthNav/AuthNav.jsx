import { ContainerAuth, StyleNav } from "./AuthNav.styled";


const AuthNav = () => {
    return(
        <ContainerAuth>
            <StyleNav to="/register" >
                Register user
            </StyleNav>
            <StyleNav to="/login" >
                Log in
            </StyleNav>
        </ContainerAuth>
    )
};

export default AuthNav;