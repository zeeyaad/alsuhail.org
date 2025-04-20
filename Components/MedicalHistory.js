import React, { useState } from "react";

function MedicalHistory() {
    const [showAll, setShowAll] = useState(false);

    const history = [
        { condition: 'Hypertension', date: 'Jan 12, 2021', status: 'Ongoing', notes: 'Requires regular check-ups' },
        { condition: 'Asthma', date: 'Aug 8, 2019', status: 'Managed', notes: 'Mild - inhaler prescribed' },
        { condition: 'Allergies', date: 'May 4, 2015', status: 'Active', notes: 'Pollen, Dust' },
        { condition: 'Allergies', date: 'May 4, 2015', status: 'Active', notes: 'Pollen, Dust' },
        { condition: 'Allergies', date: 'May 4, 2015', status: 'Active', notes: 'Pollen, Dust' },
        { condition: 'Allergies', date: 'May 4, 2015', status: 'Active', notes: 'Pollen, Dust' }
    ];

    const displayedHistory = showAll ? history : history.slice(0, 3);

    const handleViewMore = (e) => {
        e.preventDefault();
        setShowAll(!showAll);
    };

    return (
        <>
            <div style={{
                backgroundColor: 'white',
                padding: '1.5rem',
                borderRadius: '12px',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                border: '1px solid #edf2f7',
                maxWidth: '800px',
                margin: '0 auto',
                width: '90%'
            }}>
                <h2 style={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    marginBottom: '1.25rem',
                    color: '#1a202c'
                }}>Medical History Summary</h2>
                <table style={{
                    width: '100%',
                    fontSize: '0.875rem',
                    borderCollapse: 'collapse'
                }}>
                    <thead>
                        <tr style={{
                            textAlign: 'left',
                            color: '#4a5568',
                            borderBottom: '1px solid #e2e8f0',
                            paddingBottom: '0.75rem'
                        }}>
                            <th style={{ paddingBottom: '0.75rem', fontWeight: 500 }}>Condition</th>
                            <th style={{ paddingBottom: '0.75rem', fontWeight: 500 }}>Diagnosed On</th>
                            <th style={{ paddingBottom: '0.75rem', fontWeight: 500 }}>Status</th>
                            <th style={{ paddingBottom: '0.75rem', fontWeight: 500 }}>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayedHistory.map((item, idx) => (
                            <tr key={idx} style={{
                                borderBottom: idx === displayedHistory.length - 1 ? 'none' : '1px solid #e2e8f0'
                            }}>
                                <td style={{ padding: '0.5rem 0.5rem 0.5rem 0', color: '#2d3748' }}>{item.condition}</td>
                                <td style={{ padding: '0.5rem 0.5rem 0.5rem 0', color: '#4a5568' }}>{item.date}</td>
                                <td style={{ padding: '0.5rem 0.5rem 0.5rem 0', color: '#4a5568' }}>{item.status}</td>
                                <td style={{ padding: '0.5rem 0.5rem 0.5rem 0', color: '#4a5568' }}>{item.notes}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div style={{
                    textAlign: 'right',
                    paddingTop: '1rem',
                    borderTop: '1px solid #e2e8f0'
                }}>
                    <a
                        href="##"
                        onClick={handleViewMore}
                        style={{
                            color: '#2b6cb0',
                            fontSize: '0.875rem',
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            cursor: 'pointer'
                        }}
                    >
                        {showAll ? 'Show Less' : 'View Full History'}
                        <span style={{
                            marginLeft: '0.25rem',
                            transform: showAll ? 'rotate(180deg)' : 'none',
                            transition: 'transform 0.2s ease-in-out'
                        }}>
                            →
                        </span>
                    </a>
                </div>
            </div>
        </>
    );
}
export default MedicalHistory;