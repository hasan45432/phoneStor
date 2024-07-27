import Link from "next/link";
import React from "react";
import Image from "next/image";
export default function Header() {
  return (
    <>
      <header className="mb-[200px]">
        <div className="flex gap-[15px] mt-[15px]">
          <div className=" bg-[#FFFFFF] w-[309px] h-[447px] rounded-[10px]">
            <ul className=" child:text-[15px] child:font-semibold mr-[55px] pt-[55px] flex flex-col gap-6">
              <li>
                <Link href="/">لپ تاپ</Link>
              </li>
              <li>
                <Link href="/">کامپیوتر</Link>
              </li>
              <li>
                <Link href="/">موبایل</Link>
              </li>
              <li>
                <Link href="/">تبلت</Link>
              </li>
              <li>
                <Link href="/">بازی</Link>
              </li>
              <li>
                <Link href="/">موزیک</Link>
              </li>
            </ul>
          </div>

          <div className="w-[650px] h-[446px]">
            <div className="relative w-[650px] h-[310px] rounded-[10px] overflow-hidden">
              <Image
                src="/img/slider3.png.png"
                width={900}
                height={600}
                className="w-full h-full object-cover"
                alt="shop"
              ></Image>
              <div className="absolute text-left flex flex-col left-[60px] top-[41px]  bg-opacity-50">
                <p className="text-white text-[30px] font-bold">
                  Noise Cancelling
                </p>
                <p className="text-white text-[30px] ">Headphone</p>

                <div className=" ml-[25px] child:text-[#FFFFFF] text-[13px] mt-[15px]">
                  <p>Boso Over-Ear Headphone</p>
                  <p>Wifi, Voice Assistant</p>
                  <p>Low latency game mde</p>
                </div>
              </div>
            </div>
            <div className="flex gap-[15px] mt-[15px]">
              <Image
                src="/img/div.img.png"
                width={900}
                height={600}
                className="w-[316px] h-[120px] rounded-[10px]"
                alt="shop"
              ></Image>
              <Image
                src="/img/keybord.img.png"
                width={900}
                height={600}
                className="w-[316px] h-[120px] rounded-[10px]"
                alt="shop"
              ></Image>
            </div>
          </div>
          <div>
            <Image
              src="/img/wach.img.png"
              width={900}
              height={600}
              className="w-[308px] h-[215px] rounded-[10px]"
              alt="shop"
            ></Image>
            <Image
              src="/img/dorbin.img.png"
              width={900}
              height={600}
              className="w-[308px] h-[215px] rounded-[10px] mt-[15px]"
              alt="shop"
            ></Image>
          </div>
        </div>

        <div className="flex gap-[15px] mt-[15px]">
          <Image
            src="/img/topcategory.png"
            width={900}
            height={600}
            className="w-[642px] h-[226px] rounded-[10px]"
            alt="shop"
          ></Image>
          <Image
            src="/img/main.png"
            width={900}
            height={600}
            className="w-[642px] h-[226px] rounded-[10px]"
            alt="shop"
          ></Image>
        </div>

        <div className=" flex flex-row-reverse">
          <div>
            <div className="w-[971px] mt-[15px] h-[62px] bg-[#1ABA1A] rounded-[10px] text-left">
              <p className="text-[20px] text-white p-4 ml-[10px] font-bold">
                Deals of the day
              </p>
            </div>
            <div className="w-[971px] h-[480px] bg-[#FFFFFF] rounded-[10PX] flex flex-row-reverse">
              <div className="flex flex-row-reverse">
                <Image
                  src="/img/divswiper-wrapper-fb61d9569454cc6d.png"
                  width={900}
                  height={600}
                  className="w-[35px] mt-[35px] ml-[30px] h-[380px] rounded-[10px] "
                  alt="shop"
                ></Image>
                <div className=" relative">
                  <Image
                    src="/img/prod5.png.png"
                    width={900}
                    height={600}
                    className="w-[400px] mt-[85px]  h-[280px] rounded-[10px]"
                    alt="shop"
                  ></Image>
                  <div className="w-[95px] top-[50px] left-[30px] absolute h-[49px] bg-[#1ABA1A] rounded-[10px]">
                    <p className="text-[20px] text-white p-3 font-medium">
                      $199.00
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="w-[346px] h-[35px] ml-[60px] mt-[100px]">
                  <h2 className="text-[20px] font-bold text-left">
                    Xioma Redmi Note 11 Pro 256GB 2023, Black Smartphone
                  </h2>
                  <p className="text-[#F1352B] text-[25px] mt-[12px] font-semibold text-left">
                    $569.00{" "}
                  </p>
                  <div className="text-left mt-[15px] child:text-[13px] flex flex-col gap-2">
                    <p>
                      Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core
                    </p>
                    <p>DDR5 Compatible: 4*SMD DIMMs with XMP 3.0 Memory</p>
                    <p>Commanding Power Design: Twin 16+1+2 Phases Digital</p>
                  </div>
                  <div className="flex flex-row-reverse gap-2 mt-[15px]">
                    <div className="w-[122px] h-[28px] rounded-[6PX] bg-green-50">
                      <p className="text-[13px] pt-[6px] pr-[13px] text-[#1ABA1A]">
                        FREE SHIPPING
                      </p>
                    </div>
                    <div className="w-[122px] h-[28px] rounded-[6PX] bg-red-50">
                      <p className="text-[13px] pt-[6px] pr-[30px] text-[#F1352B]">
                        FREE GIFT
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-[30px]">
            <Image
              src="/img/Main → Section → Link → ban1.png.png"
              width={900}
              height={600}
              className="w-[296px] h-[177px] rounded-[10px] mt-[14px]"
              alt="shop"
            ></Image>
            <Image
              src="/img/Main → Section → Link → ban2.png.png"
              width={900}
              height={600}
              className="w-[296px] h-[177px] rounded-[10px] mt-[7px]"
              alt="shop"
            ></Image>
            <Image
              src="/img/MainMobil → Section → Link → ban2.png.png"
              width={900}
              height={600}
              className="w-[296px] h-[177px] rounded-[10px] mt-[7px]"
              alt="shop"
            ></Image>
          </div>
        </div>
      </header>
    </>
  );
}
