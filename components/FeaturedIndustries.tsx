import { Plane, Train, Factory, FlaskConical, Cpu, Satellite } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import SectionTitle from './SectionTitle';
import { Button } from '@/components/ui/button';
import img1 from '@/app/public/1.png';
import img2 from '@/app/public/2.png';
import img3 from '@/app/public/3.png';
import img4 from '@/app/public/4.png';
import img5 from '@/app/public/5.png';
import img6 from '@/app/public/6.png';

const industries = [
  { icon: Plane, title: '航空动力', desc: '航空发动机、低空装备动力关键部件研发制造企业', img: img1 },
  { icon: Train, title: '轨道交通', desc: '机车、车辆、轨交装备制造与运维企业', img: img2 },
  { icon: Factory, title: '硬质合金', desc: '硬质合金材料、刀具及制品生产企业', img: img3 },
  { icon: FlaskConical, title: '新材料', desc: '新型材料（如复合材料、纳米材料等）研发、制造及应用企业', img: img4 },
  { icon: Cpu, title: '先进半导体', desc: '芯片设计、制造、封装测试及相关设备材料企业', img: img5 },
  { icon: Satellite, title: '北斗规模应用', desc: '北斗导航芯片、终端设备、应用系统及位置服务企业', img: img6},
];

export default function FeaturedIndustries() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-20">
        <SectionTitle title="特色产业专区" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <Link 
              key={industry.title} 
              href="#"
              className="relative overflow-hidden rounded-2xl group h-72 shadow-lg hover:shadow-2xl transition-all cursor-pointer block"
            >
              <Image
                src={industry.img}
                alt={industry.title}
                fill
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-2">
                  <industry.icon className="text-blue-400" size={24} />
                  <h4 className="text-white text-2xl font-bold">{industry.title}</h4>
                </div>
                <p className="text-white/80 text-sm mb-6 line-clamp-2">
                  <span className="font-semibold text-blue-300">服务群体：</span>
                  {industry.desc}
                </p>
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
