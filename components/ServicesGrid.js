export default function ServicesGrid() {
  return (
    <section className="py-24 bg-paper scroll-reveal">
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="max-w-[620px] mb-12">
          <span className="eyebrow">Service Breakdown</span>
          <h2 className="text-ink">
            Expert Botanical &amp; Ground Care
          </h2>
          <p className="text-ink-body mt-2">
            Every card below is built to preserve contrast and legibility, featuring mandatory forest-deep scrims over imagery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Lawn Restoration */}
          <div className="relative rounded-card overflow-hidden aspect-[4/3] flex items-end p-5 group">
            <img
              src="/afrexco-images/03-service-lawn-mown.jpg"
              alt="Restored manicured lawn"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="service-scrim" />
            <div className="relative z-10">
              <h3 className="text-white font-display text-xl font-semibold mb-1">Lawn Restoration</h3>
              <p className="text-white/80 text-xs">Mowing and soil fertilization programs.</p>
            </div>
          </div>

          {/* Trimming & Pruning */}
          <div className="relative rounded-card overflow-hidden aspect-[4/3] flex items-end p-5 group">
            <img
              src="/afrexco-images/04-service-hedges-formal.jpg"
              alt="Precisely trimmed hedges"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="service-scrim" />
            <div className="relative z-10">
              <h3 className="text-white font-display text-xl font-semibold mb-1">Trimming &amp; Pruning</h3>
              <p className="text-white/80 text-xs">Shaping that maintains plants healthy and clean.</p>
            </div>
          </div>

          {/* Turf Installation */}
          <div className="relative rounded-card overflow-hidden aspect-[4/3] flex items-end p-5 group">
            <img
              src="/afrexco-images/05-service-turf-open-sky.jpg"
              alt="Turf installation under blue sky"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="service-scrim" />
            <div className="relative z-10">
              <h3 className="text-white font-display text-xl font-semibold mb-1">Turf Installation</h3>
              <p className="text-white/80 text-xs">Instant rolling green surfaces for estates.</p>
            </div>
          </div>

          {/* Native Planting */}
          <div className="relative rounded-card overflow-hidden aspect-[4/3] flex items-end p-5 group">
            <img
              src="/afrexco-images/06-service-planting-seedlings.jpg"
              alt="Horticultural native planting"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="service-scrim" />
            <div className="relative z-10">
              <h3 className="text-white font-display text-xl font-semibold mb-1">Native Planting</h3>
              <p className="text-white/80 text-xs">Beds curated for tropical soil and moisture.</p>
            </div>
          </div>

          {/* Landscape Design */}
          <div className="relative rounded-card overflow-hidden aspect-[4/3] flex items-end p-5 group">
            <img
              src="/afrexco-images/07-service-camellias-palms.jpg"
              alt="Luxury garden masterplan"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="service-scrim" />
            <div className="relative z-10">
              <h3 className="text-white font-display text-xl font-semibold mb-1">Landscape Design</h3>
              <p className="text-white/80 text-xs">Architectural drafting and botanical design.</p>
            </div>
          </div>

          {/* Water Features */}
          <div className="relative rounded-card overflow-hidden aspect-[4/3] flex items-end p-5 group">
            <img
              src="/afrexco-images/08-service-formal-reflecting-pools.jpg"
              alt="Reflecting pool water features"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="service-scrim" />
            <div className="relative z-10">
              <h3 className="text-white font-display text-xl font-semibold mb-1">Reflecting Pools</h3>
              <p className="text-white/80 text-xs">Artistic masonry and structural water basins.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
