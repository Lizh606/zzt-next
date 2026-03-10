import Hero from '@/components/Hero';
import Services from '@/components/Services';
import IndustrialClusters from '@/components/IndustrialClusters';
import FeaturedIndustries from '@/components/FeaturedIndustries';
import ManufacturingZone from '@/components/ManufacturingZone';
import ServiceCoverage from '@/components/ServiceCoverage';
import Process from '@/components/Process';
import PolicyNews from '@/components/PolicyNews';
import EmpowermentCenter from '@/components/EmpowermentCenter';
import FadeIn from '@/components/FadeIn';

export default function Home() {
  return (
    <>
      <FadeIn><Hero /></FadeIn>
      <FadeIn><Services /></FadeIn>
      <FadeIn><IndustrialClusters /></FadeIn>
      <FadeIn><FeaturedIndustries /></FadeIn>
      <FadeIn><ManufacturingZone /></FadeIn>
      <FadeIn><ServiceCoverage /></FadeIn>
      <FadeIn><Process /></FadeIn>
      <FadeIn><PolicyNews /></FadeIn>
      <FadeIn><EmpowermentCenter /></FadeIn>
    </>
  );
}
