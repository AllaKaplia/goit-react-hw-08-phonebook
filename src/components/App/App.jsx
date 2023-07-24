import { BrowserRouter as Routes, Route } from "react-router-dom";
import { lazy } from "react";
import { Toaster } from 'react-hot-toast';
import SharedLayout from "components/SharedLayout";

const Home = lazy(() => import('../../page/Home/Home'));
const ContactList = lazy(() => import('../ContactList/ContactList'));
const FormContact = lazy(() => import('../FormContact/FormContact'));
const FilterContacts = lazy(() => import('../FilterContacts/FilterContacts'));
const RegisterForm = lazy(() => import('../../page/RegisterForm/RegisterForm'));
const Login = lazy(() => import('../../page/Login/Login'));
const NotFound = lazy(() => import('../../page/NotFound/NotFound'));


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />} >
        <Route index element={<Home />} />
        <Route path="/contacts" element={<ContactList />} >
          <Route path="form" element={<FormContact />} />
          <Route path="filter" element={<FilterContacts />} />
        </Route>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Toaster />
      </Route>
    </Routes>
  );
}