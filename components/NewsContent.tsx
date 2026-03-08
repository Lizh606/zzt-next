'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, FileText, Calendar, ArrowLeft, Building2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { mockNews } from '@/lib/mockData';

function NewsInner() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNews, setSelectedNews] = useState<typeof mockNews[0] | null>(null);

  useEffect(() => {
    const id = searchParams.get('id');
    if (id) {
      const newsItem = mockNews.find(n => n.id.toString() === id);
      if (newsItem) {
        setSelectedNews(newsItem);
      }
    }
  }, [searchParams]);

  const filteredNews = mockNews.filter(
    (n) => n.title.includes(searchQuery) || n.content.includes(searchQuery)
  );

  return (
    <div className="min-h-screen bg-slate-50 pt-8 pb-24">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">新闻动态</h1>
          <p className="text-slate-600">了解平台最新资讯、活动预告及行业动态。</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          {selectedNews ? (
            <div className="p-8 lg:p-12">
              <Button 
                variant="ghost" 
                className="mb-8 text-slate-500 hover:text-[#0054db] -ml-4"
                onClick={() => setSelectedNews(null)}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                返回列表
              </Button>
              
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6 text-center leading-snug">
                  {selectedNews.title}
                </h2>
                
                <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500 mb-12 pb-8 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <Building2 size={16} />
                    <span>发布部门：{selectedNews.department}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>发布日期：{selectedNews.date}</span>
                  </div>
                </div>

                <div className="prose prose-slate max-w-none prose-p:leading-relaxed prose-p:text-slate-700 whitespace-pre-wrap">
                  {selectedNews.content}
                </div>
              </div>
            </div>
          ) : (
            <div className="p-6 lg:p-8">
              <div className="relative w-full mb-8">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <Input
                  type="text"
                  placeholder="输入关键字搜索新闻动态..."
                  className="pl-12 py-6 text-base bg-slate-50 border-slate-200 focus-visible:ring-[#0054db] rounded-xl w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="divide-y divide-slate-100">
                {filteredNews.length > 0 ? (
                  filteredNews.map((newsItem) => (
                    <div 
                      key={newsItem.id} 
                      className="py-6 group cursor-pointer"
                      onClick={() => setSelectedNews(newsItem)}
                    >
                      <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-[#0054db] transition-colors line-clamp-2">
                        {newsItem.title}
                      </h3>
                      <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                        {newsItem.desc}
                      </p>
                      <div className="flex items-center gap-6 text-sm text-slate-500">
                        <div className="flex items-center gap-1.5">
                          <Building2 size={15} />
                          <span>{newsItem.department}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar size={15} />
                          <span>{newsItem.date}</span>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="py-16 text-center text-slate-500">
                    <FileText className="w-16 h-16 mx-auto text-slate-300 mb-4" />
                    <p>没有找到相关新闻动态</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function NewsContent() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50 pt-8 pb-24 flex items-center justify-center">加载中...</div>}>
      <NewsInner />
    </Suspense>
  );
}
