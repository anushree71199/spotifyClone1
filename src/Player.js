import React from "react";
import './Player.css';
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";

function Player({spotify}){
    return (
            <div className="player">
                <div className="player_body">
                    <Sidebar/>
                    {/*SideBar*/}
                     <Body spotify={spotify}/>
                    {/*Body*/}
                    
                    </div>
                    <Footer spotify={spotify}/>
                    {/*Footer*/}
                    </div>
    )
}

export default Player;