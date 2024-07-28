import React from "react";
import Image from "next/image";

export default function PopularCategory() {
  return (
    <>
      <div className="flex flex-col items-center mt-[30px]">
        <div>
          <Image
            src="/img/imageHomePage/prod50.png.png"
            width={1200}
            height={900}
            className="w-[120px] h-[120px] rounded-[60px]"
            alt="shop"
          ></Image>
        </div>
        <div>
          <p className="text-[15px] font-bold">Speaker</p>
          <p className="text-[12px] text-[#666666]">16 Items</p>
        </div>
      </div>
    </>
  );
}
