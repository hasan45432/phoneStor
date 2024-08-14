"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCombinedStore } from "@/app/store";
import { validateEmail } from "@/utils/auth";
import { useRouter } from "next/navigation";
import usePost from "@/cutomHooks/usePost";
import useFetch from "@/cutomHooks/useFetch";
import swal from "sweetalert";

export default function RegisterDetails() {
  const { fetchPost } = usePost();
  const { fetchData } = useFetch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [alertName, setAlertName] = useState("");
  const [alertEmail, setAlertEmail] = useState("");
  const [alertPassword, setAlertPassword] = useState("");
  const [typeasd, setTypeasd] = useState("");

  const [alertPasswordLength, setAlertPasswordLength] = useState("");

  const [isValiadteEmail, setIsValiadteEmail] = useState("");

  const router = useRouter();

  const registerUser = async (e) => {
    e.preventDefault();

    setAlertName("");
    setAlertEmail("");
    setAlertPassword("");
    setIsValiadteEmail("");

    if (!name.trim().length) {
      return setAlertName("لطفا نام خود را وارد کنید");
    }

    if (name.trim().length) {
      if (!/^[a-zA-Z\s]+$/.test(name.trim())) {
        return setTypeasd("لطفا مقدار درستی وارد کنید");
      }
    }

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

    let url = "http://localhost:3000/api/auth/signup";
    let body = {
      name,
      email,
      password,
    };
    await fetchPost({ url: url, body: body });

    const statesResponse = useCombinedStore.getState().statesResponse;

    if (statesResponse.status === 422) {
      swal({
        title: "نام یا ایمیل شما تکراری می باشد",
        icon: "error",
        buttons: "تلاش دوباره",
      });
    }

    if (statesResponse.status === 201) {
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

  const { getUserOrders } = useCombinedStore();
  useEffect(() => {
    let card = JSON.parse(localStorage.getItem("card")) || [];

    let result = card.reduce((prev, item) => prev + item.count, 0);

    getUserOrders(result);
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

          <form className="flex flex-col items-end text-left mt-4 mb-4">
            <input
              type="text"
              placeholder="نام خود را وارد کنید"
              className="border w-[90%] xl:w-[75%] h-[43px] text-left pl-2 rounded-[6px]"
              onInput={(e) => {
                setName(e.target.value);
                if (typeasd) {
                  setTypeasd("");
                }
              }}
            />
            {!name && <p className=" text-red-600 text-[14px] ">{alertName}</p>}
            {typeasd && <p className=" text-red-600 text-[14px] ">{typeasd}</p>}

            <input
              type="email"
              placeholder="ایمیل خود را وارد کنید"
              className="border w-[90%] xl:w-[75%] mt-[15px] h-[43px] text-left pl-2 rounded-[6px]"
              onChange={(e) => {
                setEmail(e.target.value);
                if (email.length) {
                  let isValiadteEmail = validateEmail(email);
                  if (isValiadteEmail) {
                    return setIsValiadteEmail("");
                  }
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

            <button
              onClick={registerUser}
              className=" hover:text-white pb-2 hover:bg-[#1ABA1A] transition-all duration-500 bg-green-100 text-[#1ABA1A] mt-[25px] text-[20px] pt-1  w-[138px] h-[50px] rounded-[10px] "
            >
              ثبت نام
            </button>
            <Link
              href="/login"
              className="text-[#1ABA1A] text-[15px] mt-[15px]"
            >
              ورود
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
