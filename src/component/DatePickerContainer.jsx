import React, { useState } from 'react';

const DatePickerContainer = () => {
  // Get the current date in 'YYYY-MM-DD' format
  const today = new Date().toISOString().substr(0, 10);

  // Set the default date for 'from' as today's date
  const [fromDate, setFromDate] = useState(today);

  return (
    <div className="bg-white rounded-[5px] px-6 pt-7 pb-5 flex flex-col gap-3.5">
      <div>
        <h4 className="text-[#808080] text-base font-medium mb-2">Origin</h4>
        <input
          type="text"
          placeholder="Dhaka..."
          className="w-full bg-[#f2f2f2] py-5 px-[22px] rounded-[5px] placeholder-black/60 placeholder-text-base placeholder-font-bold text-black text-base font-bold"
        />
      </div>
      <div>
        <h4 className="text-[#808080] text-base font-medium mb-2">Destination</h4>
        <input
          type="text"
          placeholder="Cox's Bazar..."
          className="w-full bg-[#f2f2f2] py-5 px-[22px] rounded-[5px] placeholder-black/60 placeholder-text-base placeholder-font-bold text-black text-base font-bold"
        />
      </div>
      <div className="flex justify-between gap-4">
        <div>
          <h4 className="text-[#808080] text-base font-medium mb-2">From</h4>
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            min={today}  // Set minimum date to today
            className="w-full bg-[#f2f2f2] py-5 px-[22px] rounded-[5px] placeholder-black/60 placeholder-text-base placeholder-font-bold text-black text-base font-bold"
          />
        </div>
        <div>
          <h4 className="text-[#808080] text-base font-medium mb-2">To</h4>
          <input
            type="date"
            min={today}  // Set minimum date to today
            className="w-full bg-[#f2f2f2] py-5 px-[22px] rounded-[5px] placeholder-black/60 placeholder-text-base placeholder-font-bold text-black text-base font-bold"
          />
        </div>

      </div>
      <button className="btn py-[20px] bg-[#f9a51a] rounded-[5px] text-black !text-base !font-medium text-center !block !h-auto !min-h-max !leading-none">
        Start Booking
      </button>
    </div>
  );
};

export default DatePickerContainer;
