import React from 'react';
import { X, CheckCircle2, ArrowRight, UserCheck, Stethoscope } from 'lucide-react';
import { Speciality, Doctor } from '../types/clinic.types';
import { DOCTORS } from '../data/clinicData';

interface SpecialityModalProps {
  speciality: Speciality | null;
  onClose: () => void;
  onBookForSpeciality: (specialityId: string) => void;
  onViewDoctorProfile: (doctor: Doctor) => void;
}

export const SpecialityModal: React.FC<SpecialityModalProps> = ({
  speciality,
  onClose,
  onBookForSpeciality,
  onViewDoctorProfile,
}) => {
  if (!speciality) return null;

  const relevantDoctors = DOCTORS.filter((d) => d.specialityId === speciality.id);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 max-h-[90vh] flex flex-col animate-modal-in">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Speciality Details"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto p-6 sm:p-8">
          
          {/* Header */}
          <div className="mb-6">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
              DEPARTMENT OF CLINICAL SPECIALITY
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f2744] mt-1">
              {speciality.name} Care
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              {speciality.description}
            </p>
          </div>

          {/* Department Highlights */}
          <div className="mb-6 p-4 rounded-2xl bg-teal-50/60 border border-teal-100">
            <h4 className="text-xs font-bold text-teal-800 uppercase tracking-wider mb-2.5">
              Clinical Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {speciality.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Common Conditions & Diagnostic Procedures */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
            
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">
                Conditions Treated
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {speciality.commonConditions.map((c, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">
                Procedures & Investigations
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {speciality.procedures.map((p, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Doctors available in this speciality */}
          <div className="mb-6">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">
              Consulting Specialists ({relevantDoctors.length})
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {relevantDoctors.map((doc) => (
                <div
                  key={doc.id}
                  onClick={() => {
                    onClose();
                    onViewDoctorProfile(doc);
                  }}
                  className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 hover:border-teal-300 bg-white hover:bg-slate-50 transition-all cursor-pointer group"
                >
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-10 h-10 rounded-full object-cover border border-teal-100"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-slate-800 group-hover:text-teal-700 truncate">
                      {doc.name}
                    </p>
                    <p className="text-[11px] text-slate-500 truncate">
                      {doc.experienceYears}+ yrs • OPD {doc.opdTiming.split('&')[0]}
                    </p>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-teal-600 group-hover:translate-x-0.5 transition-all" />
                </div>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Close
            </button>

            <button
              onClick={() => {
                onClose();
                onBookForSpeciality(speciality.id);
              }}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Stethoscope className="w-4 h-4" />
              <span>Book Appointment for {speciality.name}</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
