import Link from "next/link";
{/* Product Gallery */}
export default function ProductGallery(){
    return(
        <>
        <section className="py-16 px-6 md:px-12">
    <h3 className="text-3xl font-bold text-center mb-12">Productos Destacados</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {/* Product Card */}
      {[...Array(8)].map((_, i) => (
        <div key={i} className="bg-white p-4 rounded-md shadow-lg hover:shadow-xl transition">
          <img
            src={`https://via.placeholder.com/300x400?text=Band+T-Shirt+${i + 1}`}
            alt={`Producto ${i + 1}`}
            className="rounded-md mb-4"
          />
          <h4 className="text-lg font-semibold">Camiseta de Band {i + 1}</h4>
          <p className="text-gray-600 mt-2">€29.99</p>
          <Link href="/shop">
            <button className="mt-4 w-full bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition">
              Ver Producto
            </button>
          </Link>
        </div>
      ))}
    </div>
  </section>
        </>
    )
}    
    