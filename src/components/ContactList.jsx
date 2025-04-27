import React from 'react'
import ContactItem from './ContactItem';
import styles from "./ContactsList.module.css";

function ContactList({contacts , deletHandler}) {
  return (
    <div className={styles.container}>
      <h3>Contacts List</h3>
      {contacts.length ? (
        <ul className={styles.contacts}>
        {
          contacts.map(contact =>
            <ContactItem key={contact.id} data={contact} deletHandler={deletHandler}/>
           )
        }
      </ul>
      ) : <p className={styles.message}>No contact yet!</p> }
      
    </div>
  )
}

export default ContactList