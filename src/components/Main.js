import React, { useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';

/**
 * Fetches the available times for today's date upon initial load.
 * Falls back to an empty array if the API is unavailable.
 */
export const initializeTimes = () => {
    const today = new Date();
    return window.fetchAPI ? window.fetchAPI(today) : [];
};

/**
 * Reducer function to update the available times state based on the selected date.
 */
export const updateTimes = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            const date = new Date(action.date);
            return window.fetchAPI ? window.fetchAPI(date) : [];
        default:
            return state;
    }
};

/**
 * Main Controller Component
 * Manages routing, state configuration for bookings, and global navigation logic.
 */
const Main = () => {
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
    const navigate = useNavigate();

    /**
     * Submits the reservation data to the external API.
     * Navigates to the confirmation page on success.
     */
    const submitForm = (formData) => {
        if (window.submitAPI && window.submitAPI(formData)) {
            navigate('/confirmed');
        }
    };

    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />} />
                <Route path="/about" element={<h1>About</h1>} />
                <Route path="/menu" element={<h1>Menu</h1>} />
                <Route path="/reservations" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />} />
                <Route path="/confirmed" element={<ConfirmedBooking />} />
                <Route path="/order" element={<h1>Order Online</h1>} />
                <Route path="/login" element={<h1>Login</h1>} />
            </Routes>
        </main>
    );
};

export default Main;

