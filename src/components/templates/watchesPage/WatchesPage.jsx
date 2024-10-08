"use client";
import React,{useState,useEffect} from "react";
import Footer from "@/components/Modules/footer/Footer";
import MobilNavbar from "@/components/Modules/mobilNavbar/MobilNavbar";
import Navbar from "@/components/Modules/navbar/Navbar";
import useFetch from "@/cutomHooks/useFetch";
import { useCombinedStore } from "@/app/store";
import Product from "@/components/Modules/product/Product";
export default function WatchesPage() {
  const { fetchData } = useFetch();
  const [watches, setWatches] = useState([]);
  const getCases = async () => {
    let url = `${process.env.NEXT_PUBLIC_link}/api/products`;
    await fetchData(url);
    let statesData = useCombinedStore.getState().statesData;
    let filerProducts = statesData.filter((cases) => {
      return cases.category === "ساعت";
    });
    setWatches(filerProducts);
  };
  useEffect(() => {
    getCases();
  }, []);
  return (
    <div className="  container mx-auto pr-1 sm:pr-0 flex items-center justify-center  flex-col">
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <div className="block lg:hidden container mx-auto p-2">
        <MobilNavbar />
      </div>
      <div className=" bg-white rounded-[10px] w-[100%]  2xl:w-[85%] grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-[15px] mb-[15px]">
        {watches.map((watch) => {
          return <Product key={watch._id} {...watch} />;
        })}
      </div>

      <Footer />
    </div>
  );
}
