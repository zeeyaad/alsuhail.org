import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Appointments() {
  const [showAll, setShowAll] = useState(false);

  const appointments = [
    { date: 'Apr 25, 2023', time: '9:00 AM', doctor: 'Dr. Smith', reason: 'Check-up' },
    { date: 'Apr 25, 2023', time: '10:30 AM', doctor: 'Dr. Johnson', reason: 'Blood Test' },
    { date: 'Apr 26, 2023', time: '2:00 PM', doctor: 'Dr. Smith', reason: 'Follow-up' },
    { date: 'Apr 26, 2023', time: '2:00 PM', doctor: 'Dr. Smith', reason: 'Follow-up' },
    { date: 'Apr 26, 2023', time: '2:00 PM', doctor: 'Dr. Smith', reason: 'Follow-up' },
    { date: 'Apr 26, 2023', time: '2:00 PM', doctor: 'Dr. Smith', reason: 'Follow-up' },
  ];

  const displayedAppointments = showAll ? appointments : appointments.slice(0, 3);

  return (
    <div className="appointments-container">
      <h1 className="appointments-title">Appointments</h1>
      <p className="appointments-subtitle">View and manage your upcoming visits.</p>

      <div className="appointments-card">
        <h2 className="appointments-card-title">Upcoming Appointments</h2>
        <table className="appointments-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Doctor</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody>
            {displayedAppointments.map((item, idx) => (
              <tr key={idx}>
                <td>{item.date}</td>
                <td>{item.time}</td>
                <td>{item.doctor}</td>
                <td>{item.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="appointments-link">
          <button
            className="view-all-button"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Show Less' : 'View All Appointments →'}
          </button>
        </div>
      </div>

      <div className="appointments-button-wrapper">
        <Link to="/Schedule Appointment">
        <button className="appointments-button">Schedule New Appointment</button>
        </Link>
      </div>

      {/* Embedded CSS */}
      <style>{`
        .appointments-container {
          padding: 24px;
          font-family: Arial, sans-serif;
        }

        .appointments-title {
          font-size: 28px;
          font-weight: bold;
          color: #1f2937;
          margin-bottom: 4px;
        }

        .appointments-subtitle {
          color: #6b7280;
          margin-bottom: 20px;
        }

        .appointments-card {
          background-color: white;
          border-radius: 12px;
          box-shadow: 0 1px 4px rgba(0,0,0,0.1);
          overflow: hidden;
        }

        .appointments-card-title {
          font-size: 18px;
          font-weight: 600;
          padding: 12px 16px;
          border-bottom: 1px solid #e5e7eb;
        }

        .appointments-table {
          width: 100%;
          font-size: 14px;
          border-collapse: collapse;
        }

        .appointments-table th,
        .appointments-table td {
          padding: 12px 16px;
          border-top: 1px solid #f3f4f6;
          text-align: left;
        }

        .appointments-table thead {
          background-color: #f9fafb;
          color: #6b7280;
        }

        .appointments-link {
          text-align: right;
          padding: 8px 16px;
          font-size: 13px;
        }

        .view-all-button {
          background: none;
          border: none;
          color: #2563eb;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          padding: 4px 8px;
          border-radius: 4px;
          transition: all 0.2s ease;
        }

        .view-all-button:hover {
          background-color: #f3f4f6;
          text-decoration: underline;
        }

        .appointments-button-wrapper {
          text-align: center;
          margin-top: 24px;
        }

        .appointments-button {
          background-color: #2563eb;
          color: white;
          padding: 12px 24px;
          font-size: 14px;
          font-weight: bold;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .appointments-button:hover {
          background-color: #1e40af;
        }
      `}</style>
    </div>
  );
}
