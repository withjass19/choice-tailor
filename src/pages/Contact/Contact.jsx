import ContactHero from "./_components/ContactHero";
import ContactCards from "./_components/ContactCards";
import ContactForm from "./_components/ContactForm";
import OfficeSection from "./_components/OfficeSection";
import HelpSection from "./_components/HelpSection";
import FAQSection from "../About/_components/FAQSection";
import CTASection from "../About/_components/CTASection";

export default function Contact() {
  return (
    <main className="w-full bg-white text-[#061735]">
      <ContactHero />

      <ContactCards />

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-10">
        <ContactForm />
        <OfficeSection />
      </section>

      <HelpSection />

      <FAQSection />
      <CTASection/>
    </main>
  );
}