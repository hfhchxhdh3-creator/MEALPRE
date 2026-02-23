import React from 'react';

export default function MealShowcase() {
  return (
    <section className="py-[100px] px-6 md:px-12 bg-light-sage">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
        <div>
          <div className="inline-block text-[11px] uppercase tracking-[1.5px] text-terracotta font-semibold mb-4">Sample Meals</div>
          <h2 className="font-serif text-[clamp(36px,4vw,56px)] font-black text-forest leading-[1.1] tracking-[-1.5px]">
            This week's menu
          </h2>
        </div>
        <p className="text-sm opacity-60 max-w-[240px] leading-[1.6]">Every meal crafted to hit your exact macros. Changed weekly. Never boring.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-[20px] overflow-hidden transition-all duration-250 hover:-translate-y-[6px] hover:shadow-[0_20px_60px_rgba(30,58,47,0.15)] fade-in">
          <div className="h-40 flex items-center justify-center text-[64px] relative bg-[linear-gradient(135deg,#fde8d8,#fdf3d8)]">
            🥣
            <div className="absolute top-3 right-3 bg-forest text-cream text-[10px] font-semibold px-[10px] py-1 rounded-full uppercase tracking-[0.6px]">Breakfast</div>
          </div>
          <div className="p-[18px]">
            <div className="text-[15px] font-semibold text-forest mb-[10px]">Smoked Salmon & Avocado Egg Cups</div>
            <div className="flex gap-[10px] flex-wrap">
              <span className="text-[11px] px-[10px] py-1 rounded-full font-medium bg-[#e8f0e9] text-sage">38g Protein</span>
              <span className="text-[11px] px-[10px] py-1 rounded-full font-medium bg-[#fdf3d8] text-[#a07c20]">18g Carbs</span>
              <span className="text-[11px] px-[10px] py-1 rounded-full font-medium bg-[#fde8d8] text-[#a04820]">22g Fat</span>
            </div>
            <div className="text-xs opacity-50 mt-[10px] font-medium">420 kcal · ~$4.20</div>
          </div>
        </div>

        <div className="bg-white rounded-[20px] overflow-hidden transition-all duration-250 hover:-translate-y-[6px] hover:shadow-[0_20px_60px_rgba(30,58,47,0.15)] fade-in">
          <div className="h-40 flex items-center justify-center text-[64px] relative bg-[linear-gradient(135deg,#d8ede0,#e8f4ec)]">
            🍱
            <div className="absolute top-3 right-3 bg-forest text-cream text-[10px] font-semibold px-[10px] py-1 rounded-full uppercase tracking-[0.6px]">Lunch</div>
          </div>
          <div className="p-[18px]">
            <div className="text-[15px] font-semibold text-forest mb-[10px]">Korean Ground Turkey Bowl</div>
            <div className="flex gap-[10px] flex-wrap">
              <span className="text-[11px] px-[10px] py-1 rounded-full font-medium bg-[#e8f0e9] text-sage">44g Protein</span>
              <span className="text-[11px] px-[10px] py-1 rounded-full font-medium bg-[#fdf3d8] text-[#a07c20]">52g Carbs</span>
              <span className="text-[11px] px-[10px] py-1 rounded-full font-medium bg-[#fde8d8] text-[#a04820]">12g Fat</span>
            </div>
            <div className="text-xs opacity-50 mt-[10px] font-medium">510 kcal · ~$3.80</div>
          </div>
        </div>

        <div className="bg-white rounded-[20px] overflow-hidden transition-all duration-250 hover:-translate-y-[6px] hover:shadow-[0_20px_60px_rgba(30,58,47,0.15)] fade-in">
          <div className="h-40 flex items-center justify-center text-[64px] relative bg-[linear-gradient(135deg,#d8e8f0,#dde8f8)]">
            🥘
            <div className="absolute top-3 right-3 bg-forest text-cream text-[10px] font-semibold px-[10px] py-1 rounded-full uppercase tracking-[0.6px]">Dinner</div>
          </div>
          <div className="p-[18px]">
            <div className="text-[15px] font-semibold text-forest mb-[10px]">Lemon Herb Salmon with Quinoa</div>
            <div className="flex gap-[10px] flex-wrap">
              <span className="text-[11px] px-[10px] py-1 rounded-full font-medium bg-[#e8f0e9] text-sage">46g Protein</span>
              <span className="text-[11px] px-[10px] py-1 rounded-full font-medium bg-[#fdf3d8] text-[#a07c20]">38g Carbs</span>
              <span className="text-[11px] px-[10px] py-1 rounded-full font-medium bg-[#fde8d8] text-[#a04820]">18g Fat</span>
            </div>
            <div className="text-xs opacity-50 mt-[10px] font-medium">580 kcal · ~$5.40</div>
          </div>
        </div>

        <div className="bg-white rounded-[20px] overflow-hidden transition-all duration-250 hover:-translate-y-[6px] hover:shadow-[0_20px_60px_rgba(30,58,47,0.15)] fade-in">
          <div className="h-40 flex items-center justify-center text-[64px] relative bg-[linear-gradient(135deg,#f0d8d8,#f8dde0)]">
            🫐
            <div className="absolute top-3 right-3 bg-forest text-cream text-[10px] font-semibold px-[10px] py-1 rounded-full uppercase tracking-[0.6px]">Snack</div>
          </div>
          <div className="p-[18px]">
            <div className="text-[15px] font-semibold text-forest mb-[10px]">Protein Cheesecake Cups</div>
            <div className="flex gap-[10px] flex-wrap">
              <span className="text-[11px] px-[10px] py-1 rounded-full font-medium bg-[#e8f0e9] text-sage">24g Protein</span>
              <span className="text-[11px] px-[10px] py-1 rounded-full font-medium bg-[#fdf3d8] text-[#a07c20]">22g Carbs</span>
              <span className="text-[11px] px-[10px] py-1 rounded-full font-medium bg-[#fde8d8] text-[#a04820]">8g Fat</span>
            </div>
            <div className="text-xs opacity-50 mt-[10px] font-medium">260 kcal · ~$1.80</div>
          </div>
        </div>
      </div>
    </section>
  );
}
