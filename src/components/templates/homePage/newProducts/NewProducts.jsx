import React from "react";
import NewProduct from "@/components/Modules/newproduct/NewProduct";
export default function NewProducts() {
  return (
    <>
      <div className="w-[100%]  bg-white mb-[20px] rounded-[10px]">
        <div className=" sm:p-16 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <NewProduct />
          <NewProduct />
          <NewProduct />
          <NewProduct />

        </div>
      </div>
    </>
  );
}
