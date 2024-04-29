import React from 'react';
import './Menu.css'; 

const Menu = () => {
  return (
    <div className="menu">
      <h2>
        Oplev ægte mexicansk smag hos vores steakhouse.<br></br>
        Saftige bøffer, krydret krydderier, autentiske retter.<br></br>
        Prøv vores tacos, quesadillas og burritos.<br></br>
        Velkommen til en smagsrejse!<br></br>
      </h2>
      <div className="button-container">
        <a href="/Mexi-menukort-frokost-udkast.pdf" target="_blank" rel="noopener noreferrer">
          <button className="btn custom-btn" type="button">Frokostmenu</button>
        </a>
        <a href="/Mexi-menukort-aften-udkast.pdf" target="_blank" rel="noopener noreferrer">
          <button className="btn custom-btn" type="button">Aftenmenu</button>
        </a>
      </div>
    </div>
  );
};

export default Menu;
