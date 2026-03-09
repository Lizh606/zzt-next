import { parseCsv, infrastructureDataCsv } from '@/lib/data';
import OrganizationList from '@/components/OrganizationList';
import { Suspense } from 'react';

const categories = ['检验检测', '计量服务', '认证认可', '质量诊断', '标准化服务', '质量培训'];

export default function QualityInfrastructurePage() {
  const data = parseCsv(infrastructureDataCsv);

  // Map CSV headers to the expected interface
  const formattedData = data.map((item) => ({
    type: item['服务类型'],
    name: item['机构名称'],
    address: item['联系地址'],
    contact: item['联系方式'],
    content: item['服务内容'],
  }));

  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50 flex items-center justify-center">加载中...</div>}>
      <OrganizationList
        title="质量基础服务"
        categories={categories}
        data={formattedData}
      />
    </Suspense>
  );
}
