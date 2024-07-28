import React from "react";
import Article from "@/components/Modules/article.jsx/Article";
export default function Articles() {
  return (
    <>
      <div className="w-[100%] h-[490px] flex items-center bg-white rounded-[10px] mb-[20px] pt-[50px]  ">
        <Article />
        <Article />
        <Article />
        <Article />
      </div>
    </>
  );
}
