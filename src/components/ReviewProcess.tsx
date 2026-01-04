import React from 'react';
import {
  FileSearch,
  CheckCircle,
  FileEdit,
} from 'lucide-react';

export function ReviewProcess() {
  return (
    <section className="py-20 px-6 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl mb-4 text-center">
          Examples of Comprehensive Review
        </h2>

        {/* Source link */}
        <p className="text-center text-slate-300 mb-12 max-w-2xl mx-auto">
          <a
            href="/pdfs/reviewed-welding-doc.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 underline hover:text-blue-400 transition"
          >
            <span>
              Source for reviewed welding documents (NASA Public Record)
            </span>
            <span className="text-slate-400 group-hover:text-blue-400">↗</span>
          </a>
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* ================= WPS REVIEW ================= */}
          <div className="text-center">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileSearch className="w-8 h-8" />
            </div>
            <h3 className="text-xl mb-4">WPS Review</h3>

            <ul className="text-slate-300 space-y-1">
              <DocumentLink
                href="/pdfs/wps-markup.pdf"
                label="WPS Document Markup"
                type="PDF"
              />

              <DocumentLink
                href="/pdfs/wps-review.pdf"
                label="WPS Document Review"
                type="PDF"
              />

              <DocumentLink
                href="/docs/suggested-wps-addendum.docx"
                label="WPS Addenda Recommendation"
                type="Word"
              />

              <DocumentLink
                href="/pdfs/wps-pqr-summary.pdf"
                label="Comprehensive Summary"
                type="PDF"
              />
            </ul>
          </div>

          {/* ================= PQR REVIEW ================= */}
          <div className="text-center">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl mb-4">PQR Review</h3>

            <ul className="text-slate-300 space-y-1">
              <DocumentLink
                href="/pdfs/pqr-markup.pdf"
                label="PQR Document Markup"
                type="PDF"
              />

              <DocumentLink
                href="/pdfs/pqr-review.pdf"
                label="PQR Document Review"
                type="PDF"
              />

              <DocumentLink
                href="/docs/suggested-pqr-addendum.docx"
                label="PQR Recommendations"
                type="Word"
              />

              <DocumentLink
                href="/pdfs/wps-pqr-summary.pdf"
                label="Comprehensive Summary"
                type="PDF"
              />
            </ul>
          </div>

          {/* ================= DELIVERABLES ================= */}
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

/* ======================================================
   Reusable Document Link Component
====================================================== */

function DocumentLink({
  href,
  label,
  type,
}: {
  href: string;
  label: string;
  type: 'PDF' | 'Word';
}) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-between gap-3 rounded-md px-3 py-2
                   transition cursor-pointer
                   hover:bg-slate-800 hover:text-blue-400"
      >
        {/* LEFT: single-line, truncated label */}
        <span className="min-w-0 flex-1 text-left truncate overflow-hidden whitespace-nowrap">
          {label}
        </span>

        {/* RIGHT: file type (fixed, never wraps) */}
        <div className="flex items-center gap-2 text-xs text-slate-500
                        group-hover:text-blue-400 transition
                        shrink-0 whitespace-nowrap">
          <span>{type}</span>
          <span>↗</span>
        </div>
      </a>
    </li>
  );
}
