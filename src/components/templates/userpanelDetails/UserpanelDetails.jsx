"use client";
import React, { useState, useEffect } from "react";
import { useCombinedStore } from "@/app/store";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useFetch from "@/cutomHooks/useFetch";
import Link from "next/link";
export default function UserpanelDetails() {
  const router = useRouter();
  const [userInformation, setUserInformation] = useState({});
  const { fetchData } = useFetch();

  const getMy = async () => {
    let url = "http://localhost:3000/api/auth/me";

    await fetchData(url);
    const statesResponse = useCombinedStore.getState().statesResponse;
    if (statesResponse.status === 401) {
      router.push("/");
    }
    const statesData = useCombinedStore.getState().statesData;
    setUserInformation(statesData);
  };

  useEffect(() => {
    getMy();
  }, []);

  const { getUserOrders } = useCombinedStore();
  useEffect(() => {
    let card = JSON.parse(localStorage.getItem("card")) || [];

    let result = card.reduce((prev, item) => prev + item.count, 0);

    getUserOrders(result);
  }, []);
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1500"
      className="flex flex-col items-center md:flex-row-reverse p-[30px] "
    >
      <div className="bg-[#FAFAFA] w-[60%] mb-[15px] md:mb-0 sm:w-[30%] text-left rounded-[10px] flex  items-end flex-col">
        <div>
          <Image
            src="/img/imageLoginPage/avatar.jpg.png"
            width={900}
            height={600}
            className="w-[214px] sm:h-[220px] p-[15px]"
            alt="shop"
          ></Image>
        </div>
        <div className="p-[15px]">
          <p className="text-[20px] font-bold">{userInformation.name}</p>
          <p className="text-[15px] text-[#666666]"> {userInformation.email}</p>
        </div>
    
      </div>

      <div className="w-[100%]">
        <div className="w-[100%]  flex flex-col gap-10  items-center  ">
          <p className="text-[14px] w-[100%] sm:w-[50%] sm:text-[18px] font-bold border  h-[45px] rounded-[10px] p-2">
            نام کاربری * :
            <span className="text-[14px] text-[#666666]">
              {userInformation.name}
            </span>
          </p>
          <p className="text-[14px] w-[100%] sm:w-[50%] sm:text-[18px] font-bold border  h-[45px] rounded-[10px] p-2">
            ایمیل شما * :
            <span className="text-[14px] text-[#666666]">
              {userInformation.email}
            </span>
          </p>
          <p className="text-[14px] w-[100%] sm:w-[50%] sm:text-[18px] font-bold border  h-[45px] rounded-[10px] p-2">
            نقش شما در سایت * :
            <span className="text-[14px] text-[#666666]">
              {userInformation.role === "USER" ? "کاربر" : "ادمین"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
