import { ClipboardCheck, FileText, MapPin, Database, FlaskConical } from 'lucide-react';
import React from 'react';

const services = [
  {
    icon: ClipboardCheck,
    title: 'Welding Procedure Review',
    description: 'Comprehensive review of welding procedures and welding procedure qualification records.'
  },
  {
    icon: FileText,
    title: 'Welding Procedure Creation',
    description: 'Creation of welding procedures from provided procedure qualification records (PQR).'
  },
  {
    icon: MapPin,
    title: 'On-Site Documentation',
    description: 'On-site documentation of welding variables and procedure qualification record (PQR) creation.'
  },
  {
    icon: Database,
    title: 'Record Transfer',
    description: 'Secure transfer of welding records from paper to database or database to database.'
  },
  {
    icon: FlaskConical,
    title: 'Coordinate Mechanical Testing',
    description: 'Work with trusted vendors to arrange transportation, preparation and testing of welding coupons.'
  }
];

export function Services() {
  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl text-slate-900 mb-4 text-center">Services Provided</h2>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          Comprehensive welding quality solutions tailored to your project needs
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow"
            >
              <service.icon className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
