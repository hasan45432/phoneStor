"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Categories from "../categories/Categories";
import Product from "@/components/Modules/product/Product";
import useFetch from "@/cutomHooks/useFetch";
import { useCombinedStore } from "@/app/store";

export default function Computers() {
  const { fetchData } = useFetch();
  const [products, setProducts] = useState([]);

  const handleChange = async () => {
    let url = "http://localhost:3000/api/products";
    await fetchData(url);
    let statesData = useCombinedStore.getState().statesData;
    let filterData = statesData.filter((product) => {
      return product.category === "لپتاپ";
    });
    
    setProducts(filterData);
  };

  useEffect(() => {
    handleChange();
  }, []);
  return (
    <>
      <div className="w-[100%] 2xl:w-[85%] rounded-[10px] bg-white mb-[20px]">
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="flex  flex-col xl:flex-row-reverse pt-[50px] "
        >
          <div className="w-[605px] hidden sm:block mx-auto    h-[200px] relative">
            <Image
              src="/img/imageHomePage/prod19.png.png"
              width={900}
              height={400}
              className=" w-[100%] h-full object-cover rounded-[10px]"
              alt="shop"
            ></Image>

            <p className="text-[26px] text-left text-white absolute top-6 w-[150px] left-12   font-medium">
              Mobok 2 superchard by M2
            </p>
          </div>
          <div className="mx-auto pl-4">
            <Categories />
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="mt-[40px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
        >
          {products.slice(0, 5).map((product) => {
            return <Product key={product._id} {...product} />;
          })}
        </div>
      </div>
    </>
  );
}
