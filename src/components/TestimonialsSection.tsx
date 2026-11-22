import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/clinicData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 sm:py-24 bg-[#f8fbfe] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Carousel Navigation */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-teal-500"></span>
              <span className="text-xs font-bold tracking-widest text-teal-700 uppercase">
                PATIENT STORIES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2744] tracking-tight">
              What Our Patients Say
            </h2>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              aria-label="Previous Testimonial"
              className="w-10 h-10 rounded-full bg-white border border-slate-200 hover:border-teal-400 text-slate-700 hover:text-teal-700 flex items-center justify-center shadow-xs hover:shadow-md transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next Testimonial"
              className="w-10 h-10 rounded-full bg-white border border-slate-200 hover:border-teal-400 text-slate-700 hover:text-teal-700 flex items-center justify-center shadow-xs hover:shadow-md transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials 3-Cards Row (Desktop shows 3, matches screenshot cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.slice(0, 3).map((item, idx) => {
            // Apply highlight to the active item in slide
            const isActive = idx === (currentIndex % 3);

            return (
              <div
                key={item.id}
                className={`bg-white rounded-3xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between ${
                  isActive
                    ? 'border-teal-300 shadow-xl shadow-teal-900/5 -translate-y-1'
                    : 'border-slate-200/80 hover:border-teal-200 shadow-sm hover:shadow-md'
                }`}
              >
                <div>
                  {/* Patient Info Header */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-teal-100"
                    />
                    <div>
                      <h3 className="text-sm font-bold text-[#0f2744]">
                        {item.name}
                      </h3>
                      {/* Star Rating */}
                      <div className="flex items-center gap-1 mt-0.5">
                        {Array.from({ length: item.rating }).map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Feedback Text */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic mb-4">
                    "{item.feedback}"
                  </p>
                </div>

                {/* Treatment details */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                  <span className="text-teal-700 font-semibold">{item.treatment}</span>
                  <span>{item.date}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel indicators */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                currentIndex === i ? 'w-8 bg-teal-600' : 'w-2 bg-slate-200 hover:bg-slate-300'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
