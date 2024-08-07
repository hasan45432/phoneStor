import React from "react";

export default function ProductComment() {
  return (
    <div className="flex flex-col lg:flex-row-reverse items-center justify-around w-[100%]">
      <form
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="max-w-md  mt-8 p-4 sm:p-0  mb-8  "
      >
        <div className=" flex flex-col items-center ">
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium ml-[160px] w-full   font-bold   absolute text-sm  dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:border-green-400 peer-focus:dark:focus:border-green-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 "
          >
            لطفا نظر خود را در رابطه با سفارش با ما به اشتراک بگذارید*
          </label>
          <textarea
            name="comment"
            cols="45"
            rows="8"
            className="mt-10 block py-2.5 px-0 w-full  text-sm rounded-[10px] text-gray-900 bg-transparent  border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-400 focus:outline-none focus:ring-0 focus:border-green-400 peer "
          ></textarea>
        </div>

        <div className="relative z-0 w-full mb-5 group mt-6">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-400 focus:outline-none focus:ring-0 focus:border-green-400 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:border-green-400 peer-focus:dark:focus:border-green-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            ایمیل
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="repeat_password"
            id="floating_repeat_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-400 focus:outline-none focus:ring-0 focus:border-green-400 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_repeat_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:border-green-400 peer-focus:dark:border-green-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            نام کاربری
          </label>
        </div>

        <button
          type="submit"
          className="text-[15px] hover:text-white hover:bg-[#1ABA1A] transition-all duration-500 bg-green-100 text-[#1ABA1A] w-[120px] h-[40px] sm:text-[18px] mb-[15px]    mt-[15px]  rounded-[10px] "
        >
          ارسال
        </button>
      </form>
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="flex flex-col gap-4 h-[200px] mt-4 mb-[120px] lg:mb-12"
      >
        <p className="text-[18px] font-bold">
          9 دیدگاه برای این محصول ثبت شده است
        </p>
        <div>
          <p className="text-[16] font-bold">حسن فداکار</p>
          <p className=" text-[14px]">من از این قهوه خیلی راضی بودم</p>
          <hr className=" text-[3px]" />
        </div>
        <div>
          <p className="text-[16] font-bold">حسن فداکار</p>
          <p className=" text-[14px]">من از این قهوه خیلی راضی بودم</p>
          <hr className=" text-[3px]" />
        </div>
        <div>
          <p className="text-[16] font-bold">حسن فداکار</p>
          <p className=" text-[14px]">من از این قهوه خیلی راضی بودم</p>
          <hr className=" text-[3px]" />
        </div>
        <div>
          <p className="text-[16] font-bold">حسن فداکار</p>
          <p className=" text-[14px]">من از این قهوه خیلی راضی بودم</p>
          <hr className=" text-[3px]" />
        </div>
      </div>
    </div>
  );
}
