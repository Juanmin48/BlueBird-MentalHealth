import {React,useState} from 'react';
import Icon from "awesome-react-icons";
import {Link} from 'react-router-dom';
import { ProSidebar, SidebarHeader, SidebarContent, Menu, MenuItem} from 'react-pro-sidebar';
// import 'react-pro-sidebar/dist/css/styles.css';
import './Sidebar.scss';

const Sidebar = ({getChange}) => {
    const [checkedbqa, setCheckedbqa] = useState(true);
    const [checkedbgt, setCheckedbgt] = useState(true);
    const [checkedcli, setCheckedcli] = useState(true);
    const [checkedctg, setCheckedctg] = useState(true);
    const [checkedmdn, setCheckedmdn] = useState(true);
    const [checkedstm, setCheckedstm] = useState(true);

    const handleChangeBQA = () => {
        setCheckedbqa(!checkedbqa);
        getChange([
            {
            "city": "Barranquilla",
            "status":!checkedbqa
            },
            {
            "city": "Bogotá",
            "status":checkedbgt
            },
            {
            "city": "Cali",
            "status":checkedcli
            },
            {
            "city": "Cartagena",
            "status":checkedctg
            },
            {
            "city": "Medellín",
            "status":checkedmdn
            },
            {
            "city": "Santa Marta",
            "status":checkedstm
            }
        ])
      };
    const handleChangeBGT = () => {
        setCheckedbgt(!checkedbgt);
        getChange([
            {
                "city": "Barranquilla",
                "status":checkedbqa
                },
                {
                "city": "Bogotá",
                "status":!checkedbgt
                },
                {
                "city": "Cali",
                "status":checkedcli
                },
                {
                "city": "Cartagena",
                "status":checkedctg
                },
                {
                "city": "Medellín",
                "status":checkedmdn
                },
                {
                "city": "Santa Marta",
                "status":checkedstm
                }
        ])
      };
    const handleChangeCLI = () => {
        setCheckedcli(!checkedcli);
        getChange([
            {
                "city": "Barranquilla",
                "status":checkedbqa
                },
                {
                "city": "Bogotá",
                "status":checkedbgt
                },
                {
                "city": "Cali",
                "status":!checkedcli
                },
                {
                "city": "Cartagena",
                "status":checkedctg
                },
                {
                "city": "Medellín",
                "status":checkedmdn
                },
                {
                "city": "Santa Marta",
                "status":checkedstm
                }
        ])
      };
      const handleChangeCTG = () => {
        setCheckedctg(!checkedctg);
        getChange([
            {
            "city": "Barranquilla",
            "status":checkedbqa
            },
            {
            "city": "Bogotá",
            "status":checkedbgt
            },
            {
            "city": "Cali",
            "status":checkedcli
            },
            {
            "city": "Cartagena",
            "status":!checkedctg
            },
            {
            "city": "Medellín",
            "status":checkedmdn
            },
            {
            "city": "Santa Marta",
            "status":checkedstm
            }
        ])
      };
    const handleChangeMDN = () => {
        setCheckedmdn(!checkedmdn);
        getChange([
            {
                "city": "Barranquilla",
                "status":checkedbqa
                },
                {
                "city": "Bogotá",
                "status":checkedbgt
                },
                {
                "city": "Cali",
                "status":checkedcli
                },
                {
                "city": "Cartagena",
                "status":checkedctg
                },
                {
                "city": "Medellín",
                "status":!checkedmdn
                },
                {
                "city": "Santa Marta",
                "status":checkedstm
                }
        ])
      };
    const handleChangeSTM = () => {
        setCheckedstm(!checkedstm);
        getChange([
            {
                "city": "Barranquilla",
                "status":checkedbqa
                },
                {
                "city": "Bogotá",
                "status":checkedbgt
                },
                {
                "city": "Cali",
                "status":checkedcli
                },
                {
                "city": "Cartagena",
                "status":checkedctg
                },
                {
                "city": "Medellín",
                "status":checkedmdn
                },
                {
                "city": "Santa Marta",
                "status":!checkedstm
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