import React from 'react';

export default function Hero() {
  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 items-center px-6 pt-[120px] pb-20 md:px-12 gap-[60px] relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute -top-[200px] -right-[100px] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(74,124,89,0.12)_0%,transparent_70%)] pointer-events-none"></div>
      <div className="absolute -bottom-[100px] -left-[150px] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(196,98,45,0.08)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 bg-light-sage text-sage px-[14px] py-[6px] rounded-full text-xs font-medium tracking-[1px] uppercase mb-7">
          <span className="text-[8px] animate-pulse-custom">●</span> Now in Beta — Join 2,000+ Users
        </div>
        <h1 className="font-serif text-[clamp(48px,5vw,72px)] font-black leading-[1.05] text-forest mb-6 tracking-[-2px]">
          Your entire week of<br />meals, <em className="italic text-terracotta">planned by AI</em>
        </h1>
        <p className="text-lg leading-[1.7] text-charcoal opacity-70 max-w-[480px] mb-10 font-light">
          Stop eating the same chicken and rice. MealPrepAI generates a full week of macro-perfect, variety-rich meals — with a shopping list and prep guide — in under 60 seconds.
        </p>
        <div className="flex items-center gap-5 flex-wrap">
          <button className="bg-forest text-cream px-9 py-4 rounded-full border-none font-sans text-base font-medium cursor-pointer transition-all duration-250 shadow-[0_8px_32px_rgba(30,58,47,0.25)] hover:bg-terracotta hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(196,98,45,0.3)]">
            Plan My Week Free →
          </button>
          <a href="#how" className="text-forest text-[15px] font-medium no-underline flex items-center gap-2 transition-[gap] duration-200 hover:gap-[14px]">
            See how it works <span className="text-lg">→</span>
          </a>
        </div>
        <div className="mt-12 flex items-center gap-4">
          <div className="flex">
            <span className="w-9 h-9 rounded-full border-2 border-cream -ml-[10px] first:ml-0 flex items-center justify-center text-base bg-[#fde8d8]">👩</span>
            <span className="w-9 h-9 rounded-full border-2 border-cream -ml-[10px] flex items-center justify-center text-base bg-[#d8ede0]">🧑</span>
            <span className="w-9 h-9 rounded-full border-2 border-cream -ml-[10px] flex items-center justify-center text-base bg-[#fdf3d8]">👨</span>
          </div>
          <div className="text-[13px] opacity-60 leading-[1.4]">
            <strong className="block opacity-100 text-forest font-medium">2,000+ people are eating better</strong>
            "Lost 18 lbs without thinking about food" — Marcus R.
          </div>
        </div>
      </div>

      <div className="hidden md:flex relative justify-center items-center">
        {/* Float Card 1 */}
        <div className="absolute bg-white rounded-2xl p-[14px_18px] shadow-[0_12px_40px_rgba(0,0,0,0.12)] z-30 animate-float2 -left-[60px] top-20 delay-500">
          <div className="text-[10px] uppercase tracking-[0.8px] text-sage font-semibold mb-1">Weekly Cost</div>
          <div className="font-serif text-[22px] text-forest font-bold">$59<span className="text-base">.50</span></div>
          <div className="text-[11px] text-charcoal opacity-50">$8.50/day avg</div>
        </div>

        {/* Phone Mockup */}
        <div className="w-[300px] h-[580px] bg-forest rounded-[40px] p-5 shadow-[0_40px_100px_rgba(30,58,47,0.3),0_0_0_1px_rgba(255,255,255,0.1)] relative z-20 animate-float">
          <div className="bg-warm-white rounded-[28px] h-full p-[20px_16px] overflow-hidden flex flex-col gap-3">
            <div className="flex justify-between items-center mb-1">
              <div>
                <div className="text-[11px] text-charcoal opacity-50">Good morning</div>
                <div className="font-serif text-base text-forest font-bold">Sarah 👋</div>
              </div>
              <div className="w-10 h-10 rounded-full bg-[conic-gradient(var(--sage)_0%_68%,var(--terracotta)_68%_85%,var(--gold)_85%_100%)] flex items-center justify-center">
                <div className="w-7 h-7 rounded-full bg-warm-white text-[8px] font-semibold text-forest flex items-center justify-center">68%</div>
              </div>
            </div>

            <div className="flex gap-[6px] justify-between">
              <div className="flex-1 bg-light-sage rounded-lg py-[6px] px-1 text-center"><div className="text-[8px] uppercase tracking-[0.5px] text-sage font-semibold">M</div><div className="text-[9px] text-charcoal font-medium opacity-60">1,820</div></div>
              <div className="flex-1 bg-forest rounded-lg py-[6px] px-1 text-center"><div className="text-[8px] uppercase tracking-[0.5px] text-[rgba(255,255,255,0.6)] font-semibold">T</div><div className="text-[9px] text-white font-medium opacity-80">1,850</div></div>
              <div className="flex-1 bg-light-sage rounded-lg py-[6px] px-1 text-center"><div className="text-[8px] uppercase tracking-[0.5px] text-sage font-semibold">W</div><div className="text-[9px] text-charcoal font-medium opacity-60">1,800</div></div>
              <div className="flex-1 bg-light-sage rounded-lg py-[6px] px-1 text-center"><div className="text-[8px] uppercase tracking-[0.5px] text-sage font-semibold">T</div><div className="text-[9px] text-charcoal font-medium opacity-60">1,840</div></div>
              <div className="flex-1 bg-light-sage rounded-lg py-[6px] px-1 text-center"><div className="text-[8px] uppercase tracking-[0.5px] text-sage font-semibold">F</div><div className="text-[9px] text-charcoal font-medium opacity-60">1,830</div></div>
              <div className="flex-1 bg-light-sage rounded-lg py-[6px] px-1 text-center"><div className="text-[8px] uppercase tracking-[0.5px] text-sage font-semibold">S</div><div className="text-[9px] text-charcoal font-medium opacity-60">1,900</div></div>
              <div className="flex-1 bg-light-sage rounded-lg py-[6px] px-1 text-center"><div className="text-[8px] uppercase tracking-[0.5px] text-sage font-semibold">S</div><div className="text-[9px] text-charcoal font-medium opacity-60">1,780</div></div>
            </div>

            <div className="bg-cream rounded-2xl p-3 flex gap-[10px] items-center">
              <div className="text-[28px] shrink-0">🥗</div>
              <div className="flex-1 min-w-0">
                <div className="text-[9px] uppercase tracking-[0.8px] text-sage font-medium">Breakfast · 7:30 AM</div>
                <div className="text-[13px] font-semibold text-forest leading-[1.3] my-[2px]">Greek Yogurt Power Bowl</div>
                <div className="text-[10px] text-charcoal opacity-60">420 kcal · 38g P · 45g C · 8g F</div>
              </div>
              <div className="w-6 h-6 rounded-full bg-sage text-white text-[11px] flex items-center justify-center shrink-0">✓</div>
            </div>

            <div className="bg-cream rounded-2xl p-3 flex gap-[10px] items-center">
              <div className="text-[28px] shrink-0">🍜</div>
              <div className="flex-1 min-w-0">
                <div className="text-[9px] uppercase tracking-[0.8px] text-sage font-medium">Lunch · 12:30 PM</div>
                <div className="text-[13px] font-semibold text-forest leading-[1.3] my-[2px]">Thai Peanut Noodle Bowl</div>
                <div className="text-[10px] text-charcoal opacity-60">540 kcal · 42g P · 58g C · 14g F</div>
              </div>
              <div className="w-6 h-6 rounded-full bg-light-sage text-sage text-[11px] flex items-center justify-center shrink-0">→</div>
            </div>

            <div className="bg-[linear-gradient(135deg,var(--forest),var(--sage))] rounded-[14px_14px_14px_4px] p-[10px_12px] text-white text-[11px] leading-[1.5]">
              <strong className="block text-[9px] uppercase tracking-[0.8px] opacity-70 mb-[3px]">AI Insight</strong>
              You have leftover rice from last night. I've added a quick fried rice dinner tonight — saves 20 min of prep! 🍚
            </div>
          </div>
        </div>

        {/* Float Card 2 */}
        <div className="absolute bg-white rounded-2xl p-[14px_18px] shadow-[0_12px_40px_rgba(0,0,0,0.12)] z-30 animate-float3 -right-[50px] bottom-[120px] delay-[1200ms]">
          <div className="text-[10px] uppercase tracking-[0.8px] text-sage font-semibold mb-1">Prep Time</div>
          <div className="font-serif text-[22px] text-forest font-bold">2.5 hrs</div>
          <div className="text-[11px] text-charcoal opacity-50">for 7 full days</div>
        </div>
      </div>
    </section>
  );
}
