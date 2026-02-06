import { FileCheck, TrendingUp } from 'lucide-react';
import React from 'react';

export function About() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl text-slate-900 mb-8 text-center">About Our Services</h2>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          WPS Services provides independent welding procedure review and quality compliance consulting to support safe,
          reliable, and code-compliant welding operations. 
          We act as an owner's representative to verify that welding documentation meets applicable code requirements,
          project specifications, and quality expectations. Our focus is on identifying deficiencies early, reducing risk,
          and helping clients maintain consistent welding quality across their operations.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
            <FileCheck className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-2xl text-slate-900 mb-4">Expert Review</h3>
            <p className="text-slate-600">
              WPS Services specializes in welding procedure and welding procedure qualification record review, 
              acting as owner's representative to ensure quality and compliance.
            </p>
          </div>
          
          <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
            <TrendingUp className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-2xl text-slate-900 mb-4">Quality Improvement</h3>
            <p className="text-slate-600">
              We are committed to enhancing your welding quality management systems through comprehensive 
              consultation and process optimization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
