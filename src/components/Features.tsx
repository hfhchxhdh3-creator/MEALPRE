import React from 'react';

export default function Features() {
  return (
    <section className="py-[100px] px-6 md:px-12 bg-warm-white" id="features">
      <div className="max-w-[600px] mb-[72px]">
        <div className="inline-block text-[11px] uppercase tracking-[1.5px] text-terracotta font-semibold mb-4">Features</div>
        <h2 className="font-serif text-[clamp(36px,4vw,56px)] font-black text-forest leading-[1.1] tracking-[-1.5px] mb-5">
          Everything you need.<br />Nothing you don't.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-[rgba(30,58,47,0.1)] rounded-[24px] overflow-hidden">
        <div className="bg-forest p-[40px_36px] transition-colors relative col-span-1 md:col-span-2 fade-in">
          <div className="font-serif text-[60px] font-black opacity-[0.08] text-white leading-none absolute top-6 right-7">01</div>
          <div className="text-[36px] mb-5">🧠</div>
          <div className="font-serif text-[22px] font-bold text-cream mb-3 leading-[1.2]">AI Meal Generation That Gets You</div>
          <div className="text-sm leading-[1.7] text-cream opacity-75">Not just macro math — real meal variety. The AI learns what you like and gets smarter every week. It optimizes for ingredient overlap, prep time, and seasonal produce so meals stay fresh and affordable.</div>
          <span className="inline-block mt-4 bg-[rgba(255,255,255,0.15)] text-[rgba(255,255,255,0.8)] text-[11px] font-semibold px-3 py-[5px] rounded-full uppercase tracking-[0.8px]">Core Feature</span>
        </div>

        <div className="bg-warm-white p-[40px_36px] transition-colors hover:bg-light-sage relative fade-in">
          <div className="font-serif text-[60px] font-black opacity-[0.08] text-forest leading-none absolute top-6 right-7">02</div>
          <div className="text-[36px] mb-5">🛒</div>
          <div className="font-serif text-[22px] font-bold text-forest mb-3 leading-[1.2]">Smart Shopping Lists</div>
          <div className="text-sm leading-[1.7] text-charcoal opacity-65">Organized by store section. Includes exact quantities. Push directly to Instacart or Amazon Fresh with one tap.</div>
          <span className="inline-block mt-4 bg-light-sage text-sage text-[11px] font-semibold px-3 py-[5px] rounded-full uppercase tracking-[0.8px]">Pro</span>
        </div>

        <div className="bg-warm-white p-[40px_36px] transition-colors hover:bg-light-sage relative fade-in">
          <div className="font-serif text-[60px] font-black opacity-[0.08] text-forest leading-none absolute top-6 right-7">03</div>
          <div className="text-[36px] mb-5">🍽️</div>
          <div className="font-serif text-[22px] font-bold text-forest mb-3 leading-[1.2]">Restaurant Mode</div>
          <div className="text-sm leading-[1.7] text-charcoal opacity-65">Eating out? AI finds menu items at your restaurant that fit your remaining macros for the day.</div>
          <span className="inline-block mt-4 bg-light-sage text-sage text-[11px] font-semibold px-3 py-[5px] rounded-full uppercase tracking-[0.8px]">Pro</span>
        </div>

        <div className="bg-warm-white p-[40px_36px] transition-colors hover:bg-light-sage relative fade-in">
          <div className="font-serif text-[60px] font-black opacity-[0.08] text-forest leading-none absolute top-6 right-7">04</div>
          <div className="text-[36px] mb-5">♻️</div>
          <div className="font-serif text-[22px] font-bold text-forest mb-3 leading-[1.2]">Leftover Optimizer</div>
          <div className="text-sm leading-[1.7] text-charcoal opacity-65">Zero food waste. Every leftover gets used in a planned meal later in the week.</div>
        </div>

        <div className="bg-warm-white p-[40px_36px] transition-colors hover:bg-light-sage relative fade-in">
          <div className="font-serif text-[60px] font-black opacity-[0.08] text-forest leading-none absolute top-6 right-7">05</div>
          <div className="text-[36px] mb-5">💰</div>
          <div className="font-serif text-[22px] font-bold text-forest mb-3 leading-[1.2]">Cost Tracking</div>
          <div className="text-sm leading-[1.7] text-charcoal opacity-65">See exactly what your meals cost per day and per week. Average users spend $8.50/day.</div>
        </div>

        <div className="bg-warm-white p-[40px_36px] transition-colors hover:bg-light-sage relative fade-in">
          <div className="font-serif text-[60px] font-black opacity-[0.08] text-forest leading-none absolute top-6 right-7">06</div>
          <div className="text-[36px] mb-5">🎥</div>
          <div className="font-serif text-[22px] font-bold text-forest mb-3 leading-[1.2]">Video Prep Guides</div>
          <div className="text-sm leading-[1.7] text-charcoal opacity-65">Step-by-step video tutorials for batch cooking. Learn as you go, get faster every week.</div>
          <span className="inline-block mt-4 bg-light-sage text-sage text-[11px] font-semibold px-3 py-[5px] rounded-full uppercase tracking-[0.8px]">Pro</span>
        </div>
      </div>
    </section>
  );
}
