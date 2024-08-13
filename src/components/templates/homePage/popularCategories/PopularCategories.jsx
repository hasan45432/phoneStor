import React from "react";
import Image from "next/image";
import PopularCategoryHome from "@/components/Modules/PopularCategoryHome/PopularCategoryHome";
import PopularCategory from "@/components/Modules/popularCategory/PopularCategory";
export default function PopularCategories() {
  return (
    <>
      <div className="w-[100%] 2xl:w-[85%] ">
        <div
          data-aos="fade-up"
          data-aos-duration="1200"
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-3 items-center  mb-[20px]"
        >
          <PopularCategoryHome src={"/img/imageHomePage/prod43.png.png"}/>
          <PopularCategoryHome src={"/img/imageHomePage/prod44.png.png"}/>
          <PopularCategoryHome src={"/img/imageHomePage/prod45.png.png"}/>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1200"
          className="sm:flex hidden flex-col xl:flex-row items-center justify-center gap-[17px] mb-[20px]"
        >
          <Image
            src="/img/imageHomePage/mainFooter1.png"
            width={1200}
            height={900}
            className="w-[630px] 2xl:w-[642px] h-[180px] rounded-[10px]"
            alt="shodp"
          ></Image>
          <Image
            src="/img/imageHomePage/Main → Section.png"
            width={1200}
            height={900}
            className="w-[630px] 2xl:w-[642px] h-[180px] rounded-[10px]"
            alt="shodp"
          ></Image>
        </div>
      </div>
    </>
  );
}
