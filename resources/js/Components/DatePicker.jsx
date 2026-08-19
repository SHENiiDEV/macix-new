import React, { forwardRef } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Calendar } from 'lucide-react';

const CustomInput = forwardRef(({ value, onClick, placeholder, hasError }, ref) => (
    <button
        type="button"
        onClick={onClick}
        ref={ref}
        className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border ${
            hasError ? 'border-rose-500' : 'border-slate-800 hover:border-slate-700'
        } text-white text-xs focus:border-amber-500 focus:outline-none flex items-center justify-between text-left cursor-pointer transition`}
    >
        <span className={value ? 'text-white font-medium' : 'text-slate-500'}>
            {value || placeholder || 'Select Date of Birth'}
        </span>
        <Calendar className="w-4 h-4 text-slate-400 shrink-0 ml-2" />
    </button>
));

CustomInput.displayName = 'CustomInput';

export default function DatePicker({ value, onChange, placeholder, error }) {
    // Parse initial value
    const selectedDate = value ? new Date(value) : null;

    const handleDateChange = (date) => {
        if (!date) {
            onChange('');
            return;
        }

        // Format to YYYY-MM-DD
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const formatted = `${year}-${month}-${day}`;

        onChange(formatted);
    };

    return (
        <div className="relative w-full">
            <ReactDatePicker
                selected={selectedDate && !isNaN(selectedDate) ? selectedDate : null}
                onChange={handleDateChange}
                dateFormat="yyyy-MM-dd"
                maxDate={new Date()}
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                scrollableYearDropdown
                yearDropdownItemNumber={90}
                placeholderText={placeholder || 'Select Date of Birth'}
                customInput={<CustomInput placeholder={placeholder} hasError={!!error} />}
                popperPlacement="bottom-start"
                popperClassName="executive-datepicker-popper"
            />
            {error && <p className="text-rose-400 text-xs mt-1">{error}</p>}
        </div>
    );
}
