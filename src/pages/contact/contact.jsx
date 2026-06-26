import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Map,
  Building2,
  Send,
  ShieldCheck,
  User,
  Tag,
  Shirt,
  Ruler,
  Truck,
  Package,
  Award,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { bgHero, ShirtModel, CapModel } from "@/assets/images";

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

const helpItems = [
  {
    title: "Custom Uniforms",
    desc: "Expert guidance for perfect fit uniforms",
    icon: <Shirt />,
  },
  {
    title: "Measurement Help",
    desc: "Assistance with taking accurate measurements",
    icon: <Ruler />,
  },
  {
    title: "Stitching & Quality",
    desc: "Premium stitching with quality assurance",
    icon: <Award />,
  },
  {
    title: "Orders & Delivery",
    desc: "Track orders and delivery support",
    icon: <Truck />,
  },
  {
    title: "Returns & Exchanges",
    desc: "Easy returns and exchange support",
    icon: <Package />,
  },
  {
    title: "General Inquiries",
    desc: "Any other questions? We’re here to help",
    icon: <ShieldCheck />,
  },
];

export default function Contact() {
  return (
    <main className="w-full bg-white text-[#061735]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#061735]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${bgHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061735] via-[#061735]/90 to-[#061735]/30" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-10 lg:py-20">
          <div className="text-white">
            <p className="text-sm font-bold uppercase tracking-wide text-[#d4a52f]">
              Contact Us
            </p>

            <div className="mt-2 h-px w-24 bg-[#d4a52f]" />

            <h1 className="mt-6 font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              We’re Here
              <br />
              <span className="text-[#d4a52f]">To Serve You</span>
            </h1>

            <p className="mt-6 max-w-md text-base leading-relaxed text-gray-200">
              Have a question, need assistance, or want a custom uniform? Our
              team is ready to help you.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d4a52f] text-[#d4a52f]">
                  <Phone size={22} />
                </span>
                <p className="text-sm font-semibold">Talk to our experts</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d4a52f] text-[#d4a52f]">
                  <FaWhatsapp size={22} />
                </span>
                <p className="text-sm font-semibold">Get quick support</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d4a52f] text-[#d4a52f]">
                  <Mail size={22} />
                </span>
                <p className="text-sm font-semibold">Write to us anytime</p>
              </div>
            </div>
          </div>

          <div className="hidden items-end justify-center lg:flex">
            <div className="relative flex items-end gap-4">
              <img
                src={CapModel}
                alt="IAF cap"
                className="h-36 object-contain"
              />
              <img
                src={ShirtModel}
                alt="IAF uniform"
                className="h-[420px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
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

      {/* Form + Office */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:px-10">
        {/* Message Form */}
        <div className="rounded-xl border bg-white p-6 shadow-md sm:p-8">
          <h2 className="font-serif text-3xl font-bold">Send Us a Message</h2>
          <div className="mt-2 flex items-center gap-3">
            <span className="h-px w-16 bg-[#d4a52f]" />
            <Send size={16} className="text-[#d4a52f]" />
          </div>

          <p className="mt-4 text-sm text-gray-600">
            Fill out the form and our team will get back to you shortly.
          </p>

          <form className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-md border px-4 py-3">
                <User size={18} className="text-[#061735]" />
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-transparent text-sm outline-none"
                />
              </div>

              <div className="flex items-center gap-3 rounded-md border px-4 py-3">
                <Mail size={18} className="text-[#061735]" />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-transparent text-sm outline-none"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-md border px-4 py-3">
              <Phone size={18} className="text-[#061735]" />
              <input
                type="tel"
                placeholder="Your Phone Number"
                className="w-full bg-transparent text-sm outline-none"
              />
            </div>

            <div className="flex items-center gap-3 rounded-md border px-4 py-3">
              <Tag size={18} className="text-[#061735]" />
              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-transparent text-sm outline-none"
              />
            </div>

            <textarea
              placeholder="Your Message"
              rows={6}
              className="w-full resize-none rounded-md border px-4 py-3 text-sm outline-none"
            />

            <button
              type="submit"
              className="flex items-center gap-3 rounded-md bg-[#061735] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0b2347]"
            >
              <Send size={17} className="text-[#d4a52f]" />
              Send Message
            </button>
          </form>

          <p className="mt-5 flex items-center gap-2 text-xs text-gray-600">
            <ShieldCheck size={16} />
            Your information is safe with us. We respect your privacy.
          </p>
        </div>

        {/* Office */}
        <div className="rounded-xl border bg-white p-6 shadow-md sm:p-8">
          <h2 className="font-serif text-3xl font-bold">Our Store & Office</h2>
          <div className="mt-2 flex items-center gap-3">
            <span className="h-px w-16 bg-[#d4a52f]" />
            <Send size={16} className="text-[#d4a52f]" />
          </div>

          <div className="mt-6 space-y-6">
            <div className="flex gap-4">
              <MapPin className="mt-1 shrink-0" size={30} />
              <div>
                <h3 className="font-bold">Choice Tailor</h3>
                <p className="text-sm text-gray-700">
                  13-AF Force Road, New Delhi – 110001 India
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Map className="mt-1 shrink-0" size={30} />
              <div>
                <h3 className="font-bold">Landmark</h3>
                <p className="text-sm text-gray-700">
                  Near Air Force Station Gate
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Building2 className="mt-1 shrink-0" size={30} />
              <div>
                <h3 className="font-bold">Store Type</h3>
                <p className="text-sm text-gray-700">
                  Experience Center & Tailoring Unit
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-lg border">
            <div className="mt-6 overflow-hidden rounded-lg border shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.419894906527!2d76.798204!3d30.6784599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed7392bed8b7%3A0x22d8022829ce68b3!2sChoice%20tailor%20behlana%20160003!5e0!3m2!1sen!2sin!4v1781586467066!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Choice Tailor Location"
                className="w-full"
              />
            </div>
          </div>

          <button className="mt-4 flex items-center gap-3 rounded-md bg-[#061735] px-6 py-3 text-sm font-bold text-white">
            <Send size={17} className="text-[#d4a52f]" />
            Get Directions
          </button>
        </div>
      </section>

      {/* Help Section */}
      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-10">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold">
            We’re Here To Help You With
          </h2>

          <div className="mt-3 flex items-center justify-center gap-3">
            <span className="h-px w-20 bg-[#d4a52f]" />
            <Send size={16} className="text-[#d4a52f]" />
            <span className="h-px w-20 bg-[#d4a52f]" />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {helpItems.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center border-gray-200 text-center lg:border-r last:lg:border-r-0"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#061735] text-[#d4a52f]">
                {item.icon}
              </div>

              <h3 className="mt-4 font-bold">{item.title}</h3>
              <div className="mt-2 h-px w-16 bg-gray-300" />
              <p className="mt-3 max-w-[160px] text-sm text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
