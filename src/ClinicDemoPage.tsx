import React, { useState, useEffect } from 'react';
import { ResolutionDemoBanner } from './components/ResolutionDemoBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsSection } from './components/StatsSection';
import { SpecialitiesSection } from './components/SpecialitiesSection';
import { AboutSection } from './components/AboutSection';
import { DoctorsSection } from './components/DoctorsSection';
import { FacilitiesAndBookingSection } from './components/FacilitiesAndBookingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { DoctorModal } from './components/DoctorModal';
import { SpecialityModal } from './components/SpecialityModal';
import { FacilityModal } from './components/FacilityModal';
import { ClinicTourModal } from './components/ClinicTourModal';
import { BookingSuccessModal } from './components/BookingSuccessModal';
import { HealthPackagesModal } from './components/HealthPackagesModal';
import { AgencyInquiryModal } from './components/AgencyInquiryModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BackToTop } from './components/BackToTop';

import { Doctor, Speciality, Facility, AppointmentFormData, HealthPackage } from './types/clinic.types';
import { CLINIC_INFO } from './data/clinicData';

export const ClinicDemoPage: React.FC = () => {
  // Page Title
  useEffect(() => {
    document.title = `${CLINIC_INFO.name} | Comprehensive Medical Care (ReSolution Demo)`;
  }, []);

  // Modals & Interactive states
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [selectedSpeciality, setSelectedSpeciality] = useState<Speciality | null>(null);
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);
  const [isClinicTourOpen, setIsClinicTourOpen] = useState(false);
  const [isHealthPackagesOpen, setIsHealthPackagesOpen] = useState(false);
  const [isAgencyModalOpen, setIsAgencyModalOpen] = useState(false);
  const [bookingSuccessData, setBookingSuccessData] = useState<AppointmentFormData | null>(null);

  // Preselections for booking form
  const [preselectedSpeciality, setPreselectedSpeciality] = useState<string>('');
  const [preselectedDoctorId, setPreselectedDoctorId] = useState<string>('');
  const [doctorSectionFilter, setDoctorSectionFilter] = useState<string | null>(null);

  // Smooth scroll helper
  const scrollToBooking = () => {
    const el = document.getElementById('book-appointment');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const scrollToDoctors = () => {
    const el = document.getElementById('doctors');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Handlers
  const handleSelectDoctor = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
  };

  const handleBookWithDoctor = (doctor: Doctor) => {
    setPreselectedDoctorId(doctor.id);
    setPreselectedSpeciality(doctor.specialityId);
    scrollToBooking();
  };

  const handleSelectSpeciality = (speciality: Speciality) => {
    setSelectedSpeciality(speciality);
  };

  const handleBookForSpeciality = (specialityId: string) => {
    setPreselectedSpeciality(specialityId);
    setPreselectedDoctorId('');
    scrollToBooking();
  };

  const handleViewAllSpecialities = () => {
    setDoctorSectionFilter('all');
    scrollToDoctors();
  };

  const handleBookingSuccess = (data: AppointmentFormData) => {
    setBookingSuccessData(data);
  };

  const handleBookPackage = (pkg: HealthPackage) => {
    // Determine target speciality for package
    if (pkg.id === 'pkg-cardiac') {
      setPreselectedSpeciality('cardiology');
    } else if (pkg.id === 'pkg-women') {
      setPreselectedSpeciality('gynaecology');
    } else {
      setPreselectedSpeciality('general-medicine');
    }
    scrollToBooking();
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased font-sans">
      
      {/* 1. Resolution Agency Demo Top Banner */}
      <ResolutionDemoBanner onOpenAgencyModal={() => setIsAgencyModalOpen(true)} />

      {/* 2. Responsive Navigation Bar */}
      <Navbar
        onOpenBooking={scrollToBooking}
        onOpenHealthPackages={() => setIsHealthPackagesOpen(true)}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* 3. Hero Section */}
        <Hero
          onOpenBooking={scrollToBooking}
          onScrollToDoctors={scrollToDoctors}
        />

        {/* 4. Stats Bar */}
        <StatsSection />

        {/* 5. Specialities Section */}
        <SpecialitiesSection
          selectedSpecialityId={preselectedSpeciality}
          onSelectSpeciality={handleSelectSpeciality}
          onViewAllSpecialities={handleViewAllSpecialities}
        />

        {/* 6. About Carewell Section */}
        <AboutSection
          onOpenClinicTour={() => setIsClinicTourOpen(true)}
          onOpenBooking={scrollToBooking}
        />

        {/* 7. Meet Our Expert Doctors Section */}
        <DoctorsSection
          onSelectDoctor={handleSelectDoctor}
          onBookWithDoctor={handleBookWithDoctor}
          initialFilter={doctorSectionFilter}
        />

        {/* 8. Facilities & Book an Appointment (2-Column Grid) */}
        <FacilitiesAndBookingSection
          preselectedSpeciality={preselectedSpeciality}
          preselectedDoctorId={preselectedDoctorId}
          onBookingSuccess={handleBookingSuccess}
          onSelectFacility={(facility) => setSelectedFacility(facility)}
        />

        {/* 9. Testimonials Carousel Section */}
        <TestimonialsSection />

        {/* 10. FAQs & Health Packages Callout */}
        <FaqSection
          onOpenHealthPackages={() => setIsHealthPackagesOpen(true)}
          onOpenBooking={scrollToBooking}
        />

        {/* 11. Sleek Healthcare CTA Banner */}
        <CtaBanner onOpenBooking={scrollToBooking} />
      </main>

      {/* 12. Comprehensive Footer */}
      <Footer
        onOpenBooking={scrollToBooking}
        onOpenHealthPackages={() => setIsHealthPackagesOpen(true)}
        onOpenAgencyModal={() => setIsAgencyModalOpen(true)}
      />

      {/* Modals */}
      <DoctorModal
        doctor={selectedDoctor}
        onClose={() => setSelectedDoctor(null)}
        onBookAppointment={handleBookWithDoctor}
      />

      <SpecialityModal
        speciality={selectedSpeciality}
        onClose={() => setSelectedSpeciality(null)}
        onBookForSpeciality={handleBookForSpeciality}
        onViewDoctorProfile={handleSelectDoctor}
      />

      <FacilityModal
        facility={selectedFacility}
        onClose={() => setSelectedFacility(null)}
        onOpenBooking={scrollToBooking}
      />

      <ClinicTourModal
        isOpen={isClinicTourOpen}
        onClose={() => setIsClinicTourOpen(false)}
        onOpenBooking={scrollToBooking}
      />

      <BookingSuccessModal
        bookingData={bookingSuccessData}
        onClose={() => setBookingSuccessData(null)}
        onBookAnother={() => {
          setBookingSuccessData(null);
          scrollToBooking();
        }}
      />

      <HealthPackagesModal
        isOpen={isHealthPackagesOpen}
        onClose={() => setIsHealthPackagesOpen(false)}
        onBookPackage={handleBookPackage}
      />

      <AgencyInquiryModal
        isOpen={isAgencyModalOpen}
        onClose={() => setIsAgencyModalOpen(false)}
      />

      {/* Interactive Utilities */}
      <FloatingWhatsApp />
      <BackToTop />

    </div>
  );
};
