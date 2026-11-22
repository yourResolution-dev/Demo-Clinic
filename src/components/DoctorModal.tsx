import React from 'react';
import { X, Star, Calendar, Clock, Award, GraduationCap, Globe, CheckCircle2, DollarSign } from 'lucide-react';
import { Doctor } from '../types/clinic.types';

interface DoctorModalProps {
  doctor: Doctor | null;
  onClose: () => void;
  onBookAppointment: (doctor: Doctor) => void;
}

export const DoctorModal: React.FC<DoctorModalProps> = ({
  doctor,
  onClose,
  onBookAppointment,
}) => {
  if (!doctor) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 max-h-[90vh] flex flex-col animate-modal-in">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Doctor Profile"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-slate-700 hover:text-black flex items-center justify-center shadow-md transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto p-6 sm:p-8">
          
          {/* Header with Photo and Quick Info */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-slate-100">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden flex-shrink-0 shadow-md border-2 border-teal-100">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-full object-cover object-top"
              />
              {doctor.badge && (
                <span className="absolute bottom-1 left-1 right-1 text-center bg-teal-600/95 text-white text-[9px] font-semibold py-0.5 rounded">
                  {doctor.badge}
                </span>
              )}
            </div>

            <div className="flex-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-700 text-xs font-bold border border-teal-200">
                  {doctor.speciality}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {doctor.experienceYears}+ Years Exp.
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-[#0f2744]">
                {doctor.name}
              </h3>
              <p className="text-xs font-semibold text-slate-600 mt-0.5">
                {doctor.title}
              </p>

              {/* Rating & Reviews */}
              <div className="flex items-center justify-center sm:justify-start gap-1.5 mt-2">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="text-xs font-bold text-slate-800">
                  {doctor.rating}
                </span>
                <span className="text-xs text-slate-500">
                  ({doctor.reviewsCount}+ Patient Reviews)
                </span>
              </div>
            </div>
          </div>

          {/* Detailed Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-5 border-b border-slate-100 text-xs">
            
            {/* OPD Timing */}
            <div className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
              <Clock className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-slate-800">Consultation Timings</p>
                <p className="text-slate-600 mt-0.5">{doctor.opdTiming}</p>
                <p className="text-[11px] text-teal-700 font-medium mt-0.5">
                  Available: {doctor.availableDays.join(', ')}
                </p>
              </div>
            </div>

            {/* Consultation Fee */}
            <div className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
              <Award className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-slate-800">Consultation Fee</p>
                <p className="text-slate-700 font-semibold text-sm mt-0.5">
                  {doctor.consultationFee} <span className="text-xs font-normal text-slate-500">(First Visit)</span>
                </p>
                <p className="text-[11px] text-emerald-600 font-medium mt-0.5">
                  Includes 7-day follow-up review
                </p>
              </div>
            </div>

            {/* Qualifications */}
            <div className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
              <GraduationCap className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-slate-800">Degrees & Qualifications</p>
                <p className="text-slate-600 mt-0.5 font-medium">{doctor.qualifications}</p>
                <p className="text-[11px] text-slate-500 mt-0.5">{doctor.education}</p>
              </div>
            </div>

            {/* Languages Spoken */}
            <div className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
              <Globe className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-slate-800">Languages Spoken</p>
                <p className="text-slate-600 mt-0.5 font-medium">{doctor.languages.join(', ')}</p>
                <p className="text-[11px] text-teal-700 mt-0.5">Comfortable multilingual care</p>
              </div>
            </div>

          </div>

          {/* Biography */}
          <div className="py-5">
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Clinical Background & Specialization
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {doctor.bio}
            </p>
          </div>

          {/* Action Footer */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Close Window
            </button>

            <button
              onClick={() => {
                onClose();
                onBookAppointment(doctor);
              }}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs shadow-md shadow-teal-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Consultation with {doctor.name.split(' ')[1] || doctor.name}</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
