import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import localFont from "next/font/local";

export const metadata = {
  title: "EcoCet – Premium Watch Straps",
  description:
    "Discover premium, eco-conscious watch straps handcrafted with sustainable materials by EcoCet.",
};


const Libre = localFont({
  src: "./fonts/LibreCaslonDisplay-Regular.ttf",
  variable: "--font-libre",
  Weight: "400",
})
const Poppins = localFont({
  src: "./fonts/Poppins-Regular.ttf",
  variable: "--font-Poppins",
  Weight: "400",
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` antialiased ${Libre.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
