/**
 * Meta Front-End Capstone Course API
 * Implements seeded random generator to provide realistic available times for any date.
 */

const seededRandom = function (seed) {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

/**
 * Fetches available booking times for a given date
 * @param {Date|string} date
 * @returns {Array<string>} Array of available time strings (e.g. ['17:00', '17:30', ...])
 */
export const fetchAPI = function (date) {
  const result = [];
  const d = date instanceof Date ? date : new Date(date);
  const seed = !isNaN(d.getDate()) ? d.getDate() : 1;
  const random = seededRandom(seed);

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(`${i}:00`);
    }
    if (random() < 0.5) {
      result.push(`${i}:30`);
    }
  }

  // Ensure at least some default times exist if random generator produced none
  if (result.length === 0) {
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  }

  return result;
};

/**
 * Submits the reservation form data
 * @param {Object} formData
 * @returns {boolean} Returns true for successful reservation
 */
export const submitAPI = function (formData) {
  // Simulates network latency if needed, returns true for success
  return Boolean(formData);
};
