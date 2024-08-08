import React from "react";
import Image from "next/image";
export default function Product(props) {

  return (
    <>
      <div className="w-[115px] h-[350px]  sm:w-[214px] sm:h-[360px] ">
        <div className="flex flex-col items-center">
          <Image
            src={props.img}
            width={1200}
            height={900}
            className="w-[130px] h-[150px] sm:w-[192px] sm:h-[199px] mr-10"
            alt="shop"
          ></Image>
          <p className="text-[15px] font-bold text-left">{props.name}</p>
        </div>

        <p className="text-[#F1352B] text-[25px] mt-[10px] font-semibold text-left">
          {props.price && props.price.toLocaleString()}
        </p>
        <div className="text-left mt-[10px]">
          <button className=" hover:bg-[#1ABA1A] hover:text-white transition-all duration-500  w-[97px] h-[21px] bg-green-50 text-[#1ABA1A] rounded-[6px] text-[13px] pb-1 ">
            خرید سریع
          </button>
        </div>
      </div>
    </>
  );
}
