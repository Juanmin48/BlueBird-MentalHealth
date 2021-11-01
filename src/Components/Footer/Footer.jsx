import { Container,Navbar,Nav } from "react-bootstrap";
import twitterLogo from '../../assets/twitterLogo.png';
import './Footer.css'

const Footer = () => {
  return (
    <Container className="foot d-flex flex-column" style={{background:"#4CB1DF", width:"100%", height:"30vh", margin: '0', padding: '0', maxWidth: '100%'}}>
      <div className="d-flex flex-column" style={{background:"#4CB1DF", width:"10%", height:"30vh", margin: '0', padding: '0', maxWidth: '100%', marginLeft: '190px'}}>
        <Navbar.Brand className="textColorPrimary" href="#home" style={{marginTop: '30px'}}>
          <img src={twitterLogo} alt="Logo de BlueBird"/>BlueBird
        </Navbar.Brand>
        <Nav className="me-auto d-flex flex-column" style={{height: '200px', justifyContent: 'center', width: '1000px'}}>
          <Nav.Link className="textColorPrimary" href="#">About</Nav.Link>
          <Nav.Link className="textColorPrimary" href="#">How it works</Nav.Link>
          <Nav.Link className="textColorPrimary" href="#">Training</Nav.Link>
          <Nav.Link className="textColorPrimary" href="#">Try it out</Nav.Link>
          <Nav.Link className="textColorPrimary" href="#">Contact US</Nav.Link>
          <Nav.Link className="textColorPrimary" href="#">How it works</Nav.Link>
          <Nav.Link className="textColorPrimary" href="#">Training</Nav.Link>
          <Nav.Link className="textColorPrimary" href="#">Try it out</Nav.Link>
          <Nav.Link className="textColorPrimary" href="#">How it works</Nav.Link>
          <Nav.Link className="textColorPrimary" href="#">Training</Nav.Link>
          <Nav.Link className="textColorPrimary" href="#">Try it out</Nav.Link>
          <Nav.Link className="textColorPrimary" href="#">How it works</Nav.Link>
          <Nav.Link className="textColorPrimary" href="#">Training</Nav.Link>
          <Nav.Link className="textColorPrimary" href="#">Try it out</Nav.Link>
        </Nav>
      </div>
      <Container style={{position: 'absolute', top: '950px', left: '170px'}}>
        <p style={{color: '#FFFFFF'}}>&#169;Derechos reservados.</p>
      </Container>
    </Container>
  );
};

export default Footer;