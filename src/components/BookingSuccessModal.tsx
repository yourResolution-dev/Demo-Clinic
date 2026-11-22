import React from 'react';
import { Check, X, Calendar, Clock, User, Phone, Stethoscope, Share2, AlertCircle, FileText } from 'lucide-react';
import { AppointmentFormData } from '../types/clinic.types';
import { DOCTORS, SPECIALITIES, CLINIC_INFO } from '../data/clinicData';

interface BookingSuccessModalProps {
  bookingData: AppointmentFormData | null;
  onClose: () => void;
  onBookAnother: () => void;
}

export const BookingSuccessModal: React.FC<BookingSuccessModalProps> = ({
  bookingData,
  onClose,
  onBookAnother,
}) => {
  if (!bookingData) return null;

  const doctor = DOCTORS.find((d) => d.id === bookingData.preferredDoctor);
  const speciality = SPECIALITIES.find((s) => s.id === bookingData.speciality);
  const doctorName = doctor ? doctor.name : 'Attending Specialist';
  const specialityName = speciality ? speciality.name : bookingData.speciality;
  const tokenNumber = `CW-2026-${Math.floor(1000 + Math.random() * 9000)}`;

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      `*Carewell Medical Clinic Appointment Demo*\n` +
      `Token: ${tokenNumber}\n` +
      `Patient: ${bookingData.fullName}\n` +
      `Speciality: ${specialityName}\n` +
      `Doctor: ${doctorName}\n` +
      `Date: ${bookingData.preferredDate}\n` +
      `Slot: ${bookingData.preferredTime}\n` +
      `Clinic Address: ${CLINIC_INFO.address}\n\n` +
      `*(Demo interaction made on ReSolution Clinic Template)*`
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 max-h-[95vh] flex flex-col animate-modal-in">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Confirmation"
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="overflow-y-auto p-6 sm:p-8">
          
          {/* Success Checkmark with soft teal pulse */}
          <div className="flex flex-col items-center text-center mb-6">
            <div className="w-16 h-16 rounded-full bg-teal-50 border-4 border-teal-100 flex items-center justify-center text-teal-600 mb-3 shadow-md shadow-teal-600/20">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>
            <span className="px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-[11px] font-bold uppercase tracking-wider mb-1">
              DEMO APPOINTMENT CONFIRMED
            </span>
            <h3 className="text-2xl font-extrabold text-[#0f2744]">
              Appointment Slot Reserved
            </h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm">
              We look forward to welcoming you at Carewell Medical Clinic. A confirmation SMS & WhatsApp have been simulated.
            </p>
          </div>

          {/* Token Card / Receipt */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-5 mb-5 space-y-3.5">
            
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Booking Reference
                </span>
                <p className="text-base font-extrabold text-teal-700 font-mono">
                  {tokenNumber}
                </p>
              </div>
              <span className="px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                Confirmed
              </span>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-slate-400 flex items-center gap-1 text-[11px]">
                  <User className="w-3 h-3 text-teal-600" /> Patient Name
                </span>
                <p className="font-bold text-slate-800 mt-0.5">{bookingData.fullName}</p>
              </div>

              <div>
                <span className="text-slate-400 flex items-center gap-1 text-[11px]">
                  <Phone className="w-3 h-3 text-teal-600" /> Phone
                </span>
                <p className="font-bold text-slate-800 mt-0.5">{bookingData.phone}</p>
              </div>

              <div>
                <span className="text-slate-400 flex items-center gap-1 text-[11px]">
                  <Stethoscope className="w-3 h-3 text-teal-600" /> Speciality
                </span>
                <p className="font-bold text-slate-800 mt-0.5">{specialityName}</p>
              </div>

              <div>
                <span className="text-slate-400 flex items-center gap-1 text-[11px]">
                  <User className="w-3 h-3 text-teal-600" /> Doctor
                </span>
                <p className="font-bold text-slate-800 mt-0.5">{doctorName}</p>
              </div>

              <div>
                <span className="text-slate-400 flex items-center gap-1 text-[11px]">
                  <Calendar className="w-3 h-3 text-teal-600" /> Preferred Date
                </span>
                <p className="font-bold text-slate-800 mt-0.5">{bookingData.preferredDate}</p>
              </div>

              <div>
                <span className="text-slate-400 flex items-center gap-1 text-[11px]">
                  <Clock className="w-3 h-3 text-teal-600" /> Time Slot
                </span>
                <p className="font-bold text-slate-800 mt-0.5">{bookingData.preferredTime}</p>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-200 text-[11px] text-slate-500">
              <span className="font-semibold text-slate-700">Location:</span> {CLINIC_INFO.address}
            </div>

          </div>

          {/* Important Notice Callout */}
          <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-3 mb-6 flex items-start gap-2.5 text-xs text-amber-800">
            <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold">Demonstration Notice</p>
              <p className="text-[11px] text-amber-700 mt-0.5">
                This is strictly a frontend demonstration designed to showcase clinic booking flows. No real appointment has been recorded or transmitted to medical servers.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={handleShareWhatsApp}
              className="w-full sm:w-1/2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-sm flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share Receipt</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onBookAnother();
              }}
              className="w-full sm:w-1/2 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Another</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
