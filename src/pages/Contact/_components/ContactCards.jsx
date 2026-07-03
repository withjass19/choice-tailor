import { Phone, Mail, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const contactCards = [
  {
    title: "Call Us",
    value: "+91 98765 43210",
    desc: "Mon - Sat | 9:00 AM - 7:00 PM",
    icon: <Phone />,
  },
  {
    title: "WhatsApp Us",
    value: "+91 98765 43210",
    desc: "Quick Response",
    icon: <FaWhatsapp />,
  },
  {
    title: "Email Us",
    value: "support@choicetailor.com",
    desc: "We reply within 24 hrs",
    icon: <Mail />,
  },
  {
    title: "Working Hours",
    value: "Mon - Sat | 9:00 AM - 7:00 PM",
    desc: "Sunday Closed",
    icon: <Clock />,
  },
];

export default function ContactCards() {
  return (
    <section className="relative z-10 mx-auto -mt-10 max-w-7xl px-4 sm:px-6 lg:px-10">
      <div className="grid grid-cols-1 gap-4 rounded-xl border bg-white p-5 shadow-xl sm:grid-cols-2 lg:grid-cols-4">
        {contactCards.map((item) => (
          <div
            key={item.title}
            className="flex items-center gap-4 border-gray-200 lg:border-r last:lg:border-r-0"
          >
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#061735] text-[#d4a52f]">
              {item.icon}
            </div>

            <div>
              <h3 className="font-bold">{item.title}</h3>
              <p className="mt-1 text-sm font-semibold">{item.value}</p>
              <p className="mt-2 text-xs text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}