import React, { useState } from "react";
import "./Header.css";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header(){

const [menu,setMenu] = useState(false)

return(

<header className="header">

<div className="logo">
khdima.ma
</div>

<nav className={menu ? "nav active" : "nav"}>

<Link to="/">Accueil</Link>
<Link to="/search">Trouver un professionnel</Link>
<a href="#">À propos</a>


<div className="navButtons">
<Link to="/login" className="connectionBtn">
<FaUser />
Connexion
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