import React from "react";
import Article from "@/components/Modules/article.jsx/Article";
export default function Articles() {
  return (
    <>
      <div className="w-[100%]  grid grid-cols-2  sm:gap-0  lg:grid-cols-3 xl:grid-cols-4   items-center bg-white rounded-[10px] mb-[20px] pt-[50px]  ">
        <Article />
        <Article />
        <Article />
        <Article />
      </div>
    </>
  );
}
