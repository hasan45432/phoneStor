import React from "react";

export default function Comments(props) {
  return (
    <div className="flex flex-col  items-center  mt-4 ">
      <div>
        <div className="flex justify-between w-[240px] sm:w-[300px]">
          <p className="text-[16] font-bold">{props.username}</p>
          <p className="text-[13px]">{props.date.slice(0, 9)}</p>
        </div>
        <p className=" text-[14px]">{props.description}</p>
        <hr className=" text-[3px]" />
      </div>
    </div>
  );
}
