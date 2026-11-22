import React from 'react';
import { ArrowRight, Search, Heart, Clock, UserCheck, Building2, ShieldCheck, HeartHandshake } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface HeroProps {
  onOpenBooking: () => void;
  onScrollToDoctors: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onScrollToDoctors }) => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-[#f0f9ff] via-[#f7fbfe] to-white pt-6 pb-16 lg:pt-12 lg:pb-20">
      {/* Subtle Background Watermark Plus Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] flex flex-wrap gap-16 justify-center items-center">
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className="text-slate-800 text-6xl font-light select-none">+</div>
        ))}
      </div>

      {/* Decorative Glow */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-40 right-10 w-80 h-80 bg-teal-200/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Subtitle, CTAs, Benefit Badges */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-teal-200 text-teal-800 shadow-xs mb-5">
              <span className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                <Heart className="w-3 h-3 fill-teal-600" />
              </span>
              <span className="text-xs font-semibold tracking-wide">
                {CLINIC_INFO.motto}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#0f2744] tracking-tight leading-[1.15] mb-5">
              Your Health Deserves{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-sky-600">
                Better Care.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed mb-8">
              {CLINIC_INFO.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm shadow-lg shadow-teal-600/30 hover:shadow-teal-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer group"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onScrollToDoctors}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 hover:border-teal-400 font-semibold text-sm shadow-xs hover:shadow-md transition-all cursor-pointer group"
              >
                <Search className="w-4 h-4 text-teal-600" />
                <span>Find a Doctor</span>
              </button>
            </div>

            {/* 4 Healthcare Benefit Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-slate-200/80 w-full">
              {CLINIC_INFO.benefits.map((benefit) => {
                const getIcon = () => {
                  switch (benefit.icon) {
                    case 'UserCheck':
                      return <UserCheck className="w-4 h-4 text-teal-600" />;
                    case 'Building2':
                      return <Building2 className="w-4 h-4 text-teal-600" />;
                    case 'ShieldCheck':
                      return <ShieldCheck className="w-4 h-4 text-teal-600" />;
                    case 'HeartHandshake':
                      return <HeartHandshake className="w-4 h-4 text-teal-600" />;
                    default:
                      return <Heart className="w-4 h-4 text-teal-600" />;
                  }
                };

                return (
                  <div key={benefit.title} className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center flex-shrink-0">
                      {getIcon()}
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">
                      {benefit.title}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Column: Doctor Photography & Open Today Floating Card */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            
            {/* Visual Photography Container */}
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Background Backdrop Shape */}
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 via-sky-500/10 to-teal-100/20 rounded-3xl transform rotate-2 scale-102"></div>
              
              {/* Main Doctor Image with rounded card & shadow */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=900&auto=format&fit=crop"
                  alt="Carewell Medical Clinic Doctors Team"
                  className="w-full h-[400px] sm:h-[480px] object-cover object-top"
                  loading="eager"
                />
                
                {/* Subtle soft gradient overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0f2744]/80 via-[#0f2744]/30 to-transparent flex items-end p-5">
                  <div className="text-white">
                    <p className="text-xs font-semibold uppercase tracking-wider text-teal-300">
                      Board Certified Physicians
                    </p>
                    <p className="text-base font-bold">
                      Multidisciplinary Care Team
                    </p>
                  </div>
                </div>
              </div>

              {/* "Open Today" Floating Info Card (matches design image) */}
              <div className="absolute bottom-6 -left-3 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-slate-100/80 flex items-center gap-3.5 animate-soft-pulse">
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 flex-shrink-0">
                  <Clock className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-bold text-slate-800">Open Today</span>
                  </div>
                  <span className="text-xs font-medium text-slate-500">
                    8:00 AM - 8:00 PM
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
