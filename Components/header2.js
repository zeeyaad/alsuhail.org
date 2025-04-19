import React from "react";

function Header2() {
    const styles = {
        wrapper: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px 24px',
            backgroundColor: '#ffffff',
            borderBottom: '1px solid #e5e7eb',
        },
        leftHeader: {
            backgroundColor: '#EEEEEE', // Background for left part (above sidebar)
            padding: '12px 16px',
            borderRadius: '8px',
        },
        title: {
            fontSize: '20px',
            fontWeight: '600',
            color: '#111827',
            margin: 0,
        },
        actions: {
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
        },
        notificationBtn: {
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
        },
        icon: {
            fontSize: '25px',
            color: '#000',
        },
        avatar: {
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            objectFit: 'cover',
        },
    };

    return (
        <>
            <header style={styles.wrapper}>
                <div style={styles.leftHeader}>
                    <h1 style={styles.title}>Clinical Management</h1>
                </div>

                <div style={styles.actions}>
                    <button style={styles.notificationBtn}>
                        <i style={styles.icon} className="fa-regular fa-bell"></i>
                    </button>
                    <img
                        src={"./Assets/Images/Doctor.png"}
                        alt="User Avatar"
                        style={styles.avatar}
                    />
                </div>
            </header>
        </>
    );
}

export default Header2;
