import React from 'react';
import name from '../TekstNavn-removebg-preview(1).png';
import logo from '../logomexico-removebg-preview.png';
import './HomeStyle.css';
import BookButtons from '../components/BookButtons';

const Home = () => {
  return (
    <div className="home">
      <div className="home-background"></div> {/* Background image container */}
      {/*<img src={logo} alt="Logo" style={{ width: '200px', height: 'auto', marginBottom: '10px' }} /> */}

      <img src={name} alt="Navn" style={{ width: '600px', height: 'auto', marginBottom: '10px' }} /> 
      <BookButtons />
      {/*<div className='textBackground'> <h2>Smag på vores saftige bøffer med en krydret twist.<br />
      Oplev ægte mexicansk gastronomi i hjertet af Slagelse</h2> </div>*/}
      <div className="button-container"></div>
    </div>
  );
};

export default Home;
