import React, { useState } from 'react';
import { formatPrice } from '../utils';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-8 bg-surface">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 md:gap-16">
        <div className="flex-1 space-y-6 md:space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-on-surface leading-[1.1]">
            Find your <span className="text-primary">perfect car.</span><br />Verified & Precise.
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-on-surface-variant max-w-lg leading-relaxed">
            Smart discovery. Verified conditions. The precision-engineered marketplace for high-value pre-owned vehicles in India.
          </p>
          <div className="bg-surface-container-low p-2 rounded-xl flex flex-col md:flex-row gap-2 max-w-2xl">
            <input 
              className="flex-1 bg-surface-container-lowest border-none rounded-lg px-4 md:px-6 py-3 md:py-4 text-base md:text-lg focus:ring-2 focus:ring-primary/20 transition-all font-body text-on-surface" 
              placeholder="Search by model, brand, or body style..." 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="action-gradient hover:opacity-95 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg active:scale-95 transition-transform">
              Browse Catalog
            </button>
          </div>
          <div className="flex flex-wrap gap-4 md:gap-8 items-center pt-2 md:pt-4">
            <a className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all" href="#">
              Sell your car instead <span className="material-symbols-outlined">arrow_forward</span>
            </a>
            <div className="flex flex-wrap gap-3 md:gap-6 text-on-surface-variant text-xs md:text-sm font-medium">
              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-tertiary text-base md:text-lg">check_circle</span> 200+ point check</span>
              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-tertiary text-base md:text-lg">check_circle</span> Transparent history</span>
              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-tertiary text-base md:text-lg">check_circle</span> Quick financing</span>
            </div>
          </div>
        </div>
        <div className="flex-1 relative w-full mt-8 lg:mt-0">
          <div className="aspect-[4/3] rounded-xl overflow-hidden bg-surface-container-high">
            <img 
              className="w-full h-full object-cover" 
              alt="luxury silver sedan" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl_3zxv1YoV5XZp2eU0SrGS3LEPwkYKkXNb1gDPGIE9PWy2K0g2WH0pKrG9XEnXts32vIRFVFsxUyUNVkc7ODnrhoitYqoVOBBiXOvYqQtFot3TPxHsoU5l6kVcuVx7FN_4eKhWH8BMB7rS3FQ9ysjUKga3M04Z3tkfXkKGWgbKt_8uGUNXoBgadJTs9CO1F8tfMC6F3zAnltVKd4LSIO92105yQ-fHRQp4ejc75MkbCyf4l4gSI39_Bdor7WLZmN0lkvIilcCf3w"
            />
          </div>
          <div className="absolute -bottom-4 -left-2 md:-bottom-8 md:-left-8 bg-surface-container-lowest p-3 md:p-6 rounded-xl shadow-lg border border-outline-variant/10 max-w-[180px] md:max-w-[240px]">
            <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-secondary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-on-secondary-container text-sm md:text-base">verified</span>
              </div>
              <span className="text-[10px] md:text-sm font-bold text-on-surface-variant uppercase tracking-wider">Verified Listing</span>
            </div>
            <div className="text-lg md:text-2xl font-extrabold text-primary brand-font tracking-tight">{formatPrice(4245000)}</div>
            <div className="text-[9px] md:text-xs text-tertiary font-semibold mt-1">Market competitive price</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
