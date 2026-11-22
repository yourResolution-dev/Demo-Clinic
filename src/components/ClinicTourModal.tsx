import React, { useState } from 'react';
import { X, Play, Volume2, ShieldCheck, CheckCircle2, Building2 } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface ClinicTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const ClinicTourModal: React.FC<ClinicTourModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
}) => {
  const [activeTab, setActiveTab] = useState<'video' | 'reception' | 'ot' | 'lab'>('video');

  if (!isOpen) return null;

  const tourStops = [
    {
      id: 'reception',
      label: 'Reception & Lounge',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=900&auto=format&fit=crop',
      desc: 'Air-conditioned tranquil waiting lounge with patient token display, warm beverage bar, and multilingual concierge desk.',
    },
    {
      id: 'ot',
      label: 'Operation Theatre',
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=900&auto=format&fit=crop',
      desc: 'Class-100 HEPA air-handling laminar flow suite equipped with Karl Storz endoscopy and computerized anaesthesia station.',
    },
    {
      id: 'lab',
      label: 'Pathology & Diagnostics',
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=900&auto=format&fit=crop',
      desc: 'High-throughput automated 5-part hematology and hormonal analyzer providing rapid, error-free diagnostics in minutes.',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 max-h-[90vh] flex flex-col animate-modal-in">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Clinic Tour"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video / Gallery Simulation Screen */}
        <div className="relative h-64 sm:h-80 w-full bg-slate-900 overflow-hidden flex items-center justify-center">
          {activeTab === 'video' ? (
            <div className="relative w-full h-full">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop"
                alt="Clinic Tour Preview"
                className="w-full h-full object-cover brightness-75"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-teal-500/90 flex items-center justify-center shadow-xl mb-3 animate-pulse">
                  <Play className="w-7 h-7 fill-white translate-x-0.5" />
                </div>
                <h4 className="text-xl font-bold">
                  Carewell Medical Clinic Virtual Tour
                </h4>
                <p className="text-xs text-teal-200 mt-1 max-w-md">
                  Experience our compassionate patient journey, infection-control standards, and welcoming architectural design.
                </p>
                <span className="mt-3 text-[11px] bg-black/50 px-3 py-1 rounded-full text-slate-300">
                  Simulation Video • Duration: 01:45
                </span>
              </div>
            </div>
          ) : (
            <div className="relative w-full h-full">
              {tourStops
                .filter((s) => s.id === activeTab)
                .map((stop) => (
                  <div key={stop.id} className="w-full h-full relative">
                    <img
                      src={stop.image}
                      alt={stop.label}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                      <div className="text-white">
                        <h4 className="text-xl font-bold">{stop.label}</h4>
                        <p className="text-xs text-slate-300 mt-1">{stop.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>

        {/* Navigation Tabs */}
        <div className="p-6 sm:p-7">
          <div className="flex items-center gap-2 overflow-x-auto pb-3 border-b border-slate-100">
            <button
              onClick={() => setActiveTab('video')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'video'
                  ? 'bg-teal-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Intro Tour Video
            </button>
            {tourStops.map((stop) => (
              <button
                key={stop.id}
                onClick={() => setActiveTab(stop.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === stop.id
                    ? 'bg-teal-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {stop.label}
              </button>
            ))}
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-5 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600" />
              <span>100% Sterile HEPA filtration</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600" />
              <span>Wheelchair Accessible Ramp</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600" />
              <span>Free Valet & Parking Bay</span>
            </div>
          </div>

          {/* Footer action */}
          <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={onClose}
              className="text-xs font-semibold text-slate-500 hover:text-slate-800"
            >
              Close Tour
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs shadow-md transition-all cursor-pointer"
            >
              Book an In-Person Consultation
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
