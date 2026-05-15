import React, { useState } from 'react';

/**
 * BookingForm Component
 * Handles the state and validation for making a reservation.
 * Enforces client-side validation for dates, times, and guest counts.
 */
const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("");

    // Handles the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = { date, time, guests, occasion };
        submitForm(formData);
    };

    // Dispatches the newly selected date to update the available times
    const handleDateChange = (e) => {
        setDate(e.target.value);
        dispatch({ type: 'UPDATE_TIMES', date: e.target.value });
    };

    // Checks if the entire form is valid before allowing submission
    const isFormValid = () => {
        return date !== "" && time !== "" && guests >= 1 && guests <= 10 && occasion !== "";
    };

    return (
        <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" required value={date} onChange={handleDateChange} />
            </div>
            
            <div className="form-group">
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" required value={time} onChange={(e) => setTime(e.target.value)}>
                    <option value="" disabled>Select a time</option>
                    {availableTimes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                    ))}
                </select>
            </div>
            
            <div className="form-group">
                <label htmlFor="guests">Number of guests</label>
                <input type="number" required placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} />
                {guests < 1 || guests > 10 ? (
                    <p className="error-message">
                        * Guest count must be between 1 and 10.
                    </p>
                ) : null}
            </div>
            
            <div className="form-group">
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" required value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                    <option value="" disabled>Select an occasion</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
            </div>
            
            <input type="submit" className="submit-btn" value="Make Your reservation" disabled={!isFormValid()} aria-label="On Click" />
        </form>
    );
};

export default BookingForm;
