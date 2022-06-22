import React from 'react';

import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import './Widget.scss'
const Widget = () => {

    return(

        <div className="Widget">
            <div className="left">
                <span className="tittle">
                    USERS
                </span>
                <span className="counter">
                    12345678
                </span>
                <span className="link">
                    see All users
                </span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon/>
                    20  %
                </div>
                <PersonOutlineOutlinedIcon className="icon"/>
            </div>
        </div>
    );

}

export default Widget;