import React from 'react';
import {Outlet, Link} from "react-router-dom";

const Home = () =>{
    return(
        <div>
            {/* {localStorage.getItem("username")} */}
            <nav>
                <ul>    
                    <li><Link to="/Login">Login</Link></li>
                    <li><Link to="/Registration">Registration</Link></li>
                    <li><Link to="/MyProfile">My Profile</Link></li>
                    <li><Link to="/Product">Product</Link></li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    )
} 

export default Home;