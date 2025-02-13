"use client";

import Lottie from "lottie-react";
import loadingAnimation from "@/static/loading/loading3.json";

export default function LoadingTable() {
  return (
    <div className="flex flex-col items-center justify-center h-[550px] bg-black">
      <Lottie
        animationData={loadingAnimation}
        loop={true}
        className="w-[150px] h-[150px]"
      />
    </div>
  );
}
