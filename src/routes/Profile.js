import { authService } from "fbase";
import React from "react";
import { useNavigate } from "react-router-dom";


const Profile = () => <span>Profile</span>; //function componets
export default Profile;



/*export default () => {
    const navigate =useNavigate();
    const onLogOutClick =() => {
        authService.signOut();
        navigate("/");    
    };
    return(
    <> 
     <button onClick={onLogOutClick}>Log Out </button>
    </>
    );
};*/
