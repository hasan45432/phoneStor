import React from "react";
import UserpanelDetails from "@/components/templates/userpanelDetails/UserpanelDetails";
import Navbar from "@/components/Modules/navbar/Navbar";
import Footer from "@/components/Modules/footer/Footer";
import MobilNavbar from "@/components/Modules/mobilNavbar/MobilNavbar";
export default function UserPanel() {
  return (
    <>
      <div className="container  mx-auto pr-1 sm:pr-0 flex items-center justify-center  flex-col">
        <div className="hidden lg:block">
          <Navbar />
        </div>
        <div className="block lg:hidden container mx-auto p-2">
          <MobilNavbar />
        </div>
        <div className="w-[100%] 2xl:w-[85%]  bg-white rounded-[10px] mb-[15px] mt-[15px]">
          <UserpanelDetails />
        </div>
        <Footer />
      </div>
    </>
  );
}
