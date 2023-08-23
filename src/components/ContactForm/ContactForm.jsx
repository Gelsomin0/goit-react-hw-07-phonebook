import { useState } from 'react';
import css from './ContactForm.module.css';
import { addContact } from 'redux/contactsFetch';
import { useDispatch, useSelector } from 'react-redux';
import { getContactList } from 'redux/contactsSlice';

export const ContactForm = () => {
    const dispatch = useDispatch();
    const contactList = useSelector(getContactList)
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleData = ({target}) => {
        if (target.name === 'name') setName(target.value);
        if (target.name === 'phone') setPhone(target.value);
    }

    const submitNewContact = (e) => {
        e.preventDefault();

        let isExist = false;
        const newContact = {
            name,
            phone,
        }

        contactList.map((contact) => {
            if (contact.name === newContact.name) {
                alert(`${newContact.name} is already exist in contacts list!!!`);
                return isExist = true;
            }

            return contact;
        })

        if (!isExist) {
            dispatch(addContact(newContact));
        }

        setName('');
        setPhone('');
    }

    return (
        <form
            className={css.form}
            onSubmit={submitNewContact}
        >
            <label>
                <p>Name:</p>
                <input
                    type="text"
                    name="name"
                    onChange={handleData}
                    value={name}
                    required
                />
            </label>
            <label>
                <p>Phone number:</p>
                <input
                    type="tel"
                    name="phone"
                    onChange={handleData}
                    value={phone}
                    required
                />
            </label>
            <button type='submit'>Add new contact</button>
        </form>
    )
}