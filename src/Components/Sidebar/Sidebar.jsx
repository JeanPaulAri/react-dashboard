import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import InventoryIcon from '@mui/icons-material/Inventory';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import LogoutIcon from '@mui/icons-material/Logout';
import './Sidebar.scss'


const Sidebar = () => {


    return(
        <div className="Sidebar">
            <div className="top">
                <span className="logo"> Chipapa </span>
            </div>
            <div className="center">
                <ul>
                        <p className="tittle">Main</p>
                    <li>
                        <DashboardIcon className="icon"/>
                        <span>Dashboard</span>
                    </li>
                        <p className="tittle">User</p>
                    <li>
                        <CircleNotificationsIcon className="icon"/>
                        <span>Notifications</span>
                    </li>
                    <li>
                        <AccountCircleIcon className="icon"/>
                        <span>Profile</span>
                    </li>
                    <li>
                        <InventoryIcon className="icon"/>
                        <span>Products</span>
                    </li>
                        <p className="tittle">Services</p>
                    <li>
                        <SupervisedUserCircleIcon className="icon"/>
                        <span>Users</span>
                    </li>
                    <li>
                        <InsertChartIcon className="icon"/>
                        <span>Stats</span>
                    </li>
                    <li>
                        <SettingsApplicationsIcon className="icon"/>
                        <span>Settings</span>
                    </li>
                    <li>
                        <LogoutIcon className="icon"/>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <p className="tittle">Themes</p>
                <div className="colorOption"></div>
                <div className="colorOption"></div>

            </div>
        </div>
    );
}



export default Sidebar;