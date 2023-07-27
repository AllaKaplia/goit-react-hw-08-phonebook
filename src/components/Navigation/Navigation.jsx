import { useAuth } from "hooks";
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { Nav, StyleLink } from "./Navigation.styled";
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import RecentActorsIcon from '@mui/icons-material/RecentActors';


const Navigation = () => {
    const { isLoggedIn } = useAuth();

    return (
        <Nav>
            <StyleLink to="/">
                <ContactPhoneIcon sx={{ fontSize: 40}} />
                <span>PhoneBook</span>
            </StyleLink>
            <StyleLink to="/">
                <HolidayVillageIcon />
                <span>Home</span>
            </StyleLink>
            { isLoggedIn && <StyleLink to="/contacts"> <RecentActorsIcon />  Contacts </StyleLink>}
        </Nav>
    );
};

export default Navigation;