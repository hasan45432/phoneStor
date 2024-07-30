"use client";
import React from "react";
import Product from "@/components/Modules/product/Product";

export default function PopularProducts() {
  return (
    <div className="mb-[20px] w-[100%]  bg-white rounded-[10px] ">
      <div className=" md:p-[80px]  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      <div className="mx-auto text-center pb-3">
        <button className="w-[100px]  h-[20px] sm:w-[150px] sm:h-[40px] rounded-[6px] bg-green-50 text-[#1ABA1A] text-[15px] sm:text-[18px]">
          تمامی محصولات
        </button>
      </div>
    </div>
  );
}
