import React from 'react';

const TrustSection = () => {
  const trustPoints = [
    { id: 1, icon: 'block', text: 'No hidden dealer commissions' },
    { id: 2, icon: 'phonelink_erase', text: 'No spam from pushy middlemen' },
    { id: 3, icon: 'history_edu', text: 'Zero RTO paperwork stress' },
    { id: 4, icon: 'support_agent', text: 'Dedicated buying concierge' }
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-surface">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6 md:mb-8 text-center md:text-left">What you don't have to worry about</h2>
          <div className="space-y-4 md:space-y-6">
            {trustPoints.map(point => (
              <div key={point.id} className="flex items-center gap-4 group">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary-container flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                  <span className="material-symbols-outlined text-lg md:text-xl">{point.icon}</span>
                </div>
                <span className="text-lg md:text-xl font-semibold">{point.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-1/2 relative w-full mt-8 md:mt-0">
          <div className="bg-surface-container-high rounded-xl aspect-square overflow-hidden shadow-lg">
            <img 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
              alt="overhead view of a clean minimalist workspace" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZXPB6iXJOEpsyuZY1nNapsKe7DuNDuDkMFxvD5P9WtZwKwA79QDp2pWIV_EtdaY3_u_y8hREP5lNsoniRjuX8FSQNheVO8K3k5kwHbL0K_LG0UCfEqmfnOd0KqX4p0FAiIC_d-YJ4lM0WFUjVwgPo3veyR3o6fHVKQxYNx63ICghP53F5MCXpyiM6VvV4dswlacdZt7XYC-OeoMq_DUP-xbi4GbfgezHVLAWTh5oYFZzx9ULg_xbVRuR0CtNCDIjyWX0n7BTwxZY"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
