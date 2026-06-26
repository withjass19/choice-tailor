import {
  User,
  Mail,
  Phone,
  Lock,
  Camera,
  ShieldCheck,
  Save,
  Bell,
} from "lucide-react";

import { ShirtModel } from "@/assets/images";

export default function ProfileSettings() {
  return (
    <>
      {/* Header */}
      <div>
        <p className="text-sm text-gray-500">
          Home / My Account / Profile Settings
        </p>

        <h1 className="mt-2 font-serif text-4xl font-bold text-[#061735] lg:text-5xl">
          Profile Settings
        </h1>

        <p className="mt-2 text-gray-600">
          Manage your account information and preferences.
        </p>
      </div>

      {/* Profile Card */}
      <div className="mt-8 rounded-xl border bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Profile Image */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <img
                src={ShirtModel}
                alt=""
                className="h-36 w-36 rounded-full border-4 border-[#f6efe1] object-cover"
              />

              <button className="absolute bottom-1 right-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#061735] text-white">
                <Camera size={18} />
              </button>
            </div>

            <h3 className="mt-4 text-xl font-bold text-[#061735]">
              Jaspreet Singh
            </h3>

            <p className="text-sm text-gray-500">
              Choice Tailor Customer
            </p>
          </div>

          {/* Form */}
          <div className="flex-1">
            <div className="grid gap-5 md:grid-cols-2">
              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Full Name
                </label>

                <div className="flex items-center gap-3 rounded-lg border px-4 py-3">
                  <User size={18} />
                  <input
                    type="text"
                    defaultValue="Jaspreet Singh"
                    className="w-full outline-none"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Email Address
                </label>

                <div className="flex items-center gap-3 rounded-lg border px-4 py-3">
                  <Mail size={18} />
                  <input
                    type="email"
                    defaultValue="jaspreet@gmail.com"
                    className="w-full outline-none"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Phone Number
                </label>

                <div className="flex items-center gap-3 rounded-lg border px-4 py-3">
                  <Phone size={18} />
                  <input
                    type="text"
                    defaultValue="+91 98765 43210"
                    className="w-full outline-none"
                  />
                </div>
              </div>

              {/* Gender */}
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Gender
                </label>

                <select className="w-full rounded-lg border px-4 py-3 outline-none">
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>

            <button className="mt-6 flex items-center gap-2 rounded-md bg-[#061735] px-6 py-3 text-sm font-bold text-white">
              <Save size={18} />
              Save Changes
            </button>
          </div>
        </div>
      </div>

      {/* Security Section */}
      <div className="mt-8 rounded-xl border bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <Lock className="text-[#b89b3c]" />
          <h2 className="font-serif text-2xl font-bold text-[#061735]">
            Change Password
          </h2>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <input
            type="password"
            placeholder="Current Password"
            className="rounded-lg border px-4 py-3 outline-none"
          />

          <input
            type="password"
            placeholder="New Password"
            className="rounded-lg border px-4 py-3 outline-none"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="rounded-lg border px-4 py-3 outline-none"
          />
        </div>

        <button className="mt-5 rounded-md bg-[#b89b3c] px-6 py-3 text-sm font-bold text-white">
          Update Password
        </button>
      </div>

      {/* Preferences */}
      <div className="mt-8 rounded-xl border bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <Bell className="text-[#b89b3c]" />
          <h2 className="font-serif text-2xl font-bold text-[#061735]">
            Notification Preferences
          </h2>
        </div>

        <div className="mt-6 space-y-5">
          <label className="flex items-center justify-between rounded-lg border p-4">
            <div>
              <h4 className="font-semibold">
                Order Status Updates
              </h4>

              <p className="text-sm text-gray-500">
                Receive updates about your orders
              </p>
            </div>

            <input type="checkbox" defaultChecked />
          </label>

          <label className="flex items-center justify-between rounded-lg border p-4">
            <div>
              <h4 className="font-semibold">
                Promotional Offers
              </h4>

              <p className="text-sm text-gray-500">
                Get discounts and special offers
              </p>
            </div>

            <input type="checkbox" />
          </label>

          <label className="flex items-center justify-between rounded-lg border p-4">
            <div>
              <h4 className="font-semibold">
                Measurement Reminders
              </h4>

              <p className="text-sm text-gray-500">
                Reminders to update measurements
              </p>
            </div>

            <input type="checkbox" defaultChecked />
          </label>
        </div>
      </div>

      {/* Account Status */}
      <div className="mt-8 rounded-xl border bg-[#f4f8ff] p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <ShieldCheck className="text-green-600" />

          <div>
            <h3 className="font-bold text-[#061735]">
              Verified Account
            </h3>

            <p className="text-sm text-gray-600">
              Your account is verified and secure.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}