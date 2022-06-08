import { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Navigation from "components/navigation";
import Profile from "routes/Profile";

const AppRouter = ({isLoggedIn}) => {
    return(
        <Router>
            {isLoggedIn && <Navigation />}
            <Routes>
                {isLoggedIn ? (          
                <>
                <Route path="/Home" element={<Home />} />
                <Route path="/Profile" element={<Profile />} />
                
                </>
            ):(
                <>
                 <Route path="/" element={<Auth />}/>
                </>
            )}

            </Routes>

        </Router>
    );
};
export default AppRouter;