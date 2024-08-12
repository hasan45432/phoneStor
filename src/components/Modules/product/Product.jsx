"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import swal from "sweetalert";
import { useCombinedStore } from "@/app/store";
export default function Product(props) {
  const [count, setCount] = useState(1);
  const { getUserOrders } = useCombinedStore();

  const addToCard = () => {
    let card = JSON.parse(localStorage.getItem("card")) || [];

    let result = card.reduce((prev, item) => prev + item.count, 1);
    getUserOrders(result);

    console.log(result);

    if (card.length) {
      let isInCard = card.some((item) => item.id === props._id);

      if (isInCard) {
        card.forEach((item) => {
          if (item.id === props._id) {
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
          id: props._id,
          name: props.name,
          price: props.price,
          img: props.img,
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
        id: props._id,
        name: props.name,
        price: props.price,
        img: props.img,
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
    let card = JSON.parse(localStorage.getItem("card")) || [];

    let result = card.reduce((prev, item) => prev + item.count, 0);
    getUserOrders(result);
  }, []);

  return (
    <>
      <div className="w-[115px] h-[350px]    sm:w-[214px] sm:h-[360px] ">
        <Link href={`singleproduct/${props._id}`}>
          <div className="flex flex-col items-center">
            <Image
              src={props.img}
              width={1200}
              height={900}
              className="w-[130px] h-[150px] sm:w-[192px] sm:h-[199px] mr-10"
              alt="shop"
            ></Image>
            <p className="text-[15px] font-bold text-left">{props.name}</p>
          </div>
        </Link>

        <p className="text-[#F1352B] text-[17px] sm:text-[25px] mt-[10px] font-semibold text-left">
          {props.price && props.price.toLocaleString()}
        </p>
        <div className="text-left mt-[10px]">
          <button
            onClick={addToCard}
            className=" hover:bg-[#1ABA1A] hover:text-white transition-all duration-500  w-[97px] h-[21px] bg-green-50 text-[#1ABA1A] rounded-[6px] text-[13px] pb-1 "
          >
            خرید سریع
          </button>
        </div>
      </div>
    </>
  );
}
