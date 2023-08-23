import { useEffect } from "react";
import { ContactsList, ContactForm, Filter } from "./index";
import { useDispatch } from "react-redux";
import { fetchContacts } from "redux/contactsFetch";
import { Toaster } from 'react-hot-toast';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Toaster/>
      <ContactForm />
      <Filter />
      <ContactsList />
    </div>
  );
};
