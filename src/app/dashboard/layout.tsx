"use client";
import { Toaster } from "react-hot-toast";
import AddAccountModal from "@/components/add-account-modal";
import DashboardHeader from "@/components/dashboard-header";
import DashboardSidebar from "@/components/sidebar-dashboard";
import AddProductModal from "@/components/add-product-modal";
import { Suspense } from "react";
import DashboardLoading from "./loading";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-screen relative overflow-hidden">
      <Toaster position="top-center" reverseOrder={false} />
      <AddProductModal />
      <AddAccountModal />
      <DashboardSidebar />
      <div className="flex flex-col w-[calc(100vw-270px)] h-screen">
        <DashboardHeader />
        <Suspense fallback={<DashboardLoading />}>
          <div className="flex-1 overflow-auto">{children}</div>
        </Suspense>
      </div>
    </div>
  );
}
