import { useState, useEffect } from "react";

export default function PrismDateTime() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const day = now.getDate();
  const month = now.toLocaleString("en-US", { month: "short" });
  const year = now.getFullYear();
  const weekday = now.toLocaleString("en-US", { weekday: "long" });
  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  const dateStr = `${(now.getMonth() + 1).toString().padStart(2, "0")}/${now
    .getDate()
    .toString()
    .padStart(2, "0")}/${year}`;

  return (
    <div className="flex flex-col items-center px-8 pt-3 font-mono border-b border-gray-300">
      <div className="flex items-center justify-end w-full gap-4">
        <span className="text-4xl text-black ">{day}</span>
        <div className="flex flex-col ">
          <span className="text-sm text-black">
            {month} {year}
          </span>
          <span className="text-sm text-black">{weekday}</span>
        </div>
        <span className="text-3xl text-orange-500 ml-1">PRISM</span>
      </div>

      <div className="flex flex-row items-center justify-between gap-4 w-full">
        <div className="flex items-center gap-4">
          <h2 className="font-mono text-sm">1C6SRFFT7TN349979</h2>
          <img src=".\src\assets\sedan.png" alt="QR Code" className="w-14 h-14" />
        </div>

        <div className="flex items-center gap-4">
          <div className="w-3 h-3 rounded-full border-2 border-orange-500 shadow-[0_0_6px_rgba(234,88,12,0.6)]" />
          <span className="font-mono text-sm">
            {dateStr} {time}
          </span>
          <div className="flex items-center gap-2">
            <img src="src\assets\location.png" alt="Location Icon" className="w-6 h-6" />
            <h2 className="font-mono text-sm">NEW BOSTON</h2>
          </div>
          <div className="flex items-center gap-2">
            <img src="src\assets\camera.png" alt="Location Icon" className="w-5 h-5" />
            <h2 className="font-mono text-sm">POD 2</h2>
          </div>
          <div>
            <img src="src\assets\sedan.png" alt="Warning Icon" className="w-14 h-14" />
          </div>
        </div>

      </div>
    </div>
  );
}
