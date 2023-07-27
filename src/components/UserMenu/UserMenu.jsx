import { useAuth } from "hooks";
import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/authOperations";
import { BoxMenu, HelloUser } from "./UserMenu.styled";
import Button from '@mui/material/Button';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';


const UserMenu = () => {
    const dispatch = useDispatch();

    const { user } = useAuth();

    return (
        <BoxMenu>
            <HelloUser>Congratulations, {user.name} <EmojiEmotionsIcon /> </HelloUser>
            <Button variant="contained" color="success" type="button" onClick={() => dispatch(logOut())}>Log Out</Button>
        </BoxMenu>
    )
}

export default UserMenu;