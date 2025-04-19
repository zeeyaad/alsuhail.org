import { useState } from "react";
import {
    House,
    Calendar3,
    People,
    FileText,
    Envelope,
    BarChart,
    Gear
} from "react-bootstrap-icons";
import Header2 from "./header2";

const navItems = [
    { label: "Dashboard", icon: <House /> },
    { label: "Appointments", icon: <Calendar3 /> },
    { label: "Patients", icon: <People /> },
    { label: "Prescriptions", icon: <FileText /> },
    { label: "Messages", icon: <Envelope /> },
    { label: "Reports", icon: <BarChart /> },
    { label: "Settings", icon: <Gear /> },
];

export default function Sidebar() {
    const [active, setActive] = useState("Dashboard");

    return (


<>
<Header2/>



        
        <div className="d-flex flex-column bg-white border-end vh-100 p-3" style={{ width: "250px" }}>
            {/* <h5 className="fw-bold mb-4 ps-1">Clinical Management</h5> */}
            <ul className="nav nav-pills flex-column">
                {navItems.map((item) => (
                    <li className="nav-item" key={item.label}>
                        <button
                            className={`nav-link d-flex align-items-center ${active === item.label ? "active" : "text-dark"
                                }`}
                            onClick={() => setActive(item.label)}
                        >
                            <span className="me-2">{item.icon}</span>
                            {item.label}
                        </button>
                    </li>
                ))}
            </ul>
            </div>
        </>

    );
}
