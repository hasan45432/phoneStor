import React from "react";
import Image from "next/image";
export default function Product() {
  return (
    <>
      <div className="w-[224px] h-[421px] ">
        <div className="flex flex-col items-center">
          <Image
            src="/img/imageHomePage/prod10.png.png"
            width={1200}
            height={900}
            className="w-[192px] h-[199px] mr-12"
            alt="shop"
          ></Image>
          <p className="text-[15px] font-bold text-left">
            OPod Pro 12.9 Inch M1 2023, 64GB + Wifi, GPS
          </p>
        </div>

        <p className="text-[#F1352B] text-[25px] mt-[10px] font-semibold text-left">
          $569.00{" "}
        </p>
        <div className="text-left mt-[10px]">
          <button className=" w-[97px] h-[21px] bg-green-50 text-[#1ABA1A] rounded-[6px] text-[13px] pb-1 ">
            خرید سریع
          </button>
        </div>
      </div>
    </>
  );
}
