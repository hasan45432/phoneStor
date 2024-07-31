import React from "react";
import Image from "next/image";

export default function CardDetails() {
  return (
    <>
      <div  data-aos="zoom-in" data-aos-duration="1500" className="flex items-center justify-center mt-[15px]">
        <div className="w-[80%] lg:w-[65%] rounded-[15px] flex flex-col gap-10 sm:flex-row-reverse items-center text-left bg-[#FAFAFA]">
          <div>
            <Image
              src="/img/imageLoginPage/prod26.png.png" // توجه کنید که مطمئن شوید مسیر صحیح است
              width={900}
              height={600}
              className="w-[220px] sm:h-[270px] pl-[15px]"
              alt="shop"
            />
          </div>
          <div>details</div>{" "}
          {/* اینجا می‌توانید متن‌های دیگری اضافه کنید اگر لازم است */}
          <div className="w-[260px] sm:pt-20 pl-8 pb-4">
            <p className="text-[15px] font-bold">
              SROK Smart Phone 128GB, Oled Retina
            </p>
            <p className="text-[20px] text-[#F1352B]">$579.00</p>
          </div>
        </div>
      </div>
      <div  data-aos="zoom-in" data-aos-duration="1500" className="w-[70%] lg:w-[40%] mx-auto h-[200px] mt-[15px] mb-[15px] rounded-[15px] bg-white border-green-400 border flex justify-center items-center">
        <div className="flex flex-col items-center">
          <p className="text-[20px] font-bold mb-[15px]">جمع خرید: 1,737.00</p>
          <button className="w-[150px] h-[50px] text-white bg-[#1ABA1A] rounded-[10px]">
            تکمیل خرید
          </button>
        </div>
      </div>
    </>
  );
}
