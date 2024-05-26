import React from 'react';
import './Contact.css'; // Import CSS for styling
import insideOne from '../insideOne.png';
import insideTwo from '../insideTwo.png';
import insideThree from '../insideThree.png';

const Contact = () => {
  return (
    <div className="container">
      <section className="opening-hours">
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
      </section>
      <section className="contact-info">
        <h2>Kontakt os</h2>
        <p>Adresse: Jernbanegade 3, Slagelse 4200</p>
        <p>Telefon: 55 66 28 00</p>
        <p>Email: chipotlemexican2024@hotmail.com</p>
      </section>
      <section className="images">
        <img src={insideOne} alt="Inside One" />
        <img src={insideTwo} alt="Inside Two" />
        <img src={insideThree} alt="Inside Three" />
      </section>
    </div>
  );
};

export default Contact;
