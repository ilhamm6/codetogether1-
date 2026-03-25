import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Categories from "../Components/Categories";
import Professionals from "../Components/Professionals";
import HowItWorks from "../Components/HowItWorks";
import Footer from "../Components/Footer";
import "../style/Home.css";

export default function Home(){
	return(
     <>
       <Navbar/>
       <Hero/>
       <Categories/>
       <Professionals/>
       <HowItWorks/>
       <Footer/>
       </>
	);
}
