"use client";
import React, { useState, useEffect } from "react";
import useFetch from "@/cutomHooks/useFetch";
import { useCombinedStore } from "@/app/store";
export default function Informations() {
  const { fetchData } = useFetch();

  const [users, setUsers] = useState([]);
  const [category, setCategory] = useState([]);
  const [comments, setComments] = useState([]);
  const [products, setProducts] = useState([]);

  const getUsersData = async () => {
    let url = "https://technofadakar.liara.run/api/user";
    await fetchData(url);

    let statesData = useCombinedStore.getState().statesData;
    setUsers(statesData);
  };

  const getCategory = async () => {
    let url = "https://technofadakar.liara.run/api/category";
    await fetchData(url);
    let statesData = useCombinedStore.getState().statesData;
    setCategory(statesData);
  };

  const getComments = async () => {
    let url = "https://technofadakar.liara.run/api/comments";
    await fetchData(url);
    let statesResponse = useCombinedStore.getState().statesResponse;
    let statesData = useCombinedStore.getState().statesData;

    if (statesData) {
      setComments(statesData);
    }
  };

  const fetchDataProducts = async () => {
    await fetchData("https://technofadakar.liara.run/api/products");
    const statesData = useCombinedStore.getState().statesData;

    setProducts(statesData);
  };

  useEffect(() => {
    getUsersData();
    getCategory();
    getComments();
    fetchDataProducts();
  }, []);
  return (
    <>
      <div className="grid grid-cols-1  mx-auto   md:grid-cols-2 gap-4  2xl:grid-cols-4  mt-[50px]">
        <div className="w-[220px] sm:w-[300px] flex items-center rounded-[10px] justify-center h-[60px] bg-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            height="3em"
            width="3em"
            className="ml-4 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          <p className="text-[17px] sm:text-[20px] font-bold text-white ">
            تعداد کاربران : {users.length}
          </p>
        </div>
        <div className="w-[220px] sm:w-[300px] flex items-center rounded-[10px] justify-center h-[60px] bg-black">
          <svg
            fill="none"
            className="ml-4 text-white"
            viewBox="0 0 24 24"
            height="2.3em"
            width="2.3em"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M5 4h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1zM2 5a3 3 0 013-3h14a3 3 0 013 3v14a3 3 0 01-3 3H5a3 3 0 01-3-3V5zm10 7c-2.761 0-5-2.686-5-6h2c0 2.566 1.67 4 3 4s3-1.434 3-4h2c0 3.314-2.239 6-5 6z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-[17px] sm:text-[20px] font-bold text-white ">
            تعداد محصولات : {products.length}
          </p>
        </div>
        <div className="w-[220px] sm:w-[300px] flex items-center rounded-[10px] justify-center h-[60px] bg-black">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="2.4em"
            width="2.4em"
            className="ml-4 text-white"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M20 22H4a1 1 0 01-1-1V3a1 1 0 011-1h16a1 1 0 011 1v18a1 1 0 01-1 1zm-1-2V4H5v16h14zM7 6h4v4H7V6zm0 6h10v2H7v-2zm0 4h10v2H7v-2zm6-9h4v2h-4V7z" />
          </svg>
          <p className="text-[17px] sm:text-[20px] font-bold text-white ">
            تعداد کامنت ها : {comments.length}
          </p>
        </div>
        <div className="w-[220px] sm:w-[300px] flex items-center rounded-[10px] justify-center h-[60px] bg-black">
          <svg
            data-name="Layer 1"
            viewBox="0 0 24 24"
            fill="currentColor"
            height="2em"
            width="2em"
            className="ml-3 text-white"
          >
            <path d="M13.991 13h-4a1 1 0 000 2h4a1 1 0 000-2zm-4-2h1a1 1 0 000-2h-1a1 1 0 000 2zm6-1V9a4.004 4.004 0 00-4-4h-2a5.006 5.006 0 00-5 5v4a5.006 5.006 0 005 5h4a5.006 5.006 0 005-5v-1a3.005 3.005 0 00-3-3zm0 0v.001h-1zm1 4a3.003 3.003 0 01-3 3h-4a3.003 3.003 0 01-3-3v-4a3.003 3.003 0 013-3h2a2.003 2.003 0 012 2v1a2.003 2.003 0 002 2 1 1 0 011 1zm3-13h-16a3.003 3.003 0 00-3 3v16a3.003 3.003 0 003 3h16a3.003 3.003 0 003-3V4a3.003 3.003 0 00-3-3zm1 19a1 1 0 01-1 1h-16a1 1 0 01-1-1V4a1 1 0 011-1h16a1 1 0 011 1z" />
          </svg>
          <p className="text-[17px] sm:text-[20px] font-bold text-white ">
            تعداد دسته بندی ها : {category.length}
          </p>
        </div>
      </div>
    </>
  );
}
