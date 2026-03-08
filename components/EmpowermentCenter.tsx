import { BookOpen, Network, MessageSquare, Download, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import SectionTitle from './SectionTitle';
import { Button } from '@/components/ui/button';

const centers = [
  { icon: BookOpen, title: '专家课堂', desc: '精品质量课程，权威专家授课' },
  { icon: Network, title: '知识图谱', desc: '质量知识体系，全维数据检索' },
  { icon: MessageSquare, title: '在线答疑', desc: '质量问题在线提问，专家实时解答' },
  { icon: Download, title: '资源下载', desc: '标准文本、工具手册免费下载' },
];

export default function EmpowermentCenter() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-20">
        <SectionTitle title="赋能与共享中心" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {centers.map((center) => (
            <Link 
              key={center.title} 
              href={`/share-zone?tab=${center.title}`}
              className="p-6 bg-white rounded-xl border border-slate-200 hover:border-[#0054db] transition-all group flex gap-4 items-start cursor-pointer"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex-shrink-0 flex items-center justify-center group-hover:bg-[#0054db] transition-colors">
                <center.icon className="text-[#0054db] group-hover:text-white" size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1">{center.title}</h4>
                <p className="text-sm text-slate-500 mb-3">{center.desc}</p>
                <div className="text-[#0054db] p-0 h-auto font-semibold flex items-center gap-1 group/btn">
                  进入详情 <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
