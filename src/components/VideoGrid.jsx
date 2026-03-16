import { useState } from "react";
import sedan from "../assets/sedan.png";
import pdf from "../assets/pdf.png";
import video1 from "../assets/4281386-hd_1920_1080_24fps.mp4";
import video2 from "../assets/4281226-hd_1920_1080_24fps.mp4";

export default function VideoGrid() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [playing, setPlaying] = useState(false);

  const panels = [
    { label: "Driver Side Panel" },
    { label: "Passenger Side Panel" },
    { label: "Rear Panel" },
  ];

  return (
    <div className="flex p-2 w-full">
      <div className="flex flex-col w-full gap-2 rounded-lg">
        <div className="flex w-full items-center gap-2">
          <video className="w-1/2 max-h-60 object-cover rounded-lg" controls>
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video className="w-1/2 max-h-60 object-cover rounded-lg" controls>
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1/2 flex gap-2">
            <video className="w-full h-32 object-cover rounded-lg" controls>
              <source src={video1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <video className="w-full h-32 object-cover rounded-lg" controls>
              <source src={video2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="w-1/2 flex gap-2">
            <video className="w-full h-32 object-cover rounded-md" controls>
              <source src={video1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <video className="w-full h-32 object-cover rounded-md" controls>
              <source src={video2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1/2 flex gap-2">
            <video className="w-full h-32 object-cover rounded-lg" controls>
              <source src={video1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <video className="w-full h-32 object-cover rounded-lg" controls>
              <source src={video2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="w-1/2 flex gap-2">
            <video className="w-full h-32 object-cover rounded-lg" controls>
              <source src={video1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <video className="w-full h-32 object-cover rounded-lg" controls>
              <source src={video2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        
        <div className="flex items-center justify-between px-4 py-3">
          {/* Restart */}
          <button className="w-10 h-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-300 hover:bg-gray-700 transition-colors duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
              <path d="M3 3v5h5" />
            </svg>
          </button>

          {/* Center Controls */}
          <div className="flex items-center gap-3">
            {/* Skip Back */}
            <button className="w-10 h-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-300 hover:bg-gray-700 transition-colors duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M6 6h2v12H6zm3.5 6 8.5 6V6z" />
              </svg>
            </button>

            {/* Play / Pause */}
            <button
              onClick={() => setPlaying(!playing)}
              className="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center text-white hover:bg-orange-500 shadow-lg shadow-orange-600/40 transition-all duration-200"
            >
              {playing ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 ml-0.5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            {/* Skip Forward */}
            <button className="w-10 h-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-300 hover:bg-gray-700 transition-colors duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M6 18l8.5-6L6 6v12zm2.5-6 5.5 4V8z" />
                <path d="M16 6h2v12h-2z" />
              </svg>
            </button>
          </div>

          {/* Download */}
          <button className="w-10 h-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-300 hover:bg-gray-700 transition-colors duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex flex-col w-[45%] rounded-lg gap-2 ml-10">
        <div className="flex flex-col h-full max-h-80 overflow-x-auto gap-1 border border-gray-300 rounded-sm p-2">
          <div className="w-full flex justify-end mb-2">
            <img src={pdf} alt="pdf" className="w-8 h-8 " />
          </div>
          <div className="w-1/2 flex gap-1">
            <video
              className="w-auto max-w-52 h-32 object-cover rounded-lg"
              controls
            >
              <source src={video1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <video
              className="w-auto max-w-52 h-32 object-cover rounded-lg"
              controls
            >
              <source src={video2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="w-1/2 flex gap-1">
            <video
              className="w-full max-w-52 h-32 object-cover rounded-lg"
              controls
            >
              <source src={video1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <video
              className="w-full max-w-52 h-32 object-cover rounded-lg"
              controls
            >
              <source src={video2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="w-1/2 flex gap-1">
            <video
              className="w-full max-w-52 h-32 object-cover rounded-lg"
              controls
            >
              <source src={video1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <video
              className="w-full max-w-52 h-32 object-cover rounded-lg"
              controls
            >
              <source src={video2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          {panels.map((panel, index) => (
            <div
              key={index}
              className="border border-gray-300 px-3 py-2 rounded-sm"
            >
              <div
                className="flex items-center gap-1 cursor-pointer select-none"
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
              >
                <img src={sedan} alt="Car" className="w-14 h-14" />
                <span className="flex-1 text-gray-600 text-sm font-medium">
                  {panel.label}
                </span>
                <span className="bg-orange-600 text-white text-sm font-bold px-2 py-1 rounded">
                  0 Damages
                </span>
                <span className="text-gray-500 text-sm px-2 py-1 border border-gray-700 rounded">
                  Frames
                </span>
                <span
                  className="text-gray-500 ml-2 text-sm transition-transform duration-300"
                  style={{
                    transform:
                      expandedIndex === index
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                  }}
                >
                  ▼
                </span>
              </div>

              {/* Dropdown Content */}
              <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{ maxHeight: expandedIndex === index ? "200px" : "0px" }}
              >
                <div
                  className={`my-3 pl-12 text-gray-600 text-xs italic transition-all duration-500 ease-in-out
                    ${expandedIndex === index ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}
                >
                  No damage detected on this panel.
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
