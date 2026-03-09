import OrganizationList from '@/components/OrganizationList';
import { Suspense } from 'react';

const categories = ['知识产权', '创新服务', '数字化转型', '智能化服务', '金融服务', '品牌培育'];

export default function QualityExpansionPage() {
  // Currently no data for expansion services, passing empty array
  const data: any[] = [];

  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50 flex items-center justify-center">加载中...</div>}>
      <OrganizationList
        title="质量拓展服务"
        categories={categories}
        data={data}
      />
    </Suspense>
  );
}
