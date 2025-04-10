import React from "react";

const PopupModal = ({ isOpen, onClose, heading, iconSrc, children }) => {
  if (!isOpen) return null;

  // Ensure children is a string so we can split on '\n'
  const contentLines = typeof children === "string" ? children.split("\n") : [children];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 overflow-hidden">
      <div className="relative w-full sm:w-[90%] md:w-[65%] max-h-[90vh] bg-[#D9D9D9] border-2 border-black shadow-lg overflow-hidden font-mm text-black">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 bg-white border-2 border-black text-black text-sm sm:text-base font-bold px-2 py-1 hover:text-red-500 z-10"
          onClick={onClose}
        >
          X
        </button>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-3rem)] px-4 pt-4 pb-6 custom-scroll">
          {/* Heading with Icon */}
          <div className="flex items-center space-x-3 mb-4">
            {iconSrc && (
              <img
                src={iconSrc}
                alt="icon"
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain max-w-none"
              />
            )}
            <h3 className="text-xl sm:text-2xl font-mm">{heading}</h3>
          </div>

          {/* White Box with Content */}
          <div className="bg-white border-2 border-black px-4 sm:px-6 pt-6 pb-5 relative">
            <div className="font-dogica text-sm sm:text-base px-2 sm:px-4 py-2 sm:py-3 leading-relaxed whitespace-pre-wrap">
              <span className="text-lg sm:text-xl leading-none">“</span>
              <div className="inline-block">
                {contentLines.map((line, index) => (
                  <p key={index} className="mb-2">
                    {line}
                  </p>
                ))}
              </div>
              <span className="text-lg sm:text-xl leading-none">”</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scrollbar Styling */}
      <style jsx>{`
        .custom-scroll::-webkit-scrollbar {
          width: 12px;
        }
        .custom-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background-color: #949494;
          border-radius: 0;
        }
        .custom-scroll {
          scrollbar-width: auto;
          scrollbar-color: #949494 transparent;
        }
      `}</style>
    </div>
  );
};

export default PopupModal;
