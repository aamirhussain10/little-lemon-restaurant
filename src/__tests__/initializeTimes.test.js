import { describe, it, expect } from 'vitest';
import { initializeTimes, updateTimes } from '../reducers/bookingReducer';

describe('Booking Reducer Functions (Meta Course Rubric)', () => {
  it('initializeTimes returns a non-empty array of time slots', () => {
    const times = initializeTimes();
    expect(Array.isArray(times)).toBe(true);
    expect(times.length).toBeGreaterThan(0);
    // Every item should be formatted as HH:MM
    times.forEach((slot) => {
      expect(slot).toMatch(/^\d{1,2}:\d{2}$/);
    });
  });

  it('updateTimes returns available times when passed an UPDATE_TIMES action with a date', () => {
    const initialState = ['17:00', '18:00'];
    const action = { type: 'UPDATE_TIMES', payload: '2026-12-25' };
    const updatedTimes = updateTimes(initialState, action);

    expect(Array.isArray(updatedTimes)).toBe(true);
    expect(updatedTimes.length).toBeGreaterThan(0);
  });

  it('updateTimes returns previous state when given an unknown action type', () => {
    const initialState = ['17:00', '18:00', '19:00'];
    const action = { type: 'UNKNOWN_ACTION' };
    const result = updateTimes(initialState, action);

    expect(result).toEqual(initialState);
  });
});
