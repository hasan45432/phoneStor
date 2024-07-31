import React from "react";
import Header from "../homePage/header/Header";
import Product from "@/components/Modules/product/Product";
export default function ProductsDetails() {
  return (
    <>
      <div className="w-[100%] 2xl:w-[84%]">
        <Header />
        <div className="w-[100%]  mt-[15px] mb-[15px] bg-white rounded-[10px]">
          <div className=" md:p-[80px]  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />

          </div>
        </div>
      </div>
    </>
  );
}
