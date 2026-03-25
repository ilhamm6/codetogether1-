import React from "react";
import "./ServiceCard.css";

function ServiceCard({ icon, title, bg }) {

return (

<div className="serviceCard">

<div className="iconCircle" style={{ background: bg }}>
{icon}
</div>

<h3>{title}</h3>

</div>

)

}

export default ServiceCard