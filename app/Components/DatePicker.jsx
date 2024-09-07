"use client";
import React, { useEffect } from 'react';
import { format, addDays, addWeeks, addMonths, addYears } from 'date-fns';
import useDatePickerStore from '../store/store';
import RecurringOptions from './RecurringOptions';
import CustomRecurrenceOptions from './CustomRecurrenceOptions';
import MiniCalendar from './MiniCalendar';
import DateRangePicker from './DateRangePicker';

export default function DatePicker() {
    const { startDate, endDate, recurrencePattern, recurrenceCustomOptions, selectedDates, setSelectedDates } = useDatePickerStore();

    useEffect(() => {
        if (startDate) {
            const dates = calculateRecurrence(startDate, endDate, recurrencePattern, recurrenceCustomOptions);
            setSelectedDates(dates);
        }
    }, [startDate, endDate, recurrencePattern, recurrenceCustomOptions]);

    const calculateRecurrence = (start, end, pattern, options) => {
        let dates = [];
        let currentDate = new Date(start);

        switch (pattern) {
            case 'daily':
                while (currentDate <= new Date(end || startDate)) {
                    dates.push(currentDate);
                    currentDate = addDays(currentDate, options.interval || 1);
                }
                break;
            case 'weekly':
                while (currentDate <= new Date(end || startDate)) {
                    dates.push(currentDate);
                    currentDate = addWeeks(currentDate, options.interval || 1);
                }
                break;
            case 'monthly':
                while (currentDate <= new Date(end || startDate)) {
                    dates.push(currentDate);
                    currentDate = addMonths(currentDate, options.interval || 1);
                }
                break;
            case 'yearly':
                while (currentDate <= new Date(end || startDate)) {
                    dates.push(currentDate);
                    currentDate = addYears(currentDate, options.interval || 1);
                }
                break;
            default:
                break;
        }

        return dates.map((date) => format(date, 'yyyy-MM-dd'));
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Select Recurring Dates</h2>
            <DateRangePicker />
            <RecurringOptions />
            <CustomRecurrenceOptions />
            <MiniCalendar selectedDates={selectedDates} />
        </div>
    );
}
