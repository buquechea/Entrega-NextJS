export default function CarritoLayout({ children }) {
    return (
      <div>
        <header className="bg-green-600 text-white px-6 py-4">
          <h1 className="text-2xl font-bold">Carrito de Compras</h1>
        </header>
        <div className="px-6 py-4">{children}</div>
      </div>
    );
  }
  