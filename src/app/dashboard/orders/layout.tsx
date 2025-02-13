"use client";
import { OrderStatusMenu } from "@/components/order-status-menu";

export default function OrderDashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col font-open py-[20px]">
      <div className="flex items-center justify-between px-[40px]">
        <div className="flex flex-col">
          <p className="text-[28px] font-light select-none">Đơn Hàng</p>
        </div>
      </div>

      <OrderStatusMenu />
      <div className="">{children}</div>
    </div>
  );
}
