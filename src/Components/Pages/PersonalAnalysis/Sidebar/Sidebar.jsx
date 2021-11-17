import {React,useState} from 'react';
import Icon from "awesome-react-icons";
import {Link} from 'react-router-dom';
import { ProSidebar, SidebarHeader, SidebarContent, Menu, MenuItem} from 'react-pro-sidebar';
// import 'react-pro-sidebar/dist/css/styles.css';
import './Sidebar.scss';

const Sidebar = ({getChange}) => {
    const [user] = useState(JSON.parse(localStorage.getItem('user')));
    const [checkeda, setCheckeda] = useState(true);
    const [checkedd, setCheckedd] = useState(true);
    const [checkeds, setCheckeds] = useState(true);
    const [logout, setLogout] = useState(false);

    const handleChangeA = () => {
        setCheckeda(!checkeda);
        getChange([
            {
            "option": "Anxiety",
            "status":!checkeda
            },
            {
            "option": "Depression",
            "status":checkedd
            },
            {
            "option": "Stress",
            "status":checkeds
            },
            {
            "option": "logout",
            "status":logout
            }
        ])
      };
    const handleChangeD = () => {
        setCheckedd(!checkedd);
        getChange([
            {
            "option": "Anxiety",
            "status":checkeda
            },
            {
            "option": "Depression",
            "status":!checkedd
            },
            {
            "option": "Stress",
            "status":checkeds
            },
            {
            "option": "logout",
            "status":logout
            }
        ])
      };
    const handleChangeS = () => {
        setCheckeds(!checkeds);
        getChange([
            {
            "option": "Anxiety",
            "status":checkeda
            },
            {
            "option": "Depression",
            "status":checkedd
            },
            {
            "option": "Stress",
            "status":!checkeds
            },
            {
            "option": "logout",
            "status":logout
            }
        ])
      };
      const handleLogOut = () => {
        setLogout(!logout);
        getChange([
            {
            "option": "Anxiety",
            "status":checkeda
            },
            {
            "option": "Depression",
            "status":checkedd
            },
            {
            "option": "Stress",
            "status":checkeds
            },
            {
            "option": "logout",
            "status":!logout
            }
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
                        <div className="row d-flex justify-content-center">
                            <p style={{width:"60%"}}>Twitter Account</p>
                            <button type="button" class="btn btn-link shadow-none" style={{width:"10%", marginTop:"-15px"}} onClick={handleLogOut}><Icon name="log-out"/></button>
                        </div>
                        <div>
                            <img src={user.photoURL} alt="ProfilePicture" />
                        </div>
                        <h6 className="pt-2" style={{color: 'black'}}>{user.displayName}</h6>
                    </div>
                </Menu>
            </SidebarContent>
        </ProSidebar>
      </>
    );
}

export default Sidebar;