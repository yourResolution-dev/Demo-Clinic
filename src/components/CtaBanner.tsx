import React from 'react';
import { ArrowRight, Stethoscope } from 'lucide-react';

interface CtaBannerProps {
  onOpenBooking: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-12 sm:py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner with sleek teal gradient matching screenshot */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#009688] via-[#0d9488] to-[#0284c7] shadow-xl shadow-teal-900/15 p-8 sm:p-12 text-white">
          
          {/* Subtle medical watermark glow */}
          <div className="absolute -right-10 -bottom-10 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            
            {/* Left Stethoscope / Icon Accent & Copy */}
            <div className="flex items-center gap-5 sm:gap-6 text-center md:text-left">
              <div className="hidden sm:flex w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 items-center justify-center flex-shrink-0">
                <Stethoscope className="w-8 h-8 text-white" />
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-2">
                  Take the First Step Towards Better Health.
                </h2>
                <p className="text-teal-50 text-sm sm:text-base max-w-xl">
                  Book a consultation with our expert doctors today.
                </p>
              </div>
            </div>

            {/* Right Button */}
            <div className="flex-shrink-0">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-[#0f2744] hover:bg-slate-100 font-bold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer group"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4 text-teal-600 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
