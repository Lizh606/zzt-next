import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import SectionTitle from './SectionTitle';
import { Button } from '@/components/ui/button';
import { mockPolicies, mockNews } from '@/lib/mockData';

export default function PolicyNews() {
  // Take top 3 policies and top 4 news to display on homepage
  const displayPolicies = mockPolicies.slice(0, 3);
  const displayNews = mockNews.slice(0, 4);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-20 grid lg:grid-cols-2 gap-12">
        <div>
          <SectionTitle 
            title="政策法规" 
            action={
              <Link href="/policy-news" className="text-sm text-slate-500 hover:text-[#0054db] p-0 h-auto flex items-center gap-1 transition-colors group/btn">
                查看更多 <ChevronRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
              </Link>
            }
          />
          <div className="space-y-4">
            {displayPolicies.map((policy) => (
              <Link key={policy.id} className="flex items-center gap-4 group" href={`/policy-news?id=${policy.id}`}>
                <div className="bg-slate-100 p-3 rounded text-center min-w-[60px] group-hover:bg-[#0054db] group-hover:text-white transition-colors">
                  <span className="block text-lg font-bold">{policy.day || policy.date.split('-')[2]}</span>
                  <span className="text-[10px] uppercase opacity-80">{policy.month || `${policy.date.split('-')[1]}月`}</span>
                </div>
                <div className="flex-grow">
                  <h5 className="font-semibold group-hover:text-[#0054db] transition-colors line-clamp-1">{policy.title}</h5>
                  <p className="text-xs text-slate-400 mt-1">来源：{policy.department}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <SectionTitle 
            title="新闻动态" 
            action={
              <Link href="/news" className="text-sm text-slate-500 hover:text-[#0054db] p-0 h-auto flex items-center gap-1 transition-colors group/btn">
                查看更多 <ChevronRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
              </Link>
            }
          />
          <div className="flex flex-col gap-6">
            {displayNews.length > 0 && (
              <Link href={`/news?id=${displayNews[0].id}`} className="group flex flex-col sm:flex-row gap-4 items-center bg-slate-50 rounded-xl p-4 hover:shadow-md transition-all">
                <div className="w-full sm:w-1/3 relative h-32 rounded-lg overflow-hidden shrink-0">
                  <Image src={displayNews[0].image || "https://picsum.photos/seed/news/400/300"} alt="News" fill className="object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <div className="w-full sm:w-2/3 flex flex-col justify-center">
                  <span className="text-[#0054db] font-bold text-xs mb-2">头条聚焦</span>
                  <h4 className="text-base font-bold mb-2 leading-snug group-hover:text-[#0054db] transition-colors line-clamp-2">{displayNews[0].title}</h4>
                  <p className="text-xs text-slate-500 line-clamp-2">{displayNews[0].desc}</p>
                </div>
              </Link>
            )}
            
            <div className="space-y-3 pl-2">
              {displayNews.slice(1).map((item) => (
                <Link key={item.id} href={`/news?id=${item.id}`} className="flex items-center justify-between group py-2 border-b border-slate-100 last:border-0">
                  <div className="flex items-center gap-2 overflow-hidden">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#0054db] shrink-0"></div>
                    <h5 className="text-sm text-slate-700 group-hover:text-[#0054db] truncate transition-colors">{item.title}</h5>
                  </div>
                  <span className="text-xs text-slate-400 shrink-0 ml-4">{item.date}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
