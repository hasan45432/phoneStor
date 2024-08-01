import Link from "next/link";
import React from "react";
import Image from "next/image";
export default function Header() {
  return (
    <>
      <header className="mb-[20px] w-[100%]  " >
        <div className="flex flex-col xl:flex-row gap-[15px] mt-[15px]">
          <div data-aos="fade-left" data-aos-duration="1500" className=" bg-[#FFFFFF] w-[99%]  h-[100px] xl:w-[309px] xl:h-[447px] rounded-[10px]">
            <ul className="child-hover:text-[#1ABA1A] child-hover:transition-colors child-hover:duration-300 child:text-[15px] child:font-semibold pt-10 child:mx-auto xl:pt-[55px] flex xl:flex-col xl:gap-6">
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

          <div className="w-[99%] xl:w-[650px] xl:h-[446px]" data-aos="fade-up" data-aos-duration="1000">
            <div className="relative h-[200px] sm:h-[300px]  xl:w-[650px] xl:h-[310px] rounded-[10px] overflow-hidden">
              <Image
                src="/img/imageHomePage/slider3.png.png"
                width={900}
                height={600}
                className="w-[100%] xl:w-full h-full  bg-center"
                alt="shop"
              ></Image>
              <div className="absolute hidden text-left sm:flex flex-col left-[60px] top-[41px]  bg-opacity-50">
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
            <div className="w-[100%] flex gap-[15px] mt-[15px]">
              <Image
                src="/img/imageHomePage/div.img.png"
                width={900}
                height={600}
                className="w-[47.5%] sm:w-[50.5%] bg-cover bg-center xl:w-[316px] h-[90px] sm:h-[120px] rounded-[10px]"
                alt="shop"
              ></Image>
              <Image
                src="/img/imageHomePage/keybord.img.png"
                width={900}
                height={600}
                className="w-[47.5%] sm:w-[50.5%] bg-cover bg-center xl:w-[316px] h-[90px] sm:h-[120px] rounded-[10px]"
                alt="shop"
              ></Image>
            </div>
          </div>
          <div className="flex xl:flex-col items-center  gap-[15px]" data-aos="fade-right" data-aos-duration="1500">
            <Image
              src="/img/imageHomePage/wach.png.png"
              width={900}
              height={600}
              className="w-[47%] sm:w-[49%] xl:w-[308px]  bg-center h-[130px] sm:h-[215px] bg-cover rounded-[10px]"
              alt="shop"
            ></Image>
            <Image
              src="/img/imageHomePage/dorbin.img.png"
              width={900}
              height={600}
              className="w-[47%] sm:w-[49%] xl:w-[308px]  bg-center h-[130px] sm:h-[215px] bg-cover  rounded-[10px] "
              alt="shop"
            ></Image>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="1000" className=" w-[100%] pl-2 sm:pl-0 flex flex-col md:flex-row gap-[15px] mt-[15px]">
          <Image
            src="/img/imageHomePage/topcategory.png"
            width={900}
            height={600}
            className="md:w-[49%] bg-cover bg-center xl:w-[642px] h-[130px] sm:h-[226px] rounded-[10px]"
            alt="shop"
          ></Image>
          <Image
            src="/img/imageHomePage/main.png"
            width={900}
            height={600}
            className="md:w-[49%] bg-cover bg-center xl:w-[642px] h-[130px] sm:h-[226px] rounded-[10px]"
            alt="shop"
          ></Image>
        </div>

        <div className="w-[100%] pl-1 sm:pl-0 flex flex-col xl:flex-row-reverse" data-aos="fade-up" data-aos-duration="1200">
          <div className="w-[100%]">
            <div className="w-[100%] mt-[15px] h-[62px] bg-[#1ABA1A] rounded-[10px] text-left">
              <p className="text-[20px] text-white p-4 ml-[10px] font-bold">
                Deals of the day
              </p>
            </div>
            <div className="w-[100%] h-[550px] sm:h-[480px] bg-[#FFFFFF] rounded-[10PX] flex flex-col md:justify-around items-center sm:flex-row-reverse">
              <div className="flex flex-row-reverse">
                <Image
                  src="/img/imageHomePage/divswiper-wrapper-fb61d9569454cc6d.png"
                  width={900}
                  height={600}
                  className="w-[35px] bg-cover bg-center hidden xl:block mt-[35px] ml-[30px] h-[380px] rounded-[10px] "
                  alt="shop"
                ></Image>
                <div className=" relative">
                  <Image
                    src="/img/imageHomePage/prod5.png.png"
                    width={400}
                    height={300}
                    className="w-[250px] mr-[50px] mt-8 h-[150px] sm:w-[400px] bg-cover bg-center pl-7 sm:h-[250px]  xl:mt-[85px]  xl:h-[280px] rounded-[10px]"
                    alt="shop"
                  ></Image>
                  <div className="w-[80px] top-4 left-4  h-[30px] sm:w-[90px] sm:top-0 sm:left-1 md:top-[0]  xl:top-[50px] md:left-8 xl:left-[30px] absolute sm:h-[40px] bg-[#1ABA1A] rounded-[10px]">
                    <p className=" text-[15px] sm:text-[17px] md:text-[20px] text-white pt-1 pr-2 font-medium">
                      $199.00
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="sm:w-[346px] mt-2 h-[35px] p-4 sm:mb-[200px] sm:pr-6 md:pr-2 md:mb-[170px]  lg:mb-[200px] xl:mb-[300px]">
                  <h2 className="text-[20px] font-bold text-left">
                    Xioma Redmi Note 11 Pro 256GB 2023, Black Smartphone
                  </h2>
                  <p className="text-[#F1352B]  text-[25px] mt-[12px] font-semibold text-left">
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
          <div className="w-[100%] pl-2 sm:pl-0   mt-[15px] xl:mt-0 xl:w-[30%] flex items-center gap-[10px] xl:block">
            <Image
              src="/img/imageHomePage/Main → Section → Link → ban1.png.png"
              width={900}
              height={600}
              className="w-[32%] md:w-[32%] bg-cover bg-center xl:w-[296px] lg:w-[33%] h-[100px]  sm:h-[177px] rounded-[10px] xl:mt-[14px]"
              alt="shop"
            ></Image>
            <Image
              src="/img/imageHomePage/Main → Section → Link → ban2.png.png"
              width={900}
              height={600}
              className="w-[32%] md:w-[32%] bg-cover bg-center lg:w-[33%] xl:w-[296px]  h-[100px] sm:h-[177px] rounded-[10px] xl:mt-[7px]"
              alt="shop"
            ></Image>
            <Image
              src="/img/imageHomePage/MainMobil → Section → Link → ban2.png.png"
              width={900}
              height={600}
              className="w-[32%] md:w-[32%] bg-cover bg-center lg:w-[33%] xl:w-[296px]  h-[100px] sm:h-[177px] rounded-[10px] xl:mt-[7px]"
              alt="shop"
            ></Image>
          </div>
        </div>
      </header>
    </>
  );
}
