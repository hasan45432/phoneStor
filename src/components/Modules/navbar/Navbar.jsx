"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCombinedStore } from "@/app/store";
import swal from "sweetalert";
import { useRouter } from "next/navigation";
import usePost from "@/cutomHooks/usePost";
import useFetch from "@/cutomHooks/useFetch";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const patch = usePathname();
  const { fetchPost } = usePost();
  const { fetchData } = useFetch();
  const { getUserOrders } = useCombinedStore();

  const [valid, setValid] = useState(false);

  const [orders, setOrders] = useState([]);
  const [countCard, setCountCard] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  const getMy = async () => {
    let url = "http://localhost:3000/api/auth/me";

    await fetchData(url);
    const statesData = await useCombinedStore.getState().statesData;
    const statesResponse = await useCombinedStore.getState().statesResponse;

    if (
      statesData.data !== null &&
      statesResponse.status !== 401 &&
      statesData !== null
    ) {
      setValid(true);
    }
   

 
  };
  const baskets = useCombinedStore.getState().basket;

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
    if (countCard === 0) {
      setTotalPrice(0);
    }
  };

  const logout = async () => {
    swal({
      title: "ایا می خواهید خارج شوید",
      icon: "warning",
      buttons: ["نه", "اره"],
    }).then(async (res) => {
      if (res) {
        let url = "http://localhost:3000/api/auth/signout";
        await fetchPost({ url: url });
        setValid(false);
        router.push("/");
      }
    });
  };

  useEffect(() => {
    getMy();
  }, []);

  useEffect(() => {
    getOrders();
  }, [baskets]);

  useEffect(() => {
    getTotalPrice();
    setCountCard(baskets);
  }, [orders, baskets, patch]);

  return (
    <nav
      className={`container lg:pl-[10px] xl:pl-0 mx-auto pr-1 sm:pr-0 flex items-center justify-center   flex-col  `}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="  h-[144px] bg-[#FFFFFF] rounded-[10px]">
        <div className=" ml-[30px] mr-[30px] pt-[10px] flex items-center justify-between">
          <div className="flex items-center ">
            <div className="ml-[20px]  w-[99px]  h-[28px] bg-[#EBEEF6] rounded-[6px] ">
              <p className="pt-[6px] pr-3 text-[13px]">Hotline 24/7</p>
            </div>
            <p className="pt-1">09927821570</p>
            {}
          </div>
          <div>
            <div className="flex items-center">
              <p className="text-[14] ml-[15px]">Sell on Swoo</p>
              <p className="text-[14]">Order Tracki</p>
            </div>
          </div>
        </div>

        <div className="mt-[20px] mr-[30px] ml-[30px] flex flex-row-reverse items-center">
          <Image
            src="/icons/logo.png.png" // تنها یک بار پسوند png را وارد کنید
            alt="لوگو"
            width={500}
            height={300}
            className="w-[161px] h-[40px]"
            priority
          />

          <div className="w-[493px] h-[41px] xl:ml-[40px] lg:ml-[20px]">
            <ul className=" child-hover:text-[#1ABA1A] child-hover:transition-colors child-hover:duration-300 flex xl:gap-8 lg:gap-5 pt-2 font-bold xl:child:text-lg lg:child:text-[17px] ">
              <li>
                <Link href="/">صفحه اصلی</Link>
              </li>
              <li>
                <Link href="/">گوشی</Link>
              </li>
              <li>
                <Link href="/products">محصولات</Link>
              </li>
              <li>
                <Link href="/abut">درباره ی سایت</Link>
              </li>
            </ul>
          </div>
          <div className=" flex flex-row-reverse">
            {valid === true ? (
              <div className=" xl:ml-[200px] lg:ml-[60px]">
                <p>خوش امدید</p>
                <div className="flex items-center gap-3 w-[120px] xl:w-[144px] 2xl:w-[160px] ">
                  <p className="child-hover:text-[#1ABA1A] child-hover:transition-colors child-hover:duration-300 xl:text-lg lg:text-[15px] font-bold">
                    <Link href="/userpanel">پنل کاربری </Link>
                  </p>
                  <div className=" child-hover:text-[#1ABA1A] cursor-pointer transition-colors duration-300 w-[40px] h-[40px] rounded-[100%] bg-[#EBEEF6]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className=" size-6 mt-2 mr-2"
                      onClick={logout}
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm5.03 4.72a.75.75 0 0 1 0 1.06l-1.72 1.72h10.94a.75.75 0 0 1 0 1.5H10.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ) : (
              <div className=" xl:ml-[200px] lg:ml-[60px]">
                <p className="pr-8 2xl:pr-12">خوش امدید</p>
                <ul className="flex w-[144px] 2xl:w-[160px] flex-row-reverse items-center gap-2">
                  <li className="child-hover:text-[#1ABA1A] child-hover:transition-colors child-hover:duration-300 xl:text-lg lg:text-[15px] font-bold">
                    <Link href="/login">ورود</Link>
                  </li>
                  <p className="text-[25px]">/</p>
                  <li className="child-hover:text-[#1ABA1A]  child-hover:transition-colors child-hover:duration-300 xl:text-lg lg:text-[15px]  font-bold">
                    <Link href="/register">ثبت نام</Link>
                  </li>
                </ul>
              </div>
            )}

            <div className="ml-[50px]">
              <p className="">سبد خرید</p>

              <div className="flex flex-row-reverse items-center gap-2">
                <Link href="/card" className=" relative">
                  <div className="w-[40px] flex items-center justify-center h-[40px] rounded-[100%] bg-[#EBEEF6]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6    cursor-pointer "
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className=" text-red-500 absolute text-[18px]  -top-2 right-1">
                      {countCard}
                    </p>
                  </div>
                </Link>

                <p
                  className="text-lg font-bold w-[80px] overflow-hidden whitespace-nowrap text-ellipsis"
                  style={{ direction: "ltr" }}
                >
                  {totalPrice && totalPrice.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[75px] rounded-[10px] bg-[#1ABA1A] flex w-[100%] ">
        <div className=" relative">
          <input
            className="   lg:w-[360px] xl:w-[500px] h-[45px] pr-3 rounded-[30px] bg-[#FFFFFF] mt-[15px] mr-[30px]"
            placeholder="جستجوی محصول....."
          ></input>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 absolute bottom-[24px] left-[10px]"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="mt-[25px] flex xl:child:text-[16px] lg:child:text-[14px] lg:gap-5 xl:gap-10 mr-[60px]">
          <p>ارسال رایگان برای سفارش‌های بالای 199 هزار تومان</p>
          <p>هفت روز قابلیت برگشت پول</p>
          <p>خرید امن</p>
        </div>
      </div>
    </nav>
  );
}
