"use client";
import { Toaster } from "react-hot-toast";
import AddAccountModal from "@/components/add-account-modal";
import DashboardHeader from "@/components/dashboard-header";
import DashboardSidebar from "@/components/sidebar-dashboard";
import AddProductModal from "@/components/add-product-modal";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-screen relative overflow-hidden">
      <Toaster position="bottom-right" reverseOrder={false} />
      <AddProductModal />
      <AddAccountModal />
      <DashboardSidebar />
      {/* Allow scrolling inside the content area */}
      <div className="flex flex-col w-[calc(100vw-270px)] h-screen">
        <DashboardHeader />
        <div className="flex-1 overflow-auto">{children}</div>
      </div>
    </div>
  );
}
