import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Login() {
  return (
    <>
      <div className="w-[100%] 2xl:w-[84%] bg-white rounded-[10px] mt-[15px] mb-[15px]">
        <div className="flex flex-col mb-[15px] lg:mb-0 lg:flex-row-reverse justify-between items-center ml-[60px]">
          <div className="p-[90px]  w-[360px] sm:w-auto">
            <Image
              src="/img/imageLoginPage/login.svg.png"
              width={900}
              height={600}
              className="w-[300px] h-[180px] sm:w-[250px] sm:h-[200px] md:w-[400px] bg-cover md:h-[325px] rounded-[10px] mr-10"
              alt="shop"
            ></Image>
          </div>
          <div className="flex flex-col w-[100%] md:w-[50%] mr-8 sm:mr-0">
            <div className="flex flex-col items-end">
              <p className="text-[20px] sm:text-[30px] text-[#1ABA1A] font-bold">
                خوش امدید لطفا وارد شوید
              </p>
            </div>

            <form className="flex flex-col items-end text-left mt-4">
              <input
                type="email"
                placeholder="Example@gmail.com"
                className="border w-[90%] xl:w-[75%] h-[43px] text-left pl-2 rounded-[6px]"
              />
              <input
                type="password"
                placeholder="....password"
                className="border w-[90%] xl:w-[75%] h-[43px] text-left pl-2 rounded-[6px] mt-[15px]"
              />
              <Link href="/" className="text-[13px] text-[#999999] mt-[15px]">
                پس ورد خود را فراموش کردین؟
              </Link>
              <button className="mt-[25px] text-[20px] pt-1 text-white w-[138px] h-[50px] rounded-[10px] bg-[#1ABA1A]">
                Login
              </button>
              <Link href="/" className="text-[#1ABA1A] text-[15px] mt-[15px]">
                Sign Up
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
