import React, { useEffect, useRef, useState } from "react";
import Form from "../Components/Form";
import Header from "../Components/header";
import Footer from "../Components/Footer";
import TimeTable from "../Components/TimeTable";
import Emergency from "../Components/Emergency";
import { useNavigate } from "react-router-dom";

// Hook to detect if element is in view
function useInView(options) {
    const ref = useRef();
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsIntersecting(true);
                observer.disconnect();
            }
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [options]);

    return [ref, isIntersecting];
}

function Login({ Register = false }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const timeTableData = [
        { Day: "SUN", Time: "10 AM - 5 PM" },
        { Day: "MON", Time: "10 AM - 5 PM" },
        { Day: "TUE", Time: "10 AM - 5 PM" },
        { Day: "WED", Time: "10 AM - 5 PM" },
        { Day: "THU", Time: "10 AM - 5 PM" },
        { Day: "FRI", Time: "10 AM - 5 PM" },
        { Day: "SAT", Time: "HOLIDAY" },
    ];

    const [ttRef, isTtVisible] = useInView({ threshold: 0.2 });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            if (Register) {
                // Registration: POST to create new user
                const response = await fetch("https://jsonplaceholder.typicode.com/users", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData)
                });
                if (!response.ok) throw new Error("Registration failed");
                alert("User registered successfully!");
                setFormData({ email: "", password: "" });
            } else {
                // Login: GET and check user
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if (!response.ok) throw new Error("Failed to fetch users");
                const users = await response.json();
                const user = users.find(
                    user => user.email.toLowerCase() === formData.email.toLowerCase()
                );
                if (user) {
                    alert("Login successful!");
                    navigate("/dashboard");
                } else {
                    throw new Error("Invalid email or password");
                }
            }
        } catch (error) {
            alert(Register ? "Registration failed!" : "Login failed!");
            setError(error.message || "An error occurred");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Header />
            <Form
                formData={formData}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                error={error}
                loading={loading}
                Register={Register}
            />

            {/* Time Table */}
            <TimeTable data={timeTableData} isVisible={isTtVisible} refProp={ttRef} />
            {/* Time Table */}

            {/* Emergency */}
            <Emergency />
            {/* Emergency */}

            {/* Footer */}
            <Footer />
            {/* Footer */}
        </>
    );
}

export default Login;
