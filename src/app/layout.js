
import "./globals.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
