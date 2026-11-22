import React from 'react';
import { ArrowLeft, MessageSquare, Sparkles } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface ResolutionDemoBannerProps {
  onOpenAgencyModal: () => void;
}

export const ResolutionDemoBanner: React.FC<ResolutionDemoBannerProps> = ({ onOpenAgencyModal }) => {
  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = '/';
    }
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      'Hi ReSolution Team! I explored the Carewell Medical Clinic demo website and I am interested in building a modern, high-converting website for my healthcare clinic / hospital.'
    );
    window.open(`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <aside
      aria-label="Demo website notice and agency options"
      className="bg-[#0b1e33] text-xs sm:text-sm text-slate-200 border-b border-teal-500/30 py-2 sm:py-2.5 px-3 sm:px-6 w-full relative z-50 shadow-sm"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
        {/* Left: Back Link & Showcase Tag */}
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center sm:justify-start">
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-1.5 text-teal-400 hover:text-white font-medium transition-colors group cursor-pointer text-xs"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
            <span>Back to ReSolution</span>
          </button>
          <span className="hidden sm:inline-block text-slate-600">|</span>
          <span className="inline-flex items-center gap-1.5 text-slate-300 font-light text-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            <span className="font-semibold text-teal-300">ReSolution Showcase:</span>
            <span className="hidden md:inline">Carewell Medical Clinic Premium Healthcare Demo</span>
          </span>
        </div>

        {/* Right: CTA Buttons */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-800/80 border border-teal-400/30 text-teal-300 hover:bg-teal-900/60 hover:text-white transition-all cursor-pointer font-medium text-[11px] sm:text-xs"
          >
            <MessageSquare className="w-3 h-3 text-teal-400" />
            <span>WhatsApp Us</span>
          </button>

          <button
            onClick={onOpenAgencyModal}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold hover:from-teal-400 hover:to-emerald-400 hover:shadow-[0_0_15px_rgba(20,184,166,0.5)] transition-all cursor-pointer text-[11px] sm:text-xs"
          >
            <Sparkles className="w-3 h-3 text-white" />
            <span>Want a Website Like This?</span>
          </button>
        </div>
      </div>
    </aside>
  );
};
