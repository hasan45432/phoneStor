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
    let url = "http://localhost:3000/api/user";
    await fetchData(url);

    let statesData = useCombinedStore.getState().statesData;
    setUsers(statesData);
    console.log(statesData);
  };

  const getCategory = async () => {
    let url = "http://localhost:3000/api/category";
    await fetchData(url);
    let statesData = useCombinedStore.getState().statesData;
    setCategory(statesData);

    console.log(statesData);
  };

  const getComments = async () => {
    let url = "http://localhost:3000/api/comments";
    await fetchData(url);
    let statesResponse = useCombinedStore.getState().statesResponse;
    let statesData = useCombinedStore.getState().statesData;

    if (statesData) {
      setComments(statesData);
    }
    console.log(statesResponse);
    console.log(statesData);
  };

  const fetchDataProducts = async () => {
    await fetchData("http://localhost:3000/api/products");
    const statesData = useCombinedStore.getState().statesData;
    console.log(statesData);
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
        <div className="w-[200px] sm:w-[300px] flex items-center rounded-[10px] justify-center h-[60px] bg-[#1ABA1A]">
          <p className="text-[17px] sm:text-[20px] font-bold text-white ">
            تعداد کاربران : {users.length}
          </p>
        </div>
        <div className="w-[200px] sm:w-[300px] flex items-center rounded-[10px] justify-center h-[60px] bg-[#1ABA1A]">
          <p className="text-[17px] sm:text-[20px] font-bold text-white ">
            تعداد محصولات : {products.length}
          </p>
        </div>
        <div className="w-[200px] sm:w-[300px] flex items-center rounded-[10px] justify-center h-[60px] bg-[#1ABA1A]">
          <p className="text-[17px] sm:text-[20px] font-bold text-white ">
            تعداد کامنت ها : {comments.length}
          </p>
        </div>
        <div className="w-[200px] sm:w-[300px] flex items-center rounded-[10px] justify-center h-[60px] bg-[#1ABA1A]">
          <p className="text-[17px] sm:text-[20px] font-bold text-white ">
            تعداد دسته بندی ها : {category.length}
          </p>
        </div>
      </div>
    </>
  );
}
