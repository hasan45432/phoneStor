import React from "react";
import Image from "next/image";
import Categories from "../categories/Categories";
import Product from "@/components/Modules/product/Product";
export default function TopProducts() {
  return (
    <>
      <div className="w-[100%]  bg-white rounded-[10px] mb-[20px]">
        <div className="flex flex-col  xl:flex-row-reverse items-center pt-[50px] mr-[30px] ml-[30px]">
          <div className=" hidden sm:block w-[605px]  h-[200px] relative">
            <Image
              src="/img/imageHomePage/prod18.png.png"
              width={300}
              height={200}
              alt="top product"
              className="w-[605px]  h-[200px] rounded-[10px]"
            ></Image>

            <p className="text-[26px] hidden sm:block absolute top-6 w-[150px] left-5  font-medium">
              redmi note 12 Pro+ 5g
            </p>
            <p className="absolute text-[12] hidden sm:block top-[110px] text-[#666666] left-[50px]">
              Rise to the challenge
            </p>
          </div>

          <div className="">
            <Categories />
          </div>
        </div>

        <div className="mt-[40px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5   items-center">
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
