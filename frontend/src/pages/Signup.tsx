import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Navbar from "../components/layout/Navbar";
import { useAuthStore } from "../store/authStore";
import api from "../services/api";

export default function Signup() {
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (form.password !== form.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      const res = await api.post("/auth/register", {
        name: form.name,
        email: form.email,
        password: form.password,
      });

      setAuth(res.data.token, res.data.user);
      toast.success("Account created");
      navigate("/colleges");
    } catch {
      toast.error("Unable to create account");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="grid min-h-[calc(100vh-4rem)] place-items-center px-5 py-12">
        <form
          onSubmit={handleSubmit}
          className="surface w-full max-w-md rounded-[2rem] p-7 shadow-xl shadow-blue-950/10"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-600 dark:text-blue-300">
            Start your shortlist
          </p>
          <h1 className="font-display text-4xl text-slate-950 dark:text-white">
            Register
          </h1>

          <div className="mt-8 space-y-4">
            <input
              name="name"
              value={form.name}
              placeholder="Full name"
              className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-900"
              onChange={handleChange}
              required
            />

            <input
              name="email"
              value={form.email}
              placeholder="Email"
              type="email"
              className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-900"
              onChange={handleChange}
              required
            />

            <input
              name="password"
              value={form.password}
              placeholder="Password"
              type="password"
              className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-900"
              onChange={handleChange}
              minLength={6}
              required
            />

            <input
              name="confirmPassword"
              value={form.confirmPassword}
              placeholder="Confirm password"
              type="password"
              className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-900"
              onChange={handleChange}
              minLength={6}
              required
            />
          </div>

          <button
            disabled={loading}
            className="mt-6 h-12 w-full rounded-full bg-blue-600 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:opacity-60"
          >
            {loading ? "Creating..." : "Create account"}
          </button>

          <p className="mt-5 text-center text-sm text-muted">
            Already have an account?{" "}
            <Link to="/login" className="font-semibold text-blue-600">
              Login
            </Link>
          </p>
        </form>
      </main>
    </>
  );
}
