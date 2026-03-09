'use client';

import { Search, Compass, FileText } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  'https://picsum.photos/seed/hero1/1920/1080',
  'https://picsum.photos/seed/hero2/1920/1080',
  'https://picsum.photos/seed/hero3/1920/1080',
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
            智享<br /><span className="text-blue-400">制造强国质量基础设施一站式服务平台</span>
          </h2>
          <p className="text-blue-100 text-lg lg:text-xl mb-8 leading-relaxed opacity-90">
            为企业提供全要素、全过程、全周期、全产业链的“一揽子”综合质量服务，赋能湖南制造高质量发展。
          </p>
          <div className="bg-white p-2 rounded-xl shadow-2xl flex flex-col md:flex-row gap-2 mb-6">
            <div className="flex-grow flex items-center px-4">
              <Search className="text-slate-400 mr-2" size={20} />
              <input
                className="w-full border-none focus:ring-0 text-slate-800 placeholder-slate-400 py-3 outline-none"
                placeholder="搜索检验检测、计量服务、轨道交通等..."
                type="text"
              />
            </div>
            <button className="bg-blue-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800 transition-all flex items-center justify-center gap-2">
              立即搜索
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10 text-sm">
            <span className="text-white/70">热门：</span>
            <a className="text-white hover:text-blue-400 transition-colors" href="#">检验检测</a>
            <a className="text-white hover:text-blue-400 transition-colors" href="#">计量服务</a>
            <a className="text-white hover:text-blue-400 transition-colors" href="#">轨道交通</a>
            <a className="text-white hover:text-blue-400 transition-colors" href="#">硬质合金</a>
          </div>
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
