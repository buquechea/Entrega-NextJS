import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export async function GET(request, { params }) {
  try {
    const { id } = await params; 
    
    const productoRef = doc(db, "productos", id);
    const productoSnap = await getDoc(productoRef);

    if (!productoSnap.exists()) {
      return new Response(JSON.stringify({ error: "Producto no encontrado" }), { status: 404 });
    }

    return new Response(JSON.stringify({ id: productoSnap.id, ...productoSnap.data() }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("🔥 Error en Firestore:", error);
    return new Response(JSON.stringify({ error: "Error al obtener el producto" }), { status: 500 });
  }
}

