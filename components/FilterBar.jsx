"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function FilterBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoriaActual = searchParams.get("categoria") || "";

  const categorias = ["rock", "pop", "metal", "jazz"];

  function handleFilterChange(e) {
    const categoria = e.target.value;
    router.push(categoria ? `/catalogo?categoria=${categoria}` : "/catalogo");
  }

  return (
    <div className="mb-4">
      <label className="mr-2">Filtrar por categoría:</label>
      <select value={categoriaActual} onChange={handleFilterChange} className="border px-4 py-2">
        <option value="">Todas</option>
        {categorias.map((cat) => (
          <option key={cat} value={cat}>
            {cat.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}
