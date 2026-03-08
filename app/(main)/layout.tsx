import TopNav from '@/components/TopNav';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function MainLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <TopNav />
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </>
  );
}
