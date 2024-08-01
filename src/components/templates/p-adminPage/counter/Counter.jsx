import React from "react";
import Link from "next/link";
import LayoutAdmin from "@/components/layputs/AdminPanelLayout";
export default function Counter() {
  return (
    <LayoutAdmin>
      <div className="">
        <div className="w-[250px] h-[1024px] bg-[#1ABA1A]">
          <ul className="p-[50px] child:text-white">
            <li>
              <Link href="/">پیشخوان</Link>
            </li>
            <li>
              <Link href="/">محصولات </Link>
            </li>
            <li>
              <Link href="/">دسته بندی ها</Link>
            </li>
            <li>
              <Link href="/">کاربران</Link>
            </li>
            <li>
              <Link href="/">کامنت ها</Link>
            </li>
            <li>
              <Link href="/">تخفیف ها</Link>
            </li>
          </ul>
        </div>
      </div>
    </LayoutAdmin>
  );
}
