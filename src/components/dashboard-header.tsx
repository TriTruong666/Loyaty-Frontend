"use client";
import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { BsBellFill } from "react-icons/bs";
import { IoIosSettings } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import person from "@/static/woman-1.jpg";
export default function DashboardHeader() {
  return (
    <div className="flex justify-between border-b border-gray-400-40 py-4 px-[30px]">
      <SearchBar />
      <MainBar />
    </div>
  );
}

function SearchBar() {
  const placeholderTexts = [
    "Search for products...",
    "Find your orders...",
    "Look up accounts...",
  ];

  const [placeholder, setPlaceholder] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = placeholderTexts[index];
    const typingSpeed = isDeleting ? 50 : 100;
    const delayBeforeDeleting = 4000;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentText.length) {
        setPlaceholder((prev) => prev + currentText[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setPlaceholder((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), delayBeforeDeleting);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % placeholderTexts.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  return (
    <div className="flex items-center border w-[400px] px-2 py-2 rounded-md gap-x-3 border-gray-600 border-opacity-30 transition-all duration-150 focus-within:border-gray-400">
      <IoIosSearch className="text-[22px]" />
      <input
        type="text"
        className="outline-none bg-transparent border-none w-full text-[14px]"
        placeholder={placeholder}
      />
    </div>
  );
}

function MainBar() {
  return (
    <div className="flex items-center">
      <div className="flex items-center gap-x-2 border border-[#34C724] px-2 py-1 rounded-full mr-4">
        <IoShieldCheckmarkOutline className="text-[14px] text-[#34C724]" />
        <p className="text-[12px] text-[#34C724]">Verified</p>
      </div>
      <div className="px-4 border-l-[2px]">
        <BsBellFill className="text-[20px]" />
      </div>
      <div className="px-4 border-l-[2px]">
        <IoIosSettings className="text-[20px]" />
      </div>
      <div className="px-4 border-l-[2px]">
        <FaShoppingCart className="text-[20px]" />
      </div>
      {/* Avatar */}
      <div className="flex items-center ml-[15px] gap-x-2">
        <div className="flex flex-col">
          <p className="text-foreground font-semibold text-[13px] font-monse">
            Truong Hoang Tri
          </p>
          <p className="text-end text-[11px] text-normal font-semibold font-monse">
            Admin
          </p>
        </div>
        <Image
          alt=""
          src={person}
          className="w-[40px] h-[40px] object-cover rounded-full"
        />
      </div>
    </div>
  );
}
