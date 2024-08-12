"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import useFetch from "@/cutomHooks/useFetch";
import { useCombinedStore } from "@/app/store";
import { useRouter } from "next/navigation";
import CreateComment from "./productComment/CreateComment";
export default function SingleProductDetails() {
  const { getProductComments } = useCombinedStore();
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

    

    getProductComments(findProduct.comments);

    if (!findProduct) {
      return navigate.push("/");
    }
    setProduct(findProduct);
    
  };

  const [count, setCount] = useState(1);

  const addToCard = () => {
    let card = JSON.parse(localStorage.getItem("card")) || [];

    if (card.length) {
      let isInCard = card.some((item) => item.id === router.split("/").pop());

      if (isInCard) {
        card.forEach((item) => {
          if (item.id === router.split("/").pop()) {
            item.count = item.count + count;
          }
        });

        localStorage.setItem("card", JSON.stringify(card));
        swal({
          title: "محصول به سبد خرید اضافه شد",
          icon: "success",
        });
      } else {
        let cardItem = {
          id: router.split("/").pop(),
          name: product.name,
          price: product.price,
          img: product.img,
          count,
        };
        card.push(cardItem);
        localStorage.setItem("card", JSON.stringify(card));
        swal({
          title: "محصول به سبد خرید اضافه شد",
          icon: "success",
        });
      }
    } else {
      let cardItem = {
        id: router.split("/").pop(),
        name: product.name,
        price: product.price,
        img: product.img,
        count,
      };
      card.push(cardItem);
      localStorage.setItem("card", JSON.stringify(card));
      swal({
        title: "محصول به سبد خرید اضافه شد",
        icon: "success",
      });
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, [router]);

  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1500"
      className="  bg-[#FFFFFF] rounded-[10PX] flex flex-col md:justify-around mb-[15px]  items-center sm:flex-row-reverse"
    >
      <div className="flex flex-row-reverse ">
        <div className="">
          <Image
            src={product.img}
            width={400}
            height={300}
            className="w-[250px] mb-10 mt-8  sm:w-[500px] bg-cover bg-center pl-7  xl:mt-[85px]  xl:h-[500px] rounded-[10px]"
            alt="shop"
          ></Image>
        </div>
      </div>
      <div>
        <div className="sm:w-[346px] flex flex-col mt-6 h-[330px] p-4  sm:pr-6 md:pr-2 ">
          <h2 className="text-[19px] font-bold text-left">{product.name}</h2>
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
          <div className="flex gap-2 justify-end mt-[15px] items-center">
            <p
              onClick={() => setCount(count + 1)}
              className="text-[18px] cursor-pointer text-center w-[20px]  border"
            >
              +
            </p>
            <p className="text-[18px] text-center w-[20px] border">{count}</p>
            <p
              onClick={count > 0 ? () => setCount(count - 1) : null}
              className="text-[18px] cursor-pointer text-center w-[20px] border"
            >
              -
            </p>
          </div>
        </div>
        <button
          onClick={addToCard}
          className="text-[15px] hover:text-white hover:bg-[#1ABA1A] transition-all duration-500 bg-green-100 text-[#1ABA1A] w-[200px] h-[35px] sm:text-[18px] mb-[15px] sm:h-[70px] mr-[85px] mx-auto mt-[15px] sm:w-[240px] rounded-[10px] "
        >
          اضافه کردن به سبد خرید
        </button>
      </div>
    </div>
  );
}
