import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { SPECIALITIES } from '../data/clinicData';
import { Speciality } from '../types/clinic.types';

interface SpecialitiesSectionProps {
  selectedSpecialityId: string | null;
  onSelectSpeciality: (speciality: Speciality) => void;
  onViewAllSpecialities: () => void;
}

export const SpecialitiesSection: React.FC<SpecialitiesSectionProps> = ({
  selectedSpecialityId,
  onSelectSpeciality,
  onViewAllSpecialities,
}) => {
  // Custom SVG Icons matching the reference image
  const renderSpecialityIcon = (slug: string, isSelected: boolean) => {
    const strokeColor = isSelected ? '#009688' : '#0f766e';
    const fillColor = isSelected ? '#ccfbf1' : '#f0fdfa';

    switch (slug) {
      case 'cardiology':
        // Heart with ECG pulse line
        return (
          <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
            <path
              d="M16 27s-10-6.5-12-13.5C2 7.5 7 4 11.5 5.5 13.5 6.2 15 8 16 9.5c1-1.5 2.5-3.3 4.5-4C25 4 30 7.5 28 13.5 26 20.5 16 27 16 27z"
              stroke={strokeColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill={fillColor}
            />
            <path
              d="M7 16h4l2-4 3 8 2.5-5 1.5 2.5H25"
              stroke={strokeColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );

      case 'orthopaedics':
        // Clean medical bone icon
        return (
          <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
            <path
              d="M23 7a3 3 0 00-4 1.5l-8.5 11a3 3 0 10-3 3.5 3 3 0 003.5-3l8.5-11A3 3 0 0023 7z"
              stroke={strokeColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill={fillColor}
            />
            <circle cx="8" cy="22" r="2.5" stroke={strokeColor} strokeWidth="1.5" />
            <circle cx="23" cy="9" r="2.5" stroke={strokeColor} strokeWidth="1.5" />
          </svg>
        );

      case 'gynaecology':
        // Mother & child / feminine health emblem
        return (
          <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="11" r="5.5" stroke={strokeColor} strokeWidth="2" fill={fillColor} />
            <path
              d="M16 16.5v11M12 22h8M9 9a7 7 0 0114 0"
              stroke={strokeColor}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        );

      case 'paediatrics':
        // Smiling baby / child icon
        return (
          <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="10" stroke={strokeColor} strokeWidth="2" fill={fillColor} />
            <circle cx="12" cy="14" r="1.5" fill={strokeColor} />
            <circle cx="20" cy="14" r="1.5" fill={strokeColor} />
            <path
              d="M12 18.5c1.2 2 6.8 2 8 0"
              stroke={strokeColor}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M16 6c0-2 2-3 2-3"
              stroke={strokeColor}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        );

      case 'dermatology':
        // Skin epidermis layer & pore/hair follicle
        return (
          <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
            <path
              d="M6 22c5-1 15-1 20 0M6 26c5-1 15-1 20 0"
              stroke={strokeColor}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M16 6v10m-4-7l4 7 4-7"
              stroke={strokeColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="16" cy="18" r="2" fill={fillColor} stroke={strokeColor} strokeWidth="1.5" />
          </svg>
        );

      case 'ent':
        // Stylized ear icon
        return (
          <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
            <path
              d="M11 13c0-5 3.5-8 7.5-8s6.5 3 6.5 6.5c0 5-4.5 7.5-4.5 10.5 0 2-1.5 3.5-3.5 3.5S13 24 13 22"
              stroke={strokeColor}
              strokeWidth="2"
              strokeLinecap="round"
              fill={fillColor}
            />
            <path
              d="M17 11c0 2 1.5 3.5 1.5 5.5 0 1-.5 2-1.5 2"
              stroke={strokeColor}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        );

      case 'general-medicine':
        // First-aid kit with medical cross
        return (
          <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
            <rect x="5" y="10" width="22" height="16" rx="3" stroke={strokeColor} strokeWidth="2" fill={fillColor} />
            <path d="M12 10V7a2 2 0 012-2h4a2 2 0 012 2v3" stroke={strokeColor} strokeWidth="2" />
            <path d="M16 14v8M12 18h8" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
          </svg>
        );

      case 'dental-care':
        // Anatomical tooth icon
        return (
          <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
            <path
              d="M9 8c2.5-3 5.5-1 7-1s4.5-2 7 1c2.5 3 2 9 1 14s-2 6-4 6-2-4-4-4-2 4-4 4-3-1-4-6-1.5-11 1-14z"
              stroke={strokeColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill={fillColor}
            />
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <section id="specialities" className="py-16 sm:py-20 bg-slate-50/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-teal-500"></span>
              <span className="text-xs font-bold tracking-widest text-teal-700 uppercase">
                OUR SPECIALITIES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2744] tracking-tight">
              Comprehensive Medical Care
            </h2>
          </div>

          <button
            onClick={onViewAllSpecialities}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-800 group cursor-pointer transition-colors"
          >
            <span>View All Specialities</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 8 Specialities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          {SPECIALITIES.map((spec) => {
            const isSelected = selectedSpecialityId === spec.id;

            return (
              <div
                key={spec.id}
                onClick={() => onSelectSpeciality(spec)}
                className={`group relative p-4 sm:p-5 rounded-2xl flex flex-col items-center text-center cursor-pointer transition-all duration-300 ${
                  isSelected
                    ? 'bg-white ring-2 ring-teal-500 shadow-lg shadow-teal-500/15 -translate-y-1'
                    : 'bg-white hover:bg-slate-50/80 border border-slate-200/80 hover:border-teal-300 shadow-xs hover:shadow-md hover:-translate-y-1'
                }`}
              >
                {/* Icon Container */}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-3 transition-colors duration-300 ${
                    isSelected
                      ? 'bg-teal-50 border border-teal-200'
                      : 'bg-slate-50 group-hover:bg-teal-50/70 border border-slate-100 group-hover:border-teal-100'
                  }`}
                >
                  {renderSpecialityIcon(spec.slug, isSelected)}
                </div>

                {/* Speciality Title */}
                <h3
                  className={`text-xs sm:text-sm font-bold leading-snug transition-colors ${
                    isSelected ? 'text-teal-700' : 'text-slate-800 group-hover:text-teal-700'
                  }`}
                >
                  {spec.name}
                </h3>

                {/* Micro info on hover or active */}
                <span className="text-[10px] text-slate-400 mt-1 font-medium group-hover:text-teal-600 transition-colors">
                  {spec.doctorCount} Doctors
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
