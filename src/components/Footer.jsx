import React from 'react';

const Footer = () => {
  return (
    <>
      <section className="py-20 md:py-32 px-4 md:px-8 text-center bg-surface-container-lowest">
        <div className="max-w-3xl mx-auto space-y-6 md:space-y-10">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight brand-font">Ready when you are</h2>
          <p className="text-base md:text-xl text-on-surface-variant">Join thousands of people who have redefined their car buying experience with Precize India.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="action-gradient text-white px-8 md:px-10 py-4 md:py-5 rounded-lg text-lg md:text-xl font-bold active:scale-95 transition-transform">Browse Cars</button>
            <button className="border-2 border-primary text-primary px-8 md:px-10 py-4 md:py-5 rounded-lg text-lg md:text-xl font-bold hover:bg-primary/5 active:scale-95 transition-all">Sell Your Car</button>
          </div>
        </div>
      </section>

      <footer className="bg-slate-50 dark:bg-slate-950 py-12 md:py-16 px-4 md:px-8 border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 font-inter text-sm md:text-base">
          <div className="space-y-4 md:space-y-6">
            <span className="text-xl font-bold tracking-tighter text-indigo-900 dark:text-white brand-font">PRECIZE</span>
            <p className="text-slate-500 md:max-w-xs leading-relaxed">Precision automotive marketplace designed for the Indian market. Transparent, efficient, and secure.</p>
            <p className="text-slate-500">© 2024 Precize India. Licensed Automotive Dealer.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-12 gap-y-8">
            <div className="flex flex-col gap-3 md:gap-4">
              <h5 className="font-bold text-indigo-900 dark:text-indigo-400">Platform</h5>
              <a className="text-slate-500 hover:text-indigo-600 transition-colors" href="#">Buy a Car</a>
              <a className="text-slate-500 hover:text-indigo-600 transition-colors" href="#">Sell a Car</a>
              <a className="text-slate-500 hover:text-indigo-600 transition-colors" href="#">Valuation</a>
            </div>
            <div className="flex flex-col gap-3 md:gap-4">
              <h5 className="font-bold text-indigo-900 dark:text-indigo-400">Support</h5>
              <a className="text-slate-500 hover:text-indigo-600 transition-colors" href="#">Contact Support</a>
              <a className="text-slate-500 hover:text-indigo-600 transition-colors" href="#">Careers</a>
              <a className="text-slate-500 hover:text-indigo-600 transition-colors" href="#">How It Works</a>
            </div>
            <div className="flex flex-col gap-3 md:gap-4">
              <h5 className="font-bold text-indigo-900 dark:text-indigo-400">Legal</h5>
              <a className="text-slate-500 hover:text-indigo-600 transition-colors" href="#">Terms of Service</a>
              <a className="text-slate-500 hover:text-indigo-600 transition-colors" href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
