import React from 'react';
import { Link } from 'react-router-dom';
import './BookButtons.css';

const BookButtons = () => {
  const phoneNumber = '55662800'; // Define the phone number
  
  const handleBookClick = () => {
    window.location.href = `tel:${phoneNumber}`; // Call the phone number when clicked
  };

  return (
    <div >
      <Link to="/Menu" >
        <button className="buttonNew" type="button">Menu</button>
      </Link>
      <button className="buttonNew" type="button" onClick={handleBookClick}>Book bord</button>
    </div>
  );
};

export default BookButtons;
