import React, { useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import ConfirmedBooking from './pages/ConfirmedBooking';
import { initializeTimes, updateTimes } from './reducers/bookingReducer';
import { submitAPI } from './utils/tempAPI';
import './App.css';

// Export for test compliance
export { initializeTimes, updateTimes };

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submitForm = (formData) => {
    const isSuccess = submitAPI(formData);
    if (isSuccess) {
      navigate('/confirmed', { state: { booking: formData } });
    } else {
      alert('Unable to process your reservation at this time. Please try again.');
    }
  };

  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/booking"
            element={
              <BookingPage
                availableTimes={availableTimes}
                dispatch={dispatch}
                submitForm={submitForm}
              />
            }
          />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
