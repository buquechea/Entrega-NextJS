import { db } from "@/lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const categoria = searchParams.get("categoria");
    const stockDisponible = searchParams.get("stock") === "true"; 
    let productosRef = collection(db, "productos");
    let productosQuery = productosRef;

    if (categoria) {
      productosQuery = query(productosRef, where("categoria", "==", categoria));
    }

    const productosSnapshot = await getDocs(productosQuery);
    let productos = productosSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    if (stockDisponible) {
      productos = productos.filter((producto) => producto.stock > 0);
    }

    return new Response(JSON.stringify(productos), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("🔥 Error obteniendo productos:", error);
    return new Response(JSON.stringify({ error: "Error al obtener productos" }), { status: 500 });
  }
}


