"use client";
import React, { useState, useEffect } from "react";
import Sidbar from "@/components/templates/p-adminPage/sidbar/Sidbar";
import SidbarResponsive from "@/components/templates/p-adminPage/sidbar/SidbarResponsive";
import { useCombinedStore } from "@/app/store";
import usePost from "@/cutomHooks/usePost";
import useDelete from "@/cutomHooks/useDelete";
import swal from "sweetalert";
import useFetch from "@/cutomHooks/useFetch";
export default function CategoryPage() {
  const [name, setName] = useState("");
  const [alert, setAlert] = useState("");
  const [category, setCategory] = useState([]);

  const [nameError, setNameError] = useState("");

  const { loadingPost, errorPost, fetchPost } = usePost();
  const { fetchDelete } = useDelete();
  const { fetchData } = useFetch();

  const addCategory = async (e) => {
    e.preventDefault();

    let url = "http://localhost:3000/api/category";
    let body = { name };

    if (!name.trim().length) {
      return setAlert("لطفا دسته بندی را وارد کنید");
    }
    if (name.trim().length) {
      if (!/^[a-zA-Zا-ی\s]+$/.test(name.trim())) {
        return setNameError("نمی تواند عدد یا شئی باشد");
      }
    }

    await fetchPost({ url: url, body: body });
    let response = useCombinedStore.getState().statesResponse;
    if (response.status === 201) {
      swal({
        title: "دسته بندی با موفقیت افزوده شد",
        icon: "success",
      });
    } else {
      swal({
        title: "مشکلی پیش امد لطفا مقدار ها را چک کنید",
        icon: "error",
      });
    }

    getCategory();

    setName("");
  };

  const getCategory = async () => {
    let url = "http://localhost:3000/api/category";
    await fetchData(url);
    let statesData = useCombinedStore.getState().statesData;
    setCategory(statesData);
  };

  const deleteCategory = async (e, categoryID) => {
    e.preventDefault();
    let url = "http://localhost:3000/api/category";
    let body = { id: categoryID };

    await swal({
      title: "ایا از حذف این دسته بندی  مطمعا هستید",
      icon: "warning",
      buttons: ["نه", "اره"],
    }).then(async (res) => {
      if (res) {
        await fetchDelete({ url: url, body: body });
      }
    });
    getCategory();
  };

  useEffect(() => {
    getCategory();
  }, []);
  return (
    <div className="flex w-[100%]">
      <div className="flex flex-col w-[100%]">
        <section className="max-w-4xl p-6 mx-auto mt-6 bg-white rounded-md shadow-md dark:bg-gray-800">
          <form>
            <div className="grid   grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="passwordConfirmation"
                >
                  نام دسته بندی را وارد کنید
                </label>
                <input
                  type="text"
                  value={name}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  onChange={(e) => {
                    setName(e.target.value);
                    if (nameError.length) {
                      setNameError("");
                    }
                  }}
                />

                {!name && <p className=" text-red-600 text-[14px]">{alert}</p>}
                {nameError && (
                  <p className=" text-red-600 text-[14px]">{nameError}</p>
                )}
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button
                onClick={addCategory}
                className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                اضافه کردن
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
              {category.length} category
            </span>
          </div>

          <div className="flex flex-col mt-6">
            <div className="-mx-6 -my-6  overflow-x-auto sm:-mx-16 lg:-mx-16">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden h-[450px] overflow-y-auto  border border-gray-200 dark:border-gray-700 md:rounded-lg">
                  <table className="min-w-full  divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <div className="flex items-center gap-x-3">
                            <span>نام دسته بندی</span>
                          </div>
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <div className="flex items-center gap-x-3">
                            <span> دسته بندی حذف</span>
                          </div>
                        </th>
                      </tr>
                    </thead>

                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                      {category.map((cat) => {
                        return (
                          <tr key={cat._id}>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                              <div className="inline-flex items-center gap-x-3">
                                <div className="flex items-center gap-x-2">
                                  <div>
                                    <h2 className="font-medium text-gray-800 dark:text-white ">
                                      {cat.name}
                                    </h2>
                                  </div>
                                </div>
                              </div>
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
                                    onClick={(e) => deleteCategory(e, cat._id)}
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
