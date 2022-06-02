import React from 'react';
import './Sidebar.scss'
const Sidebar = () => {


    return(
        <div className="Sidebar">
            <div className="top">
                <span className="logo"> Dashboard </span>
            </div>
            <div className="center">
                <ul>
                    <li>
                        <span>Dashboard</span>
                    </li>
                    <li>
                        <span>Dashboard</span>
                    </li>
                    <li>
                        <span>Dashboard</span>
                    </li>
                    <li>
                        <span>Dashboard</span>
                    </li>
                    <li>
                        <span>Dashboard</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">options</div>
        </div>
    );
}



export default Sidebar;