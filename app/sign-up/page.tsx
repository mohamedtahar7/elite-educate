"use client";
import { createUser } from "@/actions/adminActions";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import Spinner from "@/components/ui/Spinner";
import React, { useState } from "react";
import { Toaster, toast } from "sonner";
const page = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (email: any, userName: any, password: any) => {
    setLoading(true);
    const user = { email, userName, password };
    try {
      const createdUser = await createUser(user);
      toast.success(`${userName}'s account has been created successfully!`);
      setLoading(false);
    } catch (error) {
      toast.error(`${error}`);
    }
  };
  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center px-4">
      <Toaster richColors />
      <div className="backdrop-blur-md bg-white/10 border border-white/30 shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Create Account
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(email, userName, password);
          }}
          className="space-y-4"
        >
          <div>
            <label className="block text-sm text-white mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-white mb-1">Username</label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="mohamed123"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-white mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 px-4 rounded-md bg-white text-black font-semibold hover:bg-gray-200 transition"
          >
            {loading ? <LoadingSpinner /> : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
