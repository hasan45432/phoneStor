"use client";
import React, { useEffect } from "react";
import useFetch from "@/cutomHooks/useFetch";
import { useCombinedStore } from "@/app/store";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Sidbar from "@/components/templates/p-adminPage/sidbar/Sidbar";
import SidbarResponsive from "@/components/templates/p-adminPage/sidbar/SidbarResponsive";

export default function AdminPanelLayout({ children }) {
  const { fetchData } = useFetch();
  const router = useRouter();
  const path = usePathname();
  const getMy = async () => {
    let url = "https://technofadakar.liara.run/api/auth/me";

    await fetchData(url);
    const statesData = await useCombinedStore.getState().statesData;
    const statesResponse = await useCombinedStore.getState().statesResponse;
 
    if (
      statesData.data === null ||
      statesResponse.status === 401 ||
      statesData === null ||
      statesData.role === "USER"
    ) {
      router.push("/");
    }
  };

  useEffect(() => {
    getMy();
  }, []);
  return (
    <>
      <div className=" hidden xl:flex ">
        <Sidbar />
        {children}
      </div>
      <div className=" block xl:hidden">
        <SidbarResponsive />
        {children}
      </div>
    </>
  );
}
