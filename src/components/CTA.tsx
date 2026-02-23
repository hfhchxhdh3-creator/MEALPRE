import React from 'react';

export default function CTA() {
  return (
    <section className="py-[120px] px-6 md:px-12 bg-forest text-center relative overflow-hidden">
      <div className="absolute -top-[100px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(107,158,120,0.2)_0%,transparent_70%)] pointer-events-none"></div>
      
      <div className="relative z-10">
        <div className="inline-block text-[11px] uppercase tracking-[1.5px] text-gold font-semibold mb-4">Ready?</div>
        <h2 className="font-serif text-[clamp(40px,5vw,68px)] font-black text-white leading-[1.1] tracking-[-1.5px] mb-5">
          Your best week of eating<br />starts <em className="italic text-gold">right now</em>
        </h2>
        <p className="text-lg text-[rgba(255,255,255,0.6)] max-w-[480px] mx-auto mb-12 leading-[1.7]">
          Join 2,000+ people who stopped stressing about food and started actually hitting their goals.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="px-11 py-[18px] rounded-full font-sans text-base font-semibold cursor-pointer transition-all duration-250 border-2 border-transparent bg-terracotta text-white hover:bg-[#a8501e] hover:-translate-y-0.5">
            Plan My First Week Free
          </button>
          <button className="px-11 py-[18px] rounded-full font-sans text-base font-semibold cursor-pointer transition-all duration-250 border-2 border-[rgba(255,255,255,0.3)] bg-transparent text-white hover:border-white hover:-translate-y-0.5">
            See a Sample Plan
          </button>
        </div>
      </div>
    </section>
  );
}
