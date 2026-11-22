import React, { useState } from 'react';
import { ArrowRight, Star, Calendar, User, Award, CheckCircle2 } from 'lucide-react';
import { DOCTORS, SPECIALITIES } from '../data/clinicData';
import { Doctor } from '../types/clinic.types';

interface DoctorsSectionProps {
  onSelectDoctor: (doctor: Doctor) => void;
  onBookWithDoctor: (doctor: Doctor) => void;
  initialFilter?: string | null;
}

export const DoctorsSection: React.FC<DoctorsSectionProps> = ({
  onSelectDoctor,
  onBookWithDoctor,
  initialFilter,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>(initialFilter || 'all');
  const [showAllDoctors, setShowAllDoctors] = useState(false);

  // Sync if initialFilter changes
  React.useEffect(() => {
    if (initialFilter) {
      setActiveFilter(initialFilter);
    }
  }, [initialFilter]);

  const filteredDoctors = DOCTORS.filter((doc) => {
    if (activeFilter === 'all') return true;
    return doc.specialityId === activeFilter;
  });

  const displayedDoctors = showAllDoctors ? filteredDoctors : filteredDoctors.slice(0, 4);

  return (
    <section id="doctors" className="py-16 sm:py-24 bg-[#f8fbfe] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-teal-500"></span>
              <span className="text-xs font-bold tracking-widest text-teal-700 uppercase">
                OUR DOCTORS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2744] tracking-tight">
              Meet Our Expert Doctors
            </h2>
          </div>

          <button
            onClick={() => {
              setActiveFilter('all');
              setShowAllDoctors(!showAllDoctors);
            }}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-800 group cursor-pointer transition-colors"
          >
            <span>{showAllDoctors ? 'Show Top Doctors' : 'View All Doctors'}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-teal-600 text-white shadow-md shadow-teal-600/20'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            All Specialists ({DOCTORS.length})
          </button>
          {SPECIALITIES.map((spec) => (
            <button
              key={spec.id}
              onClick={() => setActiveFilter(spec.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeFilter === spec.id
                  ? 'bg-teal-600 text-white shadow-md shadow-teal-600/20'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {spec.name}
            </button>
          ))}
        </div>

        {/* Doctors Grid: Matches screenshot with 4 cards per row on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedDoctors.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 hover:border-teal-300 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group"
            >
              {/* Doctor Photo */}
              <div
                className="relative h-64 sm:h-72 overflow-hidden bg-slate-100 cursor-pointer"
                onClick={() => onSelectDoctor(doc)}
              >
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                {/* Optional Badge */}
                {doc.badge && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-teal-600/90 backdrop-blur-sm text-white text-[11px] font-semibold">
                    {doc.badge}
                  </span>
                )}

                {/* OPD timing pill */}
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-sm text-white text-[11px] font-medium flex items-center gap-1">
                  <span>{doc.opdTiming.split('&')[0]}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-1">
                <div className="mb-2">
                  <h3
                    onClick={() => onSelectDoctor(doc)}
                    className="text-base sm:text-lg font-bold text-[#0f2744] hover:text-teal-700 transition-colors cursor-pointer"
                  >
                    {doc.name}
                  </h3>
                  <p className="text-xs font-semibold text-teal-700">
                    {doc.speciality}
                  </p>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    {doc.experienceYears}+ Years Experience
                  </p>
                </div>

                {/* Rating & Reviews (Matches screenshot: Star 4.9 (320+ Reviews)) */}
                <div className="flex items-center gap-1.5 mb-4">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="text-xs font-bold text-slate-800">
                    {doc.rating}
                  </span>
                  <span className="text-xs text-slate-500">
                    ({doc.reviewsCount}+ Reviews)
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="mt-auto pt-3 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={() => onSelectDoctor(doc)}
                    className="flex-1 py-2 px-3 rounded-xl bg-slate-50 hover:bg-teal-50 text-slate-700 hover:text-teal-800 text-xs font-semibold border border-slate-200 hover:border-teal-200 transition-all cursor-pointer text-center"
                  >
                    View Profile
                  </button>

                  <button
                    onClick={() => onBookWithDoctor(doc)}
                    className="py-2 px-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center justify-center gap-1"
                    title={`Book consultation with ${doc.name}`}
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* When filtered and empty */}
        {displayedDoctors.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8">
            <User className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <p className="text-slate-700 font-semibold text-base">
              No doctors currently listed under this speciality filter.
            </p>
            <button
              onClick={() => setActiveFilter('all')}
              className="mt-3 px-4 py-2 rounded-xl bg-teal-600 text-white text-xs font-semibold"
            >
              View All Doctors
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
