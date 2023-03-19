import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faMoneyBill } from '@fortawesome/free-solid-svg-icons'

import { Card, Container  } from 'react-bootstrap';

import TTennisPlayers from '../assets/TTennisPlayers.png';
import TTennisPlayers1 from '../assets/TTennisPlayers1.png';
import TTennisPlayers2 from '../assets/TTennisPlayers2.png';

    
const LandingPage = () => {
   return (
      <Container>
         <h1 style={{textAlign: "center", marginTop: "90px"}}>The Club in the Philippines</h1>
      <p style={{textAlign: "center", fontWeight:"bold"}}>Table Tennis Tournaments & Collaborations Plays</p>
      

        <p>Welcome to YortClub! We are the premier club in the Philippines, offering top-notch facilities and services for our members. Whether you're looking to relax by the pool, get in a good workout, or enjoy a gourmet meal, we have everything you need to make your visit a memorable one.</p>
       
        <Card style={{marginTop: "75px"}}>
  <div style={{display: "flex", flexWrap: "wrap"}}>
    <Card.Img variant="top" src={TTennisPlayers} style={{width: "400%", maxWidth: "363px", height: "200px", marginBottom: "10px"}} />
    <Card.Img variant="top" src={TTennisPlayers1} style={{width: "400%", maxWidth: "363px", height: "200px", marginBottom: "10px"}} />
    <Card.Img variant="top" src={TTennisPlayers2} style={{width: "400%", maxWidth: "363px", height: "200px", marginBottom: "10px"}} />
  </div>
  <Card.Body>
    <Card.Title>Professional or Beginner Level</Card.Title>
    <Card.Text>
      Join our table tennis club and enjoy rally, drills, exercises and coaching sessions. Learn new services and match up with other players. We cater to players of all levels!
    </Card.Text>
  </Card.Body>
</Card> 

<div style={{textAlign: "left", marginTop:"15px"}}>
  <p style={{color: "red", fontWeight: "bold"}}>
    <FontAwesomeIcon icon={faMapMarkerAlt} />
    &nbsp;&nbsp;
    Location:&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 32 Road 6 GSIS Hills Subdivision Brgy.88 Talipapa Quezon City,Philippines
  </p>
  <p style={{color: "red", fontWeight: "bold"}}>
    <FontAwesomeIcon icon={faMoneyBill} />
    &nbsp;&nbsp;
    Entrance Fee:&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;   40 pesos 1 hour Per head or person
  </p>
  <p style={{color: "red", fontWeight: "bold"}}>Available tables:&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;  20 Tables</p>
  <h6>Rent table tennis balls and rackets is available or you can bring your own rackets</h6>
</div>



 </Container>

       
    )
}

export default LandingPage;