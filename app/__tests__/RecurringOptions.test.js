import { render, fireEvent } from "@testing-library/react";
import RecurringOptions from "../Components/RecurringOptions";
import { useDatePickerStore } from "../store/store";

jest.mock("../../store/store", () => ({
  useDatePickerStore: jest.fn(),
}));

describe("RecurringOptions", () => {
  it("allows the user to select days of the week for weekly recurrence", () => {
    const mockSetRecurrencePattern = jest.fn();
    const mockSetCustomOptions = jest.fn();
    useDatePickerStore.mockReturnValue({
      setRecurrencePattern: mockSetRecurrencePattern,
      setCustomOptions: mockSetCustomOptions,
      recurrencePattern: "weekly",
    });

    const { getByText } = render(<RecurringOptions />);

    const mondayButton = getByText("Mon");
    fireEvent.click(mondayButton);

    expect(mockSetCustomOptions).toHaveBeenCalledWith({ daysOfWeek: ["Mon"] });
  });
});
