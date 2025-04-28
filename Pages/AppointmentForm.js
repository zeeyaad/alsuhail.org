import React, { useState } from "react";
import Header2 from "../Components/header2";

function AppointmentForm() {
    const [doctor, setDoctor] = useState("");
    const [slot, setSlot] = useState("");

    const doctors = ["Dr. Smith", "Dr. Johnson", "Dr. Williams"];
    const slots = [
        "9:00 AM - 9:30 AM",
        "10:00 AM - 10:30 AM",
        "11:00 AM - 11:30 AM"
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle booking logic here
        alert(`Booked with ${doctor} at ${slot}`);
    };

    return (
        <>
            <Header2 />
            <div
                style={{
                    background: "#fff",
                    borderRadius: "16px",
                    maxWidth: 400,
                    margin: "40px auto",
                    padding: "32px 32px 24px 32px",
                    boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
                    fontFamily: "inherit"
                }}
            >
                <h2
                    style={{
                        textAlign: "center",
                        fontSize: "2rem",
                        fontWeight: 700,
                        marginBottom: "2rem"
                    }}
                >
                    Make Appointment
                </h2>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: "1.5rem" }}>
                        <label
                            style={{
                                display: "block",
                                fontWeight: 600,
                                marginBottom: "0.5rem"
                            }}
                        >
                            Select Doctor:
                        </label>
                        <select
                            value={doctor}
                            onChange={(e) => setDoctor(e.target.value)}
                            style={{
                                width: "100%",
                                padding: "0.75rem",
                                borderRadius: "8px",
                                border: "1px solid #d1d5db",
                                fontSize: "1rem",
                                background: "#f9fafb",
                                marginBottom: 0
                            }}
                            required
                        >
                            <option value="">-- Select Doctor --</option>
                            {doctors.map((doc) => (
                                <option key={doc} value={doc}>
                                    {doc}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div style={{ marginBottom: "2rem" }}>
                        <label
                            style={{
                                display: "block",
                                fontWeight: 600,
                                marginBottom: "0.5rem"
                            }}
                        >
                            Select Time Slot:
                        </label>
                        <select
                            value={slot}
                            onChange={(e) => setSlot(e.target.value)}
                            style={{
                                width: "100%",
                                padding: "0.75rem",
                                borderRadius: "8px",
                                border: "1px solid #d1d5db",
                                fontSize: "1rem",
                                background: "#f9fafb"
                            }}
                            required
                        >
                            <option value="">-- Select Time Slot --</option>
                            {slots.map((s) => (
                                <option key={s} value={s}>
                                    {s}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button
                        type="submit"
                        style={{
                            width: "100%",
                            background: "#2563eb",
                            color: "#fff",
                            fontWeight: 600,
                            fontSize: "1.25rem",
                            border: "none",
                            borderRadius: "8px",
                            padding: "0.75rem 0",
                            cursor: "pointer",
                            transition: "background 0.2s"
                        }}
                    >
                        Book Appointment
                    </button>
                </form>
            </div>
        </>
    );
}

export default AppointmentForm; 