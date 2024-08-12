"use client";
import React, { useState, useEffect } from "react";
import NewProduct from "@/components/Modules/newproduct/NewProduct";
import useFetch from "@/cutomHooks/useFetch";
import { useCombinedStore } from "@/app/store";

export default function NewProducts() {
  const { fetchData } = useFetch();
  const [products, setProducts] = useState([]);

  const handleChange = async () => {
    let url = "http://localhost:3000/api/products";
    await fetchData(url);
    let statesData = useCombinedStore.getState().statesData;
    let filterData = statesData.filter((product) => {
      return product.category === "تبلت";
    });
    
    setProducts(filterData);
  };

  useEffect(() => {
    handleChange();
  }, []);
  return (
    <>
      <div className="w-[100%] 2xl:w-[85%]   bg-white mb-[20px] rounded-[10px]">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className=" sm:p-16 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {products.slice(0, 4).map((product) => {
            return <NewProduct key={product._id} {...product} />;
          })}
        </div>
      </div>
    </>
  );
}
