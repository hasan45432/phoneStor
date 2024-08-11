"use client";
import React, { useEffect, useState } from "react";
import Sidbar from "@/components/templates/p-adminPage/sidbar/Sidbar";
import SidbarResponsive from "@/components/templates/p-adminPage/sidbar/SidbarResponsive";
import useFetch from "@/cutomHooks/useFetch";
import usePost from "@/cutomHooks/usePost";
import { useCombinedStore } from "@/app/store";
import useDelete from "@/cutomHooks/useDelete";
export default function CommentsPage() {
  const { fetchData } = useFetch();
  const { fetchPost } = usePost();
  const { fetchDelete } = useDelete();

  const [comments, setComments] = useState([]);

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

  const notAcceptComment = async (e, commentID) => {
    console.log(commentID);
    e.preventDefault();
    let id = { id: commentID };
    await fetch("http://localhost:3000/api/comments/reject", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(id),
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
    getComments();
  };
  const AcceptComment = async (e, commentID) => {
    console.log(commentID);
    e.preventDefault();
    let id = { id: commentID };
    await fetch("http://localhost:3000/api/comments/accept", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(id),
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
    getComments();
  };

  const deleteComment = async (e, commentID) => {
    e.preventDefault();
    let url = "http://localhost:3000/api/comments";
    let body = { id: commentID };
    await fetchDelete({ url: url, body: body });
    getComments();
  };

  useEffect(() => {
    getComments();
  }, []);
  return (
    <div className="flex">
      <div className=" hidden xl:block">
        <Sidbar />
      </div>
      <div className=" block xl:hidden">
        <SidbarResponsive />
      </div>
      <div className="flex flex-col w-[100%]">
        <section className="w-[90%] px-4  mx-auto mt-6 mb-16">
          <div className="flex items-center gap-x-3">
            <h2 className="text-lg font-medium text-gray-800 dark:text-white">
              Team members
            </h2>

            <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
              {comments.length} comments
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
                            <span>نام</span>
                          </div>
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Email address
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          بدنه کامنت
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          تایید / رد
                        </th>

                        <th scope="col" className="relative py-3.5 px-4">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                      {comments.map((comment) => {
                        return (
                          <tr key={comment._id}>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                              <div className="inline-flex items-center gap-x-3">
                                <div className="flex items-center gap-x-2">
                                  <div>
                                    <h2 className="font-medium text-gray-800 dark:text-white ">
                                      {comment.username}
                                    </h2>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                              {comment.email}
                            </td>

                            <td className="px-4 py-4 overflow-x-auto max-w-[300px]  text-sm font-medium text-gray-700 whitespace-nowrap">
                              <div className="inline-flex items-center gap-x-3">
                                <div className="flex items-center gap-x-2">
                                  <div>
                                    <h2 className="font-medium text-gray-800 dark:text-white ">
                                      {comment.description}
                                    </h2>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-4 py-4 text-sm whitespace-nowrap ">
                              {comment.isAccept ? (
                                <button
                                  onClick={(e) =>
                                    notAcceptComment(e, comment._id)
                                  }
                                  className="px-3 py-1 text-md text-red-500 w-[70px] rounded-full dark:bg-gray-800 bg-pink-100/60"
                                >
                                  رد
                                </button>
                              ) : (
                                <button
                                  onClick={(e) => AcceptComment(e, comment._id)}
                                  className="px-3 py-1 text-sm text-green-600 w-[70px] rounded-full dark:bg-gray-800 bg-green-100"
                                >
                                  تایید
                                </button>
                              )}
                            </td>

                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                              <div className="flex items-center gap-x-6">
                                <button
                                  onClick={(e) => deleteComment(e, comment._id)}
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
