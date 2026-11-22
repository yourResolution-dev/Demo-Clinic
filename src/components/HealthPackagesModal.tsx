import React from 'react';
import { X, Check, Package, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { HEALTH_PACKAGES } from '../data/clinicData';
import { HealthPackage } from '../types/clinic.types';

interface HealthPackagesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookPackage: (pkg: HealthPackage) => void;
}

export const HealthPackagesModal: React.FC<HealthPackagesModalProps> = ({
  isOpen,
  onClose,
  onBookPackage,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 max-h-[90vh] flex flex-col animate-modal-in">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Packages"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-slate-100 bg-[#f8fbfe]">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-teal-500"></span>
            <span className="text-xs font-bold tracking-widest text-teal-700 uppercase">
              PREVENTIVE HEALTH SCREENINGS
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f2744]">
            Carewell Health Packages
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
            Comprehensive health evaluations designed for proactive prevention, early diagnosis, and overall vitality with free doctor review.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="overflow-y-auto p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {HEALTH_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-2xl border border-slate-200/90 hover:border-teal-300 p-6 flex flex-col justify-between shadow-xs hover:shadow-lg transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-700 text-[11px] font-bold border border-teal-200">
                      {pkg.tag}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {pkg.testsCount} Essential Tests
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-[#0f2744] mb-1">
                    {pkg.name}
                  </h4>
                  <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                    {pkg.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-4 pb-4 border-b border-slate-100">
                    <span className="text-2xl font-black text-teal-700">
                      {pkg.price}
                    </span>
                    <span className="text-xs text-slate-400 line-through">
                      {pkg.originalPrice}
                    </span>
                    <span className="text-xs font-bold text-emerald-600 ml-auto">
                      Save Up to 45%
                    </span>
                  </div>

                  {/* Includes List */}
                  <div className="space-y-2 mb-6">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Package Inclusions:
                    </p>
                    {pkg.includes.map((inc, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer action */}
                <div className="pt-3 border-t border-slate-100">
                  <p className="text-[11px] text-slate-400 mb-3">
                    <span className="font-semibold text-slate-600">Recommended for:</span> {pkg.recommendedFor}
                  </p>
                  <button
                    onClick={() => {
                      onClose();
                      onBookPackage(pkg);
                    }}
                    className="w-full py-2.5 px-4 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Book Package for {pkg.price}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
