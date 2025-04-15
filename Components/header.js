import React from "react";
import Navbar from "./Navbar";
import NavbarFooter from "./NavbarFooter";

function Header() {
    return (
        <>
            <header
                style={{
                    margin: 0,
                    padding: "40px 0",
                    fontFamily: "sans-serif",
                    backgroundImage: `
    linear-gradient(-90deg, rgba(2, 167, 182, 0.8), rgba(1, 82, 89, 0.8)),
    url("./Assets/Images/LoginHeaderImage.png")`,
                    backgroundAttachment: "fixed",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    position: "relative",
                    width: "100%",
                }}


                className="hdr-transparent hdr-position-absolute"
            >
                <Navbar />
                <NavbarFooter />
                <div className="page-ttl page-padding-header-1" style={{ padding: '60px 0', color: '#fff' }}>
                    <div className="layer-stretch">
                        <div className="page-ttl-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                            <div className="page-ttl-name">
                                <h1 style={{ fontSize: '36px', fontWeight: '600', marginBottom: '10px' }}>Login</h1>
                                <p style={{ fontSize: '16px', color: '#e0e0e0' }}>
                                    <a href="/" style={{ color: '#e0e0e0', textDecoration: 'none' }}>Home</a> &gt;&gt;
                                    <span style={{ marginLeft: '5px' }}>Login</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
