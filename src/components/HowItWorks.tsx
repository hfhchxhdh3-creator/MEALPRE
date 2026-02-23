import React from 'react';

export default function HowItWorks() {
  return (
    <section className="py-[100px] px-6 md:px-12 bg-cream" id="how">
      <div className="inline-block text-[11px] uppercase tracking-[1.5px] text-terracotta font-semibold mb-4">How It Works</div>
      <h2 className="font-serif text-[clamp(36px,4vw,56px)] font-black text-forest leading-[1.1] tracking-[-1.5px] mb-5">
        From zero to a full week<br />of meals in 60 seconds
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2px] mt-16 relative">
        <div className="hidden lg:block absolute top-10 left-[60px] right-[60px] h-[2px] bg-[linear-gradient(to_right,var(--sage),var(--terracotta))] z-0"></div>
        
        <div className="px-6 pt-0 relative z-10 fade-in">
          <div className="w-20 h-20 rounded-full flex items-center justify-center font-serif text-[28px] font-black mb-6 bg-forest text-cream">1</div>
          <div className="text-[17px] font-semibold text-forest mb-[10px]">Tell us your goals</div>
          <div className="text-sm leading-[1.6] opacity-60">Enter your calorie targets, macro ratios, food preferences, and cooking skill level. Takes 2 minutes.</div>
        </div>
        
        <div className="px-6 pt-0 relative z-10 fade-in">
          <div className="w-20 h-20 rounded-full flex items-center justify-center font-serif text-[28px] font-black mb-6 bg-sage text-white">2</div>
          <div className="text-[17px] font-semibold text-forest mb-[10px]">AI builds your week</div>
          <div className="text-sm leading-[1.6] opacity-60">Our AI generates 21 variety-rich meals that hit your macros exactly, using overlapping ingredients to cut costs.</div>
        </div>
        
        <div className="px-6 pt-0 relative z-10 fade-in">
          <div className="w-20 h-20 rounded-full flex items-center justify-center font-serif text-[28px] font-black mb-6 bg-gold text-forest">3</div>
          <div className="text-[17px] font-semibold text-forest mb-[10px]">Shop & prep once</div>
          <div className="text-sm leading-[1.6] opacity-60">Get a store-organized shopping list and a step-by-step Sunday prep guide. 2.5 hours. Done for the week.</div>
        </div>
        
        <div className="px-6 pt-0 relative z-10 fade-in">
          <div className="w-20 h-20 rounded-full flex items-center justify-center font-serif text-[28px] font-black mb-6 bg-terracotta text-white">4</div>
          <div className="text-[17px] font-semibold text-forest mb-[10px]">Eat. Adjust. Repeat.</div>
          <div className="text-sm leading-[1.6] opacity-60">Swap any meal you don't like. AI finds an alternative with identical macros. New week, new plan — automatically.</div>
        </div>
      </div>
    </section>
  );
}
