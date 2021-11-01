import './SecondPage.css'
import { Container } from "react-bootstrap";
import Researching from '../../../../assets/Researching.gif'

const SecondPage = () => {
  return (
    <Container id="secondContainer" className="d-flex justify-content-between" style={{marginTop: '0px'}}>
      <div className="secondPageContainer d-flex flex-column">
        <h1 className="title2">How it works?</h1>
        <img className="researching" src={Researching} alt=""/>
      </div>
      <div className="d-flex justify-content-center align-items-center" style={{width: '800px', height: '800px', marginTop: '11.7rem'}}>
        <h3 className="paragraph2">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, 
          remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
          and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </h3>
      </div>
    </Container>
  );
};

export default SecondPage;