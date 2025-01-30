import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export async function GET() {
  try {
    const productosSnapshot = await getDocs(collection(db, "productos"));
    const productos = productosSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return new Response(JSON.stringify(productos), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error al obtener productos:", error);
    return new Response(JSON.stringify({ error: "Error al obtener productos" }), {
      status: 500,
    });
  }
}

