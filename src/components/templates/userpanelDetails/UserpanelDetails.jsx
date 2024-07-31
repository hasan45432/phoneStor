import React from "react";

import Image from "next/image";
export default function UserpanelDetails() {
  return (
    <div  data-aos="zoom-in" data-aos-duration="1500" className="flex flex-col items-center md:flex-row-reverse p-[30px] ">
      <div className="bg-[#FAFAFA] w-[60%] mb-[15px] md:mb-0 sm:w-[30%] text-left rounded-[10px] flex  items-end flex-col">
        <div>
          <Image
            src="/img/imageLoginPage/avatar.jpg.png"
            width={900}
            height={600}
            className="w-[214px] sm:h-[220px] p-[15px]"
            alt="shop"
          ></Image>
        </div>
        <div className="p-[15px]">
          <p className="text-[20px] font-bold">Mark Cole</p>
          <p className="text-[15px] text-[#666666]">swoo@gmail.com</p>
        </div>
      </div>
      <div className="w-[100%]">
        <div className="w-[100%]  flex flex-col gap-10  items-center text-left">
          <p className="text-[14px] w-[100%] sm:w-[50%] sm:text-[18px] font-bold border  h-[45px] rounded-[10px] p-2">
            First Name * :{" "}
            <span className="text-[13px] text-[#666666]">hasan</span>
          </p>
          <p className="text-[14px] w-[100%] sm:w-[50%] sm:text-[18px] font-bold border  h-[45px] rounded-[10px] p-2">
            Last Name * :{" "}
            <span className="text-[13px] text-[#666666]">fadakar</span>
          </p>
          <p className="text-[14px] w-[100%] sm:w-[50%] sm:text-[18px] font-bold border  h-[45px] rounded-[10px] p-2">
            Phone Number * :{" "}
            <span className="text-[13px] text-[#666666]">09927821570</span>
          </p>
          <p className="text-[14px] w-[100%] sm:w-[50%] sm:text-[18px] font-bold border  h-[45px] rounded-[10px] p-2">
            Email Address * :{" "}
            <span className="text-[13px] text-[#666666]">swoo@gmail.com</span>
          </p>
        </div>
      </div>
    </div>
  );
}
