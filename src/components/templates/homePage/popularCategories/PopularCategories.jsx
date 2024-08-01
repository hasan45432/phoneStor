import React from "react";
import Image from "next/image";
import PopularCategory from "@/components/Modules/popularCategory/popularCategory";
export default function PopularCategories() {
  return (
    <>
      <div className="w-[100%] 2xl:w-[85%] ">
        <div
           data-aos="fade-up"
              data-aos-duration="1200"
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-3 items-center  mb-[20px]"
        >
          <div className="w-[300px] sm:w-[415px] h-[742px] mx-auto rounded-[10px] bg-[#FFFFFF] p-9">
            <div>
              <Image
                src="/img/imageHomePage/prod43.png.png"
                width={1200}
                height={900}
                className="w-[368px] h-[190px] rounded-[10px]"
                alt="shop"
              ></Image>
            </div>
            <div className="flex items-center mr-[30px] gap-12 mt-[30px]">
              <div>
                <PopularCategory />
                <PopularCategory />
              </div>
              <div>
                <PopularCategory />
                <PopularCategory />
              </div>
            </div>
          </div>

          <div>
            <div
              data-aos="fade-up"
              data-aos-duration="1200"
              className="w-[300px] sm:w-[415px]  h-[742px] mx-auto rounded-[10px] bg-[#FFFFFF] p-9"
            >
              <div>
                <Image
                  src="/img/imageHomePage/prod44.png.png"
                  width={1200}
                  height={900}
                  className="w-[368px] h-[190px] rounded-[10px]"
                  alt="shop"
                ></Image>
              </div>
              <div className="flex items-center mr-[30px] gap-12 mt-[30px]">
                <div>
                  <PopularCategory />
                  <PopularCategory />
                </div>
                <div>
                  <PopularCategory />
                  <PopularCategory />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div
              data-aos="fade-up"
              data-aos-duration="1200"
              className="w-[300px] sm:w-[415px]  h-[742px] mx-auto rounded-[10px] bg-[#FFFFFF] p-9"
            >
              <div>
                <Image
                  src="/img/imageHomePage/prod45.png.png"
                  width={1200}
                  height={900}
                  className="w-[368px] h-[190px] rounded-[10px]"
                  alt="shop"
                ></Image>
              </div>
              <div className="flex items-center mr-[30px] gap-12 mt-[30px]">
                <div>
                  <PopularCategory />
                  <PopularCategory />
                </div>
                <div>
                  <PopularCategory />
                  <PopularCategory />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:flex hidden flex-col xl:flex-row items-center justify-center gap-[17px] mb-[20px]">
          <Image
            src="/img/imageHomePage/mainFooter1.png"
            width={1200}
            height={900}
            className="w-[630px] h-[180px] rounded-[10px]"
            alt="shodp"
          ></Image>
          <Image
            src="/img/imageHomePage/Main → Section.png"
            width={1200}
            height={900}
            className="w-[630px] h-[180px] rounded-[10px]"
            alt="shodp"
          ></Image>
        </div>
      </div>
    </>
  );
}
