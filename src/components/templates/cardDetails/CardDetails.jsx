"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import swal from "sweetalert"; // اضافه کردن لایبرری swal

export default function CardDetails() {
  const [orders, setOrders] = useState([]);
  const [discounts, setDiscounts] = useState([]);
  const [alerts, setAlerts] = useState([]);

  const [alertCode, setAlertCode] = useState([]);
  const [expairdCode, setExpairdCode] = useState([]);

  const getOrders = () => {
    const card = JSON.parse(localStorage.getItem("card")) || [];
    setOrders(card);
  };

  const getTotalPrice = () => {
    return orders.reduce(
      (total, order) => total + order.price * order.count,
      0
    );
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
      const res = await fetch("http://localhost:3000/api/discounts/use", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: discounts[index] }),
      });

      if (res.status === 404) {
        const newAlertsCode = [...alertCode];
        newAlertsCode[index] = "کد وارد شده معتبر نیست";
        return setAlertCode(newAlertsCode);
      }
      if (res.status === 422) {
        const newexpairdCode = [...expairdCode];
        newexpairdCode[index] = "کد وارد شده منقضی شده است";
        return setExpairdCode(newexpairdCode);
      }

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error("Error applying discount:", error);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  useEffect(() => {
    setDiscounts(Array(orders.length).fill(""));
    setAlerts(Array(orders.length).fill("")); 
  }, [orders]);

  const handleDiscountChange = (e, index) => {
    const newDiscounts = [...discounts];
    newDiscounts[index] = e.target.value;
    setDiscounts(newDiscounts);
  };

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
              <div>
                <Image
                  src={order.img}
                  width={900}
                  height={600}
                  className="w-[210px] lg:w-[260px] h-[170px] md:h-[230px] lg:h-[250px] pl-[15px]"
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
                      }}
                      type="text"
                      placeholder="کد تخفیف"
                      value={discounts[index]} 
                    />
                    <button
                      onClick={() => addDiscount(index)}
                      className="hover:text-white hover:bg-[#1ABA1A] transition-all duration-500 bg-green-100 text-[#1ABA1A] w-[90px] h-[30px]"
                    >
                      اعمال
                    </button>
                  </div>
                  <p className="text-[13px] text-red-500">
                    {!discounts[index] && alerts[index]}
                  </p>
                  <p className="text-[13px] text-red-500">
                    {discounts.length && alertCode[index]}
                  </p>
                  <p className="text-[13px] text-red-500">
                    {discounts.length && expairdCode[index]}
                  </p>
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
        data-aos="zoom-in"
        data-aos-duration="600"
        className="w-[70%] lg:w-[40%] mx-auto h-[200px] mt-[15px] mb-[15px] rounded-[15px] bg-white border-green-400 border flex justify-center items-center"
      >
        <div className="flex flex-col items-center">
          <p className="text-[20px] font-bold mb-[15px]">
            جمع خرید:{" "}
            <span className="text-[20px] text-red-500">
              {" "}
              {getTotalPrice().toLocaleString()}
            </span>
          </p>
          <button
            onClick={completePurchase}
            className="hover:text-white hover:bg-[#1ABA1A] transition-all duration-500 bg-green-100 text-[#1ABA1A] w-[150px] h-[50px] rounded-[10px]"
          >
            تکمیل خرید
          </button>
        </div>
      </div>
    </>
  );
}
