"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function MobilNavbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <div className="flex flex-row-reverse w-[100%] transition-all   justify-between  py-8 ">
        <div className=" xl:ml-[200px]  lg:ml-[60px]">
          <p>خوش امدید</p>
          <ul className="flex flex-row-reverse  items-center gap-2">
            <div className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] rounded-[100%] bg-[#EBEEF6]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5 sm:size-6 mt-1 mr-1 sm:mt-2 sm:mr-2"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm5.03 4.72a.75.75 0 0 1 0 1.06l-1.72 1.72h10.94a.75.75 0 0 1 0 1.5H10.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <li className="text-sm xl:text-lg lg:text-[15px] font-bold">
              <Link href="/">ورود</Link>
            </li>
            <p className="text-[25px]">/</p>
            <li className="text-sm xl:text-lg lg:text-[15px]  font-bold">
              <Link href="/">ثبت نام </Link>
            </li>
          </ul>
        </div>
        <Image
          src="/icons/logo.png.png" // تنها یک بار پسوند png را وارد کنید
          alt="لوگو"
          width={500}
          height={300}
          className="w-[161px] h-[40px] mt-4 hidden sm:block"
          priority
        />
        <nav className="duration-500">
          <section className="MOBILE-MENU  flex lg:hidden ">
            <div
              className="HAMBURGER-ICON  space-y-2 p-6"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            </div>

            <div
              className={`  ${isNavOpen ? "showMenuNav" : "hideMenuNav"} `}
              style={{ backgroundColor: "rgb(74 222 128)" }}
            >
              <div
                className="absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="h-8 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="flex  child:text-white child:text-xl  flex-col items-center justify-between min-h-[250px]">
                <li>
                  <Link href="/">صفحه اصلی</Link>
                </li>
                <li>
                  <Link href="/">تمامی صفحات</Link>
                </li>
                <li>
                  <Link href="/">محصولات</Link>
                </li>
                <li>
                  <Link href="/">درباره ی سایت</Link>
                </li>
              </ul>
            </div>
          </section>

          <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/portfolio">Portfolio</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>

        <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        transition: background-color 2s ease, transform 2s ease, opacity 2s ease 2s; /* اضافه کردن تاخیر */  
        opacity: 1; /* حالت نمایان */   
      }
        .hideMenuNav {  
    transition: opacity 1s ease; /* تایم انیمیشن برای مخفی کردن */  
    opacity: 0; /* حالت مخفی */  
  }  
    `}</style>
      </div>
      <div className="w-[100%] h-[75px] rounded-[10px]  bg-[#1ABA1A] flex">
        <div className=" mx-auto relative">
          <input
            className="h-[35px] w-[250px] sm:w-[400px] lg:w-[360px] xl:w-[500px] sm:h-[45px] pr-3 rounded-[30px] bg-[#FFFFFF] mt-[20px] sm:mt-[15px]"
            placeholder="جستجوی محصول....."
          ></input>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 absolute bottom-[24px] left-[10px]"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
