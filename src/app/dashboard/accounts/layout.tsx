"use client";
import { AccountRoleMenu } from "@/components/account-role-menu";
import { HiPlusSmall } from "react-icons/hi2";
import { PiExport } from "react-icons/pi";

export default function AccountDashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col font-open py-[20px]">
      <div className="flex items-center justify-between px-[40px]">
        <div className="flex flex-col">
          <p className="text-[28px] font-light select-none">ACCOUNTS</p>
          <p className="text-sm text-normal">
            Manage Loyalty's members and editor permission here.
          </p>
        </div>
        <div className="flex items-center gap-x-3">
          {/* add button */}
          <div className="flex items-center border border-gray-400-40 px-4 py-[6px] rounded-md cursor-pointer gap-x-2">
            <PiExport className="text-[16px] text-foreground" />
            <p className="text-[12px] text-foreground">Export CSV</p>
          </div>
          <div className="flex items-center bg-foreground border border-foreground px-4 py-[6px] rounded-md cursor-pointer gap-x-2 transition-all duration-200 hover:bg-foreground hover:border-transparent group">
            <HiPlusSmall className="text-[16px] text-background" />
            <p className="text-[12px] text-background">New Account</p>
          </div>
        </div>
      </div>

      <AccountRoleMenu />
      <div className="">{children}</div>
    </div>
  );
}
