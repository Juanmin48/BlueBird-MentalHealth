import './SecondPage.css'
import { Container } from "react-bootstrap";
import Researching from '../../../../../assets/Researching.gif'

const SecondPage = () => {
  return (
    <Container id="secondContainer" className="d-flex justify-content-between" style={{marginTop: '0px'}}>
      <div className="secondPageContainer d-flex flex-column">
        <h1 className="title2">How it works?</h1>
        <img className="researching" src={Researching} alt=""/>
      </div>
      <div className="d-flex justify-content-center align-items-center" style={{width: '800px', height: '800px', marginTop: '11.7rem'}}>
        <h3 className="paragraph2">
        This application is an automated system that does not require much effort from the user.
        First, a neural network (RNN) was developed, which was trained with a variety of tweets 
        taking into account certain keywords provided by a professional with knowledge in the area 
        of mental health, which will then be analysed using the tweets posted by the user in session,
        the results of which are clearly displayed and are private. In addition to this, there is an 
        analysis in a Colombian environment to know the general status of users in this country taking 
        into account the pandemic situation of COVID-19.
        </h3>
      </div>
    </Container>
  );
};

export default SecondPage;