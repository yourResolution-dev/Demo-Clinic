import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ClinicDemoPage } from './ClinicDemoPage';
import './styles/clinic.css';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Clinic Demo Routes */}
        <Route path="/" element={<ClinicDemoPage />} />
        <Route path="/demos/clinic" element={<ClinicDemoPage />} />

        {/* Fallback to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
