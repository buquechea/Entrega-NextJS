"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/app/context/CartContext";

export default function ProductPage({ params }) {
  const { addToCart } = useCart(); 
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducto() {
      const { id } = await params;
      
      try {
        const res = await fetch(`/api/productos/${id}`);
        const data = await res.json();
        
        if (res.ok) {
          setProducto(data);
        } else {
          setProducto(null);
        }
      } catch (error) {
        console.error("Error al cargar el producto:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducto();
  }, [params]);

  if (loading) return <p className="text-center">Cargando producto...</p>;
  if (!producto) return <p className="text-center text-red-500">Producto no encontrado.</p>;

  return (
    <div className="p-8">
      <img src={producto.image} alt={producto.name} className="w-full h-64 object-cover rounded-md mb-4" />
      <h1 className="text-2xl font-bold">{producto.name}</h1>
      <p className="mt-2">{producto.description}</p>
      <p className="mt-4 text-lg font-semibold">{producto.price} €</p>
      <button 
        onClick={() => addToCart(producto)} 
        className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded-md"
      >
        Agregar al Carrito
      </button>
    </div>
  );
}



  

