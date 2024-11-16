// src/pages/Home.js
import React from "react";
import "./home.css"; // Ensure this path points to your Home-specific CSS file

const Home = () => {
    return (
        <div className="container">
            <div className="background">
                <div className="button-container">
                    <div className="website-name">CatConnect</div>
                    <button className="login-btn">Login</button>
                    <button className="signup-btn">Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
