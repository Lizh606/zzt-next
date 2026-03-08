import { MapPin, Phone, Mail, Building2, Building } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-slate-300 py-16">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="grid lg:grid-cols-3 gap-12 mb-12 border-b border-slate-700 pb-12">
          <div>
            <h5 className="text-white font-bold mb-6 text-lg">组织架构</h5>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <Building className="text-blue-500 mt-1" size={20} />
                <div>
                  <p className="text-slate-400 text-xs mb-1 uppercase tracking-wider">指导单位</p>
                  <p className="text-slate-200">株洲市市场监督管理局</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Building2 className="text-blue-500 mt-1" size={20} />
                <div>
                  <p className="text-slate-400 text-xs mb-1 uppercase tracking-wider">运营单位</p>
                  <p className="text-slate-200">湖南大京科技有限公司</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h5 className="text-white font-bold mb-6 text-lg">服务时间</h5>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-slate-400">工作日：</span>
                <span className="text-slate-200">周一至周五 8:30 - 17:30</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-400">预约制：</span>
                <span className="text-slate-200">周六 9:00 - 12:00</span>
              </div>
              <p className="text-xs text-slate-500 italic">* 法定节假日除外，具体时间以公告为准</p>
            </div>
          </div>
          <div>
            <h5 className="text-white font-bold mb-6 text-lg">联系我们</h5>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="text-blue-500" size={20} />
                <span className="text-slate-300">13787333130</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-blue-500" size={20} />
                <a className="text-slate-300 hover:text-white transition-colors" href="mailto:hndj_2021@163.com">hndj_2021@163.com</a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-blue-500 shrink-0 mt-0.5" size={20} />
                <span className="text-slate-300 leading-relaxed">株洲市芦淞区航陌路5号航空城科创园二期 1-3#栋</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-400">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
            <span>© 2024 株洲市市场监督管理局 版权所有</span>
            <a className="hover:text-white transition-colors" href="#">湘ICP备XXXXXXXX号</a>
            <a className="hover:text-white transition-colors" href="#">湘公网安备 XXXXXXXXXXXX号</a>
          </div>
          <div className="flex gap-6">
            <a className="hover:text-white transition-colors" href="#">隐私声明</a>
            <a className="hover:text-white transition-colors" href="#">免责条款</a>
            <a className="hover:text-white transition-colors" href="#">网站地图</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
