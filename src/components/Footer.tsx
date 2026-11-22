import React from 'react';
import {
  Plus,
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  ArrowRight,
  Shield,
  Heart,
} from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenHealthPackages: () => void;
  onOpenAgencyModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenBooking,
  onOpenHealthPackages,
  onOpenAgencyModal,
}) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#f8fbfe] border-t border-slate-200/80 pt-16 pb-8 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns (Matches Screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-12 border-b border-slate-200">
          
          {/* Col 1: Carewell Branding & Socials */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-teal-600 to-sky-500 flex items-center justify-center text-white shadow-sm">
                <Plus className="w-5 h-5 stroke-[3]" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-extrabold tracking-tight text-[#0f2744]">
                  CAREWELL
                </span>
                <span className="text-[9px] font-semibold tracking-wider text-slate-500 uppercase">
                  MEDICAL CLINIC
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-500 mb-6 leading-relaxed">
              {CLINIC_INFO.tagline}
            </p>

            {/* Social Icons (Matches screenshot circles: Insta, FB, YT, LinkedIn) */}
            <div className="flex items-center gap-2.5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center hover:bg-teal-700 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center hover:bg-teal-700 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center hover:bg-teal-700 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center hover:bg-teal-700 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (Matches Screenshot: Home, About Us, Doctors, Specialities, Facilities) */}
          <div>
            <h4 className="text-sm font-bold text-[#0f2744] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => scrollTo('home')}
                  className="hover:text-teal-700 transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('about')}
                  className="hover:text-teal-700 transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('doctors')}
                  className="hover:text-teal-700 transition-colors cursor-pointer"
                >
                  Doctors
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('specialities')}
                  className="hover:text-teal-700 transition-colors cursor-pointer"
                >
                  Specialities
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('facilities')}
                  className="hover:text-teal-700 transition-colors cursor-pointer"
                >
                  Facilities
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Patient Care (Matches Screenshot: Book Appointment, Health Packages, Testimonials, FAQs, Patient Guidelines) */}
          <div>
            <h4 className="text-sm font-bold text-[#0f2744] mb-4">
              Patient Care
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={onOpenBooking}
                  className="hover:text-teal-700 transition-colors cursor-pointer"
                >
                  Book Appointment
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenHealthPackages}
                  className="hover:text-teal-700 transition-colors cursor-pointer"
                >
                  Health Packages
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('testimonials')}
                  className="hover:text-teal-700 transition-colors cursor-pointer"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('faqs')}
                  className="hover:text-teal-700 transition-colors cursor-pointer"
                >
                  FAQs
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenHealthPackages}
                  className="hover:text-teal-700 transition-colors cursor-pointer"
                >
                  Patient Guidelines
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Us (Matches Screenshot: Kolkata, Phone, Email) */}
          <div>
            <h4 className="text-sm font-bold text-[#0f2744] mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                <span>{CLINIC_INFO.city}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-600 flex-shrink-0" />
                <a href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-teal-700">
                  {CLINIC_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-600 flex-shrink-0" />
                <a href={`mailto:${CLINIC_INFO.email}`} className="hover:text-teal-700">
                  {CLINIC_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Clinic Hours & Book Button (Matches Screenshot) */}
          <div>
            <h4 className="text-sm font-bold text-[#0f2744] mb-4">
              Clinic Hours
            </h4>
            <div className="space-y-2 text-xs mb-5">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-teal-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-slate-700">{CLINIC_INFO.timings.weekdays}</p>
                  <p className="text-slate-500 mt-0.5">{CLINIC_INFO.timings.sunday}</p>
                </div>
              </div>
            </div>

            {/* Green button from screenshot */}
            <button
              onClick={onOpenBooking}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#2e7d32] hover:bg-[#1b5e20] text-white font-semibold text-xs shadow-md transition-all cursor-pointer"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Attribution Bar (Matches Screenshot + ReSolution Attribution) */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            © 2026 Carewell Medical Clinic. A Demo Website by{' '}
            <button
              onClick={onOpenAgencyModal}
              className="text-teal-700 hover:text-teal-800 font-bold hover:underline cursor-pointer"
            >
              Resolution
            </button>
            .
          </p>

          <div className="flex items-center gap-4 text-[11px]">
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Care</span>
            <span>•</span>
            <button
              onClick={onOpenAgencyModal}
              className="text-teal-700 font-semibold hover:underline cursor-pointer"
            >
              Agency Portfolio
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
