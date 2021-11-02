import { Container, Button } from "react-bootstrap";
import './FourthPage.css'
import containerTwo from '../../../../../assets/containerTwo.svg';
import processingThoughts from '../../../../../assets/Processing thoughts.gif';
import { useHistory } from "react-router-dom";
import Statistics from "../../../../Pages/Statistics/Statistics";

const FourthPage = () => {
  const history = useHistory();

  function handleClick() {
    history.push({pathname: '/statistics'});
  }
  return(
    <Container id="fourthContainer" className="d-flex justify-content-center align-items-center">
      <img height="600px" width="1084px" src={containerTwo} alt="" style={{position:'absolute'}}/>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <img height="500px" src={processingThoughts} alt=""/>
        {/* <Button style={{width: '100px', background: '#4CB1DF', borderColor: '#4CB1DF', zIndex:5}} onClick={handleClick}>Try It Out</Button> */}
        <a className="btn" role="button" style={{width: '100px', color:"white", background: '#4CB1DF', borderColor: '#4CB1DF', zIndex:5}} href="/statistics">Try It Out</a>
      </div>
    </Container>
  );
};

export default FourthPage;