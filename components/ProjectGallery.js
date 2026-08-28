export default function ProjectGallery() {
  return (
    <section id="gallery" className="py-24 bg-paper scroll-reveal">
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="max-w-[620px] mb-12">
          <span className="eyebrow">Our Gallery</span>
          <h2 className="text-ink">
            A Showcase of Finished Gardens
          </h2>
          <p className="text-ink-body mt-2">
            Explore completed residential and commercial projects showcasing our standard of landscape masonry, turf architecture, and pool design.
          </p>
        </div>

        {/* 5-Tile Grid Mosaic */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[250px]">
          {/* Tile 1: Wide (6 cols, 1 row) */}
          <div className="md:col-span-6 relative rounded-card overflow-hidden border border-hairline shadow-sm group">
            <img
              src="/afrexco-images/10-gallery-building-pool.jpg"
              alt="Villa pool and garden layout"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-transparent to-transparent flex items-end p-5">
              <span className="font-display font-semibold text-white">Urban Garden Revival</span>
            </div>
          </div>

          {/* Tile 2: Standard (3 cols, 1 row) */}
          <div className="md:col-span-3 relative rounded-card overflow-hidden border border-hairline shadow-sm group">
            <img
              src="/afrexco-images/11-gallery-palm-avenue.jpg"
              alt="Palm tree avenue landscape"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-transparent to-transparent flex items-end p-5">
              <span className="font-display font-semibold text-white">Palm Promenade</span>
            </div>
          </div>

          {/* Tile 3: Standard (3 cols, 1 row) */}
          <div className="md:col-span-3 relative rounded-card overflow-hidden border border-hairline shadow-sm group">
            <img
              src="/afrexco-images/12-gallery-boundary-shrubs.jpg"
              alt="Manicured shrub boundary hedges"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-transparent to-transparent flex items-end p-5">
              <span className="font-display font-semibold text-white">Boundary Shrubbery</span>
            </div>
          </div>

          {/* Tile 4: Tall/Full (5 cols, 2 rows) - Span 2 rows */}
          <div className="md:col-span-5 md:row-span-2 relative rounded-card overflow-hidden border border-hairline shadow-sm group h-full">
            <img
              src="/afrexco-images/13-gallery-walking-path.jpg"
              alt="Walkway through tropical garden"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
              />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-transparent to-transparent flex items-end p-5">
              <span className="font-display font-semibold text-white">The Tranquil Walkway</span>
            </div>
          </div>

          {/* Tile 5: Large/Remaining (7 cols, 2 rows) */}
          <div className="md:col-span-7 md:row-span-2 relative rounded-card overflow-hidden border border-hairline shadow-sm group h-full">
            <img
              src="/afrexco-images/09-whyus-villa-pool.jpg"
              alt="Luxury estate pool landscaping"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-transparent to-transparent flex items-end p-5">
              <span className="font-display font-semibold text-white">Lekki Mansion Oasis</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
