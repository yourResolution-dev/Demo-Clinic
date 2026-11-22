import React from 'react';
import { Users, Stethoscope, Building2, Star } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const StatsSection: React.FC = () => {
  return (
    <section className="relative -mt-6 sm:-mt-8 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 p-6 sm:p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          
          {/* Stat 1: 10,000+ Happy Patients */}
          <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:px-4 first:pt-0 first:px-0">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 flex-shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#0f2744] tracking-tight">
                10,000+
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-500">
                Happy Patients
              </div>
            </div>
          </div>

          {/* Stat 2: 25+ Expert Doctors */}
          <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:px-4">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 flex-shrink-0">
              <Stethoscope className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#0f2744] tracking-tight">
                25+
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-500">
                Expert Doctors
              </div>
            </div>
          </div>

          {/* Stat 3: 15+ Medical Specialities */}
          <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:px-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#0f2744] tracking-tight">
                15+
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-500">
                Medical Specialities
              </div>
            </div>
          </div>

          {/* Stat 4: 4.9 Patient Satisfaction */}
          <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:px-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-500 flex-shrink-0">
              <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#0f2744] tracking-tight flex items-center gap-1">
                4.9 <span className="text-amber-500 text-xl">★</span>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-500">
                Patient Satisfaction
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
