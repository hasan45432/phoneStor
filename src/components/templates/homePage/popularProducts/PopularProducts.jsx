import React from "react";
import Product from "@/components/Modules/product/Product";
export default function PopularProducts() {
  return (
    <>
      <div className="mb-[20px]">
        <div className="w-[100%] h-[600px] p-[90px] bg-[#FFFFFF] rounded-[10px] flex items-center relative">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <div className="text-left mt-[10px] absolute bottom-[60px] left-[580px]">
            <button className=" w-[150px] h-[40px] rounded-[6px] bg-green-50 text-[#1ABA1A] text-[18px]  ">
              تمامی محصولات
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
