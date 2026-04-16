import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: 'search',
      title: '1. Browse curated listings',
      description: 'Search through thousands of verified high-quality cars with detailed inspection reports.'
    },
    {
      id: 2,
      icon: 'event_available',
      title: '2. Book a doorstep trial',
      description: 'Select a time that works for you. We bring the car to your home or office for a trial.'
    },
    {
      id: 3,
      icon: 'account_balance_wallet',
      title: '3. Easy ownership',
      description: 'We handle RC transfer, insurance, and financing. Get the keys and enjoy your new ride.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Buying a car, simplified</h2>
          <p className="text-on-surface-variant text-base md:text-lg">We've removed the stress from finding and purchasing your next vehicle.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map(step => (
            <div key={step.id} className="bg-surface-container-lowest p-8 md:p-10 rounded-xl space-y-4 md:space-y-6 transition-transform hover:-translate-y-1 shadow-sm hover:shadow-md">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg action-gradient flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-2xl md:text-3xl">{step.icon}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold">{step.title}</h3>
              <p className="text-on-surface-variant leading-relaxed text-sm md:text-base">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
