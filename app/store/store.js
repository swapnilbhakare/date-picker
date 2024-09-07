// store.js
import { create } from "zustand"; // New named export

const useDatePickerStore = create((set) => ({
  startDate: null,
  endDate: null,
  recurrencePattern: "daily",
  recurrenceCustomOptions: {},
  selectedDates: [],

  setStartDate: (date) => set({ startDate: date }),
  setEndDate: (date) => set({ endDate: date }),
  setRecurrencePattern: (pattern) => set({ recurrencePattern: pattern }),
  setCustomOptions: (options) => set({ recurrenceCustomOptions: options }),
  setSelectedDates: (dates) => set({ selectedDates: dates }),
}));

export default useDatePickerStore;
