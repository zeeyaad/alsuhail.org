import React from "react";
import Navbar from "./Navbar";
import NavbarFooter from "./NavbarFooter";

function Header() { 
    return (
        <>
            <header
                style={{
                    margin: 0,
                    padding: 0,
                    fontFamily: 'sans-serif',
                    background: 'url("./Assets/Images/image.png") no-repeat center center/cover'
                }}
                className="hdr-transparent hdr-position-absolute">
                        <Navbar />
                        <NavbarFooter/>
            </header>
        </>
    );
}
export default Header;