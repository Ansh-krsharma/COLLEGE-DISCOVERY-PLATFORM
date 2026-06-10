import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Navbar from "../components/layout/Navbar";
import { useAuthStore } from "../store/authStore";
import api from "../services/api";

export default function Login() {
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);

    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });

      setAuth(res.data.token, res.data.user);
      toast.success("Welcome back");
      navigate("/colleges");
    } catch {
      toast.error("Unable to log in with those details");
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
            Welcome back
          </p>
          <h1 className="font-display text-4xl text-slate-950 dark:text-white">
            Login
          </h1>

          <div className="mt-8 space-y-4">
            <input
              value={email}
              placeholder="Email"
              type="email"
              className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-900"
              onChange={(event) => setEmail(event.target.value)}
              required
            />

            <input
              value={password}
              placeholder="Password"
              type="password"
              className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-900"
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>

          <button
            disabled={loading}
            className="mt-6 h-12 w-full rounded-full bg-blue-600 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <p className="mt-5 text-center text-sm text-muted">
            New here?{" "}
            <Link to="/register" className="font-semibold text-blue-600">
              Create an account
            </Link>
          </p>
        </form>
      </main>
    </>
  );
}
