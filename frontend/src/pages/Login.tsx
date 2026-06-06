import { useState } from "react";
import axios from "axios";
import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const setAuth =
    useAuthStore(
      (state) => state.setAuth
    );

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    const res =
      await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

    setAuth(
      res.data.token,
      res.data.user
    );

    navigate("/");
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 w-80"
      >
        <input
          placeholder="Email"
          className="border w-full p-2"
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          placeholder="Password"
          type="password"
          className="border w-full p-2"
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
        />

        <button className="bg-blue-600 text-white p-2 w-full">
          Login
        </button>
      </form>
    </div>
  );
}