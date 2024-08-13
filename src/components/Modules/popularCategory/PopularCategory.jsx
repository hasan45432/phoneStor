import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function PopularCategory(props) {
  console.log(props);
  return (
    <>
      <Link href={`/singleproduct/${props._id}`}>
        <div className="flex flex-col items-center mt-[50px]">
          <Image
            src={props.img}
            width={1200}
            height={900}
            className="w-[120px] h-[120px] rounded-[60px]"
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
