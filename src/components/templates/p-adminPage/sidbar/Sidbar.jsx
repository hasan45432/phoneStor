import React from "react";
import Link from "next/link";
export default function Sidbar() {
  return (
    <div className="w-[120%] h-[120%]  bg-[#1ABA1A]">
      <ul className="p-[50px] child:text-[15px] lg:child:text-[18px] flex flex-col  font-bold gap-12 child:text-white">
        <li className="flex items-center">
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
            data-name="Layer 1"
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1.5em"
            width="1.5em"
            className="ml-2"
          >
            <path d="M13.991 13h-4a1 1 0 000 2h4a1 1 0 000-2zm-4-2h1a1 1 0 000-2h-1a1 1 0 000 2zm6-1V9a4.004 4.004 0 00-4-4h-2a5.006 5.006 0 00-5 5v4a5.006 5.006 0 005 5h4a5.006 5.006 0 005-5v-1a3.005 3.005 0 00-3-3zm0 0v.001h-1zm1 4a3.003 3.003 0 01-3 3h-4a3.003 3.003 0 01-3-3v-4a3.003 3.003 0 013-3h2a2.003 2.003 0 012 2v1a2.003 2.003 0 002 2 1 1 0 011 1zm3-13h-16a3.003 3.003 0 00-3 3v16a3.003 3.003 0 003 3h16a3.003 3.003 0 003-3V4a3.003 3.003 0 00-3-3zm1 19a1 1 0 01-1 1h-16a1 1 0 01-1-1V4a1 1 0 011-1h16a1 1 0 011 1z" />
          </svg>

          <Link href="/p-admin/category">دسته بندی ها</Link>
        </li>
        <li className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            height="1.7em"
            width="1.7em"
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
        <li className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>

          <Link href="/p-admin/discount">تخفیف ها</Link>
        </li>
      </ul>
    </div>
  );
}
