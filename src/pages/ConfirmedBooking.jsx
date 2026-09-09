import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../styles/ConfirmedBooking.css';

const ConfirmedBooking = () => {
  const location = useLocation();
  const bookingDetails = location.state?.booking;

  return (
    <main className="confirmed-booking-page" aria-labelledby="confirmation-heading">
      <div className="container">
        <section className="confirmation-card">
          <div className="confirmation-icon-wrapper" aria-hidden="true">
            <svg
              className="confirmation-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" fill="#495E57" stroke="none" />
              <polyline points="7 12 10 15 17 8" stroke="#F4CE14" />
            </svg>
          </div>

          <h1 id="confirmation-heading" className="confirmation-title">
            Your Reservation is Confirmed!
          </h1>
          <p className="confirmation-subtitle">
            We are excited to welcome you to Little Lemon Chicago! A confirmation email has been sent.
          </p>

          {bookingDetails && (
            <div className="reservation-summary" aria-label="Reservation Summary">
              <h2 className="summary-title">Booking Summary</h2>
              <div className="summary-row">
                <span className="summary-label">Date:</span>
                <span className="summary-value">{bookingDetails.date}</span>
              </div>
              <div className="summary-row">
                <span className="summary-label">Time:</span>
                <span className="summary-value">{bookingDetails.time}</span>
              </div>
              <div className="summary-row">
                <span className="summary-label">Number of Guests:</span>
                <span className="summary-value">{bookingDetails.guests} {bookingDetails.guests === 1 ? 'Guest' : 'Guests'}</span>
              </div>
              <div className="summary-row">
                <span className="summary-label">Occasion:</span>
                <span className="summary-value">{bookingDetails.occasion}</span>
              </div>
            </div>
          )}

          <div className="confirmation-actions">
            <Link to="/" className="btn-primary" aria-label="Return to Little Lemon Homepage">
              Back to Homepage
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ConfirmedBooking;
