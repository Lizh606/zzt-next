import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Building2, Lock, User, Phone } from 'lucide-react';

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
        <div className="text-center mb-8">
          <div className="mx-auto h-12 w-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
            <Building2 className="text-[#0054db]" size={28} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">注册账号</h2>
          <p className="text-sm text-slate-500 mt-2">加入智享</p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">企业/机构名称</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Building2 className="h-5 w-5 text-slate-400" />
              </div>
              <Input type="text" className="pl-10" placeholder="请输入完整企业名称" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">联系人姓名</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-slate-400" />
              </div>
              <Input type="text" className="pl-10" placeholder="请输入联系人姓名" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">手机号码</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Phone className="h-5 w-5 text-slate-400" />
              </div>
              <Input type="tel" className="pl-10" placeholder="请输入手机号码" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">设置密码</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-slate-400" />
              </div>
              <Input type="password" className="pl-10" placeholder="请设置登录密码" />
            </div>
          </div>

          <Button className="w-full bg-[#0054db] hover:bg-blue-700 text-white py-6 text-lg mt-2">
            注 册
          </Button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-600">
          已有账号？{' '}
          <Link href="/login" className="font-medium text-[#0054db] hover:text-blue-700">
            立即登录
          </Link>
        </div>
      </div>
    </div>
  );
}
