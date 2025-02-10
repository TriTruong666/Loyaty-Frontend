"use client";

import LoginHeader from "@/components/login-header";
import { MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaCircleCheck } from "react-icons/fa6";
import Image from "next/image";
import woman from "@/static/woman-1.jpg";
export default function Home() {
  return (
    <>
      <div className="font-inter relative w-screen h-screen overflow-hidden">
        <LoginHeader />
        <div className="flex h-full">
          <Introduce />
        </div>
      </div>
    </>
  );
}

function Introduce() {
  return (
    <div className="flex flex-col w-[50%] border-r h-full border-gray-400 border-opacity-40 justify-center pl-[150px] gap-y-3">
      <p className="font-semibold 2xl:text-[40px] text-[50px] w-[80%] mt-[70px] 2xl:mt-[5px] bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-yellow-600 via-primary to-emerald-50 bg-clip-text text-transparent">
        Loyaty happy to see you, friends.
      </p>
      <p className="text-normal text-sm 2xl:text-[11px] w-[80%]">
        Loyaty is a platform that helps pharmaceutical retailers buy in bulk
        from trusted suppliers. We offer competitive pricing, a seamless
        ordering process, and reliable product quality.
      </p>
      <div className="pt-4 2xl:pt-2">
        <LoginForm />
      </div>
      <div className="pt-4 2xl:pt-2 mt-[20px] 2xl:mb-[10px] mb-[60px]">
        <Participants />
      </div>
      <p className="text-normal text-[11px] 2xl:text-[9px] w-[80%] font-light 2xl:mb-[50px] mb-[150px]">
        Loyaty™ is a trademarked platform dedicated to helping pharmaceutical
        retailers purchase in bulk efficiently. Our brand name, logo, and
        associated materials are legally protected, ensuring authenticity and
        trust in the industry. Unauthorized use, reproduction, or imitation of
        Loyaty’s intellectual property is strictly prohibited.
      </p>
    </div>
  );
}

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-y-2">
      {/* Email Field */}
      <label
        htmlFor="email"
        className="font-semibold text-sm 2xl:text-[12px] mb-1"
      >
        Email Address *
      </label>
      <div className="group flex items-center w-[60%] py-3 px-3 border space-x-4 border-gray-400 border-opacity-40 rounded-md transition-all duration-300 hover:border-opacity-80 focus-within:border-opacity-80 hover:shadow-md focus-within:shadow-md">
        <MdEmail size={20} />
        <input
          type="text"
          placeholder="hello@company.com"
          className="outline-none bg-transparent border-none w-full 2xl:text-[13px]"
        />
      </div>

      {/* Password Field */}
      <label
        htmlFor="password"
        className="font-semibold 2xl:text-[12px] mb-1 mt-3"
      >
        Password *
      </label>
      <div className="relative group flex items-center w-[60%] py-3 px-3 border space-x-4 border-gray-400 border-opacity-40 rounded-md transition-all duration-300 hover:border-opacity-80 focus-within:border-opacity-80 hover:shadow-md focus-within:shadow-md">
        <FaKey size={20} />
        <input
          type={showPassword ? "text" : "password"} // Toggle Password Visibility
          placeholder="yourpass123"
          className="outline-none bg-transparent border-none w-full 2xl:text-[13px]"
        />
        {/* Toggle Button */}
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 text-gray-500 hover:text-white transition"
        >
          {showPassword ? (
            <AiOutlineEyeInvisible size={22} />
          ) : (
            <AiOutlineEye size={22} />
          )}
        </button>
      </div>
      <p className="text-[11px] 2xl:text-[9px] mt-1 text-dangerous">
        Wrong email or password
      </p>
      {/* Submit Button */}
      <button
        className="mt-6 2xl:mt-3 2xl:text-sm w-[60%] border py-2 rounded-md transition-all duration-300 bg-gray-300 text-gray-500
             disabled:bg-[#141414] disabled:text-gray-600 disabled:border-gray-400 disabled:border-opacity-20
             enabled:bg-white enabled:text-black enabled:hover:bg-black enabled:hover:text-white"
      >
        Continue
      </button>
    </div>
  );
}

function Participants() {
  return (
    <div className="flex flex-col mb-[10px]">
      {/* Stacked Images */}
      <div className="flex">
        <div className="flex">
          <Image
            alt=""
            src={woman}
            className="w-[30px] h-[30px] rounded-full object-cover border-2 -ml-2 first:ml-0"
          />
          <Image
            alt=""
            src={woman}
            className="w-[30px] h-[30px] rounded-full object-cover border-2 -ml-2"
          />
          <Image
            alt=""
            src={woman}
            className="w-[30px] h-[30px] rounded-full object-cover border-2 -ml-2"
          />
          <Image
            alt=""
            src={woman}
            className="w-[30px] h-[30px] rounded-full object-cover border-2 -ml-2"
          />
          <Image
            alt=""
            src={woman}
            className="w-[30px] h-[30px] rounded-full object-cover border-2 -ml-2"
          />
        </div>
      </div>

      {/* Verified Message */}
      <div className="flex items-center gap-x-3 mt-2">
        <FaCircleCheck className="text-normal 2xl:text-[14px]" />
        <p className="text-sm text-normal 2xl:text-[12px]">
          +36 retailers became members of Loyaty.
        </p>
      </div>
    </div>
  );
}
