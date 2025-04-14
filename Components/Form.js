import React, { useState } from "react";
import InputField from "./InputField";

function Form() {
    const [isMouseOver, setMouseOver] = useState(false);
    return (
        <>
            <div class="layer-stretch">
                <div class="layer-wrapper">
                    <form class="form-container">
                        <input type="hidden" name="_token" value="1734020bd20093e5b7d014fbb3b2b7f8ebbf6b6cd466465ce50c515eb7bf84cbbf507a82e1d4ef6a8e78e7c0473bd52f492c19d6184feb6bc682cd536f872dcf" />
                        <InputField
                            Type="email"
                            Name="email"
                            InputId="login-email"
                            Label="Email Address"
                            InputPlaceholder="example@gmail.com"
                        />

                        <div className="password-wrapper" style={{ position: "relative" }}>
                            <InputField
                                Type="password"
                                Name="password"
                                InputId="login-password"
                                LabelFor="login-password"
                                Label="Password"
                                InputPlaceholder="******"
                            />
                            <a
                                href="###"
                                className="forgot-pass"
                                style={{
                                    position: "absolute",
                                    bottom: "-1.5rem",
                                    right: "10px",
                                    fontSize: "12px",
                                    color: "#32C1CE",
                                    textDecoration: "none",
                                }}
                            >
                                Forgot Password?
                            </a>
                        </div>



                        <div class="form-submit text-center">
                            <button
                                onMouseOver={() => setMouseOver(true)}
                                onMouseOut={() => setMouseOver(false)}
                                style={{
                                    backgroundColor: isMouseOver ? "#0069d9" : "#32C1CE",
                                    borderColor: isMouseOver ? "#0069d9" : "#32C1CE",
                                    color: "#fff",
                                    padding: "10px 20px",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                    fontSize: "16px",
                                    border: "none",
                                }}
                                name="login"
                                id="login-submit"
                                className="btn btn-primary"
                            >
                                Login
                            </button>
                        </div>
                        <div class="login-link text-center">
                            <span class="paragraph-small">Don't have an account?</span>
                            <a href="###">Register as New User</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
export default Form