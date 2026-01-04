import { Shield, Mail, Phone } from 'lucide-react';
import React from 'react';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <img
              src="/src/assets/wps-services-logo.png"
              alt="WPS Services Logo"
              className="w-12 h-12"
            />
          <h1 className="text-5xl text-white">WPS Services</h1>
        </div>
        
        <p className="text-2xl text-blue-300 mb-8">
          Ensuring welding quality, always.
        </p>
        
        <p className="text-lg text-slate-300 max-w-3xl mb-12 leading-relaxed">
          Welcome to WPS Services, your trusted partner in welding procedure review and quality system improvement. 
          Located in Borger, Texas, we provide expert consultation to ensure the integrity and compliance of your welding operations. 
          Let us help you streamline your processes and achieve excellence in welding quality.
        </p>

        <div className="flex flex-wrap gap-6">
          <a 
            href="#contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors inline-flex items-center gap-2"
          >
            <Mail className="w-5 h-5" />
            Get in Touch
          </a>
          <a 
            href="tel:806-273-3194" 
            className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-lg transition-colors inline-flex items-center gap-2"
          >
            <Phone className="w-5 h-5" />
            806-273-3194
          </a>
        </div>
      </div>
    </section>
  );
}
