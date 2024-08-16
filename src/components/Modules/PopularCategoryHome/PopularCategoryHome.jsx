"use client";
import React, { useEffect, useState } from "react";
import PopularCategory from "@/components/Modules/popularCategory/PopularCategory";
import Image from "next/image";
import { useCombinedStore } from "@/app/store";
import useFetch from "@/cutomHooks/useFetch";
export default function PopularCategoryHome(props) {
  const [popular, setPopular] = useState([]);

  const { fetchData } = useFetch();
  const GetPopular = async () => {
    let url = "https://technofadakar.liara.run/api/products";
    await fetchData(url);

    let statesData = useCombinedStore.getState().statesData;
    let filterProducts = statesData.filter((product) => {
      return product.category === "کیس";
    });
    setPopular(filterProducts);
  
  };
  useEffect(() => {
    GetPopular();
  }, []);
  return (
    <div>
      <div className="w-[300px] sm:w-[415px]  mx-auto rounded-[10px] bg-[#FFFFFF] p-9">
        <div>
          <Image
            src={props.src}
            width={1200}
            height={900}
            className="w-[368px] h-[190px] rounded-[10px]"
            alt="shop"
          ></Image>
        </div>
        <div className="grid grid-cols-2 items-center mr-[30px] gap-10 mt-[30px]">
          {popular.slice(0, 4).map((product) => {
            return <PopularCategory key={product._id} {...product} />;
          })}
        </div>
      </div>
    </div>
  );
}
