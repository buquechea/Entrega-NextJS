export default async function CatalogoPage() {
  try {
    const res = await fetch("http://localhost:3000/api/productos", { cache: "no-store" });
    const productos = await res.json();

    if (!productos.length) {
      return <p className="text-center text-gray-500 py-12">No hay productos disponibles.</p>;
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 py-8">
        {productos.map((producto) => (
          <div key={producto.id} className="border p-4 rounded-md shadow-md">
            <img src={producto.image} alt={producto.name} className="w-full h-48 object-cover rounded-md mb-4" />
            <h2 className="text-lg font-semibold">{producto.name}</h2>
            <p className="text-gray-600">{producto.price} €</p>
            <a href={`/catalogo/${producto.id}`} className="text-blue-600 hover:underline">
              Ver Producto
            </a>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    return <p className="text-center text-red-500 py-12">Error al cargar los productos.</p>;
  }
}



  

