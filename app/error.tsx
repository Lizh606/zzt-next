'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100 text-center max-w-md w-full">
        <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="text-red-500" size={40} />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">出错了</h2>
        <p className="text-slate-500 mb-8 leading-relaxed">
          抱歉，加载页面时遇到了一些问题。您可以尝试重新加载页面，或者返回首页。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => reset()} 
            className="bg-[#0054db] hover:bg-blue-700 text-white w-full sm:w-auto"
          >
            <RefreshCcw className="w-4 h-4 mr-2" />
            重新加载
          </Button>
          <Button 
            variant="outline" 
            onClick={() => window.location.href = '/'}
            className="w-full sm:w-auto"
          >
            返回首页
          </Button>
        </div>
      </div>
    </div>
  );
}
