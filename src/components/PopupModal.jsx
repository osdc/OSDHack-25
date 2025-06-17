import React from "react";

const parseContent = (text) => {
  if (typeof text !== "string") return text;

  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const withLinks = text.replace(
    linkRegex,
    '<a href="$2" target="_blank" class="text-blue-700 underline hover:text-blue-500">$1</a>'
  );

  const withLineBreaks = withLinks.replace(/\n/g, "<br/>");

  return withLineBreaks;
};

const PopupModal = ({ isOpen, onClose, heading, iconSrc, children }) => {
  if (!isOpen) return null;

  const isString = typeof children === "string";
  const parsedContent = isString ? parseContent(children) : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 overflow-hidden">
      <div className="relative w-full sm:w-[90%] md:w-[65%] max-h-[90vh] bg-[#D9D9D9] border-2 border-black shadow-lg overflow-hidden font-mm text-black">
        <button
          className="absolute top-3 right-3 bg-white border-2 border-black text-black text-sm sm:text-base font-bold px-2 py-1 hover:text-red-500 z-10"
          onClick={onClose}
        >
          X
        </button>

        <div className="overflow-y-auto max-h-[calc(90vh-3rem)] px-4 pt-4 pb-6 custom-scroll">
          <div className="flex items-start gap-3 mb-4 pr-8">
            {iconSrc && (
              <img
                src={iconSrc}
                alt="icon"
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain max-w-none mt-1"
              />
            )}
            <h3 className="text-xl sm:text-2xl font-mm break-words leading-snug">
              {heading}
            </h3>
          </div>

          <div className="bg-white border-2 border-black px-4 sm:px-6 pt-6 pb-5 relative break-words">
            <div className="font-dogica text-sm sm:text-base px-2 sm:px-4 py-2 sm:py-3 leading-relaxed whitespace-pre-wrap">
              <span className="text-lg sm:text-xl leading-none">“</span>
              <span className="inline-block">
                {isString ? (
                  <span dangerouslySetInnerHTML={{ __html: parsedContent }} />
                ) : (
                  children
                )}
              </span>
              <span className="text-lg sm:text-xl leading-none">”</span>
            </div>
          </div>
        </div>
      </div>

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