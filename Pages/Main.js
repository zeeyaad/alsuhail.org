import React from "react";
import Navbar from "../Components/Navbar";
import NavbarFooter from "../Components/NavbarFooter";



// import { TbBackground } from "react-icons/tb";

function Main() {
    // const BgPath = "../Assets/image.png";
    return <>
        <header style={{
            margin: 0,
            padding: 0,
            fontFamily: 'sans-serif',
            background: 'url("./Assets/Images/image.png") no-repeat center center/cover'
        }}>
            <Navbar />
            <NavbarFooter style={{
                backgroundColor: "rgba(0, 51, 64, 0.85)",/* Dark teal with 85% opacity */
                padding: "15px 30px",
                position: "fixed",
                top: "0",
                width: "100%",
                zIndex: "1000",
            }} />
        </header>
    </>
}

export default Main;
