'use client';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ChevronRight, 
  Download, 
  Cloud, 
  RefreshCw, 
  Tag, 
  BookOpen,
  FileText,
  Clock,
  CheckSquare,
  MessageSquare,
  List,
  Box,
  Users,
  Calendar,
  Edit3,
  Heart,
  Gift,
  Info,
  Crown
} from 'lucide-react';
import imgDajing from '@/app/public/dj.jpg';

export default function MyPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Profile Header */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-blue-50 overflow-hidden relative shrink-0">
              <Image 
                src={imgDajing} 
                alt="Avatar" 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">湖南大京科技有限公司</h1>
              <div className="flex items-center gap-3">
                <span className="bg-blue-50 text-[#0054db] px-3 py-1 rounded-full text-sm font-medium">企业账号</span>
                <span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-sm font-medium">已认证</span>
              </div>
            </div>
          </div>
        </div>

        {/* VIP Banner */}
        <div className="bg-gradient-to-r from-[#fef08a] to-[#fcd34d] rounded-2xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-start gap-3">
            <div className="flex items-center gap-2 text-[#854d0e] font-bold text-xl md:text-2xl">
              <Crown size={28} className="text-[#854d0e]" />
              专属权益 尊享便捷
            </div>
            <p className="text-[#a16207] text-sm md:text-base mb-2">购买VIP会员，可尊享数十种专项服务</p>
            <button className="bg-[#713f12] text-[#fef08a] text-sm md:text-base font-bold px-8 py-2.5 rounded-full hover:bg-[#854d0e] transition-colors shadow-sm">
              立即购买
            </button>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-10 text-[#854d0e]">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/40 flex items-center justify-center hover:bg-white/60 transition-colors cursor-pointer">
                <Download size={24} />
              </div>
              <span className="text-sm font-medium">标准下载</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/40 flex items-center justify-center hover:bg-white/60 transition-colors cursor-pointer">
                <Cloud size={24} />
              </div>
              <span className="text-sm font-medium">标准托管</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/40 flex items-center justify-center hover:bg-white/60 transition-colors cursor-pointer">
                <RefreshCw size={24} />
              </div>
              <span className="text-sm font-medium">批量查新</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/40 flex items-center justify-center hover:bg-white/60 transition-colors cursor-pointer">
                <Tag size={24} />
              </div>
              <span className="text-sm font-medium">招标标签</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/40 flex items-center justify-center hover:bg-white/60 transition-colors cursor-pointer">
                <BookOpen size={24} />
              </div>
              <span className="text-sm font-medium">知识园地</span>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Column (2 spans) */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* 我的订单 */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-6 bg-[#0054db] rounded-full"></div>
                  <h2 className="text-xl font-bold text-slate-900">我的订单</h2>
                </div>
                <Link href="#" className="text-sm text-slate-500 flex items-center hover:text-[#0054db] transition-colors">
                  全部订单 <ChevronRight size={18} />
                </Link>
              </div>
              <div className="flex justify-between md:justify-around items-center px-2 md:px-8">
                <div className="flex flex-col items-center gap-3 relative group cursor-pointer">
                  <div className="absolute -top-2 -right-3 bg-[#ef4444] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center z-10 shadow-sm">2</div>
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-[#0054db] transition-colors duration-300">
                    <FileText size={28} className="text-[#3b82f6] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-sm text-slate-600 font-medium">待接单</span>
                </div>
                <div className="flex flex-col items-center gap-3 relative group cursor-pointer">
                  <div className="absolute -top-2 -right-3 bg-[#f97316] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center z-10 shadow-sm">1</div>
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-[#0054db] transition-colors duration-300">
                    <Clock size={28} className="text-[#3b82f6] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-sm text-slate-600 font-medium">进行中</span>
                </div>
                <div className="flex flex-col items-center gap-3 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-[#0054db] transition-colors duration-300">
                    <CheckSquare size={28} className="text-[#3b82f6] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-sm text-slate-600 font-medium">待确认</span>
                </div>
                <div className="flex flex-col items-center gap-3 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-[#0054db] transition-colors duration-300">
                    <MessageSquare size={28} className="text-[#3b82f6] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-sm text-slate-600 font-medium">待评价</span>
                </div>
                <div className="flex flex-col items-center gap-3 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-slate-200 transition-colors duration-300">
                    <List size={28} className="text-slate-500 group-hover:text-slate-700 transition-colors duration-300" />
                  </div>
                  <span className="text-sm text-slate-600 font-medium">全部</span>
                </div>
              </div>
            </div>

            {/* 我的服务 */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1.5 h-6 bg-[#0054db] rounded-full"></div>
                <h2 className="text-xl font-bold text-slate-900">我的服务</h2>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-y-8 gap-x-4">
                <div className="flex flex-col items-center gap-3 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <Box size={24} className="text-[#3b82f6]" />
                  </div>
                  <span className="text-sm text-slate-600 text-center font-medium">仪器设备托管</span>
                </div>
                <div className="flex flex-col items-center gap-3 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center group-hover:bg-cyan-100 transition-colors">
                    <Cloud size={24} className="text-[#06b6d4]" />
                  </div>
                  <span className="text-sm text-slate-600 text-center font-medium">托管标准</span>
                </div>
                <div className="flex flex-col items-center gap-3 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                    <Users size={24} className="text-[#6366f1]" />
                  </div>
                  <span className="text-sm text-slate-600 text-center font-medium">人员管理</span>
                </div>
                <div className="flex flex-col items-center gap-3 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-fuchsia-50 flex items-center justify-center group-hover:bg-fuchsia-100 transition-colors">
                    <FileText size={24} className="text-[#d946ef]" />
                  </div>
                  <span className="text-sm text-slate-600 text-center font-medium">我的需求</span>
                </div>
                <div className="flex flex-col items-center gap-3 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                    <Clock size={24} className="text-[#f97316]" />
                  </div>
                  <span className="text-sm text-slate-600 text-center font-medium">我的惠企服务</span>
                </div>
                <div className="flex flex-col items-center gap-3 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                    <Calendar size={24} className="text-[#10b981]" />
                  </div>
                  <span className="text-sm text-slate-600 text-center font-medium">我的培训报名</span>
                </div>
                <div className="flex flex-col items-center gap-3 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center group-hover:bg-teal-100 transition-colors">
                    <Edit3 size={24} className="text-[#14b8a6]" />
                  </div>
                  <span className="text-sm text-slate-600 text-center font-medium">我的企标编写</span>
                </div>
                <div className="flex flex-col items-center gap-3 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-rose-50 flex items-center justify-center group-hover:bg-rose-100 transition-colors">
                    <Tag size={24} className="text-[#f43f5e]" />
                  </div>
                  <span className="text-sm text-slate-600 text-center font-medium">我的招标标签</span>
                </div>
                <div className="flex flex-col items-center gap-3 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors">
                    <Heart size={24} className="text-[#ef4444]" />
                  </div>
                  <span className="text-sm text-slate-600 text-center font-medium">我的收藏</span>
                </div>
                <div className="flex flex-col items-center gap-3 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                    <MessageSquare size={24} className="text-[#f59e0b]" />
                  </div>
                  <span className="text-sm text-slate-600 text-center font-medium">消息通知</span>
                </div>
                <div className="flex flex-col items-center gap-3 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-pink-50 flex items-center justify-center group-hover:bg-pink-100 transition-colors">
                    <Gift size={24} className="text-[#ec4899]" />
                  </div>
                  <span className="text-sm text-slate-600 text-center font-medium">邀请有礼</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (1 span) */}
          <div className="space-y-6">
            
            {/* 预警专区 */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-6 bg-[#ef4444] rounded-full"></div>
                <h2 className="text-xl font-bold text-slate-900">预警专区</h2>
              </div>
              <div className="space-y-4">
                <div className="border border-slate-100 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                  <div className="bg-[#ef4444] text-white text-sm font-bold py-2.5 px-4 flex items-center justify-between">
                    <span>仪器设备</span>
                    <ChevronRight size={16} className="opacity-70" />
                  </div>
                  <div className="flex divide-x divide-slate-100 py-5 bg-slate-50/50">
                    <div className="flex-1 flex flex-col items-center justify-center cursor-pointer group">
                      <span className="text-2xl font-black text-[#ef4444] mb-1 group-hover:scale-110 transition-transform">1</span>
                      <span className="text-sm text-slate-500 font-medium">逾期设备</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center cursor-pointer group">
                      <span className="text-2xl font-black text-[#ef4444] mb-1 group-hover:scale-110 transition-transform">3</span>
                      <span className="text-sm text-slate-500 font-medium">临检设备</span>
                    </div>
                  </div>
                </div>
                <div className="border border-slate-100 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                  <div className="bg-[#f59e0b] text-white text-sm font-bold py-2.5 px-4 flex items-center justify-between">
                    <span>标准服务</span>
                    <ChevronRight size={16} className="opacity-70" />
                  </div>
                  <div className="flex divide-x divide-slate-100 py-5 bg-slate-50/50">
                    <div className="flex-1 flex flex-col items-center justify-center cursor-pointer group">
                      <span className="text-2xl font-black text-[#f59e0b] mb-1 group-hover:scale-110 transition-transform">2</span>
                      <span className="text-sm text-slate-500 font-medium">有更新</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center cursor-pointer group">
                      <span className="text-2xl font-black text-[#f59e0b] mb-1 group-hover:scale-110 transition-transform">0</span>
                      <span className="text-sm text-slate-500 font-medium">将作废</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 我的权益 */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-6 bg-[#0054db] rounded-full"></div>
                  <h2 className="text-xl font-bold text-slate-900">我的权益</h2>
                </div>
                <Link href="#" className="text-sm text-slate-500 flex items-center hover:text-[#0054db] transition-colors">
                  查看全部 <ChevronRight size={18} />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-blue-50 transition-colors cursor-pointer group border border-slate-100 hover:border-blue-100">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    <Download size={20} className="text-[#3b82f6]" />
                  </div>
                  <span className="text-sm font-medium text-slate-700 group-hover:text-[#0054db]">标准下载</span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer group border border-slate-100">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    <Cloud size={20} className="text-slate-500" />
                  </div>
                  <span className="text-sm font-medium text-slate-700">标准托管</span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer group border border-slate-100">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    <RefreshCw size={20} className="text-slate-500" />
                  </div>
                  <span className="text-sm font-medium text-slate-700">批量查新</span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-orange-50 transition-colors cursor-pointer group border border-slate-100 hover:border-orange-100">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    <Tag size={20} className="text-[#f97316]" />
                  </div>
                  <span className="text-sm font-medium text-slate-700 group-hover:text-[#f97316]">招标标签</span>
                </div>
              </div>
            </div>

            {/* 关于平台 */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm flex items-center justify-between cursor-pointer hover:bg-slate-50 transition-colors group border border-transparent hover:border-slate-200">
              <div className="flex items-center gap-4 text-slate-700">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-white group-hover:shadow-sm transition-all">
                  <Info size={24} className="text-slate-500 group-hover:text-[#0054db] transition-colors" />
                </div>
                <span className="font-bold text-lg group-hover:text-[#0054db] transition-colors">关于平台</span>
              </div>
              <ChevronRight size={24} className="text-slate-400 group-hover:text-[#0054db] group-hover:translate-x-1 transition-all" />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
