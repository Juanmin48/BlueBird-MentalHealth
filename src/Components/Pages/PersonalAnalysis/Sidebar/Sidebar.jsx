import {React,useState} from 'react';
import Icon from "awesome-react-icons";
import {Link} from 'react-router-dom';
import { ProSidebar, SidebarHeader, SidebarContent, Menu, MenuItem} from 'react-pro-sidebar';
// import 'react-pro-sidebar/dist/css/styles.css';
import './Sidebar.scss';

const Sidebar = ({getChange}) => {

    const setAll = () =>{
        getChange("All");
    };
    const setAnxiety = () =>{
        getChange("Anxiety");
    };
    const setDepression = () =>{
        getChange("Depression");
    };
    const setStress = () =>{
        getChange("Stress");
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
                        General Statistics
                        <Link to="/statistics" />
                    </MenuItem>
                </Menu>
            </SidebarHeader>
            <SidebarContent>
                <Menu>
                    <MenuItem icon={<Icon name="activity" />} onClick={setAll}>All</MenuItem>
                    <MenuItem icon={<Icon name="activity" />} onClick={setAnxiety}>Anxiety</MenuItem>
                    <MenuItem icon={<Icon name="activity" />} onClick={setDepression}>Depression</MenuItem>
                    <MenuItem icon={<Icon name="activity" />} onClick={setStress}>Stress</MenuItem>
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