import React from 'react';
import BookingForm from '../components/BookingForm';
import '../styles/Booking.css';

const BookingPage = ({ availableTimes, dispatch, submitForm }) => {
  return (
    <div className="booking-page-container">
      {/* Banner */}
      <section className="booking-hero-banner" aria-labelledby="booking-heading">
        <div className="container">
          <h1 id="booking-heading" className="booking-hero-title">Reserve a Table</h1>
          <p className="booking-hero-subtitle">
            Experience exceptional Mediterranean dining at Little Lemon Chicago. Please fill out the form below to secure your table.
          </p>
        </div>
      </section>

      {/* Main Reservation Card */}
      <main className="container">
        <section className="booking-card" aria-labelledby="form-heading">
          <div className="booking-card-header">
            <h2 id="form-heading" className="booking-card-title">Table Details</h2>
            <p className="booking-card-desc">
              Parties larger than 10 please call us directly at (312) 555-0199.
            </p>
          </div>

          <BookingForm
            availableTimes={availableTimes}
            dispatch={dispatch}
            submitForm={submitForm}
          />
        </section>
      </main>
    </div>
  );
};

export default BookingPage;
