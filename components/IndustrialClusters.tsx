import { Lightbulb, Rocket, Terminal, BrainCircuit, Banknote, Tag, ArrowRight } from 'lucide-react';
import SectionTitle from './SectionTitle';
import Link from 'next/link';

const clusters = [
  { icon: Lightbulb, title: '知识产权', desc: '从专利检索到价值评估的一站式知产服务。' },
  { icon: Rocket, title: '创新服务', desc: '对接科研资源，加速科技成果转化落地。' },
  { icon: Terminal, title: '数字化转型', desc: '制造全流程数字化诊断与升级解决方案。' },
  { icon: BrainCircuit, title: '智能化服务', desc: '推广智能制造模式，赋能“制造”向“智造”跨越。' },
  { icon: Banknote, title: '金融服务', desc: '质量贷、知产质押等普惠金融精准对接。' },
  { icon: Tag, title: '品牌培育', desc: '提升品牌影响力，打造株洲制造亮丽名片。' },
];

export default function IndustrialClusters() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-20">
        <SectionTitle title="质量拓展服务" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clusters.map((cluster) => (
            <Link 
              key={cluster.title} 
              href={`/quality-expansion?tab=${cluster.title}`}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl border border-slate-100 flex flex-col items-center text-center transition-all group cursor-pointer"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                <cluster.icon className="text-blue-600" size={32} />
              </div>
              <h4 className="text-lg font-bold text-slate-800 mb-3">{cluster.title}</h4>
              <p className="text-sm text-slate-500 mb-6">{cluster.desc}</p>
              <div className="mt-auto text-blue-600 p-0 h-auto font-bold flex items-center gap-1 group/btn hover:underline underline-offset-4">
                了解更多 <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
