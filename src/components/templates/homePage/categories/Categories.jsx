import React from "react";
import Category from "@/components/Modules/category/Category";
export default function Categories() {
  return (
    <>
      <div className="w-[605px]  h-[200px]">
        <div className="flex items-center gap-12 pt-[20px]">
          <Category />
          <Category />
          <Category />
        </div>
        <div className="flex items-center gap-12 mt-[50px]">
          <Category />
          <Category />
          <Category />
        </div>
      </div>
    </>
  );
}
