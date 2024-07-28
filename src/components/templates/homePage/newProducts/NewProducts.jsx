import React from "react";
import NewProduct from "@/components/Modules/newproduct/NewProduct";
export default function NewProducts() {
  return (
    <>
      <div className="w-[100%] h-[230px] bg-white mb-[20px] rounded-[10px]">
        <div className="p-16 flex">
          <NewProduct />
          <NewProduct />
          <NewProduct />
          <NewProduct />

        </div>
      </div>
    </>
  );
}
