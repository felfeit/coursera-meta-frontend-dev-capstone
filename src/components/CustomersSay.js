import React from 'react';

const CustomersSay = () => {
    return (
        <section className="customers-say" style={{ padding: "40px 20px", textAlign: "center", backgroundColor: "var(--highlight-light)" }}>
            <h2>Testimonials</h2>
            <div className="testimonials-grid" style={{ display: "flex", gap: "20px", justifyContent: "center", marginTop: "20px" }}>
                <div className="testimonial-card">
                    <p>⭐⭐⭐⭐⭐</p>
                    <p>"Amazing food!" - John</p>
                </div>
                <div className="testimonial-card">
                    <p>⭐⭐⭐⭐</p>
                    <p>"Great atmosphere." - Sarah</p>
                </div>
            </div>
        </section>
    );
};

export default CustomersSay;
