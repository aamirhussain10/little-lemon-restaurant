import React from 'react';
import { handleImageError } from '../utils/images';

const SpecialCard = ({ title, price, description, image, fallbackImage }) => {
  return (
    <article className="special-card" aria-labelledby={`card-title-${title.replace(/\s+/g, '-').toLowerCase()}`}>
      <div className="card-image-container">
        <img
          src={image}
          alt={title}
          className="card-image"
          onError={(e) => handleImageError(e, fallbackImage)}
        />
      </div>
      <div className="card-content">
        <div className="card-header">
          <h3 id={`card-title-${title.replace(/\s+/g, '-').toLowerCase()}`} className="card-title">
            {title}
          </h3>
          <span className="card-price">{price}</span>
        </div>
        <p className="card-description">{description}</p>
        <button
          className="card-order-btn"
          aria-label={`Order ${title} for delivery`}
          onClick={() => alert(`Added ${title} to your order!`)}
        >
          <span>Order a delivery</span>
          <svg
            className="delivery-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M19 7h-3V6a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h.5a3 3 0 0 0 5.83 0h4.34a3 3 0 0 0 5.83 0H22v-6l-3-3zm-6-2a1 1 0 0 1 1 1v1h-4V5h3zM5 5h3v2H4V6a1 1 0 0 1 1-1zm3 13.5A1.5 1.5 0 1 1 9.5 17 1.5 1.5 0 0 1 8 18.5zm10 0a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5zM20 11.5l2 2V15h-3v-3.5h1z" />
          </svg>
        </button>
      </div>
    </article>
  );
};

export default SpecialCard;
