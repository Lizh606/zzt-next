import type {Metadata} from 'next';
import {Inter, Geist } from 'next/font/google';
import './globals.css';
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: '智享',
  description: '制造强国质量基础设施一站式服务平台，为企业提供全要素、全过程、全周期、全产业链的综合质量服务。',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="zh-CN" className={cn("font-sans", geist.variable)}>
      <body className="font-sans antialiased flex flex-col min-h-screen bg-slate-50" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
