export default function Footer() {
  return (
    <footer className="bg-forest text-white/70 py-16 border-t border-hairline/10 on-dark">
      <div className="max-w-[1140px] mx-auto px-6 flex flex-col gap-12">
        {/* Top Row: Links and Address */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5 flex flex-col items-start gap-4">
            <a href="#" className="flex items-center gap-2">
              <svg className="w-6 h-6 text-amber fill-current" viewBox="0 0 24 24">
                <path d="M12 21c0-7 4-11 9-11-1 6-4 11-9 11z"/>
                <path d="M12 21C9 15 5 13 3 13c1 5 4 8 9 8z"/>
                <path d="M12 21v-6"/>
              </svg>
              <span className="font-display font-semibold text-lg text-white tracking-tight">Afrexco.</span>
            </a>
            <p className="text-xs leading-relaxed max-w-[35ch]">
              Nigeria&apos;s premier luxury garden engineering firm. We construct botanical spaces tailored for tropical soil dynamics.
            </p>
          </div>

          <div className="md:col-span-3 flex flex-col gap-3 text-xs">
            <strong className="text-white block tracking-wider uppercase text-[10px]">Lagos Office</strong>
            <p className="leading-relaxed">
              Plot 14, Kingsway Road (Alfred Rewane)<br />
              Ikoyi, Lagos State<br />
              Nigeria
            </p>
          </div>

          <div className="md:col-span-2 flex flex-col gap-3 text-xs">
            <strong className="text-white block tracking-wider uppercase text-[10px]">Abuja Office</strong>
            <p className="leading-relaxed">
              8 Maitama Boulevard<br />
              Maitama District, FCT<br />
              Nigeria
            </p>
          </div>

          <div className="md:col-span-2 flex flex-col gap-2 text-xs">
            <strong className="text-white block tracking-wider uppercase text-[10px]">Site Links</strong>
            <a href="#services" className="hover:text-amber transition-colors duration-150">Services</a>
            <a href="#about" className="hover:text-amber transition-colors duration-150">About</a>
            <a href="#gallery" className="hover:text-amber transition-colors duration-150">Gallery</a>
            <a href="#quote-section" className="hover:text-amber transition-colors duration-150">Contact Us</a>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>
            &copy; 2025 Afrexco Global Resources Ltd. All rights reserved.
          </p>
          <p className="text-[11px] text-white/50 text-center md:text-right max-w-[50ch]">
            Photography via Unsplash: Adele Erolsky, Christian, Frames For Your Heart, Frederick Adegoke Snr., J. Young Jeong, John Fornander, Mathis Mauprivez, Petar Tonchev, SERGEI BEZZUBOV, Sandie Clarke, almani ماني, serena saponaro.
          </p>
        </div>
      </div>
    </footer>
  );
}
