import React from 'react';
import Icon from "awesome-react-icons";
import { ProSidebar, SidebarHeader, SidebarContent, Menu, MenuItem} from 'react-pro-sidebar';
// import 'react-pro-sidebar/dist/css/styles.css';
import './Sidebar.scss';

const Sidebar = () => {
    
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
                    <MenuItem icon={<Icon name="check-circle" />}>Personal analysis</MenuItem>
                </Menu>
            </SidebarHeader>
            <SidebarContent>
                <Menu>
                    <MenuItem icon={<Icon name="activity" />}>Option 1</MenuItem>
                    <MenuItem icon={<Icon name="activity" />}>Option 2</MenuItem>
                    <MenuItem icon={<Icon name="activity" />}>Option 3</MenuItem>
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