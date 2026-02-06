import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';
import React from 'react';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl text-slate-900 mb-4 text-center">Get in Touch</h2>
        <p className="text-center text-slate-600 mb-12">
          Whether you require a single procedure review or ongoing support for your welding quality management system,
          WPS Services is ready to assist. Contact us to discuss your project requirements, compliance needs,
          or consultation services, and learn how we can support your welding operations.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
            <h3 className="text-2xl text-slate-900 mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-slate-900">Located in</p>
                  <p className="text-slate-600">Borger, Texas</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-slate-900">Email</p>
                  <a 
                    href="mailto:WPSServices@gmail.com" 
                    className="text-blue-600 hover:underline"
                  >
                    WPSServicesTX@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-slate-900">Phone</p>
                  <a 
                    href="tel:806-273-3194" 
                    className="text-blue-600 hover:underline"
                  >
                    806-273-3194
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Linkedin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-slate-900">LinkedIn</p>
                  <a 
                    href="http://linkedin.com/in/patterson-john-a824288" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    John Patterson
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-8 rounded-xl border border-blue-200">
            <h3 className="text-2xl text-slate-900 mb-4">Why Choose WPS Services?</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span>Expert knowledge of industry codes and standards</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span>Comprehensive documentation and review services</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span>Proven track record with quality management systems</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span>Flexible service delivery including on-site support</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span>Located in Borger, Texas, serving clients nationwide</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
