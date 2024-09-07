// __tests__/DatePicker.test.js
import { render, fireEvent } from "@testing-library/react";
import DatePicker from "../Components/DatePicker";
import { useDatePickerStore } from "../store/store";

jest.mock("../store/store", () => ({
  useDatePickerStore: jest.fn(),
}));

describe("DatePicker", () => {
  it("renders correctly and updates dates based on user input", () => {
    const mockSetSelectedDates = jest.fn();
    useDatePickerStore.mockReturnValue({
      startDate: "2024-01-01",
      endDate: "2024-12-31",
      recurrencePattern: "weekly",
      recurrenceCustomOptions: {},
      selectedDates: [],
      setSelectedDates: mockSetSelectedDates,
    });

    const { getByLabelText, getByText } = render(<DatePicker />);

    const startDateInput = getByLabelText("Start Date");
    fireEvent.change(startDateInput, { target: { value: "2024-01-01" } });

    const weeklyOption = getByText("Weekly");
    fireEvent.click(weeklyOption);

    expect(mockSetSelectedDates).toHaveBeenCalled(); // Ensure dates are set
  });
});
