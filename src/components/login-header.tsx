"use client"; // Ensure this runs only on the client
import Image from "next/image";
import Link from "next/link";
import { MdOutlineNavigateNext } from "react-icons/md";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import logo2 from "@/static/logo-dark2.png";
import { useTheme } from "@/hooks/useTheme";
import { usePathname } from "next/navigation";
import { useSetAtom } from "jotai";
import { resetProgressState } from "@/context/resetState";
import { loginProgressState } from "@/context/homeState";

export default function LoginHeader() {
  const { theme, toggleTheme } = useTheme();
  const pathName = usePathname();
  const setResetState = useSetAtom(resetProgressState);
  const setLoginState = useSetAtom(loginProgressState);

  const handleResetState = () => {
    setResetState(1);
    setLoginState(1);
  };

  return (
    <div className="flex items-center justify-between px-6 py-2 border-b border-gray-400 border-opacity-40">
      {/* Logo */}
      <div className="flex items-center">
        <Image src={logo2} alt="Logo" className="w-fit h-[60px] object-cover" />
      </div>

      {pathName === "/reset" ? (
        <div className="flex items-center space-x-5">
          <p className="text-normal font-light 2xl:text-sm">
            Just remember it?
          </p>
          <Link
            href="/"
            onClick={handleResetState}
            className="relative 2xl:text-sm text-black dark:text-white hover:underline"
          >
            Sign in
          </Link>
          <MdOutlineNavigateNext className="text-primary text-[24px] 2xl:text-[20px]" />
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-400 dark:border-white bg-gray-200 dark:bg-gray-900 transition-all duration-300 hover:bg-gray-300 dark:hover:bg-gray-700"
          >
            {theme === "dark" ? (
              <BsSunFill className="text-yellow-500 text-xl" />
            ) : (
              <BsMoonStarsFill className="text-gray-800 text-xl" />
            )}
          </button>
        </div>
      ) : (
        <div className="flex items-center space-x-5">
          <p className="text-normal font-light 2xl:text-sm">
            Forget your account?
          </p>
          <Link
            href="/reset"
            onClick={handleResetState}
            className="relative 2xl:text-sm text-black dark:text-white hover:underline"
          >
            Reset account
          </Link>
          <MdOutlineNavigateNext className="text-primary text-[24px] 2xl:text-[20px]" />
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-400 dark:border-white bg-gray-200 dark:bg-gray-900 transition-all duration-300 hover:bg-gray-300 dark:hover:bg-gray-700"
          >
            {theme === "dark" ? (
              <BsSunFill className="text-yellow-500 text-xl" />
            ) : (
              <BsMoonStarsFill className="text-gray-800 text-xl" />
            )}
          </button>
        </div>
      )}
    </div>
  );
}
