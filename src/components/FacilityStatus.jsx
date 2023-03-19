import React from "react";
import {Card} from 'react-bootstrap'

function getDateAndTime() {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const dayOfWeek = date.getDay();

  let day = "";
  if (dayOfWeek === 0) {
    day = "Sunday";
  } else if (dayOfWeek === 1) {
    day = "Monday";
  } else if (dayOfWeek === 2) {
    day = "Tuesday";
  } else if (dayOfWeek === 3) {
    day = "Wednesday";
  } else if (dayOfWeek === 4) {
    day = "Thursday";
  } else if (dayOfWeek === 5) {
    day = "Friday";
  } else if (dayOfWeek === 6) {
    day = "Saturday";
  }

  let time = "";
  if (hours >= 12) {
    hours -= 12;
    time = `${hours}:${minutes < 10 ? "0" : ""}${minutes} PM`;
  } else {
    time = `${hours}:${minutes < 10 ? "0" : ""}${minutes} AM`;
  }

  return {
    day,
    time
  };
}

function FacilityStatus() {
  const { day, time } = getDateAndTime();
  const isOpen = day !== "Sunday" && day !== "Saturday" && time >= "07:00 AM" && time < "07:00 PM";

  return (
    <Card style={{backgroundColor: "#C8F2EF",marginTop:"50px"}}>
        
     <Card.Body>
     <p style={{fontWeight:"bold", fontSize:"30px"}}>Schedule of YortClub:</p>
        <ul>
          <li>Monday-Friday: 07:00 AM - 07:00 PM</li>
          <li>Saturday: 07:00 AM - 04:00 PM</li>
        </ul>
        <p>{`Today is ${day}`}</p>
        <p>{`Current time is ${time}`}</p>
        <p>Facility Status: {isOpen ? <span style={{color: "green"}}>Open</span> : <span style={{color: "red"}}>Closed</span>}</p>
     </Card.Body>
      
    </Card>
  );
}

export default FacilityStatus;
