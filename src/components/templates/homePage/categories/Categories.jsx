import React from "react";
import Category from "@/components/Modules/category/Category";
export default function Categories() {
  return (
    <>
      <div className="w-[295px] sm:w-[605px] ">
        <div className=" grid grid-cols-2 gap-3  sm:grid-cols-3  sm:gap-12 pt-[20px]">
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
        </div>
      </div>
    </>
  );
}
