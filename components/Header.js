"use client";

import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50 transition-all duration-300">
      <div className="max-w-[1140px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <svg className="w-8 h-8 text-amber fill-current" viewBox="0 0 24 24">
            <path d="M12 21c0-7 4-11 9-11-1 6-4 11-9 11z"/>
            <path d="M12 21C9 15 5 13 3 13c1 5 4 8 9 8z"/>
            <path d="M12 21v-6"/>
          </svg>
          <span className="font-display font-semibold text-xl text-white tracking-tight">
            Afrexco<span className="text-amber">.</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/90">
          <a href="#services" className="hover:text-amber transition-colors duration-200">Services</a>
          <a href="#about" className="hover:text-amber transition-colors duration-200">About</a>
          <a href="#gallery" className="hover:text-amber transition-colors duration-200">Gallery</a>
          <a href="#quote-section" className="hover:text-amber transition-colors duration-200">Contact</a>
        </nav>

        {/* Call CTA */}
        <div className="hidden md:block">
          <a
            href="#quote-section"
            className="inline-flex items-center gap-2 bg-leaf hover:bg-forest-deep text-white text-sm font-semibold px-5 py-2.5 rounded-pill border border-transparent transition-all duration-200 focus-visible:outline-3 focus-visible:outline-leaf"
          >
            Book A Call
            <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-[2.5]" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>
        </div>

        {/* Hamburger Menu Toggle (Mobile) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded text-white hover:text-amber transition-colors duration-200 focus:outline-none"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <svg className="w-6 h-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Nav Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-hairline/20 absolute top-20 left-0 w-full px-6 py-6 flex flex-col gap-4 text-white z-50">
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-base border-b border-white/10 hover:text-amber transition-colors duration-150"
          >
            Services
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-base border-b border-white/10 hover:text-amber transition-colors duration-150"
          >
            About
          </a>
          <a
            href="#gallery"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-base border-b border-white/10 hover:text-amber transition-colors duration-150"
          >
            Gallery
          </a>
          <a
            href="#quote-section"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-base border-b border-white/10 hover:text-amber transition-colors duration-150"
          >
            Contact
          </a>
          <a
            href="#quote-section"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 text-center bg-amber text-forest-deep py-3 rounded-pill font-semibold text-sm hover:bg-amber-dark transition-colors duration-150"
          >
            Book A Call
          </a>
        </div>
      )}
    </header>
  );
}
