import React from "react";
import Image from "next/image";
export default function NewProduct() {
  return (
    <>
      <div>
        <div className="flex flex-row-reverse items-center">
          <Image
            src="/img/imageHomePage/Link → prod60.png.png"
            width={1200}
            height={900}
            className="w-[120px] h-[90px] rounded-[10px]"
            alt="shod"
          ></Image>
          <div className="text-left">
            <p className="text-[14px] font-bold ">Microte Surface 2.0 Laptop</p>
            <p className="text-[15px] font-bold">$579.00</p>
          </div>
        </div>
      </div>
    </>
  );
}
