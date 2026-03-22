import { createContext, useContext, useEffect, useState } from "react";
import { demoProfile } from "../data/mock";
import { supabase } from "../lib/supabase";
import type { UserProfile } from "../types";

type AuthContextValue = {
  user: UserProfile | null;
  loading: boolean;
  signIn: (email: string) => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);
const demoStorageKey = "dajobastore-demo-user";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (supabase) {
      supabase.auth.getSession().then(({ data }) => {
        const email = data.session?.user.email;
        if (email) {
          setUser({ ...demoProfile, email });
        }
        setLoading(false);
      });

      const {
        data: { subscription }
      } = supabase.auth.onAuthStateChange((_event, session) => {
        const email = session?.user.email;
        setUser(email ? { ...demoProfile, email } : null);
        setLoading(false);
      });

      return () => subscription.unsubscribe();
    }

    const stored = window.localStorage.getItem(demoStorageKey);
    if (stored) {
      setUser(JSON.parse(stored));
    }
    setLoading(false);
  }, []);

  const signIn = async (email: string) => {
    if (supabase) {
      const { error } = await supabase.auth.signInWithOtp({ email });
      if (error) {
        throw error;
      }
      return;
    }

    const nextUser = { ...demoProfile, email };
    window.localStorage.setItem(demoStorageKey, JSON.stringify(nextUser));
    setUser(nextUser);
  };

  const signOut = async () => {
    if (supabase) {
      await supabase.auth.signOut();
      return;
    }

    window.localStorage.removeItem(demoStorageKey);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
};
