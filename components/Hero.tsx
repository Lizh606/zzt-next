'use client';

import { Search, Compass, FileText } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1920&auto=format&fit=crop', // Airplane
  'https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=1920&auto=format&fit=crop', // Jet Engine
  'https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=1920&auto=format&fit=crop', // High-speed train (Zhuzhou rail transit)
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-slate-900 overflow-hidden min-h-[560px] flex items-center">
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`Slide ${index + 1}`}
          fill
          className={`absolute inset-0 object-cover transition-opacity duration-1000 ${
            index === current ? 'opacity-40' : 'opacity-0'
          }`}
          referrerPolicy="no-referrer"
          priority={index === 0}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-950/50 z-0"></div>
      
      <div className="container mx-auto px-4 lg:px-20 relative z-10 py-20 text-center lg:text-left">
        <div className="max-w-6xl">
          <h2 className="text-white text-4xl lg:text-6xl font-black leading-tight mb-4">
            质享<br /><span className="text-blue-400">质量创新中心</span>
          </h2>
          <p className="text-blue-100 text-lg lg:text-xl mb-8 leading-relaxed opacity-90">
            为企业提供全要素、全过程、全周期、全产业链的“一揽子”综合质量服务，赋能湖南制造高质量发展。
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
