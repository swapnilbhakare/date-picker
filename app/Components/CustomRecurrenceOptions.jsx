// components/CustomRecurrenceOptions.jsx
import React, { useState, useEffect } from 'react';
import useDatePickerStore from '../store/store';

export default function CustomRecurrenceOptions() {
    const { recurrencePattern, setCustomOptions } = useDatePickerStore();
    const [interval, setInterval] = useState(1);
    const [nthDay, setNthDay] = useState({ nth: 1, day: 'Monday' });

    useEffect(() => {
        if (recurrencePattern === 'monthly') {
            setCustomOptions({ interval, nthDay });
        } else {
            setCustomOptions({ interval });
        }
    }, [interval, nthDay]);

    return (
        <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">Every</label>
            <input
                type="number"
                value={interval}
                onChange={(e) => setInterval(Number(e.target.value))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            <span className="text-sm text-gray-500">Interval for {recurrencePattern}</span>

            {recurrencePattern === 'monthly' && (
                <div className="mt-4 space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Nth Day of the Month</label>
                    <div className="flex space-x-2">
                        <select
                            value={nthDay.nth}
                            onChange={(e) => setNthDay({ ...nthDay, nth: e.target.value })}
                            className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        >
                            {[1, 2, 3, 4, 5].map((n) => (
                                <option key={n} value={n}>{n}</option>
                            ))}
                        </select>

                        <select
                            value={nthDay.day}
                            onChange={(e) => setNthDay({ ...nthDay, day: e.target.value })}
                            className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        >
                            {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
                                <option key={day} value={day}>{day}</option>
                            ))}
                        </select>
                    </div>
                    <span className="text-sm text-gray-500">
                        Select the nth day of the month (e.g., second Tuesday)
                    </span>
                </div>
            )}
        </div>
    );
}
