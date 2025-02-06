"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/lib/store";
import { useState } from "react";
import Link from "next/link";
import { MoveLeft } from "lucide-react";

const LoginForm: React.FC = () => {
  const { email, setEmail, otp, setOtp, loading, setLoading, error, setError } =
    useAuthStore();

  const [isOtpVisible, setIsOtpVisible] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email) {
      setError("Email is required!");
      return;
    }

    setLoading(true);
    try {
    //   await loginUser({ email });
      setIsOtpVisible(true);
    } catch (err) {
      console.error("Error during login:", err);
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleOtpSubmit = async () => {
    if (!otp) {
      setError("Please enter the OTP.");
      return;
    }
    setLoading(true);
    try {
    //   await login(email, otp);
    } catch (err) {
      console.error("Error verifying OTP:", err);
      setError("OTP verification failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex relative max-md:flex-col bg-gradient-to-b from-white to-[#D2DCFF]">
      <div className="md:w-1/2 flex justify-center items-center p-8 md:h-screen">
        <div className="max-w-md w-full">
          <span className="cursor-pointer" onClick={() => window.location.href = "/"}>
            <MoveLeft size={30} />
          </span>
          <p className="text-4xl font-bold mt-10">Log in to Your Areooo Account</p>
          <p className="mt-4">Access your provider dashboard, manage your venues and services, and start engaging with the Areooo community.</p>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center items-center p-8">
        <div className="max-w-md w-full">
          <div>
            <form onSubmit={handleSubmit}>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mb-4"
              />
              <p className="my-4">Dont have an account? <Link href={"/auth/register"} className="text-primary">Register</Link></p>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
              </Button>
            </form>

            {isOtpVisible && (
              <div className="otp-popup mt-4">
                <Input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="mb-4"
                />
                <Button onClick={handleOtpSubmit} disabled={loading}>
                  {loading ? "Verifying..." : "Verify OTP"}
                </Button>
              </div>
            )}

            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
