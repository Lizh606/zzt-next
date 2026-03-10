import { parseCsv, infrastructureDataCsv } from '@/lib/data';
import OrganizationList from '@/components/OrganizationList';
import { Suspense } from 'react';

const categories = ['检验检测', '计量服务', '认证认可', '质量诊断', '标准化服务', '质量培训'];

export default function QualityInfrastructurePage() {
  const data = parseCsv(infrastructureDataCsv);

  // Map CSV headers to the expected interface and distribute into original categories
  const formattedData = data.map((item) => {
    const typeStr = item['类型'] || '';
    let category = '检验检测'; // default fallback
    
    // Strictly map based on the '类型' column to avoid over-classification
    if (typeStr.includes('认证')) {
      category = '认证认可';
    } else if (typeStr.includes('计量')) {
      category = '计量服务';
    } else if (typeStr.includes('检验') || typeStr.includes('检测')) {
      category = '检验检测';
    } else if (typeStr.includes('诊断')) {
      category = '质量诊断';
    } else if (typeStr.includes('标准')) {
      category = '标准化服务';
    } else if (typeStr.includes('培训')) {
      category = '质量培训';
    } else if (typeStr) {
      category = typeStr;
    }

    return {
      type: category,
      name: item['机构名称'] || '',
      address: item['机构地址'] || '',
      contact: item['联系方式'] || '',
      content: item['服务内容'] || '',
    };
  });

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
