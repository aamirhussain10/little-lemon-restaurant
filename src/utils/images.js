// Little Lemon Image Assets
// Defaults to local /assets/images/* and gracefully falls back to curated Mediterranean visuals

export const images = {
  logo: '/assets/images/logo.svg',
  heroFood: '/assets/images/hero-food.jpg',
  greekSalad: '/assets/images/greek-salad.jpg',
  bruschetta: '/assets/images/bruschetta.jpg',
  lemonDessert: '/assets/images/lemon-dessert.jpg',
  marioAndAdrian: '/assets/images/mario-and-adrian.jpg',
  customer1: '/assets/images/customer1.jpg',
  customer2: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
  customer3: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
  customer4: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
};

// Fallback high-resolution photos in case local jpgs haven't been copied yet
export const fallbackImages = {
  heroFood: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
  greekSalad: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
  bruschetta: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=800&q=80',
  lemonDessert: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80',
  marioAndAdrian: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80',
  customer1: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
};

export const handleImageError = (e, fallbackSrc) => {
  if (fallbackSrc && e.target.src !== fallbackSrc) {
    e.target.src = fallbackSrc;
  }
};
