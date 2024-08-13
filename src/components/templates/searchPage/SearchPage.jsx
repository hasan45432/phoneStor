"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/components/Modules/footer/Footer";
import MobilNavbar from "@/components/Modules/mobilNavbar/MobilNavbar";
import Navbar from "@/components/Modules/navbar/Navbar";
import { useCombinedStore } from "@/app/store";
import useFetch from "@/cutomHooks/useFetch";
import Product from "@/components/Modules/product/Product";

export default function SearchPage() {
  const { fetchData } = useFetch();
  const { getUserOrders } = useCombinedStore();
  const [results, setResults] = useState([]);

  const resultSearch = async () => {
    let searchInput = useCombinedStore.getState().searchInput;
    let url = "http://localhost:3000/api/products";
    await fetchData(url);
    let statesData = useCombinedStore.getState().statesData;

    let filterSearch = statesData.filter((product) => {
      return product.name.includes(searchInput);
    });

    if (searchInput.length) {
      setResults(filterSearch);
    } else {
      setResults([]);
    }

    console.log(filterSearch);
    console.log(searchInput);
  };

  useEffect(() => {
    resultSearch();
  }, []);
  useEffect(() => {
    let card = JSON.parse(localStorage.getItem("card")) || [];

    let result = card.reduce((prev, item) => prev + item.count, 0);

    getUserOrders(result);
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
        {results.length ? (
          results.map((result) => {
            return <Product key={result._id} {...result} />;
          })
        ) : (
          <div className="col-span-2 md:col-span-3 lg:col-span-4 flex items-center justify-center w-full h-full">
            <p className="text-red-500 text-[20px]  sm:text-[30px] ">هیچ نتیجه ای پیدا نشد</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
