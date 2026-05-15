import React from 'react';

const ConfirmedBooking = () => {
    return (
        <section style={{ padding: "100px 20px", textAlign: "center", minHeight: "50vh" }}>
            <h1 style={{ color: "var(--primary-green)", marginBottom: "20px" }}>Booking Confirmed!</h1>
            <p style={{ fontSize: "1.2rem" }}>Your table reservation has been successfully confirmed. We look forward to seeing you at Little Lemon!</p>
        </section>
    );
};

export default ConfirmedBooking;
