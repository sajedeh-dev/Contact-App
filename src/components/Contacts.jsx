import React, { useState } from "react";
import ContactList from "./ContactList";
import inputs from "../constants/inputs";
import { v4 } from "uuid";
import styles from "./contacts.module.css";

function contacts() {
  const [contacts, setContacts] = useState([]);
  const [alert, setAlert] = useState("");
  const [contact, setContact] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log({ name, value });

    setContact((contact) => ({ ...contact, [name]: value }));
  };
  const addHandler = () => {
    if (
      !contact.name ||
      !contact.lastName ||
      !contact.email ||
      !contact.phone
    ) {
      setAlert("Please enter valid data!🤷‍♂️");
      return;
    }
    setAlert("");
    const newContact = { ...contact, id: v4() };
    setContacts((contacts) => [...contacts, newContact]);
    setContact({
      id: "",
      name: "",
      lastName: "",
      email: "",
      phone: "",
    });
  };
  const deletHandler = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  };
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        {inputs.map((input, index) => (
          <input
            key={index}
            type={input.type}
            placeholder={input.placeholder}
            name={input.name}
            value={contact[input.name]}
            onChange={changeHandler}
          />
        ))}

        <button onClick={addHandler}>Add contact</button>
      </div>
      <div className={styles.alert}>{alert && <p>{alert}</p>}</div>
      <ContactList contacts={contacts} deletHandler={deletHandler} />
    </div>
  );
}

export default contacts;
