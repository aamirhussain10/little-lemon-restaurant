import React from 'react';
import { Link } from 'react-router-dom';
import { images, fallbackImages, handleImageError } from '../utils/images';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 id="hero-title" className="hero-title">Little Lemon</h1>
          <h2 className="hero-subtitle">Chicago</h2>
          <p className="hero-description">
            We are a family owned Mediterranean restaurant, focused on traditional
            recipes served with a modern twist. Experience vibrant flavors and heartfelt hospitality in the heart of Chicago.
          </p>
          <div className="hero-action">
            <Link
              to="/booking"
              className="btn-primary hero-btn"
              aria-label="Reserve a Table at Little Lemon"
            >
              Reserve a Table
            </Link>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <img
            src={images.heroFood}
            alt="Little Lemon signature Mediterranean specialty dish"
            className="hero-image"
            onError={(e) => handleImageError(e, fallbackImages.heroFood)}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
