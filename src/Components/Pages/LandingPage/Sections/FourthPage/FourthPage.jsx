import {React, Component} from 'react';
import { Container, Button, Modal } from "react-bootstrap";
import './FourthPage.css'
import containerTwo from '../../../../../assets/containerTwo.svg';
import processingThoughts from '../../../../../assets/Processing thoughts.gif';
import { withRouter } from 'react-router-dom';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import 'firebase/auth';

 if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey:"AIzaSyB4xAsNRd-Y8o8_RA8NlbuSogl8FkxCNEo",
    authDomain:"bluebird-pf.firebaseapp.com"
  });
}else {
  firebase.app(); // if already initialized, use that one
}


class FourthPage extends Component {
  state = {
    show: false,
    isSignedIn: false,
    uiConfig: {
      signInFlow: 'popup',
      signInOptions:[
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      ],
      signInSuccessUrl: '/statistics',
    },
    currentUser:null,
    logout: false
  }
  
  componentDidMount(){
    if(localStorage.getItem('logout')){
      firebase.auth().signOut();
      
    }
    //console.log(this.state.logout)
    
    firebase.auth().onAuthStateChanged(user =>{
      
      this.setState({
        isSignedIn: !!user,
        currentUser: user,
        logout: false
      });
     localStorage.setItem('user', JSON.stringify(this.state.currentUser))
    })
    
  }
  handleShow(path){
    if(this.state.isSignedIn){
      this.props.history.push(path);
    }else{
      this.setState({
        show: true
      });
    }
    
  }
  handleClose(){
    this.setState({
      show :false
    });
  }
  // const history = useHistory();

  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  // function handleClick() {
  //   history.push({pathname: '/statistics'});
  // }
  render(){

  

    return(
      <Container id="fourthContainer" className="d-flex justify-content-center align-items-center">
        <img height="600px" width="1084px" src={containerTwo} alt="" style={{position:'absolute'}}/>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img height="500px" src={processingThoughts} alt=""/>
          <Button style={{width: '100px', background: '#4CB1DF', borderColor: '#4CB1DF', zIndex:5}} onClick={() => {this.handleShow("/statistics")}}>Try It Out</Button>
          {/* <a className="btn" role="button" style={{width: '100px', color:"white", background: '#4CB1DF', borderColor: '#4CB1DF', zIndex:5}} href="/statistics">Try It Out</a> */}
          <Modal show={this.state.show} onHide={()=>{this.handleClose()}}>
          <Modal.Header closeButton>
            <Modal.Title>Log in</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <StyledFirebaseAuth
                uiConfig={this.state.uiConfig}
                firebaseAuth={firebase.auth()}
              />
          </Modal.Body>
        </Modal>
        </div>
      </Container>
    );
  }
};
export default withRouter(FourthPage);