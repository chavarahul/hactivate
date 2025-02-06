import { create } from "zustand";

export interface AuthState {
  email: string;
  setEmail: (email: string) => void;
  otp: string;
  setOtp: (otp: string) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  error: string;
  setError: (error: string) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  email: "",
  setEmail: (email) => set({ email }),
  otp: "",
  setOtp: (otp) => set({ otp }),
  loading: false,
  setLoading: (loading) => set({ loading }),
  error: "",
  setError: (error) => set({ error }),
}));