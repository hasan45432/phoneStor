import React from "react";
import Footer from "@/components/Modules/footer/Footer";
import MobilNavbar from "@/components/Modules/mobilNavbar/MobilNavbar";
import Navbar from "@/components/Modules/navbar/Navbar";
export default function AboutPage() {
  return (
    <div className="  container mx-auto pr-1 sm:pr-0 flex items-center justify-center  flex-col">
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <div className="block lg:hidden container mx-auto p-2">
        <MobilNavbar />
      </div>

      <div className="w-[100%]  bg-white rounded-[10px] mt-[15px] mb-[15px] 2xl:w-[85%]">
        <div className="w-[100%] flex flex-col p-[30px]">
          <p className=" text-[25px] font-bold">
            زبان ها و ابزارهای استفاده شده در توسعه این وبسایت:
          </p>
          <div className="flex flex-col gap-4">
            <p>
              <span className="text-[18px] font-bold">زبان ها :</span> html ,
              css , js
            </p>
            <p>
              <span className="text-[18px] font-bold">کتابخانه ها :</span>{" "}
              react.js , next.js , Tailwind CSS , bootstrap , , MUI , AOS ,
              sweetalert , jsonwebtoken , recharts
            </p>
          </div>
          <div className="flex flex-col mt-4 gap-4">
            <p>
              <span className="text-[18px] font-bold"> ابزار ها : </span>postman
              , mongoDB , zustand , mongoose
            </p>
            <p>
              <span className="text-[18px] font-bold"> ui وبسایت: </span>
              پیاده سازی ui از روی طرح فیگما به صورت پیکسل پرفکت
            </p>
          </div>
          <p>
            <span className="text-[18px] mt-4 font-bold">
              {" "}
              تعداد کل صفحات سایت :{" "}
            </span>
            شامل 20 صفحه
          </p>
        </div>

        <div className=" p-[30px]">
          <p className=" text-[25px] font-bold">امکانات وبسایت:</p>
          <div>
            <span className="text-[18px] font-bold"> احراز هویت کاربران: </span>
            <p>
              شامل فرم ثبت نام , ورود با ایمیل و رمز عبور ثبت نام شده , جلوگیری
              از ثبت نام کاربران تکراری , اعتبار سنجی ایمیل هنگام ورود و ثبت
              نام, ذخیره شدن توکن کاربر در کوکی مرورگر بعد از ثبت نام یا ورود
              حفظ اطلاعات کاربر بعد از بستن مرور گر , امکان خارج شدن کاربر و حذف
              اطلاعات و کوکی از سایت و مرور گر , ذخیره شدن و مشاهده ی اطلاعات
              کاربران در پنل کاربری
            </p>
          </div>
          <div className="mt-[10px]">
            <span className="text-[18px] font-bold">
              {" "}
              پنل ادمین : ادرس :p-admin
            </span>
            <p>
              *پیشخوان مدیریت *قسمت محصولات: قابلیت اضافه و حذف محصولات * صفحه ی
              کامنت ها: امکان مدیریت کامنت های ثبت شده مانند رد یا تایید کامنت
              های ثبت شده * صفحه ی تخفیف ها : امکان مدیرت و ساخت تخفیف برای
              محصولات و استفاده ان برای محصولات سایت و امکان حذف تخفیف تعیین
              تعداد مجاز استفاده از تخفیف ها و زمان مشخص * صفحه ی دسته بندی ها :
              امکان اضافه کردن دسته بندی برای محصولات و ساخت محصولات بر اساس
              دسته بندی ها * صفحه ی کاربران : امکان مدیریت کاربران بر اساس نیاز
              مانند حذف کاربران ثبت نام شده در سایت
            </p>
          </div>
        </div>
        <div className="p-[30px]">
          <p className=" text-[20px] font-bold">امکانات بخش اصلی وبسایت : </p>
          <p>
            دسته بندی محصولات , امکان جستجوی مصحولات , امکان خرید سریع محصولات و
            اضافه شدن تعداد و قیمت محوصل خریداری شده به سبد خرید در هدر به صورت
            real time : صفحه ی سبد خرید : امکان مشاهده محصولات اضافه شده و
            قابلیت استفاده از کد تخفیف ساخته شده توسط مدیر و کاهش قیمت محصول
            امکان حذف محصولات از سبد خرید : ثبت کامنت برای مصحولات به صورت مجزا
            برای هر محصول و مشاهد ه ی کامنت ثبت شده برای تمامی کاربران سایت در
            صورت تایید مدیر
          </p>
          <p className=" text-[20px] font-bold">ریسپانسیو سازی: </p>
          <p>
            ریسپانسیو بودن کل صفحات سایت تا سایز 320 px همچنین ریسپانسیو بودن
            صفحات پنل ادمین تا سایز 320 px{" "}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
