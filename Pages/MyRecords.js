import React from 'react';
import Header2 from '../Components/header2';

function MyRecords() {
    // Medical History data
    const medicalHistory = [
        { condition: 'Hypertension', date: 'Jan 12, 2021', status: 'Ongoing', notes: 'Requires regular check-ups' },
        { condition: 'Asthma', date: 'Aug 8, 2019', status: 'Managed', notes: 'Mild, inhaler prescribed' },
        { condition: 'Allergies', date: 'May 4, 2015', status: 'Active', notes: 'Pollen, Dust' },
    ];

    // Lab Results data
    const labResults = [
        { name: 'Blood Glucose', date: 'Apr 18, 2023', result: '90 mg/dL', status: 'Normal' },
        { name: 'CBC', date: 'Mar 29, 2023', result: 'See Report', status: 'Reviewed' },
        { name: 'Cholesterol Panel', date: 'Feb 10, 2023', result: '', status: '' },
    ];

    // Documents/Files data
    const documents = [
        { name: 'Prescription_Jan2023 pdf', date: 'Jan 5, 2023', type: 'Prescription', link: '#' },
        { name: 'XRay_Report_March.pdf', date: 'Mar 29, 2023', type: 'Imaging', link: '#' },
    ];

    return (
        <div style={{ background: '#f8fafc', minHeight: '100vh', paddingBottom: 40 }}>
            <Header2 />
            <div style={{ maxWidth: 800, margin: '0 auto', padding: '40px 16px 0 16px' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: 8, color: '#111827' }}>My Records</h1>
                <p style={{ color: '#64748b', fontSize: '1.25rem', marginBottom: 32 }}>View and manage your health history</p>

                {/* Medical History Section as Table */}
                <div style={{ marginBottom: 32 }}>
                    <div style={{ borderRadius: 16, background: '#fff', boxShadow: '0 1px 4px rgba(0,0,0,0.06)', border: '1px solid #e5e7eb', padding: 0 }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, padding: '24px 24px 0 24px', margin: 0, color: '#222' }}>Medical History</h2>
                        <div style={{ padding: '0 24px 16px 24px' }}>
                            <table style={{ width: '100%', fontSize: '1rem', borderCollapse: 'collapse', marginBottom: 0 }}>
                                <thead>
                                    <tr style={{ color: '#4b5563', borderBottom: '1px solid #e5e7eb' }}>
                                        <th style={{ textAlign: 'left', padding: '12px 0', fontWeight: 500 }}>Condition</th>
                                        <th style={{ textAlign: 'left', padding: '12px 0', fontWeight: 500 }}>Diagnosed On</th>
                                        <th style={{ textAlign: 'left', padding: '12px 0', fontWeight: 500 }}>Status</th>
                                        <th style={{ textAlign: 'left', padding: '12px 0', fontWeight: 500 }}>Notes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {medicalHistory.map((item, idx) => (
                                        <tr key={idx} style={{ borderBottom: idx === medicalHistory.length - 1 ? 'none' : '1px solid #f1f5f9' }}>
                                            <td style={{ padding: '12px 0', color: '#222' }}>{item.condition}</td>
                                            <td style={{ padding: '12px 0', color: '#4b5563' }}>{item.date}</td>
                                            <td style={{ padding: '12px 0', color: '#4b5563' }}>{item.status}</td>
                                            <td style={{ padding: '12px 0', color: '#4b5563' }}>{item.notes}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div style={{ textAlign: 'left', paddingTop: 12 }}>
                                <a href="#" style={{ color: '#2563eb', fontSize: '1rem', textDecoration: 'none', fontWeight: 500 }}>View Full History</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Lab Results Section */}
                <div style={{ marginBottom: 32 }}>
                    <div style={{ borderRadius: 16, background: '#fff', boxShadow: '0 1px 4px rgba(0,0,0,0.06)', border: '1px solid #e5e7eb', padding: 0 }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, padding: '24px 24px 0 24px', margin: 0, color: '#222' }}>Lab Results</h2>
                        <div style={{ padding: '0 24px 16px 24px' }}>
                            <table style={{ width: '100%', fontSize: '1rem', borderCollapse: 'collapse', marginBottom: 0 }}>
                                <thead>
                                    <tr style={{ color: '#4b5563', borderBottom: '1px solid #e5e7eb' }}>
                                        <th style={{ textAlign: 'left', padding: '12px 0', fontWeight: 500 }}>Test Name</th>
                                        <th style={{ textAlign: 'left', padding: '12px 0', fontWeight: 500 }}>Date</th>
                                        <th style={{ textAlign: 'left', padding: '12px 0', fontWeight: 500 }}>Result</th>
                                        <th style={{ textAlign: 'left', padding: '12px 0', fontWeight: 500 }}>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {labResults.map((item, idx) => (
                                        <tr key={idx} style={{ borderBottom: idx === labResults.length - 1 ? 'none' : '1px solid #f1f5f9' }}>
                                            <td style={{ padding: '12px 0', color: '#222' }}>{item.name}</td>
                                            <td style={{ padding: '12px 0', color: '#4b5563' }}>{item.date}</td>
                                            <td style={{ padding: '12px 0', color: '#4b5563' }}>{item.result}</td>
                                            <td style={{ padding: '12px 0', color: '#4b5563' }}>{item.status}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div style={{ textAlign: 'left', paddingTop: 12 }}>
                                <a href="#" style={{ color: '#2563eb', fontSize: '1rem', textDecoration: 'none', fontWeight: 500 }}>View All Lab Reports</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Documents / Files Section */}
                <div style={{ marginBottom: 32 }}>
                    <div style={{ borderRadius: 16, background: '#fff', boxShadow: '0 1px 4px rgba(0,0,0,0.06)', border: '1px solid #e5e7eb', padding: 0 }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, padding: '24px 24px 0 24px', margin: 0, color: '#222' }}>Documents / Files</h2>
                        <div style={{ padding: '0 24px 16px 24px' }}>
                            <table style={{ width: '100%', fontSize: '1rem', borderCollapse: 'collapse', marginBottom: 0 }}>
                                <thead>
                                    <tr style={{ color: '#4b5563', borderBottom: '1px solid #e5e7eb' }}>
                                        <th style={{ textAlign: 'left', padding: '12px 0', fontWeight: 500 }}>File Name</th>
                                        <th style={{ textAlign: 'left', padding: '12px 0', fontWeight: 500 }}>Uploaded On</th>
                                        <th style={{ textAlign: 'left', padding: '12px 0', fontWeight: 500 }}>Type</th>
                                        <th style={{ textAlign: 'left', padding: '12px 0', fontWeight: 500 }}>Download</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {documents.map((doc, idx) => (
                                        <tr key={idx} style={{ borderBottom: idx === documents.length - 1 ? 'none' : '1px solid #f1f5f9' }}>
                                            <td style={{ padding: '12px 0', color: '#222' }}>{doc.name}</td>
                                            <td style={{ padding: '12px 0', color: '#4b5563' }}>{doc.date}</td>
                                            <td style={{ padding: '12px 0', color: '#4b5563' }}>{doc.type}</td>
                                            <td style={{ padding: '12px 0' }}>
                                                <a href={doc.link} style={{ color: '#2563eb', fontSize: '1.25rem', textDecoration: 'none' }} title="Download" download>
                                                    &#8595;
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyRecords; 