import React from "react";
import Image from "next/image";
import Categories from "../categories/Categories";
import Product from "@/components/Modules/product/Product";
export default function Computers() {
  return (
    <>
      <div className="w-[100%] h-[700px] bg-white mb-[20px]">
        <div className="flex flex-row-reverse pt-[50px] mr-[30px] ml-[30px]">
          <div className="w-[605px]  h-[200px] relative">
            <Image
              src="/img/imageHomePage/prod19.png.png"
              width={1200}
              height={900}
              className=" w-full h-full object-cover rounded-[10px]"
              alt="shop"
            ></Image>

            <p className="text-[26px] text-left text-white absolute top-6 w-[150px] left-12   font-medium">
              Mobok 2 superchard by M2
            </p>
          </div>
          <div>
            <Categories />
          </div>
        </div>

        <div className="mt-[40px] mr-[80px] ml-[80px] flex items-center">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </>
  );
}
