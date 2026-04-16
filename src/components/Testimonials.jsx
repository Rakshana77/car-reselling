import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Found my dream SUV without visiting ten different showrooms. The inspection report provided by Precize was incredibly detailed.",
      name: "Ananya Sharma",
      role: "Marketing Director",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDuskyfkJSQeETWeyWZRHFb28x3364N5mdSAk4Y3X6zKrHUUaHL2Mly9zbmei3hjwjexP3Hf1Wkyq9dWMyUAY2zSGNPR0V1YQH2LDL9hy1yUcAVdQa9S_-7NvQj-17xusipX6W3PFh3AAyEoWJ-tsaIb0pxJaZhvIPMc_Oa8eJ6Ey0W_eD79PP9e1dr1YUhbnb1fzyj-1WLAMTtDNvDNXItTH-ftt6h0K0fjqUyrz-3iTWbegh4x1A6ys3eA19DD6bsfBwntTONqlQ"
    },
    {
      id: 2,
      quote: "The transparency is what sold me. No hidden fees, no last-minute haggling. What they quoted was exactly what I paid.",
      name: "Rahul Verma",
      role: "Entrepreneur",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyy0QBZmRlnawPMcp9HhgSZrkkldPQQxb3m-BRjPuIY6nGB9Js1ossD3eFULKNKbTcXRIMSwp7Xo8ByIrUtCpaDrV_vBun8v2Bn8Er3drcsf3XaPB7RzHDdQew86Mwdel5M9U8g-on-Y8hFfN5pVIBic_6tPWJrd3lYhaiV9b9GMiDEE7aFDQ8l3wAYNgmoQBBFpQMKV4BmOgKGpDAF7yNcyYhUqs1Ovv3OQBX58vssxs942wXCFJ0k5N-jzAihkGUaT5w22W2E-A"
    },
    {
      id: 3,
      quote: "Sold my Mercedes within 48 hours for ₹ 34 Lakhs. Significantly higher than local trade-in offers. Seamless digital experience.",
      name: "Siddharth Nair",
      role: "Financial Analyst",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4puZQEMMdz03wzKV_MjLA2GzrLH4gcHi-CtJ2IXv0Va0qMxzZkG06iinAs-3JWnPsDnAr9TIJeNwPLfpgkcDjp94IS_Q5K3WzpYtwbTF1OFbngfMimmBw5Cm9V_VldD1Cv0kfKmLG7UObNErW_ERjkuUhG8JXMP6XYuk25Y8sbLlcpOthd0vvBm2JJRwl5suUnDlYfT34Eipu5BGA_uzi2dqg5teXmvdM01ze-NGfCMYu46Q_F3PUMnr8NKDG-WNMsV_TaryvJEg"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-surface-container-high overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-center mb-12 md:mb-16">Real people. Real sales.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-surface-container-lowest p-6 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-1 text-tertiary mb-4 md:mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <p className="text-base md:text-lg italic text-on-surface-variant mb-6 md:mb-8 leading-relaxed">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden bg-surface-dim shrink-0">
                  <img className="w-full h-full object-cover" alt={testimonial.name} src={testimonial.image} />
                </div>
                <div>
                  <div className="font-bold text-sm md:text-base">{testimonial.name}</div>
                  <div className="text-xs md:text-sm text-on-surface-variant">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
