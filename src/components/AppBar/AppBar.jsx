import AuthNav from "components/AuthNav";
import Navigation from "components/Navigation";
import UserMenu from "components/UserMenu";
import { useAuth } from "hooks";
import { Header } from "./AppBar.styled";



const AppBox = () => {
    const { isLoggedIn } = useAuth();

    return(
        <Header>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Header>
    );
};

export default AppBox;