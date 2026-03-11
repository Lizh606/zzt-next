'use client';
import { ChevronRight, Building2, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import imgJingdiao from '@/app/public/北京精雕-1_15.jpg';
import imgDajing from '@/app/public/dj.jpg';
import imgBolite from '@/app/public/铂力特-3_15.jpg';
import imgZhuzuan from '@/app/public/株钻_15.jpg';

const manufacturingItems = [
  { 
    id: 'jingdiao',
    title: '北京精雕科技集团有限公司', 
    img: imgJingdiao,
    desc: '北京精雕集团成立于1994年，是一家专注于精密数控机床研发、生产、销售及制造工程软件开发的高新技术企业。',
    tags: ['数控机床', '精密制造', '工业软件'],
  },
  { 
    id: 'dajing',
    title: '湖南大京科技有限公司', 
    img: imgDajing,
    desc: '湖南大京科技有限公司是一家致力于研发五轴测量技术装备及解决方案的高新技术企业，致力于为全球客户提供优质的制造解决方案。',
    tags: ['五轴测量', '技术装备', '解决方案'],
  },
  { 
    id: 'bolite',
    title: '西安铂力特增材技术股份有限公司', 
    img: imgBolite,
    desc: '西安铂力特增材技术股份有限公司是工业级金属增材制造（3D打印）整体解决方案提供商。',
    tags: ['3D打印', '增材制造', '金属材料'],
  },
  { 
    id: 'zhuzuan',
    title: '株洲钻石切削刀具股份有限公司', 
    img: imgZhuzuan,
    desc: '株洲钻石切削刀具股份有限公司是国内领先的硬质合金切削刀具研发、生产基地，产品广泛应用于汽车、模具、航空航天等领域。',
    tags: ['硬质合金', '切削刀具', '精密工具'],
  },
];

export default function ManufacturingPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-12 pb-24">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">制造业专区</h1>
          <p className="text-slate-600 max-w-3xl">
            汇聚行业领先的制造业企业，展示先进制造技术与创新成果，为您提供一站式的制造资源对接与服务。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {manufacturingItems.map((item) => (
            <div 
              key={item.title}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col lg:flex-row group hover:shadow-xl transition-all duration-500"
            >
              <div className="lg:w-1/3 relative h-64 lg:min-h-[320px] overflow-hidden bg-white">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="lg:w-2/3 p-8 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#0054db]">
                      <Building2 size={20} />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">{item.title}</h2>
                  </div>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {item.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Link 
                    href={`/manufacturing/${item.id}`}
                    className="inline-flex items-center gap-2 bg-[#0054db] text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors"
                  >
                    查看详情 <ExternalLink size={18} />
                  </Link>
                  <Link 
                    href="#"
                    className="inline-flex items-center gap-2 text-slate-500 hover:text-[#0054db] font-semibold transition-colors"
                  >
                    在线咨询 <ChevronRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
