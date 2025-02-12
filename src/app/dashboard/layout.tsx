"use client";
import { Toaster } from "react-hot-toast";
import AddAccountModal from "@/components/add-account-modal";
import DashboardHeader from "@/components/dashboard-header";
import DashboardSidebar from "@/components/sidebar-dashboard";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-screen relative">
      <Toaster position="bottom-right" reverseOrder={false} />
      <AddAccountModal />
      <DashboardSidebar />
      <div className="flex flex-col w-[calc(100vw-270px)]">
        <DashboardHeader />
        <div>{children}</div>
      </div>
    </div>
  );
}
