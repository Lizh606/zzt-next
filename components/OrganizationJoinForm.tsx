'use client';

import { useState } from 'react';
import { FileText, Award, Flag, ChevronUp, ChevronDown, Check, Upload } from 'lucide-react';

export default function OrganizationJoinForm() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  return (
    <div>
      {/* Stepper */}
      <div className="mb-16 px-4 md:px-8 max-w-3xl mx-auto">
        <div className="flex items-center justify-between relative">
          {[
            { step: 1, label: '机构基本信息' },
            { step: 2, label: '资质证书信息' },
            { step: 3, label: '机构入驻信息' }
          ].map(({ step, label }, index) => (
            <div key={step} className="flex items-center w-full last:w-auto">
              <div className="relative flex flex-col items-center">
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 z-10 ${
                    currentStep >= step 
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-200 ring-4 ring-blue-50' 
                      : 'bg-slate-100 text-slate-400 border border-slate-200'
                  }`}
                >
                  {currentStep > step ? <Check className="w-5 h-5" /> : step}
                </div>
                <div className={`absolute top-14 whitespace-nowrap text-sm font-medium transition-colors ${currentStep >= step ? 'text-slate-800' : 'text-slate-400'}`}>
                  {label}
                </div>
              </div>
              {index < 2 && (
                <div className="flex-1 h-[2px] mx-4 bg-slate-100 relative">
                  <div 
                    className="absolute left-0 top-0 h-full bg-blue-600 transition-all duration-500"
                    style={{ width: currentStep > step ? '100%' : '0%' }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Form Content */}
      <div className="mt-8">
        {currentStep === 1 && <Step1 />}
        {currentStep === 2 && <Step2 />}
        {currentStep === 3 && <Step3 />}
      </div>

      {/* Navigation */}
      <div className="mt-12 flex justify-center gap-4">
        {currentStep > 1 && (
          <button 
            onClick={prevStep}
            className="px-8 py-2.5 bg-white border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition-colors font-medium"
          >
            上一步
          </button>
        )}
        {currentStep < 3 ? (
          <button 
            onClick={nextStep}
            className="px-8 py-2.5 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors font-medium shadow-sm"
          >
            下一步
          </button>
        ) : (
          <button 
            className="px-8 py-2.5 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors font-medium shadow-sm"
          >
            提交
          </button>
        )}
      </div>
    </div>
  );
}

function Step1() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center gap-2 text-lg font-bold text-slate-800 border-b pb-3">
        <FileText className="w-5 h-5 text-blue-600" />
        机构基本信息
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        <FormInput label="机构名称" required placeholder="请输入机构名称" />
        <FormInput label="统一社会信用代码" required placeholder="请输入统一社会信用代码" />
        <FormInput label="注册地址" required placeholder="请输入注册地址" />
        <FormInput label="法定代表人" required placeholder="请输入法定代表人" />
        <FormInput label="机构投诉业务处理人" required placeholder="请输入处理人姓名" />
        <FormInput label="处理人手机号码" required placeholder="请输入手机号码" />

        <div className="grid grid-cols-2 gap-4 md:col-span-2">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-700">国家质检中心</label>
            <div className="flex items-center gap-4 mt-2 h-10">
              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <input type="radio" name="national" className="text-blue-600 focus:ring-blue-500 w-4 h-4" /> 是
              </label>
              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <input type="radio" name="national" className="text-blue-600 focus:ring-blue-500 w-4 h-4" /> 否
              </label>
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-700">省级质检中心</label>
            <div className="flex items-center gap-4 mt-2 h-10">
              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <input type="radio" name="provincial" className="text-blue-600 focus:ring-blue-500 w-4 h-4" /> 是
              </label>
              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <input type="radio" name="provincial" className="text-blue-600 focus:ring-blue-500 w-4 h-4" /> 否
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-slate-700">
          业务类型 <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
          {['检验检测', '计量测试', '特种设备', '认证认可', '标准服务', '知识产权', '品牌建设', '体系建设'].map((type) => (
            <label key={type} className="flex items-center gap-2 text-sm cursor-pointer">
              <input 
                type="checkbox" 
                className="rounded text-blue-600 focus:ring-blue-500 w-4 h-4" 
              /> 
              {type}
            </label>
          ))}
        </div>
      </div>

      <FormTextarea label="机构简介" required placeholder="请输入机构简介" maxLength={1000} />
      <FormTextarea label="机构业务范围" required placeholder="请输入机构业务范围" maxLength={500} />
      <FormTextarea label="备注说明" placeholder="请输入备注说明" maxLength={500} />

      <div className="space-y-6 pt-6 border-t border-slate-100">
        <h3 className="text-sm font-medium text-slate-800">相关附件上传</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FileUpload 
            label="机构营业执照或法人证书复印件" 
            hint="请上传小于2M的图片" 
          />
          <FileUpload 
            label="机构入驻平台承诺书" 
            hint="签字盖章后扫描，小于5M的PDF附件" 
            hasTemplate={true}
          />
        </div>
      </div>
    </div>
  );
}

function Step2() {
  const [certs, setCerts] = useState([{ id: 1, expanded: true }]);

  const toggleExpand = (id: number) => {
    setCerts(certs.map(c => c.id === id ? { ...c, expanded: !c.expanded } : c));
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center gap-2 text-lg font-bold text-slate-800 border-b pb-3">
        <Award className="w-5 h-5 text-blue-600" />
        资质证书信息
      </div>

      <div className="space-y-6">
        {certs.map((cert, index) => (
          <div key={cert.id} className="bg-slate-50 rounded-lg border border-slate-200 overflow-hidden transition-all">
            <div className="flex items-center justify-between p-4 bg-slate-100/80 border-b border-slate-200">
              <h3 className="text-blue-600 font-medium text-lg">资质证书{index + 1}</h3>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => toggleExpand(cert.id)}
                  className="text-sm text-slate-500 flex items-center gap-1 hover:text-slate-700 transition-colors"
                >
                  {cert.expanded ? '隐藏' : '展开'} 
                  {cert.expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                <button className="px-4 py-1.5 bg-orange-500 text-white text-xs rounded hover:bg-orange-600 transition-colors">
                  删除
                </button>
              </div>
            </div>
            
            {cert.expanded && (
              <div className="p-6 space-y-6 animate-in fade-in duration-300">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700">证书性质</label>
                  <div className="flex items-center gap-8 mt-2">
                    {['CMA', 'CNAS', '其他'].map((type) => (
                      <label key={type} className="flex items-center gap-2 text-sm cursor-pointer">
                        <input type="radio" name={`nature-${cert.id}`} className="text-blue-600 focus:ring-blue-500 w-4 h-4" /> {type}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700">证书资质</label>
                  <div className="flex items-center gap-8 mt-2">
                    {['国家中心', '省中心', '其他'].map((type) => (
                      <label key={type} className="flex items-center gap-2 text-sm cursor-pointer">
                        <input type="radio" name={`qual-${cert.id}`} className="text-blue-600 focus:ring-blue-500 w-4 h-4" /> {type}
                      </label>
                    ))}
                  </div>
                </div>

                <FormInput label="资质证书编号" required placeholder="请输入证书编号" />
                
                <FormTextarea label="备注说明" placeholder="请输入备注说明" maxLength={500} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <FileUpload 
                    label="资质证书" 
                    hint="请上传小于2M的图片" 
                  />
                  <FileUpload 
                    label="能力附表" 
                    hint="请上传小于4M的图片或PDF" 
                  />
                </div>
              </div>
            )}
          </div>
        ))}

        <button 
          onClick={() => setCerts([...certs, { id: Date.now(), expanded: true }])}
          className="px-5 py-2.5 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors shadow-sm"
        >
          添加资质证书+
        </button>
      </div>
    </div>
  );
}

function Step3() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center gap-2 text-lg font-bold text-slate-800 border-b pb-3">
        <Flag className="w-5 h-5 text-blue-600" />
        机构入驻信息
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        <FormInput label="机构入驻联系人" required placeholder="请输入机构入驻联系人" />
        <FormInput label="机构入驻联系人手机号码" required placeholder="请输入机构入驻联系人手机号码" />
        
        <div className="space-y-2 md:col-span-2">
          <label className="block text-sm font-medium text-slate-700">
            验证码 <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-4 max-w-md">
            <input 
              className="flex-1 border-slate-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm py-2 px-3 border outline-none"
              placeholder="请输入验证码"
            />
            <button className="px-6 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 whitespace-nowrap transition-colors">
              获取验证码
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function FormInput({ label, required, ...props }: any) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-slate-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input 
        className="w-full border-slate-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm py-2 px-3 border outline-none transition-colors"
        {...props}
      />
    </div>
  );
}

function FormTextarea({ label, required, maxLength, defaultValue, ...props }: any) {
  const [length, setLength] = useState(defaultValue ? defaultValue.length : 0);
  
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-slate-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <textarea 
          className="w-full border-slate-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm py-2 px-3 border min-h-[120px] outline-none transition-colors resize-y"
          defaultValue={defaultValue}
          onChange={(e) => setLength(e.target.value.length)}
          maxLength={maxLength}
          {...props}
        />
        {maxLength && (
          <div className="absolute bottom-3 right-3 text-xs text-slate-400 bg-white px-1">
            {length} / {maxLength}
          </div>
        )}
      </div>
    </div>
  );
}

function FileUpload({ label, hint, hasTemplate }: { label: string, hint: string, hasTemplate?: boolean }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-yellow-500 text-lg leading-none">★</span>
          <span className="text-sm font-medium text-slate-700">{label}</span>
        </div>
        {hasTemplate && (
          <button className="text-blue-500 text-sm hover:underline">模板下载</button>
        )}
      </div>
      <div className="border-2 border-dashed border-slate-200 rounded-lg p-6 flex flex-col items-center justify-center bg-slate-50 hover:bg-slate-100 hover:border-blue-400 transition-colors cursor-pointer group">
        <div className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
          <Upload className="w-5 h-5 text-blue-500" />
        </div>
        <p className="text-sm text-slate-600 font-medium mb-1">点击或拖拽文件到此处上传</p>
        <p className="text-xs text-slate-400">{hint}</p>
      </div>
    </div>
  );
}
