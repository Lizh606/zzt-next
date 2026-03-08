'use client';

import { useState } from 'react';
import { Search, PlayCircle, Wrench } from 'lucide-react';
import { Input } from '@/components/ui/input';

const categories = ['专家课堂', '典型案例', '质量工具', '互动交流'];

const expertCourses = [
  {
    id: 1,
    title: '卓越绩效概述 - 什么是卓越绩效模式',
    thumbnailTitle: '什么是卓越绩效模式',
    author: '高锋',
  },
  {
    id: 2,
    title: '卓越绩效概述 - 如何实施卓越绩效模式',
    thumbnailTitle: '如何实施卓越绩效模式',
    author: '高锋',
  },
  {
    id: 3,
    title: '卓越绩效模式的特点和作用',
    thumbnailTitle: '卓越绩效模式的特点和作用',
    author: '史丽魁',
  },
  {
    id: 4,
    title: '质量奖现场评审流程',
    thumbnailTitle: '质量奖现场评审流程',
    author: '史丽魁',
  },
  {
    id: 5,
    title: '质量奖管理办法',
    thumbnailTitle: '质量奖管理办法',
    author: '史丽魁',
  },
  {
    id: 6,
    title: '质量奖概述',
    thumbnailTitle: '质量奖概述',
    author: '史丽魁',
  },
];

export default function ShareZoneContent() {
  const [activeTab, setActiveTab] = useState(categories[0]);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-slate-50 pt-8 pb-24">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">分享专区</h1>
          <p className="text-slate-600">汇聚质量领域前沿知识、专家课程与典型案例，打造互动交流平台。</p>
        </div>

        {/* 1. Top full-width tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-2 mb-6 overflow-x-auto scrollbar-hide">
          <div className="flex gap-2 min-w-max">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
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
            <span className="text-sm font-medium text-slate-700">课程分类：</span>
            <select className="text-sm border-slate-200 rounded-md border px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#0054db] focus:border-transparent">
              <option value="">全部课程</option>
              <option value="卓越绩效">卓越绩效</option>
              <option value="质量奖">质量奖</option>
              <option value="体系认证">体系认证</option>
            </select>
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <Input
              type="text"
              placeholder="搜索课程名称或讲师..."
              className="pl-10 bg-slate-50 border-transparent focus-visible:ring-[#0054db]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* 3. Content Area */}
        {activeTab === '专家课堂' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertCourses
              .filter(c => c.title.includes(searchQuery) || c.author.includes(searchQuery))
              .map((course) => (
              <div key={course.id} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-all group cursor-pointer">
                {/* Thumbnail */}
                <div className="aspect-[16/9] relative bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600 p-6 flex flex-col items-center justify-center text-center overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-4 left-4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl translate-x-1/2 translate-y-1/2"></div>
                  <div className="absolute bottom-4 right-4 flex gap-1">
                    <div className="w-4 h-12 bg-white/20 rounded-sm"></div>
                    <div className="w-4 h-8 bg-white/20 rounded-sm mt-4"></div>
                    <div className="w-4 h-16 bg-white/20 rounded-sm -mt-4"></div>
                  </div>
                  
                  {/* Play button overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                    <PlayCircle className="text-white w-12 h-12" />
                  </div>

                  <h3 className="text-white text-xl md:text-2xl font-bold mb-4 relative z-0 drop-shadow-md px-4">
                    {course.thumbnailTitle}
                  </h3>
                  <p className="text-white/90 text-sm mt-auto relative z-0">
                    {course.author}
                  </p>
                </div>
                
                {/* Info */}
                <div className="p-4 bg-slate-50/50">
                  <h4 className="text-slate-800 font-medium group-hover:text-[#0054db] transition-colors line-clamp-1">
                    {course.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-24 text-center">
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Wrench className="text-slate-300" size={32} />
            </div>
            <h3 className="text-xl font-medium text-slate-900 mb-2">模块待开发</h3>
            <p className="text-slate-500">“{activeTab}”功能正在努力建设中，敬请期待！</p>
          </div>
        )}
      </div>
    </div>
  );
}
