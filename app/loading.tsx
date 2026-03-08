import { Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-blue-100 rounded-full"></div>
          <div className="w-16 h-16 border-4 border-[#0054db] rounded-full border-t-transparent animate-spin absolute inset-0"></div>
        </div>
        <h2 className="text-lg font-medium text-slate-700">加载中...</h2>
        <p className="text-sm text-slate-500">请稍候，我们正在为您准备精彩内容</p>
      </div>
    </div>
  );
}
