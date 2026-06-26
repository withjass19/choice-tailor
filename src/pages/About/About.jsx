import AboutHero from "./_components/AboutHero";
import CTASection from "./_components/CTASection";
import OurStory from "./_components/OurStroy";
import ProcessSection from "./_components/ProcessSection";
import StatsSection from "./_components/StatsSection";
import ValuesSection from "./_components/ValuesSection";

export default function About() {
  return (
    <>
      <AboutHero/>
      <OurStory/>
      <StatsSection/>
      <ValuesSection/>
      <ProcessSection/>
      <CTASection/>
    </>
  );
}