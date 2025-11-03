import HeroSection from '@/components/sections/hero';
import ContactSection from '@/components/sections/contact';
import AboutMeSection from '@/components/sections/about-me';
import EducationSection from '@/components/sections/education';
import SkillsSection from '@/components/sections/skills';
import ExperienceSection from '@/components/sections/experiences';
import WorkSection from '@/components/sections/work';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <EducationSection />
      <SkillsSection />
      <ExperienceSection />
      <WorkSection />
      <ContactSection />
    </>
  );
}
