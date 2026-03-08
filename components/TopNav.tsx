import { Smartphone, Download } from 'lucide-react';

export default function TopNav() {
  return (
    <nav className="bg-white border-b border-slate-200 py-2">
      <div className="container mx-auto px-4 lg:px-20 flex justify-between items-center text-xs text-slate-500">
        <div className="flex items-center gap-4">
          <span>您好，欢迎访问株洲市质量基础设施一站式服务平台！</span>
          <a className="hover:text-[#0054db] flex items-center gap-1" href="#">
            <Smartphone size={14} />
            小程序
          </a>
          <a className="hover:text-[#0054db] flex items-center gap-1" href="#">
            <Download size={14} />
            操作手册
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a className="hover:text-[#0054db]" href="/login">登录</a>
          <span className="text-slate-300">|</span>
          <a className="hover:text-[#0054db]" href="/register">注册</a>
          <a
            className="bg-[#0054db] text-white px-3 py-1 rounded-sm font-medium hover:bg-blue-700 transition-colors"
            href="#"
          >
            机构入驻
          </a>
        </div>
      </div>
    </nav>
  );
}
