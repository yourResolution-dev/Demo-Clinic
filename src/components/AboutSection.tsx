import React from 'react';
import { Play, Award, FlaskConical, HeartHandshake, CheckCircle2, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface AboutSectionProps {
  onOpenClinicTour: () => void;
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenClinicTour,
  onOpenBooking,
}) => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Clinic Interior Photography with Play Button Overlay */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-50 group">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=900&auto=format&fit=crop"
                alt="Carewell Medical Clinic Modern Reception and Waiting Area"
                className="w-full h-[360px] sm:h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient tint */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f2744]/75 via-transparent to-black/20"></div>

              {/* Wall Signage Simulation */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/40 shadow-lg flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-md bg-teal-600 flex items-center justify-center text-white text-xs font-bold">
                  +
                </div>
                <div>
                  <span className="text-xs font-black tracking-wider text-[#0f2744] uppercase block">
                    CAREWELL
                  </span>
                  <span className="text-[9px] font-bold tracking-widest text-teal-700 uppercase block -mt-0.5">
                    MEDICAL CLINIC
                  </span>
                </div>
              </div>

              {/* Central Play Video Button Overlay (triggers tour modal) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={onOpenClinicTour}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/95 hover:bg-white text-teal-600 flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer group/btn"
                  aria-label="Watch Virtual Clinic Tour"
                  title="Watch Virtual Clinic Tour"
                >
                  <div className="relative flex items-center justify-center">
                    <span className="absolute -inset-2 rounded-full bg-teal-500/20 animate-ping"></span>
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-teal-600 translate-x-0.5 transition-transform group-hover/btn:scale-110" />
                  </div>
                </button>
              </div>

              {/* Caption pill at bottom */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white text-xs">
                <span className="bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full font-medium">
                  State-of-the-Art Architecture & Healing Environment
                </span>
                <span className="hidden sm:inline bg-teal-600/90 px-3 py-1.5 rounded-full font-semibold">
                  Take Virtual Tour
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: About Content & 3 Feature Badges */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            {/* Pill Tag */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-teal-500"></span>
              <span className="text-xs font-bold tracking-widest text-teal-700 uppercase">
                ABOUT CAREWELL
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2744] tracking-tight mb-5 leading-snug">
              Care Beyond Treatment
            </h2>

            {/* Description */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
              At Carewell Medical Clinic, we combine expert care, modern technology, and a patient-first approach to deliver trusted healthcare for every stage of life. Our modern clinic is designed to provide immediate access to multidisciplinary medical specialists and reliable diagnostic insights in a soothing, supportive atmosphere.
            </p>

            {/* 3 Key Feature Badges (Matching Screenshot) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mb-8">
              
              {/* Badge 1: Experienced Medical Team */}
              <div className="bg-slate-50 hover:bg-teal-50/50 p-4 rounded-2xl border border-slate-100 hover:border-teal-200 transition-all">
                <div className="w-10 h-10 rounded-xl bg-teal-100/70 text-teal-700 flex items-center justify-center mb-3">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-800 mb-1">
                  Experienced Medical Team
                </h3>
                <p className="text-xs text-slate-500 leading-normal">
                  Over 25+ board-certified MD & MS senior clinicians.
                </p>
              </div>

              {/* Badge 2: Advanced Diagnostics */}
              <div className="bg-slate-50 hover:bg-teal-50/50 p-4 rounded-2xl border border-slate-100 hover:border-teal-200 transition-all">
                <div className="w-10 h-10 rounded-xl bg-sky-100/70 text-sky-700 flex items-center justify-center mb-3">
                  <FlaskConical className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-800 mb-1">
                  Advanced Diagnostics
                </h3>
                <p className="text-xs text-slate-500 leading-normal">
                  Ultra-fast computerized laboratory & digital X-ray.
                </p>
              </div>

              {/* Badge 3: Personalized Patient Care */}
              <div className="bg-slate-50 hover:bg-teal-50/50 p-4 rounded-2xl border border-slate-100 hover:border-teal-200 transition-all">
                <div className="w-10 h-10 rounded-xl bg-emerald-100/70 text-emerald-700 flex items-center justify-center mb-3">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-800 mb-1">
                  Personalized Patient Care
                </h3>
                <p className="text-xs text-slate-500 leading-normal">
                  Compassionate care plans tailored to your wellbeing.
                </p>
              </div>

            </div>

            {/* Quick action button */}
            <div className="flex items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm shadow-md shadow-teal-600/25 transition-all cursor-pointer"
              >
                <span>Schedule a Consultation</span>
                <CheckCircle2 className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenClinicTour}
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-teal-700 transition-colors cursor-pointer"
              >
                <Play className="w-4 h-4 fill-slate-700" />
                <span>Watch 2-Min Clinic Video</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
