import React from 'react';
import BookingForm from './BookingForm';

const BookingPage = ({ availableTimes, dispatch, submitForm }) => {
    return (
        <section style={{ padding: "40px 20px", textAlign: "center", minHeight: "50vh" }}>
            <h1>Book a Table</h1>
            <p>Please use our reservation form below to book your table.</p>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
        </section>
    );
};

export default BookingPage;
