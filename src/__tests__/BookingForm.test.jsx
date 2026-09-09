import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import BookingForm from '../components/BookingForm';

describe('BookingForm Component', () => {
  const mockTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];
  const mockDispatch = vi.fn();
  const mockSubmitForm = vi.fn();

  it('renders the BookingForm static labels and elements correctly', () => {
    render(
      <BookingForm
        availableTimes={mockTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    // Verify static field labels as required by the Meta rubric
    expect(screen.getByText(/Choose date/i)).toBeInTheDocument();
    expect(screen.getByText(/Choose time/i)).toBeInTheDocument();
    expect(screen.getByText(/Number of guests/i)).toBeInTheDocument();
    expect(screen.getByText(/Occasion/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue('Make Your reservation')).toBeInTheDocument();
  });

  it('verifies HTML5 validation attributes on inputs', () => {
    render(
      <BookingForm
        availableTimes={mockTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    const dateInput = screen.getByLabelText(/Choose date/i);
    const timeSelect = screen.getByLabelText(/Choose time/i);
    const guestsInput = screen.getByLabelText(/Number of guests/i);
    const occasionSelect = screen.getByLabelText(/Occasion/i);
    const submitBtn = screen.getByDisplayValue('Make Your reservation');

    // Date attributes
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toHaveAttribute('required');
    expect(dateInput).toHaveAttribute('min');

    // Time select attributes
    expect(timeSelect).toHaveAttribute('required');

    // Guests input attributes
    expect(guestsInput).toHaveAttribute('type', 'number');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
    expect(guestsInput).toHaveAttribute('required');

    // Occasion select attributes
    expect(occasionSelect).toHaveAttribute('required');

    // Submit button
    expect(submitBtn).toHaveAttribute('type', 'submit');
  });

  it('disables submit button and shows error when guests count is invalid (< 1 or > 10)', () => {
    render(
      <BookingForm
        availableTimes={mockTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    const guestsInput = screen.getByLabelText(/Number of guests/i);
    const submitBtn = screen.getByDisplayValue('Make Your reservation');

    // Set invalid guests (> 10)
    fireEvent.change(guestsInput, { target: { value: '15' } });
    fireEvent.blur(guestsInput);

    expect(submitBtn).toBeDisabled();
    expect(screen.getByText(/Please enter between 1 and 10 guests/i)).toBeInTheDocument();

    // Set invalid guests (< 1)
    fireEvent.change(guestsInput, { target: { value: '0' } });
    fireEvent.blur(guestsInput);
    expect(submitBtn).toBeDisabled();

    // Set valid guests
    fireEvent.change(guestsInput, { target: { value: '4' } });
    expect(submitBtn).toBeEnabled();
  });

  it('calls dispatch with UPDATE_TIMES when date is changed', () => {
    render(
      <BookingForm
        availableTimes={mockTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    const dateInput = screen.getByLabelText(/Choose date/i);
    fireEvent.change(dateInput, { target: { value: '2026-10-15' } });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'UPDATE_TIMES',
      payload: '2026-10-15',
    });
  });

  it('submits form with correct data when submit button is clicked', () => {
    render(
      <BookingForm
        availableTimes={mockTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    const submitBtn = screen.getByDisplayValue('Make Your reservation');
    fireEvent.click(submitBtn);

    expect(mockSubmitForm).toHaveBeenCalledTimes(1);
    expect(mockSubmitForm).toHaveBeenCalledWith(
      expect.objectContaining({
        guests: 1,
        occasion: 'Birthday',
      })
    );
  });
});
