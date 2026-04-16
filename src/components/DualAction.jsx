import React from 'react';

const DualAction = () => {
  return (
    <section className="py-12 md:py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="relative h-64 md:h-96 rounded-xl overflow-hidden group cursor-pointer shadow-md">
          <img 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            alt="premium cars in showroom" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0jBBO7wQcrrfaiM5YioDyuMf9FpP2XuW19XzEXmTjkjy0GAqWtS8duMYNlCPwVSgbxUkYb-ZW4g4n_9KJqFnLILVbVnGniZ5TDNTARYh4VBXS3gioSDqHfEyPyz2S3US35TQ155w1kVi-t1K4Exj1sY3ATvLz-6LAmF1InGjQEdkuTX6dxz4UaD_tAwk3NmfalgqYXmQKwG7oyFQjTrHFuBvmupQyVsTFMJGKw2N52oYpe41t0ly4RzHzi_nOilfjdUasvjbqz-A"
          />
          <div className="absolute inset-0 bg-primary/60 flex flex-col justify-end p-6 md:p-12 text-white">
            <h3 className="text-2xl md:text-4xl font-extrabold mb-2 md:mb-4">Browse Cars</h3>
            <p className="text-sm md:text-lg opacity-90 mb-4 md:mb-6">Explore our curated selection of verified vehicles.</p>
            <button className="bg-white text-primary w-fit px-6 md:px-8 py-2 md:py-3 rounded-lg font-bold hover:bg-surface-bright transition-colors text-sm md:text-base">Explore Now</button>
          </div>
        </div>
        <div className="relative h-64 md:h-96 rounded-xl overflow-hidden group cursor-pointer shadow-md">
          <img 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            alt="dynamic close-up of a high-end black sports car" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2H291uz7fx1kBnwQnszaX3CoNyuVavxOQv7G5ZFeVjD3iYbuyZh7MUGWkTyoD9fZnXwX1pooxDbpYBhiO958uzZOKnz2SjyphR_W8XZO2iVy9CkefyR24WsjauuC33ZEdeCnqIJBYGNgJH12IlfBopOOjEixrzYV3DXWRYCuOo3Ip5ZeBJ5VyTY-b-HQ8rYF3mF5LjZpcrGLGJFZEv6GrDDFoaxUPLWFzecOGH-gN60bfpU7qZzLyCoKPVrGU8PcWGNxpzFQuP9A"
          />
          <div className="absolute inset-0 bg-slate-900/40 flex flex-col justify-end p-6 md:p-12 text-white">
            <h3 className="text-2xl md:text-4xl font-extrabold mb-2 md:mb-4">Sell My Car</h3>
            <p className="text-sm md:text-lg opacity-90 mb-4 md:mb-6">Get a professional valuation in under 2 minutes.</p>
            <button className="bg-transparent border border-white text-white w-fit px-6 md:px-8 py-2 md:py-3 rounded-lg font-bold hover:bg-white/10 transition-colors text-sm md:text-base">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DualAction;
