import React from 'react';
import { handleImageError } from '../utils/images';

const TestimonialCard = ({ rating, name, review, image, fallbackImage }) => {
  return (
    <article className="testimonial-card" aria-label={`Customer review by ${name}`}>
      <div className="testimonial-rating" aria-label={`Rating: ${rating} out of 5 stars`}>
        {Array.from({ length: rating }).map((_, index) => (
          <span key={index} className="star-icon" aria-hidden="true">★</span>
        ))}
      </div>
      <div className="testimonial-user">
        <img
          src={image}
          alt={name}
          className="testimonial-avatar"
          onError={(e) => handleImageError(e, fallbackImage)}
        />
        <h4 className="testimonial-name">{name}</h4>
      </div>
      <p className="testimonial-review">“{review}”</p>
    </article>
  );
};

export default TestimonialCard;
