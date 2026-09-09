import React from 'react';
import SpecialCard from './SpecialCard';
import { images, fallbackImages } from '../utils/images';
import '../styles/Specials.css';

const specialsData = [
  {
    title: 'Greek Salad',
    price: '$12.99',
    description:
      'The famous Greek salad of crispy lettuce, peppers, olives and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    image: images.greekSalad,
    fallbackImage: fallbackImages.greekSalad,
  },
  {
    title: 'Bruschetta',
    price: '$5.99',
    description:
      'Our Bruschetta is made from grilled artisan bread smeared with garlic and seasoned with extra virgin olive oil, salt, and fresh garden tomatoes.',
    image: images.bruschetta,
    fallbackImage: fallbackImages.bruschetta,
  },
  {
    title: 'Lemon Dessert',
    price: '$5.00',
    description:
      'Straight from grandma’s recipe book, every last ingredient has been sourced to be as authentic and mouthwatering as can be imagined.',
    image: images.lemonDessert,
    fallbackImage: fallbackImages.lemonDessert,
  },
];

const Specials = () => {
  return (
    <section id="menu" className="specials-section" aria-labelledby="specials-title">
      <div className="container">
        <div className="specials-top">
          <h2 id="specials-title" className="specials-title">This week’s specials!</h2>
          <button
            className="btn-primary"
            onClick={() => alert('Viewing full online menu!')}
            aria-label="View online menu"
          >
            Online Menu
          </button>
        </div>

        <div className="specials-grid">
          {specialsData.map((special) => (
            <SpecialCard key={special.title} {...special} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specials;
