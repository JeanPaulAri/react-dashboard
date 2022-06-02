import React from 'react';
import "./Home.scss";
import Sidebar from "../../Components/Sidebar/Sidebar";
const Home= () =>{

    return(
        <div className="homePage">
            <Sidebar/>
            <div className="homeContainer">
                container
            </div>
        </div>
    );

}

export default Home;