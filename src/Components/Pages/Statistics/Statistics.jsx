// import './Statistics.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../../Menu/Menu';
import Sidebar from './Sidebar/Sidebar'
import Footer from '../../Footer/Footer';
import SpecificStats from './SpecificStats/SpecificStats';
import { Column } from '@ant-design/charts';


const Statistics = () => {
  const data = [
    {
      city: 'Bogotá',
      cases: 38,
    },
    {
      city: 'Barranquilla',
      cases: 52,
    },
    {
      city: 'Medellin',
      cases: 30,
    },
    {
      city: 'Cali',
      cases: 145,
    },
    {
      city: 'Cartagena',
      cases: 48,
    },
    {
      city: 'Sta. Marta',
      cases: 38,
    },
    {
      city: 'Bucaramanga',
      cases: 38,
    },
    {
      city: 'Manizales',
      cases: 58,
    },
  ];

  const config = {
    data,
    xField: 'city',
    yField: 'cases',
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    columnStyle: {
      fill: '#4CB1DF',
      fillOpacity: 1,
      stroke: 'black',
      lineWidth: 0,
      lineDash: [4,5],
      strokeOpacity: 0.7,
      shadowColor: 'black',
      shadowBlur: 0,
      shadowOffsetX: 0,
      shadowOffsetY: 0,
      cursor: 'pointer'
    },
    meta: {
      type: { alias: 'City' },
      sales: { alias: 'Cases' },
    },
  };

  return (
    <>
      <Menu hidden={true}/>
      <div className="" style={{height: '92vh', width: '100%', marginTop: '56px', background: '#F6F8FB'}}>
        <div className="row m-0 p-0" style={{width: '100%'}}>
          <div className="p-0" style={{height: '92vh', width: '21%'}}>
          <Sidebar/>
          </div>
          <div className="p-0" style={{height: '92vh', width: '79%'}}>
            <div className="row d-flex justify-content-around align-items-center m-0 p-0" style={{height: '26vh'}}>
              <SpecificStats title={"Percentage 1"} percentage={"21%"} description={"Description"}/>
              <SpecificStats title={"Percentage 2"} percentage={"21%"} description={"Description"}/>
              <SpecificStats title={"Percentage 3"} percentage={"21%"} description={"Description"}/>
            </div>
            <div style={{height: '66vh', width: '100%'}}>
              <div className="ps-4 pe-4">
                <Column
                  {...config}
                  onReady={(plot) => {
                    plot.on('plot:click', (evt) => {
                      const { x, y } = evt;
                      const { xField } = plot.options;
                      const {data} = plot.chart.getTooltipItems({ x, y })[0];
                      console.log(data);
                    });
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Statistics;