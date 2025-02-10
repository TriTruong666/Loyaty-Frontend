import Image from "next/image";
import Link from "next/link";
import { MdOutlineNavigateNext } from "react-icons/md";
import logo2 from "@/static/logo-dark2.png";
export default function LoginHeader() {
  return (
    <div className="flex items-center justify-between px-6 py-2 border-b border-gray-400 border-opacity-40">
      <div className="flex items-center">
        <Image src={logo2} alt="" className="w-[120px] h-[60px] object-cover" />
      </div>
      <div className="flex items-center space-x-3">
        <p className="text-normal font-light 2xl:text-sm">
          Forget your account?
        </p>
        <Link
          href="/reset"
          className="relative 2xl:text-sm text-black dark:text-white before:absolute before:bottom-0 before:right-0 before:w-0 before:h-[2px] before:bg-black dark:before:bg-white before:transition-all before:duration-300 hover:before:w-full hover:before:left-0"
        >
          Reset account
        </Link>

        <MdOutlineNavigateNext className="text-primary text-[24px] 2xl:text-[20px]" />
      </div>
    </div>
  );
}
