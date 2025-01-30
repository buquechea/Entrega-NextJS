export default function CatalogoLayout({ children }) {
    return (
      <div>
        <header className="bg-indigo-600 text-white px-6 py-4">
          <h1 className="text-2xl font-bold">Catálogo de Productos</h1>
        </header>
        <div className="px-6 py-4">{children}</div>
      </div>
    );
  }
  
  