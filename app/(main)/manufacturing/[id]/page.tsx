'use client';
import { useParams, useRouter } from 'next/navigation';
import { ChevronLeft, Building2, Globe, Phone, Mail, MapPin, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// Reuse the data structure or define a more detailed one
import imgJingdiao from '@/app/public/北京精雕-1_15.jpg';
import imgDajing from '@/app/public/dj.jpg';
import imgBolite from '@/app/public/铂力特-3_15.jpg';
import imgZhuzuan from '@/app/public/株钻_15.jpg';

// Product Images - Beijing Jingdiao
import bjjd23 from '@/app/public/bjjd/北京精雕-1_23.jpg';
import bjjd24 from '@/app/public/bjjd/北京精雕-1_24.jpg';
import bjjd25 from '@/app/public/bjjd/北京精雕-1_25.jpg';
import bjjd26 from '@/app/public/bjjd/北京精雕-1_26.jpg';
import bjjd27 from '@/app/public/bjjd/北京精雕-1_27.jpg';
import bjjd28 from '@/app/public/bjjd/北京精雕-1_28.jpg';
import bjjd29 from '@/app/public/bjjd/北京精雕-1_29.jpg';
import bjjd30 from '@/app/public/bjjd/北京精雕-1_30.jpg';
import bjjd31 from '@/app/public/bjjd/北京精雕-1_31.jpg';

// Product Images - Hunan Dajing
import hndj23 from '@/app/public/hndj/大京-2_23.jpg';
import hndj24 from '@/app/public/hndj/大京-2_24.jpg';
import hndj25 from '@/app/public/hndj/大京-2_25.jpg';

// Product Images - Bolite
import blt23 from '@/app/public/blt/铂力特-3_23.jpg';
import blt24 from '@/app/public/blt/铂力特-3_24.jpg';
import blt25 from '@/app/public/blt/铂力特-3_25.jpg';
import blt26 from '@/app/public/blt/铂力特-3_26.jpg';
import blt27 from '@/app/public/blt/铂力特-3_27.jpg';
import blt28 from '@/app/public/blt/铂力特-3_28.jpg';
import blt29 from '@/app/public/blt/铂力特-3_29.jpg';
import blt30 from '@/app/public/blt/铂力特-3_30.jpg';
import blt31 from '@/app/public/blt/铂力特-3_31.jpg';

// Product Images - Zhuzuan
import zz23 from '@/app/public/zz/株钻_23.jpg';
import zz24 from '@/app/public/zz/株钻_24.jpg';
import zz25 from '@/app/public/zz/株钻_25.jpg';
import zz26 from '@/app/public/zz/株钻_26.jpg';

const manufacturingDetails: Record<string, any> = {
  'jingdiao': {
    title: '北京精雕科技集团有限公司',
    fullTitle: '北京精雕科技集团有限公司',
    logo: imgJingdiao,
    description: '北京精雕集团成立于1994年，是一家专注于精密数控机床研发、生产、销售及制造工程软件开发的高新技术企业。公司拥有深厚的技术积淀，在微米级加工领域处于行业领先地位。',
    longDescription: `北京精雕集团是国家火炬计划重点高新技术企业，拥有国家认定企业技术中心。公司始终坚持自主创新，掌握了数控系统、电主轴、转台、刀库等核心功能部件的关键技术。

其产品广泛应用于精密模具、医疗器械、航空航天、消费电子等领域，为客户提供从设备、软件到工艺支持的全方位制造解决方案。`,
    website: 'www.jingdiao.com',
    phone: '010-12345678',
    email: 'contact@jingdiao.com',
    address: '北京市门头沟区精雕路1号',
    industryImages: [
      { src: bjjd23, title: '精密加工产品 1' },
      { src: bjjd24, title: '精密加工产品 2' },
      { src: bjjd25, title: '精密加工产品 3' },
      { src: bjjd26, title: '精密加工产品 4' },
      { src: bjjd27, title: '精密加工产品 5' },
      { src: bjjd28, title: '精密加工产品 6' },
      { src: bjjd29, title: '精密加工产品 7' },
      { src: bjjd30, title: '精密加工产品 8' },
      { src: bjjd31, title: '精密加工产品 9' },
    ]
  },
  'dajing': {
    title: '湖南大京科技有限公司',
    fullTitle: '湖南大京科技有限公司',
    logo: imgDajing,
    description: '湖南大京科技有限公司是一家专业从事高端装备制造、精密零部件加工及技术服务的高新技术企业，致力于为全球客户提供优质的制造解决方案。',
    longDescription: `大京科技成立于2021年，注册于国家级轨道交通及中小航空发动机千亿产业集群地（株洲），致力于五轴测量技术装备及解决方案研发，打造具有自主知识产权的五轴测量装备及测量整体解决方案的领军企业。

我们通过持续的技术投入和人才培养，不断提升制造精度和生产效率，赢得了国内外客户的广泛信赖。`,
    website: 'www.dajing.com',
    phone: '13787333130',
    email: 'hndj_2021@163.com',
    address: '湖南省株洲市芦淞区航陌路5号航空城科创园2.2期 1-3#栋',
    industryImages: [
      { src: hndj23, title: '高端装备产品 1' },
      { src: hndj24, title: '高端装备产品 2' },
      { src: hndj25, title: '高端装备产品 3' },
    ]
  },
  'bolite': {
    title: '西安铂力特增材技术股份有限公司',
    fullTitle: '西安铂力特增材技术股份有限公司',
    logo: imgBolite,
    description: '西安铂力特增材技术股份有限公司是工业级金属增材制造（3D打印）整体解决方案提供商。',
    longDescription: `铂力特（BLT）成立于2011年，是科创板首批上市企业。公司业务范围涵盖金属3D打印设备、金属粉末材料、定制化产品制造及技术服务。

作为全球领先的金属增材制造技术专家，铂力特致力于为航空航天、医疗、模具、汽车等行业提供卓越的3D打印解决方案，推动制造业的数字化转型。`,
    website: 'www.xa-blt.com',
    phone: '029-81112222',
    email: 'sales@xa-blt.com',
    address: '西安市高新区上林苑七路1000号',
    industryImages: [
      { src: blt23, title: '金属3D打印产品 1' },
      { src: blt24, title: '金属3D打印产品 2' },
      { src: blt25, title: '金属3D打印产品 3' },
      { src: blt26, title: '金属3D打印产品 4' },
      { src: blt27, title: '金属3D打印产品 5' },
      { src: blt28, title: '金属3D打印产品 6' },
      { src: blt29, title: '金属3D打印产品 7' },
      { src: blt30, title: '金属3D打印产品 8' },
      { src: blt31, title: '金属3D打印产品 9' },
    ]
  },
  'zhuzuan': {
    title: '株洲钻石切削刀具股份有限公司',
    fullTitle: '株洲钻石切削刀具股份有限公司',
    logo: imgZhuzuan,
    description: '株洲钻石切削刀具股份有限公司是国内领先的硬质合金切削刀具研发、生产基地，产品广泛应用于汽车、模具、航空航天等领域。',
    longDescription: `株洲钻石（ZCC·CT）成立于2002年，是中钨高新旗下的核心企业。公司拥有世界一流的硬质合金切削刀具生产线，产品涵盖车削、铣削、钻削及工具系统。

我们致力于为全球制造业提供高效的切削加工方案，通过不断的材料创新和涂层技术突破，助力客户降低生产成本，提升加工品质。`,
    website: 'www.zccct.com',
    phone: '0731-22881111',
    email: 'zccct@zccct.com',
    address: '湖南省株洲市天元区黄河路',
    industryImages: [
      { src: zz23, title: '精密切削刀具 1' },
      { src: zz24, title: '精密切削刀具 2' },
      { src: zz25, title: '精密切削刀具 3' },
      { src: zz26, title: '精密切削刀具 4' },
    ]
  }
};

export default function ManufacturingDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const data = manufacturingDetails[id];

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">未找到相关企业信息</h2>
        <Button onClick={() => router.push('/manufacturing')}>返回列表</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header / Breadcrumbs */}
      <div className="bg-white border-b border-slate-100 sticky top-0 z-10">
        <div className="container mx-auto px-4 lg:px-20 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/manufacturing" className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500">
              <ChevronLeft size={24} />
            </Link>
            <div className="flex flex-col">
              <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">制造业专区</span>
              <h1 className="text-lg font-bold text-slate-900">{data.title}</h1>
            </div>
          </div>
          <Button className="bg-[#0054db] hover:bg-blue-700">在线咨询</Button>
        </div>
      </div>

      <main className="container mx-auto px-4 lg:px-20 py-12">
        {/* Hero Section */}
        <div className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-slate-100 mb-12">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 relative h-[300px] lg:h-[500px] bg-white p-8 lg:p-12">
              <div className="relative w-full h-full">
                <Image
                  src={data.logo}
                  alt={data.title}
                  fill
                  unoptimized
                  className="object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center bg-slate-50/50">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-[#0054db] mb-6">
                <Building2 size={24} />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                {data.fullTitle}
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {data.description}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center gap-3 text-slate-500">
                  <Globe size={18} className="text-[#0054db] shrink-0" />
                  <span className="text-sm">{data.website}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-500">
                  <Phone size={18} className="text-[#0054db] shrink-0" />
                  <span className="text-sm">{data.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-500">
                  <Mail size={18} className="text-[#0054db] shrink-0" />
                  <span className="text-sm">{data.email}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-500">
                  <MapPin size={18} className="text-[#0054db] shrink-0" />
                  <span className="text-sm">{data.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <div className="w-1.5 h-6 bg-[#0054db] rounded-full"></div>
              企业简介
            </h3>
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-600 text-lg leading-relaxed whitespace-pre-wrap">
                {data.longDescription}
              </p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm h-fit">
            <h4 className="font-bold text-slate-900 mb-4">快速联系</h4>
            <p className="text-sm text-slate-500 mb-6">如果您对该企业的技术或产品感兴趣，欢迎通过以下方式联系我们。</p>
            <div className="space-y-4">
              <Button className="w-full bg-[#0054db] h-12 rounded-xl font-bold">立即预约参观</Button>
              <Button variant="outline" className="w-full h-12 rounded-xl font-bold border-slate-200">获取技术手册</Button>
            </div>
          </div>
        </div>

        {/* Industry Showcase Gallery */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <div className="w-1.5 h-6 bg-[#0054db] rounded-full"></div>
              产业展示
            </h3>
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <ImageIcon size={18} />
              <span>{data.industryImages.length} 张图片</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.industryImages.map((img: any, index: number) => (
              <div 
                key={index} 
                className="group relative aspect-[4/3] rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  unoptimized
                  className="object-contain transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white font-bold text-lg">{img.title}</p>
                </div>
              </div>
            ))}
            {/* Placeholder for future images */}
            <div className="aspect-[4/3] rounded-3xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400 bg-slate-50/50">
              <ImageIcon size={32} className="mb-2 opacity-50" />
              <p className="text-sm font-medium">更多产业图片补充中...</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
