import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-[rgba(255,255,255,0.5)] py-10 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
      <div className="font-serif text-xl font-black text-white">
        MealPrep<span className="text-terracotta">AI</span>
      </div>
      <div className="flex gap-6">
        <a href="#" className="text-[rgba(255,255,255,0.4)] no-underline text-[13px] transition-colors hover:text-white">Privacy</a>
        <a href="#" className="text-[rgba(255,255,255,0.4)] no-underline text-[13px] transition-colors hover:text-white">Terms</a>
        <a href="#" className="text-[rgba(255,255,255,0.4)] no-underline text-[13px] transition-colors hover:text-white">Support</a>
        <a href="#" className="text-[rgba(255,255,255,0.4)] no-underline text-[13px] transition-colors hover:text-white">Blog</a>
      </div>
      <div className="text-[13px]">© 2026 MealPrepAI. All rights reserved.</div>
    </footer>
  );
}
