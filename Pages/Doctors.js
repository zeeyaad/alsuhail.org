import React from 'react';
import Header from '../Components/header';

const doctorsData = [
    {
        image: 'https://randomuser.me/api/portraits/men/32.jpg',
        name: 'Daniel Barnes',
        specialty: 'Ortho',
        role: 'CEO',
        degree: 'MBBS, MD, MCH',
        awards: 23,
        experience: 26,
        socials: ['facebook', 'twitter', 'google', 'instagram'],
    },
    {
        image: 'https://randomuser.me/api/portraits/women/44.jpg',
        name: 'Melissa Bates',
        specialty: 'Gyno',
        role: 'COO',
        degree: 'MBBS, MS, MA',
        awards: 18,
        experience: 20,
        socials: ['facebook', 'twitter', 'google', 'instagram'],
    },
    {
        image: 'https://randomuser.me/api/portraits/women/65.jpg',
        name: 'Cheri Aria',
        specialty: 'Skin',
        role: 'Senior Resident',
        degree: 'MBBS, MD',
        awards: 20,
        experience: 16,
        socials: ['facebook', 'twitter', 'google', 'instagram'],
    },
];

const socialIcons = {
    facebook: '🌐',
    twitter: '🐦',
    google: '🔍',
    instagram: '📸',
};

const styles = {
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '2rem',
        maxWidth: '1200px',
        margin: '2rem auto',
    },
    card: {
        background: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid #e0e0e0',
        minHeight: '420px',
    },
    image: {
        width: '100%',
        height: '180px',
        objectFit: 'cover',
    },
    nameBar: {
        background: '#19b6c9',
        color: '#fff',
        width: '100%',
        textAlign: 'center',
        fontWeight: 600,
        fontSize: '1.15rem',
        padding: '0.7rem 0',
        letterSpacing: '0.5px',
    },
    specialty: {
        color: '#12707a',
        fontWeight: 500,
        fontSize: '1.1rem',
        margin: '1rem 0 0.5rem 0',
        textAlign: 'center',
    },
    infoRow: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
        margin: '0.5rem 0',
    },
    infoCol: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: '0.98rem',
        color: '#444',
    },
    icon: {
        fontSize: '1.2rem',
        marginBottom: '0.2rem',
    },
    awardsExpRow: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
        margin: '0.5rem 0',
    },
    awardsExpCol: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: '0.98rem',
        color: '#444',
    },
    socialRow: {
        display: 'flex',
        justifyContent: 'center',
        gap: '1.2rem',
        margin: '1rem 0 1.2rem 0',
    },
    socialIcon: {
        fontSize: '1.3rem',
        color: '#19b6c9',
        cursor: 'pointer',
        transition: 'color 0.2s',
    },
};

const Doctors = () => {
    return (
        <div style={{ background: '#f6fafd', minHeight: '100vh' }}>
            <Header />
            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '3rem 1rem 2rem 1rem' }}>
                <h1 style={{ textAlign: 'center', color: '#12707a', fontSize: '2.5rem', marginBottom: '1.5rem' }}>Our Doctors</h1>
                <p style={{ fontSize: '1.2rem', color: '#444', lineHeight: 1.7, textAlign: 'center' }}>
                    Meet our team of experienced and dedicated doctors. <br /><br />
                    You can list doctor profiles, specialties, and more here.
                </p>
            </div>
            {/* Doctors Grid */}
            <div style={styles.grid}>
                {doctorsData.map((doc, idx) => (
                    <div style={styles.card} key={idx}>
                        <img src={doc.image} alt={doc.name} style={styles.image} />
                        <div style={styles.nameBar}>{doc.name}</div>
                        <div style={styles.specialty}>{doc.specialty}</div>
                        <div style={styles.infoRow}>
                            <div style={styles.infoCol}><span style={styles.icon}>🛡️</span>{doc.role}</div>
                            <div style={styles.infoCol}><span style={styles.icon}>🎓</span>{doc.degree}</div>
                        </div>
                        <div style={styles.awardsExpRow}>
                            <div style={styles.awardsExpCol}><span style={styles.icon}>🏆</span>Awards: {doc.awards}</div>
                            <div style={styles.awardsExpCol}><span style={styles.icon}>⚙️</span>Experience: {doc.experience} Year</div>
                        </div>
                        <div style={styles.socialRow}>
                            {doc.socials.map((soc, i) => (
                                <span key={i} style={styles.socialIcon}>{socialIcons[soc]}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Doctors; 