export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-forest text-white scroll-reveal on-dark">
      <div className="max-w-[1140px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column - Benefits Text */}
        <div className="flex flex-col items-start">
          <span className="eyebrow light">Why Choose Us</span>
          <h2 className="text-white mb-6">
            Elite Craftsmanship &amp; Environmental Stewardship
          </h2>
          <p className="text-white/80 mb-8 max-w-[62ch]">
            We integrate premium landscape architecture with local horticultural intelligence. Our installations are engineered to thrive, improving soil quality and reducing water demand.
          </p>

          <ul className="flex flex-col gap-4 w-full">
            <li className="flex items-start gap-3 text-sm text-white/90">
              <span className="flex-none w-5 h-5 rounded-full bg-amber text-forest-deep flex items-center justify-center font-bold text-[10px]">✓</span>
              <div>
                <strong className="text-white block font-medium">Bespoke Architectural Design</strong>
                Custom conceptualization tailored to luxury villas in Lagos and Abuja.
              </div>
            </li>
            <li className="flex items-start gap-3 text-sm text-white/90">
              <span className="flex-none w-5 h-5 rounded-full bg-amber text-forest-deep flex items-center justify-center font-bold text-[10px]">✓</span>
              <div>
                <strong className="text-white block font-medium">Water-Smart Irrigation</strong>
                Rainwater capture and automated moisture monitoring.
              </div>
            </li>
            <li className="flex items-start gap-3 text-sm text-white/90">
              <span className="flex-none w-5 h-5 rounded-full bg-amber text-forest-deep flex items-center justify-center font-bold text-[10px]">✓</span>
              <div>
                <strong className="text-white block font-medium">Native Horticultural Selection</strong>
                Vetted plant choices resilient to seasonal wet-dry dynamics.
              </div>
            </li>
          </ul>
        </div>

        {/* Right Column - The Signature Amber Arch */}
        <div className="arch-container">
          <div className="arch-bg">
            <img
              src="/afrexco-images/01-hero-gardener-watering.jpg"
              alt="Gardener watering tropical plantings"
              className="arch-image"
              loading="lazy"
            />
          </div>
          {/* Small watermark/badge */}
          <div className="absolute bottom-4 left-0 right-0 text-center font-display text-[10px] tracking-[0.18em] uppercase text-white/50">
            ESTABLISHED 2025
          </div>
        </div>
      </div>
    </section>
  );
}
