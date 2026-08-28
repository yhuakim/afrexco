export default function About() {
  return (
    <section id="about" className="py-24 bg-paper scroll-reveal">
      <div className="max-w-[1140px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column - Image */}
        <div className="relative rounded-card overflow-hidden border border-hairline shadow-md group">
          <img
            src="/afrexco-images/02-about-aerial-grounds.jpg"
            alt="Luxury residential grounds aerial landscape"
            className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>

        {/* Right Column - Text */}
        <div className="flex flex-col items-start">
          <span className="eyebrow">About Afrexco</span>
          <h2 className="text-ink mb-6">
            Crafting Inspired Landscaping with Over 12 Years of Experience
          </h2>
          <p className="text-ink-body mb-6 max-w-[62ch]">
            At Afrexco Global Resources, we are dedicated to crafting exceptional outdoor spaces that inspire and delight. With a passion for creativity and a commitment to quality, we transform visions into realities, exceeding expectations with every project in Nigeria.
          </p>
          <p className="text-ink-body mb-8 max-w-[62ch]">
            From high-end residential estates in Lekki and Ikoyi to corporate head offices in Abuja, our sustainable approach balances tropical aesthetic brilliance with robust environmental health.
          </p>
          <a
            href="#quote-section"
            className="inline-flex items-center gap-2 bg-leaf hover:bg-forest-deep text-white text-sm font-semibold px-6 py-3.5 rounded-pill transition-all duration-185"
          >
            More About Us
            <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-[2.5]" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
