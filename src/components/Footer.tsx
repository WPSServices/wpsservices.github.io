import React from 'react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img
              src="/images/wps-services-logo.png"
              alt="WPS Services Logo"
              className="w-8 h-8"
            />
            <div>
              <p className="text-xl">WPS Services</p>
              <p className="text-slate-400">Ensuring welding quality, always.</p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-slate-400">Borger, Texas</p>
            <p className="text-slate-400">
              © {new Date().getFullYear()} WPS Services. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
