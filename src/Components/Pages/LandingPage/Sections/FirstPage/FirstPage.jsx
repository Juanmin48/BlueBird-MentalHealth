import 'bootstrap/dist/css/bootstrap.min.css';
import './FirstPage.css'
import { Container } from "react-bootstrap";
import mentalHealth from '../../../../../assets/Mental health.gif';
import firstMainThings from '../../../../../assets/FirstMainThings.svg';
import secondMainThings from '../../../../../assets/SecondMainThings.svg';

const FirstPage = () => {
  return (
    <>
      <Container className="d-flex align-items-center justify-content-between mt-5" id="firstContainer">
        <div className="firstPageContainer d-flex flex-column justify-content-end">
          <img width="60px" src={firstMainThings} alt=""/>
          <h1 className="title">BlueBird</h1>
          <p className="paragraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <img className="ms-auto" width="100px" src={secondMainThings} alt=""/>
        </div>
        <div class="d-flex align-items-center" style={{height: '100vh'}} >
          <img id="mentalHealth" src={mentalHealth} alt=""/>
        </div>
      </Container>
    </>
  );
};

export default FirstPage;