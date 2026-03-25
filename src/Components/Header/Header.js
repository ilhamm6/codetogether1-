import React, { useState } from "react";
import "./Header.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header(){

const [menu,setMenu] = useState(false)

return(

<header className="header">

<div className="logo">
khidma.ma
</div>

<nav className={menu ? "nav active" : "nav"}>

<Link to="/">Accueil</Link>
<a href="#">Trouver un professionnel</a>
<a href="#">Catégories</a>
<a href="#">Contact</a>

<div className="navButtons">
<Link to="/login" className="loginBtn">
Se connecter
</Link>
<Link to="/register "className="signupBtn">
S'inscrire
</Link>
</div> 

</nav>

<div className="menuIcon" onClick={()=>setMenu(!menu)}>
{menu ? <FaTimes/> : <FaBars/>}
</div>

</header>

)

}

export default Header