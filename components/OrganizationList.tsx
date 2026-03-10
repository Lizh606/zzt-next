'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { MapPin, Phone, Building2, Search, FileCheck, MessageCircle, FileText } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface Organization {
  type: string;
  name: string;
  address: string;
  contact: string;
  content: string;
}

interface OrganizationListProps {
  title: string;
  categories: string[];
  data: Organization[];
}

export default function OrganizationList({ title, categories, data }: OrganizationListProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialTab = searchParams.get('tab') || categories[0];
  
  const [activeTab, setActiveTab] = useState(initialTab);
  const [searchQuery, setSearchQuery] = useState('');
  const [prevTab, setPrevTab] = useState<string | null>(null);

  const tab = searchParams.get('tab');
  if (tab !== prevTab) {
    setPrevTab(tab);
    if (tab && categories.includes(tab)) {
      setActiveTab(tab);
    }
  }

  const handleTabChange = (category: string) => {
    setActiveTab(category);
    router.push(`?tab=${category}`, { scroll: false });
  };

  const filteredData = data.filter(
    (org) =>
      org.type === activeTab &&
      (org.name.includes(searchQuery) || org.content.includes(searchQuery))
  );

  return (
    <div className="min-h-screen bg-slate-50 pt-8 pb-24">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">{title}</h1>
          <p className="text-slate-600">汇聚优质服务机构，为您提供专业、高效的质量服务支持。</p>
        </div>

        {/* 1. Top full-width tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-2 mb-6 overflow-x-auto scrollbar-hide">
          <div className="flex gap-2 min-w-max">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleTabChange(category)}
                className={`px-6 py-3 text-sm font-medium rounded-lg transition-colors ${
                  activeTab === category
                    ? 'bg-blue-50 text-[#0054db]'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* 2. Filter Bar */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-4 mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
            <span className="text-sm font-medium text-slate-700">条件筛选：</span>
            <select className="text-sm border-slate-200 rounded-md border px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#0054db] focus:border-transparent">
              <option value="">所在区域 (全部)</option>
              <option value="天元区">天元区</option>
              <option value="芦淞区">芦淞区</option>
              <option value="石峰区">石峰区</option>
              <option value="荷塘区">荷塘区</option>
            </select>
            <select className="text-sm border-slate-200 rounded-md border px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#0054db] focus:border-transparent">
              <option value="">机构资质 (全部)</option>
              <option value="CMA">CMA</option>
              <option value="CNAS">CNAS</option>
            </select>
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <Input
              type="text"
              placeholder="搜索机构名称或服务内容..."
              className="pl-10 bg-slate-50 border-transparent focus-visible:ring-[#0054db]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* 3. Content Area */}
        {filteredData.length > 0 ? (
          <div className="grid gap-6">
            {filteredData.map((org, index) => {
              // Parse content into tags (split by '、', ';', '；')
              const tags = org.content.split(/[、;；]/).filter(t => t.trim().length > 0);
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow flex flex-col md:flex-row gap-6"
                >
                  {/* Left: Large Logo */}
                  <div className="w-full md:w-48 h-48 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                    <Building2 className="text-slate-300" size={48} />
                  </div>

                  {/* Right: Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-4 hover:text-[#0054db] transition-colors cursor-pointer">
                        {org.name}
                      </h3>
                      
                      <div className="space-y-3 text-sm text-slate-600 mb-4">
                        <div className="flex items-center gap-2">
                          <Phone className="shrink-0 text-slate-400" size={16} />
                          <span><span className="text-slate-400 mr-1">联系方式：</span>{org.contact}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="shrink-0 text-slate-400" size={16} />
                          <span><span className="text-slate-400 mr-1">联系地址：</span>{org.address}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FileCheck className="shrink-0 text-slate-400" size={16} />
                          <span><span className="text-slate-400 mr-1">检测资质：</span>CMA, CNAS (示例)</span>
                        </div>
                      </div>

                      <div className="mb-6">
                        <div className="flex items-start gap-2">
                          <span className="text-sm text-slate-400 shrink-0 mt-1">检测项目：</span>
                          <div className="flex flex-wrap gap-2">
                            {tags.map((tag, i) => (
                              <span key={i} className="px-2.5 py-1 bg-blue-50 text-[#0054db] text-xs rounded-md">
                                {tag.trim()}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Right Buttons */}
                    <div className="flex justify-end gap-3 mt-4 md:mt-0">
                      <Button variant="outline" className="text-[#0054db] border-[#0054db] hover:bg-blue-50">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        在线咨询
                      </Button>
                      <Button className="bg-[#0054db] hover:bg-blue-700 text-white">
                        <FileText className="w-4 h-4 mr-2" />
                        在线委托
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-16 text-center">
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 className="text-slate-300" size={32} />
            </div>
            <h3 className="text-lg font-medium text-slate-900 mb-2">暂无相关机构</h3>
            <p className="text-slate-500 text-sm">该服务类型下暂未入驻服务机构，敬请期待。</p>
          </div>
        )}
      </div>
    </div>
  );
}
