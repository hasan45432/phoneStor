import localFont from "next/font/local";

import MobilNavbar from "@/components/Modules/mobilNavbar/MobilNavbar";
import AOSInit from "@/utils/aos";

import "./globals.css";

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
        className={` overflow-x-hidden  bg-[#F5F5F5] ${vazirFont.className}`}
      >
        <AOSInit />

        {children}
      </body>
    </html>
  );
}
