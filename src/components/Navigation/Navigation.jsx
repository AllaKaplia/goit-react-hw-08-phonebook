import { NavLink } from "react-router-dom";
import { useAuth } from "hooks";
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';


const Navigation = () => {
    const { isLoggedIn } = useAuth();

    return (
        <nav>
            <NavLink to="/">
                <ContactPhoneIcon sx={{ fontSize: 40}} />
                <span>PhoneBook</span>
            </NavLink>
            <NavLink to="/">
                <span>Home</span>
            </NavLink>
            { isLoggedIn && <NavLink to="/contacts"> Contacts </NavLink>}
        </nav>
    );
};

export default Navigation;