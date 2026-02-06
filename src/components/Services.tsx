import {
  ClipboardCheck,
  FileText,
  MapPin,
  Database,
  FlaskConical
} from 'lucide-react';
import React from 'react';

const services = [
  {
    icon: ClipboardCheck,
    title: 'Welding Procedure Review',
    image: '/images/weld-proc-review.png',
    description:
      'Comprehensive review of welding procedures and welding procedure qualification records.'
  },
  {
    icon: FileText,
    title: 'Welding Procedure Creation',
    image: '/images/weld-proc-creation.png',
    description:
      'Creation of welding procedures from provided procedure qualification records (PQR).'
  },
  {
    icon: MapPin,
    title: 'On-Site Documentation',
    image: '/images/onsite-doc.png',
    description:
      'On-site documentation of welding variables and procedure qualification record (PQR) creation.'
  },
  {
    icon: Database,
    title: 'Record Transfer',
    image: '/images/record-transfer.png',
    description:
      'Secure transfer of welding records from paper to database or database to database.'
  },
  {
    icon: FlaskConical,
    title: 'Coordinate Mechanical Testing',
    image: '/images/mech-testing.png',
    description:
      'Work with trusted vendors to arrange transportation, preparation and testing of welding coupons.'
  }
];

export function Services() {
  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl text-slate-900 mb-4 text-center">
          Services Provided
        </h2>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          WPS Services offers comprehensive welding quality support tailored to the specific needs of each project.
          From detailed review of welding procedures and qualification records to on-site documentation
          and record management, our services are designed to ensure technical accuracy, traceability, and readiness
          for audits or inspections at any stage of a project.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden
                         hover:shadow-lg transition-shadow"
            >
              {/* IMAGE HEADER - inline styles so image stretches full width at unified height (project uses pre-built CSS; many Tailwind classes are not in the bundle) */}
              <div
                className="relative bg-slate-200"
                style={{
                  height: '10rem',
                  minHeight: '10rem',
                  width: '100%',
                  overflow: 'hidden',
                  borderTopLeftRadius: 'var(--radius-xl, 0.75rem)',
                  borderTopRightRadius: 'var(--radius-xl, 0.75rem)'
                }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'fill',
                    display: 'block'
                  }}
                />
                <div
                  className="bg-slate-900/20"
                  style={{ position: 'absolute', inset: 0 }}
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <service.icon className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
