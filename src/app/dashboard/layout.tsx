import DashboardHeader from "@/components/dashboard-header";
import DashboardSidebar from "@/components/sidebar-dashboard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin - Dashboard",
  description: "Admin dashboard for managing Loyalty platform.",
};

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <DashboardSidebar />
      <div className="flex flex-col w-[calc(100vw-270px)]">
        <DashboardHeader />
        <div className="">{children}</div>
      </div>
    </div>
  );
}
