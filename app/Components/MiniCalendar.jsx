// components/MiniCalendar.js
import React from 'react';

export default function MiniCalendar({ selectedDates }) {
    return (
        <div className="mt-4">
            <h3 className="text-md font-medium text-gray-700">Preview Dates</h3>
            <div className="grid grid-cols-7 gap-2 mt-2">
                {selectedDates.map((date, index) => (
                    <div
                        key={index}
                        className="text-sm bg-blue-100 p-2 rounded-lg text-center"
                    >
                        {date}
                    </div>
                ))}
            </div>
        </div>
    );
}
