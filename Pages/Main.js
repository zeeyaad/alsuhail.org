import React from "react";
import Navbar from "../Components/Navbar";
import Jumbotron from "../Components/Jumbotron";
import Hero from "../Components/Hero";
import Feature from "../Components/Features";
import Footer from "../Components/Footer";
import FooterOFFooter from "../Components/FooterOf Footer";


// import { TbBackground } from "react-icons/tb";

function Main() {
    // const BgPath = "../Assets/image.png";
    return <>
        <Navbar Home={"الرئيسية"} Mentinance={"خدمات الصيانة"} Cleaning={"خدمات التنظيف"} Contractors={"خدمات المقاولات"} />
        <Jumbotron />
        <Hero />
        <Feature />
        <Footer />
        <FooterOFFooter />
    </>
}

export default Main;
