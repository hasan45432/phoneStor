import React from "react";
import Image from "next/image";
import PopularCategory from "@/components/Modules/popularCategory/popularCategory";
export default function PopularCategories() {
  return (
    <>
      <div>
        <div className="flex items-center gap-[15px] mb-[20px]">
          <div className="w-[428px] h-[742px] rounded-[10px] bg-[#FFFFFF] p-9">
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
            <div className="w-[428px] h-[742px] rounded-[10px] bg-[#FFFFFF] p-9">
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
            <div className="w-[428px] h-[742px] rounded-[10px] bg-[#FFFFFF] p-9">
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

        <div className="flex gap-[17px] mb-[20px]">
          <Image
            src="/img/imageHomePage/mainFooter1.png"
            width={1200}
            height={900}
            className="w-[648px] h-[180px] rounded-[10px]"
            alt="shodp"
          ></Image>
          <Image
            src="/img/imageHomePage/Main → Section.png"
            width={1200}
            height={900}
            className="w-[648px] h-[180px] rounded-[10px]"
            alt="shodp"
          ></Image>
        </div>
      </div>
    </>
  );
}
