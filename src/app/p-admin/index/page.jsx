"use client";
import React, { useEffect } from "react";
import Rechart from "@/components/templates/p-adminPage/index/Rechart"
import MyLineChart from "@/components/templates/p-adminPage/index/LineChart";
import Informations from "@/components/templates/p-adminPage/index/informations/Informations";
import AdminPanelLayout from "@/components/Modules/adminPanelLayout/AdminPanelLayout";

export default function Page() {

  return (
    <>
      <AdminPanelLayout>
        <div className="flex mx-auto w-[100%]">
          <div className={`flex w-[100%] mx-auto flex-col `}>
            <Informations />
            <div className="w-[100%] sm:w-[80%]   h-[450px] mt-[140px] md:mt-[50px] ">
              <p className="text-[20px] font-bold">امار فروش</p>
              <Rechart />
            </div>
            <div className="w-[100%] sm:w-[80%]   h-[450px]  mt-[50px] ">
              <p className="text-[20px] font-bold">نرخ رشد</p>
              <MyLineChart />
            </div>
          </div>
        </div>
      </AdminPanelLayout>
    </>
  );
}
