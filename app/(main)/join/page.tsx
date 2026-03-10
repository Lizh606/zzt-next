import OrganizationJoinForm from '@/components/OrganizationJoinForm';

export default function JoinPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-slate-800 flex items-center justify-center gap-4">
            机构入驻申请表
          </h1>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
          <OrganizationJoinForm />
        </div>
      </div>
    </div>
  );
}
