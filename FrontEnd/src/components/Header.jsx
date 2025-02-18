import React from "react";
import logo from "../assets/spotify-logo.png"
import { Link } from 'react-router-dom';


const Header = () => {

  return <div className="header">
    <Link to="/">
      <img src={logo} alt="" />
    </Link>


    <Link to="/" className="header_link">

      <h1>Spotify</h1></Link>

  </div>
}

export default Header;