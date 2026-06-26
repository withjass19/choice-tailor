import {
  CheckCircle,
  XCircle,
  PlayCircle,
  ArrowRight,
  Shirt,
  ClipboardList,
  Shield,
  UserRound,
  Ruler,
  HelpCircle,
  Phone,
  ShoppingBag,
  Lock,
  RotateCcw,
  BadgeCheck,
} from "lucide-react";

import {
  bgHero,
  ShirtModel,
  measurementMan,
  MobileTape,
  IntroVideo,
  neck,
  shoulder,
  chest,
  sleeves,
  shirtLength,
  waist,
  hip,
  thigh,
  inseam,
  pant,
} from "@/assets/images";
// import ReactPlayer from "react-player"

const benefits = [
  {
    title: "Perfect Fit",
    desc: "No loose fitting. No tight fitting.",
    icon: <Shirt />,
  },
  {
    title: "Easy Reorder",
    desc: "Measure once. Order forever.",
    icon: <ClipboardList />,
  },
  {
    title: "Better Comfort",
    desc: "Designed specifically for your body.",
    icon: <UserRound />,
  },
  {
    title: "Military Precision",
    desc: "Uniform standards maintained.",
    icon: <Shield />,
  },
];

const categories = [
  {
    title: "Upper Body",
    points: ["Neck", "Shoulder", "Chest", "Sleeve Length", "Shirt Length"],
    image: measurementMan,
  },
  {
    title: "Lower Body",
    points: ["Waist", "Hip", "Thigh", "Inseam", "Pant Length"],
    image: MobileTape,
  },
];

const steps = [
  {
    id: 1,
    title: "Neck",
    image: neck,
  },
  {
    id: 2,
    title: "Shoulder",
    image: shoulder,
  },
  {
    id: 3,
    title: "Chest",
    image: chest,
  },
  {
    id: 4,
    title: "Sleeve Length",
    image: sleeves,
  },
  {
    id: 5,
    title: "Shirt Length",
    image: shirtLength,
  },
  {
    id: 6,
    title: "Waist",
    image: waist,
  },
  {
    id: 7,
    title: "Hip",
    image: hip,
  },
  {
    id: 8,
    title: "Thigh",
    image: thigh,
  },
  {
    id: 9,
    title: "Inseam",
    image: inseam,
  },
  {
    id: 10,
    title: "Pant Length",
    image: pant,
  },
];

const tips = [
  "Use a soft measuring tape",
  "Stand straight in natural posture",
  "Don’t pull the tape too tight",
  "Ask someone for help",
  "Measure twice for accuracy",
  "Wear light clothing while measuring",
];

const mistakes = [
  "Pulling the tape too tight",
  "Measuring from wrong points",
  "Slouching or bending while measuring",
  "Measuring over thick clothes",
  "Incorrect waist position",
];

const faqs = [
  "Can I use centimeters for measurements?",
  "How many measurement profiles can I save?",
  "Can I edit my measurements later?",
  "What if I enter wrong measurements?",
  "Do I need help while measuring?",
];

export default function MeasurementGuide() {
  return (
    <main className="w-full bg-white text-[#061735]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#061735]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${bgHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061735] via-[#061735]/95 to-[#061735]/40" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-10">
          <div className="text-white">
            <p className="text-sm text-gray-300">Home › Measurement Guide</p>

            <h1 className="mt-6 font-serif text-4xl font-bold leading-tight sm:text-5xl">
              Measurement Guide
              <br />
              <span className="text-[#d4a52f]">
                Get the Perfect Fit Every Time
              </span>
            </h1>

            <p className="mt-5 max-w-lg text-sm leading-relaxed text-gray-200 sm:text-base">
              Follow our step-by-step measurement guide and save your profile
              for future orders.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button className="flex items-center justify-center gap-2 rounded-md bg-[#b89b3c] px-6 py-3 text-sm font-bold text-white">
                <PlayCircle size={18} />
                Watch Video Guide
              </button>

              <button className="rounded-md border border-white px-6 py-3 text-sm font-bold text-white">
                Create Measurement Profile
              </button>
            </div>
          </div>

          <div className="hidden justify-center lg:flex">
            <img
              src={measurementMan}
              alt="Measurement guide"
              className="h-[420px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-10">
        <div className="text-center">
          <h2 className="font-serif text-2xl font-bold md:text-3xl">
            Why Accurate Measurement Matters
          </h2>
          <div className="mx-auto mt-3 h-px w-28 bg-[#d4a52f]" />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-4 rounded-lg border bg-white p-5 shadow-sm"
            >
              <div className="text-[#b89b3c]">{item.icon}</div>
              <div>
                <h3 className="font-bold">{item.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video + Categories */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 pb-10 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:px-10">
        <div className="rounded-xl border bg-white p-5 shadow-md">
          <h2 className="font-serif text-2xl font-bold">
            How To Take Your Measurements
          </h2>

          <div className="mask-auto flex h-[260px] items-center justify-center rounded-lg bg-[#061735] text-white sm:h-[330px]">
            <iframe
              className="w-full h-full"
              src={IntroVideo}
              frameborder="0"
            ></iframe>
          </div>
        </div>

        <div>
          <h2 className="text-center font-serif text-2xl font-bold">
            Measurement Categories
          </h2>
          <div className="mx-auto mt-3 h-px w-24 bg-[#d4a52f]" />

          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
            {categories.map((item) => (
              <div key={item.title} className="rounded-xl border p-6 shadow-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-bold">{item.title}</h3>
                    <ul className="mt-4 space-y-2 text-sm">
                      {item.points.map((point) => (
                        <li key={point}>• {point}</li>
                      ))}
                    </ul>
                  </div>

                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-44 w-full object-contain"
                  />
                </div>

                <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-md bg-[#061735] py-3 text-sm font-bold text-white">
                  View All Steps <ArrowRight size={17} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-10">
        <div className="text-center">
          <h2 className="font-serif text-2xl font-bold md:text-3xl">
            Step-by-Step Measurement Guide
          </h2>
          <div className="mx-auto mt-3 h-px w-24 bg-[#d4a52f]" />
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {steps.map((step) => (
            <div
              key={step.id}
              className="rounded-lg border bg-white p-4 shadow-sm"
            >
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#061735] text-xs font-bold text-white">
                  {step.id}
                </span>
                <h3 className="text-sm font-bold">{step.title}</h3>
              </div>

              <div className="mt-4 flex h-32 items-center justify-center rounded-md bg-gray-50">
                {/* <Ruler className="text-[#b89b3c]" size={54} /> */}
                <img
                  src={step.image}
                  alt={step.title}
                  className="h-32 w-full object-contain"
                />
              </div>

              <button className="mt-4 flex w-full items-center justify-between rounded-md border px-3 py-2 text-xs font-semibold">
                How to Measure
                <PlayCircle size={16} className="text-[#b89b3c]" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Tips + Mistakes */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 pb-10 sm:px-6 lg:grid-cols-2 lg:px-10">
        <div className="rounded-xl border bg-green-50/40 p-6">
          <h3 className="font-serif text-xl font-bold">Measurement Tips</h3>

          <div className="mt-5 space-y-3">
            {tips.map((tip) => (
              <p key={tip} className="flex items-center gap-3 text-sm">
                <CheckCircle size={18} className="text-green-600" />
                {tip}
              </p>
            ))}
          </div>
        </div>

        <div className="rounded-xl border bg-red-50/50 p-6">
          <h3 className="font-serif text-xl font-bold">Common Mistakes</h3>

          <div className="mt-5 space-y-3">
            {mistakes.map((mistake) => (
              <p key={mistake} className="flex items-center gap-3 text-sm">
                <XCircle size={18} className="text-red-500" />
                {mistake}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 pb-12 sm:px-6 lg:grid-cols-[1.5fr_0.7fr] lg:px-10">
        <div>
          <div className="text-center">
            <h2 className="font-serif text-2xl font-bold">
              Frequently Asked Questions
            </h2>
            <div className="mx-auto mt-3 h-px w-24 bg-[#d4a52f]" />
          </div>

          <div className="mt-6 overflow-hidden rounded-xl border">
            {faqs.map((faq) => (
              <button
                key={faq}
                className="flex w-full items-center justify-between border-b px-5 py-4 text-left text-sm font-semibold last:border-b-0"
              >
                {faq}
                <HelpCircle size={17} />
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center rounded-xl border p-8 shadow-sm">
          <Ruler size={52} className="text-[#061735]" />
          <h3 className="mt-5 font-serif text-2xl font-bold">
            Still Need Help?
          </h3>
          <p className="mt-3 text-sm text-gray-600">
            Our support team is here to help you get the perfect fit.
          </p>

          <button className="mt-6 flex items-center justify-center gap-2 rounded-md bg-[#b89b3c] px-5 py-3 text-sm font-bold text-white">
            Contact Us <Phone size={17} />
          </button>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#061735]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-10 text-white sm:px-6 lg:grid-cols-[1fr_1.2fr_0.8fr] lg:px-10">
          <div className="hidden lg:block">
            <img
              src={ShirtModel}
              alt="Uniform"
              className="h-56 object-contain"
            />
          </div>

          <div>
            <h2 className="font-serif text-3xl font-bold md:text-4xl">
              Ready to Create Your
              <br />
              <span className="text-[#d4a52f]">Measurement Profile?</span>
            </h2>
            <p className="mt-4 text-sm text-gray-300">
              Save your measurements once and use them for every future order.
            </p>

            <div className="mt-6 flex flex-wrap gap-6 text-xs text-gray-300">
              <span className="flex items-center gap-2">
                <Lock size={18} /> Secure & Private
              </span>
              <span className="flex items-center gap-2">
                <RotateCcw size={18} /> Use Anytime
              </span>
              <span className="flex items-center gap-2">
                <BadgeCheck size={18} /> Perfect Fit
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <button className="flex w-full items-center justify-center gap-2 rounded-md bg-[#b89b3c] px-6 py-3 text-sm font-bold text-white">
              Create Measurement Profile <ArrowRight size={17} />
            </button>

            <button className="flex w-full items-center justify-center gap-2 rounded-md border border-white px-6 py-3 text-sm font-bold text-white">
              Shop Uniforms <ShoppingBag size={17} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
