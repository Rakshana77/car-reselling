import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does the 200+ point check work?",
      answer: "Every vehicle goes through a rigorous inspection covering mechanical, electrical, and aesthetic criteria by our certified experts to ensure quality and safety."
    },
    {
      question: "Do you offer financing options?",
      answer: "Yes, we partner with major banks to provide quick and flexible financing options with attractive interest rates."
    },
    {
      question: "Can I test drive the car before buying?",
      answer: "Absolutely! You can book a doorstep trial, and we will bring the car to your home or office for you to test drive."
    },
    {
      question: "How long does the RC transfer take?",
      answer: "We handle all the RTO paperwork for you. Typically, the RC transfer process takes 15-30 days depending on the state authority."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-surface-container-low">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-center mb-10 md:mb-16">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-surface-container-lowest rounded-xl border border-outline-variant/10 overflow-hidden"
            >
              <button 
                className="w-full text-left px-4 md:px-6 py-4 md:py-5 flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-base md:text-lg">{faq.question}</span>
                <span className="material-symbols-outlined text-primary transition-transform duration-300" style={{ transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                  expand_more
                </span>
              </button>
              <div 
                className={`px-4 md:px-6 pb-4 md:pb-5 text-on-surface-variant text-sm md:text-base transition-all duration-300 origin-top ${openIndex === index ? 'block' : 'hidden'}`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
