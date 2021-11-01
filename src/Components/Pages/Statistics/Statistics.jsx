import './Statistics.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../../Menu/Menu';
import Sidebar from '../../Sidebar/Sidebar'
import Footer from '../../Footer/Footer';
import { Container } from 'react-bootstrap';


const Statistics = () => {
  return (
    <>
      <Menu/>
      <div style={{height: '92vh', width: '100%', marginTop: '56px', background: '#EDEDED'}}>
        <div className="row" style={{width: '100%'}}>
          <div style={{height: '92vh', width: '21%'}}>
          <Sidebar/>
          </div>
          <div style={{height: '92vh', width: '79%', zIndex: '5', marginRight: '-12px'}}>
            <div style={{height: '26vh', width: '100%', background: 'red', zIndex: '10'}}>

            </div>
            <div style={{height: '66vh', width: '100%',background: 'blue', zIndex: '5'}}>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Statistics;