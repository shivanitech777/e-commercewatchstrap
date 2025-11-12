import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "EcoCet – Premium Watch Straps",
  description:
    "Discover premium, eco-conscious watch straps handcrafted with sustainable materials by EcoCet.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
