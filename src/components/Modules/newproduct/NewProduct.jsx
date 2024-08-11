import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function NewProduct(props) {
  return (
    <>
      <Link href={`/singleproduct/${props._id}`}>
        <div>
          <div className="flex flex-row-reverse items-center">
            <Image
              src={props.img}
              width={200}
              height={300}
              className="w-[100px] sm:w-[120px] h-[90px] rounded-[10px]"
              alt="shod"
            ></Image>
            <div className="text-left">
              <p className="text-[11px] sm:text-[14px] font-bold ">
                {props.name}
              </p>
              <p className="text-[11px] text-red-500 sm:text-[15px] font-bold">
                {props.price && props.price.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
