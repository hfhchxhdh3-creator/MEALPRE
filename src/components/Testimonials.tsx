import React from 'react';

export default function Testimonials() {
  return (
    <section className="py-[100px] px-6 md:px-12 bg-cream">
      <div className="inline-block text-[11px] uppercase tracking-[1.5px] text-terracotta font-semibold mb-4">Real Results</div>
      <h2 className="font-serif text-[clamp(36px,4vw,56px)] font-black text-forest leading-[1.1] tracking-[-1.5px] mb-5">
        They stopped guessing.<br />So will you.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-[60px]">
        <div className="bg-white rounded-[24px] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.05)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] fade-in">
          <div className="text-gold text-base mb-4 tracking-[2px]">★★★★★</div>
          <p className="text-[15px] leading-[1.7] text-charcoal opacity-80 mb-6 italic">"I used to spend 3 hours every Sunday planning meals and still ran out of ideas by Wednesday. MealPrepAI gives me a full week in 30 seconds and I actually look forward to meals now."</p>
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full flex items-center justify-center text-xl bg-[#fde8d8]">👩</div>
            <div>
              <div className="font-semibold text-sm text-forest">Sarah K.</div>
              <div className="text-xs opacity-50">Lost 22 lbs in 4 months</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[24px] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.05)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] fade-in">
          <div className="text-gold text-base mb-4 tracking-[2px]">★★★★★</div>
          <p className="text-[15px] leading-[1.7] text-charcoal opacity-80 mb-6 italic">"The restaurant mode is a game changer. I travel for work constantly and used to completely abandon my macros when eating out. Now I just open the app and it tells me exactly what to order."</p>
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full flex items-center justify-center text-xl bg-[#d8ede0]">🧑</div>
            <div>
              <div className="font-semibold text-sm text-forest">Marcus R.</div>
              <div className="text-xs opacity-50">Hit 15% body fat goal</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[24px] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.05)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] fade-in">
          <div className="text-gold text-base mb-4 tracking-[2px]">★★★★★</div>
          <p className="text-[15px] leading-[1.7] text-charcoal opacity-80 mb-6 italic">"My grocery bill dropped by $80/month. The AI reuses ingredients so cleverly — I never have a random half-used vegetable going bad in the fridge anymore. This app actually saves me money."</p>
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full flex items-center justify-center text-xl bg-[#fdf3d8]">👨</div>
            <div>
              <div className="font-semibold text-sm text-forest">James T.</div>
              <div className="text-xs opacity-50">Gained 12 lbs of muscle</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
