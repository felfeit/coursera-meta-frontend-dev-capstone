import React from 'react';
import greekSalad from '../assets/images/greek_salad.jpg';
import bruschetta from '../assets/images/bruschetta.jpg';
import lemonDessert from '../assets/images/lemon_dessert.jpg';

const Specials = () => {
    return (
        <section className="specials">
            <div className="specials-header">
                <h2>This weeks specials!</h2>
                <button className="menu-btn" aria-label="On Click">Online Menu</button>
            </div>
            <div className="specials-grid">
                <div className="special-card">
                    <img src={greekSalad} alt="Greek Salad" />
                    <div className="card-info">
                        <div className="card-title">
                            <h3>Greek salad</h3>
                            <span className="price">$12.99</span>
                        </div>
                        <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                        <a href="/" className="order-link">Order a delivery 🛵</a>
                    </div>
                </div>
                <div className="special-card">
                    <img src={bruschetta} alt="Bruchetta" />
                    <div className="card-info">
                        <div className="card-title">
                            <h3>Bruchetta</h3>
                            <span className="price">$5.99</span>
                        </div>
                        <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                        <a href="/" className="order-link">Order a delivery 🛵</a>
                    </div>
                </div>
                <div className="special-card">
                    <img src={lemonDessert} alt="Lemon Dessert" />
                    <div className="card-info">
                        <div className="card-title">
                            <h3>Lemon Dessert</h3>
                            <span className="price">$5.00</span>
                        </div>
                        <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                        <a href="/" className="order-link">Order a delivery 🛵</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Specials;
