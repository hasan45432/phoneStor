import React from "react";
import Image from "next/image";
export default function Article() {
  return (
    <>
      <div className="w-[310px] h-[400px]">
        <div>
          <Image
            src="/img/imageHomePage/prod17.jpg.png"
            width={1200}
            height={900}
            className="w-[302px] h-[230px] mr-8 rounded-[10px]"
            alt="shop"
          ></Image>
        </div>
        <div className="text-left mt-[16px]">
          <p className="text-[15px] w-[310px] mr-[20px] font-bold">
            Summer Sale with Sale up to 50% OFF for Foam Gaming Chair.
          </p>
          <div className=" text-left w-[330px]">
            <p className="text-[13px] mt-[10px]">
              Limited time offer. Hurry up
            </p>
            <button className=" mt-[10px] pt-1 border-solid text-[#1ABA1A] border-[#1ABA1A] border w-[122px] h-[35px] rounded-[10px]">
              shop now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
