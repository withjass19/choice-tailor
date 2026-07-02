import {
  Shirt,
  Pencil,
  Trash2,
  CheckCircle,
  MoreVertical,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function MeasurementCard({
  profile,
  onEdit,
  onDelete,
  onSetDefault,
  onUseForOrder,
}) {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f6efe1] text-[#b08018]">
            <Shirt size={22} />
          </div>

          <div>
            <div className="flex items-center gap-3">
              <h3 className="font-serif text-xl font-bold text-[#061735]">
                {profile.profile_name}
              </h3>

              {profile.is_default && (
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                  Default
                </span>
              )}
            </div>

            <p className="mt-1 text-sm text-gray-500">
              Created{" "}
              {new Date(profile.created_at).toLocaleDateString("en-IN")}
            </p>
          </div>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="rounded-lg p-2 hover:bg-gray-100">
              <MoreVertical size={18} />
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-52">
            <DropdownMenuItem onClick={() => onEdit(profile)}>
              <Pencil className="mr-2 h-4 w-4" />
              Edit Profile
            </DropdownMenuItem>

            {!profile.is_default && (
              <DropdownMenuItem
                onClick={() => onSetDefault(profile.id)}
              >
                <CheckCircle className="mr-2 h-4 w-4" />
                Set Default
              </DropdownMenuItem>
            )}

            <DropdownMenuItem
              onClick={() => onDelete(profile)}
              className="text-red-600 focus:text-red-600"
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Delete Profile
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Measurements */}

      <div className="mt-6 grid grid-cols-2 gap-4 rounded-xl bg-gray-50 p-4 text-sm md:grid-cols-3">
        <Measurement label="Chest" value={profile.chest} />
        <Measurement label="Waist" value={profile.waist} />
        <Measurement label="Shoulder" value={profile.shoulder} />
        <Measurement label="Neck" value={profile.neck} />
        <Measurement label="Sleeve" value={profile.sleeve} />
        <Measurement
          label="Shirt Length"
          value={profile.shirt_length}
        />
      </div>

      {profile.notes && (
        <div className="mt-4 rounded-lg bg-blue-50 p-3">
          <p className="text-sm text-gray-700">
            <span className="font-semibold">Notes:</span>{" "}
            {profile.notes}
          </p>
        </div>
      )}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          onClick={() => onUseForOrder(profile)}
          className="flex-1 rounded-lg bg-[#061735] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0d224d]"
        >
          Use for Order
        </button>

        <button
          onClick={() => onEdit(profile)}
          className="rounded-lg border border-[#b89b3c] px-5 py-3 text-sm font-semibold text-[#b08018] transition hover:bg-[#f9f3e7]"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(profile)}
          className="rounded-lg border border-red-300 px-5 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-50"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

function Measurement({ label, value }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-wide text-gray-500">
        {label}
      </p>

      <p className="mt-1 font-semibold text-[#061735]">
        {value || "-"} in
      </p>
    </div>
  );
}