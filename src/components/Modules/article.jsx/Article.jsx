import React from "react";
import Image from "next/image";
export default function Article(props) {
  return (
    <>
      <div className=" w-[150px] sm:w-[300px] mx-auto h-[370px] mt-4">
        <div>
          <Image
            src={props.src}
            width={600}
            height={400}
            className="w-[150px] mx-auto h-[150px] sm:w-[302px] sm:h-[230px]  rounded-[10px]"
            alt="shop"
          ></Image>
        </div>
        <div className="text-left sm:mt-[16px] mx-auto">
          <p className="text-[15px] w-[150px] mx-auto sm:w-[300px]  font-bold">
            Summer Sale with Sale up to 50% OFF for Foam Gaming Chair.
          </p>
          <div className=" text-left sm:w-[300px]">
            <p className="text-[13px] mx-auto w-[140px] sm:w-[300px] mt-[10px]">
              Limited time offer. Hurry up
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
