import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { IoAirplane } from "react-icons/io5";

const faqs = [
  {
    question: "Do you stitch uniforms according to IAF standards?",
    answer:
      "Yes. Choice Tailor focuses on Indian Air Force uniform requirements, proper fit, disciplined finishing, and premium stitching quality.",
  },
  {
    question: "Can I save my measurements for future orders?",
    answer:
      "Yes. You can create and save measurement profiles in your account and reuse them for future uniform orders.",
  },
  {
    question: "Do you deliver across India?",
    answer:
      "Yes. We support delivery across India. Delivery time may vary depending on your location and order type.",
  },
  {
    question: "Can I reorder without giving measurements again?",
    answer:
      "Yes. If your saved measurement profile is available, you can use it again while placing a new order.",
  },
  {
    question: "How long does stitching take?",
    answer:
      "Custom stitching time depends on the uniform type, quantity, and workload. You can track the order status from your account dashboard.",
  },
  {
    question: "Can custom stitched uniforms be returned?",
    answer:
      "Custom stitched products are usually not returnable unless there is a verified stitching or product issue.",
  },
];

export default function FAQSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#b89b3c]">
            FAQ
          </p>

          <h2 className="mt-3 font-serif text-3xl font-bold text-[#061735] sm:text-4xl">
            Frequently Asked Questions
          </h2>

          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-[#b89b3c]" />
            <IoAirplane className="text-[#8b762c]" />
            <span className="h-px w-16 bg-[#b89b3c]" />
          </div>
        </div>

        <Accordion type="single" collapsible className="mt-10 space-y-4">
          {faqs.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-xl border bg-white px-5 shadow-sm"
            >
              <AccordionTrigger className="text-left font-semibold text-[#061735] hover:no-underline">
                {item.question}
              </AccordionTrigger>

              <AccordionContent className="text-sm leading-7 text-gray-600">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}