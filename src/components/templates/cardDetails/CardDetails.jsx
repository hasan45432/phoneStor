"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function CardDetails() {
  const [orders, setOrders] = useState([]);
  const [discount, setDiscount] = useState("");

  const [alert, setAlert] = useState("");
  const [alertCode, setAlertCode] = useState("");
  const [emptyAlert, setEmptyAlert] = useState("");

  const getOrders = () => {
    let card = JSON.parse(localStorage.getItem("card")) || [];
    setOrders(card);
    console.log(card);
  };

  const getTotalPrice = () => {
    let price = 0;

    if (orders.length) {
      price = orders.reduce(
        (prev, current) => prev + current.price * current.count,
        0
      );
    }

    return price;
  };

  function complite(e) {
    e.preventDefault();
    swal({
      title: "این سایت صرفا یک نمونه است و محصولی به فروش نمی رسد",
      icon: "success",
    });
  }

  const addDiscount = async () => {
    if (!discount.length) {
      return setEmptyAlert("لطفا کد را وارد کنید");
    }

    await fetch("http://localhost:3000/api/discounts/use", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code: discount }),
    })
      .then((res) => {
        if (res.status === 404) {
          return setAlert("کد وارد شده معتبر نیست");
        }
        if (res.status === 422) {
          return setAlertCode("این کد تخفیف منقضی شده است");
        }
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <>
      {orders.length ? (
        orders.map((order) => {
          return (
            <div
              data-aos="zoom-in"
              data-aos-duration="600"
              className="flex items-center justify-center mt-[15px]"
            >
              <div className="w-[80%] lg:w-[65%] rounded-[15px] flex flex-col gap-10 md:flex-row-reverse items-center text-left bg-[#FAFAFA]">
                <div>
                  <Image
                    src={order.img} // توجه کنید که مطمئن شوید مسیر صحیح است
                    width={900}
                    height={600}
                    className="w-[210px] lg:w-[260px] h-[170px] md:h-{230px} lg:h-[250px] pl-[15px]"
                    alt="shop"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="w-[260px] sm:pt-12 pl-8 pb-4">
                    <p className="text-[15px] font-bold">{order.name}</p>
                    <p className="text-[20px] text-[#F1352B]">
                      {order.price &&
                        (order.price * order.count).toLocaleString()}
                    </p>
                  </div>

                  <div className=" flex flex-col w-[220px] sm:w-auto ">
                    <div className=" shadow-2xl border flex">
                      <input
                        onChange={(e) => setDiscount(e.target.value)}
                        type="text"
                        placeholder="کد تخفیف"
                      />
                      <button
                        onClick={addDiscount}
                        className="hover:text-white hover:bg-[#1ABA1A] transition-all duration-500 bg-green-100 text-[#1ABA1A] w-[90px] h-[30px]  "
                      >
                        اعمال
                      </button>
                    </div>
                    <p className="text-[13px] text-red-500">
                      {!discount.length && emptyAlert}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p className="text-[25px] mt-4 text-red-500 mx-auto flex items-center justify-center">
          سبد خرید خالی است
        </p>
      )}

      <div
        data-aos="zoom-in"
        data-aos-duration="600"
        className="w-[70%] lg:w-[40%] mx-auto h-[200px] mt-[15px] mb-[15px] rounded-[15px] bg-white border-green-400 border flex justify-center items-center"
      >
        <div className="flex flex-col items-center">
          <p className="text-[20px] font-bold mb-[15px]">
            جمع خرید: {getTotalPrice().toLocaleString()}
          </p>
          <button
            onClick={complite}
            className="hover:text-white hover:bg-[#1ABA1A] transition-all duration-500 bg-green-100 text-[#1ABA1A] w-[150px] h-[50px]  rounded-[10px]"
          >
            تکمیل خرید
          </button>
        </div>
      </div>
    </>
  );
}
