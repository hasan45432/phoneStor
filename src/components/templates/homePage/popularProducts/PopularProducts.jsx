"use client";
import React from "react";
import Product from "@/components/Modules/product/Product";
import Link from "next/link";

export default function PopularProducts() {
  return (
    <div className="mb-[20px] p-1 w-[100%]   bg-white rounded-[10px] ">
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className=" md:p-[80px]  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      >
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      <div className="mx-auto text-center pb-[20px] ">
        <button className="w-[100px] hover:bg-[#1ABA1A] hover:text-white sm:w-[150px] sm:h-[40px] transition-all duration-500  h-[20px]  rounded-[6px] bg-green-50 text-[#1ABA1A] text-[15px] sm:text-[18px]">
          <Link href="/products">تمامی محصولات</Link>
        </button>
      </div>
    </div>
  );
}
