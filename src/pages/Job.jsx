import React from 'react';
import './Job.css'; 
import logo from '../logomexico-removebg-preview.png';




const Job = () => {
 

  return (
    <div className="job">
      <img src={logo} alt="Logo" style={{ width: '200px', height: 'auto', marginBottom: '10px' }} /> 

      <h2>
      Bliv en del af vores team!

Vil du være en del af et dynamisk og passioneret <br></br>team,
der stræber efter at levere enestående service <br></br>
og kulinariske oplevelser? Så er du kommet til det <br></br>
rette sted! Hos os søger vi altid efter talentfulde og <br></br>
engagerede personer, der deler vores passion for kvalitet <br></br>
og gæstfrihed.<br></br>
Vi leder efter:<br></br>

    Passion for mad og service<br></br>
    Teamånd og gode kommunikationsevner<br></br>
    Evnen til at arbejde under pres<br></br>
    Fleksibilitet til at arbejde skiftende arbejdstider<br></br>

Hvis du er interesseret i at blive en del af vores team,<br></br>
 bedes du sende din ansøgning og CV til [email protected] <br></br>
 Vi ser frem til at høre fra dig!<br></br>
      </h2>
   
      </div>
   
  );
};

export default Job;