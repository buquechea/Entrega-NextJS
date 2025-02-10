import ProtectedRoute from "@/components/ProtectedRoute";

export default function AdminPage() {
  return (
    <ProtectedRoute>
      <h1 className="text-3xl font-bold">Panel de Administración</h1>
      <p>Bienvenido al área de administración.</p>
    </ProtectedRoute>
  );
}

