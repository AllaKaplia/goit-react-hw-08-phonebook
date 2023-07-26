import { useAuth } from "hooks";
import NotFound from "page/NotFound";
import { useEffect, lazy } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { refreshUser } from "redux/auth/authOperations";
import { PrivateRoute } from "route/PrivateRout";
import { RestrictedRoute } from "route/RestrictedRoute";
import { Layout } from "./Layout";
import Loader from "./Loader";


const HomePage = lazy(() => import('../page/Home/Home'));
const RegisterPage = lazy(() => import('../page/RegisterPage/RegisterPage'));
const Login = lazy(() => import('../page/Login/Login'));
const Phonebook = lazy(() => import('../page/Phonebook/Phonebook'));


const App =() => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth;

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />} />
        <Route path="/login" element={<RestrictedRoute redirectTo="/contacts" component={<Login />} />} />
        <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<Phonebook />} /> }/>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;