import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import { initializeTimes, updateTimes } from './components/Main';

test('Renders the BookingForm heading/label', () => {
    const availableTimes = ["17:00", "18:00"];
    render(<BookingForm availableTimes={availableTimes} dispatch={jest.fn()} submitForm={jest.fn()} />);
    const labelElement = screen.getByText("Choose date");
    expect(labelElement).toBeInTheDocument();
});

test('initializeTimes returns the correct expected value from API', () => {
    const mockTimes = ["17:00", "18:00"];
    window.fetchAPI = jest.fn(() => mockTimes);
    const times = initializeTimes();
    expect(times).toEqual(mockTimes);
});

test('updateTimes returns the state from API', () => {
    const mockTimes = ["19:00", "20:00"];
    window.fetchAPI = jest.fn(() => mockTimes);
    const state = ["17:00", "18:00"];
    const action = { type: 'UPDATE_TIMES', date: '2023-10-10' };
    const newState = updateTimes(state, action);
    expect(newState).toEqual(mockTimes);
});

test('HTML5 validation attributes are applied correctly', () => {
    const availableTimes = ["17:00", "18:00"];
    render(<BookingForm availableTimes={availableTimes} dispatch={jest.fn()} submitForm={jest.fn()} />);
    
    const dateInput = screen.getByLabelText(/Choose date/i);
    expect(dateInput).toHaveAttribute('required');

    const timeSelect = screen.getByLabelText(/Choose time/i);
    expect(timeSelect).toHaveAttribute('required');

    const guestsInput = screen.getByLabelText(/Number of guests/i);
    expect(guestsInput).toHaveAttribute('required');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');

    const occasionSelect = screen.getByLabelText(/Occasion/i);
    expect(occasionSelect).toHaveAttribute('required');
});

test('Submit button is disabled if form is invalid and enabled when valid', () => {
    const availableTimes = ["17:00", "18:00"];
    render(<BookingForm availableTimes={availableTimes} dispatch={jest.fn()} submitForm={jest.fn()} />);

    const submitBtn = screen.getByRole('button', { name: /On Click/i });

    // Initially form is empty so it's invalid
    expect(submitBtn).toBeDisabled();

    // Fill out the form correctly
    const dateInput = screen.getByLabelText(/Choose date/i);
    const timeSelect = screen.getByLabelText(/Choose time/i);
    const guestsInput = screen.getByLabelText(/Number of guests/i);
    const occasionSelect = screen.getByLabelText(/Occasion/i);

    fireEvent.change(dateInput, { target: { value: '2023-10-10' } });
    fireEvent.change(timeSelect, { target: { value: '17:00' } });
    fireEvent.change(guestsInput, { target: { value: '2' } });
    fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });

    // After filling out perfectly, the submit button should be enabled
    expect(submitBtn).not.toBeDisabled();
    
    // Change guest count to an invalid state
    fireEvent.change(guestsInput, { target: { value: '11' } });
    expect(submitBtn).toBeDisabled();
});
