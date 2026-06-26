import {
  Plus,
  PlayCircle,
  ArrowRight,
  Pencil,
  Trash2,
} from "lucide-react";

import { ShirtModel } from "@/assets/images";

const profiles = [
  {
    id: 1,
    title: "Summer Uniform",
    image: ShirtModel,
    updated: "Updated on 10 Jun 2025",
    chest: "40 inch",
    waist: "34 inch",
    height: "175 cm",
  },
  {
    id: 2,
    title: "Winter Uniform",
    image: ShirtModel,
    updated: "Updated on 05 Jan 2025",
    chest: "41 inch",
    waist: "35 inch",
    height: "175 cm",
  },
  {
    id: 3,
    title: "Ceremonial Uniform",
    image: ShirtModel,
    updated: "Updated on 15 Dec 2024",
    chest: "40 inch",
    waist: "34 inch",
    height: "175 cm",
  },
];

export default function MeasurementProfiles() {
  return (
    <>
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm text-gray-500">
            Homse / My Account / Measurement Profiles
          </p>

          <h1 className="mt-2 font-serif text-4xl font-bold text-[#061735]">
            Measurement Profiles
          </h1>

          <p className="mt-2 text-gray-600">
            Save multiple measurement profiles for easy reordering.
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-lg bg-[#061735] px-5 py-3 text-sm font-semibold text-white">
          <Plus size={18} />
          Create New Profile
        </button>
      </div>

      {/* Help Banner */}
      <div className="mt-6 flex flex-col gap-4 rounded-xl bg-[#061735] p-6 text-white lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="font-serif text-2xl font-bold">
            Need help taking measurements?
          </h2>

          <p className="mt-2 text-gray-300">
            Follow our step-by-step measurement guide.
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-lg border border-[#b89b3c] px-5 py-3 text-sm font-semibold text-[#b89b3c]">
          <PlayCircle size={18} />
          View Guide
        </button>
      </div>

      {/* Tabs */}
      <div className="mt-8 rounded-xl border bg-white">
        <div className="flex gap-8 border-b px-6">
          <button className="border-b-2 border-[#b89b3c] py-4 text-sm font-semibold text-[#b89b3c]">
            All Profiles
          </button>

          <button className="py-4 text-sm font-semibold text-gray-500">
            Active
          </button>

          <button className="py-4 text-sm font-semibold text-gray-500">
            Archived
          </button>
        </div>

        {/* Cards */}
        <div className="grid gap-5 p-5 md:grid-cols-2 xl:grid-cols-3">
          {profiles.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </div>
      </div>
    </>
  );
}

function ProfileCard({ profile }) {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="flex items-start gap-4">
        <div className="h-20 w-20 rounded-full bg-[#f5f5f5] p-2">
          <img
            src={profile.image}
            alt={profile.title}
            className="h-full w-full object-contain"
          />
        </div>

        <div className="flex-1">
          <h3 className="font-bold text-[#061735]">
            {profile.title}
          </h3>

          <span className="mt-2 inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
            Active
          </span>

          <p className="mt-2 text-xs text-gray-500">
            {profile.updated}
          </p>
        </div>
      </div>

      {/* Measurements */}
      <div className="mt-5 space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500">Chest</span>
          <span>{profile.chest}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Waist</span>
          <span>{profile.waist}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Height</span>
          <span>{profile.height}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-6 flex gap-2">
        <button className="flex flex-1 items-center justify-center gap-2 rounded-lg border px-3 py-2 text-sm">
          <Pencil size={16} />
          Edit
        </button>

        <button className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-red-300 px-3 py-2 text-sm text-red-600">
          <Trash2 size={16} />
          Delete
        </button>
      </div>

      <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-[#061735] py-2.5 text-sm font-medium text-white">
        Use For Order
        <ArrowRight size={16} />
      </button>
    </div>
  );
}