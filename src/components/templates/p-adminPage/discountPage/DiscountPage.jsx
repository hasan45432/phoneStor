"use client";
import React, { useState, useEffect } from "react";
import Sidbar from "@/components/templates/p-adminPage/sidbar/Sidbar";
import SidbarResponsive from "@/components/templates/p-adminPage/sidbar/SidbarResponsive";
import useFetch from "@/cutomHooks/useFetch";
import usePost from "@/cutomHooks/usePost";
import useDelete from "@/cutomHooks/useDelete";
import { useCombinedStore } from "@/app/store";
import swal from "sweetalert";
export default function DiscountPage() {
  const { fetchData } = useFetch();
  const { fetchPost } = usePost();
  const { fetchDelete } = useDelete();

  const [products, setProducts] = useState([]);
  const [categoryProduct, setCategory] = useState(
    "گوشی موبایل سامسونگ مدل galaxy s24"
  );

  const [discounts, setDiscount] = useState([]);

  const [code, setCode] = useState("");
  const [percent, setPercent] = useState("");
  const [maxUse, setMaxUse] = useState("");

  const [alert, setAlert] = useState("");
  const [codeError, setCodeError] = useState("");
  const [percentError, setPercentError] = useState("");
  const [maxUseError, setMaxUseError] = useState("");

  const getProducts = async () => {
    let url = `${process.env.NEXT_PUBLIC_link}/api/products`;
    await fetchData(url);
    let statesResponse = useCombinedStore.getState().statesResponse;
    let statesData = useCombinedStore.getState().statesData;
    setProducts(statesData);
  };

  const getDiscount = async () => {
    let url = `${process.env.NEXT_PUBLIC_link}/api/discounts`;
    await fetchData(url);
    let statesResponse = useCombinedStore.getState().statesResponse;
    let statesData = useCombinedStore.getState().statesData;
    setDiscount(statesData);
  };

  const addDiscount = async (e) => {
    e.preventDefault();

    if (!code.trim().length) {
      return setAlert("لطفا مقداری  وارد کنید");
    }

    if (!percent.trim().length) {
      return setAlert("لطفا مقداری  وارد کنید");
    }
    if (percent.trim().length) {
      if (/^(?=.*[a-zA-Z])[a-zA-Z0-9$#@%^&*()!+=-]*$/.test(percent)) {
        return setPercentError("لطفا عدد وارد کنید");
      }
    }

    if (!maxUse.trim().length) {
      return setAlert("لطفا مقداری  وارد کنید");
    }
    if (maxUse.trim().length) {
      if (/^(?=.*[a-zA-Z])[a-zA-Z0-9$#@%^&*()!+=-]*$/.test(maxUse)) {
        return setMaxUseError("لطفا عدد وارد کنید");
      }
    }

    let url = `${process.env.NEXT_PUBLIC_link}/api/discounts`;
    let body = { code, percent, maxUse, product: categoryProduct };
    await fetchPost({ url: url, body: body });
    let statesResponse = useCombinedStore.getState().statesResponse;
    let statesData = useCombinedStore.getState().statesData;
    if (statesResponse.status === 201) {
      swal({
        title: "تخفیف اضافه شد",
        icon: "success",
      });
    } else {
      swal({
        title: "مشکلی پیش امد مقدار ها را چک کنید",
        icon: "error",
      });
    }
    getDiscount();
    setCode("");
    setPercent("");
    setMaxUse("");
  };

  const deleteDiscount = async (e, discountID) => {
    e.preventDefault();
    let url = `${process.env.NEXT_PUBLIC_link}/api/discounts`;
    let body = { id: discountID };
    await fetchDelete({ url: url, body: body });
    let statesResponse = useCombinedStore.getState().statesResponse;
    let statesData = useCombinedStore.getState().statesData;
    getDiscount();
  };

  useEffect(() => {
    getProducts();
    getDiscount();
  }, []);

  return (
    <div className="flex w-[100%]">
      <div className="flex flex-col w-[100%]">
        <section className="max-w-4xl p-6 mx-auto mt-6 bg-white rounded-md shadow-md dark:bg-gray-800">
          <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
            تخفیف ایجاد کنید
          </h2>

          <form>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="username"
                >
                  شناسه تخفیف
                </label>
                <input
                  id="username"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
                {!code && <p className=" text-[13px] text-red-500">{alert}</p>}
              </div>

              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="emailAddress"
                >
                  درصد تخفیف
                </label>
                <input
                  id="emailAddress"
                  type="email"
                  value={percent}
                  onChange={(e) => {
                    setPercent(e.target.value);
                    if (percentError.length) {
                      setPercentError("");
                    }
                  }}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
                {!percent && (
                  <p className=" text-[13px] text-red-500">{alert}</p>
                )}
                {percentError && (
                  <p className=" text-[13px] text-red-500">{percentError}</p>
                )}
              </div>

              <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="">
                  حداکثر استفاده
                </label>
                <input
                  id="password"
                  value={maxUse}
                  onChange={(e) => {
                    setMaxUse(e.target.value);
                    if (maxUseError.length) {
                      setMaxUseError("");
                    }
                  }}
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
                {!maxUse && (
                  <p className=" text-[13px] text-red-500">{alert}</p>
                )}
                {maxUseError && (
                  <p className=" text-[13px] text-red-500">{maxUseError}</p>
                )}
              </div>
              <div className="md:flex pl-6 gap-2  mt-12 pr-4">
                <p> انتخاب دسته بندی:</p>
                <select
                  className="w-[120px]"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {products.map((product) => (
                    <option key={product._id} value={product.name}>
                      {product.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button
                onClick={addDiscount}
                className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                ارسال
              </button>
            </div>
          </form>
        </section>

        <section className="w-[90%] px-4  mx-auto mt-6 mb-16">
          <div className="flex items-center gap-x-3">
            <h2 className="text-lg font-medium text-gray-800 dark:text-white">
              Team members
            </h2>

            <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
              {discounts.length} discount
            </span>
          </div>

          <div className="flex flex-col mt-6">
            <div className="-mx-6 -my-6  overflow-x-auto sm:-mx-16 lg:-mx-16">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden h-[450px] overflow-y-auto border border-gray-200 dark:border-gray-700 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <div className="flex items-center gap-x-3">
                            <span>شناسه تخفیف</span>
                          </div>
                        </th>

                        <th
                          scope="col"
                          className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <div className="flex items-center gap-x-3">
                            <span>درصد تخفیف</span>
                          </div>
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          حداکثر استفاده
                        </th>

                        <th
                          scope="col"
                          className=" text-sm font-normal  rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          دفعات استفاده شده
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal pr-[60px] rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          نام محصول تخفیف خورده
                        </th>

                        <th scope="col" className="relative py-3.5 px-4">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                      {discounts.map((discount) => {
                        return (
                          <tr key={discount._id}>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                              <div className="inline-flex items-center gap-x-3">
                                <div className="flex items-center gap-x-2">
                                  <div>
                                    {discount.uses >= discount.maxUse ? (
                                      <h2 className="font-medium text-red-500 dark:text-white ">
                                        {discount.code}
                                      </h2>
                                    ) : (
                                      <h2 className="font-medium text-green-600 dark:text-white ">
                                        {discount.code}
                                      </h2>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-12 py-4  text-sm font-medium text-gray-700 whitespace-nowrap">
                              {discount.percent}
                            </td>
                            <td className="px-4 py-4 pr-[50px] text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                              {discount.maxUse}
                            </td>
                            <td className="text-sm pr-[50px] text-gray-500 dark:text-gray-300 whitespace-nowrap">
                              {discount.uses}
                            </td>
                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                              <div className="flex items-center gap-x-2">
                                {discount.product}
                              </div>
                            </td>
                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                              <div className="flex items-center gap-x-6">
                                <button
                                  onClick={(e) =>
                                    deleteDiscount(e, discount._id)
                                  }
                                  className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5"
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
