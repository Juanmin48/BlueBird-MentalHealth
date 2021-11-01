import './LandingPageStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../../Menu/Menu';
import FirstPage from './Sections/FirstPage/FirstPage';
import SecondPage from './Sections/SecondPage/SecondPage'
import ThirdPage from './Sections/ThirdPage/ThirdPage';
import FourthPage from './Sections/FourthPage/FourthPage';
import Footer from '../../Footer/Footer';
import lineHistory from '../../../assets/lineHistory.svg';
import { Container } from 'react-bootstrap';


const LandingPage = () => {
  return (
    <>
      <Menu></Menu>
      <img id="line" height="1850px" src={lineHistory} alt=""/>
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <Footer />
    </>
  );
};

export default LandingPage;