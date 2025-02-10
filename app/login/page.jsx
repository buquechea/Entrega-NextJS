"use client";

import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { login, loginWithGoogle } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    login(email, password);
  }

  return (
    <div className="text-center py-12">
      <h1 className="text-3xl font-bold">Iniciar Sesión</h1>

      <input
        type="email"
        placeholder="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border px-4 py-2 my-2"
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border px-4 py-2 my-2"
      />
      <button onClick={handleLogin} className="bg-indigo-600 text-white px-4 py-2 rounded-md">
        Ingresar
      </button>

      <p className="mt-4">O inicia sesión con:</p>
      <button onClick={loginWithGoogle} className="bg-red-500 text-white px-4 py-2 rounded-md">
        Google
      </button>
    </div>
  );
}

