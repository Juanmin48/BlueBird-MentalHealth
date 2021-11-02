import {React,useState,useEffect} from 'react';
import Icon from "awesome-react-icons";

const SpecificStats = (props) => {
    const [data, setData] = useState({title:'',percentage:'',description:''});

    useEffect(() => {
        setData(props);
    }, [props]);

    return (
      <>
        <div className="d-flex flex-column align-items-center pt-3 rounded" style={{height: '18vh', width: '30%', background: '#EAEAEA'}}>
            <p className="m-0" style={{fontSize:'16px', fontWeight:'bold'}}>{data.title}</p>
            <p className="m-0" style={{fontSize:'30px', fontWeight:'bold', color: '#4CB1DF'}}>{data.percentage}</p>
            <p>{data.description}</p>
        </div>
      </>
    );
}

export default SpecificStats;