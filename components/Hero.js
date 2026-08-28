export default function Hero({ formData, handleInputChange, handleHeroSubmit }) {
  const selectClasses =
    "w-full bg-forest-deep/50 border border-white/20 rounded-input py-3 pl-4 pr-10 text-white text-sm font-medium appearance-none bg-no-repeat bg-[length:16px_16px] bg-[position:right_12px_center] focus:outline-none focus:border-amber focus:ring-1 focus:ring-amber";

  // Inline SVG chevron encoded as a CSS background-image
  const chevronBg = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='rgba(255,255,255,0.7)'%3E%3Cpath fill-rule='evenodd' d='M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06z' clip-rule='evenodd'/%3E%3C/svg%3E")`,
  };

  return (
    <section className="relative min-h-[100vh] flex items-end pb-20 md:pb-24 overflow-hidden bg-forest-deep text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/afrexco-images/09-whyus-villa-pool.jpg"
          alt=""
          className="w-full h-full object-cover opacity-50"
        />
        {/* Multi-stop scrim — darker at top for nav readability, darker at bottom for text */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(12,42,27,0.85)_0%,rgba(12,42,27,0.4)_35%,rgba(12,42,27,0.55)_65%,rgba(12,42,27,0.92)_100%)]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-[1140px] mx-auto px-6 w-full flex flex-col gap-12 md:gap-16 pt-32">
        {/* Main Hero Copy */}
        <div className="max-w-[820px]">
          {/* Eyebrow — slightly larger gap below to separate from headline */}
          <span className="eyebrow light mb-5 md:mb-6">Lawn &amp; Landscape Artisans</span>

          {/* Display heading — large with an italic accent word for visual punch */}
          <h1 className="text-white font-display text-[40px] md:text-[64px] lg:text-[72px] leading-[1.04] tracking-[-0.025em] font-bold mb-7">
            Turning Your Outdoor
            <br className="hidden md:block" />
            {" "}Space Into A <span className="text-amber italic">Paradise</span>
          </h1>

          {/* Subtext — one shade lighter, generous measure */}
          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-[56ch] mb-10">
            Nigeria&apos;s premier luxury landscaping and garden design company.
            We craft breathing, sustainable outdoor sanctuaries across Lagos and Abuja.
          </p>

          {/* Trust indicators — small social proof strip */}
          <div className="flex flex-wrap items-center gap-6 text-xs tracking-wide text-white/50 uppercase font-semibold">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber inline-block" />
              12+ Years Experience
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber inline-block" />
              250+ Projects Delivered
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber inline-block" />
              Lagos · Abuja · PH
            </span>
          </div>
        </div>

        {/* Form-Like Filter Card */}
        <form
          onSubmit={handleHeroSubmit}
          className="glass-panel border border-white/10 p-5 md:p-6 rounded-card w-full grid grid-cols-1 md:grid-cols-4 gap-5 items-end shadow-2xl"
        >
          <div className="flex flex-col gap-1.5">
            <label htmlFor="hero-category" className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/60">
              Category
            </label>
            <select
              id="hero-category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className={selectClasses}
              style={chevronBg}
            >
              <option value="Lawn Fix">Lawn Fix &amp; Restoration</option>
              <option value="Landscape Design">Landscape Design</option>
              <option value="Pools &amp; Features">Pools &amp; Water Features</option>
              <option value="Commercial upkeep">Commercial Maintenance</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="hero-location" className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/60">
              Location
            </label>
            <select
              id="hero-location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className={selectClasses}
              style={chevronBg}
            >
              <option value="Lagos">Lagos (Lekki / Ikoyi)</option>
              <option value="Abuja">Abuja (Maitama / Wuse)</option>
              <option value="Port Harcourt">Port Harcourt</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="hero-area" className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/60">
              Area
            </label>
            <select
              id="hero-area"
              name="area"
              value={formData.area}
              onChange={handleInputChange}
              className={selectClasses}
              style={chevronBg}
            >
              <option value="Select Sqft">Select Size (sqft)</option>
              <option value="Under 500">Under 500 sqft</option>
              <option value="500 - 2,000">500 – 2,000 sqft</option>
              <option value="2,000+">2,000+ sqft</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-amber hover:bg-amber-dark text-forest-deep font-bold text-sm py-3.5 rounded-pill flex items-center justify-center gap-2 border border-transparent transition-all duration-150 cursor-pointer focus:outline-none"
          >
            Get Price
            <svg className="w-4 h-4 fill-none stroke-current stroke-[2.5]" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
}
