import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function PopularCategory(props) {
  return (
    <>
      <Link href={`/singleproduct/${props._id}`}>
        <div className="flex flex-col items-center mt-[15px] sm:mt-[30px]">
          <Image
            src={props.img}
            width={1200}
            height={900}
            className="w-[100px] h-[110px] rounded-[60px]"
            alt="shodp"
          ></Image>
          <div className="flex flex-col items-center">
            <p className="text-[15px] font-bold text-right">{props.name}</p>
            <p className="text-[12px] text-red-500">
              {props.price && props.price.toLocaleString()}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}
