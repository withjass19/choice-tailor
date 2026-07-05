import { supabase } from "@/lib/supabase";

export async function getActiveProducts({ limit = 12, status = "Active" } = {}) {
  if (!supabase) {
    return { data: [], error: null };
  }

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("status", status)
    .limit(limit);

  return {
    data: data ?? [],
    error,
  };
}
