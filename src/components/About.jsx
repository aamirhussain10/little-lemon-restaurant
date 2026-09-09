import React from 'react';
import { images, fallbackImages, handleImageError } from '../utils/images';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about-section" aria-labelledby="about-title">
      <div className="container about-container">
        <div className="about-content">
          <h2 id="about-title" className="about-title">Little Lemon</h2>
          <h3 className="about-subtitle">Chicago</h3>
          <p className="about-paragraph">
            Little Lemon was founded by Mario and Adrian, two Italian brothers who shared a lifelong passion
            for authentic Mediterranean gastronomy. Growing up along the Mediterranean coastline, the brothers
            learned time-honored family recipes crafted with freshly harvested herbs, sun-ripened lemons, and cold-pressed olive oils.
          </p>
          <p className="about-paragraph">
            After moving to Chicago, they realized their dream of opening a warm, neighborhood eatery that marries traditional
            old-world flavors with contemporary culinary presentation. Today, Little Lemon stands as a beloved Chicago staple
            where every guest is welcomed like family.
          </p>
        </div>

        <div className="about-image-wrapper">
          <img
            src={images.marioAndAdrian}
            alt="Chefs Mario and Adrian in the Little Lemon kitchen"
            className="about-image"
            onError={(e) => handleImageError(e, fallbackImages.marioAndAdrian)}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
