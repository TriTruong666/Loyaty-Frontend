"use client";

import Lottie from "lottie-react";
import loadingAnimation from "@/static/loading/loading2.json";

export default function DashboardLoading() {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)] bg-black">
      <Lottie
        animationData={loadingAnimation}
        loop={true}
        className="w-[150px] h-[150px]"
      />
    </div>
  );
}
