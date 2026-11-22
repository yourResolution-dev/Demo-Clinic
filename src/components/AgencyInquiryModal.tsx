import React, { useState } from 'react';
import { X, Sparkles, MessageSquare, CheckCircle2, ArrowRight, Phone, Send } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface AgencyInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AgencyInquiryModal: React.FC<AgencyInquiryModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [clinicName, setClinicName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello ReSolution Agency! I am interested in building a modern healthcare clinic website like the Carewell Medical Clinic demo.\n` +
      `Clinic Name: ${clinicName || 'My Healthcare Center'}\n` +
      `Contact Person: ${contactPerson || 'Clinic Owner/Doctor'}\n` +
      `Phone: ${phone || 'N/A'}\n` +
      `Requirements: ${notes || 'Doctor roster, appointment booking system, and mobile responsive design.'}`
    );
    window.open(`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const agencyHighlights = [
    'Complete Doctor Roster & Profile Pages',
    'Interactive Multi-speciality Appointment Booking',
    'Automated WhatsApp Inquiry & Lead Delivery',
    'Lightning Fast Loading & SEO Ready',
    'Custom Clean White & Trustworthy Medical Palette',
    'Mobile-first Responsive Architecture',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 max-h-[92vh] flex flex-col animate-modal-in">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Agency Inquiry"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto p-6 sm:p-8">
          
          {/* Header */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-teal-500/10 to-sky-500/10 text-teal-800 text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-teal-600" />
              <span>RESOLUTION DIGITAL AGENCY</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f2744]">
              Want a Website Like This?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
              We design and develop high-converting, premium digital experiences for clinics, hospitals, diagnostic centers, and individual healthcare practitioners.
            </p>
          </div>

          {/* Highlights */}
          <div className="bg-slate-50 rounded-2xl p-4.5 border border-slate-200 mb-6">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5">
              Included in Your Clinic Website:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              {agencyHighlights.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {submitted ? (
            <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-teal-900">
                Inquiry Received!
              </h4>
              <p className="text-xs text-teal-800">
                Our agency specialist will reach out shortly. You can also chat directly on WhatsApp right now for immediate quote estimates.
              </p>
              <button
                onClick={handleWhatsAppDirect}
                className="mt-2 inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-teal-700 text-white font-semibold text-xs shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Open WhatsApp Now</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <input
                  type="text"
                  placeholder="Clinic / Hospital Name"
                  value={clinicName}
                  onChange={(e) => setClinicName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Your Name (Doctor / Manager)"
                  value={contactPerson}
                  onChange={(e) => setContactPerson(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <input
                  type="tel"
                  placeholder="Phone Number / WhatsApp"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <textarea
                rows={2}
                placeholder="Tell us about your requirements (optional)..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full sm:w-1/2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-600/25 flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </button>

                <button
                  type="submit"
                  className="w-full sm:w-1/2 py-3 px-4 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-md shadow-teal-600/25 flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>
              </div>
            </form>
          )}

          {/* Agency contact footer */}
          <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
            <span>ReSolution Agency Support</span>
            <span className="font-semibold text-teal-700">wa.me/{CLINIC_INFO.whatsappNumber}</span>
          </div>

        </div>

      </div>
    </div>
  );
};
