import AuthNav from "components/AuthNav";
import Navigation from "components/Navigation";
import UserMenu from "components/UserMenu";
import { useAuth } from "hooks";
import AppBar from '@mui/material/AppBar';


const AppBox = () => {
    const { isLoggedIn } = useAuth();

    return(
        <AppBar >
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </AppBar>
    );
};

export default AppBox;