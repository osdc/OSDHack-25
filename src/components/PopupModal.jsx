import React from "react";

const PopupModal = ({ isOpen, onClose, heading, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/70 z-50 flex items-center justify-center p-4">
      <div className="bg-[#D9D9D9] border-4 border-black px-6 pt-6 pb-4 w-full sm:w-[80%] md:w-[55%] max-h-[92vh] overflow-y-auto shadow-lg relative font-mm text-black custom-scroll">
        {/* Close Button */}
        <button
          className="absolute top-2 right-4 text-black text-xl font-bold hover:text-red-500"
          onClick={onClose}
        >
          X
        </button>

        {/* Heading */}
        <h3 className="text-xl sm:text-2xl text-center mb-4">{heading}</h3>

        {/* Content */}
        <div className="font-dogica text-sm sm:text-base">{children}</div>
      </div>

      <style jsx>{`
        .custom-scroll::-webkit-scrollbar {
          width: 12px; /* wider scrollbar */
        }

        .custom-scroll::-webkit-scrollbar-track {
          background: transparent;
        }

        .custom-scroll::-webkit-scrollbar-thumb {
          background-color: #949494;
          border-radius: 0;
          height: 40%; /* shorter length-wise scrollbar */
          margin-right: 8px;
        }

        .custom-scroll {
          scrollbar-width: auto;
          scrollbar-color: #949494 transparent;
        }

        /* To shift the scrollbar slightly left */
        .custom-scroll::-webkit-scrollbar {
          margin-left: -4px;
        }
      `}</style>
    </div>
  );
};

export default PopupModal;
