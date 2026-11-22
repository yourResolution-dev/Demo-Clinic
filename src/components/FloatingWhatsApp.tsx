import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    const message = encodeURIComponent(
      'Hello ReSolution! I just explored the Carewell Medical Clinic demo website and I would love to discuss developing a modern website for my clinic / healthcare practice.'
    );
    window.open(`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-5 sm:bottom-6 left-4 sm:left-6 z-40 flex items-center gap-2.5">
      {/* Floating Action Button */}
      <button
        onClick={handleClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#15803d] to-[#22c55e] text-white shadow-[0_8px_25px_rgba(22,163,74,0.45)] hover:shadow-[0_12px_32px_rgba(22,163,74,0.6)] flex items-center justify-center transition-all transform hover:scale-110 active:scale-95 cursor-pointer border-2 border-white/60 relative group"
        aria-label="Contact ReSolution on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-green-400 border-2 border-white"></span>
        </span>
      </button>

      {/* Tooltip on hover / desktop */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0f2744] text-white border border-teal-500/30 shadow-xl text-xs whitespace-nowrap animate-fadeIn">
          <span>Chat with ReSolution Agency</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-slate-400 hover:text-white"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}
    </div>
  );
};
