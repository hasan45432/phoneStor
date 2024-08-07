"use client";
import React, { useEffect,useState } from "react";
import Header from "../homePage/header/Header";
import Product from "@/components/Modules/product/Product";
import useFetch from "@/cutomHooks/useFetch";

export default function ProductsDetails() {
  const [url, setUrl] = useState("http://localhost:3000/api/products");
  const [method, setMethod] = useState("GET");

  const { data, response, loading, error } = useFetch(url, method);

  const handleChange = (newUrl, newMethod) => {
    setUrl(newUrl);
    setMethod(newMethod);
  };

  useEffect(() => {
    handleChange();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
      <div className="w-[100%]  2xl:w-[84%]">
        <Header />
        <div className="w-[100%]  mt-[15px] mb-[15px] bg-white rounded-[10px]">
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className=" md:p-[80px]  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
          >
            {loading ? (
              <p>loading....</p>
            ) : (
              data.map(() => {
                return <Product />;
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
}
