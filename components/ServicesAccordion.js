"use client";

import { useState } from "react";
import { servicesList } from "../app/data";

export default function ServicesAccordion() {
  const [activeAccordion, setActiveAccordion] = useState(1); // Default to Lawn Care open

  return (
    <section id="services" className="py-24 bg-cream scroll-reveal">
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <span className="eyebrow">Afrexco Services</span>
            <h2 className="text-ink">
              Exclusive Services Offered By Afrexco
            </h2>
          </div>
          <div>
            <p className="text-ink-body mb-6 max-w-[62ch]">
              Explore a range of expert solutions tailored to transform your outdoor spaces into personalized retreats. We handle every phase from botanical selection to irrigation structure.
            </p>
            <a
              href="#quote-section"
              className="inline-flex items-center gap-2 bg-forest hover:bg-forest-deep text-white text-sm font-semibold px-6 py-3.5 rounded-pill transition-all duration-180"
            >
              Show All Services
              <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-[2.5]" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </div>
        </div>

        {/* Interactive Accordion Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Accordion List (Left Column) */}
          <div className="lg:col-span-7 flex flex-col gap-2">
            {servicesList.map((service, index) => {
              const isOpen = activeAccordion === index;
              return (
                <div
                  key={index}
                  className="border border-hairline rounded-card bg-paper overflow-hidden transition-all duration-300 shadow-sm"
                >
                  <button
                    onClick={() => setActiveAccordion(isOpen ? -1 : index)}
                    className="w-full p-5 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className="font-display text-lg font-semibold text-ink">{service.title}</span>
                    <span className="w-8 h-8 rounded-full bg-cream flex items-center justify-center text-leaf font-bold text-lg select-none">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-6 border-t border-hairline/50 pt-4 text-sm text-ink-body leading-relaxed animate-fade-in">
                      {service.description}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Static Visual (Right Column) */}
          <div className="lg:col-span-5 relative rounded-card overflow-hidden border border-hairline min-h-[300px]">
            <img
              src="/afrexco-images/07-service-camellias-palms.jpg"
              alt="Detailed landscaping layout"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-transparent to-transparent flex items-end p-6">
              <div>
                <h4 className="text-white text-base font-semibold font-display mb-1">Tailored Horticulture</h4>
                <p className="text-white/80 text-xs">Carefully curated flora for Nigeria&apos;s microclimates.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
