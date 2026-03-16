import { useState } from "react";

export default function VideoGrid() {
  const [expandedIndex, setExpandedIndex] = useState(null);

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
            <source
              src="../assets/4281386-hd_1920_1080_24fps.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <video className="w-1/2 max-h-60 object-cover rounded-lg" controls>
            <source
              src="src/assets/4281226-hd_1920_1080_24fps.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1/2 flex gap-2">
            <video className="w-full h-32 object-cover rounded-lg" controls>
              <source
                src="src/assets/4281386-hd_1920_1080_24fps.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <video className="w-full h-32 object-cover rounded-lg" controls>
              <source
                src="src/assets/4281226-hd_1920_1080_24fps.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="w-1/2 flex gap-2">
            <video className="w-full h-32 object-cover rounded-md" controls>
              <source
                src="src/assets/4281386-hd_1920_1080_24fps.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <video className="w-full h-32 object-cover rounded-md" controls>
              <source
                src="src/assets/4281226-hd_1920_1080_24fps.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1/2 flex gap-2">
            <video className="w-full h-32 object-cover rounded-lg" controls>
              <source
                src="src/assets/4281386-hd_1920_1080_24fps.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <video className="w-full h-32 object-cover rounded-lg" controls>
              <source
                src="src/assets/4281226-hd_1920_1080_24fps.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="w-1/2 flex gap-2">
            <video className="w-full h-32 object-cover rounded-lg" controls>
              <source
                src="src/assets/4281386-hd_1920_1080_24fps.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <video className="w-full h-32 object-cover rounded-lg" controls>
              <source
                src="src/assets/4281226-hd_1920_1080_24fps.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[45%] rounded-lg gap-2 ml-10">
        <div className="flex flex-col h-full max-h-80 overflow-x-auto gap-1 border border-gray-300 rounded-sm p-2">
          <div className="w-full flex justify-end mb-2">
            <img src="src\assets\pdf.png" alt="pdf" className="w-8 h-8 " />
          </div>
          <div className="w-1/2 flex gap-1">
            <video
              className="w-auto max-w-52 h-32 object-cover rounded-lg"
              controls
            >
              <source
                src="src/assets/4281386-hd_1920_1080_24fps.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <video
              className="w-auto max-w-52 h-32 object-cover rounded-lg"
              controls
            >
              <source
                src="src/assets/4281226-hd_1920_1080_24fps.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="w-1/2 flex gap-1">
            <video
              className="w-full max-w-52 h-32 object-cover rounded-lg"
              controls
            >
              <source
                src="src/assets/4281386-hd_1920_1080_24fps.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <video
              className="w-full max-w-52 h-32 object-cover rounded-lg"
              controls
            >
              <source
                src="src/assets/4281226-hd_1920_1080_24fps.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="w-1/2 flex gap-1">
            <video
              className="w-full max-w-52 h-32 object-cover rounded-lg"
              controls
            >
              <source
                src="src/assets/4281386-hd_1920_1080_24fps.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <video
              className="w-full max-w-52 h-32 object-cover rounded-lg"
              controls
            >
              <source
                src="src/assets/4281226-hd_1920_1080_24fps.mp4"
                type="video/mp4"
              />
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
                <img
                  src="src/assets/sedan.png"
                  alt="Car"
                  className="w-14 h-14"
                />
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
