import React from 'react';
import TestimonialCard from './TestimonialCard';
import { images, fallbackImages } from '../utils/images';
import '../styles/Testimonials.css';

const testimonialsData = [
  {
    rating: 5,
    name: 'Sara Lopez',
    review: 'The Greek Salad is truly authentic! The dressing and fresh ingredients took me straight to Athens.',
    image: images.customer1,
    fallbackImage: fallbackImages.customer1,
  },
  {
    rating: 5,
    name: 'John Miller',
    review: 'Booking a table online was seamless. The bruschetta and wine pairing made our anniversary dinner unforgettable.',
    image: images.customer2,
    fallbackImage: images.customer2,
  },
  {
    rating: 5,
    name: 'Emily Chen',
    review: 'Mario and Adrian came out to greet us. The lemon dessert is the best dessert I have ever tasted in Chicago!',
    image: images.customer3,
    fallbackImage: images.customer3,
  },
  {
    rating: 5,
    name: 'David Wilson',
    review: 'Warm atmosphere, kind staff, and phenomenal Mediterranean flavors. We come back every single week.',
    image: images.customer4,
    fallbackImage: images.customer4,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section" aria-labelledby="testimonials-title">
      <div className="container">
        <h2 id="testimonials-title" className="testimonials-title">
          Testimonials
        </h2>
        <div className="testimonials-grid">
          {testimonialsData.map((item) => (
            <TestimonialCard key={item.name} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
