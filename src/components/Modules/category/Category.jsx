import React from "react";
import Image from "next/image";
export default function Category() {
  return (
    <>
      <div className="flex items-center">
        <div>
          <Image
            src="/img/imageHomePage/Link → prod20.png.png"
            width={1200}
            height={900}
            className=" w-[50px] h-[50px] object-cover "
            alt="shop"
          ></Image>
        </div>
        <div className="pr-2">
          <p className="text-[14] font-bold">iPhone (iOS)</p>
          <p className="text-[12px] text-[#666666]">74 Items</p>
        </div>
      </div>
    </>
  );
}
