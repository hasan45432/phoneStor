import React from "react";
import Sidbar from "@/components/templates/p-adminPage/sidbar/Sidbar";
import Rechart from "@/components/templates/p-adminPage/index/rechart";
import MyLineChart from "@/components/templates/p-adminPage/index/LineChart";
import Informations from "@/components/templates/p-adminPage/index/informations/Informations";
import SidbarResponsive from "@/components/templates/p-adminPage/sidbar/SidbarResponsive";

export default function Page() {
  return (
    <>
      <div className="flex">
        <div className=" hidden xl:block">
          <Sidbar />
        </div>
        <div className=" block xl:hidden">
          <SidbarResponsive />
        </div>

        <div className={`flex w-[100%] mx-auto flex-col `}>
          <div className="w-[100%] sm:w-[80%] mx-auto  h-[450px] mt-[50px] ">
            <p className="text-[20px] font-bold">امار فروش</p>
            <Rechart />
          </div>
          <div className="w-[100%] sm:w-[80%] mx-auto  h-[450px] mt-[50px] ">
            <p className="text-[20px] font-bold">نرخ رشد</p>
            <MyLineChart />
          </div>
          <Informations />
        </div>
      </div>
    </>
  );
}
