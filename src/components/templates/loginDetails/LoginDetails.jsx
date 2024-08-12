"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { validateEmail } from "@/utils/auth";
import { useCombinedStore } from "@/app/store";
import swal from "sweetalert";
import usePost from "@/cutomHooks/usePost";
import useFetch from "@/cutomHooks/useFetch";

export default function LoginDetails() {
  const { fetchPost } = usePost();
  const { fetchData } = useFetch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [alertEmail, setAlertEmail] = useState("");
  const [alertPassword, setAlertPassword] = useState("");

  const [isValiadteEmail, setIsValiadteEmail] = useState("");

  const [alertPasswordLength, setAlertPasswordLength] = useState("");

  const router = useRouter();

  const loginUser = async (e) => {
    e.preventDefault();

    if (!email.trim().length) {
      return setAlertEmail("ایمیل را وارد کنید");
    }

    if (email.length) {
      let isValiadteEmail = validateEmail(email);
      if (!isValiadteEmail) {
        return setIsValiadteEmail("ایمیل نامعتبر است");
      }
    }

    if (!password.trim().length) {
      return setAlertPassword("لطفا پسورد خود را وارد کنید");
    }

    if (password.trim().length < 8) {
      return setAlertPasswordLength("طول پسورد باید بیش تر از 8 کاراکتر باشد");
    }

    let url = "http://localhost:3000/api/auth/signin";
    let body = {
      email,
      password,
    };
    await fetchPost({ url: url, body: body });

    const statesResponse = useCombinedStore.getState().statesResponse;

    if (statesResponse.status === 401) {
      swal({
        title: "پسورد یا ایمیل شما اشتباه می باشد",
        icon: "error",
        buttons: "تلاش دوباره",
      });
    }

    if (statesResponse.status === 422) {
      swal({
        title: "هیچ کاربری پیدا نشد",
        icon: "error",
        buttons: "تلاش دوباره",
      });
    }

    if (statesResponse.status === 200) {
      router.push("/");
    }
   
  };

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
      router.push("/");
    }

    
  };

  useEffect(() => {
    getMy();
  }, []);

  return (
    <div className=" w-[100%] 2xl:w-[85%] bg-white rounded-[10px] mt-[15px] mb-[15px]">
      <div
        data-aos="zoom-in"
        data-aos-duration="1500"
        className="flex   flex-col mb-[15px] lg:mb-0 lg:flex-row-reverse justify-between items-center ml-[60px]"
      >
        <div className="p-[90px]  w-[350px] sm:w-auto">
          <Image
            src="/img/imageLoginPage/login.svg.png"
            width={900}
            height={600}
            className="w-[300px] h-[180px] sm:w-[250px] sm:h-[200px] md:w-[400px] bg-cover md:h-[325px] rounded-[10px] mr-10"
            alt="shop"
          ></Image>
        </div>
        <div className="flex flex-col w-[100%] md:w-[50%] mr-8 sm:mr-0">
          <div className="flex flex-col items-end">
            <p className="text-[20px] sm:text-[30px] text-[#1ABA1A] font-bold">
              خوش امدید لطفا وارد شوید
            </p>
          </div>

          <form className="flex flex-col items-end text-left mt-4">
            <input
              type="email"
              placeholder="Example@gmail.com"
              className="border w-[90%] xl:w-[75%] h-[43px] text-left pl-2 rounded-[6px]"
              onChange={(e) => {
                const newEmail = e.target.value;
                setEmail(newEmail);
                let isValiadteEmail = validateEmail(newEmail);
                if (newEmail.length === 0 || isValiadteEmail) {
                  return setIsValiadteEmail("");
                }
              }}
            />
            {!email && (
              <p className=" text-red-600 text-[14px] ">{alertEmail}</p>
            )}
            {isValiadteEmail && (
              <p className=" text-red-600 text-[14px] ">{isValiadteEmail}</p>
            )}

            <input
              type="password"
              placeholder="....password"
              className="border w-[90%] xl:w-[75%] h-[43px] text-left pl-2 rounded-[6px] mt-[15px]"
              onChange={(e) => {
                const newPassword = e.target.value;
                setPassword(newPassword);
                if (newPassword.trim().length === 0) {
                  setAlertPasswordLength("");
                }
              }}
            />
            {!password && (
              <p className=" text-red-600 text-[14px] ">{alertPassword}</p>
            )}
            {password.length < 8 && (
              <p className="text-red-600 text-[14px]">{alertPasswordLength}</p>
            )}

            <Link
              href="/"
              className="hover:text-[#1ABA1A] hover:transition-colors hover:duration-300 text-[13px] text-[#999999] mt-[15px]"
            >
              پس ورد خود را فراموش کردین؟
            </Link>
            <button
              onClick={loginUser}
              className=" hover:text-white hover:bg-[#1ABA1A] transition-all duration-500 bg-green-100 text-[#1ABA1A] mt-[25px] text-[22px] pb-1  w-[138px] h-[50px] rounded-[10px] "
            >
              ورود
            </button>
            <Link
              href="/register"
              className="text-[#1ABA1A] text-[15px] mt-[15px]"
            >
              ثبت نام
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
