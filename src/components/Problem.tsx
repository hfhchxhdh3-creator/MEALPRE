import React from 'react';

export default function Problem() {
  return (
    <section className="py-[100px] px-6 md:px-12 bg-forest text-cream">
      <div className="inline-block text-[11px] uppercase tracking-[1.5px] text-gold font-semibold mb-4">The Problem</div>
      <h2 className="font-serif text-[clamp(36px,4vw,56px)] font-black text-cream leading-[1.1] tracking-[-1.5px] mb-5">
        Meal planning is killing<br />your diet
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center mt-[60px]">
        <div className="flex flex-col gap-6">
          <div className="flex gap-5 items-start p-6 bg-[rgba(255,255,255,0.05)] rounded-[20px] border border-[rgba(255,255,255,0.08)] transition-colors hover:bg-[rgba(255,255,255,0.09)] fade-in">
            <div className="text-[32px] shrink-0">😩</div>
            <div>
              <h3 className="text-[17px] font-semibold mb-[6px] text-white">Decision fatigue every single day</h3>
              <p className="text-sm leading-[1.6] opacity-60">You know your macros but spend 20 minutes deciding what to eat. Then you give up and order pizza.</p>
            </div>
          </div>
          <div className="flex gap-5 items-start p-6 bg-[rgba(255,255,255,0.05)] rounded-[20px] border border-[rgba(255,255,255,0.08)] transition-colors hover:bg-[rgba(255,255,255,0.09)] fade-in">
            <div className="text-[32px] shrink-0">🍗</div>
            <div>
              <h3 className="text-[17px] font-semibold mb-[6px] text-white">Chicken, rice, broccoli. Forever.</h3>
              <p className="text-sm leading-[1.6] opacity-60">Eating the same bland meals every day until you can't take it anymore and quit entirely.</p>
            </div>
          </div>
          <div className="flex gap-5 items-start p-6 bg-[rgba(255,255,255,0.05)] rounded-[20px] border border-[rgba(255,255,255,0.08)] transition-colors hover:bg-[rgba(255,255,255,0.09)] fade-in">
            <div className="text-[32px] shrink-0">🧮</div>
            <div>
              <h3 className="text-[17px] font-semibold mb-[6px] text-white">Hours spent calculating macros</h3>
              <p className="text-sm leading-[1.6] opacity-60">Every recipe requires manual math. One wrong ingredient and your whole day is off.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 fade-in">
          <div className="bg-terracotta rounded-[24px] p-9 text-white">
            <div className="font-serif text-[72px] font-black leading-none mb-2">#1</div>
            <div className="text-[15px] opacity-85 leading-[1.5]">Meal planning is the single biggest reason people quit their diets — not willpower, not motivation.</div>
          </div>
          <div className="bg-[rgba(255,255,255,0.07)] rounded-[20px] p-6 flex items-center gap-5 border border-[rgba(255,255,255,0.1)]">
            <div className="font-serif text-[42px] font-black text-gold whitespace-nowrap">72%</div>
            <div className="text-[13px] opacity-60 leading-[1.5]">of dieters abandon their plan within 3 weeks due to food boredom and planning overwhelm</div>
          </div>
          <div className="bg-[rgba(255,255,255,0.07)] rounded-[20px] p-6 flex items-center gap-5 border border-[rgba(255,255,255,0.1)]">
            <div className="font-serif text-[42px] font-black text-gold whitespace-nowrap">3.5hrs</div>
            <div className="text-[13px] opacity-60 leading-[1.5]">the average person spends each week just figuring out what macro-aligned meals to eat</div>
          </div>
        </div>
      </div>
    </section>
  );
}
