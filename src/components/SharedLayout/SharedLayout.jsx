import Loader from "components/Loader";
import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";


const SharedLayout = () => {
    return(
        <div>
            <header>
                <Link to="/">
                    <span>Phonebook</span>
                </Link>
                <ul>
                    <li>
                        <Link to="/">
                            Home page
                        </Link>
                    </li>
                    <li>
                        <Link to="/contacts">
                            Contacts
                        </Link>
                    </li>
                    <li>
                        <Link to="/register">
                            Register
                        </Link>
                    </li>
                    <li>
                        <Link to="/login">
                            Login
                        </Link>
                    </li>
                </ul>
                <div>
                    <Suspense fallback={<Loader />}>
                        <Outlet />
                    </Suspense>
                </div>
            </header>
        </div>
    )
}

export default SharedLayout;