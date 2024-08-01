import React from "react";
import RegisterDetails from "@/components/templates/registerDetails/registerDetails";
import Footer from "@/components/Modules/footer/Footer";
import MobilNavbar from "@/components/Modules/mobilNavbar/MobilNavbar";
import Navbar from "@/components/Modules/navbar/Navbar";
export default function Register() {
  return (
    <>
      <div className="  container mx-auto pr-1 sm:pr-0 flex items-center justify-center  flex-col">
        <div className="hidden lg:block">
          <Navbar />
        </div>
        <div className="block lg:hidden container mx-auto p-2">
          <MobilNavbar />
        </div>
        <RegisterDetails />
        <Footer />
      </div>
    </>
  );
}
