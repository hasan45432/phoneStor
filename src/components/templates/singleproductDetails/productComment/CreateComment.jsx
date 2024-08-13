"use client";
import React, { useState, useEffect } from "react";
import usePost from "@/cutomHooks/usePost";
import { useCombinedStore } from "@/app/store";
import { usePathname } from "next/navigation";
import Comments from "@/components/Modules/comments/Comments";
import useFetch from "@/cutomHooks/useFetch";
import { useRouter } from "next/navigation";
import { validateEmail } from "@/utils/auth";
export default function CreateComment() {
  const router = usePathname();
  const redirect = useRouter();
  const { fetchPost } = usePost();
  const { fetchData } = useFetch();
  const [comments, setComments] = useState([]);

  const [showComments, setShowComments] = useState(false);
  const [commentLength, setCommentLength] = useState([]);

  const [isValiadteEmail, setIsValiadteEmail] = useState("");
  const [alertEmail, setAlertEmail] = useState("");
  const [alertDescription, setAlertDescription] = useState("");
  const [alertUsername, setAlertUsername] = useState("");

  const [description, setDescription] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const submitComment = async (e) => {
    e.preventDefault();

    if (!username.length) {
      return setAlertUsername("لطفا نام خود را وارد کنید");
    }
    if (!description.length) {
      return setAlertDescription("لطفا توضیحات را وارد کنید");
    }
    if (!email.length) {
      return setAlertEmail("لطفا ایمیل را وارد کنید");
    }

    if (email.length) {
      let isValiadteEmail = validateEmail(email);
      if (!isValiadteEmail) {
        return setIsValiadteEmail("ایمیل نامعتبر است");
      }
    }

    let urlGetMy = "http://localhost:3000/api/auth/me";

    await fetchData(urlGetMy);
    const statesDataurlGetMy = await useCombinedStore.getState().statesData;
    const statesResponseurlGetMy = await useCombinedStore.getState()
      .statesResponse;

    if (
      statesDataurlGetMy.data === null ||
      statesResponseurlGetMy.status === 401 ||
      statesDataurlGetMy === null
    ) {
      redirect.push("/login");
    } else {
      let url = "http://localhost:3000/api/comments";
      let body = {
        description,
        username,
        email,
        productID: router.split("/").pop(),
      };
      await fetchPost({ url: url, body: body });
      let statesResponse = useCombinedStore.getState().statesResponse;
      if (statesResponse.status === 201) {
        swal({
          title: "کامنت شما بعد از تایید مدیر ثبت می شود",
          icon: "success",
        });
      }
    
    }

    setEmail("");
    setDescription("");
    setUsername("");
  };

  const getComments = async () => {
    let url = "http://localhost:3000/api/comments";
    await fetchData(url);
    let statesResponse = useCombinedStore.getState().statesResponse;
    let statesData = useCombinedStore.getState().statesData;

    let stateProductComments = await useCombinedStore.getState()
      .stateProductComments;
    

    const filteredArray = await statesData.filter((state) =>
      stateProductComments.some((comment) => comment._id === state._id)
    );

    let acceptAccept = filteredArray.filter((comment) => {
      return comment.isAccept === true;
    });
    setCommentLength(acceptAccept);

    setComments(filteredArray);
  };

  const getMy = async () => {};

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div className="flex flex-col items-center lg:flex-row-reverse lg:justify-around w-[100%]  ">
      <form
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="max-w-md  mt-8 p-4 sm:p-0  mb-8  "
      >
        <div className=" flex flex-col items-center ">
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium ml-[160px] w-full   font-bold   absolute text-sm  dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:border-green-400 peer-focus:dark:focus:border-green-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 "
          >
            لطفا نظر خود را در رابطه با سفارش با ما به اشتراک بگذارید*
          </label>
          <textarea
            name="comment"
            cols="45"
            value={description}
            rows="8"
            onChange={(e) => setDescription(e.target.value)}
            className="mt-10 block py-2.5 px-0 w-full  text-sm rounded-[10px] text-gray-900 bg-transparent  border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-400 focus:outline-none focus:ring-0 focus:border-green-400 peer "
          ></textarea>
          {!description && (
            <p className=" text-red-600 text-[14px] ">{alertDescription}</p>
          )}
        </div>

        <div className="relative z-0 w-full mb-5 group mt-6">
          <input
            type="email"
            name="floating_email"
            value={email}
            id="floating_email"
            onChange={(e) => {
              const newEmail = e.target.value;
              setEmail(newEmail);
              let isValiadteEmail = validateEmail(newEmail);
              if (newEmail.length === 0 || isValiadteEmail) {
                return setIsValiadteEmail("");
              }
            }}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-400 focus:outline-none focus:ring-0 focus:border-green-400 peer"
            placeholder=" "
            required
          />
          {!email && <p className=" text-red-600 text-[14px] ">{alertEmail}</p>}
          {isValiadteEmail && (
            <p className=" text-red-600 text-[14px] ">{isValiadteEmail}</p>
          )}
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:border-green-400 peer-focus:dark:focus:border-green-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            ایمیل
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            name="repeat_password"
            id="floating_repeat_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-400 focus:outline-none focus:ring-0 focus:border-green-400 peer"
            placeholder=" "
            required
          />
          {!username && (
            <p className=" text-red-600 text-[14px] ">{alertUsername}</p>
          )}
          <label
            htmlFor="floating_repeat_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:border-green-400 peer-focus:dark:border-green-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            نام کاربری
          </label>
        </div>

        <button
          type="submit"
          onClick={submitComment}
          className="text-[15px] hover:text-white hover:bg-[#1ABA1A] transition-all duration-500 bg-green-100 text-[#1ABA1A] w-[120px] h-[40px] sm:text-[18px] mb-[15px]    mt-[15px]  rounded-[10px] "
        >
          ارسال
        </button>
      </form>
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        className=" flex flex-col items-start mb-12 mt-12
      "
      >
        <p className="text-[18px] font-bold  ">
          {commentLength.length} دیدگاه برای این محصول ثبت شده است
        </p>
        {showComments === false &&
          comments.slice(0, 5).map((comment) => {
            return (
              comment.isAccept === true && (
                <Comments key={comment._id} {...comment} />
              )
            );
          })}
        {showComments === true &&
          comments.map((comment) => {
            return (
              comment.isAccept === true && (
                <Comments key={comment._id} {...comment} />
              )
            );
          })}
        <button
          onClick={() => setShowComments(true)}
          className="text-[15px]  hover:text-white hover:bg-[#1ABA1A] transition-all duration-500 bg-green-100 text-[#1ABA1A] w-[120px] h-[40px] sm:text-[18px] mb-[15px]    mt-[30px]  rounded-[10px]"
        >
          همه نظر ها
        </button>
      </div>
    </div>
  );
}
