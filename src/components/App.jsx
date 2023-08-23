import { useEffect } from "react";
import { ContactsList, ContactForm } from "./index";
import { useDispatch } from "react-redux";
import { fetchContacts } from "redux/contactsFetch";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ContactForm />
      <ContactsList />
    </div>
  );
};
