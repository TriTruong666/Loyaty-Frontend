"use client";
import { ProductStatusMenu } from "@/components/products-status-menu";
import { HiPlusSmall } from "react-icons/hi2";

export default function AccountDashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col font-open py-[20px]">
      <div className="flex items-center justify-between px-[40px]">
        <div className="flex flex-col">
          <p className="text-[28px] font-light select-none">Sản Phẩm</p>
        </div>
        <div className="flex items-center gap-x-3">
          {/* add button */}
          <div className="flex items-center bg-foreground border border-foreground px-4 py-[6px] rounded-md cursor-pointer gap-x-2 transition-all duration-200 hover:bg-foreground hover:border-transparent group">
            <HiPlusSmall className="text-[16px] text-background" />
            <p className="text-[12px] text-background">Tạo Sản Phẩm Mới</p>
          </div>
        </div>
      </div>

      <ProductStatusMenu />
      <div className="">{children}</div>
    </div>
  );
}
