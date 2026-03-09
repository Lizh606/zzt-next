'use client';
import { Search, Menu, X, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import logoImg from '@/app/public/logo.png';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const navItems = [
  { title: '首页', href: '/' },
  {
    title: '质量基础服务',
    href: '/quality-infrastructure',
    sub: ['检验检测', '计量服务', '认证认可', '质量诊断', '标准化服务', '质量培训'],
  },
  {
    title: '质量拓展服务',
    href: '/quality-expansion',
    sub: ['知识产权', '创新服务', '数字化转型', '智能化服务', '金融服务', '品牌培育'],
  },
  {
    title: '特色产业',
    href: '#',
    sub: ['航空动力', '轨道交通', '硬质合金', '新材料', '先进半导体', '北斗规模应用'],
  },
  { title: '政策法规', href: '/policy-news' },
  { title: '分享专区', href: '/share-zone' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 lg:px-20 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src={logoImg}
            alt="Logo"
            width={48}
            height={48}
            className="h-10 md:h-12 w-auto"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col justify-center">
            <h1 className="text-base md:text-lg font-bold tracking-tight text-slate-900 leading-tight">
              株洲市质量基础设施
            </h1>
            <span className="text-xs md:text-sm font-bold text-[#0054db] tracking-widest mt-0.5">
              一站式服务平台
            </span>
          </div>
        </Link>

        <div className="hidden xl:flex items-center justify-end flex-1">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.sub ? (
                    <>
                      <NavigationMenuTrigger className="bg-transparent hover:bg-slate-100/50 text-slate-700 hover:text-[#0054db] font-medium text-base">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[200px] gap-2 p-3 bg-white rounded-xl shadow-lg border border-slate-100">
                          {item.sub.map((subItem) => (
                            <li key={subItem}>
                              <NavigationMenuLink href={`${item.href}?tab=${subItem}`} className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-[#0054db] text-slate-600 font-medium text-sm">
                                {subItem}
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink href={item.href} className="bg-transparent hover:bg-slate-100/50 text-slate-700 hover:text-[#0054db] font-medium text-base px-4 py-2 rounded-md transition-colors inline-flex items-center justify-center">
                      {item.title}
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center xl:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-slate-100 h-10 w-10">
              <Menu size={24} className="text-slate-700" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] flex flex-col p-0">
              <SheetHeader className="p-6 border-b border-slate-100 text-left">
                <SheetTitle className="flex items-center gap-3">
                  <Image
                    src={logoImg}
                    alt="Logo"
                    width={32}
                    height={32}
                    className="h-8 w-auto"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex flex-col">
                    <span className="text-base font-bold text-slate-900 leading-tight">株洲市质量基础设施</span>
                    <span className="text-xs font-bold text-[#0054db] tracking-widest mt-0.5">一站式服务平台</span>
                  </div>
                </SheetTitle>
              </SheetHeader>
              <div className="flex-1 overflow-y-auto p-6">
                <Accordion className="w-full">
                  {navItems.map((item, index) => (
                    <div key={item.title}>
                      {item.sub ? (
                        <AccordionItem value={`item-${index}`} className="border-b-0">
                          <AccordionTrigger className="hover:no-underline py-4 text-base font-semibold text-slate-800 hover:text-[#0054db] transition-colors">
                            {item.title}
                          </AccordionTrigger>
                          <AccordionContent className="pb-4">
                            <div className="flex flex-col gap-2 pl-4 border-l-2 border-slate-100 ml-2">
                              {item.sub.map((subItem) => (
                                <a
                                  key={subItem}
                                  href={`${item.href}?tab=${subItem}`}
                                  className="text-sm font-medium text-slate-600 hover:text-[#0054db] py-2.5 px-4 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-between group"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {subItem}
                                  <ChevronRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                </a>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ) : (
                        <a
                          href={item.href}
                          className="flex items-center justify-between py-4 text-base font-semibold text-slate-800 hover:text-[#0054db] transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.title}
                        </a>
                      )}
                    </div>
                  ))}
                </Accordion>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
