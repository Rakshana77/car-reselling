import React, { useState } from 'react';

const CarInputForm = () => {
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    year: '',
    condition: 'good'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Valuation request submitted!");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-surface text-on-surface">
      <div className="max-w-3xl mx-auto bg-surface-container-lowest p-6 md:p-10 rounded-2xl shadow-lg border border-outline-variant/10">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Get an Instant Valuation</h2>
          <p className="text-on-surface-variant text-base md:text-lg">Enter your car details below to see what it's worth in today's market.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="brand" className="text-sm font-semibold text-on-surface-variant">Car Brand</label>
              <input 
                type="text" 
                id="brand"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                placeholder="e.g. Honda" 
                className="bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="model" className="text-sm font-semibold text-on-surface-variant">Car Model</label>
              <input 
                type="text" 
                id="model"
                name="model"
                value={formData.model}
                onChange={handleChange}
                placeholder="e.g. City" 
                className="bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="year" className="text-sm font-semibold text-on-surface-variant">Registration Year</label>
              <select 
                id="year"
                name="year"
                value={formData.year}
                onChange={handleChange}
                className="bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                required
              >
                <option value="" disabled>Select year</option>
                {[...Array(15)].map((_, i) => {
                  const year = new Date().getFullYear() - i;
                  return <option key={year} value={year}>{year}</option>;
                })}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="condition" className="text-sm font-semibold text-on-surface-variant">Condition</label>
              <select 
                id="condition"
                name="condition"
                value={formData.condition}
                onChange={handleChange}
                className="bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
              >
                <option value="excellent">Excellent (Like new)</option>
                <option value="good">Good (Minor wear)</option>
                <option value="fair">Fair (Visible wear/dents)</option>
              </select>
            </div>
          </div>
          <button type="submit" className="w-full action-gradient text-white px-8 py-4 rounded-lg font-bold text-lg hover:opacity-95 active:scale-95 transition-transform mt-4">
            Calculate Value
          </button>
        </form>
      </div>
    </section>
  );
};

export default CarInputForm;
