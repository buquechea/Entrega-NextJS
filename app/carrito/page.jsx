"use client"; 

const CarritoPage = () => {
  const carrito = [
    { id: 1, name: "Camiseta Nirvana", price: "€19.99", quantity: 1 },
    { id: 2, name: "Camiseta Metallica", price: "€24.99", quantity: 2 },
  ];

  const total = carrito.reduce(
    (acc, producto) => acc + parseFloat(producto.price.slice(1)) * producto.quantity,
    0
  );

  return (
    <div className="px-6 py-12 md:px-12">
      <h1 className="text-3xl font-bold mb-6">Tu Carrito</h1>
      {carrito.length > 0 ? (
        <div>
          <ul className="space-y-4">
            {carrito.map((producto) => (
              <li
                key={producto.id}
                className="flex justify-between items-center bg-white shadow-md p-4 rounded-md"
              >
                <div>
                  <h2 className="text-lg font-semibold">{producto.name}</h2>
                  <p className="text-gray-600">Cantidad: {producto.quantity}</p>
                </div>
                <p className="text-lg font-bold">{producto.price}</p>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-right">
            <p className="text-xl font-bold">Total: €{total.toFixed(2)}</p>
            <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition">
              Finalizar Compra
            </button>
          </div>
        </div>
      ) : (
        <p className="text-gray-600">Tu carrito está vacío.</p>
      )}
    </div>
  );
};

export default CarritoPage;
