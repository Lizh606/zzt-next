import { ReactNode } from 'react';

export default function SectionTitle({ title, dark = false, action }: { title: string; dark?: boolean; action?: ReactNode }) {
  return (
    <div className="mb-10 flex items-center justify-between">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <div className={`h-6 w-1 ${dark ? 'bg-white' : 'bg-[#0054db]'} rounded-full`}></div>
          <h3 className={`text-3xl font-bold ${dark ? 'text-white' : 'text-slate-900'}`}>{title}</h3>
        </div>
        <div className={`h-0.5 w-12 ${dark ? 'bg-white/20' : 'bg-[#0054db]/20'} mt-1 ml-4`}></div>
      </div>
      {action && <div className="self-start mt-1">{action}</div>}
    </div>
  );
}
