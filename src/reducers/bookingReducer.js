import { fetchAPI } from '../utils/tempAPI';

/**
 * Initializes available booking times for today's date
 * @returns {Array<string>}
 */
export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

/**
 * Reducer function to update available booking times based on selected date
 * @param {Array<string>} state
 * @param {Object} action - Action with type and payload (selected date)
 * @returns {Array<string>}
 */
export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES': {
      const selectedDate = action.payload || action.date;
      return fetchAPI(new Date(selectedDate));
    }
    default:
      return state;
  }
};
