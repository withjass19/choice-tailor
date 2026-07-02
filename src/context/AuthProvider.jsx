import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { supabase } from "@/lib/supabase";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const [profile, setProfile] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  const getProfile = async (userId) => {
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .single();

    

// setCustomers(data || []);

    // console.log("Profile fetch result:", { data, error });
    // console.log("All profiles:", Alldata);

    if (error) {
      setProfile(null);
      return null;
    }

    setProfile(data);
    return data;
  };

  useEffect(() => {
    const getCurrentSession = async () => {
      const { data } = await supabase.auth.getSession();

      const currentSession = data?.session;
      const currentUser = currentSession?.user ?? null;

      setSession(currentSession);
      setUser(currentUser);

      if (currentUser) {
        await getProfile(currentUser.id);
      }

      setAuthLoading(false);
    };

    getCurrentSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, currentSession) => {
      const currentUser = currentSession?.user ?? null;

      setSession(currentSession);
      setUser(currentUser);

      if (currentUser) {
        await getProfile(currentUser.id);
      } else {
        setProfile(null);
      }

      setAuthLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const registerUser = async ({ fullName, email, phone, password }) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) throw error;

    const userId = data?.user?.id;

    const { error: profileError } = await supabase.from("profiles").insert({
      id: userId,
      full_name: fullName,
      email,
      phone,
      role: "customer",
    });

    if (profileError) throw profileError;

    return data;
  };

  const loginUser = async ({ email, password }) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    return data;
  };

  const logoutUser = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) throw error;

    setUser(null);
    setSession(null);
    setProfile(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        profile,
        authLoading,
        isAuthenticated: !!user,
        registerUser,
        loginUser,
        logoutUser,
        getProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}