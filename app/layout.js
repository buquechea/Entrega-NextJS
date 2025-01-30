import Navbar from "@/components/Navbar";
import { CartProvider } from "./context/CartContext";
import './styles/globals.css';

export default function RootLayout({ children }) {
    return(
        <html>
            <body>
                <CartProvider>
                <Navbar />

                {children}
                </CartProvider>
            </body>
        </html>
    );
}