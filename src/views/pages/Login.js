import React, { Component } from "react";
// import Slider from "react-slick";
import { Link } from "react-router-dom";
import Header from "../layout/Header";
import Footer from '../layout/Footer';

// import './login.css';
import loginbg from '../../assets/background/loginbg.png'


function Login() {
  return (
    <div className = "allpage">
      <Header />
      <div className = "container">
        <img className = "loginbg" src={loginbg} alt="Background" />
        <div className = "authentication">Authentication</div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
