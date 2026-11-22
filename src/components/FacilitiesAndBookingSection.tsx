import React, { useState, useEffect } from 'react';
import {
  CheckCircle2,
  Calendar,
  User,
  Phone,
  Clock,
  Sparkles,
  ChevronDown,
  AlertCircle,
  Stethoscope,
  Building,
  Info,
} from 'lucide-react';
import { SPECIALITIES, DOCTORS, FACILITIES } from '../data/clinicData';
import { AppointmentFormData, Facility } from '../types/clinic.types';

interface FacilitiesAndBookingSectionProps {
  preselectedSpeciality?: string;
  preselectedDoctorId?: string;
  onBookingSuccess: (data: AppointmentFormData) => void;
  onSelectFacility: (facility: Facility) => void;
}

export const FacilitiesAndBookingSection: React.FC<FacilitiesAndBookingSectionProps> = ({
  preselectedSpeciality,
  preselectedDoctorId,
  onBookingSuccess,
  onSelectFacility,
}) => {
  // Appointment Form State
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    email: '',
    speciality: preselectedSpeciality || '',
    preferredDoctor: preselectedDoctorId || '',
    preferredDate: '',
    preferredTime: '',
    notes: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync props if changed
  useEffect(() => {
    if (preselectedSpeciality) {
      setFormData((prev) => ({
        ...prev,
        speciality: preselectedSpeciality,
        // Reset doctor if not in new speciality
        preferredDoctor: preselectedDoctorId || '',
      }));
    }
  }, [preselectedSpeciality, preselectedDoctorId]);

  useEffect(() => {
    if (preselectedDoctorId) {
      const doctor = DOCTORS.find((d) => d.id === preselectedDoctorId);
      if (doctor) {
        setFormData((prev) => ({
          ...prev,
          preferredDoctor: doctor.id,
          speciality: doctor.specialityId,
        }));
      }
    }
  }, [preselectedDoctorId]);

  // Filter available doctors for chosen speciality
  const availableDoctors = formData.speciality
    ? DOCTORS.filter((d) => d.specialityId === formData.speciality)
    : DOCTORS;

  const validate = (): boolean => {
    const errors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errors.fullName = 'Please enter your full name';
    } else if (formData.fullName.trim().length < 3) {
      errors.fullName = 'Name must be at least 3 characters';
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Please enter your phone number';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      errors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.speciality) {
      errors.speciality = 'Please select a medical speciality';
    }

    if (!formData.preferredDate) {
      errors.preferredDate = 'Please select your preferred date';
    }

    if (!formData.preferredTime) {
      errors.preferredTime = 'Please select a convenient time slot';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onBookingSuccess(formData);
    }, 400);
  };

  // Facility checkmarks from screenshot
  const facilityCheckmarks = [
    'Advanced Diagnostic Laboratory',
    'Digital X-Ray & Imaging',
    'Fully Equipped Operation Theatre',
    '24+7 Emergency Care',
    'Comfortable Patient Rooms',
  ];

  // 4 photos matching the visual reference grid
  const facilityGridPhotos = [
    {
      id: 'digital-imaging',
      title: 'Digital Imaging & CT/X-Ray',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=600&auto=format&fit=crop',
    },
    {
      id: 'operation-theatre',
      title: 'Modular Operation Theatre',
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=600&auto=format&fit=crop',
    },
    {
      id: 'patient-rooms',
      title: 'Comfortable Patient Suite',
      image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=600&auto=format&fit=crop',
    },
    {
      id: 'diagnostic-laboratory',
      title: 'Automated Pathology Laboratory',
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=600&auto=format&fit=crop',
    },
  ];

  // Quick date options: Today, Tomorrow, Day after, etc.
  const dateOptions = [
    { label: 'Today (Walk-in / Urgent)', value: 'Today' },
    { label: 'Tomorrow', value: 'Tomorrow' },
    { label: 'Day After Tomorrow', value: 'In 2 Days' },
    { label: 'This Upcoming Weekend (Saturday)', value: 'This Saturday' },
    { label: 'Next Monday', value: 'Next Monday' },
  ];

  const timeSlots = [
    '09:00 AM - 10:00 AM',
    '10:30 AM - 11:30 AM',
    '12:00 PM - 01:00 PM',
    '02:30 PM - 03:30 PM',
    '04:30 PM - 05:30 PM',
    '06:00 PM - 07:00 PM',
    '07:15 PM - 08:00 PM',
  ];

  return (
    <section id="facilities" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Facilities Overview & 4-Grid Photo Gallery */}
          <div className="lg:col-span-7 flex flex-col">
            
            {/* Pill Tag */}
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-teal-500"></span>
              <span className="text-xs font-bold tracking-widest text-teal-700 uppercase">
                OUR FACILITIES
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2744] tracking-tight mb-3">
              Modern & Reliable Healthcare Facilities
            </h2>

            {/* Subtitle */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              Equipped with advanced technology to ensure accurate diagnosis and effective treatment.
            </p>

            {/* 5 Green Checkmarks List (matching screenshot) */}
            <div className="flex flex-col gap-2.5 mb-8">
              {facilityCheckmarks.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-teal-500 text-white flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 fill-teal-500 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* 4-Photo Grid (Matching Screenshot) */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {facilityGridPhotos.map((photo) => {
                const fullFacility = FACILITIES.find((f) => f.id === photo.id);

                return (
                  <div
                    key={photo.id}
                    onClick={() => fullFacility && onSelectFacility(fullFacility)}
                    className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-md cursor-pointer border border-slate-100 bg-slate-50 transition-all duration-300 h-36 sm:h-44"
                  >
                    <img
                      src={photo.image}
                      alt={photo.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-3">
                      <span className="text-xs font-semibold text-white group-hover:text-teal-200 transition-colors">
                        {photo.title}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Hint below gallery */}
            <p className="text-xs text-slate-400 mt-3 flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-teal-600" />
              <span>Click any facility card to view equipment specs and operational timings.</span>
            </p>

          </div>

          {/* Right Column: Book an Appointment Card (Matching Screenshot) */}
          <div id="book-appointment" className="lg:col-span-5">
            <div className="bg-[#f0f9ff]/70 border border-sky-100 rounded-3xl p-6 sm:p-8 shadow-xl shadow-sky-900/5 relative">
              
              {/* Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-extrabold text-[#0f2744] tracking-tight">
                  Book an Appointment
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Prompt confirmation with zero waiting in clinic queue.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Full Name */}
                <div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      placeholder="Full Name *"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (formErrors.fullName) setFormErrors({ ...formErrors, fullName: '' });
                      }}
                      className={`w-full pl-10 pr-4 py-3 bg-white rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all ${
                        formErrors.fullName ? 'border-red-400 bg-red-50/20' : 'border-slate-200 focus:border-teal-500'
                      }`}
                    />
                  </div>
                  {formErrors.fullName && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {formErrors.fullName}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (formErrors.phone) setFormErrors({ ...formErrors, phone: '' });
                      }}
                      className={`w-full pl-10 pr-4 py-3 bg-white rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all ${
                        formErrors.phone ? 'border-red-400 bg-red-50/20' : 'border-slate-200 focus:border-teal-500'
                      }`}
                    />
                  </div>
                  {formErrors.phone && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {formErrors.phone}
                    </p>
                  )}
                </div>

                {/* Select Speciality */}
                <div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Stethoscope className="w-4 h-4" />
                    </div>
                    <select
                      value={formData.speciality}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          speciality: e.target.value,
                          preferredDoctor: '', // reset doctor if speciality changes
                        });
                        if (formErrors.speciality) setFormErrors({ ...formErrors, speciality: '' });
                      }}
                      className={`w-full pl-10 pr-9 py-3 bg-white rounded-xl border text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 appearance-none transition-all ${
                        formErrors.speciality ? 'border-red-400 bg-red-50/20' : 'border-slate-200 focus:border-teal-500'
                      }`}
                    >
                      <option value="">Select Speciality *</option>
                      {SPECIALITIES.map((spec) => (
                        <option key={spec.id} value={spec.id}>
                          {spec.name}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                  {formErrors.speciality && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {formErrors.speciality}
                    </p>
                  )}
                </div>

                {/* Preferred Doctor (Filtered based on speciality) */}
                <div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <User className="w-4 h-4" />
                    </div>
                    <select
                      value={formData.preferredDoctor}
                      onChange={(e) =>
                        setFormData({ ...formData, preferredDoctor: e.target.value })
                      }
                      className="w-full pl-10 pr-9 py-3 bg-white rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 appearance-none transition-all"
                    >
                      <option value="">
                        {formData.speciality
                          ? 'Any Available Specialist'
                          : 'Select Preferred Doctor (Optional)'}
                      </option>
                      {availableDoctors.map((doc) => (
                        <option key={doc.id} value={doc.id}>
                          {doc.name} ({doc.speciality} • {doc.experienceYears}y exp)
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Preferred Date */}
                <div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <select
                      value={formData.preferredDate}
                      onChange={(e) => {
                        setFormData({ ...formData, preferredDate: e.target.value });
                        if (formErrors.preferredDate) setFormErrors({ ...formErrors, preferredDate: '' });
                      }}
                      className={`w-full pl-10 pr-9 py-3 bg-white rounded-xl border text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 appearance-none transition-all ${
                        formErrors.preferredDate ? 'border-red-400 bg-red-50/20' : 'border-slate-200 focus:border-teal-500'
                      }`}
                    >
                      <option value="">Preferred Date *</option>
                      {dateOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                  {formErrors.preferredDate && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {formErrors.preferredDate}
                    </p>
                  )}
                </div>

                {/* Preferred Time */}
                <div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Clock className="w-4 h-4" />
                    </div>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => {
                        setFormData({ ...formData, preferredTime: e.target.value });
                        if (formErrors.preferredTime) setFormErrors({ ...formErrors, preferredTime: '' });
                      }}
                      className={`w-full pl-10 pr-9 py-3 bg-white rounded-xl border text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 appearance-none transition-all ${
                        formErrors.preferredTime ? 'border-red-400 bg-red-50/20' : 'border-slate-200 focus:border-teal-500'
                      }`}
                    >
                      <option value="">Preferred Time *</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                  {formErrors.preferredTime && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {formErrors.preferredTime}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 py-3.5 px-6 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm shadow-md shadow-teal-600/30 hover:shadow-teal-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4" />
                      <span>Book Appointment</span>
                    </>
                  )}
                </button>

                {/* Demo Notice */}
                <p className="text-[11px] text-center text-slate-400 font-medium pt-1">
                  ⚡ Demo Website: Instant mock booking receipt generated on submission.
                </p>

              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
