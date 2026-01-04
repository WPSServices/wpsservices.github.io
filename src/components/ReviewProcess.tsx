import { FileSearch, CheckCircle, FileEdit } from 'lucide-react';
import React from 'react';

export function ReviewProcess() {
  return (
    <section className="py-20 px-6 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl mb-4 text-center">
          Examples of Comprehensive Review
        </h2>

        <p className="text-center text-slate-300 mb-12 max-w-2xl mx-auto">
          <a
            href="/pdfs/reviewed-welding-doc.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-400"
          >
            Source for reviewed welding documents (NASA standard review process)
          </a>
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* WPS Review */}
          <div className="text-center">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileSearch className="w-8 h-8" />
            </div>
            <h3 className="text-xl mb-4">WPS Review</h3>
            <ul className="text-slate-300 space-y-2">
              <li>
                <a
                  href="/pdfs/wps-markup.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-400"
                >
                  • WPS Document Markup
                </a>
              </li>
              <li>
                <a
                  href="/pdfs/wps-review.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-400"
                >
                  • WPS Document Review
                </a>
              </li>
              <li>
                <a
                  href="/docs/suggested-wps-addendum.docx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-400"
                >
                  • WPS Addenda Recommendation
                </a>
              </li>
              <li>
                <a
                  href="/pdfs/wps-pqr-summary.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-400"
                >
                  • Comprehensive Summary
                </a>
              </li>
            </ul>
          </div>

          {/* PQR Review */}
          <div className="text-center">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl mb-4">PQR Review</h3>
            <ul className="text-slate-300 space-y-2">
              <li>
                <a
                  href="/pdfs/pqr-markup.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-400"
                >
                  • PQR Document Markup
                </a>
              </li>
              <li>
                <a
                  href="/pdfs/pqr-review.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-400"
                >
                  • PQR Document Review
                </a>
              </li>
              <li>
                <a
                  href="/docs/suggested-pqr-addendum.docx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-400"
                >
                  • PQR Addenda/Correction Recommendation
                </a>
              </li>
              <li>
                <a
                  href="/pdfs/wps-pqr-summary.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-400"
                >
                  • Comprehensive Summary
                </a>
              </li>
            </ul>
          </div>

          {/* Deliverables */}
          <div className="text-center">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileEdit className="w-8 h-8" />
            </div>
            <h3 className="text-xl mb-4">Deliverables</h3>
            <ul className="text-slate-300 space-y-2">
              <li>• Word format documents</li>
              <li>• Annotated Review</li>
              <li>• Ready for client letterhead</li>
              <li>• Comprehensive summaries</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
