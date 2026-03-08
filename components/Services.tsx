import { FlaskConical, Ruler, ShieldCheck, Stethoscope, FileText, GraduationCap, ArrowRight } from 'lucide-react';
import SectionTitle from './SectionTitle';
import Link from 'next/link';

const services = [
  { icon: FlaskConical, title: '检验检测', desc: '提供工业、电子、建材等全领域专业检测服务。' },
  { icon: Ruler, title: '计量服务', desc: '精密测量与仪器校准，确保量值准确统一。' },
  { icon: ShieldCheck, title: '认证认可', desc: '体系认证与产品认可，提升企业市场信誉。' },
  { icon: Stethoscope, title: '质量诊断', desc: '专家入企把脉问诊，全方位提升质量管控。' },
  { icon: FileText, title: '标准化服务', desc: '参与标准制修订，抢占产业技术话语权。' },
  { icon: GraduationCap, title: '质量培训', desc: '专业化人才培养，助力企业质量能力升级。' },
];

export default function Services() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-20">
        <SectionTitle title="质量基础服务" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link 
              key={service.title} 
              href={`/quality-infrastructure?tab=${service.title}`}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl border border-slate-100 flex flex-col items-center text-center transition-all group cursor-pointer"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                <service.icon className="text-blue-600" size={32} />
              </div>
              <h4 className="text-lg font-bold text-slate-800 mb-3">{service.title}</h4>
              <p className="text-sm text-slate-500 mb-6">{service.desc}</p>
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
