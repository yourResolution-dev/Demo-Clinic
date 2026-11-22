import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to Top"
      className="fixed bottom-5 sm:bottom-6 right-4 sm:right-6 z-40 w-11 h-11 rounded-full bg-white text-slate-700 hover:text-teal-600 border border-slate-200 shadow-lg hover:shadow-xl flex items-center justify-center transition-all transform hover:-translate-y-1 active:translate-y-0 cursor-pointer group"
    >
      <ChevronUp className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
    </button>
  );
};
