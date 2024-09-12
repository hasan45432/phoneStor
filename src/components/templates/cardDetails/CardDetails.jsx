"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import swal from "sweetalert"; // اضافه کردن لایبرری swal
import useFetch from "@/cutomHooks/useFetch";
import { useCombinedStore } from "@/app/store";
export default function CardDetails() {
  const { fetchData } = useFetch();

  const { getUserOrders } = useCombinedStore();

  const [orders, setOrders] = useState([]);
  const [discounts, setDiscounts] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const [alertCode, setAlertCode] = useState([]);
  const [expairdCode, setExpairdCode] = useState([]);
  const [successDiscount, setSuccessDiscount] = useState([]);

  const getOrders = () => {
    const card = JSON.parse(localStorage.getItem("card")) || [];
    setOrders(card);
  };

  const getTotalPrice = () => {
    let price = 0;
    if (orders.length) {
      price = orders.reduce(
        (total, order) => total + order.price * order.count,
        0
      );
      setTotalPrice(price);
    }
  };

  const completePurchase = (e) => {
    e.preventDefault();
    swal({
      title: "این سایت صرفا یک نمونه است و محصولی به فروش نمی رسد",
      icon: "success",
    });
  };

  const addDiscount = async (index) => {
    if (!discounts[index] || !discounts[index].length) {
      const newAlerts = [...alerts];
      newAlerts[index] = "لطفا کد را وارد کنید";
      setAlerts(newAlerts);
      return;
    }

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_link}/api/discounts/use`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: discounts[index] }),
      });

      const data = await res.json();

      if (res.status === 404) {
        const newAlertsCode = [...alertCode];
        newAlertsCode[index] = "کد وارد شده معتبر نیست";
        return setAlertCode(newAlertsCode);
      }
      if (res.status === 422 || data.uses >= data.maxUse) {
        const newexpairdCode = [...expairdCode];
        newexpairdCode[index] = "کد وارد شده منقضی شده است";
        setSuccessDiscount("");
        return setExpairdCode(newexpairdCode);
      }

      if (res.status === 200) {
        let newPrice = totalPrice - (totalPrice * data.percent) / 100;
        setTotalPrice(newPrice);

        const successCode = [...successDiscount];
        successCode[index] = "کد تخفیف با موفقیت اعمال شد";
        setSuccessDiscount(successCode);
        return;
      }
    } catch (error) {
      console.error("Error applying discount:", error);
    }
  };

  const removeAllOrder = (e) => {
    e.preventDefault();
    localStorage.removeItem("card");
    setOrders([]);
    setTotalPrice(0);
    let card = JSON.parse(localStorage.getItem("card")) || [];

    let result = card.reduce((prev, item) => prev + item.count, 0);
    getUserOrders(result);
  };

  const removeOwnOrder = async (e, orderID) => {
    e.preventDefault();
    const card = JSON.parse(localStorage.getItem("card")) || [];

    let filterCard = card.filter((item) => {
      return item.id !== orderID;
    });

    localStorage.setItem("card", JSON.stringify(filterCard));
    setOrders(filterCard);

    let result = filterCard.reduce((prev, item) => prev + item.count, 0);
    getUserOrders(result);
    if (filterCard.length === 0) {
      setTotalPrice(0);
    }

   
  };

  useEffect(() => {
    getOrders();
  }, []);

  useEffect(() => {
    getTotalPrice();
  }, [orders]);

  useEffect(() => {
    setDiscounts(Array(orders.length).fill(""));
    setAlerts(Array(orders.length).fill(""));
  }, [orders]);

  const handleDiscountChange = (e, index) => {
    const newDiscounts = [...discounts];
    newDiscounts[index] = e.target.value;
    setDiscounts(newDiscounts);
  };

  useEffect(() => {
    let card = JSON.parse(localStorage.getItem("card")) || [];

    let result = card.reduce((prev, item) => prev + item.count, 0);

    getUserOrders(result);
  }, []);
  return (
    <>
      {orders.length ? (
        orders.map((order, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-duration="600"
            className="flex items-center justify-center mt-[15px]"
          >
            <div className="w-[80%] lg:w-[65%] rounded-[15px] justify-around flex flex-col gap-10 md:flex-row-reverse items-center text-left bg-[#FAFAFA]">
              <div className="lg:h-[100%]">
                <Image
                  src={order.img}
                  width={900}
                  height={600}
                  className="w-[200px] lg:w-[260px] h-[190px] md:h-[230px] lg:h-full  pl-[15px]"
                  alt="shop"
                />
              </div>
              <div className="flex flex-col pr-5">
                <div className="w-[260px] sm:pt-12 pl-8 pb-4">
                  <p className="text-[15px] font-bold">{order.name}</p>
                  <p className="text-[20px] text-[#F1352B]">
                    {order.price &&
                      (order.price * order.count).toLocaleString()}
                  </p>
                </div>

                <div className="flex flex-col w-[220px] sm:w-auto">
                  <div className="shadow-2xl border flex">
                    <input
                      onChange={(e) => {
                        handleDiscountChange(e, index);
                        if (alertCode.length) {
                          setAlertCode("");
                        }
                        if (expairdCode.length) {
                          setExpairdCode("");
                        }
                        if (successDiscount.length) {
                          setSuccessDiscount("");
                        }
                      }}
                      type="text"
                      placeholder="کد تخفیف"
                      value={discounts[index]}
                    />
                    <button
                      onClick={() => addDiscount(index)}
                      className=" text-[12px] sm:text-[14px] hover:text-white hover:bg-[#1ABA1A] transition-all duration-500 bg-green-100 text-[#1ABA1A] w-[90px] h-[30px]"
                    >
                      اعمال
                    </button>
                  </div>
                  <p className="text-[14px] text-red-500">
                    {!discounts[index] && alerts[index]}
                  </p>
                  <p className="text-[14px] text-red-500">
                    {discounts.length && alertCode[index]}
                  </p>
                  <p className="text-[14px] text-red-500">
                    {discounts.length && expairdCode[index]}
                  </p>
                  <p className="text-[14px] text-green-500">
                    {discounts.length && successDiscount[index]}
                  </p>
                </div>
                <div className="mt-[10px] text-right">
                  <p className="text-[15px]">
                    تعداد محصول :
                    <span className="text-red-500 text-[15px]">
                      {order.count}
                    </span>
                  </p>
                </div>
                <div className="flex items-start justify-start mt-2 mb-2">
                  <button
                    onClick={(e) => removeOwnOrder(e, order.id)}
                    className="hover:text-white  hover:bg-[#1ABA1A] transition-all duration-500 bg-green-100 text-[#1ABA1A] w-[100px] h-[40px] rounded-[10px]"
                  >
                    حذف
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-[25px] mt-4 text-red-500 mx-auto flex items-center justify-center">
          سبد خرید خالی است
        </p>
      )}

      <div
       
        className="w-[70%] lg:w-[40%] mx-auto h-[200px] mt-[15px] mb-[15px] rounded-[15px] bg-white border-green-400 border flex justify-center items-center"
      >
        <div className="flex flex-col items-center">
          <p className="text-[20px] font-bold mb-[15px]">
            جمع خرید:{" "}
            <span className="text-[20px] text-red-500">
              {" "}
              {totalPrice && totalPrice.toLocaleString()}
            </span>
          </p>
          {orders.length ? (
            <div className="flex flex-col items-center">
              <button
                onClick={completePurchase}
                className="hover:text-white hover:bg-[#1ABA1A] transition-all duration-500 bg-green-100 text-[#1ABA1A] w-[150px] h-[50px] rounded-[10px]"
              >
                تکمیل خرید
              </button>
              <button
                onClick={removeAllOrder}
                className="hover:text-white mt-[14px]  hover:bg-[#1ABA1A] transition-all duration-500 bg-green-100 text-[#1ABA1A] w-[100px] h-[40px] rounded-[10px]"
              >
                حذف همه
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
