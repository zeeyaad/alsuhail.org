import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import InputField from "./InputField";
import axios from 'axios';

function Form(props) {
    const [isMouseOver, setMouseOver] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (props.Register && formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            const endpoint = props.Register ? '/api/auth/register' : '/api/auth/login';
            const response = await axios.post(`http://localhost:5000${endpoint}`, formData);

            // Store token in localStorage
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));

            // Redirect to dashboard or home page
            navigate('/dashboard');
        } catch (error) {
            setError(error.response?.data?.message || 'An error occurred');
        }
    };

    return (
        <>
            <div class="layer-stretch">
                <div class="layer-wrapper">
                    <form class="form-container" onSubmit={handleSubmit}>
                        {error && <div className="alert alert-danger">{error}</div>}
                        <input type="hidden" name="_token" value="1734020bd20093e5b7d014fbb3b2b7f8ebbf6b6cd466465ce50c515eb7bf84cbbf507a82e1d4ef6a8e78e7c0473bd52f492c19d6184feb6bc682cd536f872dcf" />
                        {
                            props.Register ? <>
                                <InputField
                                    Type="text"
                                    Name="firstName"
                                    InputId="first-name"
                                    Label="First Name"
                                    InputPlaceholder=""
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                                <InputField
                                    Type="text"
                                    Name="lastName"
                                    InputId="last-name"
                                    Label="Last Name"
                                    InputPlaceholder=""
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </> : null
                        }
                        <InputField
                            Type="email"
                            Name="email"
                            InputId="login-email"
                            Label="Email Address"
                            InputPlaceholder="example@gmail.com"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {
                            props.Register ? <InputField
                                Type="text"
                                Name="mobile"
                                InputId="register-mobile"
                                Label="Mobile Number"
                                InputPlaceholder=""
                                value={formData.mobile}
                                onChange={handleChange}
                            />
                                : null
                        }
                        <div className="password-wrapper" style={{ position: "relative" }}>
                            <InputField
                                Type="password"
                                Name="password"
                                InputId="login-password"
                                LabelFor="login-password"
                                Label="Password"
                                InputPlaceholder="******"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            {
                                props.Register ? <InputField
                                    Type="password"
                                    Name="confirmPassword"
                                    InputId="confirm-password"
                                    LabelFor="confirm-password"
                                    Label="Confirm Password"
                                    InputPlaceholder=""
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                /> : null
                            }
                            {
                                props.Register ? null : <a
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
                            }
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
                                type="submit"
                                name="login"
                                id="login-submit"
                                className="btn btn-primary"
                            >
                                {props.Register ? "Create Account" : "Login"}
                            </button>
                        </div>
                        <div class="login-link text-center">
                            <span class="paragraph-small">{props.Register ? "Already have an account?" : "Don't have an account?"}</span>
                            <Link to={props.Register ? "/Login" : "/Register"}>{props.Register ? "Login" : "Register as New User"}</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Form;