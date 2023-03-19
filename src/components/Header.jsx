import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/Ttlogo.png'; 

import '../App.css';

const Header = () => {
  return (
    <Navbar style={{ backgroundColor: 'red', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999 }} variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" style={{ color: "yellow", fontWeight: "bold", fontSize: "25px" }}>
          <img
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top rounded-circle"
            alt="Logo" 
          />{' '}
          YortClub 
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} exact="true" to="/" activeclassname="active" style={{color: "white",fontWeight:"bold"}}>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/Reservation" activeclassname="active" style={{color: "white",fontWeight:"bold"}}>Reservation</Nav.Link>
            <Nav.Link as={NavLink} to="/Offers" activeclassname="active" style={{color: "white",fontWeight:"bold"}}>Offers</Nav.Link>
            <Nav.Link as={NavLink} to="/ContactUs" activeclassname="active" style={{color: "white",fontWeight:"bold"}}>Contact Us</Nav.Link>
            <Nav.Link as={NavLink} to="/signIn" activeclassname="active" style={{color: "white",fontWeight:"bold"}}>Sign In</Nav.Link>


            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
