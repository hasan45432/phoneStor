"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import useFetch from "@/cutomHooks/useFetch";
import { useCombinedStore } from "@/app/store";
import { useRouter } from "next/navigation";
export default function SingleProductDetails() {
  const { fetchData } = useFetch();
  const router = usePathname();
  const navigate = useRouter();
  const [product, setProduct] = useState({});
  const getSingleProduct = async () => {
    let url = "http://localhost:3000/api/products";
    await fetchData(url);
    let statesData = useCombinedStore.getState().statesData;
    let findProduct = statesData.find((product) => {
      return product._id === router.split("/").pop();
    });
    if (!findProduct) {
      navigate.push("/");
    }
    setProduct(findProduct);
    console.log(findProduct);
  };
  useEffect(() => {
    console.log(router.split("/").pop());
    getSingleProduct();
  }, [router]);

  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1500"
      className="  bg-[#FFFFFF] rounded-[10PX] flex flex-col md:justify-around  items-center sm:flex-row-reverse"
    >
      <div className="flex flex-row-reverse ">
        <div className="">
          <Image
            src={product.img}
            width={800}
            height={600}
            className="w-[250px] mb-10 mt-8  sm:w-[500px] bg-cover bg-center pl-7  xl:mt-[85px]  xl:h-[500px] rounded-[10px]"
            alt="shop"
          ></Image>
        </div>
      </div>
      <div>
        <div className="sm:w-[346px] flex flex-col mt-6 h-[330px] p-4  sm:pr-6 md:pr-2 ">
          <h2 className="text-[20px] font-bold text-left">{product.name}</h2>
          <p className="text-[#F1352B]  text-[25px] mt-[12px] font-semibold text-left">
            {product.price && product.price.toLocaleString()}
          </p>
          <div className="text-left mt-[15px] child:text-[13px] flex flex-col gap-2">
            <p>{product.shortDescription}</p>
            <p>{product.longDescription}</p>
          </div>
          <div className="flex flex-row-reverse gap-2 mt-[15px]">
            <div className="w-[122px] h-[28px] rounded-[6PX] bg-green-50">
              <p className="text-[13px] pt-[6px] pr-[13px] text-[#1ABA1A]">
                FREE SHIPPING
              </p>
            </div>
            <div className="w-[122px] h-[28px] rounded-[6PX] bg-red-50">
              <p className="text-[13px] pt-[6px] pr-[30px] text-[#F1352B]">
                FREE GIFT
              </p>
            </div>
          </div>
        </div>
        <button className="text-[15px] hover:text-white hover:bg-[#1ABA1A] transition-all duration-500 bg-green-100 text-[#1ABA1A] w-[200px] h-[35px] sm:text-[18px] mb-[15px] sm:h-[70px] mr-[85px] mx-auto mt-[15px] sm:w-[240px] rounded-[10px] ">
          اضافه کردن به سبد خرید
        </button>
      </div>
    </div>
  );
}
