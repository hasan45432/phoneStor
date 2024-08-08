import React from "react";

export default function Informations() {
  return (
    <>
      <div className="grid grid-cols-1  mx-auto   md:grid-cols-2 gap-4  2xl:grid-cols-4  mt-[50px]">
        <div className="w-[200px] sm:w-[300px] flex items-center rounded-[10px] justify-center h-[60px] bg-[#1ABA1A]">
          <p className="text-[17px] sm:text-[20px] font-bold text-white ">
            تعداد کاربران : 33
          </p>
        </div>
        <div className="w-[200px] sm:w-[300px] flex items-center rounded-[10px] justify-center h-[60px] bg-[#1ABA1A]">
          <p className="text-[17px] sm:text-[20px] font-bold text-white ">
            تعداد محصولات : 33
          </p>
        </div>
        <div className="w-[200px] sm:w-[300px] flex items-center rounded-[10px] justify-center h-[60px] bg-[#1ABA1A]">
          <p className="text-[17px] sm:text-[20px] font-bold text-white ">
            تعداد کامنت ها : 33
          </p>
        </div>
        <div className="w-[200px] sm:w-[300px] flex items-center rounded-[10px] justify-center h-[60px] bg-[#1ABA1A]">
          <p className="text-[17px] sm:text-[20px] font-bold text-white ">
            تعداد دسته بندی ها : 33
          </p>
        </div>
      </div>
    </>
  );
}
