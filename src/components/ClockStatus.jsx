import React, { useEffect, useState } from "react";

// Helper to format time as "11:53 AM"
function formatTime(date) {
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // 0 => 12
  const mins = minutes < 10 ? `0${minutes}` : minutes;
  return `${hours}:${mins} ${ampm}`;
}

const ClockStatus = () => {
  // Use the actual system time for live updates
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center gap-2 sm:gap-3 py-1.5 px-3 sm:px-4 rounded-full bg-[#151030]/80 border border-[#915eff]/30 backdrop-blur-md shadow-sm">
      <span className="font-medium text-white-100 text-xs sm:text-sm tracking-wide">
        Kolkata, West Bengal &bull; {formatTime(time)} GMT+5:30
      </span>
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
      </span>
      <span className="text-green-400 font-medium text-xs sm:text-sm">Open to work</span>
    </div>
  );
};

export default ClockStatus;
