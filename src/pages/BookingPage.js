import React from 'react';
import BookingForm from '../components/BookingForm';

const BookingPage = ({ availableTimes, dispatch, submitForm }) => {
    return (
        <section className="booking-page">
            <div className="booking-header">
                <h1>Book a Table</h1>
                <p>Reserve your spot at Little Lemon and experience traditional Mediterranean flavors.</p>
            </div>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
        </section>
    );
};

export default BookingPage;
