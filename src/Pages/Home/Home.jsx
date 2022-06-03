import React from 'react';
import "./Home.scss";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
const Home= () =>{
    return(
        <div className="homePage">
            <Sidebar/>
            <div className="homeContainer">
                <Navbar/>
                HomeContainer
            </div>
        </div>
    );
}

export default Home;