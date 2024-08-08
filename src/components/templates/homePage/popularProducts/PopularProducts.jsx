"use client";
import React, { useState, useEffect } from "react";
import Product from "@/components/Modules/product/Product";
import Link from "next/link";
import useFetch from "@/cutomHooks/useFetch";
import { useCombinedStore } from "@/app/store";

export default function PopularProducts() {
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
    <div className="mb-[20px] p-1 w-[100%] 2xl:w-[85%]  bg-white rounded-[10px] ">
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className=" md:p-[80px]  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      >
        {products.slice(25, 30).map((product) => {
          return <Product key={product._id} {...product} />;
        })}
      </div>
      <div className="mx-auto text-center pb-[20px] ">
        <button className="w-[100px] hover:bg-[#1ABA1A] hover:text-white sm:w-[150px] sm:h-[40px] transition-all duration-500  h-[20px]  rounded-[6px] bg-green-50 text-[#1ABA1A] text-[15px] sm:text-[18px]">
          <Link href="/products">تمامی محصولات</Link>
        </button>
      </div>
    </div>
  );
}
