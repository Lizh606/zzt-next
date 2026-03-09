import { Search, Menu, Download, UserPlus } from 'lucide-react';
import Image from 'next/image';
import logoImg from '@/app/public/logo.png';

export default function Header() {
  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 lg:px-20 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-1">
            <Image
              src={logoImg}
              alt="Logo"
              width={48}
              height={48}
              className="h-12 w-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-base md:text-lg font-bold tracking-tight text-slate-900 leading-tight">
              智享
            </h1>
            <span className="text-xs md:text-sm font-bold text-[#0054db] tracking-widest mt-0.5">
              制造强国质量基础设施一站式服务平台
            </span>
          </div>
        </div>
        <nav className="hidden xl:flex items-center gap-8">
          {['首页', '质量基础服务', '质量拓展服务', '特色产业', '政策法规', '分享专区'].map((item, index) => (
            <a
              key={item}
              href="#"
              className={`${index === 0 ? 'text-blue-700 font-bold border-b-2 border-blue-700 pb-1' : 'text-slate-600 hover:text-blue-700 font-medium transition-colors'}`}
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <button className="xl:hidden p-2">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
