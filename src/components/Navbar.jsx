import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md flex justify-between items-center px-4 md:px-8 h-20 max-w-full mx-auto">
      <div className="flex items-center gap-12">
        <span className="text-xl font-bold tracking-tighter text-indigo-900 dark:text-white brand-font">PRECIZE</span>
        <div className="hidden md:flex gap-8 items-center">
          <a className="text-indigo-900 dark:text-indigo-400 font-semibold border-b-2 border-indigo-900 font-manrope tracking-tight" href="#">Buy</a>
          <a className="text-slate-500 dark:text-slate-400 hover:text-indigo-900 transition-opacity duration-300 font-manrope tracking-tight" href="#">Sell</a>
          <a className="text-slate-500 dark:text-slate-400 hover:text-indigo-900 transition-opacity duration-300 font-manrope tracking-tight" href="#">Contact</a>
          <a className="text-slate-500 dark:text-slate-400 hover:text-indigo-900 transition-opacity duration-300 font-manrope tracking-tight" href="#">About</a>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <button className="bg-primary text-on-primary px-4 md:px-6 py-2.5 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300 active:scale-95">Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;
