import { useAuth } from "hooks";
import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/authOperations";
import { BoxMenu, HelloUser } from "./UserMenu.styled";
import Button from '@mui/material/Button';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { useState } from "react";


const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (
        <BoxMenu>
            <HelloUser>Congratulations, {user.name} <EmojiEmotionsIcon /> </HelloUser>
            <Button
                variant="contained"
                color="success"
                type="button"
                onClick={() => dispatch(logOut())}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onFocus={handleMouseEnter}
                onBlur={handleMouseLeave}
            >
                Log Out
                {isHovered ? <SentimentVeryDissatisfiedIcon /> : <SentimentSatisfiedAltIcon />}
            </Button>
        </BoxMenu>
    )
}

export default UserMenu;