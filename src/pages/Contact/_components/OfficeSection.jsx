import {
  MapPin,
  Map,
  Building2,
  Send,
} from "lucide-react";

export default function OfficeSection() {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-md sm:p-8">
      <h2 className="font-serif text-3xl font-bold text-[#061735]">
        Our Store & Office
      </h2>

      <div className="mt-2 flex items-center gap-3">
        <span className="h-px w-16 bg-[#d4a52f]" />
        <Send size={16} className="text-[#d4a52f]" />
      </div>

      <div className="mt-6 space-y-6">
        <div className="flex gap-4">
          <MapPin
            className="mt-1 shrink-0 text-[#b89b3c]"
            size={28}
          />

          <div>
            <h3 className="font-bold text-[#061735]">
              Choice Tailor
            </h3>

            <p className="text-sm text-gray-600">
              13-AF Force Road,
              <br />
              New Delhi – 110001
              <br />
              India
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Map
            className="mt-1 shrink-0 text-[#b89b3c]"
            size={28}
          />

          <div>
            <h3 className="font-bold text-[#061735]">
              Landmark
            </h3>

            <p className="text-sm text-gray-600">
              Near Air Force Station Gate
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Building2
            className="mt-1 shrink-0 text-[#b89b3c]"
            size={28}
          />

          <div>
            <h3 className="font-bold text-[#061735]">
              Store Type
            </h3>

            <p className="text-sm text-gray-600">
              Experience Center &
              <br />
              Tailoring Unit
            </p>
          </div>
        </div>
      </div>

      {/* Google Map */}

      <div className="mt-8 overflow-hidden rounded-xl border shadow-sm">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.419894906527!2d76.798204!3d30.6784599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed7392bed8b7%3A0x22d8022829ce68b3!2sChoice%20tailor%20behlana%20160003!5e0!3m2!1sen!2sin!4v1781586467066!5m2!1sen!2sin"
          width="100%"
          height="320"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          title="Choice Tailor"
        />
      </div>

      <button className="mt-6 flex items-center gap-3 rounded-lg bg-[#061735] px-6 py-3 font-semibold text-white transition hover:bg-[#0c244b]">
        <Send
          size={18}
          className="text-[#d4a52f]"
        />
        Get Directions
      </button>
    </div>
  );
}