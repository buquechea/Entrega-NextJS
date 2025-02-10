"use client";

import { use } from "react";
import { useEffect, useState } from "react";
import { useCart } from "@/app/context/CartContext";
import { useRouter } from "next/navigation";

export default function ProductPage({ params }) {
  const resolvedParams = use(params); 
  const { addToCart } = useCart();
  const router = useRouter();
  const [producto, setProducto] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducto() {
      try {
        const res = await fetch(`/api/productos/${resolvedParams.id}`);
        if (!res.ok) {
          router.push("/not-found");
          return;
        }
        const data = await res.json();
        setProducto(data);
      } catch (error) {
        console.error("Error al cargar el producto:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducto();
  }, [resolvedParams, router]);

  function handleAddToCart() {
    if (cantidad < 1 || cantidad > producto.stock) {
      alert("Cantidad no válida.");
      return;
    }
    addToCart({ ...producto, cantidad });
  }

  if (loading) return <p className="text-center">Cargando producto...</p>;

  return (
    <div className="p-8">
      <img src={producto.image} alt={producto.name} className="w-full h-64 object-cover rounded-md mb-4" />
      <h1 className="text-2xl font-bold">{producto.name}</h1>
      <p className="mt-2">{producto.description}</p>
      <p className="mt-4 text-lg font-semibold">{producto.price} €</p>

      <div className="mt-4">
        <label className="block text-sm font-medium">Cantidad:</label>
        <input
          type="number"
          value={cantidad}
          onChange={(e) => setCantidad(Number(e.target.value))}
          min="1"
          max={producto.stock}
          className="border px-2 py-1 w-20 text-center"
        />
        <p className="text-sm text-gray-500">Stock disponible: {producto.stock}</p>
      </div>

      <button
        onClick={handleAddToCart}
        disabled={producto.stock === 0}
        className={`mt-6 px-4 py-2 rounded-md text-white ${producto.stock === 0 ? "bg-gray-500 cursor-not-allowed" : "bg-indigo-600"}`}
      >
        {producto.stock === 0 ? "Sin stock" : "Agregar al Carrito"}
      </button>
    </div>
  );
}





  

