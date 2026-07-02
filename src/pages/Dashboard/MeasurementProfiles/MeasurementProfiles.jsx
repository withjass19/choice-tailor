import { useCallback, useEffect, useState } from "react";
import { Plus, Ruler } from "lucide-react";
import { toast } from "sonner";

import { supabase } from "@/lib/supabase";
import { useAuth } from "@/hooks/useAuth";

import MeasurementCard from "./MeasurementCard";
import AddMeasurementDialog from "./AddMeasurementDialog";
import EditMeasurementDialog from "./EditMeasurementDialog";
import DeleteMeasurementDialog from "./DeleteMeasurementDialog";

export default function MeasurementProfiles() {
  const { user } = useAuth();

  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const [selectedProfile, setSelectedProfile] = useState(null);

  const fetchProfiles = useCallback(async () => {
    if (!user) return;

    try {
      setLoading(true);

      const { data, error } = await supabase
        .from("measurement_profiles")
        .select("*")
        .eq("user_id", user.id)
        .order("is_default", { ascending: false })
        .order("created_at", { ascending: false });

      if (error) throw error;

      setProfiles(data || []);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load measurement profiles.");
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchProfiles();
  }, [fetchProfiles]);

  const handleEdit = (profile) => {
    setSelectedProfile(profile);
    setEditOpen(true);
  };

  const handleDelete = (profile) => {
    setSelectedProfile(profile);
    setDeleteOpen(true);
  };

  const setDefaultProfile = async (profileId) => {
    try {
      await supabase
        .from("measurement_profiles")
        .update({
          is_default: false,
        })
        .eq("user_id", user.id);

      const { error } = await supabase
        .from("measurement_profiles")
        .update({
          is_default: true,
        })
        .eq("id", profileId);

      if (error) throw error;

      toast.success("Default profile updated.");

      fetchProfiles();
    } catch (error) {
      console.error(error);
      toast.error("Unable to update default profile.");
    }
  };

  const useForOrder = (profile) => {
    toast.success(
      `${profile.profile_name} selected for your next order.`,
    );
  };

  return (
        <div className="rounded-xl border bg-white p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-serif text-3xl font-bold text-[#061735]">
            My Measurement Profiles
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Save measurements once and reuse them for future uniform orders.
          </p>
        </div>

        <button
          onClick={() => setAddOpen(true)}
          className="flex items-center gap-2 rounded-lg bg-[#061735] px-4 py-2 text-white transition hover:bg-[#0b2758]"
        >
          <Plus size={18} />
          Create New Profile
        </button>
      </div>

      <div className="mt-6 space-y-5">
        {loading ? (
          <div className="rounded-xl border p-8 text-center text-sm text-gray-500">
            Loading measurement profiles...
          </div>
        ) : profiles.length === 0 ? (
          <div className="rounded-xl border border-dashed p-12 text-center">
            <Ruler
              size={52}
              className="mx-auto text-[#b89b3c]"
            />

            <h3 className="mt-5 text-2xl font-bold text-[#061735]">
              No Measurement Profiles
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Create your first measurement profile to place
              custom uniform orders quickly.
            </p>

            <button
              onClick={() => setAddOpen(true)}
              className="mt-6 rounded-lg bg-[#061735] px-6 py-3 font-semibold text-white"
            >
              Create Profile
            </button>
          </div>
        ) : (
          profiles.map((profile) => (
            <MeasurementCard
              key={profile.id}
              profile={profile}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onSetDefault={setDefaultProfile}
              onUseForOrder={useForOrder}
            />
          ))
        )}
      </div>

      <AddMeasurementDialog
        open={addOpen}
        setOpen={setAddOpen}
        refreshProfiles={fetchProfiles}
      />

      <EditMeasurementDialog
        open={editOpen}
        setOpen={setEditOpen}
        profile={selectedProfile}
        refreshProfiles={fetchProfiles}
      />

      <DeleteMeasurementDialog
        open={deleteOpen}
        setOpen={setDeleteOpen}
        profile={selectedProfile}
        refreshProfiles={fetchProfiles}
      />
    </div>
  );
}