// import './PersonalAnalysis.css';
import {React,useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../../Menu/Menu';
import Sidebar from './Sidebar/Sidebar'
import Footer from '../../Footer/Footer';
import AnalysisDetails from './AnalysisDetails/AnalysisDetails';
import { Column } from '@ant-design/charts';
import axios from 'axios';
import Loader from "react-loader-spinner";
import Carousel from 'nuka-carousel';


const PersonalAnalysis = () => {
  const api = axios.create({
    baseURL: "http://ce3b-35-230-60-96.ngrok.io" 
  });
  const [loading, setLoading] = useState(false);
  const [percentages, setPercentages] = useState(null);
  const [cant, setCant] = useState(null);
  const [tanxiety, setTanxienty] = useState(null);
  const [tdepression, setTdepression] = useState(null);
  const [tstress, setTstress] = useState(null);
  const [data, setData] = useState(null);
  const user = {
    username : "IbaiLlanos"
  }
  useEffect(() => {
    async function getTweets() {
      const response = await api.post("/get_analysis", {username : "IbaiLlanos"});
      setPercentages(response.data.percentages);
      setCant(response.data.total_tweets);
      setTanxienty(response.data.tweets_2);
      setTdepression(response.data.tweets_1);
      setTstress(response.data.tweets_3);
      const json = response.data;
      console.log({json});
      const dataall = [
        {
          Condition: 'Anxiety',
          Tweets: json.percentages[2].quantity
        },
        {
          Condition: 'Depression',
          Tweets: json.percentages[1].quantity
        },
        {
          Condition: 'Stress',
          Tweets: json.percentages[3].quantity
        }
      ];
      setData(dataall);
    }
    getTweets();
    console.log(tanxiety)
    console.log(tdepression)
    console.log(tstress)
    console.log(cant);
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },2000);
  }, []);
  
  const dataall = [
    {
      Condition: 'Anxiety',
      Tweets: percentages[2].quantity
    },
    {
      Condition: 'Depression',
      Tweets: percentages[1].quantity
    },
    {
      Condition: 'Stress',
      Tweets: percentages[3].quantity
    }
  ];
  
  const dataa = [
    {
      Condition: 'Anxiety',
      Tweets: percentages[2].quantity
    }
  ];
  const datad = [
    {
      Condition: 'Depression',
      Tweets: percentages[1].quantity
    }
  ];
  const datas = [
    {
      Condition: 'Stress',
      Tweets: percentages[3].quantity
    }
  ];
  
  
  const config = {
    data,
    xField: 'Condition',
    yField: 'Tweets',
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
      type: { alias: 'Condition' },
      tweets: { alias: 'Tweets' },
    },
  };
  if(loading){
    return(
      <>
      <Menu hidden={true}/>
        <Loader className="col d-flex justify-content-around"
          style={{marginTop:'240px'}}
          type="Puff"
          color="#4CB1DF"
          height={150}
          width={150}
          timeout={5000} //2 secs
        />
      </>
    );
  }else{
      return (
        <>
          <Menu hidden={true}/>
          <div className="" style={{height: '92vh', width: '100%', marginTop: '45px', background: '#F6F8FB'}}>
            <div className="row m-0 p-0" style={{width: '100%'}}>
              <div className="p-0" style={{height: '92vh', width: '21%'}}>
              <Sidebar
                getChange={(option)=>{
                  switch (option) {
                    case "All":
                      setData(dataall);
                      break;
                    case "Anxiety":
                      setData(dataa);
                      break;
                    case "Depression":
                      setData(datad);
                      break;
                    case "Stress":
                      setData(datas);
                      break;
                    default:
                      break;
                  }
                  
                }}
              />
              </div>
              <div className="p-0" style={{height: '92vh', width: '79%'}}>
                <div className="row d-flex justify-content-around align-items-center m-0 p-0" style={{height: '36vh'}}>                  
                  <div className="d-flex flex-column align-items-center pt-2 rounded" style={{height: '28vh', width: '30%', background: '#EAEAEA'}}>
                    <Carousel renderCenterLeftControls={({ previousSlide }) => (null)}
                      renderCenterRightControls={({ nextSlide }) => (null)}>
                      <AnalysisDetails title={"Anxiety"} percentage={percentages[2].percentage+"%"} description={percentages[2].percentage+"% of your tweets reveal anxiety trends"}/>
                      { tanxiety.map(t => <AnalysisDetails title={"Anxiety example"} percentage={""} description={t.tweet}/>)}
                    </Carousel>
                  </div>
                  <div className="d-flex flex-column align-items-center pt-2 rounded" style={{height: '28vh', width: '30%', background: '#EAEAEA'}}>
                    <Carousel renderCenterLeftControls={({ previousSlide }) => (null)}
                      renderCenterRightControls={({ nextSlide }) => (null)}>
                      <AnalysisDetails title={"Depression"} percentage={percentages[1].percentage+"%"} description={percentages[1].percentage+"% of your tweets reveal anxiety trends"}/>
                      { tdepression.map(t => <AnalysisDetails title={"Depression example"} percentage={""} description={t.tweet}/>)}
                    </Carousel>
                  </div>
                  <div className="d-flex flex-column align-items-center pt-2 rounded" style={{height: '28vh', width: '30%', background: '#EAEAEA'}}>
                    <Carousel renderCenterLeftControls={({ previousSlide }) => (null)}
                      renderCenterRightControls={({ nextSlide }) => (null)}>
                      <AnalysisDetails title={"Stress"} percentage={percentages[3].percentage+"%"} description={percentages[3].percentage+"% of your tweets reveal anxiety trends"}/>
                      { tstress.map(t => <AnalysisDetails title={"Stress example"} percentage={""} description={t.tweet}/>)}
                    </Carousel>
                  </div>
                </div>
                <div className="row m-0 p-0" style={{height: '57vh', width: '100%'}}>
                  <div className="ps-4 pe-4 " style={{height: '56vh', width: '67%'}}>
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
                  <div className="ps-3 pe-4 d-flex flex-column justify-content-around align-items-center" style={{height: '56vh', width: '33%'}}>
                      <div className="d-flex align-items-center rounded-circle" style={{height:'12vh', width: '26%', fontSize:'25px', color: '#4CB1DF',background: '#EAEAEA'}}>
                        <p className="mx-auto pt-4">21%</p>
                      </div>
                      <div style={{textAlign:'center', fontSize:'13px'}}>
                          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <Footer /> */}
        </>
      );
  }
};

export default PersonalAnalysis;