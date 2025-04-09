import React from "react";

export default function Alert({ onClose, onRegister }) {
  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
      <div
        className="w-full max-w-xs shadow-lg overflow-hidden"
        style={{
          borderWidth: "12px",
          borderStyle: "solid",
          borderImage: "url('/pixel-border.png') 32 stretch",
          backgroundColor: "#D9D9D9",
        }}
      >
        <div className="flex px-3 py-5 items-center space-x-2">
          <img
            src="caution.png"
            alt="Caution"
            className="w-14 h-14 object-contain pixelated shrink-0"
            style={{ imageRendering: "pixelated" }}
          />

          <div className="flex flex-col items-center justify-center text-center space-y-3 flex-1">
            <h2 className="text-black font-mm text-base">REGISTER?</h2>
            <div className="flex justify-center gap-3 flex-wrap">
              <button
                onClick={onRegister}
                className="bg-white border-2 border-black px-4 py-1.5 text-sm text-black font-mm hover:bg-gray-300 transition" 
              >
                YES
              </button>
              <button
                onClick={onClose}
                className="bg-white border-2 border-black px-4 py-1.5 text-sm text-black font-mm hover:bg-gray-300 transition"
              >
                NO
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
