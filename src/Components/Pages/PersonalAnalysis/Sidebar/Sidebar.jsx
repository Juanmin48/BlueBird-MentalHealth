import {React,useState} from 'react';
import Icon from "awesome-react-icons";
import {Link} from 'react-router-dom';
import { ProSidebar, SidebarHeader, SidebarContent, Menu, MenuItem} from 'react-pro-sidebar';
// import 'react-pro-sidebar/dist/css/styles.css';
import './Sidebar.scss';

const Sidebar = ({getChange}) => {

    const [checkeda, setCheckeda] = useState(true);
    const [checkedd, setCheckedd] = useState(true);
    const [checkeds, setCheckeds] = useState(true);

    const handleChangeA = () => {
        setCheckeda(!checkeda);
        getChange([
            {
            "condition": "Anxiety",
            "status":!checkeda
            },
            {
            "condition": "Depression",
            "status":checkedd
            },
            {
            "condition": "Stress",
            "status":checkeds
            },
        ])
      };
    const handleChangeD = () => {
        setCheckedd(!checkedd);
        getChange([
            {
            "condition": "Anxiety",
            "status":checkeda
            },
            {
            "condition": "Depression",
            "status":!checkedd
            },
            {
            "condition": "Stress",
            "status":checkeds
            },
        ])
      };
    const handleChangeS = () => {
        setCheckeds(!checkeds);
        getChange([
            {
            "condition": "Anxiety",
            "status":checkeda
            },
            {
            "condition": "Depression",
            "status":checkedd
            },
            {
            "condition": "Stress",
            "status":!checkeds
            },
        ])
      };
    // const setAll = () =>{
    //     getChange("All");
    // };
    // const setAnxiety = () =>{
    //     getChange("Anxiety");
    // };
    // const setDepression = () =>{
    //     getChange("Depression");
    // };
    // const setStress = () =>{
    //     getChange("Stress");
    // };

    return (
      <>
        <ProSidebar>
            <SidebarHeader>
                <div
                style={{
                    marginTop: '60px',
                    marginBottom: '-5px',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: '#4CB1DF',
                  }}
                >
                    <p>Dashboard</p>
                </div>
                <Menu>
                    <MenuItem icon={<Icon name="check-circle" />}>
                        General Statistics
                        <Link to="/statistics" />
                    </MenuItem>
                </Menu>
            </SidebarHeader>
            <SidebarContent>
                <Menu>
                    <MenuItem >
                        <div className="form-check form-switch ps-5">
                            <input className="form-check-input" id="chka" type="checkbox" checked={checkeda} onChange={handleChangeA}/>
                            <label className="form-check-label" htmlFor="chka">Anxiety</label>
                        </div>
                    </MenuItem>
                    <MenuItem >
                        <div className="form-check form-switch ps-5">
                            <input className="form-check-input" id="chkd" type="checkbox" checked={checkedd} onChange={handleChangeD}/>
                            <label className="form-check-label" htmlFor="chkd">Depression</label>
                        </div>
                    </MenuItem>
                    <MenuItem >
                        <div className="form-check form-switch ps-5">
                            <input className="form-check-input" id="chks" type="checkbox" checked={checkeds} onChange={handleChangeS}/>
                            <label className="form-check-label" htmlFor="chks">Stress</label>
                        </div>
                    </MenuItem>
                    <div
                    style={{
                        marginTop: '50px',
                        marginBottom: '-5px',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: 20,
                        color: '#4CB1DF',
                        }}
                    >
                        <p>Twitter Account</p>
                        <div></div>   
                        <h6 style={{color: 'black'}}>@User</h6>
                    </div>
                </Menu>
            </SidebarContent>
        </ProSidebar>
      </>
    );
}

export default Sidebar;