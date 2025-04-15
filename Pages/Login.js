import React from "react";
import Navbar from "../Components/Navbar";
import NavbarFooter from "../Components/NavbarFooter";
import Form from "../Components/Form";

function Login() {
    return (
        <>
            <Navbar />
            <NavbarFooter />
            <Form />

            {/* Table */}
            <div id="tt" className="animated-wrapper" style={{ opacity: 1 }}>
                <div className="layer-stretch">
                    <div className="layer-wrapper">
                        <div className="layer-ttl">
                            <h3 className="animated animated-down fadeInDown">Time Table</h3>
                        </div>
                        <div className="layer-container">
                            <div className="tt-block animated animated-up fadeInUp">
                                <p><i className="far fa-calendar-plus"></i><span>Sun </span></p>
                                <p><i className="fas fa-hourglass-half"></i><span>Holiday</span></p>
                                <p>
                                    <a href="###login" className="btn btn-primary">Make An Appointment</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Table */}
        </>
    );
}

export default Login;
