import './ThirdPage.css'
import { Container } from "react-bootstrap";

const ThirdPage = () => {
  return(
    <Container id="thirdContainer" style={{marginTop: '0px'}}>
      <div style={{paddingTop: '88px'}}>
        <h1 className="title3">Training</h1>
        <div  className="d-flex flex-row other" style={{marginTop: '100px'}}>
          <div className="d-flex flex-column justify-content-center align-items-center col-5 me-5 ms-5">
            <h2 className="text-center col-6" style={{fontWeight: 'bold', fontSize: '40px'}}>Tweets</h2>
            <h2 className="text-center col-6" style={{fontWeight: 'bold', fontSize: '40px'}}>+100</h2>
            <p className="col-6 text-center" style={{fontSize: '28px', color: '#5C5B5B'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center col-5">
            <h2 className="text-center col-6" style={{fontWeight: 'bold', fontSize: '40px'}}>Percentage</h2>
            <h2 className="text-center col-6" style={{fontWeight: 'bold', fontSize: '40px'}}>79%</h2>
            <p className="col-6 text-center" style={{fontSize: '28px', color: '#5C5B5B'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ThirdPage;