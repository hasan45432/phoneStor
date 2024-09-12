"use client";
import React, { useEffect, useState } from "react";
import Sidbar from "@/components/templates/p-adminPage/sidbar/Sidbar";
import SidbarResponsive from "@/components/templates/p-adminPage/sidbar/SidbarResponsive";
import { useCombinedStore } from "@/app/store";
import useFetch from "@/cutomHooks/useFetch";
import usePost from "@/cutomHooks/usePost";
import useDelete from "@/cutomHooks/useDelete";
import swal from "sweetalert";
import Image from "next/image";

export default function ProductsPage() {
  const { fetchData } = useFetch();
  const { fetchPost } = usePost();
  const { fetchDelete } = useDelete();

  const [products, setProducts] = useState([]);
  const [categories, setCategoriesProducts] = useState([]);
  const [category, setCategory] = useState("موبایل");

  const [res, setRes] = useState("s");

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [img, setImg] = useState(null);

  const [alert, setAlert] = useState("");
  const [nameError, setNameError] = useState("");
  const [priceError, setPriceError] = useState("");
  const [shortDescriptionError, setShortDescriptionError] = useState("");
  const [longDescriptionError, setLongDescriptionError] = useState("");

  const addNewProduct = async (e) => {
    e.preventDefault();

    if (!name.trim().length) {
      return setAlert("لطفا مقداری را وارد کنید");
    }

    if (!price.trim().length) {
      return setAlert("لطفا مقداری را وارد کنید");
    }
    if (price.trim().length) {
      if (/^(?=.*[a-zA-Z])[a-zA-Z0-9$#@%^&*()!+=-]*$/.test(price)) {
        return setPriceError("لطفا عدد وارد کنید");
      }
    }

    if (!shortDescription.trim().length) {
      return setAlert("لطفا مقداری را وارد کنید");
    }

    if (!longDescription.trim().length) {
      return setAlert("لطفا مقداری را وارد کنید");
    }

    if (!img) {
      return setAlert("لطفا مقداری را وارد کنید");
    }

    const formData = await new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("shortDescription", shortDescription);
    formData.append("longDescription", longDescription);
    formData.append("category", category);
    formData.append("img", img);

    let url = `${process.env.NEXT_PUBLIC_link}/api/products`;

    await fetchPost({ url: url, formData: formData });
    let response = useCombinedStore.getState().statesResponse;
    if (response.status === 201) {
      swal({
        title: "محصول با موفقیت افزوده شد",
        icon: "success",
      });
    } else {
      swal({
        title: "مشکلی پیش امد مقدارها را چک کنید",
        icon: "error",
      });
    }

    fetchDataServer();

    setName("");
    setPrice("");
    setShortDescription("");
    setLongDescription("");
    setImg(null);
  };

  const deleteProduct = async (e, productID) => {
    e.preventDefault();
    let url = `${process.env.NEXT_PUBLIC_link}/api/products`;
    let body = { id: productID };
    await swal({
      title: "ایا از حذف این محصول مطمعا هستید",
      icon: "warning",
      buttons: ["نه", "اره"],
    }).then(async (res) => {
      if (res) {
        await fetchDelete({ url: url, body: body });
      }
    });
    fetchDataServer();
  };
  const getCategory = async () => {
    let url = `${process.env.NEXT_PUBLIC_link}/api/category`;
    await fetchData(url);
    let statesData = useCombinedStore.getState().statesData;
    setCategoriesProducts(statesData);
  };

  const fetchDataServer = async () => {
    await fetchData(`${process.env.NEXT_PUBLIC_link}/api/products`);
    const statesData = useCombinedStore.getState().statesData;

    setProducts(statesData);
  };

  useEffect(() => {
    fetchDataServer();
    getCategory();
  }, []);

  return (
    <div className="flex w-[100%] mx-auto ">
      <div className="flex flex-col mx-auto w-[90%]  ">
        <section className="w-[75%] lg:w-[50%] max-w-4xl p-6 mx-auto mt-6 bg-white rounded-md shadow-md dark:bg-gray-800">
          <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
            محصولی اضافه کنید
          </h2>

          <form>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="username"
                >
                  نام محصول
                </label>
                <input
                  id="username"
                  type="text"
                  value={name}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  onInput={(e) => {
                    setName(e.target.value);
                    if (nameError.length) {
                      setNameError("");
                    }
                  }}
                />
                {!name.length && (
                  <p className=" text-red-500 text-[13px]">{alert}</p>
                )}
                {nameError && (
                  <p className=" text-red-500 text-[13px]">{nameError}</p>
                )}
              </div>

              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="emailAddress"
                >
                  مبلغ محصول
                </label>
                <input
                  id="emailAddress"
                  type="text"
                  value={price}
                  onInput={(e) => {
                    setPrice(e.target.value);
                    if (priceError.length) {
                      setPriceError("");
                    }
                  }}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
                {!price.length && (
                  <p className=" text-red-500 text-[13px]">{alert}</p>
                )}
                {priceError && (
                  <p className=" text-red-500 text-[13px]">{priceError}</p>
                )}
              </div>

              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="password"
                >
                  توضیح کوتاه
                </label>
                <input
                  type="text"
                  value={shortDescription}
                  onInput={(e) => {
                    setShortDescription(e.target.value);
                    if (shortDescriptionError.length) {
                      setShortDescriptionError("");
                    }
                  }}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
                {!shortDescription.length && (
                  <p className=" text-red-500 text-[13px]">{alert}</p>
                )}
                {shortDescriptionError && (
                  <p className=" text-red-500 text-[13px]">
                    {shortDescriptionError}
                  </p>
                )}
              </div>

              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="password"
                >
                  توضیح بلند
                </label>
                <input
                  id="text"
                  type="text"
                  value={longDescription}
                  onInput={(e) => {
                    setLongDescription(e.target.value);
                    if (longDescriptionError.length) {
                      setLongDescriptionError("");
                    }
                  }}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
                {!longDescription.length && (
                  <p className=" text-red-500 text-[13px]">{alert}</p>
                )}
                {longDescriptionError && (
                  <p className=" text-red-500 text-[13px]">
                    {longDescriptionError}
                  </p>
                )}
              </div>

              <div className="flex flex-col  ">
                <label
                  className="text-gray-700 dark:text-gray-200 pr-4"
                  htmlFor="passwordConfirmation"
                >
                  تصویر محصول
                </label>
                <input
                  id="file"
                  type="file"
                  onChange={(e) => setImg(e.target.files[0])}
                  className="block w-full px-3 border-none py-1 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
                {!img && <p className=" text-red-500 text-[13px]">{alert}</p>}
                <div className="md:flex pl-20 gap-2  mt-4 pr-3">
                  <p> انتخاب دسته بندی:</p>
                  <select
                    className="w-[120px]"
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    {categories.map((category) => (
                      <option key={category._id} value={category.name}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button
                onClick={addNewProduct}
                className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                اضافه کردن
              </button>
            </div>
          </form>
        </section>

        <section className=" px-4   mt-6 mb-16">
          <div className="flex items-center gap-x-3">
            <h2 className="text-lg font-medium text-gray-800 dark:text-white">
              Team members
            </h2>

            <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
              products {products.length}
            </span>
          </div>

          <div className="flex flex-col mt-6">
            <div className="-mx-6 -my-6  overflow-x-auto sm:-mx-16 lg:-mx-16">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden h-[450px] overflow-y-auto  border border-gray-200 dark:border-gray-700 md:rounded-lg">
                  <table className="min-w-full  divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50  dark:bg-gray-800">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <div className="flex items-center gap-x-3">
                            <span>نام محصول</span>
                          </div>
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          دسته بندی
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <button className="flex items-center gap-x-2">
                            <span>مبلغ محصول</span>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                              />
                            </svg>
                          </button>
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          توضیح کوتاه محصول
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          توضیح بلند محصول
                        </th>
                        <th
                          scope="col"
                          className="px-4 pr-12  py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          تصویر
                        </th>

                        <th scope="col" className="relative py-3.5 px-4">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>

                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                      {products.map((product) => {
                        return (
                          <tr key={product._id}>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                              <div className="inline-flex items-center gap-x-3">
                                <div className="flex items-center gap-x-2">
                                  <div>
                                    <h2 className="font-medium text-gray-800 dark:text-white ">
                                      {product.name}
                                    </h2>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                              <div className="inline-flex items-center gap-x-3">
                                <input
                                  type="checkbox"
                                  className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                                />

                                <div className="flex items-center gap-x-2">
                                  <div>
                                    <h2 className="font-medium text-gray-800 dark:text-white ">
                                      {product.category}
                                    </h2>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                              {product.price}
                            </td>
                            <td className="px-4 overflow-x-auto max-w-[300px] py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                              {product.shortDescription}
                            </td>
                            <td className="px-4 py-4 overflow-x-auto max-w-[300px] text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                              {product.longDescription}
                            </td>
                            <td className="w-[130px] pr-6 h-[100px]">
                              <Image
                                width={500}
                                height={500}
                                className="w-[90px] h-[90px] rounded-[100%]"
                                src={product.img}
                                alt="Product Image" // برای دسترسی‌پذیری و SEO
                              ></Image>
                            </td>
                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                              <div className="flex items-center gap-x-6">
                                <button className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                    onClick={(e) =>
                                      deleteProduct(e, product._id)
                                    }
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                    />
                                  </svg>
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
