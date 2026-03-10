'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, FileText, Calendar, ArrowLeft, Building2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { mockPolicies } from '@/lib/mockData';

function PolicyNewsInner() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPolicy, setSelectedPolicy] = useState<typeof mockPolicies[0] | null>(null);
  const [prevId, setPrevId] = useState<string | null>(null);

  const id = searchParams.get('id');
  if (id !== prevId) {
    setPrevId(id);
    if (id) {
      const policyItem = mockPolicies.find(p => p.id.toString() === id);
      if (policyItem) {
        setSelectedPolicy(policyItem);
      }
    } else {
      setSelectedPolicy(null);
    }
  }

  const filteredPolicies = mockPolicies.filter(
    (p) => p.title.includes(searchQuery) || p.content.includes(searchQuery)
  );

  return (
    <div className="min-h-screen bg-slate-50 pt-8 pb-24">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">政策法规</h1>
          <p className="text-slate-600">汇集国家、省、市各级质量相关政策法规，为您提供权威资讯。</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          {selectedPolicy ? (
            <div className="p-8 lg:p-12">
              <Button 
                variant="ghost" 
                className="mb-8 text-slate-500 hover:text-[#0054db] -ml-4"
                onClick={() => setSelectedPolicy(null)}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                返回列表
              </Button>
              
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6 text-center leading-snug">
                  {selectedPolicy.title}
                </h2>
                
                <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500 mb-12 pb-8 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <Building2 size={16} />
                    <span>发布部门：{selectedPolicy.department}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>发布日期：{selectedPolicy.date}</span>
                  </div>
                </div>

                <div className="prose prose-slate max-w-none prose-p:leading-relaxed prose-p:text-slate-700 whitespace-pre-wrap">
                  {selectedPolicy.content}
                </div>
              </div>
            </div>
          ) : (
            <div className="p-6 lg:p-8">
              <div className="relative w-full mb-8">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <Input
                  type="text"
                  placeholder="输入关键字搜索政策法规..."
                  className="pl-12 py-6 text-base bg-slate-50 border-slate-200 focus-visible:ring-[#0054db] rounded-xl w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="divide-y divide-slate-100">
                {filteredPolicies.length > 0 ? (
                  filteredPolicies.map((policy) => (
                    <div 
                      key={policy.id} 
                      className="py-6 group cursor-pointer"
                      onClick={() => setSelectedPolicy(policy)}
                    >
                      <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-[#0054db] transition-colors line-clamp-2">
                        {policy.title}
                      </h3>
                      <div className="flex items-center gap-6 text-sm text-slate-500">
                        <div className="flex items-center gap-1.5">
                          <Building2 size={15} />
                          <span>{policy.department}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar size={15} />
                          <span>{policy.date}</span>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="py-16 text-center text-slate-500">
                    <FileText className="w-16 h-16 mx-auto text-slate-300 mb-4" />
                    <p>没有找到相关政策法规</p>
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

export default function PolicyNewsContent() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50 pt-8 pb-24 flex items-center justify-center">加载中...</div>}>
      <PolicyNewsInner />
    </Suspense>
  );
}
