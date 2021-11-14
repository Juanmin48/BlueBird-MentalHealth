// import './Statistics.css';
import {React, Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../../Menu/Menu';
import Sidebar from './Sidebar/Sidebar'
import Footer from '../../Footer/Footer';
import SpecificStats from './SpecificStats/SpecificStats';
import { Column } from '@ant-design/charts';
import axios from 'axios';
import Loader from "react-loader-spinner";


class Statistics extends Component {
  state = {
    loading: true,
    cant: null,
    tanxiety: null,
    tdepression: null,
    tstress: null,
    all: null,
    bqa: null,
    bgt: null,
    mdn: null,
    cli: null,
    ctg: null,
    stm: null,
    config: null,
    cpercenta: 'Temp',
    cpercentd: 'Temp',
    cpercents: 'Temp',
    cname: 'Temp',
    currentUser: null
  }

  componentDidMount(){
    //JSON.parse(localStorage.getItem('user'))
    setTimeout(()=>{
      this.setState({
        loading :false
      })
    },3000);
    axios.get("http://bba9-35-245-240-12.ngrok.io/get_analysis_colombia")
    .then(response => {
      this.setState({
        all: response.data.percentages,
        bqa: response.data.percentages[0],
        bgt: response.data.percentages[1],
        mdn: response.data.percentages[2],
        cli: response.data.percentages[3],
        ctg: response.data.percentages[4],
        stm: response.data.percentages[5],
      })
      
      const json = response.data;
      console.log(this.state.all);
      const data = [
        {
          city: 'Barranquilla',
          condition: 'Anxiety',
          cases: this.state.bqa.percentages[1].quantity,
        },
        {
          city: 'Barranquilla',
          condition: 'Depression',
          cases: this.state.bqa.percentages[0].quantity,
        },
        {
          city: 'Barranquilla',
          condition: 'Stress',
          cases: this.state.bqa.percentages[2].quantity,
        },
        {
          city: 'Bogotá',
          condition: 'Anxiety',
          cases: this.state.bgt.percentages[1].quantity,
        },
        {
          city: 'Bogotá',
          condition: 'Depression',
          cases: this.state.bgt.percentages[0].quantity,
        },
        {
          city: 'Bogotá',
          condition: 'Stress',
          cases: this.state.bgt.percentages[2].quantity,
        },
        {
          city: 'Cali',
          condition: 'Anxiety',
          cases: this.state.cli.percentages[1].quantity,
        },
        {
          city: 'Cali',
          condition: 'Depression',
          cases: this.state.cli.percentages[0].quantity,
        },
        {
          city: 'Cali',
          condition: 'Stress',
          cases: this.state.cli.percentages[2].quantity,
        },
        {
          city: 'Cartagena',
          condition: 'Anxiety',
          cases: this.state.ctg.percentages[1].quantity,
        },
        {
          city: 'Cartagena',
          condition: 'Depression',
          cases: this.state.ctg.percentages[0].quantity,
        },
        {
          city: 'Cartagena',
          condition: 'Stress',
          cases: this.state.ctg.percentages[2].quantity,
        },
        {
          city: 'Medellín',
          condition: 'Anxiety',
          cases: this.state.mdn.percentages[1].quantity,
        },
        {
          city: 'Medellín',
          condition: 'Depression',
          cases: this.state.mdn.percentages[0].quantity,
        },
        {
          city: 'Medellín',
          condition: 'Stress',
          cases: this.state.mdn.percentages[2].quantity,
        },
        {
          city: 'Santa Marta',
          condition: 'Anxiety',
          cases: this.state.stm.percentages[1].quantity,
        },
        {
          city: 'Santa Marta',
          condition: 'Depression',
          cases: this.state.stm.percentages[0].quantity,
        },
        {
          city: 'Santa Marta',
          condition: 'Stress',
          cases: this.state.stm.percentages[2].quantity,
        },
      ];
      this.setConfig(data);
    })
  
}
  
  setConfig(data) {
    this.setState({
      config: {
        data,
        isGroup: true,
        xField: 'city',
        yField: 'cases',
        seriesField: 'condition',
        label: {
          position: 'middle',
          layout: [
            { type: 'interval-adjust-position' },
            { type: 'interval-hide-overlap' },
            { type: 'adjust-color' },
          ],
        },
        // columnStyle: {
        //   fill: '#4CB1DF',
        //   fillOpacity: 1,
        //   stroke: 'black',
        //   lineWidth: 0,
        //   lineDash: [4,5],
        //   strokeOpacity: 0.7,
        //   shadowColor: 'black',
        //   shadowBlur: 0,
        //   shadowOffsetX: 0,
        //   shadowOffsetY: 0,
        //   cursor: 'pointer'
        // },
        meta: {
          type: { alias: 'City' },
          cases: { alias: 'Cases' },
        },
      }
    })
  }
  checkboxChange(option){
    var data = [
      {
        city: 'Barranquilla',
        condition: 'Anxiety',
        cases: this.state.bqa.percentages[1].quantity,
      },
      {
        city: 'Barranquilla',
        condition: 'Depression',
        cases: this.state.bqa.percentages[0].quantity,
      },
      {
        city: 'Barranquilla',
        condition: 'Stress',
        cases: this.state.bqa.percentages[2].quantity,
      },
      {
        city: 'Bogotá',
        condition: 'Anxiety',
        cases: this.state.bgt.percentages[1].quantity,
      },
      {
        city: 'Bogotá',
        condition: 'Depression',
        cases: this.state.bgt.percentages[0].quantity,
      },
      {
        city: 'Bogotá',
        condition: 'Stress',
        cases: this.state.bgt.percentages[2].quantity,
      },
      {
        city: 'Cali',
        condition: 'Anxiety',
        cases: this.state.cli.percentages[1].quantity,
      },
      {
        city: 'Cali',
        condition: 'Depression',
        cases: this.state.cli.percentages[0].quantity,
      },
      {
        city: 'Cali',
        condition: 'Stress',
        cases: this.state.cli.percentages[2].quantity,
      },
      {
        city: 'Cartagena',
        condition: 'Anxiety',
        cases: this.state.ctg.percentages[1].quantity,
      },
      {
        city: 'Cartagena',
        condition: 'Depression',
        cases: this.state.ctg.percentages[0].quantity,
      },
      {
        city: 'Cartagena',
        condition: 'Stress',
        cases: this.state.ctg.percentages[2].quantity,
      },
      {
        city: 'Medellín',
        condition: 'Anxiety',
        cases: this.state.mdn.percentages[1].quantity,
      },
      {
        city: 'Medellín',
        condition: 'Depression',
        cases: this.state.mdn.percentages[0].quantity,
      },
      {
        city: 'Medellín',
        condition: 'Stress',
        cases: this.state.mdn.percentages[2].quantity,
      },
      {
        city: 'Santa Marta',
        condition: 'Anxiety',
        cases: this.state.stm.percentages[1].quantity,
      },
      {
        city: 'Santa Marta',
        condition: 'Depression',
        cases: this.state.stm.percentages[0].quantity,
      },
      {
        city: 'Santa Marta',
        condition: 'Stress',
        cases: this.state.stm.percentages[2].quantity,
      },
    ];
    if (option[0].status) {
      data.push( {
        city: 'Barranquilla',
        condition: 'Anxiety',
        cases: this.state.bqa.percentages[1].quantity,
      },
      {
        city: 'Barranquilla',
        condition: 'Depression',
        cases: this.state.bqa.percentages[0].quantity,
      },
      {
        city: 'Barranquilla',
        condition: 'Stress',
        cases: this.state.bqa.percentages[2].quantity,
      }
      )
    }else{
      data = data.filter(item => item.city !== "Barranquilla")
    }
    if (option[1].status) {
      data.push( {
        city: 'Bogotá',
        condition: 'Anxiety',
        cases: this.state.bgt.percentages[1].quantity,
      },
      {
        city: 'Bogotá',
        condition: 'Depression',
        cases: this.state.bgt.percentages[0].quantity,
      },
      {
        city: 'Bogotá',
        condition: 'Stress',
        cases: this.state.bgt.percentages[2].quantity,
      }
      )
    }else{
      data = data.filter(item => item.city !== "Bogotá")
    }
    if (option[2].status) {
      data.push( {
        city: 'Cali',
        condition: 'Anxiety',
        cases: this.state.cli.percentages[1].quantity,
      },
      {
        city: 'Cali',
        condition: 'Depression',
        cases: this.state.cli.percentages[0].quantity,
      },
      {
        city: 'Cali',
        condition: 'Stress',
        cases: this.state.cli.percentages[2].quantity,
      }
      )
    }else{
      data = data.filter(item => item.city !== "Cali")
    }
    if (option[3].status) {
      data.push( {
        city: 'Cartagena',
        condition: 'Anxiety',
        cases: this.state.ctg.percentages[1].quantity,
      },
      {
        city: 'Cartagena',
        condition: 'Depression',
        cases: this.state.ctg.percentages[0].quantity,
      },
      {
        city: 'Cartagena',
        condition: 'Stress',
        cases: this.state.ctg.percentages[2].quantity,
      }
      )
    }else{
      data = data.filter(item => item.city !== "Cartagena")
    }
    if (option[4].status) {
      data.push( {
        city: 'Medellín',
        condition: 'Anxiety',
        cases: this.state.mdn.percentages[1].quantity,
      },
      {
        city: 'Medellín',
        condition: 'Depression',
        cases: this.state.mdn.percentages[0].quantity,
      },
      {
        city: 'Medellín',
        condition: 'Stress',
        cases: this.state.mdn.percentages[2].quantity,
      }
      )
    }else{
      data = data.filter(item => item.city !== "Medellín")
    }
    if (option[5].status) {
      data.push( {
        city: 'Santa Marta',
        condition: 'Anxiety',
        cases: this.state.stm.percentages[1].quantity,
      },
      {
        city: 'Santa Marta',
        condition: 'Depression',
        cases: this.state.stm.percentages[0].quantity,
      },
      {
        city: 'Santa Marta',
        condition: 'Stress',
        cases: this.state.stm.percentages[2].quantity,
      }
      )
    }else{
      data = data.filter(item => item.city !== "Santa Marta")
    }
    this.setConfig(data);
  }
  render(){
    return(
      this.state.loading
      ? <>
          <Menu hidden={true}/>
            <Loader className="col d-flex justify-content-around"
              style={{marginTop:'240px'}}
              type="Puff"
              color="#4CB1DF"
              height={150}
              width={150} //2 secs
            />
        </> 
        :
      <>
        <Menu hidden={true}/>
        <div className="" style={{height: '92vh', width: '100%', marginTop: '56px', background: '#F6F8FB'}}>
          <div className="row m-0 p-0" style={{width: '100%'}}>
            <div className="p-0" style={{height: '92vh', width: '21%'}}>
            <Sidebar getChange={(option)=>{
              this.checkboxChange(option);
            }}/>
            </div>
            <div className="p-0" style={{height: '92vh', width: '79%'}}>
              <div className="row d-flex justify-content-around align-items-center m-0 p-0" style={{height: '26vh'}}>
                <SpecificStats title={"Anxiety"} percentage={this.state.cpercenta+"%"} description={this.state.cname}/>
                <SpecificStats title={"Depression"} percentage={this.state.cpercentd+"%"} description={this.state.cname}/>
                <SpecificStats title={"Stress"} percentage={this.state.cpercents+"%"} description={this.state.cname}/>
              </div>
              <div style={{height: '66vh', width: '100%'}}>
                <div className="ps-4 pe-4">
                  <Column
                    {...this.state.config}
                    onReady={(plot) => {
                      plot.on('plot:click', (evt) => {
                        const { x, y } = evt;
                        const {data} = plot.chart.getTooltipItems({ x, y })[0];
                        const cdata = this.state.all.filter(item => item.city === data.city)
                        this.setState({
                          cname: data.city,
                          cpercenta: cdata[0].percentages[1].percentage,
                          cpercentd: cdata[0].percentages[0].percentage,
                          cpercents: cdata[0].percentages[2].percentage
                        })
                      });
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </>
    );
  }
}export default Statistics;