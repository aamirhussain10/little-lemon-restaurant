import React, { useState, useEffect } from 'react';

const BookingForm = ({ availableTimes = [], dispatch, submitForm }) => {
  // Today's date formatted as YYYY-MM-DD
  const getTodayString = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const [date, setDate] = useState(getTodayString());
  const [time, setTime] = useState(availableTimes[0] || '17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  // Form field touched states for validation feedback
  const [touched, setTouched] = useState({
    date: false,
    time: false,
    guests: false,
    occasion: false,
  });

  // Automatically update selected time when availableTimes change
  useEffect(() => {
    if (availableTimes && availableTimes.length > 0) {
      if (!availableTimes.includes(time)) {
        setTime(availableTimes[0]);
      }
    }
  }, [availableTimes, time]);

  // Validation rules
  const isDateValid = Boolean(date && date >= getTodayString());
  const isTimeValid = Boolean(time && availableTimes.includes(time));
  const isGuestsValid = Boolean(guests >= 1 && guests <= 10);
  const isOccasionValid = Boolean(occasion);
  const isFormValid = isDateValid && isTimeValid && isGuestsValid && isOccasionValid;

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    setTouched((prev) => ({ ...prev, date: true }));
    if (dispatch) {
      dispatch({ type: 'UPDATE_TIMES', payload: newDate });
    }
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    const formData = {
      date,
      time,
      guests: Number(guests),
      occasion,
    };

    submitForm(formData);
  };

  return (
    <form
      className="booking-form"
      onSubmit={handleSubmit}
      noValidate
      aria-label="Table reservation form"
    >
      {/* Date Field */}
      <div className="form-group">
        <label htmlFor="res-date" className="form-label">
          Choose date <span className="required-star">*</span>
        </label>
        <input
          type="date"
          id="res-date"
          name="res-date"
          value={date}
          min={getTodayString()}
          onChange={handleDateChange}
          onBlur={() => handleBlur('date')}
          required
          aria-required="true"
          aria-invalid={touched.date && !isDateValid}
          aria-describedby={touched.date && !isDateValid ? 'date-error' : undefined}
          className={`form-input ${touched.date && !isDateValid ? 'input-error' : ''}`}
        />
        {touched.date && !isDateValid && (
          <span id="date-error" className="error-message" role="alert">
            Please choose a valid date (today or later).
          </span>
        )}
      </div>

      {/* Time Field */}
      <div className="form-group">
        <label htmlFor="res-time" className="form-label">
          Choose time <span className="required-star">*</span>
        </label>
        <select
          id="res-time"
          name="res-time"
          value={time}
          onChange={(e) => {
            setTime(e.target.value);
            setTouched((prev) => ({ ...prev, time: true }));
          }}
          onBlur={() => handleBlur('time')}
          required
          aria-required="true"
          aria-invalid={touched.time && !isTimeValid}
          aria-describedby={touched.time && !isTimeValid ? 'time-error' : undefined}
          className={`form-select ${touched.time && !isTimeValid ? 'input-error' : ''}`}
        >
          {availableTimes && availableTimes.length > 0 ? (
            availableTimes.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))
          ) : (
            <option value="">No times available</option>
          )}
        </select>
        {touched.time && !isTimeValid && (
          <span id="time-error" className="error-message" role="alert">
            Please select an available time slot.
          </span>
        )}
      </div>

      {/* Number of Guests */}
      <div className="form-group">
        <label htmlFor="guests" className="form-label">
          Number of guests <span className="required-star">*</span>
        </label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          name="guests"
          value={guests}
          onChange={(e) => {
            setGuests(e.target.value);
            setTouched((prev) => ({ ...prev, guests: true }));
          }}
          onBlur={() => handleBlur('guests')}
          required
          aria-required="true"
          aria-invalid={touched.guests && !isGuestsValid}
          aria-describedby={touched.guests && !isGuestsValid ? 'guests-error' : undefined}
          className={`form-input ${touched.guests && !isGuestsValid ? 'input-error' : ''}`}
        />
        {touched.guests && !isGuestsValid && (
          <span id="guests-error" className="error-message" role="alert">
            Please enter between 1 and 10 guests.
          </span>
        )}
      </div>

      {/* Occasion */}
      <div className="form-group">
        <label htmlFor="occasion" className="form-label">
          Occasion <span className="required-star">*</span>
        </label>
        <select
          id="occasion"
          name="occasion"
          value={occasion}
          onChange={(e) => {
            setOccasion(e.target.value);
            setTouched((prev) => ({ ...prev, occasion: true }));
          }}
          onBlur={() => handleBlur('occasion')}
          required
          aria-required="true"
          className="form-select"
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Engagement">Engagement</option>
          <option value="Business">Business</option>
          <option value="Casual">Casual / Other</option>
        </select>
      </div>

      {/* Submit Button matching Meta Course spec */}
      <div className="form-submit-container">
        <input
          type="submit"
          id="submit-booking"
          value="Make Your reservation"
          aria-label="Make Your reservation"
          disabled={!isFormValid}
          className="btn-primary submit-btn"
        />
      </div>
    </form>
  );
};

export default BookingForm;
