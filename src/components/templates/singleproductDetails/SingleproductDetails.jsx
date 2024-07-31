import React from "react";
import Image from "next/image";

export default function SingleProductDetails() {
  return (
    <div  data-aos="zoom-in" data-aos-duration="1500" className="  bg-[#FFFFFF] rounded-[10PX] flex flex-col md:justify-around  items-center sm:flex-row-reverse">
      <div className="flex flex-row-reverse ">
        <div className="">
          <Image
            src="/img/imageLoginPage/3 → prod1.jpg.png"
            width={400}
            height={300}
            className="w-[250px] mb-10 mt-8  sm:w-[500px] bg-cover bg-center pl-7  xl:mt-[85px]  xl:h-[500px] rounded-[10px]"
            alt="shop"
          ></Image>
        </div>
      </div>
      <div>
        <div className="sm:w-[346px] flex flex-col mt-6 h-[330px] p-4  sm:pr-6 md:pr-2 ">
          <h2 className="text-[20px] font-bold text-left">
            Xioma Redmi Note 11 Pro 256GB 2023, Black Smartphone
          </h2>
          <p className="text-[#F1352B]  text-[25px] mt-[12px] font-semibold text-left">
            $569.00{" "}
          </p>
          <div className="text-left mt-[15px] child:text-[13px] flex flex-col gap-2">
            <p>Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core</p>
            <p>DDR5 Compatible: 4*SMD DIMMs with XMP 3.0 Memory</p>
            <p>Commanding Power Design: Twin 16+1+2 Phases Digital</p>
          </div>
          <div className="flex flex-row-reverse gap-2 mt-[15px]">
            <div className="w-[122px] h-[28px] rounded-[6PX] bg-green-50">
              <p className="text-[13px] pt-[6px] pr-[13px] text-[#1ABA1A]">
                FREE SHIPPING
              </p>
            </div>
            <div className="w-[122px] h-[28px] rounded-[6PX] bg-red-50">
              <p className="text-[13px] pt-[6px] pr-[30px] text-[#F1352B]">
                FREE GIFT
              </p>
            </div>
          </div>
        </div>
        <button className="text-[15px] w-[200px] h-[35px] sm:text-[18px] mb-[15px] sm:h-[70px] mr-[85px] mx-auto mt-[15px] sm:w-[240px] rounded-[10px] text-white bg-[#1ABA1A]">
          اضافه کردن به سبد خرید
        </button>
      </div>
    </div>
  );
}
