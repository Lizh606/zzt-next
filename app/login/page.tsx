import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Building2, Lock, User } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
        <div className="text-center mb-8">
          <div className="mx-auto h-12 w-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
            <Building2 className="text-[#0054db]" size={28} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">登录智享</h2>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">用户名/手机号</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-slate-400" />
              </div>
              <Input type="text" className="pl-10" placeholder="请输入用户名或手机号" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">密码</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-slate-400" />
              </div>
              <Input type="password" className="pl-10" placeholder="请输入密码" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember-me" type="checkbox" className="h-4 w-4 text-[#0054db] focus:ring-[#0054db] border-slate-300 rounded" />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-700">自动登录</label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-[#0054db] hover:text-blue-700">忘记密码？</a>
            </div>
          </div>

          <Button className="w-full bg-[#0054db] hover:bg-blue-700 text-white py-6 text-lg">
            登 录
          </Button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-600">
          还没有账号？{' '}
          <Link href="/register" className="font-medium text-[#0054db] hover:text-blue-700">
            立即注册
          </Link>
        </div>
      </div>
    </div>
  );
}
