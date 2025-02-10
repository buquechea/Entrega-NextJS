import Navbar from "@/components/Navbar";
import { CartProvider } from "./context/CartContext";
import './styles/globals.css';
import { AuthProvider } from "./context/AuthContext";

export default function RootLayout({ children }) {
    return(
        <html>
            <body>
                <AuthProvider>
                <CartProvider>
                <Navbar />

                {children}
                </CartProvider>
                </AuthProvider>
            </body>
        </html>
    );
}