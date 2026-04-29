"use client";
import { useState, useEffect } from "react";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function WhatsAppButton({
  phoneNumber = "20109343430", // Egyptian number format
  message = "Hello! I'd like to get in touch.",
  position = "bottom-right",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [customMessage, setCustomMessage] = useState(message);
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    // Delay appearance for a polished entry
    const timer = setTimeout(() => setIsVisible(true), 600);
    // Stop pulse after 4s
    const pulseTimer = setTimeout(() => setPulse(false), 4000);
    return () => {
      clearTimeout(timer);
      clearTimeout(pulseTimer);
    };
  }, []);

  const handleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
    setPulse(false);
  };

  const handleSend = () => {
    const encoded = encodeURIComponent(customMessage);
    window.open(`https://wa.me/${phoneNumber}?text=${encoded}`, "_blank");
  };

  return (
    <div
      className={`fixed z-50 flex flex-col items-end gap-3 transition-all duration-500
        ${position === "bottom-right" ? "bottom-5 right-6" : "bottom-5 left-6"}
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      {/* Chat popup card */}
      <div
        className={`transition-all duration-300 ease-out origin-bottom-left
          ${isOpen
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto w-auto"
            : "opacity-0 scale-90 translate-y-4 pointer-events-none w-0"
          }`}
      >
        <div className="bg-white rounded-2xl shadow-2xl w-72 overflow-hidden border border-gray-100">
          {/* Header */}
          <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white">
                <WhatsAppIcon />
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-[#075E54] rounded-full" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-semibold text-sm leading-tight truncate">WhatsApp Chat</p>
              <p className="text-green-300 text-xs">Typically replies instantly</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
            >
              <CloseIcon />
            </button>
          </div>

          {/* Chat bubble */}
          <div className="bg-[#ECE5DD] px-4 py-4">
            <div className="bg-white rounded-xl rounded-tl-none px-3 py-2 shadow-sm max-w-[85%] text-sm text-gray-700 leading-relaxed">
              👋 Hi there! How can we help you today?
              <div className="text-[10px] text-gray-400 mt-1 text-right">Now</div>
            </div>
          </div>

          {/* Input area */}
          <div className="bg-white px-3 py-3 flex items-end gap-2">
            <textarea
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              rows={2}
              placeholder="Type a message..."
              className="flex-1 resize-none text-sm text-gray-700 placeholder-gray-400 border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:border-[#25D366] focus:ring-1 focus:ring-[#25D366] transition-colors"
            />
            <button
              onClick={handleSend}
              className="w-10 h-10 flex-shrink-0 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-md"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 translate-x-px">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* FAB Button */}
      <div className="relative flex items-center justify-end">
        {/* Tooltip label
        <span
          className={`ml-3 order-last bg-gray-800 text-white text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap shadow-lg
            transition-all duration-200
            ${!isOpen && isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 pointer-events-none"}`}
        >
          Chat with us
        </span> */}

        {/* Pulse rings */}
        {pulse && (
          <>
            <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping" />
            <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-20 animate-ping [animation-delay:0.3s]" />
          </>
        )}

        {/* Main button */}
        <button
          onClick={handleOpen}
          aria-label="Open WhatsApp chat"
          className={`relative w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-white
            transition-all duration-300 ease-out
            hover:scale-110 active:scale-95
            ${isOpen ? "bg-gray-700 rotate-0" : "bg-[#25D366] hover:bg-[#1ebe5d]"}`}
        >
          <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90"}`}>
            <CloseIcon />
          </span>
          <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isOpen ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"}`}>
            <WhatsAppIcon />
          </span>
        </button>
      </div>
    </div>
  );
}
