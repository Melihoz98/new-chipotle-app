import React from 'react';
import './Job.css'; 
import logo from '../logomexico-removebg-preview.png';
import restaurantFront from '../restaurantFront.PNG'; // Import the image



const Job = () => {
 

  return (
    <div className="job">
      <img src={restaurantFront} alt="Restaurant Front" className="restaurant-front" /> {/* Add image here */}
      <h2>
      Bliv en del af vores team!<br></br>

Hos os søger vi altid efter talentfulde og <br></br>
engagerede personer, der deler vores passion for kvalitet <br></br>
og gæstfrihed.<br></br>
Vi leder efter:<br></br>

    Passion for mad og service<br></br>
    Teamånd og gode kommunikationsevner<br></br>
    Evnen til at arbejde under pres<br></br>
    Fleksibilitet til at arbejde skiftende arbejdstider<br></br>

Hvis du er interesseret i at blive en del af vores team,<br></br>
 bedes du sende din ansøgning og CV til chipotlemexican2024@hotmail.com <br></br>
 Vi ser frem til at høre fra dig!<br></br>
      </h2>
   
      </div>
   
  );
};

export default Job;