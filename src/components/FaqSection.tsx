import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Package, ArrowRight, ShieldCheck } from 'lucide-react';
import { FAQS } from '../data/clinicData';

interface FaqSectionProps {
  onOpenHealthPackages: () => void;
  onOpenBooking: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({
  onOpenHealthPackages,
  onOpenBooking,
}) => {
  const [openId, setOpenId] = useState<string>(FAQS[0]?.id || '');

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? '' : id));
  };

  return (
    <section className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Heading & Health Packages Callout Card */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                <span className="text-xs font-bold tracking-widest text-teal-700 uppercase">
                  PATIENT ASSISTANCE
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2744] tracking-tight mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-8">
                Got questions regarding doctor consultations, timings, health insurance claims, or diagnostic tests? Find clear, straightforward answers here.
              </p>
            </div>

            {/* Health Packages Callout Card */}
            <div className="bg-gradient-to-br from-teal-50 to-sky-50 border border-teal-200/80 rounded-3xl p-6 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center mb-4">
                <Package className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#0f2744] mb-2">
                Preventive Health Checkup Packages
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Early detection saves lives. Explore curated packages for Cardiac Wellness, Executive Health, and Senior Citizen Care with up to 50% bundled savings.
              </p>
              <button
                onClick={onOpenHealthPackages}
                className="inline-flex items-center gap-2 text-xs font-bold text-teal-800 hover:text-teal-900 bg-white hover:bg-teal-100/50 px-4 py-2 rounded-xl border border-teal-200 transition-all cursor-pointer shadow-xs"
              >
                <span>View All Packages</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            {FAQS.map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <div
                  key={faq.id}
                  className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'border-teal-300 bg-teal-50/20 shadow-sm'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-bold text-[#0f2744]">
                      {faq.question}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'bg-teal-600 text-white rotate-180' : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-teal-100/60 pt-3 animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Need More Help banner */}
            <div className="mt-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-slate-600 font-medium">
                Have a specific clinical query or insurance question?
              </span>
              <button
                onClick={onOpenBooking}
                className="text-teal-700 hover:text-teal-800 font-bold whitespace-nowrap cursor-pointer hover:underline"
              >
                Speak with our Care Desk &rarr;
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
