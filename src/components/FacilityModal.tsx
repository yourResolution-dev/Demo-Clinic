import React from 'react';
import { X, CheckCircle2, Clock, UserCheck, ShieldCheck } from 'lucide-react';
import { Facility } from '../types/clinic.types';

interface FacilityModalProps {
  facility: Facility | null;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const FacilityModal: React.FC<FacilityModalProps> = ({
  facility,
  onClose,
  onOpenBooking,
}) => {
  if (!facility) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 max-h-[90vh] flex flex-col animate-modal-in">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Facility Details"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative h-56 sm:h-64 w-full bg-slate-900 overflow-hidden">
          <img
            src={facility.image}
            alt={facility.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f2744]/90 via-[#0f2744]/30 to-transparent flex items-end p-6">
            <div className="text-white">
              <span className="text-xs font-semibold text-teal-300 uppercase tracking-wider">
                {facility.subtitle}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold mt-1">
                {facility.title}
              </h3>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {facility.description}
          </p>

          {/* Quick Specifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100 text-xs">
              <Clock className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-slate-800">Operational Hours</p>
                <p className="text-slate-600 mt-0.5">{facility.availability}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100 text-xs">
              <UserCheck className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-slate-800">Medical Head</p>
                <p className="text-slate-600 mt-0.5">{facility.inCharge}</p>
              </div>
            </div>
          </div>

          {/* Key Features & Protocols */}
          <div>
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">
              Key Capabilities & Technology
            </h4>
            <div className="space-y-2">
              {facility.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer buttons */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Close
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs shadow-md transition-all cursor-pointer"
            >
              Book Relevant Service / Checkup
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
