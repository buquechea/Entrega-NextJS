import Link from "next/link";
import { Suspense } from "react";

async function fetchProductos(categoria) {
  try {
    const url = categoria
      ? `http://localhost:3000/api/productos?categoria=${categoria}`
      : "http://localhost:3000/api/productos";

    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) throw new Error("Error al obtener los productos");

    return await res.json();
  } catch (error) {
    console.error("🔥 Error al cargar productos:", error);
    return null;
  }
}

export default async function CatalogoPage({ searchParams }) {
  const categoria = searchParams?.categoria || "";
  const productos = await fetchProductos(categoria);

  if (!productos) {
    return <p className="text-center text-red-500 py-12">Error al cargar los productos.</p>;
  }

  if (!productos.length) {
    return <p className="text-center text-gray-500 py-12">No hay productos disponibles.</p>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Catálogo</h1>

      <Suspense fallback={<p>Cargando productos...</p>}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {productos.map((producto) => (
            <div key={producto.id} className="border p-4 rounded-md shadow-md">
              <img
                src={producto.image}
                alt={producto.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-lg font-semibold">{producto.name}</h2>
              <p className="text-gray-600">{producto.price} €</p>
              <Link href={`/catalogo/${producto.id}`} className="text-blue-600 hover:underline">
                Ver Producto
              </Link>
            </div>
          ))}
        </div>
      </Suspense>
    </div>
  );
}




  

