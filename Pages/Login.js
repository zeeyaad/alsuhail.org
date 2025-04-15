import React from "react";
import Form from "../Components/Form";
import Header from "../Components/header";
import Footer from "../Components/Footer";

function Login() {
    const Data = [
        { Day: "SUN", Time: "10 AM - 5 PM" },
        { Day: "MON", Time: "10 AM - 5 PM" },
        { Day: "TUE", Time: "10 AM - 5 PM" },
        { Day: "WED", Time: "10 AM - 5 PM" },
        { Day: "THU", Time: "10 AM - 5 PM" },
        { Day: "FRI", Time: "10 AM - 5 PM" },
        { Day: "SAT", Time: "HOLIDAY" },
    ];

    const wrapperStyle = {
        backgroundColor: "#f2f2f2",
        padding: "50px 20px",
        textAlign: "center",
        borderRadius: "10px",
    };

    const titleStyle = {
        fontSize: "22px",
        color: "#00bcd4",
        borderBottom: "2px solid #00bcd4",
        display: "inline-block",
        paddingBottom: "5px",
        marginBottom: "30px",
    };

    const blockStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
        margin: "10px auto",
        padding: "15px 25px",
        borderRadius: "5px",
        maxWidth: "700px",
        borderBottom: "1px dashed #ccc",
    };

    const textStyle = {
        display: "flex",
        alignItems: "center",
        margin: 0,
        fontSize: "16px",
        color: "#333",
        flex: 1,
    };

    const iconStyle = {
        marginRight: "10px",
        color: "#888",
    };

    const buttonStyle = {
        backgroundColor: "#00bcd4",
        color: "#fff",
        border: "none",
        padding: "8px 15px",
        borderRadius: "3px",
        fontSize: "12px",
        whiteSpace: "nowrap",
        cursor: "pointer",
    };

    return (
        <>
            <Header />
            <Form />

            {/* Time Table */}
            <div id="tt" className="animated-wrapper" style={{ opacity: 1 }}>
                <div className="layer-stretch">
                    <div style={wrapperStyle}>
                        <div className="layer-ttl">
                            <h3 className="animated animated-down fadeInDown" style={titleStyle}>Time Table</h3>
                        </div>
                        <div className="layer-container">
                            {Data.map(({ Day, Time }, index) => (
                                <div className="tt-block animated animated-up fadeInUp" key={index} style={blockStyle}>
                                    <p style={textStyle}>
                                        <i className="fas fa-calendar-plus" style={iconStyle}></i>
                                        <span>{Day}</span>
                                    </p>
                                    <p style={textStyle}>
                                        <i className="fas fa-hourglass-half" style={iconStyle}></i>
                                        <span>{Time}</span>
                                    </p>
                                    <p>
                                        <a href="###login" style={buttonStyle}>
                                            Make An Appointment
                                        </a>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* Time Table */}

            {/* Emergency */}
            <div id="emergency">
                <div className="layer-stretch">
                    <div className="layer-wrapper animated-wrapper" style={{ opacity: "1" }}>
                        <div className="layer-ttl">
                            <h3 className="animated animated-down fadeInDown">On Emergency</h3>
                        </div>
                        <div className="layer-container">
                            <div className="paragraph-medium paragraph-black animated animated-up fadeInUp">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique suntasdadsada</div>
                            <div className="emergency-number">Call : 1800000001</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Emergency */}

            {/* Footer */}
            <Footer />
            {/* Footer */}

        </>
    );
}

export default Login;
