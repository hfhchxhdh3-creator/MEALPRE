import React, { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 py-4 md:px-12 md:py-5 bg-[rgba(245,240,232,0.85)] backdrop-blur-md border-b border-[rgba(74,124,89,0.15)] transition-shadow duration-300 ${scrolled ? 'shadow-[0_4px_24px_rgba(0,0,0,0.08)]' : 'shadow-none'}`} 
      id="navbar"
    >
      <div className="font-serif text-[22px] font-black text-forest tracking-[-0.5px]">
        MealPrep<span className="text-terracotta">AI</span>
      </div>
      <div className="hidden md:flex gap-9">
        <a href="#how" className="text-charcoal text-sm font-medium tracking-[0.3px] opacity-70 hover:opacity-100 transition-opacity no-underline">How it works</a>
        <a href="#features" className="text-charcoal text-sm font-medium tracking-[0.3px] opacity-70 hover:opacity-100 transition-opacity no-underline">Features</a>
        <a href="#pricing" className="text-charcoal text-sm font-medium tracking-[0.3px] opacity-70 hover:opacity-100 transition-opacity no-underline">Pricing</a>
      </div>
      <button className="bg-forest text-cream border-none px-6 py-[11px] rounded-full font-sans text-sm font-medium cursor-pointer transition-all duration-200 hover:bg-terracotta hover:-translate-y-px">
        Get Started Free
      </button>
    </nav>
  );
}
