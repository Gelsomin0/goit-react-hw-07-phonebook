import { useDispatch, useSelector } from "react-redux"
import css from './ContactList.module.css'
import { getContactList } from 'redux/contactsSlice';
import { deleteContact } from "redux/contactsFetch";
import { getFilter } from "redux/filterSlice";

export const ContactsList = () => {
    const filter = useSelector(getFilter);
    const contactList = useSelector(getContactList);
    const dispatch = useDispatch();

    return (
        <ol className={css.contact_list}>
            {filter === ''
                ? contactList.map(({ id, name, phone }) => {
                    return (
                        <li key={id} className={css.contact_list_item}>
                            <p>
                                <b>{name}:</b> {phone}
                            </p>
                            <button
                                id={id}
                                className={css.delete_button}
                                onClick={() => dispatch(deleteContact(id))}
                            >Delete</button>
                        </li>
                    )
                })
                : contactList.map(({ id, name, phone }) => {
                    let item;
                    if (name.toLowerCase().includes(filter)) {
                        return item = (
                            <li key={id} className={css.contact_list_item}>
                                <p>
                                    <b>{name}:</b> {phone}
                                </p>
                                <button
                                    id={id}
                                    className={css.delete_button}
                                    onClick={() => dispatch(deleteContact(id))}
                                >Delete</button>
                            </li>
                        )
                    }
                    return item;
                })
            }
        </ol>
    );
};