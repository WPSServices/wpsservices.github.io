import { Award } from 'lucide-react';
import React from 'react';

const codes = [
  {
    title: 'ASME Section IX',
    description: 'With additional project specific data: ASME B31, Section I, Section VIII'
  },
  {
    title: 'API 1104, 650',
    description: 'American Petroleum Institute standards'
  },
  {
    title: 'AWS D1.1, D1.6',
    description: 'American Welding Society structural welding codes'
  },
  {
    title: 'Project Specific Requirements',
    description: 'With referenced documents provided'
  }
];

export function Codes() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Award className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h2 className="text-4xl text-slate-900 mb-4">Codes of Excellence</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We work with industry-leading standards to ensure your welding procedures meet all regulatory requirements
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {codes.map((code, index) => (
            <div 
              key={index}
              className="bg-slate-50 p-6 rounded-xl border-l-4 border-blue-600"
            >
              <h3 className="text-xl text-slate-900 mb-2">{code.title}</h3>
              <p className="text-slate-600">{code.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
