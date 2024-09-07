// components/RecurringOptions.jsx
import React, { useState } from 'react';
import useDatePickerStore from '../store/store';

export default function RecurringOptions() {
    const { setRecurrencePattern, setCustomOptions, recurrencePattern } = useDatePickerStore();
    const [selectedDays, setSelectedDays] = useState([]);

    const toggleDay = (day) => {
        const updatedDays = selectedDays.includes(day)
            ? selectedDays.filter(d => d !== day)
            : [...selectedDays, day];

        setSelectedDays(updatedDays);
        setCustomOptions({ daysOfWeek: updatedDays });
    };

    return (
        <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">Recurrence Pattern</label>
            <select
                value={recurrencePattern}
                onChange={(e) => setRecurrencePattern(e.target.value)}
                className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
            </select>

            {recurrencePattern === 'weekly' && (
                <div className="mt-4 space-y-2">
                    <span className="block text-sm font-medium text-gray-700">Select Days of the Week</span>
                    <div className="flex space-x-2">
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
                            <button
                                key={index}
                                onClick={() => toggleDay(day)}
                                className={`px-3 py-2 rounded-lg ${selectedDays.includes(day) ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'
                                    }`}
                            >
                                {day}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
