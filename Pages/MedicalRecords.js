import React, { useState, useEffect } from 'react';
import { recordsAPI } from '../services/api';
import '../styles/MedicalRecords.css';

const MedicalRecords = () => {
    const [records, setRecords] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [newRecord, setNewRecord] = useState({
        title: '',
        description: '',
        file: null
    });

    useEffect(() => {
        fetchRecords();
    }, []);

    const fetchRecords = async () => {
        try {
            setLoading(true);
            const response = await recordsAPI.getRecords();
            setRecords(response.data);
            setError(null);
        } catch (err) {
            setError('Failed to fetch records. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const handleFileChange = (e) => {
        setNewRecord({
            ...newRecord,
            file: e.target.files[0]
        });
    };

    const handleInputChange = (e) => {
        setNewRecord({
            ...newRecord,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('title', newRecord.title);
            formData.append('description', newRecord.description);
            formData.append('file', newRecord.file);
            formData.append('fileType', newRecord.file.type);

            await recordsAPI.uploadRecord(formData);
            setNewRecord({
                title: '',
                description: '',
                file: null
            });
            fetchRecords();
        } catch (err) {
            setError('Failed to upload record. Please try again.');
        }
    };

    if (loading) {
        return <div className="loading">Loading records...</div>;
    }

    return (
        <div className="medical-records">
            <h1>Medical Records</h1>

            {error && <div className="error-message">{error}</div>}

            <div className="upload-section">
                <h2>Upload New Record</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Title:</label>
                        <input
                            type="text"
                            name="title"
                            value={newRecord.title}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Description:</label>
                        <textarea
                            name="description"
                            value={newRecord.description}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>File:</label>
                        <input
                            type="file"
                            onChange={handleFileChange}
                            required
                        />
                    </div>

                    <button type="submit" className="upload-button">
                        Upload Record
                    </button>
                </form>
            </div>

            <div className="records-list">
                <h2>Your Records</h2>
                {records.length === 0 ? (
                    <p>No records found.</p>
                ) : (
                    <div className="records-grid">
                        {records.map((record) => (
                            <div key={record._id} className="record-card">
                                <h3>{record.title}</h3>
                                <p>{record.description}</p>
                                <div className="record-meta">
                                    <span>Date: {new Date(record.date).toLocaleDateString()}</span>
                                    <span>Type: {record.fileType}</span>
                                </div>
                                <a
                                    href={record.fileUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="view-button"
                                >
                                    View Record
                                </a>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MedicalRecords; 