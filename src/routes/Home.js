import React from "react";
import { authService } from "fbase";
//import React from "react";
import { useNavigate } from "react-router-dom";

export default () => {
    const navigate =useNavigate();
    const onLogOutClick =() => {
        authService.signOut();
        navigate("/Home");    
    };
    return(
    <> 
     <button onClick={onLogOutClick}>Log Out </button>
    </>
    );
};




//const Home = () => <span>Home</span>; //function componets
//export default Home;
