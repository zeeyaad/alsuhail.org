import React from "react";

function AppointmentTable() {
    const appointments = [
        { date: 'Apr 25, 2023', time: '9:00 AM', doctor: 'Dr. Smith', reason: 'Check-up' },
        { date: 'Apr 25, 2023', time: '10:30 AM', doctor: 'Dr. Johnson', reason: 'Blood Test' },
        { date: 'Apr 26, 2023', time: '2:00 PM', doctor: 'Dr. Smith', reason: 'Follow-up' },
    ];

    return (
        <div className="bg-white p-4 rounded-xl shadow-sm">
            <h2 className="text-lg font-semibold mb-3">Upcoming Appointments</h2>
            <table className="w-full text-sm">
                <thead>
                    <tr className="text-left text-gray-500 border-b">
                        <th>Date</th>
                        <th>Time</th>
                        <th>Doctor</th>
                        <th>Reason</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map((item, idx) => (
                        <tr key={idx} className="border-b last:border-0">
                            <td>{item.date}</td>
                            <td>{item.time}</td>
                            <td>{item.doctor}</td>
                            <td>{item.reason}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="text-right mt-2">
                <a href="##" className="text-blue-600 text-sm">View All Appointments →</a>
            </div>
        </div>
    );
}


export default AppointmentTable;