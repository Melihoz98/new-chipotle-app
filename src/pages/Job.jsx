import React from 'react';
import './Job.css'; 
import restaurantFront from '../restaurantFront.PNG'; // Import the image

const Job = () => {
  return (
    <div className="job">
      <img src={restaurantFront} alt="Restaurant Front" className="restaurant-front" />
      <h2>
        Bliv en del af vores team!<br />
        Hos os søger vi altid efter talentfulde og engagerede personer, der deler vores passion for kvalitet og gæstfrihed.<br />
        Vi leder efter:<br />
        - Passion for mad og service<br />
        - Teamånd og gode kommunikationsevner<br />
        - Evnen til at arbejde under pres<br />
        - Fleksibilitet til at arbejde skiftende arbejdstider<br />
        Hvis du er interesseret i at blive en del af vores team, bedes du sende din ansøgning og CV til chipotlemexican2024@hotmail.com<br />
        Vi ser frem til at høre fra dig!<br />
      </h2>
    </div>
  );
};

export default Job;
