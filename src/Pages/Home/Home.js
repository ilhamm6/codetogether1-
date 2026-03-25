import React from "react";
import "./Home.css";

import ServiceCard from "../../Components/ServiceCard/ServiceCard";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";

import {
FaWrench,
FaBolt,
FaKey,
FaBroom,
FaTree,
FaCog,
FaSearch,
FaUserCheck,
FaCalendarCheck
} from "react-icons/fa";

function Home() {

const services = [

{
title:"Plombier",
icon:<FaWrench />,
bg:"#dbeafe"
},

{
title:"Électricien",
icon:<FaBolt />,
bg:"#fef9c3"
},

{
title:"Serrurier",
icon:<FaKey />,
bg:"#f3f4f6"
},

{
title:"Femme de ménage",
icon:<FaBroom />,
bg:"#fce7f3",
color:"#2563eb"

},

{
title:"Jardinier",
icon:<FaTree />,
bg:"#dcfce7",
color:"#eab308"

},

{
title:"Technicien",
icon:<FaCog />,
bg:"#ede9fe",
color:"#982598"
}

];

const pros = [

{
name:"Ahmed Benali",
job:"Plombier",
rating:"4.8",
image:"https://images.unsplash.com/photo-1607746882042-944635dfe10e",
status:"Disponible",
distance:"2.3 km"
},

{
name:"Fatima Alaoui",
job:"Électricienne",
rating:"4.9",
image:"https://images.unsplash.com/photo-1544005313-94ddf0286df2",
status:"Disponible",
distance:"1.5 km"
},

{
name:"Youssef Tazi",
job:"Technicien",
rating:"4.7",
image:"https://images.unsplash.com/photo-1595152772835-219674b2a8a6",
status:"Occupé",
distance:"3.1 km"
},

{
name:"Salma Idrissi",
job:"Femme de ménage",
rating:"5.0",
image:"https://images.unsplash.com/photo-1580489944761-15a19d654956",
status:"Disponible",
distance:"0.8 km"
}

];

return (

<div className="home">

{/* HERO */}

<section className="hero">

<h1>Trouvez votre professionnel près de chez vous</h1>

<p>Connectez vous avec les meilleurs professionnels</p>

<div className="searchBox">
<input type="text" placeholder="Rechercher un service..." />
<button className="searchBtn">Rechercher</button>
</div>

</section>

{/* SERVICES */}

<section className="services">

<h2>Nos catégories de services</h2>

<div className="servicesGrid">

{services.map((service,index)=>(

<ServiceCard
key={index}
title={service.title}
icon={service.icon}
bg={service.bg}
/>

))}

</div>

</section>

{/* PROFESSIONALS */}

<section className="pros">

<h2>Professionnels recommandés</h2>

<div className="prosGrid">

{pros.map((pro,index)=>(

<ProfileCard
key={index}
name={pro.name}
job={pro.job}
rating={pro.rating}
image={pro.image}
status={pro.status}
distance={pro.distance}
/>

))}

</div>

</section>

{/* HOW IT WORKS */}

<section className="how">

<h2>Comment ça marche ?</h2>

<div className="howGrid">

<div className="howCard">
<FaSearch className="howIcon"/>
<h3>Rechercher</h3>
<p>Trouvez le service dont vous avez besoin</p>
</div>

<div className="howCard">
<FaUserCheck className="howIcon"/>
<h3>Choisir</h3>
<p>Comparez les profils et les avis</p>
</div>

<div className="howCard">
<FaCalendarCheck className="howIcon"/>
<h3>Réserver</h3>
<p>Contactez et réservez rapidement</p>
</div>

</div>

</section>

</div>

)

}

export default Home