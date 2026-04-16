import React from 'react';
import { formatPrice } from '../utils';

const PriceSimulation = () => {
  const cars = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Corolla Altis',
      year: 2019,
      variant: '1.8G Executive',
      value: 1830000,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOXlnvSkw8nKyRbBPcegMKRnE2KDF9QTMraMcWnMOToq47QzUD_ihGiDOjUFisEaC7zWqJLakyMZrfMSctLhaK61riXUlacN3q088qLu8okqT9ZN5pC4iGMDZFwWgu1MJzjJ1i4AavqAW0OrRBYUdIh8r4hU7MKZarkmZDCjMJHwbCKmJnDEVfE6t-3bZ7rwF0S9knAEBqhbCmMZBmBPliH8THxbO2XkTleJPLqAMHqTx4MGsTRJ0BAimrRjaiV104JNE33zctP6Q"
    },
    {
      id: 2,
      brand: 'Honda',
      model: 'Civic',
      year: 2020,
      variant: '1.8 i-VTEC',
      value: 2110000,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDanGSpvr0z0B5cVl5jPtlqR8MECN8hqNukCcleiOzzin4ehre92iGpBA_FDckugmpBRpm89cQHk9MUYx-TCTkg-oytxqEaMldfnj0zNPHKcL9W7lpB17gurKx3yivAhITwrQyaQQHMenvAXtTOxV0nMBJrZEUGcoFWiXhqpEFbDf56awDfovf2uWciTytvS1csYAC9M9AsLH54kptM7HKEz-rR9pLlEVkj0Y0mYa2H_vGD_RpwJOKbRVOQQqveDq32RCT0zh2mTXw"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-surface text-on-surface">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 md:gap-16 items-center">
        <div className="lg:w-1/3 space-y-4 md:space-y-6 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">Explore popular models near you</h2>
          <p className="text-on-surface-variant text-base md:text-lg">Current market values for certified pre-owned cars in major Indian cities. Updated every hour.</p>
          <button className="bg-primary hover:bg-primary/90 text-on-primary px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg active:scale-95 transition-all w-full lg:w-auto">Explore All Cars</button>
        </div>
        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full">
          {cars.map(car => (
            <div key={car.id} className="bg-surface-container-low p-4 md:p-6 rounded-xl border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-40 md:h-48 rounded-lg overflow-hidden mb-4 md:mb-6 bg-surface-dim">
                <img className="w-full h-full object-cover" alt={`${car.brand} ${car.model}`} src={car.image} />
              </div>
              <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start gap-2">
                <div>
                  <h4 className="text-lg md:text-xl font-bold">{car.brand} {car.model}</h4>
                  <p className="text-on-surface-variant text-sm md:text-base">{car.year} · {car.variant}</p>
                </div>
                <div className="text-left xl:text-right mt-2 xl:mt-0">
                  <span className="text-xs font-bold text-secondary-fixed-dim uppercase tracking-tighter">Est. Value</span>
                  <div className="text-xl md:text-2xl font-extrabold text-primary">{formatPrice(car.value)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriceSimulation;
