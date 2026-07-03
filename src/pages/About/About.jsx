import AboutHero from "./_components/AboutHero";
import OurStory from "./_components/OurStory";
import StatsSection from "./_components/StatsSection";
import WhyChooseUs from "./_components/WhyChooseUs";
import ValuesSection from "./_components/ValuesSection";
import ProcessSection from "./_components/ProcessSection";
import TimelineSection from "./_components/TimelineSection";
import TeamSection from "./_components/TeamSection";
import CTASection from "./_components/CTASection";
import FAQSection from "./_components/FAQSection";

export default function About() {
  return (
    <main className="bg-white">
      <AboutHero />

      <OurStory />

      <StatsSection />

      <WhyChooseUs />

      <ValuesSection />

      <ProcessSection />

      <TimelineSection />

      <TeamSection />

      <CTASection />

      <FAQSection />
    </main>
  );
}