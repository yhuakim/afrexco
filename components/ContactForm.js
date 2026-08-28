"use client";

import { useState } from "react";

export default function ContactForm({ formData, setFormData }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) errors.message = "Message is required";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setFormSubmitted(true);
  };

  return (
    <section id="quote-section" className="py-24 bg-paper scroll-reveal">
      <div className="max-w-[1140px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side: Call Content */}
        <div className="lg:col-span-5">
          <span className="eyebrow">Get In Touch</span>
          <h2 className="font-display text-4xl md:text-[56px] leading-[1.05] tracking-tight font-semibold text-ink mb-6">
            Would You Like To Talk To Us?
          </h2>
          <p className="text-ink-body mb-8 max-w-[45ch]">
            Let&apos;s discuss your design intent. Fill out our site estimation request form and our horticultural consultant will evaluate your outdoor spaces.
          </p>
          
          <div className="flex flex-col gap-4 text-sm text-ink-body">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-cream flex items-center justify-center text-leaf font-bold">📍</span>
              <span>Kingsway Road (Alfred Rewane), Ikoyi, Lagos</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-cream flex items-center justify-center text-leaf font-bold">✉</span>
              <span>contact@afrexco.com.ng</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-cream flex items-center justify-center text-leaf font-bold">📞</span>
              <span>+234 (0) 800-AFREXCO</span>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Form */}
        <div className="lg:col-span-7 bg-cream border border-hairline rounded-card p-6 md:p-8 shadow-sm">
          {formSubmitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-leaf text-white flex items-center justify-center rounded-full text-2xl mx-auto mb-4">✓</div>
              <h3 className="font-display text-2xl font-semibold text-ink mb-2">Request Received!</h3>
              <p className="text-ink-body text-sm max-w-[40ch] mx-auto">
                Thank you, <strong>{formData.name}</strong>. Your estimate request for <strong>{formData.service}</strong> has been saved. Our team will contact you at <strong>{formData.email}</strong> shortly.
              </p>
              <button
                onClick={() => {
                  setFormSubmitted(false);
                  setFormData({
                    name: "",
                    email: "",
                    service: "Garden maintenance",
                    category: "Lawn Fix",
                    location: "Lagos",
                    area: "Select Sqft",
                    message: "",
                  });
                }}
                className="mt-6 inline-flex bg-leaf hover:bg-forest text-white text-xs font-semibold px-5 py-2.5 rounded-pill"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="form-name" className="text-xs font-semibold text-ink">Name</label>
                <input
                  type="text"
                  id="form-name"
                  name="name"
                  placeholder="Jane Flavius"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`bg-paper border ${formErrors.name ? "border-rose-500" : "border-hairline"} rounded-input p-3 text-sm focus:outline-none`}
                />
                {formErrors.name && (
                  <span className="text-rose-500 text-xs font-medium">{formErrors.name}</span>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="form-email" className="text-xs font-semibold text-ink">Email</label>
                <input
                  type="email"
                  id="form-email"
                  name="email"
                  placeholder="jane@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`bg-paper border ${formErrors.email ? "border-rose-500" : "border-hairline"} rounded-input p-3 text-sm focus:outline-none`}
                />
                {formErrors.email && (
                  <span className="text-rose-500 text-xs font-medium">{formErrors.email}</span>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="form-service" className="text-xs font-semibold text-ink">Service Needed</label>
                <select
                  id="form-service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="bg-paper border border-hairline rounded-input py-3 pl-4 pr-10 text-sm focus:outline-none text-ink font-medium"
                >
                  <option value="Garden maintenance">Lawn Restoration &amp; Upkeep</option>
                  <option value="Trimming &amp; pruning">Trimming &amp; Pruning</option>
                  <option value="Planting &amp; installation">Botanical Design &amp; Installation</option>
                  <option value="Water features">Reflecting Pools &amp; Irrigation</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="form-message" className="text-xs font-semibold text-ink">Message</label>
                <textarea
                  id="form-message"
                  name="message"
                  rows={4}
                  placeholder="Describe your design intent or garden size..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`bg-paper border ${formErrors.message ? "border-rose-500" : "border-hairline"} rounded-input p-3 text-sm focus:outline-none resize-none`}
                />
                {formErrors.message && (
                  <span className="text-rose-500 text-xs font-medium">{formErrors.message}</span>
                )}
              </div>

              <button
                type="submit"
                className="bg-leaf hover:bg-forest text-white font-semibold text-sm py-3.5 rounded-pill border border-transparent transition-colors duration-150 cursor-pointer mt-2 flex items-center justify-center gap-2 focus:outline-none"
              >
                Request a Quote
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
