import TranslatedHome from "@/components/home/TranslatedHome";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import UniqueApproachSection from "@/components/UniqueApproachSection/UniqueApproachSection";
import ProjectCaseStudies from "@/components/ProjectCaseStudies/ProjectCaseStudies";
import BuildScaleBanner from "@/components/BuildScaleBanner/BuildScaleBanner";
export default function Home() {
  return (
    <main>
      <TranslatedHome />
      <ServicesSection />
      <UniqueApproachSection />
      <ProjectCaseStudies />
      <BuildScaleBanner />
    </main>
  );
}
