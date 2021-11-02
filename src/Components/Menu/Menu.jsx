import {useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Menu.css'
import { Navbar,Container,Nav } from "react-bootstrap";
import twitterLogo from '../../assets/twitterLogo.png'
import {Link} from 'react-router-dom'
const Menu = (props) => {
  const [data, setData] = useState(false);

    useEffect(() => {
        setData(props.hidden);
    }, [props]);
  return (
    <>
      <Navbar className="primary d-flex" bg="dark" variant="dark" expand="lg" fixed="top">
        <Container className="fotter">
        <Link to="/" style={{textDecoration: 'none'}}>
          <Navbar.Brand className="textColorPrimary">
              <img src={twitterLogo} alt="Logo de BlueBird"/>BlueBird
          </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {!data && <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="textColorPrimary" href="#firstContainer">About</Nav.Link>
              <Nav.Link className="textColorPrimary" href="#secondContainer">How it works</Nav.Link>
              <Nav.Link className="textColorPrimary" href="#thirdContainer">Training</Nav.Link>
              <Nav.Link className="textColorPrimary" href="#fourthContainer">Try it out</Nav.Link>
            </Nav>
          </Navbar.Collapse>}
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;