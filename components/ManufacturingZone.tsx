'use client';
import { Factory, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import SectionTitle from './SectionTitle';
import imgJingdiao from '@/app/public/北京精雕-1_15.jpg';
import imgDajing from '@/app/public/dj.jpg';
import imgBolite from '@/app/public/铂力特-3_15.jpg';
import imgZhuzuan from '@/app/public/株钻_15.jpg';

const manufacturingItems = [
  { 
    id: 'jingdiao',
    title: '北京精雕设备', 
    img: imgJingdiao,
    desc: '精密数控机床研发与制造'
  },
  { 
    id: 'dajing',
    title: '湖南大京科技', 
    img: imgDajing,
    desc: '高端装备制造与技术服务'
  },
  { 
    id: 'bolite',
    title: '铂力特设备', 
    img: imgBolite,
    desc: '工业级金属3D打印解决方案'
  },
  { 
    id: 'zhuzuan',
    title: '株洲钻石切削刀具', 
    img: imgZhuzuan,
    desc: '切削刀具及硬质合金制品'
  },
];

export default function ManufacturingZone() {
  return (
    <section id="manufacturing-zone" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-20">
        <SectionTitle 
          title="制造业专区" 
          action={
            <Link href="/manufacturing" className="text-sm text-slate-500 hover:text-[#0054db] flex items-center gap-1 transition-colors group">
              查看更多 <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          }
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {manufacturingItems.map((item) => (
            <Link 
              key={item.title} 
              href={`/manufacturing/${item.id}`}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden group shadow-md hover:shadow-xl transition-all block"
            >
              <div className="absolute inset-0 bg-white">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h4 className="text-white text-xl font-bold mb-1">{item.title}</h4>
                <p className="text-white/70 text-xs mb-4 line-clamp-1">{item.desc}</p>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-slate-900 font-bold rounded-full w-fit px-4 py-2 text-sm transition-colors">
                  进入专区
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
