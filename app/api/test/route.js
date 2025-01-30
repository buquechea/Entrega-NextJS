import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export async function GET() {
  try {
    const snapshot = await getDocs(collection(db, "productos"));
    const productos = snapshot.docs.map((doc) => doc.data());

    console.log("📢 Firestore Respuesta:", productos);
    return new Response(JSON.stringify(productos), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("🔥 Error de Firestore:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
