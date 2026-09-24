import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ResearchSection from '@/components/ResearchSection';
import LeadershipSection from '@/components/LeadershipSection';
import AchievementsSection from '@/components/AchievementsSection';
import ConnectSection from '@/components/ConnectSection';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#09090b]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ResearchSection />
      <LeadershipSection />
      <AchievementsSection />
      <ConnectSection />
    </main>
  );
}
