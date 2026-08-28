"use client";

import { useState } from "react";
import { testimonials } from "../app/data";

export default function Testimonials() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-cream scroll-reveal">
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="max-w-[620px] mx-auto text-center mb-12">
          <span className="eyebrow justify-center">Testimonials</span>
          <h2 className="text-ink">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-[800px] mx-auto bg-paper border border-hairline rounded-card p-8 md:p-12 shadow-sm text-center relative">
          <div className="text-amber text-lg tracking-widest mb-6">
            {testimonials[testimonialIndex].stars}
          </div>

          <p className="font-display text-xl md:text-2xl leading-relaxed text-ink max-w-[48ch] mx-auto mb-8">
            &ldquo;{testimonials[testimonialIndex].quote}&rdquo;
          </p>

          <div className="flex items-center justify-center gap-4">
            {/* Profile Initials/Avatar */}
            <div className="w-12 h-12 rounded-full bg-forest text-amber flex items-center justify-center font-display font-semibold text-sm select-none">
              {testimonials[testimonialIndex].initials}
            </div>
            <div className="text-left">
              <b className="text-ink font-semibold text-base block">{testimonials[testimonialIndex].name}</b>
              <span className="text-ink-body text-xs">{testimonials[testimonialIndex].location}</span>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full border border-leaf hover:bg-forest hover:text-white text-leaf flex items-center justify-center transition-colors duration-150 cursor-pointer focus:outline-none"
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <span className="text-sm font-semibold font-display text-ink">
              {testimonialIndex + 1} / {testimonials.length}
            </span>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full border border-leaf hover:bg-forest hover:text-white text-leaf flex items-center justify-center transition-colors duration-150 cursor-pointer focus:outline-none"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
