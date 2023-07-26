import { useAuth } from "hooks";
import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/authOperations";


const UserMenu = () => {
    const dispatch = useDispatch();

    const { user } = useAuth();

    return (
        <div>
            <p>Congratulations, {user.name}</p>
            <button type="button" onClick={() => dispatch(logOut())}>Log Out</button>
        </div>
    )
}

export default UserMenu;