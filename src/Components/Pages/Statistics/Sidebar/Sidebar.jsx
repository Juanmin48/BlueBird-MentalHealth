import {React,useState} from 'react';
import Icon from "awesome-react-icons";
import {Link} from 'react-router-dom';
import { ProSidebar, SidebarHeader, SidebarContent, Menu, MenuItem} from 'react-pro-sidebar';
import './Sidebar.scss';

const Sidebar = ({getChange}) => {
    const [user] = useState(JSON.parse(localStorage.getItem('user')));
    const [checkedbqa, setCheckedbqa] = useState(true);
    const [checkedbgt, setCheckedbgt] = useState(true);
    const [checkedcli, setCheckedcli] = useState(true);
    const [checkedctg, setCheckedctg] = useState(true);
    const [checkedmdn, setCheckedmdn] = useState(true);
    const [checkedstm, setCheckedstm] = useState(true);
    const [logout, setLogout] = useState(false);

    const handleChangeBQA = () => {
        setCheckedbqa(!checkedbqa);
        getChange([
            {
            "option": "Barranquilla",
            "status":!checkedbqa
            },
            {
            "option": "Bogotá",
            "status":checkedbgt
            },
            {
            "option": "Cali",
            "status":checkedcli
            },
            {
            "option": "Cartagena",
            "status":checkedctg
            },
            {
            "option": "Medellín",
            "status":checkedmdn
            },
            {
            "option": "Santa Marta",
            "status":checkedstm
            },
            {
            "option": "logout",
            "status":logout
            }
        ])
      };
    const handleChangeBGT = () => {
        setCheckedbgt(!checkedbgt);
        getChange([
            {
                "option": "Barranquilla",
                "status":checkedbqa
                },
                {
                "option": "Bogotá",
                "status":!checkedbgt
                },
                {
                "option": "Cali",
                "status":checkedcli
                },
                {
                "option": "Cartagena",
                "status":checkedctg
                },
                {
                "option": "Medellín",
                "status":checkedmdn
                },
                {
                "option": "Santa Marta",
                "status":checkedstm
                },
                {
                "option": "logout",
                "status":logout
                }
        ])
      };
    const handleChangeCLI = () => {
        setCheckedcli(!checkedcli);
        getChange([
            {
                "option": "Barranquilla",
                "status":checkedbqa
                },
                {
                "option": "Bogotá",
                "status":checkedbgt
                },
                {
                "option": "Cali",
                "status":!checkedcli
                },
                {
                "option": "Cartagena",
                "status":checkedctg
                },
                {
                "option": "Medellín",
                "status":checkedmdn
                },
                {
                "option": "Santa Marta",
                "status":checkedstm
                },
                {
                "option": "logout",
                "status":logout
                }
        ])
      };
      const handleChangeCTG = () => {
        setCheckedctg(!checkedctg);
        getChange([
            {
            "option": "Barranquilla",
            "status":checkedbqa
            },
            {
            "option": "Bogotá",
            "status":checkedbgt
            },
            {
            "option": "Cali",
            "status":checkedcli
            },
            {
            "option": "Cartagena",
            "status":!checkedctg
            },
            {
            "option": "Medellín",
            "status":checkedmdn
            },
            {
            "option": "Santa Marta",
            "status":checkedstm
            },
            {
            "option": "logout",
            "status":logout
            }
        ])
      };
    const handleChangeMDN = () => {
        setCheckedmdn(!checkedmdn);
        getChange([
            {
                "option": "Barranquilla",
                "status":checkedbqa
                },
                {
                "option": "Bogotá",
                "status":checkedbgt
                },
                {
                "option": "Cali",
                "status":checkedcli
                },
                {
                "option": "Cartagena",
                "status":checkedctg
                },
                {
                "option": "Medellín",
                "status":!checkedmdn
                },
                {
                "option": "Santa Marta",
                "status":checkedstm
                },
                {
                "option": "logout",
                "status":logout
                }
        ])
      };
    const handleChangeSTM = () => {
        setCheckedstm(!checkedstm);
        getChange([
            {
                "option": "Barranquilla",
                "status":checkedbqa
                },
                {
                "option": "Bogotá",
                "status":checkedbgt
                },
                {
                "option": "Cali",
                "status":checkedcli
                },
                {
                "option": "Cartagena",
                "status":checkedctg
                },
                {
                "option": "Medellín",
                "status":checkedmdn
                },
                {
                "option": "Santa Marta",
                "status":!checkedstm
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
                "option": "Barranquilla",
                "status":checkedbqa
                },
                {
                "option": "Bogotá",
                "status":checkedbgt
                },
                {
                "option": "Cali",
                "status":checkedcli
                },
                {
                "option": "Cartagena",
                "status":checkedctg
                },
                {
                "option": "Medellín",
                "status":checkedmdn
                },
                {
                "option": "Santa Marta",
                "status": checkedstm
                },
                {
                "option": "logout",
                "status":!logout
                }
        ])
      };
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
                        Personal analysis
                        <Link to="/personalAnalysis" />
                    </MenuItem>
                </Menu>
            </SidebarHeader>
            <SidebarContent>
                <Menu>
                    <MenuItem >
                        <div className="form-check form-switch ps-5">
                            <input className="form-check-input" id="chkbqa" type="checkbox" checked={checkedbqa} onChange={handleChangeBQA}/>
                            <label className="form-check-label" htmlFor="chkbqa">Barranquilla</label>
                        </div>
                    </MenuItem>
                    <MenuItem >
                        <div className="form-check form-switch ps-5">
                            <input className="form-check-input" id="chkbgt" type="checkbox" checked={checkedbgt} onChange={handleChangeBGT}/>
                            <label className="form-check-label" htmlFor="chkbgt">Bogotá</label>
                        </div>
                    </MenuItem>
                    <MenuItem >
                        <div className="form-check form-switch ps-5">
                            <input className="form-check-input" id="chkcli" type="checkbox" checked={checkedcli} onChange={handleChangeCLI}/>
                            <label className="form-check-label" htmlFor="chkcli">Cali</label>
                        </div>
                    </MenuItem>
                    <MenuItem >
                        <div className="form-check form-switch ps-5">
                            <input className="form-check-input" id="chkctg" type="checkbox" checked={checkedctg} onChange={handleChangeCTG}/>
                            <label className="form-check-label" htmlFor="chkctg">Cartagena</label>
                        </div>
                    </MenuItem>
                    <MenuItem >
                        <div className="form-check form-switch ps-5">
                            <input className="form-check-input" id="chkmdn" type="checkbox" checked={checkedmdn} onChange={handleChangeMDN}/>
                            <label className="form-check-label" htmlFor="chkmdn">Medellín</label>
                        </div>
                    </MenuItem>
                    <MenuItem >
                        <div className="form-check form-switch ps-5">
                            <input className="form-check-input" id="chkstm" type="checkbox" checked={checkedstm} onChange={handleChangeSTM}/>
                            <label className="form-check-label" htmlFor="chkstm">Santa Marta</label>
                        </div>
                    </MenuItem>
                    <div
                    style={{
                        marginTop: '5px',
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