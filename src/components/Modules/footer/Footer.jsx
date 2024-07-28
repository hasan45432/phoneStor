import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <>
      <footer className="w-[1314px] rounded-[10px] h-[560px] bg-white">
        <div className=" flex flex-row-reverse text-left p-20 gap-16">
          <div className="">
            <p className="text-[20px] font-bold">
              Swoo - 1st NYC tech online market
            </p>
            <p className="text-[30px] font-bold text-[#1ABA1A] mt-6 mb-6">
              09927821570
            </p>
            <p className="text-[14]">
              257 Thatcher Road St, Brooklyn, Manhattan, NY 10092
            </p>
            <p className="text-[14]">hfadakar898@gmail.com</p>
            <div className="flex gap-2 flex-row-reverse mt-8 items-center">
              <Image
                src="/icons/iconfooter1.png"
                width={1200}
                height={900}
                className="w-[35px] h-[35px] rounded-[60px]"
                alt="shod"
              ></Image>
              <Image
                src="/icons/iconfooter2.png"
                width={1200}
                height={900}
                className="w-[35px] h-[35px] rounded-[60px]"
                alt="shodp"
              ></Image>
              <Image
                src="/icons/iconfooter3.png"
                width={1200}
                height={900}
                className="w-[35px] h-[35px] rounded-[60px]"
                alt="shodp"
              ></Image>
              <Image
                src="/icons/iconfooter4.png"
                width={1200}
                height={900}
                className="w-[35px] h-[35px] rounded-[60px]"
                alt="shodp"
              ></Image>
              <Image
                src="/icons/iconfooter5.png"
                width={1200}
                height={900}
                className="w-[35px] h-[35px] rounded-[60px]"
                alt="shodp"
              ></Image>
            </div>
          </div>
          <div className="">
            <p className="text-[20px] font-bold">top Categories</p>
            <ul className=" child:mt-4 child:text-[14px] text-[#666666]">
              <li>
                <Link href="/">Laptops</Link>
              </li>
              <li>
                <Link href="/">PC & Computers</Link>
              </li>
              <li>
                <Link href="/">Cell Phones</Link>
              </li>
              <li>
                <Link href="/">Tablets</Link>
              </li>
              <li>
                <Link href="/">Gaming & VR</Link>
              </li>
              <li>
                <Link href="/">networks</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <p className="text-[20px] font-bold">company</p>
            <ul className="child:text-[14] text-[#666666] child:mt-4">
              <li>About Swoo</li>
              <li>Contact</li>
              <li>Career</li>
              <li>Blog</li>
              <li>Sitemap</li>
            </ul>
          </div>
          <div className="">
            <p className="text-[20px] font-bold">help center</p>
            <ul className="child:text-[14] text-[#666666] child:mt-4">
              <li>Customer Service</li>
              <li>Policy</li>
              <li>Terms & Conditions</li>
              <li>Trach Order</li>
              <li>My Account</li>
              <li>Product Support</li>
            </ul>
          </div>
          <div className="">
            <p className="text-[20px] font-bold">partner</p>
            <ul className="child:text-[14] text-[#666666] child:mt-4">
              <li>Become Seller</li>
              <li>Affiliate</li>
              <li>Advertise</li>
              <li>Partnership</li>
              <li>Sitemap</li>
            </ul>
          </div>
        </div>
        <p className="text-[20px] font-bold text-center">
          subscribe & get{" "}
          <span className="text-[#F1352B] text-[20px]">10% off</span> for your
          first order
        </p>
        <div>
          <Image
            src="/img/imageHomePage/divFooter.png"
            width={1200}
            height={900}
            className="w-[1300px] h-[100px] rounded-[60px]"
            alt="shodp"
          ></Image>
        </div>
      </footer>
    </>
  );
}
