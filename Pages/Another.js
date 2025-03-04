import React from "react";
import Navbar from "../Components/Navbar";
import Carousel from "../Components/Carousel";
import FooterOFFooter from "../Components/FooterOf Footer";
import Footer from "../Components/Footer";

function Another(props) {
    var Contents = props.Content
    return (
        <>
            <Navbar Home={"الرئيسية"} Mentinance={"خدمات الصيانة"} Cleaning={"خدمات التنظيف"} Contractors={"خدمات المقاولات"} />
            <Carousel Photo={props.Image} />
            <ul className="list-unstyled fs-5 mb-4 text-end" dir="rtl">
                {Contents.map((item, index) => (
                    <li key={index} className="mb-3 d-flex align-items-center">
                        <span className="ms-2">•</span>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
            <Footer />
            <FooterOFFooter/>
        </>
    );
}

export default Another;