import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";


function Navbar(props) {
    
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" dir="rtl" style={{paddingBottom:"0px"}}>
                <div className="container-fluid">
                    <Link
                        className="navbar-brand"
                        to="/"
                        style={{
                            width: "7rem",
                            paddingBottom: "0px"
                        }}
                    >
                        

                    </Link>

                    <Button
                        Class="navbar-toggler"
                        Type="button"
                        Data_Bs_Toggle="collapse"
                        Data_Bs_Target="#navbarText"
                        Aria_Controls="navbarText"
                        Aria_Expanded="false"
                        Aria_Label="Toggle navigation"
                        Name={<span className="navbar-toggler-icon"></span>}
                        HoverColor="black"
                        NormalColor="white"
                    />

                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">
                                    {props.Home}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Mentinance">
                                    {props.Mentinance}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Cleaning">
                                    {props.Cleaning}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Contractors">
                                    {props.Contractors}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
