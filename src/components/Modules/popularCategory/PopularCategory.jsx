import React from "react";
import Image from "next/image";

export default function PopularCategory() {
  return (
    <>
      <div>
        <div className="flex flex-col items-center mt-[50px]">
          <Image
            src="/img/imageHomePage/prod9.png.png"
            width={1200}
            height={900}
            className="w-[120px] h-[120px] rounded-[60px]"
            alt="shodp"
          ></Image>
          <div>
            <p className="text-[15px] font-bold">Speaker</p>
            <p className="text-[12px] text-[#666666]">23 items</p>
          </div>

        </div>
      </div>
    </>
  );
}
