import React from "react";
import SingleProductDetails from "@/components/templates/singleproductDetails/singleproductDetails";
import Footer from "@/components/Modules/footer/Footer";
import MobilNavbar from "@/components/Modules/mobilNavbar/MobilNavbar";
import Navbar from "@/components/Modules/navbar/Navbar";
import CreateComment from "@/components/templates/singleProductPage/productComment/CreateComment";
import UserComments from "@/components/templates/singleProductPage/userComments/UserComments";

export default function SingleProduct() {
  return (
    <>
      <div className="container mx-auto pr-1 sm:pr-0 flex items-center justify-center  flex-col">
        <div className="hidden lg:block">
          <Navbar />
        </div>
        <div className="block lg:hidden container mx-auto p-2">
          <MobilNavbar />
        </div>
        <div className="w-[100%] 2xl:w-[85%] bg-white rounded-[10px] mb-[15px] mt-[15px]">
          <SingleProductDetails />
        </div>
        <div className="w-[100%] 2xl:w-[85%] flex flex-col-reverse lg:flex-row items-center justify-around  bg-white rounded-[10px] mb-[15px] ">
          <UserComments />
          <CreateComment />
        </div>
        <Footer />
      </div>
    </>
  );
}
