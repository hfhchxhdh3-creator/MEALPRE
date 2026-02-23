import React from 'react';

export default function Pricing() {
  return (
    <section className="py-[100px] px-6 md:px-12 bg-warm-white" id="pricing">
      <div className="text-center max-w-[560px] mx-auto mb-16">
        <div className="inline-block text-[11px] uppercase tracking-[1.5px] text-terracotta font-semibold mb-4">Pricing</div>
        <h2 className="font-serif text-[clamp(36px,4vw,56px)] font-black text-forest leading-[1.1] tracking-[-1.5px] mb-5">
          Start free. Upgrade when you're hooked.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[820px] mx-auto">
        <div className="rounded-[28px] p-11 border-2 border-[rgba(30,58,47,0.12)] transition-all duration-200 hover:border-sage hover:-translate-y-1">
          <div className="text-[13px] uppercase tracking-[1px] font-semibold mb-3 opacity-60">Free</div>
          <div className="font-serif text-[52px] font-black text-forest leading-none mb-1">
            <span className="text-xl font-normal">$</span>0
          </div>
          <div className="text-[13px] opacity-50 mb-8">forever free</div>
          <ul className="flex flex-col gap-[14px] mb-9 list-none p-0">
            <li className="flex gap-3 text-sm leading-[1.5]"><span className="text-sage font-bold shrink-0 mt-px">✓</span> 1 week of AI meal planning</li>
            <li className="flex gap-3 text-sm leading-[1.5]"><span className="text-sage font-bold shrink-0 mt-px">✓</span> Basic shopping list</li>
            <li className="flex gap-3 text-sm leading-[1.5]"><span className="text-sage font-bold shrink-0 mt-px">✓</span> Macro tracking</li>
            <li className="flex gap-3 text-sm leading-[1.5]"><span className="text-sage font-bold shrink-0 mt-px">✓</span> Meal swap suggestions</li>
            <li className="flex gap-3 text-sm leading-[1.5]"><span className="text-sage font-bold shrink-0 mt-px">✓</span> Up to 5 saved meals</li>
          </ul>
          <button className="w-full p-4 rounded-full border-2 border-forest bg-transparent text-forest font-sans text-[15px] font-semibold cursor-pointer transition-all duration-200 hover:bg-forest hover:text-white">
            Get Started Free
          </button>
        </div>

        <div className="rounded-[28px] p-11 border-2 border-forest bg-forest text-cream relative transition-all duration-200 hover:-translate-y-1">
          <div className="absolute -top-[14px] left-1/2 -translate-x-1/2 bg-terracotta text-white text-[11px] font-bold px-[18px] py-[6px] rounded-full uppercase tracking-[0.8px] whitespace-nowrap">🔥 Most Popular</div>
          <div className="text-[13px] uppercase tracking-[1px] font-semibold mb-3 text-[rgba(255,255,255,0.6)]">Premium</div>
          <div className="font-serif text-[52px] font-black text-white leading-none mb-1">
            <span className="text-xl font-normal">$</span>9<span className="text-xl font-normal">.99/mo</span>
          </div>
          <div className="text-[13px] opacity-50 mb-8">billed monthly · cancel anytime</div>
          <ul className="flex flex-col gap-[14px] mb-9 list-none p-0">
            <li className="flex gap-3 text-sm leading-[1.5]"><span className="text-gold font-bold shrink-0 mt-px">✓</span> Unlimited weekly meal plans</li>
            <li className="flex gap-3 text-sm leading-[1.5]"><span className="text-gold font-bold shrink-0 mt-px">✓</span> Smart shopping list (organized by aisle)</li>
            <li className="flex gap-3 text-sm leading-[1.5]"><span className="text-gold font-bold shrink-0 mt-px">✓</span> Restaurant macro matching</li>
            <li className="flex gap-3 text-sm leading-[1.5]"><span className="text-gold font-bold shrink-0 mt-px">✓</span> Video prep tutorials</li>
            <li className="flex gap-3 text-sm leading-[1.5]"><span className="text-gold font-bold shrink-0 mt-px">✓</span> Leftover & waste optimizer</li>
            <li className="flex gap-3 text-sm leading-[1.5]"><span className="text-gold font-bold shrink-0 mt-px">✓</span> Cost tracking per meal</li>
            <li className="flex gap-3 text-sm leading-[1.5]"><span className="text-gold font-bold shrink-0 mt-px">✓</span> Seasonal & local produce recommendations</li>
            <li className="flex gap-3 text-sm leading-[1.5]"><span className="text-gold font-bold shrink-0 mt-px">✓</span> Priority AI support</li>
          </ul>
          <button className="w-full p-4 rounded-full border-2 border-terracotta bg-terracotta text-white font-sans text-[15px] font-semibold cursor-pointer transition-all duration-200 hover:bg-[#a8501e] hover:border-[#a8501e]">
            Start 7-Day Free Trial
          </button>
        </div>
      </div>
    </section>
  );
}
