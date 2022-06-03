import React from 'react';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import LanguageIcon from '@mui/icons-material/Language';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';


import './Navbar.scss';
const Navbar = () => {
    return(
        <div className="Navbar">
            <div className="wrapper">
                <div className="Search">
                    <input type="text" placeholder="Search..."/>
                    <ManageSearchIcon/>
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageIcon/>
                        English
                    </div>
                    <div className="item">
                        <Brightness4Icon/>

                    </div>
                    <div className="item">
                        <FullscreenIcon/>

                    </div>
                    <div className="item">
                        <NotificationsIcon/>

                    </div>
                    <div className="item">
                        <ChatBubbleOutlineIcon/>

                    </div>
                    <div className="item">
                        <FormatListBulletedOutlinedIcon/>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Navbar;