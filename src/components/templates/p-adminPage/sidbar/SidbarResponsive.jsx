"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function SidbarResponsive() {
  const [action, setAction] = useState("");

  const openMenu = () => {
    setAction("right-[1px]");
  };

  const closeMenu = () => {
    setAction("-right-[1000px]");
  };
  return (
    <div className="">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6 mt-2 mr-2 sm:size-10 cursor-pointer"
        onClick={openMenu}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
        />
      </svg>
      <nav
        className={` top-0 bg-black ${action} -right-[1000px] text-black transition-all duration-500  text-md w-[70%] sm:w-[32%] md:w-[25%]  bottom-0 flex  absolute  gap-2  font-vazirBlack  `}
      >
        <ul className="flex w-[80%] flex-col child:text-white child:transition-all child:duration-300   child:w-[100%] child:rounded-[16px] child:p-[20px]">
          <li className="flex items-center ">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1.5em"
              width="1.5em"
              className="ml-2"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12 14v8H4a8 8 0 018-8zm0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm9 4h1v5h-8v-5h1v-1a3 3 0 016 0v1zm-2 0v-1a1 1 0 00-2 0v1h2z" />
            </svg>
            <Link href="/p-admin">پیشخوان</Link>
          </li>
          <li className="flex items-center">
            <svg
              fill="none"
              className="ml-2"
              viewBox="0 0 24 24"
              height="1.5em"
              width="1.5em"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M5 4h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1zM2 5a3 3 0 013-3h14a3 3 0 013 3v14a3 3 0 01-3 3H5a3 3 0 01-3-3V5zm10 7c-2.761 0-5-2.686-5-6h2c0 2.566 1.67 4 3 4s3-1.434 3-4h2c0 3.314-2.239 6-5 6z"
                clipRule="evenodd"
              />
            </svg>
            <Link href="/p-admin/products">محصولات </Link>
          </li>
          <li className="flex items-center">
            <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              height="1.5em"
              width="1.5em"
              className="ml-2"
            >
              <path d="M1.5 0A1.5 1.5 0 000 1.5v2A1.5 1.5 0 001.5 5h13A1.5 1.5 0 0016 3.5v-2A1.5 1.5 0 0014.5 0h-13zm1 2h3a.5.5 0 010 1h-3a.5.5 0 010-1zm9.927.427A.25.25 0 0112.604 2h.792a.25.25 0 01.177.427l-.396.396a.25.25 0 01-.354 0l-.396-.396zM0 8a2 2 0 012-2h12a2 2 0 012 2v5a2 2 0 01-2 2H2a2 2 0 01-2-2V8zm1 3v2a1 1 0 001 1h12a1 1 0 001-1v-2H1zm14-1V8a1 1 0 00-1-1H2a1 1 0 00-1 1v2h14zM2 8.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0 4a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5z" />
            </svg>
            <Link href="/p-admin/discount">تخفیف ها</Link>
          </li>
          <li className="flex items-center">
            <svg
              data-name="Layer 1"
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1.5em"
              width="1.5em"
              className="ml-2"
            >
              <path d="M13.991 13h-4a1 1 0 000 2h4a1 1 0 000-2zm-4-2h1a1 1 0 000-2h-1a1 1 0 000 2zm6-1V9a4.004 4.004 0 00-4-4h-2a5.006 5.006 0 00-5 5v4a5.006 5.006 0 005 5h4a5.006 5.006 0 005-5v-1a3.005 3.005 0 00-3-3zm0 0v.001h-1zm1 4a3.003 3.003 0 01-3 3h-4a3.003 3.003 0 01-3-3v-4a3.003 3.003 0 013-3h2a2.003 2.003 0 012 2v1a2.003 2.003 0 002 2 1 1 0 011 1zm3-13h-16a3.003 3.003 0 00-3 3v16a3.003 3.003 0 003 3h16a3.003 3.003 0 003-3V4a3.003 3.003 0 00-3-3zm1 19a1 1 0 01-1 1h-16a1 1 0 01-1-1V4a1 1 0 011-1h16a1 1 0 011 1z" />
            </svg>

            <Link href="/p-admin/category" className="w-[100%]">
              دسته بندی ها
            </Link>
          </li>
          <li className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              height="1.5em"
              width="1.5em"
              className="ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            <Link href="/p-admin/users">کاربران</Link>
          </li>
          <li className="flex items-center">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1.5em"
              width="1.5em"
              className="ml-2"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M20 22H4a1 1 0 01-1-1V3a1 1 0 011-1h16a1 1 0 011 1v18a1 1 0 01-1 1zm-1-2V4H5v16h14zM7 6h4v4H7V6zm0 6h10v2H7v-2zm0 4h10v2H7v-2zm6-9h4v2h-4V7z" />
            </svg>
            <Link href="/p-admin/comments">کامنت ها</Link>
          </li>
        </ul>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8 absolute text-white top-4 left-2 cursor-pointer"
          onClick={closeMenu}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </nav>
    </div>
  );
}
