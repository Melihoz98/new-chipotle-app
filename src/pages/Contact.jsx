import React from 'react';
import './Contact.css'; // Importer CSS-filen til styling
const Contact = () => {
  return (

    
    <div className='contact'>

   
    <div className="contact-container">
      <div className="contact-info">
        <h2>Kontakt os</h2>
        <p>Adresse: Jernbanegade 3, Slagelse 4200</p>
        <p>Telefon: 55 66 28 00</p>
        <p>Email: chipotlemexican2024@hotmail.com</p>
      </div>
      <div className="opening-hours">
        <h2>Åbningstider</h2>
        <ul>
          <li>Mandag: 11:00 - 22:00</li>
          <li>Tirsdag: 11:00 - 22:00</li>
          <li>Onsdag: 11:00 - 22:00</li>
          <li>Torsdag: 11:00 - 22:00</li>
          <li>Fredag: 11:00 - 23:00</li>
          <li>Lørdag: 11:00 - 23:00</li>
          <li>Søndag: 11:00 - 22:00</li>
        </ul>
      </div>
    </div> 
    </div>
  );
};

export default Contact;
