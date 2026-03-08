import { Plane, Train, Factory, FlaskConical, Cpu, Satellite } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import SectionTitle from './SectionTitle';
import { Button } from '@/components/ui/button';

const industries = [
  { icon: Plane, title: '航空动力', desc: '航空发动机、低空装备动力关键部件研发制造企业', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJJEza32OYORQ1w4dFPGXyBrb7anRJueNF_V34PGzlVnX6oV_PuyrE7bA8vqwfSEwSqp-HCY7VUjdlCHuXan7G6s4Fw6o8EmQZsxLWUZwESf0P3nhI1ZCSrjwltfpQIL0mg3wGwWXi6ZTq2nt0M0POvjVh5qjQ0xVR6TzzGarGS-4g6lR89ouW0bLjB-9KYmlRq7esIrsr22B-nn__5MAVeGlSUz_rGafAiE_dsyX5d0cGlfpnhzMasT6TqJNJh1yYyo9GlfqBmjE' },
  { icon: Train, title: '轨道交通', desc: '机车、车辆、轨交装备制造与运维企业', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB73akJ9GQkIW2ovyvJRSReEJUQdAcecxksK9FKRYDFkvXmp9ZhlBah-4DGSxu8fuYSVWjmFTuH4jhDdzl-8Ono6pkSjFjnIBdsA8a0h08JQ55iR6w665aQnPn7yzDA_NGYHSjFebHKzv1qRMc30xJ-Vet5maoKfmPv5MLcxgWsM-gLI7IwWIIBlds4Z80QACynPXMCiItoLBPu1yPjBDo4duCm8YdMC4MOL8ZTlJWRbLe9dtUnvYZp2uwZcn49kg2uUdS8fj3pp4o' },
  { icon: Factory, title: '硬质合金', desc: '硬质合金材料、刀具及制品生产企业', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDyNo6LLZxvu0hW4XkLLX6g7IjDrjXlQaxrWDM-Ru7FHKP10tx99Lm7mIo1hrOwVWz4P5cBzGN-q4o1mHYIZBd2oCWvvLmv9T5JahjTq1z37Ukf2UcDP74_qjAPt8wS03Uwv4HljGCtI5uxuksXCJ8tkwNFhJ37oF2VtPXzjpwZ5W7JxDpt33fqucelVNQ2xQxo1_RPsvH16Nqekq_INXlkYGacmFZgHCEpMUJyQDIVt_8KJmod74NM_cU4bYFVFzqO_TuHQVGmHn0' },
  { icon: FlaskConical, title: '新材料', desc: '新型材料（如复合材料、纳米材料等）研发、制造及应用企业', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCz8RzPulYD-qlYua8DfEgCOCVqDE3yw31RBwpkXerwzuhcvZotPETiHl1u-hOqmOAyX94OKtMmjmFrdS9O21CILMMQhlf2s_9Pd2Vb50bOAxLQyXa_pHgwWyjuCgaxP2QlwF14RVS8B-vdIGce_lIfZM0LEIouvSN5YNBa7GbnrnAZeEC2DPZa0caczISWxeJsvxA4pQ9c2zTFuIBRCkCxvLsvmwtfhot6knj5QXsSjHxsTkW-vk0wLgIcMUGcXFyhrtEK_BLnqpg' },
  { icon: Cpu, title: '先进半导体', desc: '芯片设计、制造、封装测试及相关设备材料企业', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0Jgptsw5sCu5yyydvR0w1Nu-jdWfFWO4wH824ffon92vg4zT4QM4rdKqUevVxN5nt5EN7lC1KtIkq6tk2ZeEhfAuWuxTmCXQRBX1LFUhEEaT80HKrByRCJaouDbJoqq9Lkaz7PbrB1OfGUjy23jVsavKdD0qCvZMWwdXjwvXbv8qtok0pXf9mmdrk9a4ZCOCnIG7kgpm939wQnN1eGhaAqgowqP8gQKqsqDBEJfLsAPX06LztU6wwMIta0GOF4NJw8oEOtTZT1DM' },
  { icon: Satellite, title: '北斗规模应用', desc: '北斗导航芯片、终端设备、应用系统及位置服务企业', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZ7mIkIf0CgxTnIuHtWoh2iivd_A32KvEHFThxppMa6B5AQ8p3eTHIVOD_OMZosEUYWIuV4xYBKKWU0WgIVaY-EkXcFYOypHhZxWpKeSZ-7UEfiuDyPM85aoMd5E4lrcHfrbuYIyWy059HpjAasFLRP32egvrUTT_pXRwz4wjbunnJFLrcMi7vZMyzFcxJFrMLnwIjOYgKGxyQlTUIWb1U2ulv9UmjXrWPMqK_XUqKN4bu_hIMzmDfFY8BihV95udjjq2WXmw21ZU' },
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
