import React from 'react';
import './Menu.css'; 
import mexicanFood from '../mexicanFood.png';
import steak from '../steak.png';
import churros from '../churros.png';

const Menu = () => {
  return (
    <div className="menu">
      <h2>
        Oplev ægte mexicansk smag hos vores steakhouse.<br></br>
        Saftige bøffer, krydret krydderier, autentiske retter.<br></br>
        Prøv vores tacos, quesadillas og burritos.<br></br>
        Velkommen til en smagsrejse!<br></br>
      </h2>
      <div className="image-container">
        <img src={mexicanFood} alt="Mexican Food" className="round-image" />
        <img src={steak} alt="Steak" className="round-image" />
        <img src={churros} alt="Churros" className="round-image" />
      </div>
      <div className="button-container">
        <a href="/Mexi-menukort-frokost-udkast.pdf" target="_blank" rel="noopener noreferrer">
          <button className="buttonNew" type="button">Frokostmenu</button>
        </a>
        <a href="/Mexi-menukort-aften-udkast.pdf" target="_blank" rel="noopener noreferrer">
          <button className="buttonNew" type="button">Aftenmenu</button>
        </a>
      </div>
    </div>
  );
};

export default Menu;
