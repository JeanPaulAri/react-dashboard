import React from 'react';

import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

import './Widget.scss'
const Widget = ({ type }) => {

    let data;
    const amount=100;
    const diff=20;
        switch(type){
            case "user":
                data={
                    title:"USERS",
                    isMoney:false,
                    link:"See all users",
                    icon:(
                        <PersonOutlineOutlinedIcon
                            className="icon"
                            style={{
                                color:"#ff3030",
                                backgroundColor: "#ffc1c1"
                            }}
                        />
                    ),
                };
                break;
            case "order":
                data={
                    title:"ORDERS",
                    isMoney:false,
                    link:"View all orders",
                    icon:(
                        <ShoppingCartOutlinedIcon
                            className="icon"
                            style={{
                                color:"#fca322",
                                backgroundColor: "#fcd9b5"
                            }}
                        />
                    ),
                };
                break;
            case "earning":
                data={
                    title:"EARNINGS",
                    isMoney:false,
                    link:"View net earnings",
                    icon:(
                        <MonetizationOnOutlinedIcon
                            className="icon"
                            style={{
                                color:"#24bb4f",
                                backgroundColor: "#c1ffd3"
                            }}
                        />
                    ),
                };
                break;
            case "balance":
                data={
                    title:"BALANCE",
                    isMoney:false,
                    link:"See details",
                    icon:(
                        <AccountBalanceWalletOutlinedIcon
                            className="icon"
                            style={{
                                color:"#c238f8",
                                backgroundColor: "#ffc1c1"
                            }}
                        />
                    ),
                };
                break;
            default:
                break;
        }
    return(
        <div className="Widget">
            <div className="left">
                <span className="title">
                    {data.title}
                </span>
                <span className="counter">
                    {data.isMoney && "$"} {amount}
                </span>
                <span className="link">
                    {data.link}
                </span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon/>
                    {diff} %
                </div>
                {data.icon}
            </div>
        </div>
    );

}

export default Widget;