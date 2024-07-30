import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "@/components/Modules/navbar/Navbar";
import Footer from "@/components/Modules/footer/Footer";
import MobilNavbar from "@/components/Modules/mobilNavbar/MobilNavbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const vazirFont = localFont({
  src: "../../public/fonts/webfonts/Vazirmatn-Regular.woff2",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body
        className={` container mx-auto flex items-center justify-center pr-2 flex-col  bg-[#F5F5F5] ${vazirFont.className}`}
      >
        <div className="hidden lg:block">
          <Navbar />
        </div>
        <div className="block lg:hidden container mx-auto p-2">
          <MobilNavbar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
