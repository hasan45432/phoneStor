"use client";
import React, { useEffect, useState } from "react";
import Header from "../homePage/header/Header";
import Product from "@/components/Modules/product/Product";
import useFetch from "@/cutomHooks/useFetch";
import { useCombinedStore } from "@/app/store";

export default function ProductsDetails() {
  const { fetchData } = useFetch();
  const [products, setProducts] = useState([]);

  const handleChange = async () => {
    let url = "http://localhost:3000/api/products";
    await fetchData(url);
    let statesData = useCombinedStore.getState().statesData;
    setProducts(statesData);
  };

  useEffect(() => {
    handleChange();
  }, []);

  
  return (
    <>
      <div className="w-[100%]  2xl:w-[84%]">
      
        <div className="w-[100%]  mt-[15px] mb-[15px] bg-white rounded-[10px]">
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className=" md:p-[80px]  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
          >
            {products.map((product) => {
              return <Product />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
