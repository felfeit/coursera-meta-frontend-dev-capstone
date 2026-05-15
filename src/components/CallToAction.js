import React from 'react';
import heroImage from '../assets/images/restaurant_food.jpg';

const CallToAction = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button className="reserve-btn" aria-label="On Click">Reserve a Table</button>
            </div>
            <div className="hero-image">
                <img src={heroImage} alt="Little Lemon Restaurant Food" />
            </div>
        </section>
    );
};

export default CallToAction;
