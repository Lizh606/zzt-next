import { FileEdit, Network, CheckCircle, Wrench, Star, ArrowRight, ArrowDown } from 'lucide-react';

const steps = [
  { icon: FileEdit, title: '需求提交', desc: '在线填报服务需求及企业基础信息' },
  { icon: Network, title: '评估匹配', desc: '系统智能匹配最优服务机构与方案' },
  { icon: CheckCircle, title: '机构受理', desc: '专业机构在线确认并开启服务流程' },
  { icon: Wrench, title: '实施服务', desc: '机构按约定开展检测、咨询等工作' },
  { icon: Star, title: '评价跟踪', desc: '服务完成后进行质量评价与结果跟踪' },
];

export default function Process() {
  return (
    <section className="py-20 bg-blue-700 text-white">
      <div className="container mx-auto px-4 lg:px-20">
        <h3 className="text-3xl font-bold text-center mb-16">一站式服务流程</h3>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex flex-col items-center max-w-[160px] text-center">
                <div className="w-16 h-16 rounded-full border-2 border-white/30 flex items-center justify-center mb-4">
                  <step.icon size={32} />
                </div>
                <h5 className="font-bold mb-2">{step.title}</h5>
                <p className="text-xs text-white/70">{step.desc}</p>
              </div>
              {index < steps.length - 1 && (
                <>
                  <ArrowRight className="hidden lg:block text-white/50" size={32} />
                  <ArrowDown className="block lg:hidden text-white/50" size={32} />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
